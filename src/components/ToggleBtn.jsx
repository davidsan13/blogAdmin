
function ToggleBtn({blog, handler}) {


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