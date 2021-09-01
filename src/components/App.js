import React, { useState } from "react";
import Header from "./ui/Header";
import {ThemeProvider} from '@material-ui/styles'
import theme from './ui/Theme'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomerSoftware from "./CustomerSoftware";
import Mobileapp from "./Mobileapp";
import Website from "./Website";
import Revolution from "./Revolution";
import Aboutus from "./Aboutus";
import Contact from "./Contact";


function App() {
    const [value, setValue] = useState(0);
    const [selectedindex, setselectedindex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header
          value={value}
          setValue={setValue}
          selectedindex={selectedindex}
          setselectedindex={setselectedindex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setValue={setValue}
                setselectedindex={setselectedindex}
              />
            )}
          />
          <Route
            exact
            path="/services"
            render={(props) => (
              <Services
                {...props}
                setValue={setValue}
                setselectedindex={setselectedindex}
              />
            )}
          />
          <Route
            exact
            path="/websites"
            render={(props) => (
              <Website
                {...props}
                setValue={setValue}
                setselectedindex={setselectedindex}
              />
            )}
          />
          <Route
            exact
            path="/customsoftware"
            render={(props) => (
              <CustomerSoftware
                {...props}
                setValue={setValue}
                setselectedindex={setselectedindex}
              />
            )}
          />
          <Route
            exact
            path="/mobileapps"
            render={(props) => (
              <Mobileapp
                {...props}
                setValue={setValue}
                setselectedindex={setselectedindex}
              />
            )}
          />

          <Route
            exact
            path="/revolution"
            component={(props) => (
              <Revolution
                {...props}
                setValue={setValue}
                setselectedindex={setselectedindex}
              />
            )}
          />
          <Route
            exact
            path="/about"
            component={(props) => (
              <Aboutus
                {...props}
                setValue={setValue}
                setselectedindex={setselectedindex}
              />
            )}
          />
          <Route
            exact
            path="/contact"
            component={(props) => (
              <Contact
                {...props}
                setValue={setValue}
                setselectedindex={setselectedindex}
              />
            )}
          />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
        </Switch>
        <Footer setValue={setValue} setselectedindex={setselectedindex} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
