import React from 'react';
import {Card, CardContent, Typography, Grid, CircularProgress} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';


const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {
    if(!confirmed){
        return(
            <CircularProgress color="secondary" />
        )
    }
    return(
        <div className= {styles.container}>
            <Grid container spacing={2} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography variant='h4' gutterBottom className={styles.yellow}>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp 
                                className={styles.yellow}
                                start={0}
                                end={confirmed.value}
                                duration={2.0}
                                separator=","
                            />
                        </Typography>
                        <Typography variant='body2' className={styles.yellow}>Number of people infected with COVID19 till</Typography>
                        <Typography color='textSecondary' className={styles.fontc}>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.active)}>
                    <CardContent>
                        <Typography variant='h4' gutterBottom className={styles.blue}>Active</Typography>
                        <Typography variant='h5'>
                            <CountUp 
                                className={styles.blue}
                                start={0}
                                end={(confirmed.value-(recovered.value+deaths.value))}
                                duration={2.0}
                                separator=","
                            />
                        </Typography>
                        <Typography variant='body2' className={styles.blue}>Number of active cases of COVID19 till</Typography>
                        <Typography color='textSecondary' className={styles.fontc}>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recover)}>
                    <CardContent>
                        <Typography variant='h4' gutterBottom className={styles.green}>Recovered</Typography>
                        <Typography variant='h5'>
                        <CountUp 
                                className={styles.green}
                                start={0}
                                end={recovered.value}
                                duration={2.0}
                                separator=","
                                />
                        </Typography>
                        <Typography variant='body2' className={styles.green}>Number of people recovered from COVID19 till</Typography>
                        <Typography color='textSecondary' className={styles.fontc}>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.death)}>
                    <CardContent>
                        <Typography variant='h4' gutterBottom className={styles.red}>Deaths</Typography>
                        <Typography variant='h5'>
                        <CountUp 
                                className={styles.red}
                                start={0}
                                end={deaths.value}
                                duration={2.0}
                                separator=","
                            />
                        </Typography>
                        <Typography variant='body2' className={styles.red}>Number of deaths due to COVID19 till</Typography>
                        <Typography color='textSecondary' className={styles.fontc}>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards