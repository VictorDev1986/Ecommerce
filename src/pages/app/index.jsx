import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home />, },
        { path: '/MyOrder', element: <MyOrder />, },
        { path: '/MyOrders', element: <MyOrders />, },
        { path: '/MyAccount', element: <MyAccount />, },
        { path: '*', element: <NotFound />, },
        { path: '/Signin', element: <Signin />, },
    ])

    return routes
}

const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
            <Navbar />
        </BrowserRouter>
    )
}

export default App
