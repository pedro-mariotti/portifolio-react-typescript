import Arrow from "../assets/arrow.svg"

function Project(props: { img_src: string; title: string; children: string; project_url: string}) {

  return (
    <li className="w-[95%] flex gap-8 bg-pastel rounded-lg p-8 border-black border-2">
        <img className="w-1/4 rounded-lg border-s-black border-2" src={props.img_src} alt="project preview"/>
        <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">{props.title}</h2>
            <p>{props.children}</p>
            <a href={props.project_url} className="flex items-center font-bold"> Check it out! <img className="rotate-180" src={Arrow} alt="arrow icon" /></a>
        </div>
    </li>

  );
}

export default Project;
