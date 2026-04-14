import { useState, useEffect } from "react";
// made a custom hook
function useCurrencyInfo (from){
    const [data, setData]= useState({})
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
        // convert the response into json
        .then((res)=> res.json())
        // return the response in the form of currency from seData
        .then((res) => setData(res[from])) 
        console.log(data)
    },[from]) /*keyvalue is currency*/
    console.log(data)
    return data;

}
export default useCurrencyInfo