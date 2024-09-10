import './App.scss';
import { Link } from 'react-router-dom';
import Cabecalho from './componentes/cabecalho';
import Cards from './componentes/cards';

export default function App() {

  let treino = [
    {
      link_card: '/pages/desconto',
      img_card: '/assets/images/amarelo.png',
      titulo: 'cupom de desconto',
      subtitulo: 'Exercício 01'
    },

    {
      link_card: '/pages/conversao',
      img_card: '/assets/images/verde.png',
      titulo: 'Converter em KG',
      subtitulo: 'Exercício 02'
    },

    {
      link_card: '/pages/quantidade',
      img_card: '/assets/images/azul.png',
      titulo: 'Converter em quantidade',
      subtitulo: 'Exercício 03'
    },

    {
      link_card: '/pages/tabuada',
      img_card: '/assets/images/marron.png',
      titulo: 'Tabuada',
      subtitulo: 'Exercício 11'
    },

    {
      link_card: '/pages/imc',
      img_card: '/assets/images/marron.png',
      titulo: 'Tabuada',
      subtitulo: 'Exercício 11'
    }
  ]



  return (
    <div className="App">
      
      <div className='header'>
        <Cabecalho/>
      </div>

      <div className='tittle'>
        <h1>Escolha um treino..</h1>
      </div>

      <div className='cards'>

        {treino.map( card =>
          <Cards
            link_card = {card.link_card}
            img_card = {card.img_card}
            titulo = {card.titulo}
            subtitulo = {card.subtitulo}
            />
        )}

      </div>



    </div>
  );
}


