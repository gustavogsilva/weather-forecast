export const UPDATE_TABLE = "UPDATE_TABLE";
export const LOADING = "LOADING";

export function updateTable(hourlyForecast, location) {
  return { type: UPDATE_TABLE, hourlyForecast, location };
}

export function loading(boolean) {
  return { type: LOADING, boolean };
}
