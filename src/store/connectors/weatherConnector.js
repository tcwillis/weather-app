/* istanbul ignore file */
import { compose } from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeatherIfNeeded } from "../actions/weatherActions";
import lodashGet from "lodash.get";

const mapStateToProps = state => ({
  list: lodashGet(state, "weather.list"),
  isFetching: lodashGet(state, "weather.isFetchingData"),
  error: lodashGet(state, "weather.error")
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchWeatherIfNeeded
    },
    dispatch
  );

export const weatherConnector = compose(
  connect(mapStateToProps, mapDispatchToProps)
);
