import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';


const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '3xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
        textTransform={'uppercase'}
        py="2"
        w={'fit-content'}
        borderBottom={'2px solid'}
        margin="auto">
          Services
        </Heading>

        <Stack
        h="full"
        p={'4'}
        alignItems={"center"}
        direction={['column', 'row']}>
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'}/>

          <Text latterSpacing={'Widest'} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quod cupiditate vero ab maiores atque rem aperiam corrupti, nobis, voluptate voluptatem nostrum quas alias in nesciunt? Consectetur, libero voluptas inventore similique adipisci vitae aliquam velit repellat odio fugiat amet ipsa commodi animi asperiores porro maxime odit hic. Aperiam autem atque perferendis animi accusantium pariatur. Ex odio rem voluptates impedit asperiores officia architecto aspernatur minima esse blanditiis amet, fugit explicabo porro quae alias voluptatibus at iure nemo! Odit iure, laboriosam necessitatibus similique nihil reprehenderit cum enim sequi a consequuntur voluptatem dolorem ab eum illum. Laboriosam illum eius, atque possimus inventore sunt.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.500'} color={'black'} {...headingOptions}>
        Gaming is the Future now
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.500'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.500'} color={'black'} {...headingOptions}>
        Night life is cool{' '}
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
