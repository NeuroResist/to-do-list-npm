import dayjs from "dayjs";

function OneTask({ add, description, Calendar, Select, id }: any) {
  return (
    <p>
      {add} - ✏️
      {dayjs(Calendar).format("DD.MM.YYYY")} - 🕗
      {Select.value} - category 📋
      {description} - description 🌟
      {id} - Айди
    </p>
  );
}

export default OneTask;
