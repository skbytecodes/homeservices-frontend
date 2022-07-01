import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Designs from "./components/Designs";
import Reviews from "./components/Reviews";
import Blog from "./components/Blog";
import Login from "./components/Login";
import Main from "./components/Main";
import Services from "./components/Services";
import SelectedService from "./components/SelectedService";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/designs">
            <Header />
            <Designs />
          </Route>

          <Route path="/reviews">
            <Header />
            <Reviews />
            <Footer />
          </Route>

          <Route path="/blogs">
            <Header />
            <Blog />
          </Route>

          <Route path="/home">
            <Header />
            <Main />
            <Services />
            <ReviewsSection />
            <Footer />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/service">
            <Header />
            <SelectedService />
            <Footer />
          </Route>


          <Route path="/">
            <Header />
            <Main />
            <Services />
            <ReviewsSection />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
