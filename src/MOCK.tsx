import dayjs from "dayjs";

export const TASKS: Inputs[] = [
  {
    id: 1,
    add: "11111",
    description: "11111",
    Calendar: dayjs("01.01.2001").toDate(),
    Select: { value: "Дом", label: "Дом" },
  },
  {
    id: 2,
    add: "22222",
    description: "22222",
    Calendar: dayjs("02.02.2002").toDate(),
    Select: { value: "Дом", label: "Дом" },
  },
  {
    id: 3,
    add: "33333",
    description: "33333",
    Calendar: dayjs("03.03.2003").toDate(),
    Select: { value: "Работа", label: "Работа" },
  },
  {
    id: 4,
    add: "44444",
    description: "44444",
    Calendar: dayjs("04.04.2004").toDate(),
    Select: { value: "Работа", label: "Работа" },
  },
  {
    id: 5,
    add: "55555",
    description: "55555",
    Calendar: dayjs("05.05.2005").toDate(),
    Select: { value: "Учеба", label: "Учеба" },
  },
  {
    id: 6,
    add: "66666",
    description: "66666",
    Calendar: dayjs("06.06.2006").toDate(),
    Select: { value: "Учеба", label: "Учеба" },
  },
];

export const OPTIONS = [
  { id: 1, select: { value: "Дом", label: "Дом" } },
  { id: 2, select: { value: "Работа", label: "Работа" } },
  { id: 3, select: { value: "Учеба", label: "Учеба" } },
];