import clsx from "clsx";
import { IHelpSection } from "./interface";

function HelpSection({ header, paragraphs, styles }: IHelpSection) {
  return (
    <>
      <h3 className={clsx("font-bold text-pink text-2xl mb-2 ", styles?.header)}>{header}</h3>

      <ul className="mb-3 [&>*]:mb-2">
        {paragraphs.map((paragraph: any) => (
          <li className={clsx("last:mb-0", styles?.paragraph)}>
            <p>{paragraph}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HelpSection;
