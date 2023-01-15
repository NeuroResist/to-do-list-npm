import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Ошибка маршрутизации</h1>
      <p>На данный момент существуют только следующие маршруты:</p>
    </div>
  );
}
