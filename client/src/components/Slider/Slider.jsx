import slider from "react-simple-image-slider"
import img1 from "../../Images/amitabh.JPG"
import img2 from "../../Images/Avtar.JPG"
import img3 from "../../Images/HP5.JPG"
import img4 from "../../Images/moglii.JPG"
import img5 from "../../Images/mortal kombat.JPG"
import img6 from "../../Images/spaiderman.JPG"
import img7 from "../../Images/vnm.JPG"

const img=[ { url: "../../Images/amitabh.JPG" },{ url: "../../Images/Avtar.JPG" },{ url: "../../Images/HP5.JPG" },{ url: "../../Images/moglii.JPG" },{ url: "../../Images/mortal kombat.JPG" },{ url: "../../Images/spaiderman.JPG" },{ url: "../../Images/vnm.JPG" },];
const Slider = () => {
  return (
    <div>
      <slider width={225} height={120} images={img} />
    </div>
  )
}

export default Slider
