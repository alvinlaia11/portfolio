import { motion } from 'framer-motion'

function Projects() {
  const projects = [
    {
      title: 'Dashboard Kejaksaan',
      description: 'Sistem dashboard untuk penjadwalan tindak pidana khusus dengan fitur upload berkas dan manajemen kasus. Menggunakan React.js untuk frontend, Node.js untuk backend, dan PostgreSQL sebagai database.',
      image: './images/dashboard-kejaksaan.png',
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Express.js', 'Tailwind CSS'],
      liveLink: 'https://systemkejaksaan.site/login',
      githubLink: 'https://github.com/alvinlaia11/frontend-kejaksaan'
    },
    {
      title: 'Website Jajanan Menyala',
      description: 'Website company profile untuk UKM Jajanan Menyala dengan fitur katalog produk, informasi perusahaan, dan form pemesanan. Dibangun menggunakan React.js, Tailwind CSS, dan terintegrasi dengan WhatsApp untuk pemesanan.',
      image: './images/jajananmenyala.jpg',
      technologies: ['React.js', 'Tailwind CSS', 'WhatsApp Integration', 'Responsive Design'],
      liveLink: 'https://ukmjajananmenyala.site/',
      githubLink: '#'
    },
    {
      title: 'MCI Landing Page',
      description: 'Desain landing page untuk MCI (Millionaire Club Indonesia) dengan fokus pada tampilan yang profesional dan informatif. Termasuk fitur showcase penghargaan, program tour, dan informasi perusahaan.',
      image: './images/mci-landing.png',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'Landing Page'],
      liveLink: 'https://www.figma.com/proto/zBc423NqL1DqAjdc2Vdo0b/Virtual-Intership-MCI?page-id=443%3A2107&node-id=738-8256&starting-point-node-id=1123%3A985&t=8leoNAYT2hBM6qNa-1',
      githubLink: '#'
    },
    {
      title: 'E-commerce Design',
      description: 'UI/UX design untuk aplikasi e-commerce dengan fitur login, pencarian produk, keranjang belanja, dan sistem pembayaran. Fokus pada pengalaman pengguna yang seamless dan tampilan yang modern.',
      image: './images/ecommerce.png',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'E-commerce'],
      liveLink: 'https://www.figma.com/design/Sa9GCsUf7yzbIa2V2LeIdc/E-commerce?node-id=0-1&t=qPPbZAYUdELbHlR6-1',
      githubLink: '#'
    },
    {
      title: 'Buddha Loka Design',
      description: 'UI/UX design untuk website Buddha Loka menggunakan Figma. Website ini dirancang untuk memberikan informasi tentang Buddha Loka dengan tampilan yang modern dan user-friendly.',
      image: './images/buddha-loka.png',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
      liveLink: 'https://www.figma.com/design/TmxSf4tfGclbjaouImAMhl/Buddha-Loka?node-id=0-1&t=yZhsTXk8OxmMeWbp-1',
      githubLink: '#'
    },
    {
      title: 'Mobile Healty App',
      description: 'Desain aplikasi mobile untuk kesehatan menggunakan Figma. Aplikasi ini dirancang untuk membantu pengguna memantau kesehatan mereka dengan fitur test kesehatan, konsultasi AI, tips kesehatan, dan konsultasi dokter.',
      image: './images/health-app.png',
      technologies: ['Figma', 'Mobile Design', 'UI/UX Design', 'Prototyping'],
      liveLink: 'https://www.figma.com/design/4VaqSY8q3iQHehIEbw74sT/Desain-Mobile-Healty?node-id=0-1&t=R31SwAEpVGojx19K-1',
      githubLink: '#'
    },
    {
      title: 'Comic Reading App',
      description: 'Desain aplikasi mobile untuk membaca komik dengan fitur login, favorit, bookmark, dan rekomendasi. Interface dirancang untuk pengalaman membaca yang nyaman dengan navigasi yang intuitif.',
      image: './images/comic-app.png',
      technologies: ['Figma', 'Mobile Design', 'UI/UX Design', 'Prototyping'],
      liveLink: 'https://www.figma.com/design/r4kC6DY9fiuA44MbgeAzNm/Comic-reading-app?node-id=0-1&t=dmldPupPRF8MHnQN-1',
      githubLink: '#'
    }
  ]

  const testimonials = [
    {
      name: 'Shanty',
      role: 'Mahasiswa',
      image: 'https://randomuser.me/api/portraits/women/8.jpg',
      text: 'Website Jajanan Menyala yang dibuat oleh Alvin sangat membantu dalam memasarkan produk kami secara online. Tampilan website yang menarik dan fitur pemesanan yang mudah digunakan membuat pelanggan nyaman berbelanja.'
    },
    {
      name: 'Vadnes',
      role: 'Staff Kejaksaan',
      image: 'https://randomuser.me/api/portraits/women/12.jpg', 
      text: 'Dashboard Kejaksaan yang dikembangkan sangat membantu dalam manajemen kasus. Fitur-fiturnya user-friendly dan sesuai kebutuhan. Proses pengembangan berjalan lancar dengan komunikasi yang baik.'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">My Projects</h2>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-card rounded-lg overflow-hidden shadow-lg dark:shadow-dark-border/10 group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      {project.liveLink !== '#' && (
                        <a 
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary-600 text-white px-4 py-2 rounded-full hover:bg-primary-700 transition"
                        >
                          {project.title.includes('Design') || project.title.includes('App') ? 'View Design' : 'Live Demo'}
                        </a>
                      )}
                      {project.githubLink !== '#' && (
                        <a 
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials Section */}
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center dark:text-white">Client Testimonials</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-dark-card p-8 rounded-xl shadow-lg relative h-[300px] flex flex-col justify-between"
                >
                  {/* Quote icon */}
                  <div className="absolute -top-4 left-8 text-5xl text-primary-500 opacity-20">
                    "
                  </div>
                  
                  <div className="relative flex flex-col justify-between h-full">
                    <p className="text-gray-600 dark:text-gray-300 text-lg italic leading-relaxed line-clamp-4">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center mt-6">
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full border-2 border-primary-500"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="ml-4">
                        <h4 className="font-bold text-lg dark:text-white">{testimonial.name}</h4>
                        <p className="text-primary-600 dark:text-primary-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Projects