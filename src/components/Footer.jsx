import React from "react";
import { Mail } from "lucide-react";
import brandlogo from "../assets/brandLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="contactus"
      className="bg-[#0B1120] pt-2 pb-1 text-white text-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr_1.6fr] gap-8 mb-2">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-10 h-10  flex items-center justify-center ">
                <img src={brandlogo} alt="brandlogo" className="rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">
                  HR Analytics-Mirror
                </span>
                {/* <span className="text-[10px] text-gray-400 font-medium">
                  Stories HR is Missing
                </span> */}
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-[200px]">
              We help HR professionals look beyond dashboards and uncover the
              stories hidden in data.
            </p>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-white text-xs mb-2 uppercase tracking-wider">
                QUICK LINKS
              </h4>
              <ul className="">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#books"
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Books
                  </a>
                </li>
                <li>
                  {/* <a
                    href="#"
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Insights
                  </a> */}
                </li>
                <li>
                  <a
                    href="#quiz"
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Quiz Arena
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-xs mb-2 uppercase tracking-wider">
                RESOURCES
              </h4>
              <ul className="">
                <li>
                  <a
                    href="#assessments"
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Tools& Assessments
                  </a>
                </li>
                <li>
                  <a
                    href="#reviews"
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Reviews
                  </a>
                </li>
                <li></li>
                <li></li>
              </ul>
              {/* <ul className="">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Downloads
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Sample Dashboards
                  </a>
                </li>
              </ul> */}
            </div>
          </div>

          {/* Right Column / Contact */}
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="font-bold text-white text-xs mb-2 uppercase tracking-wider">
                  COMPANY
                </h4>
                <ul className="">
                  <li>
                    <a
                      href="https://talent-synergy.com/contact-us"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition text-xs"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <Link
                      to={"/author"}
                      className="text-gray-400 hover:text-white transition text-xs"
                    >
                      Authors
                    </Link>
                  </li>
                  <li>
                    {/* <a
                      href="#"
                      className="text-gray-400 hover:text-white transition text-xs"
                    >
                      Privacy Policy
                    </a> */}
                  </li>
                  <li>
                    {/* <a
                      href="#"
                      className="text-gray-400 hover:text-white transition text-xs"
                    >
                      Terms& Conditions
                    </a> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" min-w-fit">
            <h4 className="font-bold text-white text-xs mb-4 uppercase tracking-wider">
              GET IN TOUCH
            </h4>
            <div className="flex items-center gap-2 mb-4 text-gray-400 text-xs w-max">
              <Mail size={14} />
              <a
                href="mailto:discover@talent-synergy.com"
                className="hover:text-white transition underline underline-offset-2 whitespace-nowrap"
              >
                discover@talent-synergy.com
              </a>
            </div>
            {/* <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold text-xs py-3 px-4 rounded-md transition shadow-md shadow-blue-500/20">
              BULK ORDERS/ INQUIRY
            </button> */}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-500 font-medium">
            © 2026 HR Analytics – Mirror. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
