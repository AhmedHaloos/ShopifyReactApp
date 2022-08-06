/**
 * this file is concerned to all function related to the orders of the shopify api using rest,
 * it includes the main CRUD operations of database and other related functions 
 */
import { Settings, CURRENCIES } from './settings.js'
import { Order, createUniqToken } from './global.js'
import axios from "axios";


const shop = 'iti-ism';
const version = "2022-07";
const resource = "orders";
const token = "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";//iti-ism
const apiKey = "f9435203660033c2fe73a34c23ffd4dd";// iti-ism
const passsword = "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"//iti-ism




function addNewOrder(myOrder) {

        console.log(myOrder);

    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-07/${resource}.json`
    return axios(
        {
            method: 'post',
            url: apiUrl,
            headers: {
                "content-type": "application/json, charset=utf-8",
                scopes: 'read_orders, write_orders',
            },
            data: {
                order: myOrder
            }
        }
    )
}

function editOrderData(id, updatedOrder) {

    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-01/${resource}/${id}.json`
    return axios(
        {
            method: 'put',
            url: apiUrl,
            headers: {
                "content-type": "application/json, charset=utf-8",
                'X-Shopify-Access-Token': `${token}`,
            },
            data:  updatedOrder
            

        })
}


function getOrderById(id) {
    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-01/${resource}/${id}.json`;
    return axios(
        {
            method: 'get',
            url: apiUrl,
            headers: {
                "content-type": "application/json, charset=utf-8",
                'X-Shopify-Access-Token': `${token}`,
            },

        })
}

function getAllOrders() {

    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-01/${resource}.json`
    return axios(
        {
            method: 'get',
            url: apiUrl,
            headers: {
                "content-type": "application/json, charset=utf-8",
                'X-Shopify-Access-Token': `${token}`,
            },

        })

}
/**
 * 
 * @param {*} id 
 * @returns 
 */
function deleteOrderById(id) {


    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-01/${resource}/${id}.json`
    return axios(
        {
            method: 'delete',
            url: apiUrl,
            headers: {
                "content-type": "application/json, charset=utf-8",
                'X-Shopify-Access-Token': `${token}`,
            },

        })

}

function applyDiscount() {


}

/**
 * 
 * @param {*} customerId 
 * @param {*} productId 
 * @param {*} quantity 
 * @param {*} options 
 * @returns 
 */
function createOrder(orderDetails, discounts, lineItems) {


    // const orderToken = createUniqToken();
    // const cartToken = createUniqToken();
    // const orderDiscounts = createDiscount(discounts);
    const orderLineItems = createLineItems(lineItems);
    // const cancel_reason = orderDetails.cancel_reason !== undefined ? orderDetails.cancel_reason : "";
    // const cart_token = cartToken;
    // const token = orderToken;

    // const client_details = orderDetails.client_details !== undefined ? orderDetails.client_details : {};
    const currency = orderDetails?.currency !== undefined ? orderDetails?.currency : Settings.Currency;
    // const current_total_discounts = orderDetails?.current_total_discounts !== undefined ? orderDetails?.current_total_discounts : "";
    // const current_total_price = orderDetails?.current_total_price !== undefined ? orderDetails?.current_total_price : "";
    const customer = orderDetails?.customer !== undefined ? orderDetails?.customer : {};
    // const discount_applications = orderDiscounts?.discount_applications !== undefined ? orderDiscounts?.discount_applications : [];
    // const discount_codes = orderDiscounts?.discount_codes !== undefined ? orderDiscounts?.discount_codes : [];
    const _line_items = orderLineItems !== undefined ? lineItems : [];
    const payment_terms = orderDetails?.payment_terms !== undefined ? orderDetails?.payment_terms : [];
    // const total_discounts = orderDetails?.total_discounts !== undefined ? orderDetails?.total_discounts : "";
    // const total_price = orderDetails?.total_price !== undefined ? orderDetails?.total_price : "";

    const order = {
        // cancel_reason,
        // cart_token,
        // token,
        currency,
        // current_total_discounts,
        // current_total_price,
        customer,
        discount_applications :
        [
            {
                type: "discount_code",
                code: discounts?.code !== undefined? discounts?.discount_code : "123456",
                value: discounts?.value !== undefined ? discounts?.discount_value : "0.0",
                value_type: "fixed_amount",
                allocation_method: "across",
                target_selection: "all",
                target_type: "line_item",
            }
        ], 
        // discount_codes,
        line_items:  [_line_items],
        payment_terms,
        // total_discounts,
        // total_price
    }
    console.log("***************************;kdnc;lwnw;rl****************************************");
    console.log(_line_items);
    console.log(order);
    return order;
}

// function createDiscount(discount_code, discount_value) {

//     const discount_applications =
//         [
//             {
//                 type: "discount_code",
//                 code: discount_code !== undefined? discount_code : "123456",
//                 value: discount_value !== undefined ? discount_value : "0.0",
//                 value_type: "fixed_amount",
//                 allocation_method: "across",
//                 target_selection: "all",
//                 target_type: "line_item",
//             }
//         ];
//     // const discount_codes =
//     //     [
//     //         {
//     //             amount: discountDetails?.discount_codes?.amount !== undefined ? discountDetails?.discount_codes?.amount : "",
//     //             code: discountDetails?.discount_codes?.code !== undefined ? discountDetails?.discount_codes?.code : "",
//     //             type: "fixed_amount",
//     //         }
//     //     ]
//     return  discount_applications
//     // {
//     //     discount_codes
//     // }
// }

function createLineItems(lineItemsDetails) {


    const price = lineItemsDetails?.price !== undefined ? lineItemsDetails?.price : "";
    const product_id = lineItemsDetails?.product_id !== undefined ? lineItemsDetails?.product_id : 0;
    const quantity = lineItemsDetails?.quantity !== undefined ? lineItemsDetails?.quantity : 0;
    const title = lineItemsDetails?.title !== undefined ? lineItemsDetails?.title : "";
    const variant_id = lineItemsDetails?.variant_id !== undefined ? lineItemsDetails?.variant_id : 0;
    const variant_title = lineItemsDetails?.variant_title !== undefined ? lineItemsDetails?.variant_title : "";
    const vendor = lineItemsDetails?.vendor !== undefined ? lineItemsDetails?.vendor : "";

    return {
            price,
            product_id,
            quantity,
            title,
            variant_id,
            variant_title,
            vendor
        }
    
}

function addLineItemToOrder(product,  lineItem = {price :String, product_id : Number, quantity : Number, title : String, variant_id : String,
    variant_title : String, vendor:String}){

        product.line_items.push(lineItem);
        return product;
}

function removeProductFromOrder(lineItemId){

    
}

/***************************************** FrontEnd Functions *******************************************/

function getOrders() {

    return axios({
        method: 'get',
        url: '/orders/'
    })
}
function getOrder(id) {

    return axios({
        method: 'get',
        url: `/orders/${id}`,
    })
}
function addOrder(order = {currency:String,  customer : {}},
    discounts = { code : String, value : String, },
     lineItems = {price :String, product_id : Number, quantity : Number, title : String, variant_id : String,
         variant_title : String, vendor:String}){
        const myOrder = createOrder(order, discounts, lineItems);
    return axios({
        method: 'post',
        url: '/orders/',
        data: myOrder,
    })

}
function updateOrder(id, updatedOrder) {

    return axios({

        method: 'put',
        url: `/orders/${id}`,
        data: updatedOrder,

    })
}
function deleteOrder(id) {
    axios({
        method: 'delete',
        url: `/orders/${id}`,

    })
}

export {
    addNewOrder, editOrderData, deleteOrder, getAllOrders, getOrder, createOrder, addOrder, updateOrder,
    getOrderById, deleteOrderById, getOrders,
}


