import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Selector from './Components/Selector/Selector';
import Cards from './Components/Cards/Cards';
import Charts from './Components/Charts/Charts';
import Footer from './Components/Footer/Footer';
import './styles.css';
import { fetchData } from './Components/api/index.js'


class App extends Component {
  
  state = {
    data : [],
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({data: fetchedData})
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    
    this.setState({data: fetchedData, country: country});
  }

  render() { 
    const { data, country } = this.state
    return ( 
      <div className = 'container'>
        <Header />
        <Selector handleCountryChange={this.handleCountryChange}/>
        <Cards data={data}/>
        <Charts data={data} country = {country}/>
        <Footer />
      </div>
     );
  }
}
 
export default App;
