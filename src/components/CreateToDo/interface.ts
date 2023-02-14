import { ICategory } from "interface";

export interface ICreateToDo {
  handleSubmit: any;
  register: any;
  control: any;
  categories: ICategory[];
  onSubmit: any;
  className?: string;
  isValid?: boolean;
  setIsModalOpen?: (isHide: boolean) => void;
  isModalOpen?: boolean;
  refModal?: any;
}
