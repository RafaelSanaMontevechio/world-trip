import { Flex, IconButton, Icon, Grid, Image } from '@chakra-ui/react';

// import Image from 'next/image';

import { MdOutlineArrowBackIosNew } from 'react-icons/md';

import WordTripLogo from '../../assets/world-trip_logo.svg';

interface HeaderProps {
  goBackPath?: string;
}

const Header = ({ goBackPath }: HeaderProps) => {
  return (
    <Flex
      bg="white"
      as="header"
      w="100%"
      mx="auto"
      h={['40px', '90px']}
      px="1rem"
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxWidth="1160px"
        align="center"
        justifyContent="center"
        templateColumns="repeat(3, 1fr)"
      >
        <Image
          w={['81px', '184px']}
          mt="6"
          src="/world-trip_logo.svg"
          alt="Word trip"
          justifySelf="center"
          gridColumn={2}
        />
      </Grid>

      {/*TO DO corrigir header*/}
      {/* <Flex> */}
      {/* {goBackPath && ( */}
      {/* <IconButton
        aria-label="Go back home"
        fontSize="24px"
        variant="unstyled"
        icon={<Icon as={MdOutlineArrowBackIosNew} />}
        position="relative"
      /> */}
      {/* )} */}
      {/* </Flex> */}
      <Flex></Flex>
    </Flex>
  );
};

export default Header;
