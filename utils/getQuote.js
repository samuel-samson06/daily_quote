const axios = require("axios");
// NODE QUOTEGEN PACKAGE ranges from (1-192) quotes
const {getQuote} = require("node-quotegen");
//Quote Ranges from 1-1454)
const QUOTE_ENDPOINT = "https://dummyjson.com/quotes/random";

const categories = [
    "motivational",
    "technology",
    "funny",
    "inspirational",
    "friendship",
    "nature",
    "success",
    "attitude",
];
// Gets the random quote from the node-quotegen package
const getLocalQuote = ()=>{
    const randomIndex = Math.floor(Math.random()*categories.length);
    const localQuote = getQuote(categories[randomIndex]);
    return `${localQuote}`;
}

// Gets the random quote from the dummyjson API
const randomQuote = async ()=> {
    try{
        const quoteResponse = await axios.get(QUOTE_ENDPOINT);
        return {
            quote: quoteResponse.data.quote,
            author: quoteResponse.data.author
        }

    }catch(error){
        // Returns the local quote if the dummyjson API fails
        return {
            quote: getLocalQuote(),
            author: "From Local Quote"
        }
    }
}

module.exports = {randomQuote};