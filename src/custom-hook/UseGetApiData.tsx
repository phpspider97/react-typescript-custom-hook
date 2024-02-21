import React, { useState, useEffect } from 'react'

interface ApiData {
    id: string,
    title: string,
}

const UseGetApiData = (url:string) => {
    const [data,setData] = useState<ApiData[] | []>([])
    const [loading,setLoading] = useState<boolean>(true)
    const [error,setError] = useState<string>('')

    const getApiData = async () => {
        try{
            const data = await fetch(url)
            const jsonData = await data.json()
            setData(jsonData)
            setLoading(false) 
        }catch(error:any){
            setError(error.message)
        }
    }
    useEffect(()=>{
        getApiData()
    },[url])

    return { data, loading, error }
}

export default UseGetApiData