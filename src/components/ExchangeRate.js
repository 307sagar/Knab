import React, { useEffect, useState } from 'react'
import axios from 'axios';
import qs from 'qs';
import { HorizontalBar } from 'react-chartjs-2';

const ExchangeRate = () => {

    const [mainData, setMainData] = useState({});
    const [crypto, setCrypto] = useState('');
    const [exchangeRateData, setExchangeRateData] = useState({});
    const [usd, setUsd] = useState();
    const [USD, setUSD] = useState();
    const [EUR, setEUR] = useState();
    const [BRL, setBRL] = useState();
    const [GBP, setGBP] = useState();
    const [AUD, setAUD] = useState();

    const data = {
        labels: ['USD ($)', 'EUR (€)', 'BRL (R$)', 'GBP (£)', 'AUD (A$)'],
        datasets: [
            {
                data: [USD, EUR, BRL, GBP, AUD],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }



    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'X-CMC_PRO_API_KEY': 'c7f951ce-a079-4a14-8ec7-551bdc2f05d8',
                'crossDomain': 'true'
                // 'access-control-allow-headers': 'access-control-allow-origin',
                // 'access-control-allow-credentials': 'true'
            },
            data: qs.stringify({

            })
        }).then(res => {
            setMainData(res.data);
        })
            .catch((err) => {
                console.log('API call error:', err.message);
            })

        axios({
            method: 'get',
            url: 'https://api.exchangeratesapi.io/latest?base=USD',
            // headers: {
            //     'access-control-allow-origin': '*',
            //     "X-CMC_PRO_API_KEY": "c7f951ce-a079-4a14-8ec7-551bdc2f05d8"
            //     // 'access-control-allow-headers': 'access-control-allow-origin',
            //     // 'access-control-allow-credentials': 'true'
            // },
        }).then(res => {
            setExchangeRateData(res.data);
        })
            .catch((err) => {
                console.log(err)
            });
    }, []);


    useEffect(() => {
        if (usd) {
            setUSD(parseInt(usd.replace(/[[\]']+/g, '')));
            setEUR(parseInt(usd.replace(/[[\]']+/g, '')) * exchangeRateData.rates.EUR);
            setBRL(parseInt(usd.replace(/[[\]']+/g, '')) * exchangeRateData.rates.BRL);
            setGBP(parseInt(usd.replace(/[[\]']+/g, '')) * exchangeRateData.rates.GBP);
            setAUD(parseInt(usd.replace(/[[\]']+/g, '')) * exchangeRateData.rates.AUD);
        }
    }, [crypto]);

    return (
        <div>
            <h1>Crypto Exchange Rate Dashboard</h1>
            <select onChange={(e) => {
                e.preventDefault();
                setCrypto(e.target.value);
                setUsd(JSON.stringify(mainData.data.filter((item) => item.symbol === e.target.value)
                    .map((item) => {
                        return parseInt(item.quote.USD.price)
                    })));
            }}>
                {
                    (Object.keys(mainData).length !== 0) ?
                        mainData.data.map((item) => {
                            return (
                                <option key={item.id} value={item.symbol}>{item.name + ' (' + item.symbol + ')'}</option>
                            )
                        }) : null
                }
            </select>
            <h2>Quotes</h2>
            <div className="quotes">
                {
                    usd ?
                        <ul>
                            <li><b>USD</b> : {usd.replace(/[[\]']+/g, '')} <b>$</b></li>
                            <li><b>EUR </b>: {parseInt(usd.replace(/[[\]']+/g, '')) * exchangeRateData.rates.EUR} <b>€</b></li>
                            <li><b>BRL</b> : {parseInt(usd.replace(/[[\]']+/g, '')) * exchangeRateData.rates.BRL} <b>R$</b></li>
                            <li><b>GBP</b> : {parseInt(usd.replace(/[[\]']+/g, '')) * exchangeRateData.rates.GBP} <b>£</b></li>
                            <li><b>AUD</b> : {parseInt(usd.replace(/[[\]']+/g, '')) * exchangeRateData.rates.AUD} <b>A$</b></li>
                        </ul> : null
                }
            </div>

            { USD ?
                <HorizontalBar
                    data={data}
                    width={100}
                    height={100}
                    options={{ maintainAspectRatio: true }}
                    className="chart"
                /> : null
                }
        </div>
    )
}

export default ExchangeRate;