import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    return (
        <div className="max-w-lg mx-auto p-6 mt-10 bg-gray-50 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label className="block text-gray-600 font-medium" htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-gray-600 font-medium" htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john.doe@example.com"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-gray-600 font-medium" htmlFor="message">Your Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Write your message..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                        rows="5"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition duration-200 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                    Send Message
                </button>
            </form>
            {success && (
                <div className="mt-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg text-center">
                    Your message has been sent successfully!
                </div>
            )}
        </div>
    );
};

export default ContactForm;
