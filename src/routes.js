import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import PostUnico from './pages/PostUnico';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/post/:id" element={<PostUnico />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;