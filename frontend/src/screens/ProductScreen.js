import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useParams } from 'react-router-dom';
import {
  Flex,
  Grid,
  Image,
  Heading,
  Text,
  Button,
  Divider,
} from '@chakra-ui/react';
import Rating from '../components/Rating';
import { listProductDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <Flex mb='5'>
        <Button as={RouterLink} to='/' colorScheme='gray'>
          Go Back
        </Button>
      </Flex>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message type='error'>{error}</Message>
      ) : (
        <Grid templateColumns='5fr 4fr 3fr' gap='10'>
          {/* Column 1 */}
          <Image src={product.image} alt={product.name} borderRadius='md' />

          {/* Column 2 */}
          <Flex direction='column'>
            <Heading as='h6' fontSize='base' color='gray.500'>
              {product.brand}
            </Heading>
            <Heading as='h2' fontSize='4xl' mb='2'>
              {product.name}
            </Heading>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            <Heading
              as='h5'
              my='5'
              fontSize='4xl'
              fontWeight='bold'
              color='teal.600'
            >
              ₹{product.price}
            </Heading>
            <Text>{product.description}</Text>
          </Flex>

          {/* Column 3 */}
          <Flex direction='column'>
            <Flex justifyContent='space-between' py='2'>
              <Text>Price:</Text>
              <Text fontWeight='bold'>₹{product.price}</Text>
            </Flex>

            <Flex justifyContent='space-between' py='2'>
              <Text>Status:</Text>
              <Text fontWeight='bold'>
                {product.countInStock > 0 ? 'In Stock' : 'Not Available'}
              </Text>
            </Flex>

            <Divider />

            <Button
              bgColor='gray.800'
              textTransform='uppercase'
              letterSpacing='wide'
              colorScheme='teal'
              my='2'
              disabled={product.countInStock === 0}
            >
              Add to Cart
            </Button>
          </Flex>
        </Grid>
      )}
    </>
  );
};

export default ProductScreen;
