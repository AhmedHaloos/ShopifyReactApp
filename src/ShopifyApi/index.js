const { default: axios } = require('axios');
const express = require ('express');

const app = express(express);
const port = 5000;
// console.log('server express');

const shop = 'iti-ism';
const version = "2022-07";
const resource = "products";
const token = "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";//iti-ism
const apiKey = "f9435203660033c2fe73a34c23ffd4dd";// iti-ism
const passsword = "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"//iti-ism



app.use(async (req, res, next)=>{


// console.log(data["data"]);
    next();

})
app.get('/products',  (req, res)=>{
    
    getAllProducts()
    .then((response)=>{
        let products = response.data['products'];
        console.log("*****************************************************************************************"
        +"**********************************************************************************************");
        console.log(products[0]);
        res.json({
            products:products,
        })

    })
    .catch((e)=>{
            console.error(e.response);
            res.send('error')
    })
})

app.get('/customers', (req, res)=>{

    res.send('customers')

})

app.listen(port, ()=>{

    console.log(`listeneing to port ${port}`);
})
