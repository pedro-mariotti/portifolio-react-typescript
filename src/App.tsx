import { useState } from "react";
import Project from "./components/Project";
import calculatorPreview from "./assets/age-calculator.png"
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="flex max-h-max min-h-screen flex-col justify-between bg-white text-black gap-16">
      <header className="">
        <nav className="flex flex-row-reverse bg-orange p-2 shadow-sm">
          <button className="">Appearance</button>
        </nav>
      </header>
      <main className="flex flex-col gap-12 justify-self-center">
        <section className="flex flex-col gap-2 w-1/2 ml-16">
          <h1 className="w-1/2 text-6xl">
            Hello! my name is{" "}
            <span className="font-bold text-orange">Pedro Mariotti</span>
          </h1>
          <h2 className="text-2xl font-bold">
            Brazillian Game Developer & Front End Web Developer
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
          <h2 className="font-bold text-orange">
            Here are some of my projects
          </h2>
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-16 ">
              <button className="p-4 bg-orange text-xl font-bold rounded-t-4xl">Web Projects</button>
              <button className="p-4 bg-orange text-xl font-bold rounded-t-4xl">Game Projects</button>
            </div>
            <ul className="bg-orange flex flex-col items-center justify-center p-8 gap-12">
              {/* <Project img_src={calculatorPreview} title="Age calculator App">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eos saepe nostrum temporibus. Deleniti illo qui ipsum. Corrupti, nisi ut laborum ipsum exercitationem facilis, asperiores possimus nobis quae animi nam.</Project>
              <Project img_src={calculatorPreview} title="Age calculator App">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eos saepe nostrum temporibus. Deleniti illo qui ipsum. Corrupti, nisi ut laborum ipsum exercitationem facilis, asperiores possimus nobis quae animi nam.</Project>
              <Project img_src={calculatorPreview} title="Age calculator App">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eos saepe nostrum temporibus. Deleniti illo qui ipsum. Corrupti, nisi ut laborum ipsum exercitationem facilis, asperiores possimus nobis quae animi nam.</Project>
              <Project img_src={calculatorPreview} title="Age calculator App">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eos saepe nostrum temporibus. Deleniti illo qui ipsum. Corrupti, nisi ut laborum ipsum exercitationem facilis, asperiores possimus nobis quae animi nam.</Project> */}
            </ul>
          </div>
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
