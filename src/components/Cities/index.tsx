import { Grid, Heading } from '@chakra-ui/react';
import City from './city';

const cities = [
  {
    id: 1,
    name: 'Londres',
    subTitle: 'Reino Unido',
    banner: 'london',
    flag: 'uk',
  },
  {
    id: 2,
    name: 'Paris',
    subTitle: 'França',
    banner: 'paris',
    flag: 'fr',
  },
  {
    id: 3,
    name: 'Roma',
    subTitle: 'Itália',
    banner: 'rome',
    flag: 'it',
  },
  {
    id: 4,
    name: 'Praga',
    subTitle: 'República Checa',
    banner: 'praga',
    flag: 'cz',
  },
  {
    id: 5,
    name: 'Amsterdam',
    subTitle: 'Holanda',
    banner: 'amsterdam',
    flag: 'nl',
  },
];

const Cities = () => {
  return (
    <>
      <Heading fontWeight="500" fontSize={['2xl', '4xl']} mt="20" mb="10">
        Cidades +100
      </Heading>
      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={['20px', '45px']}
        alignItems="center"
        justifyContent="center"
        px={['30px', '0']}
      >
        {cities.map((city) => (
          <City key={city.id} city={city} />
        ))}
      </Grid>
    </>
  );
};

export default Cities;
