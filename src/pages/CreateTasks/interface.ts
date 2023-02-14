export interface IUseControl {
  add: string;
  description: string;
  Calendar: Date | undefined;
  Select: { value: string; label: string };
  isArchived: boolean;
}
