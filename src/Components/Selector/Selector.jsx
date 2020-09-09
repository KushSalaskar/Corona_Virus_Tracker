import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../api/index.js';
import styles from './Selector.module.css';

const Selector = ({handleCountryChange}) => {
    
    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchedCountries = async () => {
            setFetchedCountries(await fetchCountries())
        } 

        fetchedCountries();
    },[setFetchedCountries]);
    
    
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="" >World</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default Selector