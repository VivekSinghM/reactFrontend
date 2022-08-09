import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { Auth } from '../../context/AuthProvider'

const Header=(props)=>{
  const {logout} = useContext(Auth)
  const history = useHistory()
  const login=()=>{
    history.push('/login')
  }
    return(
        <>
        <header className='header'>
                <nav className="navbar navbar-expand-lg navbar-dark justify-content-between" style={{background:"#222222"}}>
                    <Link className="navbar-brand" to="/home">Aloo Kachaloo</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName='active' to='/home'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" activeClassName='active' to='/menu'>Menu Card</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Orders
                          </a>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Dine-in</a>
                            <a className="dropdown-item" href="#">Take away</a>
                            <a className="dropdown-item" href="#">Online</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">All Orders</a>
                          </div>
                        </li>
                        <li className="nav-item">
                          {props.auth?<a className="nav-link text-light border pl-2" onClick={logout} >Logout</a>:<a className="nav-link text-light border pl-2" onClick={login}>Login</a>}
                        </li>
                      </ul>
                      {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                    </div>
                  </nav>
            </header>
        </>
    )
}
export default Header
