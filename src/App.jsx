import { useState, useEffect } from 'react';
import { Eye, Users, Hand, Volume2, Pencil, Smile, ChevronRight, Github, ExternalLink, Cpu, Brain, Camera } from 'lucide-react';

export default function CVProjectSuite() {
  const [activeProject, setActiveProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 'facemask360',
      title: 'FaceMask 360',
      subtitle: 'Real-Time Attendance System',
      description: 'Revolutionary AI-powered attendance tracking system utilizing facial recognition technology for institutions and organizations. Delivers seamless, contactless, and accurate attendance management with advanced deep learning models.',
      icon: Camera,
      gradient: 'from-cyan-500 via-blue-500 to-purple-600',
      features: ['Real-time facial recognition', 'Multi-angle detection', 'Automated reporting', 'Cloud integration'],
      tech: ['CNN', 'FaceNet', 'OpenCV', 'TensorFlow'],
      hero: true,
      serviceUrl: '#'
    },
    {
      id: 'asl',
      title: 'ASL Detection',
      subtitle: 'American Sign Language Recognition',
      description: 'Advanced computer vision system that interprets American Sign Language gestures in real-time, bridging communication gaps and promoting accessibility.',
      icon: Hand,
      gradient: 'from-emerald-500 to-teal-600',
      features: ['26 alphabet signs', 'Real-time translation', 'Gesture accuracy', 'Multi-hand support'],
      tech: ['MediaPipe', 'LSTM', 'Computer Vision', 'Neural Networks'],
      serviceUrl: '#'
    },
    {
      id: 'emotion',
      title: 'Emotion Detection',
      subtitle: 'Facial Expression Analysis',
      description: 'Deep learning model that identifies and classifies human emotions through facial expression analysis with high precision and real-time processing.',
      icon: Smile,
      gradient: 'from-pink-500 to-rose-600',
      features: ['7 emotion classes', 'Real-time analysis', 'Confidence scoring', 'Expression tracking'],
      tech: ['CNN', 'Keras', 'FER Dataset', 'OpenCV'],
      serviceUrl: '#'
    },
    {
      id: 'gesture-writing',
      title: 'Gesture Writing',
      subtitle: 'Hand Gesture Text Input',
      description: 'Innovative system that converts hand gestures into written text, enabling intuitive text input through natural hand movements.',
      icon: Pencil,
      gradient: 'from-orange-500 to-amber-600',
      features: ['Character recognition', 'Gesture mapping', 'Predictive text', 'Custom gestures'],
      tech: ['Hand Tracking', 'ML Classification', 'OpenCV', 'Python'],
      serviceUrl: '#'
    },
    {
      id: 'volume-control',
      title: 'Volume Control',
      subtitle: 'Gesture-Based Audio Control',
      description: 'Touch-free volume control system using hand gestures, providing an intuitive interface for audio manipulation through computer vision.',
      icon: Volume2,
      gradient: 'from-violet-500 to-purple-600',
      features: ['Distance-based control', 'Pinch gestures', 'Real-time feedback', 'Smooth transitions'],
      tech: ['MediaPipe', 'Hand Landmarks', 'Audio API', 'OpenCV'],
      serviceUrl: '#'
    },
    {
      id: 'air-writing',
      title: 'Air Writing',
      subtitle: 'Virtual Canvas Writing System',
      description: 'Write in the air and watch it appear on screen. Advanced tracking technology captures hand movements to create a virtual drawing experience.',
      icon: Pencil,
      gradient: 'from-blue-500 to-indigo-600',
      features: ['Air tracing', 'Multiple colors', 'Erase function', 'Save drawings'],
      tech: ['Hand Tracking', 'Canvas API', 'Computer Vision', 'OpenCV'],
      serviceUrl: '#'
    }
  ];

  const heroProject = projects.find(p => p.hero);
  const otherProjects = projects.filter(p => !p.hero);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">CV Project Suite</h1>
              <p className="text-xs text-gray-400">Computer Vision & Deep Learning</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#projects" className="text-sm hover:text-cyan-400 transition">Projects</a>
            <a href="#tech" className="text-sm hover:text-cyan-400 transition">Technology</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400">Powered by Deep Learning</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Computer Vision
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Project Suite</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence solutions leveraging advanced computer vision and deep neural networks
            </p>
          </div>

          {/* Featured Hero Project */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-3 py-1 mb-4">
                      <span className="text-xs font-semibold text-cyan-400">FLAGSHIP PROJECT</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {heroProject.title}
                    </h3>
                    <p className="text-xl text-gray-300 mb-4">{heroProject.subtitle}</p>
                  </div>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${heroProject.gradient} flex items-center justify-center`}>
                    <heroProject.icon className="w-10 h-10" />
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {heroProject.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Features</h4>
                    <div className="space-y-2">
                      {heroProject.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <ChevronRight className="w-4 h-4 text-cyan-400" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {heroProject.tech.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => window.open(heroProject.serviceUrl, '_blank')}
                    className="group/btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-3 rounded-xl font-semibold flex items-center space-x-2 transition"
                  >
                    <span>Launch Service</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects Grid */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Additional Projects</h2>
            <p className="text-xl text-gray-400">Expanding the boundaries of computer vision applications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <div
                key={project.id}
                className="group relative"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500`}></div>
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 h-full hover:border-white/20 transition duration-300">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}>
                    <project.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{project.subtitle}</p>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Features</h4>
                      <div className="space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                            <span className="text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-xs text-gray-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => window.open(project.serviceUrl, '_blank')}
                    className={`mt-6 w-full bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 px-4 py-2 rounded-lg font-semibold text-sm flex items-center justify-center space-x-2 transition duration-300`}
                  >
                    <span>View Service</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="tech" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-400">Built with industry-leading frameworks and libraries</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Deep Learning', icon: Brain, items: ['TensorFlow', 'Keras', 'PyTorch', 'Neural Networks'] },
              { name: 'Computer Vision', icon: Eye, items: ['OpenCV', 'MediaPipe', 'Image Processing', 'Feature Detection'] },
              { name: 'Development', icon: Cpu, items: ['Python', 'NumPy', 'Pandas', 'Real-time Processing'] }
            ].map((category, idx) => (
              <div key={idx} className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                <div className="space-y-2">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 text-gray-400">
                      <ChevronRight className="w-4 h-4 text-cyan-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">CV Project Suite</h3>
          </div>
          <p className="text-gray-400 mb-6">Advancing computer vision through deep learning innovation</p>
          <p className="text-sm text-gray-500">© 2024 Computer Vision Project Suite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}