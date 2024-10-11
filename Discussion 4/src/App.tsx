import { useState } from 'react'

import './App.css'
import ArtworksListContent from './components/artworks-list-content'
import AboutPage from './components/about-page'
import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import Header from './components/header';

const Root = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ArtworksListContent />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  )
}

const router = createBrowserRouter(
  [{path: "*", Component: Root}]
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
