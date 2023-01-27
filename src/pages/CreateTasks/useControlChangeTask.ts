import { SubmitHandler, useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function useControlChangeTask() {
  const { register, handleSubmit, control, setValue } = useForm<Inputs>();

  const [changingTask, setChangingTask] = useState({ state: false, id: 0 });

  const changeTask = ({ add, description, id }: any) => {
    setChangingTask({ state: true, id: id });
    setValue("add", add);
    setValue("description", description);
  };

  const { tasks, setTasks, categories }: any = useOutletContext();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    tasks.map((task: any) => {
      if (task.id === changingTask.id) {
        task.id = changingTask.id;
        task.add = data.add;
        task.description = data.description;
        task.Calendar = data.Calendar;
        task.Select = data.Select;
      }
    });
    setChangingTask({ state: false, id: 0 });
  };

  return { tasks, changeTask, handleSubmit, register, control, categories, onSubmit };
}

export default useControlChangeTask;
