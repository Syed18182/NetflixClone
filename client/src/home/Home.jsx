import { AcUnit } from '@mui/icons-material'
import Featured from '../components/featured/Featured'
import List from '../components/list/List'
import NavBar from '../components/navbar/NavBar'
import Slider from '../components/Slider/Slider'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
     <NavBar/>
     <Featured type="movie"/>
     <List/>
     <List/>
     <List/>
     <List/>
     <Slider/>
    
    </div>
  )
}

export default Home
