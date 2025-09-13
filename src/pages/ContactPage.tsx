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
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-forest-800 via-forest-700 to-forest-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-texture-light opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-forest-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-forest-400 rounded-full opacity-15 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-forest-600/30 backdrop-blur-sm rounded-full border border-forest-400/30 mb-8">
              <div className="w-2 h-2 bg-forest-300 rounded-full mr-3 animate-pulse"></div>
              <span className="text-forest-100 font-switzer font-medium text-sm">Available for new projects</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in font-switzer bg-gradient-to-r from-white to-forest-100 bg-clip-text text-transparent leading-tight">
              Let's Create Something Beautiful Together
            </h1>
            <p className="text-xl md:text-2xl text-forest-100 animate-fade-in-up font-switzer font-light max-w-2xl mx-auto leading-relaxed">
              Ready to transform your outdoor space? We're here to bring your vision to life with sustainable, stunning landscapes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button className="bg-white text-forest-800 hover:bg-forest-50 px-8 py-4 text-lg font-switzer font-semibold shadow-xl">
                Start Your Project
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-forest-800 px-8 py-4 text-lg font-switzer font-semibold">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-8 h-8 border-2 border-forest-300/40 rounded-lg rotate-45 animate-bounce-slow hidden lg:block"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-forest-400/30 rounded-full animate-pulse-slow hidden lg:block"></div>
        <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-forest-300/40 rounded-full animate-bounce-slow hidden lg:block"></div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-forest-800 mb-6 font-switzer">
              Get In Touch
            </h2>
            <p className="text-xl text-stone-600 font-switzer font-light max-w-2xl mx-auto">
              Choose the way that works best for you. We're here to help bring your landscaping dreams to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Phone */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-100 hover:border-forest-200">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-gradient-to-r from-forest-600 to-forest-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-forest-800 mb-3 font-switzer">Call Us</h3>
                <p className="text-stone-600 mb-4 font-switzer">Monday – Friday, 8am – 5pm</p>
                <a 
                  href="tel:+16045551234" 
                  className="inline-flex items-center text-forest-600 font-bold text-lg hover:text-forest-700 transition-colors font-switzer group-hover:translate-x-1 transform duration-300"
                >
                  (604) 555-1234
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Email */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-100 hover:border-forest-200">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-gradient-to-r from-forest-600 to-forest-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-forest-800 mb-3 font-switzer">Email Us</h3>
                <p className="text-stone-600 mb-4 font-switzer">We'll respond within 24 hours</p>
                <a 
                  href="mailto:info@evergreenlandscaping.com" 
                  className="inline-flex items-center text-forest-600 font-bold hover:text-forest-700 transition-colors font-switzer break-all group-hover:translate-x-1 transform duration-300"
                >
                  info@evergreenlandscaping.com
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-forest-100 rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-forest-200 rounded-full opacity-40 blur-xl"></div>
              
              <div className="relative bg-gradient-to-br from-stone-50 via-white to-forest-50/30 p-8 md:p-10 rounded-3xl shadow-2xl border border-stone-100">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4 font-switzer">
                    Let's Start Your Project
                  </h2>
                  <p className="text-stone-600 font-switzer font-light text-lg">
                    Fill out the form below and we'll get back to you within 24 hours with a personalized consultation.
                  </p>
                </div>
                
                {submitStatus && (
                  <div className={`mb-8 p-6 rounded-2xl border-l-4 ${
                    submitStatus === 'success' 
                      ? 'bg-forest-50 text-forest-800 border-forest-500' 
                      : 'bg-red-50 text-red-700 border-red-500'
                  }`}>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-switzer font-medium">{submitMessage}</span>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="group">
                      <label htmlFor="name" className="block text-stone-700 mb-3 font-switzer font-semibold text-sm uppercase tracking-wide">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-0 focus:border-forest-500 transition-all duration-300 font-switzer bg-white/80 backdrop-blur-sm group-hover:border-stone-300"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    {/* Email */}
                    <div className="group">
                      <label htmlFor="email" className="block text-stone-700 mb-3 font-switzer font-semibold text-sm uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-0 focus:border-forest-500 transition-all duration-300 font-switzer bg-white/80 backdrop-blur-sm group-hover:border-stone-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="group">
                      <label htmlFor="phone" className="block text-stone-700 mb-3 font-switzer font-semibold text-sm uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-0 focus:border-forest-500 transition-all duration-300 font-switzer bg-white/80 backdrop-blur-sm group-hover:border-stone-300"
                        placeholder="(604) 555-1234"
                      />
                    </div>
                    
                    {/* Service Interest */}
                    <div className="group">
                      <label htmlFor="serviceInterest" className="block text-stone-700 mb-3 font-switzer font-semibold text-sm uppercase tracking-wide">
                        Service Interest
                      </label>
                      <select
                        id="serviceInterest"
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-0 focus:border-forest-500 transition-all duration-300 font-switzer bg-white/80 backdrop-blur-sm group-hover:border-stone-300 appearance-none cursor-pointer"
                      >
                        <option value="consultation">Free Consultation</option>
                        <option value="design">Landscape Design</option>
                        <option value="maintenance">Garden Maintenance</option>
                        <option value="hardscaping">Hardscaping</option>
                        <option value="irrigation">Irrigation Systems</option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Subject */}
                  <div className="group">
                    <label htmlFor="subject" className="block text-stone-700 mb-3 font-switzer font-semibold text-sm uppercase tracking-wide">
                      Project Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-0 focus:border-forest-500 transition-all duration-300 font-switzer bg-white/80 backdrop-blur-sm group-hover:border-stone-300"
                      placeholder="Brief description of your project"
                      required
                    />
                  </div>
                  
                  {/* Message */}
                  <div className="group">
                    <label htmlFor="message" className="block text-stone-700 mb-3 font-switzer font-semibold text-sm uppercase tracking-wide">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-6 py-4 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-0 focus:border-forest-500 transition-all duration-300 font-switzer bg-white/80 backdrop-blur-sm group-hover:border-stone-300 resize-none"
                      placeholder="Tell us about your vision, timeline, budget, and any specific requirements..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full md:w-auto bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white py-4 px-10 text-lg font-switzer font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          Send Message
                          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Service Area Map */}
            <div className="relative">
              <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-forest-100 to-forest-200">
                {/* Map Placeholder */}
                <div className="w-full h-full relative bg-gradient-to-br from-forest-50 via-sky-50 to-forest-100 flex items-center justify-center">
                  
                  <div className="text-center px-8 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-forest-600 to-forest-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-forest-800 mb-4 font-switzer">Our Service Area</h3>
                    <p className="text-lg text-stone-700 font-switzer font-medium mb-6">
                      Lower Mainland, British Columbia
                    </p>
                    
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                      <h4 className="text-lg font-bold text-forest-800 mb-4 font-switzer">Cities We Serve:</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm font-switzer">
                        <div className="flex items-center text-stone-700">
                          <div className="w-2 h-2 bg-forest-500 rounded-full mr-2"></div>
                          Vancouver
                        </div>
                        <div className="flex items-center text-stone-700">
                          <div className="w-2 h-2 bg-forest-500 rounded-full mr-2"></div>
                          Burnaby
                        </div>
                        <div className="flex items-center text-stone-700">
                          <div className="w-2 h-2 bg-forest-500 rounded-full mr-2"></div>
                          Richmond
                        </div>
                        <div className="flex items-center text-stone-700">
                          <div className="w-2 h-2 bg-forest-500 rounded-full mr-2"></div>
                          North Vancouver
                        </div>
                        <div className="flex items-center text-stone-700">
                          <div className="w-2 h-2 bg-forest-500 rounded-full mr-2"></div>
                          West Vancouver
                        </div>
                        <div className="flex items-center text-stone-700">
                          <div className="w-2 h-2 bg-forest-500 rounded-full mr-2"></div>
                          New Westminster
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-stone-500 mt-4 text-sm font-switzer">
                      Interactive map integration available upon request
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-stone-50 via-white to-forest-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-forest-800 mb-6 font-switzer">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-stone-600 font-switzer font-light max-w-2xl mx-auto">
                Find answers to common questions about our landscaping services and process.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  question: "What areas of Vancouver do you service?",
                  answer: "EverGreen Landscaping provides services throughout Vancouver and the Lower Mainland, including West Vancouver, North Vancouver, Burnaby, Richmond, and New Westminster. We're proud to serve the entire Lower Mainland region with our eco-friendly landscaping solutions."
                },
                {
                  question: "Do you offer free consultations?",
                  answer: "Yes, we offer complimentary initial consultations for new landscape design projects. During this 60-90 minute meeting, we'll walk your property, discuss your vision, budget, and timeline, and provide you with initial ideas and recommendations. There's no obligation, and it's our way of getting to know you and your space."
                },
                {
                  question: "How much does a typical landscaping project cost?",
                  answer: "Project costs vary widely depending on the scope, materials, and specific requirements. Garden maintenance might start at $150/visit, while design consultations begin at $500. Comprehensive landscape transformations can range from $15,000 to $100,000+. We work with you to create a design that fits your budget and provide transparent, detailed estimates."
                },
                {
                  question: "Do you offer ongoing maintenance services?",
                  answer: "Yes, we provide comprehensive maintenance services to keep your landscape looking its best year-round. We offer weekly, bi-weekly, or monthly maintenance schedules that include pruning, weeding, fertilizing, seasonal cleanup, and irrigation system maintenance. All tailored to your property's specific needs and the changing seasons."
                },
                {
                  question: "How long does a typical landscape project take?",
                  answer: "Timeline varies based on project complexity. Simple garden installations might take 1-3 days, while comprehensive landscape renovations can take 2-8 weeks. We provide detailed timelines during consultation and keep you informed throughout the process. Weather and permit requirements can affect scheduling."
                },
                {
                  question: "What makes your approach eco-friendly?",
                  answer: "We prioritize native plants that require less water and maintenance, use organic fertilizers and pest control methods, install efficient irrigation systems, and implement sustainable practices like composting and rainwater harvesting. We believe in creating beautiful landscapes that work in harmony with the local ecosystem."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-stone-100 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left hover:bg-forest-50/50 transition-all duration-300 focus:outline-none focus:bg-forest-50/50"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-forest-800 font-switzer pr-4">
                        {faq.question}
                      </h3>
                      <div className={`w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-8 pb-6">
                      <div className="h-px bg-stone-200 mb-6"></div>
                      <p className="text-stone-700 font-switzer font-light leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA at bottom of FAQ */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-forest-600 to-forest-700 p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4 font-switzer">
                  Still Have Questions?
                </h3>
                <p className="text-forest-100 font-switzer font-light mb-6 text-lg">
                  We're here to help! Get in touch and we'll provide personalized answers for your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-forest-800 hover:bg-forest-50 px-8 py-3 font-switzer font-semibold">
                    Schedule Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-forest-800 px-8 py-3 font-switzer font-semibold"
                  >
                    Call Us Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
