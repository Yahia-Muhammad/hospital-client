import React, { useContext } from "react";
import "./Ophthalmology.css";
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import ophthalmologyBg from "../../images/ophthalmologyBg.png";
import ophthalmologyOne from "../../images/ophthalmologyOne.png";
import ophthalmologyTwo from "../../images/ophthalmologyTwo.png";
import themeContext from "../../config/Theme";


const Ophthalmology = () => {
  const { theme } = useContext(themeContext);

  return (
    <>
      <Header />
      <div className={`main ophthalmology ${theme}`}>
        <img className="main-bg" src={ophthalmologyBg} alt="Ophthalmology" />

        <h1>Ophthalmology</h1>

        <div className="contents ophthalmology-content">
          <section className="mbb">
            <p>
              We provide outstanding care to our patients with the help of our
              qualified ophthalmologist.
            </p>
            <p>
              The department of Ophthalmology at Al Shifa Hospital has world
              class facilities and well-trained medical personnel who provide
              treatments for various issues and afflictions that plague the eye.
            </p>
            <p>
              he department is equipped with state-of-the-art operation theatres
              and advanced eye care equipment. Patients can avail treatment for
              a number of eye issues, ranging from a routine eye check-up to
              more complex procedures like squint surgery and oculoplastic
              surgery. The department also has the necessary facilities for
              diagnostic procedures like Gonioscopy and Keratometry. Other
              procedures that are offered at the department include Small
              incision Cataract Surgery with intraocular lens, Slit lamp exam,
              Direct and indirect Ophthalmoscopy, A/B scan and Lacrimal sac
              surgery. The team at department of Ophthalmology at Al Shifa
              Hospital include highly-trained and experienced doctors and
              surgeons, who are backed by dedicated group of nurses and
              technicians.
            </p>
            <p>
              Al Shifa Hospital Eye Institute provides state of the art
              comprehensive eye care services using the best in technology &
              skills. Besides delivering the routine eye-care services with
              humane touch, the hospital takes pride in providing microincision
              surgery using Phaco technology for cataract (safed motia) & IOL
              Implantation, advanced level of diagnostic and therapeutic
              services in the field of glaucoma & vitreous and retinal diseases.
            </p>
          </section>
          <section className="mbb">
            <div className="width49">
              <section className="mb">
                <h3>Services Offered</h3>
                <ul className="lsp">
                  <li>Comprehensive eye check-up</li>
                  <li>Glaucoma evaluation</li>
                  <li>Retina evaluation</li>
                  <li>ROP screening</li>
                  <li>Squint evaluation</li>
                </ul>
              </section>
              <section className="mb">
                <h3>The treatment is available for following disease:</h3>
                <ul className="lsp">
                  <li>Cataract (safed motia)</li>
                  <li>Glaucoma (kala motia)</li>
                  <li>Diabetic retinopathy</li>
                  <li>Macular degeneration</li>
                  <li>Retinal detachment</li>
                  <li>Squint</li>
                  <li>Oculoplastic</li>
                  <li>Laser for ROP</li>
                </ul>
              </section>
            </div>
            <div className="width49">
              <img src={ophthalmologyOne} alt="img" />
              <img src={ophthalmologyTwo} alt="img" />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ophthalmology;
