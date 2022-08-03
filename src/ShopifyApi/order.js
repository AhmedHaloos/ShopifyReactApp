/**
 * this file is concerned to all function related to the orders of the shopify api using rest,
 * it includes the main CRUD operations of database and other related functions 
 */
import { Settings, CURRENCIES } from './settings.js'
import { Order, createUniqToken } from './global.js'
import axios from "axios";
import dotenv from 'dotenv'

dotenv.config();

const { SHOPIFY_KEY, SHOPIFY_SECRET_KEY } = process.env;
const shop = 'iti-ism';
const version = "2022-07";
const resource = "orders";
const token = "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";//iti-ism
const apiKey = "f9435203660033c2fe73a34c23ffd4dd";// iti-ism
const passsword = "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"//iti-ism



function addNewOrder(order, discouns, lineItems) {

    const myOrder = createOrder(order, discouns, lineItems);
    // console.log("******************************************************************************");
    // console.log(myOrder);

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
            data: {
                order: updatedOrder
            }

        })
}


function getOrder(id) {
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
function deleteOrder(id) {


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

   
    const orderToken = createUniqToken();
    const cartToken = createUniqToken();
    const orderDiscounts = createDiscount(discounts);
    const orderLineItems = createLineItems(lineItems); 
    const cancel_reason = orderDetails.cancel_reason !== undefined ? orderDetails.cancel_reason : "";
    const cart_token = cartToken;
    const token = orderToken;
    const client_details = orderDetails.client_details !== undefined ? orderDetails.client_details : {};
    const currency = orderDetails.currency !== undefined ? orderDetails.currency : Settings.Currency;
   const current_total_discounts = orderDetails.current_total_discounts !== undefined ? orderDetails.current_total_discounts : "";
    const current_total_price = orderDetails.current_total_price !== undefined ? orderDetails.current_total_price : "";
    const customer = orderDetails.customer !== undefined ? orderDetails.customer : {};
    const discount_applications = orderDiscounts?.discount_applications !== undefined ? orderDiscounts?.discount_applications : [];
    const discount_codes = orderDiscounts?.discount_codes !== undefined ? orderDiscounts?.discount_codes : [];
    const line_items = lineItems !== undefined ? lineItems : [];
    const payment_terms = orderDetails.payment_terms !== undefined ? orderDetails.payment_terms : [];
    const total_discounts = orderDetails.total_discounts !== undefined ? orderDetails.total_discounts : "";
    const total_price = orderDetails.total_price !== undefined ? orderDetails.total_price : "";

    const order = {
        cancel_reason,
        cart_token,
        token,
        currency,
        current_total_discounts,
        current_total_price,
        customer,
        discount_applications,
        discount_codes,
        line_items,
        payment_terms,
        total_discounts,
        total_price

        // cart_token: cartToken,
        // token: orderToken,
        // customer: {
        //     id: customerId
        // },
        // discount_applications: {
        //     discount_applications: [
        //         {
        //             type: "discount_code",
        //             code: "ASHM_1234",
        //             value: "10.0",
        //             value_type: "fixed_amount",
        //             allocation_method: "across",
        //             target_selection: "all",
        //             target_type: "line_item"
        //         }
        //     ]
        // },
        // discount_codes: [
        //     {
        //         code: "1234621",
        //         amount: "30.00",
        //         type: "fixed_amount"
        //     }
        // ],
        // line_items:
        //     [
        //         {

        //             price: (totalPrice !== undefined) ? totalPrice : "0.0",
        //             product_id: productId,
        //             quantity: (orderQuantity !== undefined) ? orderQuantity : 1,
        //             title: (!orderTitle !== undefined) ? orderTitle : "order title",

        //         },
        //     ],
    }
    // console.log("************************************************************************************");
    // console.log(order);

    return order;
}

function createDiscount(discountDetails) {

    const discount_applications =
        [
            {
                type: "discount_code",
                code: discountDetails.discount_applications?.code  !== undefined ? discountDetails.discount_applications?.code : "123456",
                value: discountDetails.discount_applications?.value  !== undefined ? discountDetails.discount_applications?.value : "0.0",
                value_type: "fixed_amount",
                allocation_method: "across",
                target_selection:"all",
                target_type: "line_item",
            }
        ];
    const discount_codes =
        [
            {
                amount: discountDetails.discount_codes?.amount  !== undefined ? discountDetails.discount_codes?.amount : "",
                code: discountDetails.discount_codes?.code  !== undefined ? discountDetails.discount_codes?.code : "",
                type:  "fixed_amount",
            }
        ]
    return {
        discount_applications,
        discount_codes
    }
}

function createLineItems(lineItemsDetails) {
   

    const price = lineItemsDetails.price !== undefined ? lineItemsDetails.price : "";
    const product_id = lineItemsDetails.product_id !== undefined ? lineItemsDetails.product_id : 0;
    const quantity = lineItemsDetails.quantity !== undefined ? lineItemsDetails.quantity : 0;
    const title = lineItemsDetails.title !== undefined ? lineItemsDetails.title : "";
    const variant_id = lineItemsDetails.variant_id !== undefined ? lineItemsDetails.variant_id : 0;
    const variant_title = lineItemsDetails.variant_title !== undefined ? lineItemsDetails.variant_title : "";
    const vendor = lineItemsDetails.vendor !== undefined ? lineItemsDetails.vendor : "";

    return
    [
        {
            price,
            product_id,
            quantity,
            title,
            variant_id,
            variant_title,
            vendor
        }
    ]
}

export {
    addNewOrder, editOrderData, deleteOrder, getAllOrders, getOrder, createOrder
}


