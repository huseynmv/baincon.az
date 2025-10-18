import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  MapPin,
  Mail,
  Clock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-gray-700 text-sm w-full">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="bg-[#f3f4fa] px-10 py-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-md" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">ERDUNT</h2>
                <p className="text-xs text-gray-500">The Industry Leaders</p>
              </div>
            </div>

            <p className="text-gray-500 leading-relaxed mb-6 max-w-xs">
              Significantly pushed and the frugal lemur one and meretricious
              lucrative inside before swept magnificently expand our Industries
              via. Lorem ipsum dolor sit amet adipiscing.
            </p>
          </div>

          <div>
            <p className="font-medium mb-3 text-gray-800">Connect With Us</p>
            <div className="flex space-x-3 text-gray-400">
              <a href="#"><Facebook className="w-5 h-5 hover:text-blue-500" /></a>
              <a href="#"><Twitter className="w-5 h-5 hover:text-sky-400" /></a>
              <a href="#"><Linkedin className="w-5 h-5 hover:text-blue-600" /></a>
              <a href="#"><Instagram className="w-5 h-5 hover:text-pink-500" /></a>
            </div>
          </div>
        </div>

        <div className="bg-white px-10 py-12 md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Our Industry</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#">Oil & Gas Engineering</a></li>
              <li><a href="#">Chemical Research</a></li>
              <li><a href="#">Industrial Equipments</a></li>
              <li><a href="#">Building & Construction</a></li>
              <li><a href="#">Energy Production</a></li>
              <li><a href="#">Agricultural Sectors</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">About Erdunt</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#">Company Information</a></li>
              <li><a href="#">Chain Of Factories</a></li>
              <li><a href="#">Our Workforce</a></li>
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Project Opportunities</a></li>
              <li><a href="#">Approach & History</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Contact Us</h3>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 text-orange-500" />
                <span>+1 (934) 256 7850</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-orange-500" />
                <span>
                  950 Alpaca, Virginia <br /> 32809 - United States
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 text-orange-500" />
                <span>info@example.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-1 text-orange-500" />
                <span>Monday to Fri: 9 am to 6 pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white border-t text-center py-4 text-gray-400 text-xs">
        © 2021 <span className="font-semibold text-gray-600">Erdunt</span>. All rights reserved. &nbsp;|&nbsp;
        <a href="#">Investors</a> &nbsp;|&nbsp;
        <a href="#">Careers</a> &nbsp;|&nbsp;
        <a href="#">Downloads</a>
      </div>
    </footer>
  );
}
