import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

const shop = 'iti-ism';
const version = "2022-07";
const resource = "customers";
const token = "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";//iti-ism
const apiKey = "f9435203660033c2fe73a34c23ffd4dd";// iti-ism
const passsword = "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"//iti-ism

function getAllCustomers() {

  const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-01/${resource}.json`
  // const apiUrl = `https://jsonplaceholder.typicode.com/todos`
  return axios(
    {
      method: 'get',
      url: apiUrl,
      headers: {
        "content-type": "application/json, charset=utf-8",
        'X-Shopify-Access-Token': `${token}`,
        'Authorization': apiKey

      },

    })
}

function App() {



    useEffect(()=>{



   getAllCustomers()
   .then((res)=>{

     console.log(res.data);
   })
  .catch((e)=>{
  console.log(e);

  })


}, []);



return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);
}

export default App;
