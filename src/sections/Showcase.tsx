import React from "react";

const Showcase = () => {
  return (
    <section className="app-showcase">
      <div id="work">
        <div className="w-full">
          <div className="showcaselayout">
            {/* Showcase left side items go here */}
            <div className="first-project-wrapper">
              <div className="image-wrapper">
                <img src="/images/appleclone.png" alt="appleclone" />
              </div>
              <div className="text-content">
                <h2>Apple Clone Website</h2>
                <p>Apple Clone created with React,Gsap, and Tailwind.</p>
              </div>
            </div>
            {/* Showcase right side items go here */}
            <div className="project-list-wrapper overflow-hidden">
              <div className="project">
                <div className="image-wrapper bg-[#a2a09e]">
                  <img src="/images/korova.png" alt="milkbar" />
                </div>
                <h2>Korova Milk Bar</h2>
                <p>Milk Bar created with React,Gsap, and Tailwind.</p>
              </div>

              <div className="project">
                <div className="image-wrapper bg-[#a2a09e]">
                  <img src="/images/xora.png" alt="xoraSaS" />
                </div>
                <h2>Xora SaaS</h2>
                <p>
                  SaaS created with React,Gsap, and Tailwind. <br />
                  ☺️ I really like this combination
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
