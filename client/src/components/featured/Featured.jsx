import { InfoSharp, PlayArrow } from "@mui/icons-material"
import styled from "styled-components"
// import KGFLOGO from "../../Images/kgflogo.png"



const Container=styled.div`
height:90vh;

`
const Info=styled.div`
width:35%;
position:absolute;
left:50px;
bottom:100px;
display:flex;
flex-direction:column;`

const FeaturedImg=styled.img`

width:100%;
height:90vh;
object-fit:cover;

`

const InfoImg=styled.img`
height:250px;
width:500px;`

const Desc=styled.span`
font-size: 18px;
font-weight:400;`

const BtnContainer=styled.div`
display:flex;
font-size:18px;
font-weight:500;
`

const BtnPlay=styled.button`
display:flex;
aling-item:center;
justify-content:center;
margin-right:10px;
font-size:18px;
font-weight:500;
border:none;
border-radius:5px;
cursor:pointer;

`

const BtnMore=styled.button`

display:flex;
aling-item:center;
justify-content:center;
font-size:18px;
font-weight:500;
background-color:gray;
color:white;
border:none;
border-radius:5px;
cursor:pointer;`

const Category=styled.div`
top:80px;
left:50px;
position:absolute;
color:white;
font-size:25px;
font-weight:500px;
display:flex;
align-items:center;
justify-content:center;
`
const Genere=styled.select`
cursor:pointer;
background-color:var(--main-color);
color:white;
border-radius:1px;
margin-left:10px;
padding:5px;`

const Current=styled.span`


`

const Featured = ({type}) => {
  return (
    
      <Container>
        
          {type&&(
            <Category>
              <Current>{type==="movie"?"Movies":"Series"}</Current>
              <Genere>
                <option>Genere</option>
                <option value="adventure">Adventure</option>
                <option value="crime">Crime</option>
                <option value="comedy">Comedy</option>
                <option value="fantasy">Fantasy</option>
                <option value="historical">Historical</option>
                <option value="sci-fic">Sci-Fic</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="animation">Animation</option>

              </Genere>
              </Category>
          )}
        
       <FeaturedImg src="https://imgs.search.brave.com/84cKkTJ3drE048ET371b5h7sKBa20_FbSDb4jmQ7SJM/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9vY2Mt/MC0zMDExLTExNC4x/Lm5mbHhzby5uZXQv/ZG5tL2FwaS92Ni9F/OHZEY19XOENMdjct/eU1RdThLTUVDN1Jy/cjgvQUFBQUJhWE80/UkdzZTFuemFrY3BX/XzdmYmxkR0M1VTFT/d2ROREFVRDRGaFBN/T2YyaEFPbXpFcHBZ/cHBuZ1NFX09wSjNC/QWhIZ1Jid212b0hz/SDV1d0NtWWNPbXBB/Y3Q0LmpwZz9yPTk5/Ng" alt="text ProfileImg"/>
        <Info>
          <InfoImg src="https://imgs.search.brave.com/oPJH68DUGj7k_ohbFRQed4zZDjxclZviyd9JBGhg8NI/rs:fit:791:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/N0pSY085ZWxlN3Mx/d0lWTG1oMEt3SGFF/YyZwaWQ9QXBp"/>
          
          <Desc>
          Limitless is a 2011 American science-fiction thriller film directed by Neil Burger and written by Leslie Dixon. Based on the 2001 novel The Dark Fields by Alan Glynn, the film stars Bradley Cooper, Abbie Cornish, Robert De Niro, Andrew Howard, and Anna Friel. The film follows Edward Morra, a struggling writer who is introduced to a nootropic drug called NZT-48, which gives him the ability to use his brain fully and to improve his lifestyle vastly.

          </Desc>
          <BtnContainer>
            <BtnPlay>
              Play
              <PlayArrow/>
            </BtnPlay>
            <BtnMore>
              Info
              <InfoSharp/>
            
            </BtnMore>
          </BtnContainer>
        </Info>
      
      
      
      </Container>
    
  )
}

export default Featured
