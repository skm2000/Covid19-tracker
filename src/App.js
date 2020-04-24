import React from 'react'
import {Cards,Chart,CountryPicker} from './Components'
import styles from './App.module.css'
import { fetchData } from './api'
import covid19 from './image/covid19.png'

class App extends React.Component {

    state = { //constructor invoked on its own
        data:{},
        country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData})

        // console.log(data);
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country:country})
    }

    render(){
        const { data,country } = this.state
        return (
            <div className={styles.cointainer}>
                <img className={styles.cointainer} src={covid19}/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;