import React, { useState } from "react";
import { useStateContext } from "../state/StateContext";
import { updateTable, loading } from "../state/StateActions";

// LocationForm Component
function LocationForm() {
  const [locationInput, setLocationInput] = useState("");
  const [, dispatch] = useStateContext();

  // Function that fetches a new temperature forecast and updates the table
  async function getForecast(e) {
    e.preventDefault();
    dispatch(loading(true));

    try {
      // Adjusts input format to api requirements
      const locationReq = locationInput.replace(" ", "+");

      // Fetch the location in the Google API
      let response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${locationReq}&key=AIzaSyD6rKc6URJVJv5GNgNydJxd19jitau6pg0`
      );
      const locationRes = await response.json();

      // Filters the result to extract the city and state from the location
      const filteredLocation = locationRes.results[0].address_components.filter(
        (component) => {
          return (
            component.types.includes("administrative_area_level_2") ||
            component.types.includes("administrative_area_level_1")
          );
        }
      );

      // Creates the constants and variables with the information obtained from the API
      const location = {
        city: filteredLocation[0].long_name,
        state: filteredLocation[1].long_name.replace("State of ", ""),
      };
      const lat = locationRes.results[0].geometry.location.lat;
      const lng = locationRes.results[0].geometry.location.lng;

      // Fetch the temperature forecast in the OpenWeather API for the location entered
      response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=99a93a4390907ebb53ea070c0768ecc0&units=metric`
      );
      const forecast = await response.json();

      // Creates an array of objects containing the next six hours forecast
      const hourlyForecast = forecast.hourly.slice(0, 6).map((hourForecast) => {
        let date = new Date(hourForecast.dt * 1000);
        return {
          time: date.getHours() + ":00",
          temperature: Math.trunc(hourForecast.temp) + "° C",
        };
      });

      // Update the state of the forecastTable with the next six hours forecast
      dispatch(updateTable(hourlyForecast, location)); 
      
    } catch (err) {
      console.error(err);
      alert("Error when trying to query the servers. Make sure you typed the location correctly and try again.");
      dispatch(loading(false));
    }
  }

  return (
    <div className="location-form mx-auto my-5 border rounded">
      <h2 className="bg-light border-bottom m-0 p-3">
        Find Temperature For Location
      </h2>
      <form onSubmit={getForecast} className="p-4">
        <div className="form-group">
          <label htmlFor="LocationForm">Location</label>
          <input
            type="text"
            className="form-control"
            id="LocationForm"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
          />
          <small className="form-text text-muted">
            You can enter any type of content, such as name of the city or
            zipcode
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Show Temperature
        </button>
      </form>
    </div>
  );
}

export default LocationForm;
