import clsx from "clsx";

import { IOrangeText } from "./interface";

function OrangeText({ children, className }: IOrangeText) {
  return <span className={clsx("font-bold text-orange", className)}>{children}</span>;
}

export default OrangeText;
