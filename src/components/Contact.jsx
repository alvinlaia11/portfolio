import { motion } from 'framer-motion'
import { FiMail, FiUser, FiMessageSquare } from 'react-icons/fi'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Ambil nilai dari form
    const name = e.target.user_name.value
    const email = e.target.user_email.value
    const message = e.target.message.value

    // Buat body email
    const mailtoBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`
    
    // Buka email client dengan data yang sudah diisi
    window.location.href = `mailto:alvinlaia2004@gmail.com?subject=Portfolio Contact Form&body=${mailtoBody}`
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center dark:text-white">Contact Me</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12">
            Feel free to reach out to me for any questions or opportunities!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-dark-bg border-none rounded-lg focus:ring-2 focus:ring-primary-500 dark:text-white"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-dark-bg border-none rounded-lg focus:ring-2 focus:ring-primary-500 dark:text-white"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                <FiMessageSquare className="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-dark-bg border-none rounded-lg focus:ring-2 focus:ring-primary-500 dark:text-white"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
            >
              Send Message
            </motion.button>
          </form>

          {/* Additional Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.a
              href="mailto:alvinlaia2004@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FiMail className="text-primary-500 text-xl" />
              <span className="text-gray-600 dark:text-gray-300">alvinlaia2004@gmail.com</span>
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-dark-card rounded-lg shadow-md"
            >
              <FiMessageSquare className="text-primary-500 text-xl" />
              <span className="text-gray-600 dark:text-gray-300">Available for opportunities</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 