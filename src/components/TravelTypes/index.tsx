import { Grid, GridItem } from '@chakra-ui/react';
import Types from './Types';

const types = [
  { icon: 'cocktail', text: 'Vida noturna' },
  { icon: 'surf', text: 'praia' },
  { icon: 'building', text: 'Moderno' },
  { icon: 'museum', text: 'Clássico' },
  { icon: 'earth', text: 'e mais...', colspan: [2, 2, 2, 1] },
];

const TravelTypes = () => {
  return (
    <Grid
      mt={['10', '32']}
      mx="auto"
      w="100%"
      maxW="1160px"
      align="center"
      justifyContent="space-between"
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      gap={[1, 5]}
    >
      {types.map((type) => (
        <GridItem key={type.icon} colSpan={type.colspan ? type.colspan : []}>
          <Types icon={type.icon} text={type.text} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TravelTypes;
