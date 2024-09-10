import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './App';
import Cupon from './pages/desconto';
import Conversao from './pages/conversao';
import Quantidade from './pages/quantidade';
import Sobre from './pages/sobre';
import Tabuada from './pages/tabuada';
import Imc from './pages/imc';
import NotFound from './pages/notFound';

export default function Navegacao(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/pages/desconto' element={<Cupon/>}/>
                <Route path='/pages/conversao' element={<Conversao/>}/>
                <Route path='/pages/Quantidade' element={<Quantidade/>}/>
                <Route path='/pages/sobre' element={<Sobre/>}/>
                <Route path='/pages/tabuada' element={<Tabuada/>}/>
                <Route path='/pages/imc' element={<Imc/>}/>

                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}