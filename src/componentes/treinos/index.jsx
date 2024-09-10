import './index.scss';

import { Link } from 'react-router-dom';


export default function Treinos({titulo, barra_cor, descricao}){



    return(

        <div>

            <div className='exercicio'>

            <Link to='/'>
                <img className='voltar' src="/assets/images/img-voltar.png"/>
            </Link>

            <h1>{titulo}</h1>
            </div>

            <div className={`barra ${barra_cor}`}>
                
            </div>

            <div className='enunciado'>
                <h3>{descricao}</h3>
            </div>

        </div>

    )
}