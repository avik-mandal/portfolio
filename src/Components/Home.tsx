import React, { useMemo } from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed"; // if Typed is still JS this import is fine; consider converting Typed to TSX later
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";

const Home: React.FC = () => {
  // memoize animation data so Lottie won't re-initialize on every render
  const animationData = useMemo(() => SpaceBoy as unknown, []);

  return (
    <main className="home-root" aria-labelledby="home-heading">
      <section className="hero container">
        <div className="hero-left">
          <p className="wave" aria-hidden>
            👋 Hi there!
          </p>

          <h1 id="home-heading" className="hero-title">
            I&apos;M <span className="accent">AVIK MANDAL</span>
          </h1>

          <div className="typed-wrapper" aria-live="polite">
            <Typed />
          </div>

          <div className="hero-ctas">
            <a className="btn btn-primary" href="#contact">
              Contact
            </a>
            <a
              className="btn btn-ghost"
              href="/Avik_Mandal_Resume.pdf"
              download
              title="Download resume"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="hero-right" aria-hidden="true">
          <Lottie
            className="illustration"
            animationData={animationData}
            loop={true}
            autoplay={true}
          />
        </div>
      </section>

      <section className="about container" aria-labelledby="about-heading">
        <div className="about-text">
          <h2 id="about-heading">
            Brief <strong>introduction</strong>
          </h2>

          <p>
            I love transforming a raw idea into a product or website that impacts
            lives. I enjoy work that challenges me — and work I can be proud of.
          </p>

          <p>
            I&apos;m fluent in <strong>Java</strong>, comfortable with{" "}
            <strong>Python</strong>, and building projects in the <strong>MERN</strong>{" "}
            stack. I plan to learn <strong>Next.js</strong>, <strong>Three.js</strong>,{" "}
            and <strong>TypeScript</strong> soon.
          </p>

          <p className="coffee">
            Also, I love <strong>coffee</strong>{" "}
            <CiCoffeeCup aria-hidden="true" className="coffee-icon" />
          </p>
        </div>

        <Tilt
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          glareEnable={true}
          glareMaxOpacity={0.12}
        >
          <img
            className="avatar"
            src={Avatar}
            alt="Avatar of Avik Mandal"
            loading="lazy"
            width={300}
            height={300}
          />
        </Tilt>
      </section>
    </main>
  );
};

export default React.memo(Home);
