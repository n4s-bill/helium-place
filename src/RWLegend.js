import React from "react";

export default class RWLegend extends React.Component {
  render() {
    return (
      <div className="rwlegend">
        <h4>Reward Scale</h4>
        <div className="key">
          <span style={{ background: "#1C1AAF" }}></span>&nbsp; 1.0
        </div>
        <div className="key">
          <span style={{ background: "#0066E7" }}></span>&nbsp; 0.9
        </div>
        <div className="key">
          <span style={{ background: "#00FFFF" }}></span>&nbsp; 0.8
        </div>
        <div className="key">
          <span style={{ background: '#FFDA13' }}></span>&nbsp; 0.5
        </div>
        <div className="key">
          <span style={{ background: '#F18009' }}></span>&nbsp; 0.3
        </div>
        <div className="key">
          <span style={{ background: '#D4070F' }}></span>&nbsp; 0.1
        </div>
      </div>
    )
  }
};
