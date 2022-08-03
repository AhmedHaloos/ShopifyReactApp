/**
 * this file for customer operattions
 */
import axios from "axios";
import dotenv from 'dotenv'
import { CURRENCIES } from "./settings.js";

dotenv.config();

const { SHOPIFY_KEY, SHOPIFY_SECRET_KEY } = process.env;
const shop = 'iti-ism';
const version = "2022-07";
const resource = "customers";
const token = "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";//iti-ism
const apiKey = "f9435203660033c2fe73a34c23ffd4dd";// iti-ism
const passsword = "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"//iti-ism





/**
 * this function create new customer and add it to Shopify Api
 */
function addNewCustomer(customer) {

    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-07/${resource}.json`
    // console.log({...customer});
    return axios(
        {

            method: 'post',
            url: apiUrl,
            headers: {
                "content-type": "application/json, charset=utf-8",
                scopes: 'read_customers, write_customers',
            },
            data: { customer: { ...customer } }


        }
    )

}

function editCustomerData(id, updatedCustomer) {

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
                customer: { ...updatedCustomer }
            }

        })

}

function deleteCustomer(id) {

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

function getCustomer(id) {

    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-01/${resource}/${id}.json`
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

function getAllCustomers() {

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


function updateCustomerSpent() {


}

function updateOrdersCount() {


}

function updateEmailState() {


}

function createNewCustomer(customerDetails) {

    const addresses = customerDetails.addresses !== undefined ? customerDetails.addresses : [];
    const currency = customerDetails.currency !== undefined ? customerDetails.currency : CURRENCIES.EGP
    const email = customerDetails.email !== undefined ? customerDetails.email : "";
    const first_name = customerDetails.first_name !== undefined ? customerDetails.first_name : "";
    const last_name = customerDetails.last_name !== undefined ? customerDetails.last_name : "";
    const last_order_id = customerDetails.last_order_id !== undefined ? customerDetails.last_order_id : 0;
    const orders_count = customerDetails.orders_count !== undefined ? customerDetails.orders_count : 0;
    const phone = customerDetails.phone !== undefined ? customerDetails.phone : "";
    const total_spent = customerDetails.total_spent !== undefined ? customerDetails.total_spent : "";
    const verified_email = customerDetails.verified_email !== undefined ? customerDetails.verified_email : false;

}
function createCustomerAddress(addressDetails) {

    const address1 = customerDetails.address1 !== undefined ? customerDetails.address1 : "";
    const city = customerDetails.city !== undefined ? customerDetails.city : "";
    const country_name = customerDetails.country_name !== undefined ? customerDetails.country_name : "";
    const company = customerDetails.company !== undefined ? customerDetails.company : "";

}

export {
    addNewCustomer, deleteCustomer, updateCustomerSpent, updateEmailState, updateOrdersCount, getAllCustomers
    , getCustomer, editCustomerData
}
