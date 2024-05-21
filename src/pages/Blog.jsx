import { useState, useEffect, React, createElement} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import GetData from '../components/Api'
import {decode} from 'html-entities'
const Blog = () => {
  const [blog, setBlog] = useState([]);
  let {state} = useLocation()

  useEffect(() => {
    const blogId = "664656bd192414d6abf9ad26"
    const url = `http://localhost:3005/blog/${blogId}/`
    const method = 'GET'
    GetData(url, method)
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setBlog(data.blog)
      })

  },[])
  
  const renderHTML = (rawHTML) => createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

  // {renderHTML("<p>&amp;nbsp;</p>")}

  const blogView = 
    <div className="blog" key={blog._id}>
      <h1 className='blog-title'>{blog.title}</h1>
      {renderHTML(decode(blog.content))}
    </div>

  return (
    <>
      {blogView}
    
    </>
  )
}

export default Blog