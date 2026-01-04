import React, { useEffect } from "react";
import AOS from "aos";
import "../styles.scss";

function Sidebar() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="mx-3">
      <div className="row">
        <div
          className="col-xl-3 col-12 rounded-4 left-sidebar p-4"
          data-aos="fade-right"
        >
          <div className="info text-center">
            <div>
              <div className="title mb-0">Hamza Khalid</div>
            </div>
            <div className="sub-title">(Front-End developer)</div>
          </div>
          <div className="my-4 d-flex justify-content-center align-items-center">
            <img
              src="./assets/images/hamza.png"
              height={230}
              width={230}
              className="rounded-4 mb-1 my-img"
              alt="me"
            />
          </div>
          <div className="text-center mb-4 small">
            <p className="mb-0">(+92)260035627</p>
            <p className="mb-0">m.hamza.khalid.dev@gmail.com</p>
            <p>Karachi, Pakistan</p>
          </div>
          <div className="my-4 text-center fw-lighter rights">
            © 2025 Hamza Khalid. All Rights Reserved
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="info-icon d-flex justify-content-center align-items-center rounded-5 me-2">
              <a href="https://www.linkedin.com/in/hamza-khalid-537197291/" target="blank">
                <i className="fa-brands fa-linkedin fa-md"></i>
              </a>
            </div>
            <div className="info-icon d-flex justify-content-center align-items-center rounded-5 me-2">
              <a href="https://www.upwork.com/freelancers/~01e91597d39b5b93ba" target="blank">
                <i className="fa-brands fa-upwork fa-md"></i>
              </a>
            </div>
            <div className="info-icon d-flex justify-content-center align-items-center rounded-5 me-2">
              <a href="https://github.com/Hamzakhanzada" target="blank">
                <i className="fa-brands fa-github fa-md"></i>
              </a>
            </div>
            
          </div>
          <div className="d-flex justify-content-center align-items-center w-full mb-1">
            <a
              href="mailto:m.hamza.khalid.dev"
              className="text-decoration-none hire-btn rounded-5"
            >
              <i class="fa-thin fa-envelope"></i>
              &nbsp;HIRE ME!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
