/**
 * this file for customer operattions
 */
 import axios from "axios";
 
 
 const shop = 'iti-ism';
 const version = "2022-07";
 const resource = "custom_collections";
 const token = "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";//iti-ism
 const apiKey = "f9435203660033c2fe73a34c23ffd4dd";// iti-ism
 const passsword = "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"//iti-ism
 

 function addNewCategory(category){


    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-07/${resource}.json`
  
      return axios(
        {
 
            method: 'post',
            url: apiUrl,
            headers: {
                "content-type": "application/json, charset=utf-8",
                scopes: 'read_collections, write_collections',
            },
            data: { custom_collection : {...category} }
        }
    )
 }
 function editCategory(id, updatedCategory){

    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-01/${resource}/${id}.json`;
    return axios({

        method: 'put', 
        url: apiUrl, 
        data:{
            custom_collection : updatedCategory, 
        }
    })

 }

 function deleteCategoryById(id){

    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-01/${resource}/${id}.json`;
    return axios({
        method: 'delete', 
        url: apiUrl, 
    })
 }

function getCategoryById(catId){
    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-01/${resource}/${catId}.json`;
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
 
function getAllCategories(){

    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-01/${resource}.json`;
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


function addProductToCategory(productId, catId){

    const collectionRes = 'collects';
    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-07/${collectionRes}.json`;

    return axios(
        {
 
            method: 'post',
            url: apiUrl,
            headers: {
                "content-type": "application/json, charset=utf-8",
                scopes: 'read_collections, write_collections',
            },
            data: { collect : {
                collection_id : catId, 
                product_id: productId,
            } }
        }
    )

 }

 function getAllCollects(){

    const collectionRes = 'collects';
    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-07/${collectionRes}.json`;
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
 
/************************************ FrontEnd functions ********************************************/
/**
 * 
 * @param {*} _collection 
 * @returns 
 */
function addCategory(_collection){

    return  axios({
        method:'post', 
        url : '/collections/', 
        data : {
            collection : _collection
        }
    })
}/**
 * 
 * @param {*} id 
 * @param {*} updatedCategory 
 * @returns 
 */
function updateCategory(id, updatedCategory){

    return axios({
        method : "put", 
        url:`/collections/${id}`, 
        data: updatedCategory
    })
}/**
 * 
 * @param {*} id 
 * @returns 
 */
function deleteCategory(id){

    return axios({
        method:"delete", 
        url:`/collections/${id}`, 
    })
}
/**
 * 
 * @param {*} id 
 * @returns 
 */
function getCategory(id){

    return axios({
        method:'get', 
        url:`/collections/${id}`, 
    })
}
/**
 * 
 * @returns 
 */
function getCategories(){
    return axios({
        method:'get', 
        url:`/collections/`, 
    })
}

export {getAllCategories, addNewCategory, addProductToCategory, getAllCollects, getCategoryById, getCategories, 
        getCategory, addCategory, updateCategory, deleteCategory, deleteCategoryById, editCategory}