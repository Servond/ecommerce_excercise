import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from '@chakra-ui/react';

// const Auth = lazy(() => import('./components/Auth'));
// const Navbar = lazy(() => import('./components/Navbar'));
// const Home = lazy(() => import('./pages/Home'));
// const Cart = lazy(() => import('./pages/Cart'));
// const HOC = lazy(() => import('./Materi/HOC'));
// const LazyLoad = lazy(() => import('./Materi/LazyLoad'));
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Auth from "./components/Auth";
import HOC from "./Materi/HOC";

function App() {
  return (
    <Box>
        {/* <Suspense fallback={<Box>Loading...</Box>}> */}
        <Auth>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            {/* <Route exact path="/lazy-load" element={<LazyLoad  />} /> */}
            <Route exact path="/HOC" element={<HOC />} />
          </Routes>
        </Auth>
        {/* </Suspense> */}
    </Box>
  );
}

export default App;

