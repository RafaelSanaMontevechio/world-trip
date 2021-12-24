import { Flex, Heading } from '@chakra-ui/react';

export const ContinentBanner = () => {
  return (
    <Flex
      w="100%"
      h={['150px', '300px', '500px']}
      px={['0', '0', '36']}
      pt={['0', '0', '72']}
      bgImage="url('/images/continents/europe2.svg')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      align="center"
      justify={['center', 'center', 'flex-start']}
    >
      <Heading
        textAlign={['center', 'left']}
        fontSize={['1.75rem', '5xl']}
        color="gray.100"
        fontWeight="500"
      >
        Europa
      </Heading>
    </Flex>
  );
};

export default ContinentBanner;
