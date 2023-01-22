const axios = require("axios");
require("dotenv").config()


const options = {
    method: 'GET',
    url: 'https://simple-youtube-search.p.rapidapi.com/search',

    headers: {
        'X-RapidAPI-Key':process.env.API_KEY ,
        'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
    }
};


async function search(data) {
    console.log( "line 17",0000000000000000000000000000000000,process.env);
    if (!data) throw { code: 400, msg: "func search missing data" };
    const result = await axios.get(
        encodeURI( `https://simple-youtube-search.p.rapidapi.com/search?query=?${data}&safesearch=false`),
        options
        ).catch(function (error) {
            console.error("error",error);
            console.log("the problem is here");
        });
      return {page:"searchLogic",result}
    }
    
    module.exports = { search }
  
  
  
  
    // // const searchController = require("../DL/controllers/searchController");
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
    //         'X-RapidAPI-Key': 'a1a5ac7c9amsh51387762f25fcc8p115250jsn77ca02f8f94d'
    //     }
    // };
    
    // async function search(data) {
    //     if (!data)   throw ({ code: 400, message: "search function no data sent" })
    
    //     const result = await axios.get(`https://simple-youtube-search.p.rapidapi.com/search?query=${data}&safesearch=false`, options)
    //     try {
    //         return result.data.results
    //     }
    //     catch {
    //         (error => console.log(error))
    //     }
    
    // }