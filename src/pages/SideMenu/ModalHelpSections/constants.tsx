import OrangeText from "components/OrangeText";
import React from "react";

export const CREATE_TASKS = [
  <>
    <OrangeText>Таска</OrangeText> - и заметки, и напоминалки
    <br />
    <OrangeText>Заметка</OrangeText> - таска без времени
    <br />
    <OrangeText>Напоминалка</OrangeText> - таска со временем
    <br />
  </>,
];

export const CREATE_EDIT_CATEGORY = [
  <>
    Для создания и изменения задачи обязательны поля:
    <br />
    <OrangeText> Название задачи</OrangeText>
    <br />
    <OrangeText> Описание задачи</OrangeText>
    <br />
    <OrangeText> Категория</OrangeText>.
  </>,
  <>
    Категории могут иметь только <OrangeText> разные названия</OrangeText>
  </>,
];
export const TASKS_REGISTER = [
  <>
    Реестры <OrangeText>Заметки</OrangeText>, <OrangeText>Напоминания</OrangeText> и
    <OrangeText> Архив </OrangeText>
    схожи. В каждом из них рассортированы по Категориям Таски, соответствующие им. В реестре
    <OrangeText> Без категории</OrangeText> все Таски находятся без сортировки.
  </>,
  <>
    Карточка имеет в себе: <OrangeText>название</OrangeText>,<OrangeText> описание</OrangeText>,
    <OrangeText> категорию</OrangeText>, и, в зависимости от типа Таски,
    <OrangeText> дату</OrangeText>.
  </>,
  <>
    С карточкой можно взаимодействовать тремя действиями:
    <OrangeText> перенести в архив</OrangeText>,<OrangeText> редактировать </OrangeText>и
    <OrangeText> просмотреть</OrangeText> ее.
  </>,
  <>
    Исключения: в <OrangeText>Без категории</OrangeText> нельзя архивировать задачу, в
    <OrangeText> Архиве</OrangeText> нельзя изменить задачу, в
    <OrangeText> просмотре Таски</OrangeText> можно только изменить ее.
  </>,
];

export const VIEW_CARD = [<>В просмотре карточки можно увидеть основную информацию о Таске. </>];
