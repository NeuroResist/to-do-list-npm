import OrangeText from "components/OrangeText";

export const TASKS_TYPES = [
  <>
    <OrangeText>Таска</OrangeText> - и заметки, и напоминалки
    <br />
    <OrangeText>Заметка</OrangeText> - таска без времени
    <br />
    <OrangeText>Напоминалка</OrangeText> - таска со временем
    <br />
  </>,
];

export const CREATE_EDIT_TASK = [
  <>
    Для создания и изменения задачи обязательны поля:
    <br />
    <OrangeText> Название задачи</OrangeText> - от 3 до 20 символов
    <br />
    <OrangeText> Описание задачи</OrangeText> - до 200 символов
    <br />
    <OrangeText> Категория</OrangeText> - по дефолту "Дом"
  </>,
  <>
    Необязательное поле - <OrangeText>Дата</OrangeText>, в зависимости от ее наличия Таска будет
    отнесена либо к <OrangeText>Напоминалкам</OrangeText>, либо к <OrangeText>Заметкам</OrangeText>
  </>,
];

export const CREATE_EDIT_CATEGORY = [
  <>
    <OrangeText>Категории</OrangeText> могут иметь только разные названия, длина названия от 3 до 20
    символов.
    <br />
    <OrangeText>Категорию</OrangeText> можно удалить, тогда все задачи которые были с этой
    категорией уйдут на страницу <OrangeText>Без категории</OrangeText>.
  </>,
];

export const TASKS_REGISTER = [
  <>
    Реестры: <OrangeText>Заметки</OrangeText>, <OrangeText>Напоминания</OrangeText> и
    <OrangeText> Удаленные </OrangeText>
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
    <OrangeText> перенести в Удаленные</OrangeText>,<OrangeText> редактировать </OrangeText>и
    <OrangeText> просмотреть</OrangeText> ее.
  </>,
  <>
    Исключения: в <OrangeText>Без категории</OrangeText> нельзя удалить задачу, в
    <OrangeText> Удаленных</OrangeText> нельзя изменить задачу, в
    <OrangeText> просмотре Таски</OrangeText> можно только изменить ее.
  </>,
];

export const VIEW_CARD = [<>В просмотре карточки можно увидеть основную информацию о Таске. </>];
