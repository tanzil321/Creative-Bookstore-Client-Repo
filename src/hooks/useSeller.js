import { useState } from "react"
import { useEffect } from "react"


const useSeller = email =>{
  const [isBuyer,setIsBuyer] = useState(false)
  const [isBuyerLoading,setIsBuyerLoading] = useState(true)
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/user/seller/${email}`)
        .then(res=>res.json())
        .then(data=>{
            setIsBuyer(data.isSeller)
            setIsBuyerLoading(false)
        })
        }
    },[email])
    return [isBuyer,isBuyerLoading];
}

export default useSeller;