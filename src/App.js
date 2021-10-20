import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Contact from './Pages/Contact/Contact';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Register/Registration';
import Doctors from './Pages/Doctors/Doctors';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>

            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>



            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Registration></Registration>
            </Route>
            <PrivateRoute path="/services/:servicesId">
              <Services></Services>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;


// <p className="mt-2">
//         <NavLink className="text-decoration-none" to="/signup">
//           Need an Account? Please Sign up!
//         </NavLink>
//       </p>