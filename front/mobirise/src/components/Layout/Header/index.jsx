import { Link } from 'react-router-dom'
import './index.scss'


const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="logo">
           <a href="">
           Floral Studio
           </a>
            </div>
            <ul>
                <li>
                    <a href="">
                        Home
                    </a>
                </li>
                <li>
                    <a href="">
                        About us
                    </a>
                </li>
                <li>
                    <a href="">
                        Services
                    </a>
                </li>
                <li>
                    <a href="">
                        Portfolio
                    </a>
                </li>
                <li>
                   <Link to="/wishList">wishList</Link>
                </li>
                <li>
                   <Link to="/basket">Basket</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header