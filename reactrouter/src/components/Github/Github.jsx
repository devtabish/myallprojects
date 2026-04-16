import React, { useEffect, useState } from "react";

function Github (){
    const [data, setData]=useState([])
    useEffect(()=>{
        
        fetch('https://api.github.com/users/devtabish')
        .then(response=> response.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    },[])
    return(
        <>
        <div className="bg-gray-500 flex flex-wrap m-20 p-4">Gitfollowers{data.followers}
            <img src={data.avatar_url} alt="git picture" width={300} />
        </div>
        </>
    )
}
export default Github