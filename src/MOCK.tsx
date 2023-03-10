import dayjs from "dayjs";

import { ITask } from "./interface";

// Таски
export const TASKS: ITask[] = [
  {
    id: 1,
    name: "11111",
    description: "11111",
    calendar: dayjs("01.01.2001").toDate(),
    select: { value: "Дом", label: "Дом" },
    isArchived: false,
  },
  {
    id: 2,
    name: "22222",
    description: "22222",
    calendar: dayjs("02.02.2002").toDate(),
    select: { value: "Дом", label: "Дом" },
    isArchived: false,
  },
  {
    id: 3,
    name: "33333",
    description: "33333",
    calendar: dayjs("03.03.2003").toDate(),
    select: { value: "Работа", label: "Работа" },
    isArchived: false,
  },
  {
    id: 4,
    name: "44444",
    description: "44444",
    calendar: dayjs("04.04.2004").toDate(),
    select: { value: "Работа", label: "Работа" },
    isArchived: false,
  },
  {
    id: 5,
    name: "55555",
    description: "55555",
    calendar: dayjs("05.05.2005").toDate(),
    select: { value: "Учеба", label: "Учеба" },
    isArchived: true,
  },
  {
    id: 6,
    name: "66666",
    description: "66666",
    calendar: dayjs("06.06.2006").toDate(),
    select: { value: "Учеба", label: "Учеба" },
    isArchived: true,
  },
  {
    id: 7,
    name: "77777",
    description: "77777",
    calendar: undefined,
    select: { value: "Дом", label: "Дом" },
    isArchived: false,
  },
  {
    id: 8,
    name: "88888",
    description: "88888",
    calendar: undefined,
    select: { value: "Дом", label: "Дом" },
    isArchived: false,
  },
  {
    id: 9,
    name: "99999",
    description: "99999",
    calendar: undefined,
    select: { value: "Работа", label: "Работа" },
    isArchived: true,
  },
  {
    id: 10,
    name: "101010",
    description: "101010",
    calendar: undefined,
    select: { value: "Работа", label: "Работа" },
    isArchived: true,
  },
  {
    id: 11,
    name: "111111",
    description: "111111",
    calendar: undefined,
    select: { value: "Учеба", label: "Учеба" },
    isArchived: true,
  },
  {
    id: 12,
    name: "121212",
    description: "121212",
    calendar: undefined,
    select: { value: "Учеба", label: "Учеба" },
    isArchived: true,
  },
];

// Категории
export const OPTIONS = [
  { value: "Дом", label: "Дом" },
  { value: "Работа", label: "Работа" },
  { value: "Учеба", label: "Учеба" },
  { value: "Ааа", label: "Ааа" },
];
