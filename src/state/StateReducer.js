import { UPDATE_TABLE, LOADING } from "./StateActions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return {
        ...state,
        forecastLocation: action.location,
        forecastTable: action.hourlyForecast,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: action.boolean,
      };
    default:
      return state;
  }
};
