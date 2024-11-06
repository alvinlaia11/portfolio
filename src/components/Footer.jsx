function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Alvin Nonitehe Syas Putra Laia. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/alvinlaia11" target="_blank" className="hover:text-blue-400">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/alvin-nonitehe-syas-putra-laia-6504a825a/" target="_blank" className="hover:text-blue-400">
              LinkedIn
            </a>
            <a href="mailto:alvinlaia2004@gmail.com" className="hover:text-blue-400">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 