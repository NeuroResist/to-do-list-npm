import clsx from "clsx";

import { IOrangeText } from "./interface";

function OrangeText(props: IOrangeText) {
  const { children, className } = props;

  return <span className={clsx("font-bold text-orange", className)}>{children}</span>;
}

export default OrangeText;
