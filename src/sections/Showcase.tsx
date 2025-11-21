import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const applecloneRef = useRef(null);
  const milkbarRef = useRef(null);
  const xoraRef = useRef(null);


  useGSAP(() => {

     const projects = [applecloneRef.current, milkbarRef.current, xoraRef.current];

    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: (index + 1) * 0.3,
          scrollTrigger: {
            trigger: project,
            start: "top bottom",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section className="app-showcase" ref={sectionRef}>
      <div id="work">
        <div className="w-full">
          <div className="showcaselayout">
            {/* Showcase left side items go here */}
            <div className="first-project-wrapper" ref={applecloneRef}>
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
              <div className="project" ref={milkbarRef}>
                <div className="image-wrapper bg-[#f4f1ef]">
                  <img src="/images/korova.png" alt="milkbar" />
                </div>
                <h2>Korova Milk Bar</h2>
                <p>Milk Bar created with React,Gsap, and Tailwind.</p>
              </div>

              <div className="project" ref={xoraRef}>
                <div className="image-wrapper bg-[#f4e6db]">
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
