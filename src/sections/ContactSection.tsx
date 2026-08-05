import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { GradientButton } from '../components/Buttons';
import { Mail, Phone, MapPin, Send, ArrowLeft } from 'lucide-react';

export default function ContactSection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <FadeIn delay={0} y={40}>
          <button
            onClick={() => navigate('/')}
            className="mb-8 flex items-center gap-2 text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm uppercase tracking-wider">Back to Home</span>
          </button>
          <h2
            className="hero-heading mb-4 text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
          >
            Get In Touch
          </h2>
          <p className="mb-16 text-center text-muted">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <FadeIn delay={0.1} x={-40}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-light">Email</h3>
                  <p className="text-muted">hello@themotionclub.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-light">Phone</h3>
                  <p className="text-muted">+91 89493 83519
</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-light">Location</h3>
                  <p className="text-muted">Fitness Street, Alwar, India 301001</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="mb-4 text-lg font-semibold text-light">Club Hours</h3>
                <div className="space-y-2 text-sm text-muted">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2} x={40}>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-light">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-dark/50 border border-white/10 px-4 py-3 text-light placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-light">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-dark/50 border border-white/10 px-4 py-3 text-light placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-light">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-dark/50 border border-white/10 px-4 py-3 text-light placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-light">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-lg bg-dark/50 border border-white/10 px-4 py-3 text-light placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <GradientButton label="Send Message" className="w-full" icon={<Send className="ml-2 h-4 w-4" />} />
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
