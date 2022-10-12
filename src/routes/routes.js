import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import CarouselHome from "../components/CarouselHome";
import Header from "../components/Header";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Statistics from "../components/Statistics";
import Main from "../layout/Main";
export const router = createBrowserRouter([
    {
        path: '/',
        loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                },
                element: <CarouselHome></CarouselHome>
            },
            {
                path: '/topics',
                loader: async () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                },
                element: <Home></Home>
            },
            {
                path: '/statistics',
                loader: async () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                },
                element: <Statistics></Statistics>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: 'quiz/:id',
                loader: async ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                },
                element: <Quiz></Quiz>
            }
        ]
    },
    {
        path: '*',
        element: <div>
            <Header></Header>
            <img src="page404.jpg"></img>
        </div>
    }
])