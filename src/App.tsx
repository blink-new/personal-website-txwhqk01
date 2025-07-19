import React from 'react';
import { Mail, MapPin, Target, Globe, Zap, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <div className="flex items-center">
              <img 
                src="/emdad-logo.jpeg" 
                alt="EMDAD - Integrated Media & PR Company" 
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
                <span className="block text-gray-600">MEDIA</span>
                & PR COMPANY
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Based in Riyadh, Saudi Arabia. Our team may be small, but our capacity to deliver is big. 
                We create experiences that leave a lasting impression.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-colors">
                  Explore Our Services
                </button>
                <button className="px-6 py-3 border border-black text-black hover:bg-black hover:text-white rounded-lg font-medium transition-colors">
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-black rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 text-center">
                  <img 
                    src="/emdad-logo.jpeg" 
                    alt="EMDAD - Integrated Media & PR Company" 
                    className="h-24 w-auto mx-auto mb-4"
                  />
                  <div className="text-lg text-gray-600">Media & PR Company</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-8">About Us</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We are a boutique yet bold media and PR company based in Riyadh, Saudi Arabia. Our team may be small, but our capacity to deliver is big. We specialize in media buying, public relations, and event management, with a passion for creating experiences that leave a lasting impression.
            </p>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              With strong relationships across local and global media outlets and suppliers, we offer our clients access to world-class platforms and services. Whether it's securing prime advertising placements or executing high-impact events, we bring global reach with local expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:bg-black hover:text-white rounded-lg p-8">
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-2xl font-semibold text-black group-hover:text-white mb-4">Media Buying</h3>
              <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed">
                Strategic media planning and buying across digital, print, TV, radio, and outdoor — both regionally and internationally.
              </p>
            </div>

            <div className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:bg-black hover:text-white rounded-lg p-8">
              <div className="text-4xl mb-6">🎉</div>
              <h3 className="text-2xl font-semibold text-black group-hover:text-white mb-4">Event Management</h3>
              <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed">
                From corporate gatherings to large-scale activations, we handle every detail with precision, creativity, and care.
              </p>
            </div>

            <div className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:bg-black hover:text-white rounded-lg p-8">
              <div className="text-4xl mb-6">📣</div>
              <h3 className="text-2xl font-semibold text-black group-hover:text-white mb-4">Public Relations (PR)</h3>
              <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed">
                We help brands craft their story, build reputation, and engage with their audience through effective communication strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose Us?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="border-0 shadow-lg rounded-lg p-8 bg-white">
              <div className="flex items-start space-x-4">
                <div className="bg-black w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-3">Global Reach, Local Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Access to global media platforms and trusted suppliers with deep knowledge of local market dynamics.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-0 shadow-lg rounded-lg p-8 bg-white">
              <div className="flex items-start space-x-4">
                <div className="bg-black w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-3">Agile & Client-Focused</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Flexible, fast-moving, and client-focused team that adapts to your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-0 shadow-lg rounded-lg p-8 bg-white">
              <div className="flex items-start space-x-4">
                <div className="bg-black w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-3">Creative Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Creative, high-impact solutions tailored specifically to your brand and objectives.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-0 shadow-lg rounded-lg p-8 bg-white">
              <div className="flex items-start space-x-4">
                <div className="bg-black w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-3">Proven Results</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Track record of delivering exceptional results that exceed client expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to elevate your brand? Let's discuss how EMDAD can help you achieve your communication goals.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-black mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="font-medium text-black">Email</div>
                    <div className="text-gray-600">info@emdaad.sa</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="font-medium text-black">Office</div>
                    <div className="text-gray-600">Riyadh, Saudi Arabia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img 
                src="/emdad-logo.jpeg" 
                alt="EMDAD - Integrated Media & PR Company" 
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400 leading-relaxed max-w-md">
                EMDAD - Media & PR company based in Riyadh, Saudi Arabia. 
                Creating experiences that leave a lasting impression.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Media Buying</li>
                <li>Event Management</li>
                <li>Public Relations</li>
                <li>Brand Strategy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Services</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EMDAD - Media & PR Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;