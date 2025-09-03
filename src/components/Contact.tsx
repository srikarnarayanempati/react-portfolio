import React, { useState } from 'react';
import { Send, Github, Linkedin, Instagram, Mail, MapPin,} from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import SpotlightCard from '../ui/SpotlightCard';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mzzggpqg");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-custom-navy via-custom-black to-custom-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,30,30,0.1),transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-instrument-sans">
            Get In <span className="text-custom-red">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto font-bricolage">
            I'm always excited to discuss new opportunities, collaborations, or just chat about tech. 
            Let's connect and create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
            {state.succeeded ? (
              <p className="text-white text-xl font-bricolage">Thanks for reaching out! I will get back to you soon.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-bricolage">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg backdrop-blur-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-custom-red/50 transition-all duration-300 font-bricolage"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-bricolage">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg backdrop-blur-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-custom-red/50 transition-all duration-300 font-bricolage"
                      placeholder="your@email.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-bricolage">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg backdrop-blur-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-custom-red/50 transition-all duration-300 font-bricolage"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-bricolage">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg backdrop-blur-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-custom-red/50 transition-all duration-300 font-bricolage resize-none"
                    placeholder="Tell me about your project..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-custom-red to-custom-red-light rounded-lg font-bricolage font-semibold text-white shadow-lg hover:shadow-custom-red/25 transition-all duration-300 hover:scale-105 glow"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Send Message
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {/* Contact Details */}
          <SpotlightCard
            spotlightColor="rgba(255, 0, 0, 0.7)"
            className="p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:border-custom-red/50 transition-all duration-300 hover:scale-105"
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-instrument-serif">
              Let's Connect
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-custom-red rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-300 font-bricolage">Email</p>
                  <p className="text-white font-space-mono">srikarnarayan116@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-custom-red rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-300 font-bricolage">Location</p>
                  <p className="text-white font-space-mono">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Social Links */}
          <SpotlightCard
            spotlightColor="rgba(255, 0, 0, 0.7)"
            className="p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:border-custom-red/50 transition-all duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-bold text-white mb-4 font-instrument-serif">
              Follow Me
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/srikarnarayanempati"
                className="w-12 h-12 bg-gradient-to-r from-custom-dark to-custom-navy rounded-full flex items-center justify-center text-white hover:from-custom-red hover:to-custom-red-light transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/srikar-empati-32bb002ba"
                className="w-12 h-12 bg-gradient-to-r from-custom-dark to-custom-navy rounded-full flex items-center justify-center text-white hover:from-custom-red hover:to-custom-red-light transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/srikar.empati"
                className="w-12 h-12 bg-gradient-to-r from-custom-dark to-custom-navy rounded-full flex items-center justify-center text-white hover:from-custom-red hover:to-custom-red-light transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
            </div>
          </SpotlightCard>

          {/* Quick Note */}
          <SpotlightCard
            spotlightColor="rgba(255, 0, 0, 0.7)"
            className="p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:border-custom-red/50 transition-all duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-bold text-white mb-4 font-instrument-serif">
              Quick Note
            </h3>
            <p className="text-gray-300 font-gochi text-lg">
              "Currently looking for exciting opportunities to grow as a developer & data engineer. 
              Let's build something amazing together! 🚀"
            </p>
          </SpotlightCard>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
