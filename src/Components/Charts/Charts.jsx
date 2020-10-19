import React, { useState, useEffect } from 'react';
//import React from 'react';
import { fetchDailyData } from '../api/index.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
//import { Bar, Doughnut } from 'react-chartjs-2';
import styles from './Charts.module.css';

const Charts = ({data: {confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() =>{
        const fetch = async () => {
            setDailyData(await fetchDailyData())
        }
        fetch()
    }, []);

    const lineChart = (
        dailyData.length
        ? (
            <Line 
            data= {{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    bordercolor: 'yellow',
                    fill: true
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    bordercolor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.3)',
                    fill: true
                }]
            }}
            />) : null
    );

    const barChart = (
        confirmed 
        ? (
            <Bar 
             data={{
                labels:['Infected', 'Active', 'Recovered', 'Deaths'],
                datasets:[{
                    label: 'People',
                    backgroundColor: ['rgb(233, 245, 10)','blue' ,'rgb(15, 252, 3)','red'],
                    data: [confirmed.value, confirmed.value-(recovered.value+deaths.value), recovered.value, deaths.value]
                }]
             }}
             options={{
                 legend: {display: false},
                 title: {display: true, text: `Cases in ${country}`}
             }}
            />
        ): null
    )
    

    const pieChart = (
        confirmed ? (
            <Doughnut 
            data={{
                labels:['Active', 'Recovered', 'Deaths'],
                datasets:[{
                    label: 'People',
                    backgroundColor: ['blue', 'rgb(15, 252, 3)', 'red'],
                    data: [confirmed.value-(recovered.value+deaths.value), recovered.value, deaths.value]
                }]
            }}
            options={{
                legend: {display: false},
                title: {display: true, text: `Situation in ${country}`}
            }}
            />
        ): null
    )


    return(
    
        <div className = {country ? styles.containercountry : styles.container}>
            {/*comment if api breaks*/}
            {country ? barChart : lineChart}
            {country ? pieChart : null}          
            {/* {country ? barChart : barChart}
            {country ? pieChart : null} */}
        </div>
    
    );
}

export default Charts