import './NavBar.css'
import styled from 'styled-components'
import {  ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import { useState } from 'react'

const Navbar=styled.div`
width:100%;
color: white;
font-size: 14px;
padding:0px;
position:fixed;
top:0px;

`

const Container=styled.div`
height:70px;

padding: 0px 50px;
display: flex;
align-items: center;
justify-content:space-between;

`
const Logo=styled.img`
height:25px;
margin-right:40px;
`
const ProfileImg=styled.img`
height:30px;
width:30px;
border-radius:5px;
object-fit:cover;
cursor:pointer;
`

const Left=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`

const Right=styled.div`
display:flex;
align-items:center;
`

const Pages=styled.span`
margin-right:20px;
cursor:pointer;`

const Profile=styled.div`

 
  

`
const ProfileOptions=styled.div`
position:absolute;
display:flex;
flex-direction:column;

background-color:var(--main-color);

`

const Setting=styled.span`
padding:10px;`
const Logout=styled.span`
padding:10px;`


const NavBar = () => {

  const [isScrolled, setIsScrolled]=useState(false)

  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset===0? false:true)
    return()=>window.onscroll=null
  }




  return (
    <Navbar className={isScrolled ? "navbar scrolled" :"navbar"}>
      <Container>
          <Left>
              <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
               alt="Netflix logo" className='imglogo' 
               />
                <Pages>Home</Pages>
                <Pages>Series</Pages>
                <Pages>Movies</Pages>
                <Pages>New and Popular</Pages>
                <Pages>My List</Pages>

          </Left>
          <Right>
          <Search/>
          <Notifications className='icon'/>
          <ProfileImg src="https://www.whatsappimages.in/wp-content/uploads/2021/12/girl-New-Superb-Whatsapp-Dp-Profile-Images-photo.jpg" alt="text ProfileImg"/>
          <Profile>
          <ArrowDropDown className='icon'/>
          <ProfileOptions>
            <Setting>Setting</Setting>
            <Logout>Logout</Logout>

          </ProfileOptions>
          </Profile>
          </Right>
      </Container>
    </Navbar>
  )
}

export default NavBar
