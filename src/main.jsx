import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer
        className='toast'
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        // pauseOnHover
        draggable
      />
    </Provider>
  </BrowserRouter>
);
