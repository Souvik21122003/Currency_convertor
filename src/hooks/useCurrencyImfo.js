import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
   const host = 'api.frankfurter.app';
    useEffect(() => {
        fetch(`https://${host}/latest?amount=1&from=${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res["rates"]))
        console.log("successfully Fetched");
    }, [currency])
 
    return data;
}

export default useCurrencyInfo;