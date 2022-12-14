import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { addCategory, deleteCategory, getCategories, getCategory, updateCategory } from './ShopifyApi/category.js'
import { createNewProduct, createNewVariant, getImages, getProducts, addImage, getProduct, addNewProduct, addProduct } from './ShopifyApi/product.js'
import { addCustomer, deleteCustomer, getAllCustomers, getCustomer, getCustomers, updateCustomer } from './ShopifyApi/customer.js';
import { CURRENCIES, Settings } from './ShopifyApi/settings.js';
import { addOrder, deleteOrder, getOrder, getOrders } from './ShopifyApi/order.js';




function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    // 6971485061257  

  //   const order = { currency: CURRENCIES.USD, };
  //  const discount_applications =  {
  //     code: '123456',
  //       value: "2500"
  //   };
  // const line_items =  [
  //     {
  //       price: "7000",
  //       product_id: 6971486666889,
  //       quantity: 100,
  //       title: "Product num 1",
  //       vendor: "NIKE AHMED STORE"
  //     },
  //     {
  //       price: "10000",
  //       product_id: 6968596988041,
  //       quantity: 100,
  //       title: "Product num 2",
  //       vendor: "NIKE AHMED STORE"
  //     },
  //     {
  //       price: "10000",
  //       product_id: 6968598986889,
  //       quantity: 100,
  //       title: "Product num 3",
  //       vendor: "NIKE AHMED STORE"
  //     }
  //   ]

  
  //   getCustomer(5813276672137)
  //     .then((response) => {
  //       console.log(response.data);
  //       addOrder( {...order, customer:{...response.data['customer']}}, discount_applications, line_items)
  //         .then((response) => {
  //           console.log(response.data);
  //         })
  //         .catch((er) => {
  //           console.log(er.data);
  //         })
  //         .catch((er) => {
  //           console.log(er.data);
  //         })
  //     })

    //4705926840457, prod id : 6968596988041
   

    getOrders()
      .then((res) => {
        console.log(res.data);
      })
      .catch((er) => {
        console.log(er);
      })



    // addImage(
    //   6968517623945,
    //   'https://www.volvocars.com/images/v/-/media/market-assets/us/applications/dotcom/images/homepage/local-content/2560-x-1096.jpg?h=1096&iar=0&w=2560',
    //   500,
    //   500,
    //   "Product image"

    // )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((er) => {
    //     console.log(er);
    //   })

    // updateCategory(273666015369, 
    //   {
    //     title : "Updated Category Title", 
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((er) => {
    //     console.log(er);
    //   })
    //   getProducts()
    //  .then((res) => {
    //       console.log(res.data);
    //     })
    //     .catch((er) => {
    //       console.log(er);
    //     })




    // getCustomers()
    // .then((res) => {
    //   console.log(res.data['customers']);
    // })
    // .catch((er) => {
    //   console.log(er);
    // })


    // productId : 6968517623945
    // getProduct(6968517623945
    // )
    //   .then((res) => {
    //     console.log(res.data['product']);
    //   })
    //   .catch((er) => {
    //     console.log(er.response);
    //   })
    //customer id : 5813458436233

    // updateCustomer(5813458436233, {

    //   customer_id: 5813458436233, 
    //   first_name: 'ahmed', 
    //   last_name:"saeed",
    // })
    // .then((res)=>{
    //     console.log(res.data['customer']);
    // })
    // .catch((er)=>{
    //       console.log(er.response);
    // })
    // getCategories()
    // .then((res) => {
    //   console.log(res.data);
    // })
    // .catch((er) => {
    //   console.log(er.response);
    // })

    // deleteCategory(273666146441)
    //  .then((res) => {
    //   console.log(res.data);
    // })
    // .catch((er) => {
    //   console.log(er.response);
    // })


    // addCategory({

    //   body_html: "this Category for Testing New Products",
    //   image: {
    //     src: "",
    //     width: 200,
    //     height: 150,
    //     alt: "Category Image",
    //   },
    //   sort_order: 'created-desc',
    //   title: "Test Category"
    // })
    // .then((res) => {
    //   console.log(res.data);
    // })
    // .catch((er) => {
    //   console.log(er.response);
    // })


    // addCustomer({
    //   email: "ahmed_gamal@gamil.com", 
    //   first_name : "ahmed", 
    //   last_name : "gamal", 
    //   addresses:[
    //     {
    //       address1 : "cairo, ain Shams", 
    //       city : "cairo", 
    //       country : "egypt", 
    //     }
    //   ], 
    //   currency : CURRENCIES.EGP, 
    //   password : '123456', 
    //   phone : "+2001023311369", 
    //   password_confirmation : "123456"
    // })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((er) => {
    //     console.log(er.response);
    //   })
    // addProduct({
    //   body_html : "this is test product for the meeting", 
    //   images : [
    //     {
    //       src :"data:image/jpeg;base64,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", 
    //       width:500, 
    //       heigth : 500, 
    //       alt : "No image", 
    //     }, 
    //     {
    //       src :"https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80", 
    //       width:600, 
    //       heigth : 600, 
    //       alt : "no image", 
    //     }
    //   ], 
    //   title : "Product from Our Car Store"

    // })
    // .then((res)=>{
    //     console.log(res.data['product']);
    // })
    // .catch((er)=>{
    //   console.log(er.response);

    // })
    // getCustomers()
    // .then((res)=>{
    //   console.log(res.data['customers']);
    // })
    // .catch((er)=>{
    //   console.log(er.response);

    // })

    //  const product  =  createNewProduct({
    //     body_html: "Product For Tiger Team",
    //     images:[
    //       {
    //         src:'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
    //         width:250, 
    //         height : 250, 

    //       }, 
    //       {
    //         src : 'https://upload.wikimedia.org/wikipedia/ar/b/be/Ismaily-Club-Logo.png', 
    //         width: 250, 
    //         height:300,
    //       }
    //     ], 
    //     product_type:"Test Product", 
    //     title:"Product from Ahmed Saeed Store", 
    //     vendor: 'Ismailia Store, Ismaily Shop'
    //   })

    // axios(
    //   {
    //     method: 'get',
    //     url: '/products/6971486666889',    //6968598986889
    //     // data:{
    //     //  product: product
    //     // }, 
    //   }
    // )
    //   .then(async (res) => {
    //  const prod = {...res.data.product, title : 'Bing Olymbics' };
    // const prod = res.data.product;
    //   products.forEach(product => {

    // console.log(prod);
    //     console.log(product.title);
    // console.log("***********************************************************************************");
    //   });


    // console.log(prod);

    //   axios({
    //     method: 'put',
    //     url: `/products/${prod.id}`,
    //     data:
    //     {

    //         id: prod.id,   
    //         title: "English-Tea",
    //         vendor : "ITI SHOP", 
    //        images : [
    //         {
    //           product_id:prod.id, 
    //           src : "https://cdn.shopify.com/s/files/1/0590/5527/6169/products/pexels-photo-302743.jpg?v=1659648194", 
    //           width : 600, 
    //           heigth: 600,
    //         }, 
    //         {
    //           product_id: prod.id, 
    //           src : "https://cdn.shopify.com/s/files/1/0590/5527/6169/products/Ismaily-Club-Logo.png?v=1659648194", 
    //           width : 600, 
    //           heigth: 600,
    //         },
    //        ], 
    //         body_html: 'this product is introduced from tiger teams in ismailai',

    //     }

    //   })
    //     .then((updateRes) => {
    //       console.log(updateRes.data);
    //     })
    //     .catch((er) => { console.log(er); })

    // })
    // .catch((e) => {
    //   console.log(e.message);
    // })
  }, []);

return (
  <div >
  </div>
);
}

export default App;
