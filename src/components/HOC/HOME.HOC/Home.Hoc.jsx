import React from 'react'
import Footer from '../../Footer'
import PasswordGeneratorCard from '../../PasswordGeneratorCard'
import Navbar from '../../Navbar'

const HomeHoc = () => {
  return (
    <div>
       <div className="bg-gray-900 min-h-screen flex flex-col font-sans text-gray-100">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <PasswordGeneratorCard />
      </main>
      <Footer />
    </div>
    </div>
  )
}

export default HomeHoc
