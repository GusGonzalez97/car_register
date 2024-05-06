'use client';
import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { AiOutlineFile, AiOutlineHome, AiOutlineProfile } from 'react-icons/ai';

import IconComponent from '@/elements/icons/Icon';

import styles from './navigation.module.scss';

type Props = {
  route: string;
};

const BottomTabNavigator = ({ route }: Props) => {
  const router = useRouter();
  const onNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <Flex className={styles.bottomTabContainer}>
      <button className={styles.tabItem} onClick={() => onNavigation('/profile')}>
        <IconComponent color='#c50425' icon={AiOutlineProfile} size='30' />
        <label className='text-label'>Mis Datos</label>
      </button>
      <button className={styles.tabItem} onClick={() => onNavigation('/home')}>
        <IconComponent color='#c50425' icon={AiOutlineHome} size='30' />
        <label className='text-label'>Home</label>
      </button>
      <button className={styles.tabItem} onClick={() => onNavigation('/maps')}>
        <IconComponent color='#c50425' icon={AiOutlineFile} size='30' />
        <label className='text-label'>Documentos</label>
      </button>
    </Flex>
  );
};

export default BottomTabNavigator;
