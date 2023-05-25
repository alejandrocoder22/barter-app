import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PrivateChat from '../pages/PrivateChat'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/private" element={<PrivateChat/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter