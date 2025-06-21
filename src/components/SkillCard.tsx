import { useState, useCallback, memo } from "react";

interface SkillCardProps {
  title: string;
  img_src: string | undefined;
  children: string;
}

const SkillCard = memo(({ title, img_src, children }: SkillCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleToggle();
      }
    },
    [handleToggle],
  );

  return (
    <li
      className="flex h-64 w-1/4 cursor-pointer gap-8 rounded-lg border-2 p-8 transition-colors focus:ring-2 focus:outline-none"
      style={{
        backgroundColor: "var(--bg-accent)",
        borderColor: "var(--border-color)",
        color: "var(--text-primary)",
      }}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-label={`${title} - Click to ${isExpanded ? "collapse" : "expand"} details`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-2">
        <div
          className={`${isExpanded ? "hidden" : "flex"} flex-col items-center gap-4`}
        >
          <img src={img_src} alt={`${title} icon`} loading="lazy" />
          <h3
            className="text-center text-3xl font-bold transition-colors"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h3>
        </div>
        <div
          className={`${isExpanded ? "block" : "hidden"} overflow-y-auto`}
          aria-hidden={!isExpanded}
        >
          <p
            className="text-sm leading-relaxed transition-colors"
            style={{ color: "var(--text-secondary)" }}
          >
            {children}
          </p>
        </div>
      </div>
    </li>
  );
});

SkillCard.displayName = "SkillCard";

export default SkillCard;
