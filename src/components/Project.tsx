import Arrow from "../assets/arrow.svg";
import ReactIcon from "../assets/react.svg";
import { memo } from "react";

interface ProjectProps {
  img_src: string;
  title: string;
  children: string;
  project_url: string;
  technologies: string[];
}

const Project = memo(
  ({ img_src, title, children, project_url, technologies }: ProjectProps) => {
    const handleProjectClick = () => {
      window.open(project_url, "_blank", "noopener,noreferrer");
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleProjectClick();
      }
    };

    return (
      <li
        className="flex w-[95%] flex-col gap-8 rounded-lg border-2 p-8 transition-colors lg:flex-row"
        style={{
          backgroundColor: "var(--bg-accent)",
          borderColor: "var(--border-color)",
        }}
      >
        <img
          className="w-64 rounded-lg border-2 transition-colors"
          style={{ borderColor: "var(--border-color)" }}
          src={img_src}
          alt={`Preview of ${title} project`}
          loading="lazy"
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <h3
              className="text-3xl font-bold transition-colors"
              style={{ color: "var(--text-primary)" }}
            >
              {title}
            </h3>
            <ul
              className="flex gap-2"
              role="list"
              aria-label="Technologies used"
            >
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="rounded-lg border-2 p-2 transition-colors"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <img
                    src={ReactIcon}
                    alt={`${tech} icon`}
                    className="w-6"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
          <p
            className="transition-colors"
            style={{ color: "var(--text-secondary)" }}
          >
            {children}
          </p>
          <button
            onClick={handleProjectClick}
            onKeyDown={handleKeyDown}
            className="flex w-max items-center rounded-lg border-2 p-2 font-bold transition-colors focus:ring-2 focus:outline-none"
            style={{
              backgroundColor: "var(--button-bg)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
            aria-label={`Visit ${title} project`}
          >
            <span>Check it out!</span>
            <img className="rotate-180" src={Arrow} alt="" aria-hidden="true" />
          </button>
        </div>
      </li>
    );
  },
);

Project.displayName = "Project";

export default Project;
