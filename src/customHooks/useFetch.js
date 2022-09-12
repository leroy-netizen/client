import { useEffect, useState } from 'react'

const abortController = new AbortController()

const useFetch = (url) => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])


    useEffect(() => {
        const getData = async () => {
            const response = await fetch(url)
            if (!response.ok) {
                setError("Cannot fetch the requested resource")
            }
            const data = await response.json();
            setData(data)  
            setLoading(false)
            abortController.abort()
        }
        getData()
    }, [url])
    
    return {error, loading, data} 

}

export default useFetch
