import { MenuItem, Menu, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import CategoryIcon from "@mui/icons-material/Category";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

function SidebarMenu() {
  return (
    <Sidebar width="360px" backgroundColor="rgb(188, 243, 255)" className="!border-r-0">
      <Menu>
        <MenuItem
          icon={<AssignmentTurnedInIcon />}
          className="border-b-2 border-b-black"
          component={<Link to="/create-tasks" />}
        >
          Создание Тасков
        </MenuItem>
        <MenuItem
          icon={<CategoryIcon />}
          className="border-b-2 border-b-black"
          component={<Link to="/create-categories" />}
        >
          Создание/редактор Категорий
        </MenuItem>
        <SubMenu label="Реестр задач" icon={<ListAltIcon />}>
          <MenuItem
            className="bg-menu-item"
            component={<Link to="/tasks-registry/task-registry" />}
          >
            Заметки
          </MenuItem>
          <MenuItem
            className="bg-menu-item"
            component={<Link to="/tasks-registry/task-reminder-registry" />}
          >
            Напоминания
          </MenuItem>
          <MenuItem className="bg-menu-item" component={<Link to="/tasks-registry/archive" />}>
            Архив
          </MenuItem>
          <MenuItem
            className="bg-menu-item"
            component={<Link to="/tasks-registry/without-category" />}
          >
            Без категории
          </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}

export default SidebarMenu;
