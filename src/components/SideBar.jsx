import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <>
      <aside className='sidebar'>
        <section id='widget_1'>Post</section>
        <Link to={{ pathname: 'blog/create'}}><section id='widget_1'> Create Post</section></Link>
        <section id='widget_1'>Logout</section>
  
      </aside>
        
    </>
  )
}

export default SideBar