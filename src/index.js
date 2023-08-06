// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
// import Service from './Pages/Service/Service';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />
//   },
//   {
//     path: "/service",
//     element: <Service />
//   }
// ])

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={router} />
// );

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "./components/Provider/AuthProviders";
import 'bootstrap/dist/css/bootstrap.min.css';
// create query client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
          <Toaster />
        </AuthProvider>

      </QueryClientProvider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
