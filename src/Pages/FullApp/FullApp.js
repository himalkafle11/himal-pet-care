import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ModalLog from '../../components/Modal/ModalLog'
import Home from '../Home/Home'

export const FullApp = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/profile" element={<ModalLog/>}></Route>
    </Routes>
  )
}
