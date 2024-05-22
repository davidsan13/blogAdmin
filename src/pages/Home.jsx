import React from 'react'
import Blogs from '../components/Blogs'
import { Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Link className='postBtn' to='/blog/create'><button className='postBtn'>Add Post</button></Link>
      <Blogs/>
    </>
  )
}

export default Home