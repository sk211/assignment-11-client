import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import MyDeshbord from './components/Dashboard/MyDashbord/MyDeshbord';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivetRouter from './components/PrivetRouter/PrivetRouter';
import Review from './components/Review/Review';
import Services from './components/Services/Services';
import AuthProvider from './Context/AuthProvider';


function App() {
  const  [loading, setLoading]  = useState(false) 

   useEffect(() =>{
     setLoading(true)
     setTimeout(()=>{
       setLoading(false)
     }, 3000)
   }, [])

  return (
    <div className="App">
      {loading ? <div className="AppNew">      <ClimbingBoxLoader  id="AppNew"
      color={"#7ED321"} loading={loading}  size={15} />
      </div>
      :
      <AuthProvider>
      <BrowserRouter>
      <Header />
      <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path ='/about'>
        <About></About>
      </Route>
      <Route  path="/home">
        <Home></Home>
      </Route>
      <Route  path="/login">
        <Login></Login>
      </Route>
      <PrivetRouter exact path="/package">
        <Services></Services>
      </PrivetRouter>
      
      <Route  path="/contact">
        <Contact></Contact>
      </Route>
      <PrivetRouter  path="/OrderPlaced/:bookingId">
      <PlaceOrder></PlaceOrder>

      </PrivetRouter>
      <PrivetRouter  path="/review">
      <Review></Review>

      </PrivetRouter>
      <PrivetRouter  path="/dashboard">
        <MyDeshbord></MyDeshbord>
      </PrivetRouter>
      <PrivetRouter  path="/OrderPlaced">
        <PlaceOrder></PlaceOrder>
      </PrivetRouter>

      <Route exact path="*">
        <NotFound></NotFound>
      </Route>
      
      </Switch>
      <Footer />
      </BrowserRouter>
      </AuthProvider>
    }
      
    </div>
  );
}

export default App;
