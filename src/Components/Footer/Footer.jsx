import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Footer.module.css';

const Footer = () => {
    return(
        <Grid xs={12} md={3} className={styles.container}>
            <header> Developed by Kush Salaskar. </header>
        </Grid>
    );
}

export default Footer