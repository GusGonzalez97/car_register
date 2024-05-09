import { As, Button } from '@chakra-ui/react';
import { JSXElementConstructor, ReactElement } from 'react';

import styles from './G_Button.module.scss';

type Props = {
  as?: As;
  backgroundColor?: string;
  iconButton?: ReactElement<any, string | JSXElementConstructor<any>>;
  label: string;
  onClick(): void;
};

const G_Button = ({ iconButton, label, onClick, backgroundColor, as }: Props) => {
  return (
    <Button as={as ?? 'button'} backgroundColor={backgroundColor} rightIcon={iconButton} onClick={onClick}>
      <p className={`text-label ${styles.textBtn}`}>{label}</p>
    </Button>
  );
};

export default G_Button;
