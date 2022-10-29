import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.x1'} h={'130vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading textAlign={'center'}>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />

          <Input
            placeholder={'Name'}
            type={'text'}
            required
            focusColorBorder={'purple.500'}
          />

          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusColorBorder={'purple.500'}
          />

          <Input
            placeholder={'Password'}
            type={'password'}
            required
            focusColorBorder={'purple.500'}
          />

          <Button colorScheme={'purple'} type={'submit'}>
            Sign Up
          </Button>

          <Text textAlign={'right'}>Already Signed Up?{' '} </Text>
          <Button variant={'link'} colorScheme={'purple'}>
            <Link to={'/login'}>Log In</Link>
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
