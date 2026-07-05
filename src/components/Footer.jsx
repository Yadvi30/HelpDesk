import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold text-blue-400 mb-4">
              HelpDesk
            </h2>

            <p className="text-slate-400 leading-7">
              Your trusted IT Service Partner for
              Windows installation, networking,
              website development and technical support.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li className="hover:text-blue-400 cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-blue-400 cursor-pointer transition">
                About
              </li>

              <li className="hover:text-blue-400 cursor-pointer transition">
                Services
              </li>

              <li className="hover:text-blue-400 cursor-pointer transition">
                Contact
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>Windows Installation</li>

              <li>Network Setup</li>

              <li>Website Development</li>

              <li>Website Redesign</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">

              <div className="flex items-center gap-3">

                <HiOutlineLocationMarker className="text-blue-400 text-xl"/>

                <span>Nagpur, Maharashtra</span>

              </div>

              <div className="flex items-center gap-3">

                <HiOutlinePhone className="text-blue-400 text-xl"/>

                <span>+91 XXXXX XXXXX</span>

              </div>

              <div className="flex items-center gap-3">

                <HiOutlineMail className="text-blue-400 text-xl"/>

                <span>support@helpdesk.com</span>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-700 my-10"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-slate-400 text-sm">
            © 2026 HelpDesk. All Rights Reserved.
          </p>

          <div className="flex gap-4">

            <div className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 transition flex items-center justify-center cursor-pointer">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-500 transition flex items-center justify-center cursor-pointer">
              <FaLinkedinIn />
            </div>

            <div className="w-10 h-10 rounded-full bg-slate-800 hover:bg-gray-700 transition flex items-center justify-center cursor-pointer">
              <FaGithub />
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;