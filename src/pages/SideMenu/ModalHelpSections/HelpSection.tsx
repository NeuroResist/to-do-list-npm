import { ReactElement } from "react";
import clsx from "clsx";

import { IHelpSection } from "./interface";

function HelpSection(props: IHelpSection) {
  const { header, paragraphs, styles } = props;

  return (
    <li>
      <article>
        <h3 className={clsx("font-bold text-pink text-2xl mb-2 ", styles?.header)}>{header}</h3>

        <ul className="mb-3 [&>*]:mb-2 pb-2 border-b-2 border-b-black last:border-none">
          {paragraphs.map((paragraph: ReactElement, i) => (
            <li key={`Заголовок_${i}`} className={clsx("last:mb-0", styles?.paragraph)}>
              <p>{paragraph}</p>
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}

export default HelpSection;
