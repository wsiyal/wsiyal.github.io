import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail, ArrowRight, ChevronDown, ExternalLink } from 'lucide-react'
import { cn } from './lib/utils'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-xl font-bold text-slate-900 dark:text-white">
              WS
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400",
                    activeSection === item.href.slice(1)
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-300"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className="block py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-slate-700 dark:text-slate-200">WS</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Wajid Siyal
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
            PhD Student | Fluid Dynamics & Computational Physics
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              View My Work
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 hover:border-blue-600 dark:hover:border-blue-400 text-slate-700 dark:text-slate-200 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a href="#" className="p-3 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
              <Github size={24} className="text-slate-700 dark:text-slate-200" />
            </a>
            <a href="#" className="p-3 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
              <Linkedin size={24} className="text-slate-700 dark:text-slate-200" />
            </a>
            <a href="#" className="p-3 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
              <Mail size={24} className="text-slate-700 dark:text-slate-200" />
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-slate-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              I am a PhD student specializing in Fluid Dynamics with extensive expertise in computational methods including Lattice Boltzmann Methods (LBM), Physics-Informed Neural Networks (PINNs), and Bayesian Optimization. My research focuses on developing innovative computational approaches to solve complex fluid dynamics problems.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Beyond my academic research, I have comprehensive skills in programming languages, application development, and web design. I bridge the gap between theoretical computational physics and practical software development, creating tools and applications that advance scientific research and solve real-world engineering challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">
            Research Interests
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Lattice Boltzmann Methods',
                description: 'Advanced LBM implementations for multiphase flows and complex geometries with GPU acceleration.',
                icon: '🌊',
              },
              {
                title: 'Physics-Informed Neural Networks',
                description: 'Deep learning approaches that incorporate physical laws into neural network architectures for PDE solving.',
                icon: '🧠',
              },
              {
                title: 'Bayesian Optimization',
                description: 'Probabilistic optimization techniques for parameter estimation and experimental design in computational physics.',
                icon: '📊',
              },
              {
                title: 'Computational Fluid Dynamics',
                description: 'High-fidelity simulations of turbulent flows, heat transfer, and fluid-structure interactions.',
                icon: '💨',
              },
              {
                title: 'High-Performance Computing',
                description: 'Parallel computing strategies and GPU acceleration for large-scale scientific simulations.',
                icon: '⚡',
              },
              {
                title: 'Scientific Visualization',
                description: 'Interactive visualization techniques for complex multi-dimensional scientific data.',
                icon: '📈',
              },
            ].map((interest, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{interest.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{interest.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Lattice Boltzmann Methods', level: 95 },
              { name: 'Physics-Informed Neural Networks', level: 90 },
              { name: 'Bayesian Optimization', level: 88 },
              { name: 'Computational Fluid Dynamics', level: 92 },
              { name: 'Python Programming', level: 96 },
              { name: 'App Development', level: 85 },
              { name: 'Web Development', level: 90 },
              { name: 'Data Analysis', level: 87 },
            ].map((skill) => (
              <div key={skill.name} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between mb-3">
                  <span className="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'LBM Flow Simulator',
                description: 'High-performance Lattice Boltzmann Method implementation for complex fluid flow simulations with GPU acceleration.',
                tags: ['Python', 'CUDA', 'NumPy', 'MPI'],
              },
              {
                title: 'PINN Solver Framework',
                description: 'Physics-Informed Neural Network framework for solving partial differential equations in fluid dynamics.',
                tags: ['TensorFlow', 'PyTorch', 'JAX', 'SciPy'],
              },
              {
                title: 'Bayesian Optimizer',
                description: 'Adaptive Bayesian optimization system for parameter tuning in computational physics experiments.',
                tags: ['GPyTorch', 'Scikit-learn', 'Optuna'],
              },
              {
                title: 'CFD Visualization App',
                description: 'Interactive web application for real-time visualization of computational fluid dynamics results.',
                tags: ['React', 'Three.js', 'WebGL', 'D3.js'],
              },
              {
                title: 'Mobile Research Assistant',
                description: 'Cross-platform mobile app for monitoring and controlling computational experiments remotely.',
                tags: ['React Native', 'Flutter', 'Firebase'],
              },
              {
                title: 'Scientific Computing Library',
                description: 'Comprehensive Python library for numerical methods in fluid dynamics and heat transfer.',
                tags: ['Python', 'Cython', 'OpenMP', 'HDF5'],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-slate-300 dark:text-slate-600 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-300 mb-12">
            I'm always open to discussing research collaborations, computational physics challenges, and software development opportunities. Feel free to reach out!
          </p>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Mail size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2024 Wajid Siyal. Built with ❤️ using React & TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
