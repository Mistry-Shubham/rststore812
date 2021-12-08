import { useState, useEffect } from 'react';
import axios from 'axios';
import { Heading, Grid } from '@chakra-ui/react';
import Product from '../components/Product';
// import products from '../products';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductds = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };

    fetchProductds();
  }, []);

  return (
    <>
      <Heading as='h2' mb='8' fontSize='3xl'>
        Latest Products
      </Heading>
      <Grid templateColumns='repeat(4, 1fr)' gap='8'>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </Grid>
    </>
  );
};

export default HomeScreen;
