import { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import GetData from './Api'
function Blogs() {

  const[blogs, setBlogs] = useState([])
  const url = 'http://localhost:3005/blog/allBlogs'

  useEffect(() => {
    GetData(url, 'GET')
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setBlogs(data)
      })
  }, [])
  const allBlogs = blogs.map((blog) =>
    // <article className='blog-article'key={blog._id}>
    //   <div className="blog-content">
    //     <h2>{blog.title.substring(0,15)}</h2>
    //     <Link className='read-more' 
    //       to={{ pathname: `/blog/${blog._id}/edit` }}
    //       state={blog}>          
    //       Edit
    //     </Link>
    //     <h2> Publish</h2>
    //     <label className="switch">
    //       <input type="checkbox"/>
    //       <span className="slider round"></span>
    //     </label>
    //     <h2> Delete</h2>
    //   </div>
    // </article>

    <tr key={blog._id}>
      <td>{blog.title.substring(0,15)}</td>
      <td>Edit</td>
      <td>Delete</td>
      <td> 
        <label className="switch">
          <input type="checkbox"/>
          <span className="slider round"></span>
        </label></td>
    </tr>
  )
  return (
    
    <table className='blog-container'>
      <thead>
        <th>Title</th>
        <th colSpan="2">Action</th>
        <th>Publish</th>
      </thead>
      <tbody>
        {allBlogs}
      </tbody>
    </table>
    
   
  )
}

export default Blogs