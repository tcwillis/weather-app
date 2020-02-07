import { apiMiddleware } from "./index";
import Config from "../../app/config";
import mockResponse from "../../../mocks/weatherMock.json";

describe("apiMiddleware", () => {
  const nextStub = jest.fn();

  afterEach(() => {
    nextStub.mockClear();
  });

  it("should dispatch the next action", () => {
    const action = { type: "NEXT_ACTION" };
    apiMiddleware()(nextStub)(action);

    expect(nextStub).toHaveBeenCalledWith(action);
  });

  it("should call fetch if the action is API_ACTION and dispatch the RECEIVED action", async () => {
    const mockFetchPromise = Promise.resolve({
      json: () => Promise.resolve(mockResponse)
    });

    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

    const action = {
      API_ACTION: {
        type: "REQUEST",
        endpoint: "/endpoint",
        verb: "GET",
        headers: "application/json"
      }
    };
    const expectedActions = [
      {
        type: "REQUEST_REQUESTED"
      },
      {
        type: "REQUEST_RECEIVED",
        payload: mockResponse
      }
    ];

    await apiMiddleware()(nextStub)(action);

    expect(nextStub).toHaveBeenCalledWith(expectedActions[0]);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch.mock.calls[0][0]).toEqual(
      Config.baseApiUrl + "/endpoint"
    );
    expect(nextStub).toHaveBeenCalledWith(expectedActions[1]);

    global.fetch.mockClear();
  });

  it("should call fetch if the action is API_ACTION and dispatch the FAILED action", async () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementation(() => Promise.reject({ error: "Failed" }));

    const action = {
      API_ACTION: {
        type: "REQUEST",
        endpoint: "/endpoint",
        verb: "GET",
        headers: "application/json"
      }
    };
    const expectedActions = [
      {
        type: "REQUEST_REQUESTED"
      },
      {
        type: "REQUEST_FAILED",
        payload: { error: "Failed" }
      }
    ];

    await apiMiddleware()(nextStub)(action);

    expect(nextStub).toHaveBeenCalledWith(expectedActions[0]);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(nextStub).toHaveBeenCalledWith(expectedActions[1]);

    global.fetch.mockClear();
  });
});
