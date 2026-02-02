import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsLoading(false);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          setIsLoading(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 font-sans"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          I’d love to hear from you! Let's connect.
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-lg mx-auto bg-gray-900 bg-opacity-50 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-700">
        <h3 className="text-xl sm:text-2xl font-semibold text-white text-center mb-6">
          Send me a Message 🚀
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="user_email" className="sr-only">Email</label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>
          <div>
            <label htmlFor="user_name" className="sr-only">Name</label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>
          <div>
            <label htmlFor="subject" className="sr-only">Subject</label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>
          
          {/* Send Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition duration-300 transform hover:scale-105 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;