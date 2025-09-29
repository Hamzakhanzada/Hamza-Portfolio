import React, { useEffect } from "react";
import AOS from "aos";
import "../styles.scss";

function ResumeSection() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div
      className="custom-container my-xl-5 my-lg-5 my-md-5 my-3 section_space resume_section"
      data-aos="fade-up"
      id="resume"
    >
      <span class="badge rounded-pill section_badge" data-aos="fade-up">
        <i class="fa-thin fa-briefcase"></i>
        &nbsp; RESUME
      </span>
      <div className="title_container" data-aos="fade-up">
        <h2 className="text-light">
          Experience, &
          <span className="hero_content"> Education.</span>
        </h2>
      </div>
      <div class="timeline">
        <ul>
          <li data-aos="fade-left">
            <div class="timeline-content">
              <span class="date">April 2025 - Present</span>
              <h2>Front End Developer | AG Consultraining
</h2>
              <p>
                Currently working as a Front-End Developer on the company’s Learning Management System (LMS) platform. I’m responsible for developing responsive user interfaces using React.js and Tailwind CSS, integrating APIs, and ensuring smooth performance across devices. My work focuses on building clean, scalable front-end solutions that enhance the platform’s overall user experience.

              </p>
            </div>
          </li>
          

         
          <li data-aos="fade-left">
            <div class="timeline-content">
              <span class="date">2022 - 2024</span>
              <h2>Intermediate in Pre-Engineering</h2>
              <p>Superior Science College,</p>
            </div>
          </li>
          <li data-aos="fade-left">
            <div class="timeline-content pb-2">
              <span class="date">2025 Present</span>
              <h2>BS Computer Science</h2>
              <p>Federal Urdu University of Arts, Science & Technology</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ResumeSection;
