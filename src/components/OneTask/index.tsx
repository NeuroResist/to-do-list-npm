import dayjs from "dayjs";
import clsx from "clsx";

function OneTask({ add, description, Calendar, Select, isArchived }: any) {
  return (
    <section
      className={clsx(
        "flex flex-col min-h-[100px] min-w-[250px] bg-green border-4 border-pink box-border p-2",
        { "!bg-gray": isArchived },
      )}
    >
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
