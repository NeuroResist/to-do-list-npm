import { Outlet } from "react-router";
import React from "react";
import SideMenuAction from "../SideMenuAction";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const icons = [
  { icon: <Brightness5Icon />, text: "Создание Задач" },
  { icon: <MonetizationOnIcon />, text: "Все Задачи" },
];
function MainPage() {
  return (
    <div className="flex">
      <div className="min-w-[300px] bg-blue h-[100vh] p-3">
        <figure className="flex mb-2">
          <img className="rounded-full" src="./me.jpg" alt="account" />
          <div className="p-2">
            <figcaption className="font-bold">Орлов Ярослав</figcaption>
            <address className="text-sm text-[#0F0]">
              <a href="mailto:pataponchik3@gmail.com">pataponchik3@gmail.com</a>
            </address>
          </div>
        </figure>

        <article className="flex flex-col relative">
          {icons.map((item) => (
            <SideMenuAction icon={item.icon} text={item.text} className="mr-2" />
          ))}
        </article>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default MainPage;
