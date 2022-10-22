import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Pokemon from './pages/Pokemon'
import Digimon from './pages/Digimon'


const App = () => {
    return(
        <div>
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                </Routes>
            </BrowserRouter> */}

            <BrowserRouter>
                <Routes>
                    <Route exact path="/login" element={<Login/>} />
                    <Route exact path="/register" element={<Register/>} />
                    <Route exact path="/dashboard" element={<Dashboard/>} />
                    <Route exact path="/pokemon" element={<Pokemon/>} />
                    <Route exact path="/digimon" element={<Digimon/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App