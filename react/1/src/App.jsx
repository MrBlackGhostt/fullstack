// Create the App component
import React from "react";
import Header from "./components/Header";
import Text from "./pages/Text";
import DateTime from "./pages/DateTime";
import Number from "./pages/Number";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import LanguageProvider from "./context/Language";
const Layout = () => {
  return (
    <>
      <div
        className="container"
        style={{ fontFamily: "Nunito San", marginLeft: 10 }}>
        <Header />
        <Outlet />
      </div>
    </>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="text" element={<Text name="MrDevGhost" />} />
            <Route path="no" element={<Number no={1} amount={100} />} />
            <Route path="time" element={<DateTime />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
