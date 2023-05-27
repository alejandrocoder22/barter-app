import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import AddProduct from '../pages/AddProduct';



const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login /> }></Route>
                <Route path="/product" element={<AddProduct /> }></Route>
                <Route path="/" element={<Home /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter