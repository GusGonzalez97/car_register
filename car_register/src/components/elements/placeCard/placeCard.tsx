import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { IoLocation } from 'react-icons/io5';

import { primaryColor } from '@/utils/constants';

import CarPic from '../../../../public/img/Eco.png';
import IconComponent from '../icons/Icon';

type Props = {
  description: string;
  id: string;
  image: string;
  title: string;
};

const PlaceCard = () => {
  return (
    <Flex
      alignItems={'center'}
      borderRadius={10}
      borderWidth={1}
      boxSize={'max-content'}
      direction={'row'}
      gap={3}
      justifyContent={'space-between'}
      paddingInline={2}
      paddingY={2}
      width='100%'>
      <Flex direction={'column'} flexGrow={0.7} gap={2}>
        <Box alignItems={'center'} display={'flex'} flexDirection={'row'} gap={1} justifyContent={'flex-start'}>
          <IconComponent color={primaryColor} icon={IoLocation} size='20' />
          <h2 className='text-md-bold'>Valle de Uco, Mendoza</h2>
        </Box>
        <Box width={'min-content'}>
          <p className='text-sm'> olores blanditiis nostrum rerum? Earum, errasdasdasdasdasdasdasdasdasdaor.</p>
        </Box>
      </Flex>
      <Box>
        <Image alt='Hola' height={100} src={CarPic} style={{ borderRadius: 5 }} width={100} />
      </Box>
    </Flex>
  );
};

export default PlaceCard;
