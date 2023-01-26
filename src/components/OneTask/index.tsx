import dayjs from "dayjs";

function OneTask({ add, description, Calendar, Select }: any) {
  return (
    <section className="flex flex-col min-h-[100px] min-w-[250px] bg-green border-4 border-pink box-border p-2">
      <p className="text-center">{add}✏️</p>
      <p className="min-h-[100px] break-all">{description}🌟</p>
      <div className="flex justify-between">
        <p>{Select.value}📋</p>
        <p>
          <time>{Calendar && dayjs(Calendar).format("DD.MM.YYYY 🕗")}</time>
        </p>
      </div>
    </section>
  );
}

export default OneTask;
