import React from 'react';
import styles from './test.module.scss'
export interface TestProps{}
const Test:React.FC<TestProps>=()=>{
    return (
        <div className={styles.container}>

        </div>
    )
}
export default Test;