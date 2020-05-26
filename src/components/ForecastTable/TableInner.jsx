import React, { Fragment } from "react";
import { useStateContext } from "../../state/StateContext";

export default function TableInner() {
  const [{ forecastTable }] = useStateContext();

  return (
    <Fragment>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Current</th>
          <th scope="col">{forecastTable[1].time}</th>
          <th scope="col">{forecastTable[2].time}</th>
          <th scope="col">{forecastTable[3].time}</th>
          <th scope="col">{forecastTable[4].time}</th>
          <th scope="col">{forecastTable[5].time}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Temperature</th>
          <td>{forecastTable[0].temperature}</td>
          <td>{forecastTable[1].temperature}</td>
          <td>{forecastTable[2].temperature}</td>
          <td>{forecastTable[3].temperature}</td>
          <td>{forecastTable[4].temperature}</td>
          <td>{forecastTable[5].temperature}</td>
        </tr>
      </tbody>
    </Fragment>
  );
}
