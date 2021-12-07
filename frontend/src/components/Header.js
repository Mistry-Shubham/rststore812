import { useState } from 'react';
import { Flex, Heading, Link, Box, Icon } from '@chakra-ui/react';
import { HiShoppingBag, HiUser, HiOutlineMenuAlt3 } from 'react-icons/hi';

const MenuItems = ({ children, url }) => {
  return (
    <Link
      href={url}
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
  const [show, setShow] = useState(false);

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
          <Link href='/' _hover={{ color: 'gray.500', textDecor: 'none' }}>
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
        <MenuItems url='/'>
          <Flex alignItems='center'>
            <Icon as={HiShoppingBag} w='4' h='4' mr='1' />
            Cart
          </Flex>
        </MenuItems>
        <MenuItems url='/'>
          <Flex alignItems='center'>
            <Icon as={HiUser} w='4' h='4' mr='1' />
            Login
          </Flex>
        </MenuItems>
      </Box>
    </Flex>
  );
};

export default Header;
