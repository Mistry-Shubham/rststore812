import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Heading, Grid } from '@chakra-ui/react';
import { listProducts } from '../actions/productActions';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <>
      <Heading as='h2' mb='8' fontSize='3xl'>
        Latest Products
      </Heading>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type='error'>{error}</Message>
      ) : (
        <Grid templateColumns='repeat(4, 1fr)' gap='8'>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default HomeScreen;
