import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';



export default function Quantidade(){

    const [qtd1, setQtd1] = useState(0)
    const [qtd2, setQtd2] = useState(0)
    const [qtd3, setQtd3] = useState(0)

    const [resultado, setResultado] = useState(0)


    function pequeno(){
        return qtd1 * 13.50
    }

    function medio(){
        return qtd2 * 15.00
    }

    function grande(){
        return qtd3 * 17.50
    }

    function soma(){
        let total = pequeno() + medio() + grande()
        setResultado(total)
    }

    return(
        <div>
            <div className='quantidade'>
            
            <div className='faixa-quantidade'>
                <img className='img-quantidade' src="/assets/images/logo-frei.png"/>

                <h1 className='cabecalho-quantidade'>React Freis</h1>
                
                <Link to='/' className='link-inicio-quantidade'>
                <h1 className='inicio'>Inicio</h1>
                </Link>

                <Link to='/pages/sobre' className='link-sobre-quantidade'>
                <h1 className='sobre'>Sobre</h1>
                </Link>
            </div>

            <div className='exercicio-03'>
                <Link to='/'>
                    <img className='voltar' src="/assets/images/img-voltar.png"/>
                </Link>

                <h1>Exercício 03 - Valor total por quantidade</h1>
            </div>

            <div className='barra-azul'>
            </div>

            <div className='enunciado'>
                <h3>Implementar um programa em Javascript para calcular o <b>total de uma venda de açaí </b> a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</h3>
            </div>

            <div className='container-quantidade'>

            <div className='qtds'>

                <h1 className='qtd-pequeno'>Quantidade pequeno</h1>

                <h1 className='qtd-medio'>Quantidade médio</h1>

                <h1 className='qtd-grande'>Quantidade grande</h1>

            </div>

            <div className='buttons-quantidade'>

            <input className='button-quantidade-01' onChange={e=> setQtd1(e.target.value)}></input>

            <input className='button-quantidade-02' onChange={e=> setQtd2(e.target.value)}></input>

            <input className='button-quantidade-03' onChange={e=> setQtd3(e.target.value)}></input>
            
            </div>
                <button className='executar-quantidade' onClick={soma}>Executar</button>
            </div>

            <div className='resultado-quantidade'>
                <p>Resultado: O total é R$ {resultado.toFixed(2)}</p>
            </div>
        </div>
        </div>
    )
}