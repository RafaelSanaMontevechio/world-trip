import { Flex, Icon, Grid, Image, Link } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const Header = () => {
  const { asPath } = useRouter();

  const isContinent = asPath.includes('/continent');

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
        {isContinent && (
          <Link href="/" mt="6" justifySelf="start">
            <a>
              <Icon as={MdOutlineArrowBackIosNew} fontSize={[20, 40]} />
            </a>
          </Link>
        )}

        <Image
          w={['81px', '184px']}
          mt="6"
          src="/world-trip_logo.svg"
          alt="Word trip"
          justifySelf="center"
          gridColumn={2}
        />
      </Grid>
    </Flex>
  );
};

export default Header;
