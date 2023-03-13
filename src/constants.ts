import { IStatus } from "./interface";

export const STATUS: IStatus[] = [
  { label: "В работе", value: "inWork", color: "light-blue" },
  { label: "Выполнено", value: "done", color: "red" },
  { label: "Удалено", value: "deleted", color: "bg-gray" },
];
