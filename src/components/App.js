import React, { useState } from "react";
import Header from "./ui/Header";
import {ThemeProvider} from '@material-ui/styles'
import theme from './ui/Theme'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomerSoftware from "./CustomerSoftware";
import Mobileapp from "./Mobileapp";
import Website from "./Website";


function App() {
    const [value, setValue] = useState(0);
    const [selectedindex, setselectedindex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
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
          <Route exact path="/websites" component={() => <div>websites</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>revolution</div>}
          />
          <Route exact path="/about" component={() => <div>about</div>} />
          <Route exact path="/contact" component={() => <div>contact</div>} />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
        </Switch>
        <Footer setValue={setValue} setselectedindex={setselectedindex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
