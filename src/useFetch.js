import { useState, useEffect } from "react";

// Custom hook that allows us to fetch data safely from any url passed into hook
// Returns data being fetched and status of fetch (whether it is loading or an error has occured)
const useFetch = (url) => {
    // Using useState hook to update return values when necessary
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect hook used to fetch data so that it happens when page initially loaded or url passed into function changes
    useEffect(() => {
        // AbortController to abort fetch if component unmounted so that state does not change while component unmounted causing an error
        const abort = new AbortController();
        fetch(url, { signal: abort.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error("Error fetching data")
                }
                return res.json();
            })
            .then(fetchedData => {
                setData(fetchedData);
                setLoading(false);
                setError(false);
            })
            .catch(err => {
                if (err.name === "AbortError") {
                    console.log("Fetch aborted")
                } else {
                    setError(err.message);
                    setLoading(false);
                }
            })
            return () => abort.abort();
    }, [url])
    return {data, loading, error};
}

export default useFetch;