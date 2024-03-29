# Установка и запуск
1) Клонируйте проект с гитхаба
2) npm install
3) Запустите локальный сервер, http://localhost:3000/


# Описание ToDo'шки

# Виды задач:
**Таска** - и заметки, и напоминания

**Заметка** - таска без времени

**Напоминания** - таска со временем

# Создание Тасков
Для создания и изменения Тасков обязательны поля:

**Название таски** - от 3 до 20 символов

**Описание таски** - до 200 символов

**Категория** - по дефолту "Дом"

Необязательное поле - Дата, в зависимости от ее наличия Таска будет отнесена либо к Напоминаниям, либо к Заметкам

# Схема жизненного цикла Тасков
![Схема ТуДушка](https://user-images.githubusercontent.com/28624740/221385425-5121e079-3ed1-4624-8a92-7375c2eca95f.png)

# Создание/редактор Категорий

Категории могут иметь только разные названия, длина названия от 3 до 20 символов.
Категорию можно удалить, тогда все задачи которые были с этой категорией уйдут на страницу Без категории.

# Реестр задач
**Реестры: Заметки, Напоминания и Удаленные** схожи. В каждом из них рассортированы по Категориям Таски, соответствующие им. В реестре **Без категории** все Таски находятся без сортировки.

Карточка имеет в себе: **название, описание, категорию**, и, в зависимости от типа Таски, **дату**.

С карточкой можно взаимодействовать тремя действиями: **перенести в Удаленные, редактировать и просмотреть ее**.

**Исключения**: в **Без категории** нельзя удалить задачу, в **Удаленные** нельзя изменить задачу, в **просмотре Таски** можно только изменить ее.

# Просмотр карточки
В просмотре карточки можно увидеть **основную информацию** о Таске.

# Фильтрация
**Фильтрация** - доступна во всех реестрах. Фильтровать можно по следующим
критериям:
**Дата**, **Категория**, **Статус**.

Чтобы обнулить фильтрацию надо выбрать статус и категорию "Все"

# Статусная модель
Статусы - статусная модель, которая есть у Напоминаний. Есть три вида
статусов:

**В работе** - Если время таски еще не вышло

**Просрочено** - если прошло время выполнения напоминания

**Удалено** - если напоминание удалено, либо выполнено