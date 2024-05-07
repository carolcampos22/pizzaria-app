import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/login/LoginPage'
import { SignUpPage } from '../pages/signup/SignUpPage'
import { Homepage } from '../pages/homepage/Homepage'
import { Menu } from '../pages/menu/Menu'
import { ListIfOptions } from '../pages/listOfOptions/ListOfOptions'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/listofoptions' element={<ListIfOptions />} />
            </Routes>
        </BrowserRouter>
    )
}