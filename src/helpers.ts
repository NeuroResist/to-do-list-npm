// import { IFilteredTasks } from "./pages/TasksRegistry/interface";
// import { IOutlet } from "./interface";
// import { useOutletContext } from "react-router-dom";
//
// const useArt = (category: any, registryType: any) => {
//   const { tasks }: IOutlet = useOutletContext();
//
//   return tasks.filter(({ Calendar, isArchived, Select }: IFilteredTasks) => {
//     console.log("asdasd");
//     if (
//       Calendar &&
//       !isArchived &&
//       category.select.value === Select.value &&
//       registryType === "taskReminder"
//     )
//       return true;
//     if (
//       !Calendar &&
//       !isArchived &&
//       category.select.value === Select.value &&
//       registryType === "task"
//     )
//       return true;
//     if (isArchived && category.select.value === Select.value && registryType === "archive")
//       return true;
//   });
// };
// export default useArt;
