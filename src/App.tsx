import React from 'react'
import UseGetApiData from './custom-hook/UseGetApiData' 
import './App.css'
const url = 'https://fakestoreapi.com/products'

const App : React.FC = () : any  => {
    const { data, loading, error } = UseGetApiData(url)
    if(loading){
        return <h1>Loading....</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
    return ( 
        <ol className="olderList">
            { data && data?.map((res,key)=>(
                <li key={key}> 
                    {res.title}
                </li>
            ))}
        </ol> 
    )
}
export default App