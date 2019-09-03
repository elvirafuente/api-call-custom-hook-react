import { useState, useEffect } from 'react';
import axios from 'axios';


export const useHttpGet = (ApiEndPoint, dependencies) => {
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(()=>{
        axios.get(ApiEndPoint)
            .then(responseData =>{
                console.log(responseData)
                setFetchedData(responseData.data.data)
            })
            // .catch((error)=>alert(error));
    }, dependencies);
    
    return [fetchedData];
}

