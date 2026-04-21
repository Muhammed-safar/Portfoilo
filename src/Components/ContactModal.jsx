import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { IoClose } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // IMPORTANT: Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' 
    // with your actual keys from EmailJS (https://www.emailjs.com/)
    emailjs.send(
      'service_ud1hsty', 
      'template_5nxq0pk', 
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'muhammedsafarofficial@gmail.com',
      },
      'la9K6vTrvkzuuys27'
    )
    .then((result) => {
      setIsSubmitting(false);
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        onClose();
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, (error) => {
      setIsSubmitting(false);
      alert("Failed to send email. Please check your EmailJS configuration.");
      console.log(error.text);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/40 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors text-primary"
        >
          <IoClose size={24} />
        </button>

        <div className="p-8 md:p-12">
          {isSent ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-4 animate-bounce">
                ✓
              </div>
              <h2 className="text-3xl font-bold text-primary">Message Sent!</h2>
              <p className="text-primary/60">Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-2">Let's Connect</h2>
                <p className="text-primary/60">Fill out the form below and I'll receive your email directly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-primary/70 ml-1">Your Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-primary/70 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-primary/70 ml-1">Subject</label>
                  <input 
                    required
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-primary/70 ml-1">Message</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell me about your project..."
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-accent transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-primary/90 transition-all hover:shadow-xl disabled:opacity-70 group"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <FiSend className={`group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${isSubmitting ? 'animate-pulse' : ''}`} />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
