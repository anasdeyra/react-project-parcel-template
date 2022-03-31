import { render } from "react-dom";
import "dotenv/config";
import App from "./app";

function Providers({ children }) {
  return <>{children}</>;
}

render(<Providers children={<App />} />, document.getElementById("app"));
