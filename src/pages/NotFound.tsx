import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Ошибка маршрутизации</h1>
      <p>Не существует такого маршрута</p>
      <p>На данный момент существуют только следующие маршруты:</p>
    </div>
  );
}
