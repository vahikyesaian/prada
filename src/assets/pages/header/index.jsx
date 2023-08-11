import './master.css'
import logo from '../../img/logo.jpg'
import icon from '../../../icon/fontello-ce76404e/css/fontello.css'
export default function Header() {
    return (
        <div className="d-flex col-12">
            <header className='col-12 m-0 p-0 border'>
                <Menu />
            </header>
        </div>
    )
}
function Menu() {
    return (
        <nav className='col-12 bg-succes d-flex '>
            <div className='col-2'>
                <figure className='col-12 '>
                    <img src={logo} className='col-10' />

                </figure>
            </div>
            <ul className='col-6 d-flex p-0 '>
                <li className='col-2'>women</li>
                <li className='col-2'>men</li>
                <li className='col-2'>bags</li>
                <li className='col-2'>gifts</li>
                <li className='col-2'>linea rossa</li>
                <li className='col-2'>pradasphere</li>
            </ul>
            <div className='col-4'>
                <i className='icon-demo icon-search '></i>

            </div>

        </nav>

    )
}