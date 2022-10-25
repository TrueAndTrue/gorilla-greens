// Component Imports

import { Navbar } from './Components/Navbar/index.jsx';
import { Homepage } from './views/Homepage';
import { Products } from './views/Products';
import { About } from './views/About';
import { Contact } from './views/Contact';
import { Admin } from './views/Admin/index'

// Stripe Imports 

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

// Redux Imports

import { Provider } from 'react-redux'
import store from './state/store';

// Misc Imports 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

const stripePromise = loadStripe(process.env.REACT_APP_KEY);

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      },
      secondary: {
        main: '#000000'
      }

    }
  })


  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Elements stripe={stripePromise}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/admin" element={<Admin />}/>
              <Route path="/products" element={<Products />}/>
              <Route path="/contact" element={<Contact />}/>
            </Routes>
          </Elements>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
