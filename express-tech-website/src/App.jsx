import React from "react";
import { createBrowserRouter , Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Rootlayout from "./Layouts/RootLayout";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rootlayout />}>
      <Route index element={<HomePage />} />
      <Route path="aboutUs" element={<AboutUsPage />} />
      <Route path='*' element={<NotFoundPage />} /> 
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
