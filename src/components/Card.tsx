import {motion} from "framer-motion";
import { useState } from "react";
type Prop = {
    title:string,
    image:string,
    content:{cont1:string,cont2:string},
    colors:{active:string,passive:string}
  }

const Card = ({title,image,content,colors}:Prop) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="card-container">
        <div className='card'>
        <div className={`details ${open? 'open': ''}`}>
          <h2>{title}</h2>
          <div className={`description ${open? 'open': ''}`}>
            <div className='left-container'>
              <div className='image-container'>
                <img src={image} alt='inspiration-pic'/>
              </div>
            </div>
            <div className='right-container'>
              <p>{content.cont1}</p>
              <p>{content.cont2}</p>
            </div>
          </div>
        </div>
        <motion.div style={{backgroundColor: open ? colors.active :colors.passive}} className={`toggler ${open? 'open': 'close'}`} onClick={() => setOpen(open => !open)} whileHover={{scale:1.2}} whileTap={{scale: 1.1, opacity:0.8}}>
        </motion.div>
        </div>
    </div>
  )
}

export default Card
