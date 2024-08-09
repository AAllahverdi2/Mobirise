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
                    <a href="">
                        Pricing
                    </a>
                </li>
                <li>
                    <a href="">
                        Contacts
                    </a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header