import About from '../../About'
import Footer from '../../Footer'
import Navbar from '../../Navbar'

const AboutHOC = () => {
  return (
    <div>
    <div>
       <div className="bg-gray-900 min-h-screen flex flex-col font-sans text-gray-100">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <About />
      </main>
      <Footer />
    </div>
    </div>
      
    </div>
  )
}

export default AboutHOC



