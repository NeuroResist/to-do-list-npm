import { ReactNode } from "react";

export interface IOrangeText {
  /** @param children - Содержимое внутри компонента */
  children: ReactNode;
  /** @param className - Стили для текста */
  className?: string;
}
