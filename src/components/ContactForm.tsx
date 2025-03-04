import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully. We will get back to you soon!'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
      
      {submitStatus && (
        <div 
          className={`p-4 mb-6 rounded-lg ${
            submitStatus.success ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'
          }`}
        >
          {submitStatus.message}
        </div>
      )}
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option value="">Select a subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Registration">Registration</option>
          <option value="Sponsorship">Sponsorship</option>
          <option value="Accommodation">Accommodation</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;