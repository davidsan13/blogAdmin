import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <>
      <aside className='sidebar'>
        <section><Link to= '/'> Post</Link></section>
        <section><Link to= '/login'> Login</Link></section>

        <section ><Link to='/logout'>Logout</Link></section>

      </aside>
        
    </>
  )
}

export default SideBar