import React from 'react';
import M from "materialize-css";



const AboutPage = () => (
  <React.Fragment>
  <div className="row">
    <div className="col s12">
      <ul className="tabs">
        <li className="tab col s6"><a href="#test1">Test 1</a></li>
        <li className="tab col s6"><a className="active" href="#test2">Test 2</a></li>
      </ul>
    </div>
    <div id="test1" className="col s12">Test 1</div>
    <div id="test2" className="col s12">Test 2</div>
  </div>
</React.Fragment>
);

export default AboutPage;
