import {useEffect, useState } from "react"
import Axios from 'axios'

export const useAxiosOnMount = (url) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(()=> {
    Axios.get(url).then((res)=>{
      console.log(res.data)
      setData(res.data)
      setError(null)
      setLoading(false)
    }).catch((err)=>{
      setError(err.response)
      console.log(err)
    }).finally(()=>{
      setLoading(false)
    })
  },[])

  return [data, loading, setData]
}