import { SubmitHandler, useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function useControl() {
  const { register, handleSubmit, control, setValue, reset } = useForm<Inputs>({
    defaultValues: {
      add: "",
      description: "",
      Calendar: new Date(),
      Select: { value: "Дом", label: "Дом" },
    },
  });

  const [changingTask, setChangingTask] = useState({ state: false, id: 0 });

  const { tasks, setTasks, categories }: any = useOutletContext();

  let id = tasks.length;

  const changeTask = ({ add, description, id }: any) => {
    setChangingTask({ state: true, id: id });
    setValue("add", add);
    setValue("description", description);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!changingTask.state) {
      id++;
      setTasks([
        ...tasks,
        {
          id: id,
          add: data.add,
          description: data.description,
          Calendar: data.Calendar,
          Select: data.Select,
        },
      ]);
    } else {
      tasks.map((task: any) => {
        if (task.id === changingTask.id) {
          task.id = changingTask.id;
          task.add = data.add;
          task.description = data.description;
          task.Calendar = data.Calendar;
          task.Select = data.Select;
        }
      });
      reset();
      setChangingTask({ state: false, id: 0 });
    }
  };

  return { tasks, changeTask, handleSubmit, register, control, categories, onSubmit };
}

export default useControl;
