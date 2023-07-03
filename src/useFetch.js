import { useState, useEffect } from "react";
import { Amplify, API } from "aws-amplify";
import awsExports from './aws-exports.js';

// Custom hook that allows us to fetch data safely from any url passed into hook
// Returns data being fetched and status of fetch (whether it is loading or an error has occured)
const useFetch = (apiname, path) => {
    // Configure amplify to use API function
    Amplify.configure(awsExports);
    
    // Using useState hook to update return values when necessary
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect hook used to fetch data so that it happens when page initially loaded or when apiname or path variable change
    useEffect(() => {
        async function fetchdata() {
            const res = await API.get(apiname, path);
            setData(res);
            setLoading(false);
        }
        fetchdata();
    }, [apiname, path]);

    return { data, loading, error }
}

export default useFetch;