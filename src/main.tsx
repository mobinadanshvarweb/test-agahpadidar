import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Layout />
  </Provider>
);
