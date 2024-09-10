import { Link } from 'react-router-dom';
import './index.scss';


export default function Sobre(){


    return(
        <div>

            <div className='faixa-sobre'>
                
                <img src="/assets/images/logo-frei.png" className='img-sobre'/>

                <h1 className='h1-sobre-frei'>React FreiS</h1>

                <Link to='/' className='link-sobre-inicio'>
                <h1 className='h1-sobre-inicio'>Inicio</h1>
                </Link>

                <Link to='/pages/sobre' className='link-sobre-sobre'>
                <h1 className='h1-sobre-sobre'>Sobre</h1>
                </Link>

            </div>

            <div className='page-sobre'>

            <h1>Sobre</h1>

            <p className='p-01'>Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a aprimorar suas habilidades em Node.js e lógica de programação de forma prática e envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo que você avance no seu próprio ritmo e de acordo com suas necessidades.</p>

            <p className='p-02'>Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer e desenvolver suas habilidades. <br />
            Estamos ansiosos para ver seu progresso e sucesso!</p>

            <img src="/assets/images/logo-frei.png" className='img-sobre-02'/>
            </div>

        </div>
    )
}