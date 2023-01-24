import { Outlet } from "react-router";
import React, { createContext, useState } from "react";
import SideMenuAction from "./SideMenuAction";
import { icons } from "../../constants";
import { OPTIONS, TASKS } from "../../MOCK";

function SideMenu() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(OPTIONS);

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
          {icons.map((item: any) => (
            <SideMenuAction
              key={item.path}
              icon={item.icon}
              text={item.text}
              path={item.path}
              className="mr-2"
            />
          ))}
        </article>
      </div>

      <div className="w-full">
        <Outlet context={{ tasks, setTasks, categories, setCategories }} />
      </div>
    </div>
  );
}

export default SideMenu;
