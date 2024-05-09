'use client';

import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import { primaryColor } from '@/utils/constants';
import { RouteEnum } from '@/utils/route.mapper';

import PlaceCard from '../../components/elements/placeCard/placeCard';
import styles from './homepage.module.scss';

const Home = () => {
  const router = useRouter();

  const onNavigate = (route: RouteEnum) => {
    console.log(route);
    router.push(route.toString());
  };
  //TODO: A partir de la 4ta letra, hace la busqueda y redirecciona al listado de destino
  //TODO: LLevar el header a un componente para hacer parallel routing.
  return (
    <div className={styles.container}>
      <Box className={styles.header}>
        <Flex justifyContent={'space-between'}>
          <h2 className='title'>Hola Gustavo!</h2>
          <Avatar
            backgroundColor={primaryColor}
            color={'white'}
            name='Gustavo Gonzalez'
            src='https://bit.ly/sage-adebayo'
          />
        </Flex>
        <label>¿Cual será tu próximo viaje?</label>
        <Input placeholder='Buscar destino' />
      </Box>

      <Grid gap={2} templateColumns='repeat(1, 2fr)'>
        <h3 className=''>Tendencias</h3>
        <GridItem>
          <PlaceCard />
        </GridItem>
      </Grid>

      <Grid gap={2} templateColumns='repeat(1, 2fr)'>
        <h3 className=''>Para tí</h3>
        <GridItem>
          <PlaceCard />
        </GridItem>
        <GridItem>
          <PlaceCard />
        </GridItem>
      </Grid>
    </div>
  );
};

export default Home;
