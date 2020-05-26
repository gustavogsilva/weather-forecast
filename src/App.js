import React from 'react';
import Header from './components/Header';
import LocationForm from './components/LocationForm';
import ForecastTable from './components/ForecastTable/ForecastTable'
import { StateProvider } from './state/StateContext';
import { initialState } from './state/InitialState';
import { reducer } from './state/StateReducer';
import './styles/styles.scss'

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Header />
      <LocationForm />
      <ForecastTable />
    </StateProvider>
  );
}

export default App;
