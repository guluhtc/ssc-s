"use client";
import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { isMobile } from "react-device-detect";

const Header = () => {
   const [openMobileNavbar, setopenMobileNavBar] = useState(false);
   const [activeSection, setActiveSection] = useState("");
   const sectionsRef = useRef([]);

   useEffect(() => {
      const sections = document.querySelectorAll("section[data-section]");
      sectionsRef.current = sections;

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  setActiveSection(entry.target.getAttribute("data-section"));
               }
            });
         },
         { threshold: [0.3, 0.6] }
      );

      sections.forEach((section) => observer.observe(section));

      return () => {
         sections.forEach((section) => observer.unobserve(section));
      };
   }, []);

   useEffect(() => {
      setTimeout(() => {
         document
            .getElementById("main-Id-For-Header")
            ?.classList.remove("hidden");
      }, 1600);
   }, []);

   const handleScrollToSection = (section) => {
      const targetSection = document.querySelector(
         `section[data-section="${section}"]`
      );
      if (targetSection) {
         targetSection.scrollIntoView({ behavior: "smooth" });
         setActiveSection(section);
      }
   };

   return (
      <header
         className="fixed top-[2px] left-0 right-0 m-auto z-[100000000] hidden transition-all ease-in-out duration-200"
         id="main-Id-For-Header"
      >
         <div
            data-animation="default"
            className="navbar w-nav"
            data-easing2="ease"
            data-easing="ease"
            data-collapse="medium"
            role="banner"
            data-no-scroll="1"
            data-duration="500"
            data-doc-height="1"
         >
            <div className="container nav-container">
               <div className="nav-menu-container">
                  <a
                     href="/"
                     aria-current="page"
                     className="brand w-nav-brand w--current"
                     aria-label="home"
                  >
                     <img
                        src="https://assets.website-files.com/63aee5793ca698452efe7f60/63aef0ca917c0c177c433ef9_Black%20Logotype.svg"
                        loading="lazy"
                        alt=""
                        className="brand-image"
                     />
                  </a>

                  <nav role="navigation" className="nav-menu w-nav-menu">
                     {[
                        "Experience",
                        "Integration",
                        "Features",
                        "Download",
                     ].map((section) => (
                        <div
                           className="nav-link-active-holder"
                           key={section}
                        >
                           <button
                              className={`nav-link-holder w-inline-block ${
                                 activeSection === section && "w--current"
                              }`}
                              onClick={() => handleScrollToSection(section)}
                           >
                              <div className="nav-link-text-holder">
                                 <div className="nav-link-text">{section}</div>
                              </div>
                           </button>
                        </div>
                     ))}
                     <div className="nav-button-holder">
                        <button
                           className="button navbar-button w-button"
                           onClick={() => handleScrollToSection("sign-up")}
                        >
                           Sign up
                        </button>
                     </div>
                  </nav>

                  <div
                     className="menu-button w-nav-button"
                     aria-label="menu"
                     role="button"
                     tabIndex="0"
                     aria-controls="w-nav-overlay-0"
                     aria-haspopup="menu"
                     onClick={() => setopenMobileNavBar(!openMobileNavbar)}
                  >
                     <div className="center-box">
                        <img
                           src="https://cdn.prod.website-files.com/63aee5793ca698452efe7f60/63aee5793ca698aa19fe7f75_menu.svg"
                           loading="lazy"
                           alt=""
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {isMobile && openMobileNavbar && (
            <nav
               role="navigation"
               className="nav-menu w-nav-menu bg-white translate-y-[-12px] justify-center align-middle"
               style={{ scrollBehavior: "smooth" }}
            >
               {[
                  "Experience",
                  "Integration",
                  "Features",
                  "Download",
                  "sign-up",
               ].map((section) => (
                  <div
                     className="nav-link-active-holder"
                     key={section}
                  >
                     <button
                        className={`nav-link-holder w-inline-block ${
                           activeSection === section && "w--current"
                        }`}
                        onClick={() => handleScrollToSection(section)}
                     >
                        <div className="nav-link-text-holder">
                           <div className="nav-link-text">{section}</div>
                        </div>
                     </button>
                  </div>
               ))}
               <div className="nav-button-holder">
                  <button
                     className="button navbar-button w-button"
                     onClick={() => handleScrollToSection("sign-up")}
                  >
                     Sign up
                  </button>
               </div>
            </nav>
         )}
      </header>
   );
};

export default Header;
