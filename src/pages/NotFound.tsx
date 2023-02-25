import { Link } from "react-router-dom";

export default function ErrorPage() {
  const text = "text-red font-bold text-xl";

  return (
    <div className="flex items-center justify-center flex-col h-[500px]">
      <h1 className="text-pink font-bold text-4xl">Ошибка маршрутизации</h1>

      <p className="text-pink font-bold text-2xl mb-10">
        Не существует такого маршрута / Произошла ошибка
      </p>

      <p className="text-red font-bold text-2xl mb-4">
        На данный момент существуют только следующие маршруты:
      </p>
      <ul className="flex flex-col">
        <Link className={text} to="/create-tasks">
          /create-tasks
        </Link>
        <Link className={text} to="/create-categories">
          /create-categories
        </Link>
        <Link className={text} to="/tasks-registry/task-registry">
          /tasks-registry/task-registry
        </Link>
        <Link className={text} to="/tasks-registry/task-reminder-registry">
          /tasks-registry/task-reminder-registry
        </Link>
        <Link className={text} to="/tasks-registry/without-category">
          /tasks-registry/without-category
        </Link>
      </ul>
    </div>
  );
}
