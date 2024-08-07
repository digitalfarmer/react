import React from "react";
import Navbar from "../components/Navbar";
import "../Styles/Home.css";
import Footer from "../components/Footer";
import { homeSection } from "../data/HomeSection";
import parse from "html-react-parser";
import { courseSection } from "../data/CourseSection";
import { tutorsSection } from "../data/TotorsSection";
import Tutors from "../components/Tutors";
import Partner from "../components/Partner";
import { partnerSection } from "../data/PartnerSection";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        {/* home */}
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{parse(homeSection.content)}</div>
        </section>
        {/* course */}
        <section id="courses">
          <div className="kolom">{parse(courseSection.content)}</div>
          <img src={courseSection.image} />
        </section>

        {/* tutor */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">{parse(tutorsSection.content)}</div>

            <Tutors tutorsList={tutorsSection} />
          </div>
        </section>

        {/*  untuk partners  */}
        <section id="partners">
          <div className="tengah">
            <div className="kolom">{parse(partnerSection.content)}</div>

            <Partner partnerList={partnerSection} />
          </div>
         
        </section>
      </div>

      
    <div id="contact">
        <div className="wrapper">
            <Contact/>
        </div>
    </div>

      <Footer />
    </div>
  );
}

export default Home;
