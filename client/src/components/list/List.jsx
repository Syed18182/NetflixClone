import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import { ReactDOM } from 'react'
import ListItem from '../listitem/ListItem'
import styled from "styled-components"
import  {useRef}  from 'react'

const ListD=styled.div`
width:100%;
margin-top:10px;`

const ListTitle=styled.span`
color:white;
font-size:20px;
font-weight:500;
margin-left:50px;`

const Wrapper=styled.div`
display :flex;
align-content:center;
position:relative;

`
const Container=styled.div`
margin-top:10px;
margin-left:50px;
display :flex;
width:max-content;
`

const SliderArrowLeft=styled.div`
width:30px;
margin-left:50px;
height:30px;
background-color:rgb(22,22,22,0);
color:white;
position:absolute;
z-index:99;
left:0;
top:50px;
cursor:pointer;

`

const SliderArrowRight=styled.div`
width:30px;
height:30px;
background-color:rgb(22,22,22,0);
color:white;
position:absolute;
right:0;
z-index:99;
top:50px;
cursor:pointer;
`


const List = () => {
  const listRef= useRef(0)
   var distance=listRef.current?.getBoundingClientRect()
    const handleClick=(direction)=>{
      if (direction === "left"){
          listRef.current.style.transform=`translateX(230px)`
              
      }
      
    }
  return (
    
    <ListD>
        <ListTitle>
            Continue To Watch
        </ListTitle>
        <Wrapper>
           <SliderArrowLeft> <ArrowBackIosOutlined onClick={()=>handleClick("left")}/></SliderArrowLeft>
            <Container><ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/></Container>
            <SliderArrowRight><ArrowForwardIosOutlined onClick={()=>handleClick("right")} /></SliderArrowRight>
        </Wrapper>
    </ListD>
  )
}

export default List
