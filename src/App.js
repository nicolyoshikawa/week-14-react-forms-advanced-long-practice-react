import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SampleSurvey from "./components/SampleSurvey";
import SensoryPreferencesSurvey from "./components/SensoryPreferencesSurvey";
import { NavLink } from "react-router-dom/cjs/react-router-dom";


function App() {
  return (
    <>
      <h1>a/A Forms</h1>
      <nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/sample-survey">Sample Survey</NavLink>
        </li>
        <li>
          <NavLink to="/sensory-preferences-survery">Sensory Preferences Survey</NavLink>
        </li>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sample-survey">
          <SampleSurvey />
        </Route>
        <Route path="/sensory-preferences-survery">
          <SensoryPreferencesSurvey />
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>



    </>

  );
}

export default App;
