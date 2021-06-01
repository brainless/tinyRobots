import { BrowserRouter, Switch, Route } from "react-router-dom";

import Browser from "./components/Browser";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Browser />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
