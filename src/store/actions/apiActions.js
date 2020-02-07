export const apiAction = action => {
  const apiActionTemplate = {
    type: "",
    endpoint: null,
    verb: "GET",
    payload: null,
    headers: []
  };

  return {
    API_ACTION: Object.assign({}, apiActionTemplate, action)
  };
};
