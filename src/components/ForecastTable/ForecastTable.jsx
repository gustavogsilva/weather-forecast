import React from "react";
import TableInner from './TableInner';
import Loading from './Loading';
import TableTitle from './TableTitle';
import { useStateContext } from "../../state/StateContext";

// ForecastTable Component
function ForecastTable() {

  const [{ loading }] = useStateContext();

  return (
    <div className="forecast-table mx-auto my-4 border rounded">
      <h2 className="bg-light border-bottom m-0 p-3">
        {loading ? 'Loading...' : <TableTitle />}
      </h2>
      <table className="table">
        {loading ? <Loading /> : <TableInner />}
      </table>
    </div>
  );
}

export default ForecastTable;
