import { Grid, Text } from '@chakra-ui/react';
import Details from './details';

const ContinentInfo = () => {
  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr 1fr', '1.2fr 1fr']}
      gap={[5, 10, 16, 20]}
    >
      <Text
        fontSize={['lg', 'xl', 'xl', '2xl']}
        color="gray.700"
        textAlign="justify"
      >
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
      </Text>
      <Details />
    </Grid>
  );
};

export default ContinentInfo;
