import React from 'react'
import ContactPage from '../../Contact'
import Navbar from '../../Navbar'
import Footer from '../../Footer'

const ContactHOC = () => {
  return (
    <div>
       <div className="bg-gray-900 min-h-screen flex flex-col font-sans text-gray-100">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <ContactPage />
      </main>
      <Footer />
    </div>
    </div>
  )
}

export default ContactHOC
