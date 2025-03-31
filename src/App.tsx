import { useState } from "react";
// import Project from "./components/project";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex max-h-max min-h-screen flex-col justify-between bg-amber-50">
      <header className="">
        <nav className="flex flex-row-reverse bg-amber-600 p-2 shadow-sm">
          <button className="">Appearance</button>
        </nav>
      </header>
      <main className="mx-25 flex flex-col gap-12 justify-self-center">
        <section className="flex flex-col gap-2">
          <h1 className="w-1/3 text-6xl">
            Hello! my name is{" "}
            <span className="font-bold text-orange-600">Pedro Mariotti</span>
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
        <section>
          <h2 className="font-bold text-orange-600">
            Here are some of my projects
          </h2>
          <div className="projects-div">
            <ul className="web-projects-div">
              {/* <Project title="Project 1">Hello world</Project> */}
            </ul>
          </div>
        </section>
      </main>
      <footer className="justify-self-end bg-amber-600 shadow-sm">
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
