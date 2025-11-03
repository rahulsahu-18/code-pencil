import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {store} from "./redux/store.ts";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  
  <BrowserRouter>
   <Toaster position="top-center" theme="dark" />
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
