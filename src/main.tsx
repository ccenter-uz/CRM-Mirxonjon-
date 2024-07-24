import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Spin } from "antd";
import "react-toastify/dist/ReactToastify.min.css";
import "src/app/style/global.css";
import { Providers } from "src/app/providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <Spin
          className="d-flex justify-center align-center"
          style={{ height: "100vh" }}
        />
      }
    >
      <Providers />
    </Suspense>
  </React.StrictMode>
);
