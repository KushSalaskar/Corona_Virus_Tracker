import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Header.module.css';

const Header = () => {
    return(
        <Grid xs={12} md={3} className={styles.container}>
            <h1> CoViD-19 Tracker </h1>
        </Grid>
        
    );
}

export default Header