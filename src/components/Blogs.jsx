import { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import GetData from './Api'
import ToggleBtn from './ToggleBtn'

function Blogs() {

  const[blogs, setBlogs] = useState([])
  const[published, setPublished] = useState(1)
  const url = 'http://localhost:3005/admin/allBlogs'
  
  useEffect(() => {
    GetData(url, 'GET')
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setBlogs(data)
      })
  }, [published])

  function updatePublish(blog) {
    const url =  `http://localhost:3005/blog/${blog._id}/update`
    const method = 'POST'
    const updatePublished = blog.published ? false: true;
    let requestOptions = JSON.stringify({published: updatePublished})
    
    GetData(url, method, requestOptions)
      .then((res) => {
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
    setPublished(published+1)
   
  }

  function remove() {
    const url =  `http://localhost:3005/blog/${blog._id}/delete`
    const method = 'POST'
    
    
    GetData(url, method)
      .then((res) => {
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
    setPublished(published+1)
   
  }
  const allBlogs = blogs.map((blog) =>
    <tr key={blog._id}>
      <td><Link className='blogview' to={{pathname: `/blog/${blog._id}`}}>{blog.title.substring(0,15)}</Link></td>
      <td className='action'><Link className="edit"to={{pathname:`/blog/${blog._id}/edit`}} state={blog}>Edit</Link></td>
      <td className='action'><Link className='delete' to={{pathname: `/blog/${blog._id}/delete`}}>Delete</Link></td>
      <td className='action'><input onClick= {() => remove()} />D</td>

      <td> 
        <label className="switch">
          <ToggleBtn blog={blog} handler={updatePublish}/>
          <span className="slider round"></span>
        </label>
      </td>
    </tr>
  )
  return (
    <>
      <table className='blog-container'>
        <thead>
          <tr>
            <th>Title</th>
            <th colSpan="2">Action</th>
            <th>Publish</th>
          </tr>
        </thead>
        <tbody>
          {allBlogs}
        </tbody>
      </table>
    </>
   
  )
}

export default Blogs