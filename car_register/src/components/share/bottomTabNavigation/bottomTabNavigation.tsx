'use client';
import { Flex } from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
import { AiOutlineHome, AiOutlineProfile } from 'react-icons/ai';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { RxAvatar } from 'react-icons/rx';

import IconComponent from '@/components/elements/icons/Icon';
import { primaryColor } from '@/utils/constants';
import { RouteEnum } from '@/utils/route.mapper';

import styles from './navigation.module.scss';

type Props = {
  route: string;
};

const BottomTabNavigator = ({ route }: Props) => {
  const router = useRouter();
  const currentRoute = usePathname();
  const onNavigation = (route: string) => {
    router.push(route);
  };
  if (currentRoute === RouteEnum.CAR_PROFILE) {
    return;
  }

  return (
    <footer>
      <Flex className={styles.bottomTabContainer}>
        <button className={styles.tabItem} onClick={() => onNavigation('/profile')}>
          <IconComponent
            color={currentRoute === RouteEnum.CAR_PROFILE ? primaryColor : 'grey'}
            icon={AiOutlineProfile}
            size='28'
          />
          <label className='text-label'>Guias</label>
        </button>
        <button className={styles.tabItem} onClick={() => onNavigation('/home')}>
          <IconComponent
            color={currentRoute === RouteEnum.HOME ? primaryColor : 'grey'}
            icon={AiOutlineHome}
            size='28'
          />
          <label className='text-label'>Home</label>
        </button>
        <button className={styles.tabItem} onClick={() => onNavigation('/travel')}>
          <IconComponent
            color={currentRoute === RouteEnum.CAR_PROFILE ? primaryColor : 'grey'}
            icon={MdOutlineTravelExplore}
            size='28'
          />
          <label className='text-label'>Tus viajes</label>
        </button>
        <button className={styles.tabItem} onClick={() => onNavigation('/maps')}>
          <IconComponent color={currentRoute === RouteEnum.SECURE ? primaryColor : 'grey'} icon={RxAvatar} size='28' />
          <label className='text-label'>Tu Perfil</label>
        </button>
      </Flex>
    </footer>
  );
};

export default BottomTabNavigator;
