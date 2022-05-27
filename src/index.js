import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'tw-elements';
import App from "./App";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
