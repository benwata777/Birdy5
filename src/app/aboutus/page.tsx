"use client";
import Navbar from "../components/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-6 md:p-10 lg:p-14">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-2">
          สนามซ้อมกอล์ฟ ขนาด 86 ช่องซ้อม, แหล่งรวม Pro Shop,
          และสถาบันสอนกอล์ฟชื่อดัง
        </p>
        <p className="mb-2">
          43/10 หมู่6 ต.บางโฉลง อ.บางพลี, Changwat Samut Prakan, Thailand
        </p>

        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faPhone} className="mr-2 text-lg" />
          <span>02-170-7281</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-lg" />
          <span>birdyfive@hotmail.com</span>
        </div>
        <div className="flex items-center mb-2">
          <a
            href="https://www.facebook.com/Birdy5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            FB: https://www.facebook.com/Birdy5
          </a>
        </div>

        <div className="relative w-full h-0 mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.361440064546!2d100.74105990906295!3d13.635764199917393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d5d9cd20c9e31%3A0x884eb68e37f33dc6!2z4Liq4LiZ4Liy4Lih4LmE4LiU4Lij4LmM4LifIOC5gOC4muC4reC4o-C5jOC4lOC4teC5ieC5hOC4n-C4p-C5jCDguKrguLjguKfguKPguKPguJPguKDguLnguKHguLQ!5e0!3m2!1sth!2sth!4v1730195251452!5m2!1sth!2sth"
            className="absolute top-0 left-0 w-full h-50"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
