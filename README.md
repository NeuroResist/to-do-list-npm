# Описание ToDo'шки

# Виды задач:
**Таска** - и заметки, и напоминалки

**Заметка** - таска без времени

**Напоминалка** - таска со временем

# Создание Тасков
Для создания и изменения Тасков обязательны поля:

**Название таски** - от 3 до 20 символов

**Описание таски** - до 200 символов

**Категория** - по дефолту "Дом"

Необязательное поле - Дата, в зависимости от ее наличия Таска будет отнесена либо к Напоминалкам, либо к Заметкам

# Схема жизненного цикла Тасков
![Схема ТуДушка](https://user-images.githubusercontent.com/28624740/221385425-5121e079-3ed1-4624-8a92-7375c2eca95f.png)

# Создание/редактор Категорий

Категории могут иметь только разные названия, длина названия от 3 до 20 символов.
Категорию можно удалить, тогда все задачи которые были с этой категорией уйдут на страницу Без категории.

# Реестр задач
**Реестры: Заметки, Напоминания и Архив** схожи. В каждом из них рассортированы по Категориям Таски, соответствующие им. В реестре **Без категории** все Таски находятся без сортировки.

Карточка имеет в себе: **название, описание, категорию**, и, в зависимости от типа Таски, **дату**.

С карточкой можно взаимодействовать тремя действиями: **перенести в архив, редактировать и просмотреть ее**.

**Исключения**: в **Без категории** нельзя архивировать задачу, в **Архиве** нельзя изменить задачу, в **просмотре Таски** можно только изменить ее.

# Просмотр карточки
В просмотре карточки можно увидеть **основную информацию** о Таске.
