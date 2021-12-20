import type { NextPage } from 'next';

import { Flex } from '@chakra-ui/react';

import Title from '../components/Title';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import TravelTypes from '../components/TravelTypes';
import CallToAction from '../components/CallToAction';
import Divider from '../components/Divider';

const Home: NextPage = () => {
  return (
    <>
      <Title />
      <Flex w="100%" direction="column">
        <Header />
        <Banner />
        <TravelTypes />
        <Divider />
        <CallToAction />
      </Flex>
      <Carousel />
    </>
  );
};

export default Home;
