import { Box, Flex, Text } from '@chakra-ui/react';

import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
} from 'swiper';

SwiperCore.use([Pagination, Navigation, Mousewheel, Keyboard, Autoplay]);

// type SlideProps = {
//   continents: Continent[];
// };

const Carousel = () => {
  const continents = [
    {
      slug: 'europe',
      image: '../../assets/europe.svg',
      link: '/europe',
      titleSlide: 'Europe',
      aboutText: 'Europe is the largest continent in the world.',
    },
    {
      slug: 'europe',
      image: '../../assets/europe.svg',
      link: '/europe',
      titleSlide: 'Europe',
      aboutText: 'The bigger continent',
    },
  ];

  return (
    <Box
      w="100%"
      h="100%"
      maxWidth={1240}
      mx="auto"
      mt={['5', '10']}
      mb={['5', '10']}
      p={['4', '6']}
    >
      <Swiper
        style={{ width: '100%', flex: 1 }}
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides
        pagination={{
          clickable: true,
        }}
        navigation
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.slug}>
            <Flex
              textAlign="center"
              bgImage="url('/images/continents/europe.svg')"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              w="100%"
              h={['375px', '450px']}
              align="center"
              justify="center"
              direction="column"
            >
              <Link href={`/continent/${continent.slug}`}>
                <a>
                  <Text
                    fontSize={['3xl', '4xl', '5xl']}
                    fontWeight="bold"
                    color="gray.100"
                  >
                    {continent.titleSlide}
                  </Text>
                  <Text
                    fontSize={['sm', '2xl']}
                    fontWeight="bold"
                    color="gray.300"
                  >
                    {continent.aboutText}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
