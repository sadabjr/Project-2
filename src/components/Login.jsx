import { Button, Container, Heading, Input, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.x1'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcome Back</Heading>

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

          <Button
          variant={'link'}
          alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
            </Button>

            <Button colorScheme={'purple'} type={'submit'}>Log In</Button>

            <Text textAlign={'right'}>New User?{' '}</Text>
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
