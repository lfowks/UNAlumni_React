
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/_layout/Layout'
import ListUsers from './pages/listuser/ListUsers'
import Profile from './pages/profile/Profile'

import Company from './pages/company/Company'
import OffersList from './pages/offersList/OffersList'
import Home from './pages/home/home'

import ListCompany from './pages/companyList/ListCompany'
import Inicio from './pages/home/Inicio'



ReactDOM.createRoot(document.getElementById('root')as HTMLElement ).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
    <Route path="/inicio" element={<Inicio />} />
    <Route path="/listuser" element={<ListUsers />} />
    <Route path="/profile/:id" element={<Profile />} />
    <Route path="/companyList" element={<ListCompany />} />
    <Route path="/offersList" element={<OffersList />} />
    <Route path="/companyList/:id" element={<Company />} />
    <Route path="/home" element={<Home />} />

    </Route>
  </Routes>
  </BrowserRouter>
)