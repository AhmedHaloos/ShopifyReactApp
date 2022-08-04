import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

const shop = 'iti-ism';
const version = "2022-07";
const resource = "products";
const token = "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";//iti-ism
const apiKey = "f9435203660033c2fe73a34c23ffd4dd";// iti-ism
const passsword = "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"//iti-ism

// GET /admin/api/2022-01/products.json undefined
// Host: iti-ism.myshopify.com
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:103.0) Gecko/20100101 Firefox/103.0
// Accept: application/json, text/plain, */*
// Accept-Language: en-US,en;q=0.5
// Accept-Encoding: gzip, deflate, br
// X-Shopify-Access-Token: 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
// Referer: http://localhost:3000/

// GET /admin/api/2022-01/products.json HTTP/3
// Host: iti-ism.myshopify.com
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:103.0) Gecko/20100101 Firefox/103.0
// Accept: application/json, text/plain, */*
// Accept-Language: en-US,en;q=0.5
// Accept-Encoding: gzip, deflate, br
// X-Shopify-Access-Token: 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
// Connection: keep-alive
// Referer: http://localhost:3000/
// Sec-Fetch-Dest: empty
// Sec-Fetch-Mode: no-cors
// Sec-Fetch-Site: cross-site
// Pragma: no-cache
// Cache-Control: no-cache


// function getAllCustomers() {

//   const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-01/${resource}.json`
//   // const apiUrl = `https://jsonplaceholder.typicode.com/todos`
//   return axios(
//     {
//       method: 'get',
//       url: apiUrl,
    
//       headers: {
//         "content-type": "application/json, charset=utf-8",
//         'X-Shopify-Access-Token': `${token}`,
//         authorization : `${passsword}`, 
//         // "Access-Control-Allow-Origin": "*", 
//         // "Access-Control-Allow-Headers": "*"
//       },

//     })
// }

function App() {

  useEffect(() => {
    console.log("front");
   axios({
    method:'get', 
    url:'/customers', 

   })
   .then((res)=>{
      console.log(res.body);
   })
   .catch((e)=>{
    console.log(e.message);
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
