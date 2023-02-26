export type IOnSubmit = {
  name: string;
  description: string;
  calendar?: Date;
  select: { value: string; label: string };
};
