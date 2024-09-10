import './index.scss';

import { Link } from 'react-router-dom';


export default function Cards({link_card, img_card, titulo, subtitulo}){




    return (

        <div className='treino'>

            <Link to={link_card}>

                <button className='button1'>
                <img src={img_card}></img>

                <h3 className='h3-amarelo'>{titulo}</h3>
                <p>{subtitulo}</p>
                </button>
            </Link>

        </div>

    )
}