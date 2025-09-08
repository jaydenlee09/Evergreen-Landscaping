import { useState } from 'react';
import type { FormEvent } from 'react';
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceInterest: 'consultation'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setSubmitMessage('Thank you for contacting EverGreen Landscaping! We will get back to you within 1-2 business days.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        serviceInterest: 'consultation'
      });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-forest-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in font-playfair">Contact Us</h1>
            <p className="text-xl text-forest-100 animate-fade-in-up">
              Get in touch with our team to discuss your landscaping project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="bg-stone-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-forest-800 mb-2 font-playfair">Call Us</h3>
              <p className="text-stone-600 mb-4">Monday – Friday, 8am – 5pm</p>
              <a href="tel:+16045551234" className="text-forest-600 font-semibold text-lg hover:text-forest-700 transition-colors">
                (604) 555-1234
              </a>
            </div>
            
            {/* Email */}
            <div className="bg-stone-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-forest-800 mb-2 font-playfair">Email Us</h3>
              <p className="text-stone-600 mb-4">We'll respond within 24 hours</p>
              <a href="mailto:info@evergreenlandscaping.com" className="text-forest-600 font-semibold hover:text-forest-700 transition-colors break-all">
                info@evergreenlandscaping.com
              </a>
            </div>
            
            {/* Visit */}
            <div className="bg-stone-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-forest-800 mb-2 font-playfair">Visit Our Office</h3>
              <p className="text-stone-600 mb-4">Monday – Friday, 9am – 5pm</p>
              <address className="not-italic text-forest-600 font-semibold">
                123 EverGreen Street<br />
                Vancouver, BC V6J 3Z2
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-forest-800 mb-6 font-playfair">Send Us a Message</h2>
              
              {submitStatus && (
                <div className={`mb-6 p-4 rounded ${submitStatus === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-stone-700 mb-2 font-medium">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                      required
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-stone-700 mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-stone-700 mb-2 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                    />
                  </div>
                  
                  {/* Service Interest */}
                  <div>
                    <label htmlFor="serviceInterest" className="block text-stone-700 mb-2 font-medium">I'm Interested In</label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 bg-white"
                    >
                      <option value="consultation">Free Consultation</option>
                      <option value="design">Landscape Design</option>
                      <option value="maintenance">Garden Maintenance</option>
                      <option value="hardscaping">Hardscaping</option>
                      <option value="irrigation">Irrigation Systems</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                {/* Subject */}
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-stone-700 mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                    required
                  />
                </div>
                
                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-stone-700 mb-2 font-medium">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                    required
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  className="bg-forest-600 hover:bg-forest-700 text-white py-3 px-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            {/* Map */}
            <div className="h-[500px] rounded-lg overflow-hidden shadow-md">
              {/* Placeholder for the map - In a real implementation, you would use Google Maps API or similar */}
              <div className="w-full h-full bg-stone-200 flex items-center justify-center">
                <div className="text-center px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-stone-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-stone-600">Interactive Google Map would be embedded here in the production website.</p>
                  <p className="text-stone-500 mt-2">123 EverGreen Street, Vancouver, BC V6J 3Z2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-forest-800 mb-8 text-center font-playfair">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="border-b border-stone-200 pb-6">
                <h3 className="text-xl font-semibold text-forest-700 mb-3 font-playfair">What areas of Vancouver do you service?</h3>
                <p className="text-stone-600">
                  EverGreen Landscaping provides services throughout Vancouver and the Lower Mainland, including West Vancouver, North Vancouver, Burnaby, Richmond, and New Westminster.
                </p>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="border-b border-stone-200 pb-6">
                <h3 className="text-xl font-semibold text-forest-700 mb-3 font-playfair">Do you offer free consultations?</h3>
                <p className="text-stone-600">
                  Yes, we offer complimentary initial consultations for new landscape design projects. During this meeting, we'll discuss your vision, budget, timeline, and how we can help bring your project to life.
                </p>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="border-b border-stone-200 pb-6">
                <h3 className="text-xl font-semibold text-forest-700 mb-3 font-playfair">How much does a typical landscaping project cost?</h3>
                <p className="text-stone-600">
                  Project costs vary widely depending on the scope, materials, and specific requirements. Small projects might start at $5,000, while comprehensive landscape transformations can range from $20,000 to $100,000+. We work with you to create a design that fits your budget.
                </p>
              </div>
              
              {/* FAQ Item 4 */}
              <div>
                <h3 className="text-xl font-semibold text-forest-700 mb-3 font-playfair">Do you offer ongoing maintenance services?</h3>
                <p className="text-stone-600">
                  Yes, we provide regular maintenance services to keep your landscape looking its best. We offer weekly, bi-weekly, or monthly maintenance schedules tailored to your property's needs and seasonal requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
