  import React from "react";
  import Login from './components/Login/Login'
  import Register from "./components/Register/Register";
  import Header from "./components/Header/Header";
  import NotFound from "./components/NotFound/NotFound";
  import { Routes, Route } from "react-router-dom";
  import Home from "./components/Home/Home";
  import About from "./components/About/About";
  import Contact from "./components/Contact/Contact";
  import PageLayouts from "./PageLayouts/PageLayouts";
  import PrivateRoute from "./Routes/PrivateRoute/PrivateRoute";
  import RedirectIfAuthenticated from "./Routes/RedirectIfAuthenticated/RedirectIfAuthenticated";
  import './GlobalStyles/GlobalStyles.css'

  function App() {
    console.log(" App Page is rendring");
    return (
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<PageLayouts />}>
         <Route path="/" element={<Home showCards={true} />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<RedirectIfAuthenticated />}>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
    );
  }

  export default App;
