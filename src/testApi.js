
function getAllCustomers() {

    // const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-01/${resource}.json`
    const apiUrl = `https://jsonplaceholder.typicode.com/todos`
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
  



getAllCustomers()
 .then((res)=>{
   
   console.log(res.data);
 })
.catch((e)=>{
console.log(e);})