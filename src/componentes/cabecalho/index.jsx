import './index.scss';
import { Link } from 'react-router-dom';


export default function Cabecalho(){



    return(

        <header className='cabecalho'>

            <img className='logo' src='/assets/images/logo-frei.png'></img>
            <h1 className='h1-cabecalho'>React FreiS</h1>

            <Link to='/' className='link-app-inicio'>
            <h1 className='app-inicio'>Inicio</h1>
            </Link>

            <Link to='/pages/sobre' className='link-app-sobre'>
            <h1 className='app-sobre'>Sobre</h1>
            </Link>

        </header>

    )
}