import { Spinner } from '@chakra-ui/react'
import styles from './FullScreen.module.scss';
const FullScreenLoader = ()=>{
    return <div className={styles.container}><Spinner className={styles.spinner}/></div>
}

export default FullScreenLoader