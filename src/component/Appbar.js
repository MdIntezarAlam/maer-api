import { Link, useNavigate } from 'react-router-dom'

const Appbar = () => {
  const auth = localStorage.getItem("user")
  const navigate = useNavigate()
  //if auth hai logout elese signup
  //logout features and navigate to signup page 

  const logout = () => {
    localStorage.clear()
    navigate("/signup")
  }
  return (
    <div className='appbar'>
      {auth ?
        <ul className='ultag'>
          <img className='imgs' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDpT5oKME3Qu4DqXn4wAQ_ZuhBVvhWFbf5NQ&usqp=CAU' alt='logo' />
          <li><Link to="/">Product</Link></li>
          <li><Link to="/addpro">Add Product</Link></li>
          <li><Link to="/update/:id">Update  Product</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/signup" onClick={logout}>logout ({JSON.parse(auth).name})</Link></li>
        </ul>
        : <ul className='ultag' style={{ justifyContent: "right" }}>
          <li><Link to="/signup" onClick={logout}>Signup</Link></li>
          <li><Link to="/login" onClick={logout}>Login</Link></li>
        </ul>
      }
    </div>
  )
}

export default Appbar