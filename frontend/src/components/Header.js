import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Flex,
  Heading,
  Link,
  Box,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { HiShoppingBag, HiUser, HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoChevronDown } from 'react-icons/io5';
import { logout } from '../actions/userActions';

const MenuItems = ({ children, url }) => {
  return (
    <Link
      as={RouterLink}
      to={url}
      mt={{ base: 4, md: 0 }}
      fontSize='sm'
      letterSpacing='wide'
      color='whiteAlpha.600'
      fontWeight='bold'
      textTransform='uppercase'
      mr='5'
      display='block'
      _hover={{ color: 'whiteAlpha.800' }}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [show, setShow] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Flex
      as='header'
      align='center'
      justify='space-between'
      wrap='wrap'
      py='6'
      px='6'
      bgColor='gray.800'
      w='100%'
      top='0'
      zIndex='2'
      pos='fixed'
    >
      <Flex align='center' mr='5'>
        <Heading
          as='h1'
          color='whiteAlpha.800'
          fontWeight='bold'
          size='md'
          letterSpacing='md'
        >
          <Link
            as={RouterLink}
            to='/'
            _hover={{ color: 'gray.500', textDecor: 'none' }}
          >
            RST Store
          </Link>
        </Heading>
      </Flex>

      <Box
        display={{ base: 'block', md: 'none', sm: 'block' }}
        onClick={() => setShow(!show)}
      >
        <Icon as={HiOutlineMenuAlt3} color='white' w='6' h='6' />
        <title>Menu</title>
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems='center'
      >
        <MenuItems url='/cart'>
          <Flex alignItems='center'>
            <Icon as={HiShoppingBag} w='4' h='4' mr='1' />
            Cart
          </Flex>
        </MenuItems>

        {/* Login/Logout views */}
        {userInfo ? (
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<IoChevronDown />}
              _hover={{ textDecoration: 'none', opacity: '0.7' }}
            >
              {userInfo.name}
            </MenuButton>
            <MenuList url='/login'>
              <MenuItem as={RouterLink} to='/profile'>
                Profile
              </MenuItem>
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <MenuItems url='/login'>
            <Flex alignItems='center'>
              <Icon as={HiUser} w='4' h='4' mr='1' />
              Login
            </Flex>
          </MenuItems>
        )}
      </Box>
    </Flex>
  );
};

export default Header;
