import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Linkedin,
  AlertCircle,
  Loader,
} from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please enter your message");
      return false;
    }
    if (formData.message.trim().length < 10) {
      setErrorMessage("Message should be at least 10 characters long");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Using Formspree (free form service) - you can replace with your preferred service
      const response = await fetch("https://formspree.io/f/xpwagdvr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
      setErrorMessage(
        "Failed to send message. Please try again or contact me directly via email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "singh.badal3375@gmail.com",
      link: "mailto:singh.badal3375@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9179787632",
      link: "tel:+919179787632",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Bhopal, India",
      link: "#",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "badalsingh91",
      link: "https://www.linkedin.com/in/badalsingh91/",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            I'm always open to discussing new opportunities, projects, or just
            having a conversation about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                I'm currently pursuing my B.Tech in Computer Science and looking
                for internship opportunities and collaborative projects. Feel
                free to reach out if you'd like to discuss technology, machine
                learning, or potential opportunities.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    info.link.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-800/80 rounded-lg hover:bg-gray-700 transition-all duration-300 group hover:scale-[1.02]"
                >
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {info.title}
                    </p>
                    <p className="text-white font-medium text-sm sm:text-base">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-6 sm:pt-8">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                Current Status
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm sm:text-base">
                    Available for internships
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm sm:text-base">
                    Open to collaboration
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm sm:text-base">
                    Graduating in 2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-gray-600 transition-colors">
            {submitStatus === "success" ? (
              <div className="text-center py-8 sm:py-12">
                <CheckCircle
                  size={48}
                  className="sm:w-16 sm:h-16 text-green-400 mx-auto mb-4 animate-bounce"
                />
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/80 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/80 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/80 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-400 resize-none disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Minimum 10 characters
                  </p>
                </div>

                {submitStatus === "error" && (
                  <div className="flex items-start space-x-2 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                    <AlertCircle
                      size={18}
                      className="text-red-400 mt-0.5 flex-shrink-0"
                    />
                    <p className="text-red-300 text-sm">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <Loader
                        size={16}
                        className="sm:w-5 sm:h-5 animate-spin"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} className="sm:w-5 sm:h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Your message will be sent directly to my email. I typically
                  respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
