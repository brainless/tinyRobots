import { React } from "/deps.ts";
// import { BrowserRouter, Switch, Route, Link } from "/deps.ts";

import Browser from "/components/Browser.tsx";

function App() {
  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route path="/" exact>
    //       <div>
    //         Hello! <Link to="/robots">Find a Robot!</Link>
    //       </div>
    //     </Route>

    //     <Route path="/robots" exact>
    //       <Browser />
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
    <Browser />
  );
}

export default App;
