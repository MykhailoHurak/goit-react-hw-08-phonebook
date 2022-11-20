import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { fetchCurrentUser } from "redux/auth/auth-operation";

import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";
import NotFound from "pages/NotFound";

import ContactsList from "./ContactsList";
import Navigation from "./Navigation/Navigation";
import RoutePrivate from './RoutePrivate';
import RouteRestricted from './RouteRestricted';


const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="login" element={<Login />} /> */}
        {/* <Route path="register" element={<Register />} /> */}
         <Route
          path="/register"
          element={
            <RouteRestricted redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RouteRestricted redirectTo="/contacts" component={<Login />} />
          }
        />
         <Route
            path="/contacts"
            element={
            <RoutePrivate redirectTo="/login" component={<ContactsList />} />
            }
          />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
};


export default App;