import { Box, Button, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { IoCalendarOutline, IoColorPaletteOutline, IoDownloadOutline } from 'react-icons/io5';
import { PiArrowRight, PiEngine } from 'react-icons/pi';

import IconComponent from '@/elements/icons/Icon';

import CarPic from '../../../public/img/Eco.png';
import styles from './carProfile.module.scss';

const CarProfile = () => {
  return (
    <section className={styles.container}>
      <Flex
        alignItems={'flex-start'}
        direction={'column'}
        justifyContent={'center'}
        marginBottom={25}
        textAlign={'left'}>
        <h2 className={'title-lg'}>Ford Ecosport XLT</h2>
        <p className={`subtitle ${styles.car_profile_subtitle}`}>70.000 KM</p>
      </Flex>
      <article className={styles.imgContainer}>
        <Image alt='Eco image' className={styles.img} src={CarPic} />
      </article>
      <Box display={'flex'} gap={25} justifyContent={'center'} marginTop={30}>
        <Flex alignItems={'center'} className={styles.featureItem} direction={'row'} flexDirection={'column'} gap={'4'}>
          <Box className={styles.iconContainer}>
            <IconComponent color='white' icon={IoColorPaletteOutline} size='32' />
          </Box>
          <p className='text-label'>Plateado</p>
        </Flex>
        <Flex alignItems={'center'} className={styles.featureItem} direction={'row'} flexDirection={'column'} gap={'4'}>
          <Box className={styles.iconContainer}>
            <IconComponent color='white' icon={IoCalendarOutline} size='32' />
          </Box>
          <p className='text-label'>2011</p>
        </Flex>
        <Flex alignItems={'center'} className={styles.featureItem} direction={'row'} flexDirection={'column'} gap={'4'}>
          <Box className={styles.iconContainer}>
            <IconComponent color='white' icon={PiEngine} size='32' />
          </Box>
          <p className='text-label'>Duratec 2.0</p>
        </Flex>
        <Flex alignItems={'center'} className={styles.featureItem} direction={'row'} flexDirection={'column'} gap={'4'}>
          <Box className={styles.iconContainer}>
            <IconComponent color='white' icon={IoColorPaletteOutline} size='32' />
          </Box>
          <p className='text-label'>Plateado</p>
        </Flex>
      </Box>
      <article className={styles.btnSection}>
        <a href='https://www.kavak.com/ar/blog/ford-ecosport-ficha-tecnica' target='_blank'>
          <Button
            backgroundColor={'#c50425'}
            justifyContent={'space-between'}
            rightIcon={<IconComponent color='white' icon={PiArrowRight} size='22' />}
            type='button'
            width={'100%'}>
            <p className={`text-label ${styles.textBtn}`}>Ficha técnica</p>
          </Button>
        </a>
        <Button
          backgroundColor={'#c50425'}
          justifyContent={'space-between'}
          rightIcon={<IconComponent color='white' icon={IoDownloadOutline} size='22' />}
          type='button'
          width={'100%'}>
          <p className={`text-label ${styles.textBtn}`}>Cédula verde</p>
        </Button>
        <Button
          backgroundColor={'#c50425'}
          justifyContent={'space-between'}
          rightIcon={<IconComponent color='white' icon={IoDownloadOutline} size='22' />}
          type='button'
          width={'100%'}>
          <p className={`text-label ${styles.textBtn}`}>Comprobante Transferencia</p>
        </Button>
      </article>
    </section>
  );
};

export default CarProfile;
