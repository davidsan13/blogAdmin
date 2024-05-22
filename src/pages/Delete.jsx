import { useState, useEffect, React} from 'react'
import { useLocation, useParams, redirect, useNavigate } from 'react-router-dom'
import GetData from '../components/Api'
const Delete = () => {
  const [blog, setBlog] = useState([]);
  let {state} = useLocation()
  let {blogId} = useParams()
  const navi = useNavigate()
  useEffect(() => {
   
    
  },[])

  function remove() {
    console.log(blogId)
    const url =  `http://localhost:3005/blog/${blogId}/delete`
    const method = 'POST'
    
    
    GetData(url, method)
      .then((res) => {
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
    navi('/')
  }
  

  // {renderHTML("<p>&amp;nbsp;</p>")}



  return (
    <>
      <h1>Are you sure you want to delete</h1>
      <button onClick={() => remove()}>Yes</button>
    </>
  )
}

export default Delete