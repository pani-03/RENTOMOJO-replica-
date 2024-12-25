import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import magnfier from '../assets/magnifier.png'
import { useNavigate } from 'react-router-dom';
import cart from '../assets/shopping-cart.png'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
  } from '@chakra-ui/react'


export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const navigate = useNavigate()
    const gotToNewPage=()=>{
      navigate("/Cart");
    }
  return (

    <header style={{backgroundColor:"white"}}>
        <div className="navbar">
            <div className="nav-logo">
                <div className="logo"></div>
            </div>
            <div className="nav-city">
                <select className="search-select" style={{fontStyle:"italic"}}>
                    <option>Choose City</option>
                </select>
            <div className="nav-search">
                <div className="search-wrapper">
                    <input className='search-input' type="text" placeholder="Search for products" class="search-input"/>
                   <img className='search-icon' style={{height:"20px"}} src={magnfier} alt="" />
                </div>
            </div>
            <div className="nav-cart">
                <img style={{height:"20px",}} src={cart} alt="" />
                {/* <input placeholder="Cart" className="input-cart"/> */}
                <button onClick={() => gotToNewPage()} className='input-cart'>Cart </button>
            </div>
                {/* <div className="nav-login" >
                    <button style={{padding:"5px"}}>LOGIN/SIGNUP</button>
                </div> */}

                <div>
                <Button ref={btnRef} className='nav-login' colorScheme='red' onClick={onOpen}>
        LOGIN/SIGNUP
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader style={{backgroundColor:"blue"}} >Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
                </div>
        
        
        </div> 
        </div>   
    </header>

  )
}
