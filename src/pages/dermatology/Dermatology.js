import React from "react";
import "./Dermatology.css";
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import dermatologyBg from "../../images/dermatologyBg.png";
import dermatologyOne from "../../images/dermatologyOne.png";
import dermatologyTwo from "../../images/dermatologyTwo.png";

const Dermatology = () => {
  return (
    <>
      <Header />
      <div className="main dermatology">
        <img className="main-bg" src={dermatologyBg} alt="Dermatology" />

        <h1>Dermatology</h1>

        <div className="contents dermatology-content">
          <section className="mbbb">
            <h3>Dermatology</h3>
            <p>
              Al Shifa Hospital has a dedicated team of specialist headed by
              senior dermatologists to ensure the health of your skin.
            </p>
            <p>
              The Dermatology Department at Al Shifa Hospital provides
              comprehensive treatment for clinical and cosmetic problems related
              to skin, hair and nails. We strive to erase cosmetic flaws and
              clinical complications and gift you healthy glowing skin.
              Specialized cosmetologically procedures including
              Micro‐Dermabrasion, chemical peeling for mild and moderate acne
              scars, wrinkles, fine lines, sun‐ damaged skin and Radio Frequency
              surgical procedures like removal of skin tags, warts, freckles,
              birthmarks, moles (nevus) are routinely performed by experts at
              the department.
            </p>
            <p>
              The other services provided by the department include removal or
              management of warts, freckles, rashes, moles, blackheads, corns
              and calluses. The competent team of doctors also treat Sexually
              Transmitted Diseases. Skin biopsies are conducted in cases of skin
              tumors. Well-equipped procedure room at the department makes it
              possible for the patients to undergo all dermatological
              procedures.
            </p>
          </section>
          <section className="mbbb">
            <div className="width49">
              <div className="mb">
                <h3>Botox & Fillers</h3>
                <p>
                  Botox is injected into facial muscles that are hyperactive.
                  This has the effect of putting the muscle into 'hibernation'
                  for about 4 to 6 months, which causes a smoothing effect of
                  the wrinkles that have been created by the muscle activity. It
                  is also used to weaken the muscles that cause the face to pull
                  downwards, thus giving a temporary lift.
                </p>
                <p>
                  Filler is crystal clear biodegradable natural substance.
                  Fillers gives instant and long-lasting & natural beauty lift.
                </p>
              </div>
              <div>
                <h3>Chemical PeeIs</h3>
                <p>
                  Effective treatment modality for pimples, pigmentation
                  (Blemishes) & age control.
                </p>
              </div>
            </div>
            <div className="dermatology-images width49">
              <img src={dermatologyOne} alt="img" />
              <img src={dermatologyTwo} alt="img" />
            </div>
          </section>
          <section>
            <div className="mb">
              <h3>Radio-frequency Treatment</h3>
              <p>
                Advanced technology for removal of skin tags, warts, mole or any
                other growth on skin.
              </p>
            </div>
            <div className="mb">
              <h3>Acne / Acne Scar Treatment</h3>
              <p>
                Specialized control of acne with medications, cryoslush & other
                skin care regimens. Post acne scars & pigmentation are also
                treated.
              </p>
            </div>
            <div className="mb">
              <h3>Microdermabrasion</h3>
              <p>
                Diamond tipped dermabrasion to treat scars and pigmentary
                abnormalities.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dermatology;
