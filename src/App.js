import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SampleSurvey from "./components/SampleSurvey";
import SensoryPreferencesSurvey from "./components/SensoryPreferencesSurvey";
import Report from "./components/Report"
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import logo from "./_assets/logo.png"
import sample from "./_assets/sample.json"


function App() {
  return (
    <>
    <img src={logo} alt="logo" />
    <h1>Survey Tool</h1>
      <nav>
        <li> <NavLink to="/sample-survey">Sample Survey</NavLink> </li>
        {" "} | {" "}
        <li> <NavLink to="/sensory-preferences-survery">Sensory Preferences Survey</NavLink> </li>
        {" "} | {" "}
        <li> <NavLink to="/report">Report</NavLink> </li>
        {" "} | {" "}
        <li> <NavLink to="/">Home</NavLink> </li>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sample-survey">
          <SampleSurvey sample={sample}/>
          {/* <SampleSurvey/> */}
        </Route>
        <Route path="/sensory-preferences-survery">
          <SensoryPreferencesSurvey />
        </Route>
        <Route path="/report">
          <Report />
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>

    </>

  );
}

export default App;
