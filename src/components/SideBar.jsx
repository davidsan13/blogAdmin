import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <>
      <aside className='sidebar'>
        <section><Link to= '/'> Post</Link></section>

        <section >Logout</section>

      </aside>
        
    </>
  )
}

export default SideBar