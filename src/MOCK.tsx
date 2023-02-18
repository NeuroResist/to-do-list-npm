import dayjs from "dayjs";

import { ITask } from "./interface";

export const TASKS: ITask[] = [
  {
    id: 1,
    add: "11111",
    description: "11111",
    calendar: dayjs("01.01.2001").toDate(),
    select: { value: "Дом", label: "Дом" },
    isArchived: false,
  },
  {
    id: 2,
    add: "22222",
    description: "22222",
    calendar: dayjs("02.02.2002").toDate(),
    select: { value: "Дом", label: "Дом" },
    isArchived: false,
  },
  {
    id: 3,
    add: "33333",
    description: "33333",
    calendar: dayjs("03.03.2003").toDate(),
    select: { value: "Работа", label: "Работа" },
    isArchived: false,
  },
  {
    id: 4,
    add: "44444",
    description: "44444",
    calendar: dayjs("04.04.2004").toDate(),
    select: { value: "Работа", label: "Работа" },
    isArchived: false,
  },
  {
    id: 5,
    add: "55555",
    description: "55555",
    calendar: dayjs("05.05.2005").toDate(),
    select: { value: "Учеба", label: "Учеба" },
    isArchived: true,
  },
  {
    id: 6,
    add: "66666",
    description: "66666",
    calendar: dayjs("06.06.2006").toDate(),
    select: { value: "Учеба", label: "Учеба" },
    isArchived: true,
  },
  {
    id: 7,
    add: "77777",
    description: "77777",
    calendar: undefined,
    select: { value: "Дом", label: "Дом" },
    isArchived: false,
  },
  {
    id: 8,
    add: "88888",
    description: "88888",
    calendar: undefined,
    select: { value: "Дом", label: "Дом" },
    isArchived: false,
  },
  {
    id: 9,
    add: "99999",
    description: "99999",
    calendar: undefined,
    select: { value: "Работа", label: "Работа" },
    isArchived: true,
  },
  {
    id: 10,
    add: "101010",
    description: "101010",
    calendar: undefined,
    select: { value: "Работа", label: "Работа" },
    isArchived: true,
  },
  {
    id: 11,
    add: "111111",
    description: "111111",
    calendar: undefined,
    select: { value: "Учеба", label: "Учеба" },
    isArchived: true,
  },
  {
    id: 12,
    add: "121212",
    description: "121212",
    calendar: undefined,
    select: { value: "Учеба", label: "Учеба" },
    isArchived: true,
  },
];

export const OPTIONS = [
  { value: "Дом", label: "Дом" },
  { value: "Работа", label: "Работа" },
  { value: "Учеба", label: "Учеба" },
  { value: "Ааа", label: "Ааа" },
];
