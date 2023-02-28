import "lib/date-config";
import ReactDOM from "react-dom";
import "styles/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AppProviders from "./AppProviders";

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);

serviceWorker.unregister();
