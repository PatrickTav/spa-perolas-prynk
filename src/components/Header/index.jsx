import Navbar from '../Navbar'
import {ContainerHeader} from './styled'
import Logo from '../../assets/image/logoPP.png'
const Header = () => {
  return (
    <ContainerHeader>
      <div className='image_logo'>
        <img src={Logo} alt="logo-perolas-prynk" />
      </div>
      <Navbar/>
    </ContainerHeader>
  )
}

export default Header

