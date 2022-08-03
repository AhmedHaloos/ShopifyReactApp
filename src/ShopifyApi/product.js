/**
 * this file for product operattions
 */
import axios from "axios";
import dotenv from 'dotenv';
import { getAllCollects } from './category.js'

dotenv.config();

const { SHOPIFY_KEY, SHOPIFY_SECRET_KEY } = process.env;
const shop = 'iti-ism';
const version = "2022-07";
const resource = "products";
const token = "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";//iti-ism
const apiKey = "f9435203660033c2fe73a34c23ffd4dd";// iti-ism
const passsword = "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"//iti-ism



async function addNewProduct(product) {

    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-01/${resource}.json`;
    return axios({

        method: 'post',
        url: apiUrl,
        headers: {
            "content-type": "application/json, charset=utf-8",
            'X-Shopify-Access-Token': `${token}`,
        },
        data: {

            product: {

                title,
                images,
            }
        }
    })
}

function editProductData(id, updatedProduct) {

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
                product: { ...updatedProduct }
            }

        })



}

function deleteProduct(id) {


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


function getProductById(productId) {
    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-01/${resource}/${productId}.json`;
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



function getAllProducts() {

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


function addImagesToProduct(images) {


}


function createNewProduct(productDetails, productVariants) {

    const body_html = productDetails.body_html !== undefined ? productDetails.body_html : "";
    const images = productDetails.images !== undefined ? productDetails.images : [];
    const product_type = productDetails.product_type !== undefined ? productDetails.product_type : "";
    const title = productDetails.title !== undefined ? productDetails.title : "";
    const variants = productVariants;
    const vendor = productDetails.vendor !== undefined ? productDetails.vendor : "";
    return {

        body_html,
        images,
        product_type,
        title,
        variants,
        vendor
    }
}

function createNewVariant(vaiantDetails) {

    // price, title, productId, imageId, 

    const prodPrice = vaiantDetails.price !== undefined ? vaiantDetails.price : "0.0";
    const prodTitle = vaiantDetails.title !== undefined ? vaiantDetails.title : "";
    const productId = vaiantDetails.product_id !== undefined ? vaiantDetails.product_id : 0;
    const imageId = vaiantDetails.image_id !== undefined ? vaiantDetails.image_id : 0;
    const prodPosition = vaiantDetails.position !== undefined ? vaiantDetails.position : 0;
    const prodWwight = vaiantDetails.weight !== undefined ? vaiantDetails.weight : 0;

    return [
        {

            image_id: imageId,
            position: prodPosition,
            price: prodPrice,
            product_id: productId,
            title: prodTitle,
            weight: prodWwight,

        }
    ]
}

function addNewVariant(product, variant) {

    product.variants.push(variant);
return product;
}



export { getAllProducts, addNewProduct, getProductById, deleteProduct, editProductData }