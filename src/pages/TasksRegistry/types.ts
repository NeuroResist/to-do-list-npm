export type IOnSubmit = {
  add: string;
  description: string;
  calendar: Date | undefined;
  select: { value: string; label: string };
};
