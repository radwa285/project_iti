import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated'); 
        navigate('/login'); 
    };
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/Home" style={{color:"red",fontWeight:"bold"}}>
                        <img src="Preview.png" style={{height:"60px",borderRadius:"30px"}} alt=''/>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink className={( { isActive } ) => isActive ? "nav-link text-danger" : "nav-link"} to="/Home" style={{marginRight:"40px",fontSize:"18px",fontWeight:"bold"}}>Home</NavLink>
                        <NavLink className={( { isActive } ) => isActive ? "nav-link text-danger" : "nav-link"} to="/products" style={{marginRight:"40px",fontSize:"18px",fontWeight:"bold"}}>Products</NavLink>
                        <NavLink >
                        <div className="text-center mt-4">
                <button onClick={handleLogout} className="btn btn-danger fw-bold" style={{marginTop:"-30px"}}>
                    Logout
                </button>
            </div>
                        </NavLink>
                        <NavLink >
                        <div className="text-center mt-4">
                <button  className="btn  fw-bold" style={{marginTop:"-30px",marginLeft:"10px"}}>
                    <img src='user.jpeg'style={{width:"40px",height:"40px",borderRadius:"20px",display:"block"}} alt='' />
                 <div className='btn  ' style={{marginLeft:"-10px",color:"red"}}> {localStorage.getItem('Username')}</div> 
                </button>
                  </div>
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}