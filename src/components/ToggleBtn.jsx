import { useState, useEffect } from 'react'


function ToggleBtn({blog, handler}) {
  const [published, setPublished] = useState(blog.published)
  
  useEffect(() => {
    // GetData(url, 'POST', requestOptions)
    //   .then((res) => {
    //     return res.json()
    //   })
    //   .then(data => {
    //     console.log('butto toggle')
    //   })
    // handler(blog,published)

  }, [])
  
  const toggleBtn = blog.published ? 
    <input type="checkbox" defaultChecked={blog.published} onChange={() => handler(blog)} value={blog.published}/>:
    <input type="checkbox" onChange={() => handler(blog)} value={blog.published}/>
  
  return (
    <>
      {toggleBtn}
    </>
  )
}

export default ToggleBtn