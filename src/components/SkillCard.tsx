import { useState } from "react";
import Arrow from "../assets/arrow.svg"
import ReactIcon from "../assets/react.svg"


function SkillCard(props: { title: string; img_src: string | undefined; children: string}) {
  const [cardOpen, setCardOpen] = useState(false);
  return (
    <li onClick={() => {setCardOpen(!cardOpen)}} className="w-1/4 h-64 flex gap-8 bg-bonewhite rounded-lg p-8 border-black border-2 cursor-pointer">
        <div className="flex flex-col gap-2 items-center w-full h-full justify-center">
            <div className={`${cardOpen ? "hidden" : "flex"} gap-4 flex-col items-center`}>
              <img src={props.img_src} alt="Skill Icon" />
              <h2 className="text-3xl font-bold">{props.title}</h2>
            </div>
            <p className={`${cardOpen ? "block" : "hidden" }`}>{props.children}</p>
        </div>
    </li>

  );
}

export default SkillCard;
