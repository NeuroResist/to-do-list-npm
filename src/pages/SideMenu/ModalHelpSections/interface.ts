import { MutableRefObject, ReactElement } from "react";

export interface IHelpSection {
  header: string;
  paragraphs: ReactElement[];
  styles?: { header: string; paragraph: string };
}

export interface IModalHelpSections {
  refModal: MutableRefObject<any> | undefined;
  setIsModalOpen: (isModalOpen: boolean) => void;
  isModalOpen: boolean;
}
