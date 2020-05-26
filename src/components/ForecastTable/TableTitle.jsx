import React, { Fragment } from 'react'
import { useStateContext } from "../../state/StateContext";

export default function TableTitle() {
  
  const [{ forecastLocation }] = useStateContext();
  const { city, state } = forecastLocation;

  return (
    <Fragment>
      Forecast For <i>{city} - {state}</i>
    </Fragment>
  )
}
