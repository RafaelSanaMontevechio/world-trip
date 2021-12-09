import { Flex, IconButton, Icon } from '@chakra-ui/react';

import Image from 'next/image';

import { MdOutlineArrowBackIosNew } from 'react-icons/md';

import WordTripLogo from '../../assets/world-trip_logo.svg';

interface HeaderProps {
  goBackPath: string;
}

const Header = ({ goBackPath }: HeaderProps) => {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      maxWidth={1440}
      mx="auto"
      mt="2"
      px="6"
      align="center"
      justify="center"
      borderBottom="1px solid #e6e6e6"
      position="absolute"
    >
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
      <Flex>
        <Image src={WordTripLogo} alt="Word trip" />
      </Flex>
    </Flex>
  );
};

export default Header;
