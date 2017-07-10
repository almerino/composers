import Home from '../../Components/Home/Home'
import Composers from '../../Components/Composers/Composers'
import Article from '../../Components/Article/Article'

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/list/composers',
    component: Composers,
  },
  {
    path: '/article/composers/:id',
    component: Article,
  },
]
