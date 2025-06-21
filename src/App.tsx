import { useState } from "react";
import Project from "./components/Project";
import calculatorPreview from "./assets/age-calculator.png";
import ticketPreview from "./assets/ticket.png";
import SkillCard from "./components/SkillCard";
import ReactIcon from "./assets/react.svg";
import GithubIcon from "./assets/icons8-github.svg";
import LinkedinIcon from "./assets/bxl--linkedin-square.svg";
import MailIcon from "./assets/material-symbols--mail.svg";
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const [gameTabOn, setGameTabOn] = useState(false);
  useTheme(); // Keep the hook to ensure theme context is active

  return (
    <div
      className="flex max-h-max min-h-screen flex-col justify-between gap-16 transition-colors duration-200"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <header className="">
        <nav
          className="flex flex-row-reverse p-2 shadow-sm transition-colors"
          style={{
            backgroundColor: "var(--bg-secondary)",
          }}
        >
          <ThemeToggle />
        </nav>
      </header>
      <main className="flex flex-col gap-12 justify-self-center">
        <section className="ml-16 flex w-1/2 flex-col gap-2">
          <div></div>
          <div className="flex w-3/4 flex-col text-6xl">
            <h1> Hello! my name is </h1>
            <h1
              className="font-bold transition-colors"
              style={{ color: "var(--text-accent)" }}
            >
              Pedro Mariotti
            </h1>
          </div>
          <h2 className="text-2xl font-bold">
            Brazilian{" "}
            <span
              className="transition-colors"
              style={{ color: "var(--text-accent)" }}
            >
              Game Developer
            </span>{" "}
            &{" "}
            <span
              className="transition-colors"
              style={{ color: "var(--text-accent)" }}
            >
              Front End Web Developer
            </span>
          </h2>
          <h3 className="text-xl font-bold">A little about me</h3>
          <p
            className="transition-colors"
            style={{ color: "var(--text-secondary)" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            molestias aliquid, voluptatibus soluta consequatur numquam, fugiat
            eveniet quo eos, aspernatur rerum fugit ad dolorum hic libero beatae
            illum quam praesentium?
          </p>
        </section>
        <section className="">
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-16">
              <button
                className={`rounded-t-4xl border-x-2 border-t-2 p-4 text-xl font-bold transition-colors`}
                style={{
                  borderColor: "var(--border-color)",
                  backgroundColor: gameTabOn
                    ? "var(--bg-accent)"
                    : "var(--bg-secondary)",
                  color: "var(--text-primary)",
                }}
                onClick={() => {
                  setGameTabOn(false);
                }}
              >
                Web Projects
              </button>
              <button
                className={`rounded-t-4xl border-x-2 border-t-2 p-4 text-xl font-bold transition-colors`}
                style={{
                  borderColor: "var(--border-color)",
                  backgroundColor: gameTabOn
                    ? "var(--bg-secondary)"
                    : "var(--bg-accent)",
                  color: "var(--text-primary)",
                }}
                onClick={() => {
                  setGameTabOn(true);
                }}
              >
                Game Projects
              </button>
            </div>
            <ul
              className={`${gameTabOn ? "hidden" : "flex"} flex-col items-center justify-center gap-12 border-y-2 p-8 transition-colors`}
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--border-color)",
              }}
            >
              <Project
                img_src={calculatorPreview}
                title="Age calculator App"
                project_url="https://age-calculator-app-main-pi-sepia.vercel.app/"
                technologies={["React", "TypeScript", "Tailwind CSS"]}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore eos saepe nostrum temporibus. Deleniti illo qui ipsum.
                Corrupti, nisi ut laborum ipsum exercitationem facilis,
                asperiores possimus nobis quae animi nam.
              </Project>
              <Project
                img_src={ticketPreview}
                title="Ticket Form App"
                project_url="https://conference-ticket-generator-main-omega.vercel.app/"
                technologies={["React", "TypeScript", "Tailwind CSS"]}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore eos saepe nostrum temporibus. Deleniti illo qui ipsum.
                Corrupti, nisi ut laborum ipsum exercitationem facilis,
                asperiores possimus nobis quae animi nam.
              </Project>
            </ul>
            <ul
              className={`${gameTabOn ? "flex" : "hidden"} flex-col items-center justify-center gap-12 border-y-2 p-8 transition-colors`}
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--border-color)",
              }}
            >
              <Project
                img_src={calculatorPreview}
                title="Placeholder"
                project_url="https://age-calculator-app-main-pi-sepia.vercel.app/"
                technologies={["Unity", "C#"]}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore eos saepe nostrum temporibus. Deleniti illo qui ipsum.
                Corrupti, nisi ut laborum ipsum exercitationem facilis,
                asperiores possimus nobis quae animi nam.
              </Project>
              <Project
                img_src={ticketPreview}
                title="Placeholder"
                project_url="https://conference-ticket-generator-main-omega.vercel.app/"
                technologies={["Unreal Engine", "C++"]}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore eos saepe nostrum temporibus. Deleniti illo qui ipsum.
                Corrupti, nisi ut laborum ipsum exercitationem facilis,
                asperiores possimus nobis quae animi nam.
              </Project>
            </ul>
          </div>
        </section>
        <section className="justfy-center flex w-full flex-col items-center gap-8">
          <h1 className="text-6xl">
            Some of my other{" "}
            <span
              className="transition-colors"
              style={{ color: "var(--text-accent)" }}
            >
              skills
            </span>
            :
          </h1>
          <ul className="flex w-3/4 flex-wrap items-center justify-center gap-4">
            <SkillCard img_src={ReactIcon} title="Skill 1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque reprehenderit velit ducimus animi. Nesciunt, modi.
              Obcaecati enim iste tempora esse amet! Quisquam amet ipsa ex
              possimus consequuntur fugit! Dolore, fugit!
            </SkillCard>
            <SkillCard img_src={ReactIcon} title="Skill 2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque reprehenderit velit ducimus animi. Nesciunt, modi.
              Obcaecati enim iste tempora esse amet! Quisquam amet ipsa ex
              possimus consequuntur fugit! Dolore, fugit!
            </SkillCard>
            <SkillCard img_src={ReactIcon} title="Skill 3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque reprehenderit velit ducimus animi. Nesciunt, modi.
              Obcaecati enim iste tempora esse amet! Quisquam amet ipsa ex
              possimus consequuntur fugit! Dolore, fugit!
            </SkillCard>
            <SkillCard img_src={ReactIcon} title="Skill 4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque reprehenderit velit ducimus animi. Nesciunt, modi.
              Obcaecati enim iste tempora esse amet! Quisquam amet ipsa ex
              possimus consequuntur fugit! Dolore, fugit!
            </SkillCard>
          </ul>
        </section>
      </main>
      <footer
        className="flex flex-col items-center justify-center justify-self-end border-t-2 p-4 transition-colors"
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderColor: "var(--border-color)",
        }}
      >
        <h2 className="text-xl font-bold">Socials</h2>
        <ul className="flex gap-4">
          <li>
            <a
              href="https://github.com/pedro-mariotti"
              className="flex gap-2 transition-colors hover:underline"
              style={{ color: "var(--text-primary)" }}
            >
              <img src={GithubIcon} alt="github icon by Icons8" />
              @pedro-mariotti
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/pedro-mariotti-4488121a2/"
              className="flex gap-2 transition-colors hover:underline"
              style={{ color: "var(--text-primary)" }}
            >
              <img src={LinkedinIcon} alt="Linkedin icon" />
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="mailto:mariottipedro14@gmail.com"
              className="flex gap-2 transition-colors hover:underline"
              style={{ color: "var(--text-primary)" }}
            >
              <img src={MailIcon} alt="Mail icon" />
              mariottipedro14@gmail.com
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
