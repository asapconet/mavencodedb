import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "app/app";
import { ChakraProvider ,defaultSystem} from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider    value={defaultSystem}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
