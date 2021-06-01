import { BrowserRouter, Switch, Route } from "react-router-dom";

import Manager from "components/Manager";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Manager />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
