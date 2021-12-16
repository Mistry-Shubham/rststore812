import { Flex } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Flex
        as='main'
        direction='column'
        mt='72px'
        minH='xl'
        py='6'
        px='6'
        bgColor='gray.200'
      >
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/product/:id' element={<ProductScreen />} />
          <Route path='/cart/:id' element={<CartScreen />} />
          <Route path='/cart/' element={<CartScreen />} />
        </Routes>
      </Flex>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
