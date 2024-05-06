'use client';

import { Box, Grid, GridItem } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { AiOutlineCar, AiOutlineSafety } from 'react-icons/ai';
import { LiaToolsSolid } from 'react-icons/lia';
import { PiMoneyWavy } from 'react-icons/pi';

import IconComponent from '@/elements/icons/Icon';
import { RouteEnum } from '@/utils/route.mapper';

import styles from './homepage.module.scss';

const Home = () => {
  const router = useRouter();

  const onNavigate = (route: RouteEnum) => {
    console.log(route);
    router.push(route.toString());
  };

  return (
    <div className={styles.container}>
      <Box className={styles.header}>
        <h2 className='title'>Ford Ecosport</h2>
        <p className='text-md'>
          Modelo <strong>MyPlus XLT</strong>
        </p>
        <p className='text-md'>
          Motor <strong>2.0 Duratec</strong>
        </p>
        <p className='text-md'>
          Patente <strong>KIH 975 </strong>
        </p>
        <p className='text-md'>70.000 KM</p>
      </Box>

      <Grid gap={4} templateColumns='repeat(2, 1fr)' templateRows='repeat(2, 1fr)'>
        <GridItem colSpan={1}>
          <button className={styles.itemButton} onClick={() => onNavigate(RouteEnum.MECHANIC)}>
            <IconComponent color='#c50425' icon={LiaToolsSolid} size='34' />
            <label className='text-label'>Mantenimiento</label>
          </button>
        </GridItem>
        <GridItem colSpan={1}>
          <button className={styles.itemButton} onClick={() => onNavigate(RouteEnum.SECURE)}>
            <IconComponent color='#c50425' icon={AiOutlineSafety} size='34' />
            <label className='text-label'>Seguro</label>
          </button>
        </GridItem>
        <GridItem>
          <button className={styles.itemButton} onClick={() => onNavigate(RouteEnum.CAR_PROFILE)}>
            <IconComponent color='#c50425' icon={AiOutlineCar} size='34' />
            <label className='text-label'>Mi auto</label>
          </button>
        </GridItem>
        <GridItem>
          <button className={styles.itemButton}>
            <IconComponent color='#c50425' icon={PiMoneyWavy} size='34' />
            <label className='text-label'>Deudas</label>
          </button>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Home;
