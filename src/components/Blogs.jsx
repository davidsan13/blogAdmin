import { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import GetData from './Api'
import ToggleBtn from './ToggleBtn'
import EditorTiny from './EditorTiny'
function Blogs() {

  const[blogs, setBlogs] = useState([])
  const[published, setPublished] = useState(1)
  const url = 'http://localhost:3005/blog/allBlogs'

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
  const allBlogs = blogs.map((blog) =>
    <tr key={blog._id}>
      <td>{blog.title.substring(0,15)}</td>
      <td><Link className="edit"to={{pathname:`/blog/${blog._id}/edit`}} state={blog}>Edit</Link></td>
      <td>Delete</td>
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