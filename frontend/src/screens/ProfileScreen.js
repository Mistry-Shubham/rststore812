import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Link,
  Spacer,
  Grid,
} from '@chakra-ui/react';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { getUserDetails } from '../actions/userActions';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    } else {
      if (!user.name) {
        dispatch(getUserDetails());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [navigate, userInfo, user, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      // DISPATCH UPDATE PROFILE
    }
  };

  return (
    <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} py='5' gap='10'>
      <Flex w='full' alignItems='center' justifyContent='center' py='5'>
        <FormContainer>
          <Heading as='h1' mb='8' fontSize='3xl'>
            User Profile
          </Heading>

          {error && <Message type='error'>{error}</Message>}
          {message && <Message type='error'>{message}</Message>}

          <form onSubmit={submitHandler}>
            <FormControl id='name'>
              <FormLabel>Name</FormLabel>
              <Input
                type='text'
                placeholder='Enter full name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <Spacer h='3' />

            <FormControl id='email'>
              <FormLabel>Email</FormLabel>
              <Input
                type='email'
                placeholder='Enter email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <Spacer h='3' />

            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Spacer h='3' />

            <FormControl id='confirmPassword'>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type='password'
                placeholder='Enter password again'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormControl>

            <Button type='submit' isLoading={loading} mt='4' colorScheme='teal'>
              Update
            </Button>
          </form>
        </FormContainer>
      </Flex>

      <Flex direction='column'>
        <Heading as='h2'>My Orders</Heading>
      </Flex>
    </Grid>
  );
};

export default ProfileScreen;
