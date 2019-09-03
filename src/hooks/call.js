import { useState, useEffect } from 'react';

export const useCall = (ApiEndPoint, dependencies) => {
    const [fetchedData, setFetchedData] = useState(null);
    
    useEffect(()=>{
        fetch(ApiEndPoint)
                .then(res => res.json())
                .then(responseData =>{
                    console.log(responseData)
                    setFetchedData(responseData.data)
                })
                .catch((error)=>alert(error));
    }, dependencies);

    
    
    return [fetchedData];
}

