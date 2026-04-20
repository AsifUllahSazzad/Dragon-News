import {createBrowserRouter, Navigate} from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout';
import CategoryNews from '../components/pages/CategoryNews';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: async ({params}) => {
                    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`);

                    const data = res.json();

                    return data;
                }
            },
        ]
    },
    {
        path: '/news',
        element: <h1>News</h1>
    },
    {
        path: '/auth',
        element: <h1>Login</h1>
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
])


export default router;