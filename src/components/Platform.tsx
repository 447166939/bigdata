import React,{Fragment} from 'react';
import styles from './platform.module.scss'
import Image from "next/image";
import amazon from "@/assets/amazon.png";
export interface PlatformProps{

}
const Platform:React.FC<PlatformProps>=()=>{
    return <Fragment>
        <Image className={styles.amazon} src={amazon} alt={""} />
    </Fragment>
}
export default Platform