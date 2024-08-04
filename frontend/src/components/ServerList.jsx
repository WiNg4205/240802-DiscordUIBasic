import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faMusic, faPenNib, faCar, faMedal } from '@fortawesome/free-solid-svg-icons'
import ServerIcon from "./ServerIcon"
import { Link } from 'react-router-dom'

const ServersList = () => {
    return (
      <div className="bg-tertiary min-w-16 flex flex-col gap-1 pt-2">
        <Link to="/"><ServerIcon icon={faDiscord} /></Link>
        <div className='bg-primary h-0.5 w-1/2 self-center my-0.5'></div>
        <Link to="/music"><ServerIcon icon={faMusic} /></Link>
        <Link to="/pens"><ServerIcon icon={faPenNib} /></Link>
        <Link to="/cars"><ServerIcon icon={faCar} /></Link>
        <Link to="/olympics"><ServerIcon icon={faMedal} /></Link>
      </div>
    )
  }
  
  export default ServersList
  