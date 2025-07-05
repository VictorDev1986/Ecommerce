import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import Home from '../home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import Signin from '../Signin';
import Navbar from '../../Components/Navbar';
import './App.css';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/MyOrders', element: <MyOrders /> },
        { path: '/MyAccount', element: <MyAccount /> },
        { path: '*', element: <NotFound /> },
        
    ]);

    return routes;
};

const App = () => {
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <AppRoutes />
                <Navbar />
            </BrowserRouter>
        </ShoppingCartProvider>
    );
};

export default App;

