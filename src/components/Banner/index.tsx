import { Flex, Heading, Image, Text } from '@chakra-ui/react';

const Banner = () => {
  return (
    <Flex
      w="100%"
      h={['163px', '250px', '250px', '335px']}
      bgImage="url('/banner.jpeg')"
      bgPosition={['100% 20%', '100% 20%', '100% 30%']}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        w="100%"
        mx="auto"
        px={['4', '10', '15', '20', '36']}
        justify={['center', 'space-between']}
        align="center"
      >
        <div>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={['xl', '2xl', '2xl', '2xl', '4xl']}
          >
            5 continentes, <br />
            infinitas possibilidades.
          </Heading>

          <Text
            color="gray.300"
            mt="5"
            fontSize={['0.8rem', 'xl']}
            maxWidth={['100%', '100%', '100%', '550px']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>

        <Image
          w={['300px', '300px', '300px', '430px']}
          display={['none', 'none', 'block']}
          alt="airplane"
          src="/airplane.svg"
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  );
};

export default Banner;
