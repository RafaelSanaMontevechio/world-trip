import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

type City = {
  id: number;
  name: string;
  subTitle: string;
  banner: string;
  flag: string;
};

interface CityProps {
  city: City;
}

const City = ({ city }: CityProps) => {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={`/images/cities/${city.banner}.svg`} w="100%" alt="City" />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            {city.name}
          </Heading>
          <Text mt="3" fontSize="md" fontWeight="500" color="gray.500">
            {city.subTitle}
          </Text>
        </Flex>
        <Image
          src={`/images/cities/flags/${city.flag}.png`}
          alt="City"
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
};

export default City;
