import { motion } from 'framer-motion'
import { FaFigma, FaGithub, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiTailwindcss, SiPostgresql, SiVisualstudiocode, SiMysql, SiJavascript } from 'react-icons/si'

function Skills() {
  const skills = [
    { 
      name: 'HTML', 
      level: 90,
      gradient: 'from-[#E44D26] to-[#F16529]' // HTML colors
    },
    { 
      name: 'CSS', 
      level: 85,
      gradient: 'from-[#264DE4] to-[#2965F1]' // CSS colors
    },
    { 
      name: 'JavaScript', 
      level: 80,
      gradient: 'from-[#F7DF1E] to-[#F7DF1E]' // JavaScript yellow
    },
    { 
      name: 'React', 
      level: 75,
      gradient: 'from-[#61DAFB] to-[#00B4D8]' // React blue
    },
    { 
      name: 'Tailwind CSS', 
      level: 85,
      gradient: 'from-[#38B2AC] to-[#0694A2]' // Tailwind colors
    },
    { 
      name: 'Node.js', 
      level: 70,
      gradient: 'from-[#339933] to-[#1F7A1F]' // Node.js green
    },
    { 
      name: 'Figma', 
      level: 85,
      gradient: 'from-[#FF3366] to-[#FF9966]' // Figma colors
    }
  ]

  const tools = [
    { name: 'Figma', icon: FaFigma, color: 'hover:text-[#F24E1E]' },
    { name: 'VS Code', icon: SiVisualstudiocode, color: 'hover:text-[#007ACC]' },
    { name: 'GitHub', icon: FaGithub, color: 'hover:text-[#181717]' },
    { name: 'React', icon: FaReact, color: 'hover:text-[#61DAFB]' },
    { name: 'Node.js', icon: FaNodeJs, color: 'hover:text-[#339933]' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'hover:text-[#06B6D4]' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'hover:text-[#4169E1]' },
    { name: 'MySQL', icon: SiMysql, color: 'hover:text-[#4479A1]' },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">Skills</h2>
          <div className="grid gap-6 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium dark:text-white flex items-center gap-2">
                    {skill.name === 'HTML' && <FaHtml5 className="text-[#E44D26]" />}
                    {skill.name === 'CSS' && <FaCss3Alt className="text-[#264DE4]" />}
                    {skill.name === 'JavaScript' && <SiJavascript className="text-[#F7DF1E]" />}
                    {skill.name === 'React' && <FaReact className="text-[#61DAFB]" />}
                    {skill.name === 'Tailwind CSS' && <SiTailwindcss className="text-[#38B2AC]" />}
                    {skill.name === 'Node.js' && <FaNodeJs className="text-[#339933]" />}
                    {skill.name === 'Figma' && <FaFigma className="text-[#FF3366]" />}
                    {skill.name}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-dark-card rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.gradient}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools & Technologies Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center dark:text-white">
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <tool.icon 
                    className={`text-4xl md:text-5xl text-gray-600 dark:text-gray-400 transition-colors duration-300 ${tool.color}`}
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills