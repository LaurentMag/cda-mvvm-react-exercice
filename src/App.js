import {VoyageModel} from "./model/VoyageModel";

const {Fragment} = require("react");

function App() {
  return (
    <Fragment>
      <h1>✈️ Mes voyages ✈️</h1>
      <VoyageModel />
    </Fragment>
  );
}

export default App;
