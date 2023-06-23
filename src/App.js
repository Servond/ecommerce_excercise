import { Routes, Route } from "react-router-dom";
import { Box } from '@chakra-ui/react';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Auth from "./components/Auth";

function App() {
  return (
    <Box>
      <Auth>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Auth>
    </Box>
  );
}

export default App;

