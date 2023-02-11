import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  const text = "text-[#ff0000]/[0.5] font-bold text-xl";

  return (
    <div className="flex items-center justify-center flex-col h-[500px]">
      <h1 className="text-pink font-bold text-4xl">Ошибка маршрутизации</h1>
      <p className="text-pink font-bold text-2xl mb-10">Не существует такого маршрута</p>
      <p className="text-[#ff0000]/[0.5] font-bold text-2xl mb-4">
        На данный момент существуют только следующие маршруты:
      </p>
      <ul className="flex flex-col">
        <Link className={text} to="/create-tasks">
          /create-tasks
        </Link>
        <Link className={text} to="/create-tasks">
          /create-categories
        </Link>
        <Link className={text} to="/create-tasks">
          /tasks-registry/task-registry
        </Link>
        <Link className={text} to="/create-tasks">
          /tasks-registry/task-reminder-registry
        </Link>
        <Link className={text} to="/create-tasks">
          /tasks-registry/archive
        </Link>
      </ul>
    </div>
  );
}
