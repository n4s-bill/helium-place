//import "mapbox-gl/dist/mapbox-gl.css";
//import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useRef, useState, useCallback, useEffect } from "react";

import Header from "./Header";
import Map from "./Map";
import Sidebar from './Sidebar';
import Legend from "./Legend";
import './Sidebar.css';

let mapstyles = require('./mapstyles.json');

const App = () => {

  const [res6toggle, setRes6Toggle] = useState(localStorage.getItem('res6toggle') === "true"|| false);
  const [res7toggle, setRes7Toggle] = useState(localStorage.getItem('res7toggle') === "true"|| false);
  const [res8toggle, setRes8Toggle] = useState(localStorage.getItem('res8toggle') === "true"|| false);
  const [res9toggle, setRes9Toggle] = useState(localStorage.getItem('res9toggle') === "true"|| false);
  const [res10toggle, setRes10Toggle] = useState(localStorage.getItem('res10toggle') === "true"|| false);
  const [sweetspotToggle, setSweetSpotToggle] = useState(localStorage.getItem('sweetspottoggle') === "true"|| false);
  const [mapstyle, setMapstyle] = useState(localStorage.getItem('mapstyle') || mapstyles.streets);
  const [trackuserToggle, setTrackuserToggle] = useState(false);
  const geocoderContainerRef = useRef();

useEffect(() => {
  localStorage.setItem("mapstyle", mapstyle)
}, [mapstyle]);

useEffect(() => {
  localStorage.setItem("sweetspottoggle", sweetspotToggle)
}, [sweetspotToggle]);

useEffect(() => {
  localStorage.setItem("res6toggle", res6toggle)
}, [res6toggle]);

useEffect(() => {
  localStorage.setItem("res7toggle", res7toggle)
}, [res7toggle]);

useEffect(() => {
  localStorage.setItem("res8toggle", res8toggle)
}, [res8toggle]);

useEffect(() => {
  localStorage.setItem("res9toggle", res9toggle)
}, [res9toggle]);

useEffect(() => {
  localStorage.setItem("res10toggle", res10toggle)
}, [res10toggle]);

const handleSweetspotToggle = useCallback(
  (checked) => {
    setSweetSpotToggle(checked);
    console.log(sweetspotToggle)
  },
  [sweetspotToggle]
);

const handleRes6Toggle = useCallback(
  (checked) => {
    setRes6Toggle(checked);
  },
  []
);

const handleRes7Toggle = useCallback(
  (checked) => {
    setRes7Toggle(checked);
  },
  []
);

const handleRes8Toggle = useCallback(
  (checked) => {
    setRes8Toggle(checked);
  },
  []
);

const handleRes9Toggle = useCallback(
  (checked) => {
    setRes9Toggle(checked);
  },
  []
);

const handleRes10Toggle = useCallback(
  (checked) => {
    setRes10Toggle(checked);
  },
  []
);

const handleMapStyle = useCallback(
  (value) => {
    console.log(value);
    setMapstyle(value.target.value);
  },
  []
);

const handleTrackuserToggle = useCallback(
  (checked) => {
    console.log(checked);
    setTrackuserToggle(checked);
  },
  []
);

return (
  <div className="App" id="outer-container">
    <div id="page-wrap">
      <Header geocoderContainerRef={geocoderContainerRef} >
      </Header>
      <Sidebar
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
        sweetspotToggle={sweetspotToggle}
        handleSweetspotToggle={handleSweetspotToggle}
        res6toggle={res6toggle}
        handleRes6Toggle={handleRes6Toggle}
        res7toggle={res7toggle}
        handleRes7Toggle={handleRes7Toggle}
        res8toggle={res8toggle}
        handleRes8Toggle={handleRes8Toggle}
        res9toggle={res9toggle}
        handleRes9Toggle={handleRes9Toggle}
        res10toggle={res10toggle}
        handleRes10Toggle={handleRes10Toggle}
        handleMapStyle={handleMapStyle}
        mapstyles={mapstyles}
        trackuserToggle={trackuserToggle}
        handleTrackuserToggle={handleTrackuserToggle}
      />
      <Map
        sweetspotToggle={sweetspotToggle}
        res6toggle={res6toggle}
        res7toggle={res7toggle}
        res8toggle={res8toggle}
        res9toggle={res9toggle}
        res10toggle={res10toggle}
        mapstyle={mapstyle}
        geocoderContainerRef={geocoderContainerRef}
        trackuserToggle={trackuserToggle}
      />
      <Legend sweetspotToggle={sweetspotToggle} />
    </div>
  </div>
);
};

export default App;
