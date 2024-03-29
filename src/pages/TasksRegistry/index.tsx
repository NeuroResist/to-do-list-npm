import { useState } from "react";

import TasksWithCategory from "./TasksWithCategory";
import TasksWithoutCategory from "./TasksWithoutCategory";
import BackButton from "components/BackButton";
import Filter from "components/Filter";

import useControl from "./useControl";

import { RegistryType } from "types";

function TasksRegistry({ registryType }: { registryType: RegistryType }) {
  const { categories, filterTasks, navigate, isModalOpen, setIsModalOpen, refModal } = useControl();
  const [filteredTasks, setFilteredTasks] = useState(filterTasks);

  return (
    <ul className="flex flex-col items-center">
      <BackButton navigate={navigate} />
      <button
        className="absolute top-0 left-[100px] w-[100px] h-[60px] font-bold bg-blue"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        Фильтры
      </button>

      {isModalOpen && <Filter setFilteredTasks={setFilteredTasks} refModal={refModal} />}

      {registryType !== "withoutCategory" ? (
        <TasksWithCategory
          registryType={registryType}
          filterTasks={filteredTasks}
          categories={categories}
        />
      ) : (
        <TasksWithoutCategory registryType={registryType} filterTasks={filteredTasks} />
      )}
    </ul>
  );
}

export default TasksRegistry;
