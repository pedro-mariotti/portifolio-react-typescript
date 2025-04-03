import Arrow from "../assets/arrow.svg"
import ReactIcon from "../assets/react.svg"

function Project(props: { img_src: string; title: string; children: string; project_url: string}) {
  return (
    <li className="w-[95%] flex gap-8 bg-bonewhite rounded-lg p-8 border-black border-2">
        <img className="w-1/4 rounded-lg border-s-black border-2" src={props.img_src} alt="project preview"/>
        <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <h2 className="text-3xl font-bold">{props.title}</h2>
              <ul>
                <li className="bg-white p-2 rounded-lg border-2 border-black"><img src={ReactIcon} alt="React icon" className="w-6" /></li>
              </ul>
            </div>
            <p>{props.children}</p>
            <button onClick={() => {window.location.href = props.project_url}} className="border-2 border-black w-max flex items-center font-bold bg-green p-2 rounded-lg"> Check it out! <img className="rotate-180" src={Arrow} alt="arrow icon" /></button>
        </div>
    </li>

  );
}

export default Project;
