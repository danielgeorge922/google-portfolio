import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="flex pt-4 bg-blue-10 gap-4 flex-col px-4 max-w-7xl mx-auto">
      <p className="text-sm text-gray-600 pb-4">
        Contact information and social links
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="w-5 h-5 text-[var(--uf-blue)]" />
              <a
                href="mailto:danielgeorge922@gmail.com"
                className="text-gray-700 hover:text-[var(--uf-blue)]"
              >
                danielgeorge922@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="w-5 h-5 text-[var(--uf-blue)]" />
              <span className="text-gray-700">(XXX) XXX-XXXX</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Connect With Me
          </h2>
          <div className="space-y-4">
            <a
              href="https://linkedin.com/in/danielgeorge922"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-[var(--uf-blue)] transition"
            >
              <FaLinkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/danielgeorge922"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-[var(--uf-blue)] transition"
            >
              <FaGithub className="w-5 h-5" />
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
