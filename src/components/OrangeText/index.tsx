import clsx from "clsx";

function OrangeText({ children, className }: any) {
  return <span className={clsx("font-bold text-orange", className)}>{children}</span>;
}

export default OrangeText;
