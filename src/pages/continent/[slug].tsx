import { Flex } from '@chakra-ui/react';
import Cities from '../../components/Cities';
import ContinentBanner from '../../components/ContinentBanner';
import ContinentInfo from '../../components/ContinentInfo';
import Header from '../../components/Header';

const Continent = () => {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner />

      <Flex
        direction="column"
        maxWidth="1160px"
        mx="auto"
        mb="10"
        px="1rem"
        my={['8', '20']}
      >
        <ContinentInfo />
        <Cities />
      </Flex>
    </Flex>
  );
};

export default Continent;
