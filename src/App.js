import { Routes, Route } from "react-router-dom";
import { Box } from '@chakra-ui/react';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Box>
  );
}

export default App;

