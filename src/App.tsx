import { useState } from "react";
import Project from "./components/Project";
import calculatorPreview from "./assets/age-calculator.png"
import ticketPreview from "./assets/ticket.png"
import SkillCard from "./components/SkillCard";
import ReactIcon from "./assets/react.svg"


function App() {
  const [gameTabOn, setGameTabOn] = useState(false);

  return (
    <div className="flex max-h-max min-h-screen flex-col justify-between bg-white text-black gap-16">
      <header className="">
        <nav className="flex flex-row-reverse bg-orange p-2 shadow-sm">
          <button className="">Appearance</button>
        </nav>
      </header>
      <main className="flex flex-col gap-12 justify-self-center">
        <section className="flex flex-col gap-2 w-1/2 ml-16">
        <div>
          
        </div>
        <div className="flex flex-col w-3/4 text-6xl">
          <h1> Hello! my name is </h1>
          <h1 className="font-bold text-orange">Pedro Mariotti</h1>
        </div>
          <h2 className="text-2xl font-bold">
            Brazillian <span className="text-orange">Game Developer</span> & <span className="text-orange">Front End Web Developer</span>
          </h2>
          <h3 className="text-xl font-bold">A little about me</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            molestias aliquid, voluptatibus soluta consequatur numquam, fugiat
            eveniet quo eos, aspernatur rerum fugit ad dolorum hic libero beatae
            illum quam praesentium?
          </p>
        </section>
        <section className="">
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-16 ">
              <button className={`p-4 border-t-2 border-x-2 border-black ${gameTabOn ? "bg-orange-700" : "bg-orange" } text-xl font-bold rounded-t-4xl`}  onClick={() => {setGameTabOn(false)}}>Web Projects</button>
              <button className={`p-4 border-t-2 border-x-2 border-black ${gameTabOn ?  "bg-orange" : "bg-orange-700"} text-xl font-bold rounded-t-4xl`} onClick={() => {setGameTabOn(true)}}>Game Projects</button>
            </div>
            <ul className={`bg-orange ${gameTabOn ? "hidden" : "flex" } flex-col items-center justify-center p-8 gap-12 border-y-2 border-black`}>
              <Project img_src={calculatorPreview} title="Age calculator App" project_url="https://age-calculator-app-main-pi-sepia.vercel.app/">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eos saepe nostrum temporibus. Deleniti illo qui ipsum. Corrupti, nisi ut laborum ipsum exercitationem facilis, asperiores possimus nobis quae animi nam.</Project>
              <Project img_src={ticketPreview} title="Ticket Form App" project_url="https://conference-ticket-generator-main-omega.vercel.app/" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eos saepe nostrum temporibus. Deleniti illo qui ipsum. Corrupti, nisi ut laborum ipsum exercitationem facilis, asperiores possimus nobis quae animi nam.</Project>
            </ul>
            <ul className={`bg-orange ${gameTabOn ? "flex" : "hidden" } flex-col items-center justify-center p-8 gap-12 border-y-2 border-black`}>
              <Project img_src={calculatorPreview} title="Placeholder" project_url="https://age-calculator-app-main-pi-sepia.vercel.app/">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eos saepe nostrum temporibus. Deleniti illo qui ipsum. Corrupti, nisi ut laborum ipsum exercitationem facilis, asperiores possimus nobis quae animi nam.</Project>
              <Project img_src={ticketPreview} title="Placeholder" project_url="https://conference-ticket-generator-main-omega.vercel.app/" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eos saepe nostrum temporibus. Deleniti illo qui ipsum. Corrupti, nisi ut laborum ipsum exercitationem facilis, asperiores possimus nobis quae animi nam.</Project>
            </ul>
          </div>
        </section>
        <section className="flex flex-col gap-8 w-full justfy-center items-center">
          <h1 className="text-6xl">Some of my other <span className="text-orange">skills</span>:</h1>
          <ul className="flex flex-wrap gap-4 w-3/4 items-center justify-center">
            <SkillCard img_src={ReactIcon} title="Skill 1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque reprehenderit velit ducimus animi. Nesciunt, modi. Obcaecati enim iste tempora esse amet! Quisquam amet ipsa ex possimus consequuntur fugit! Dolore, fugit!</SkillCard>
            <SkillCard img_src={ReactIcon} title="Skill 2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque reprehenderit velit ducimus animi. Nesciunt, modi. Obcaecati enim iste tempora esse amet! Quisquam amet ipsa ex possimus consequuntur fugit! Dolore, fugit!</SkillCard>
            <SkillCard img_src={ReactIcon} title="Skill 3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque reprehenderit velit ducimus animi. Nesciunt, modi. Obcaecati enim iste tempora esse amet! Quisquam amet ipsa ex possimus consequuntur fugit! Dolore, fugit!</SkillCard>
            <SkillCard img_src={ReactIcon} title="Skill 4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque reprehenderit velit ducimus animi. Nesciunt, modi. Obcaecati enim iste tempora esse amet! Quisquam amet ipsa ex possimus consequuntur fugit! Dolore, fugit!</SkillCard>
          </ul>
        </section>
      </main>
      <footer className="justify-self-end bg-orange border-t-2">
        <p>Contacts</p>
        <ul>
          <li>Github</li>
          <li>Linkedin</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
