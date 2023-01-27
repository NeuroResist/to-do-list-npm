import { SubmitHandler, useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

function useControlChangeTask({ id }: any) {
  const { register, handleSubmit, control, setValue } = useForm<Inputs>({
    defaultValues: {
      add: "",
      description: "",
      Calendar: undefined,
      Select: { value: "Дом", label: "Дом" },
    },
  });

  const changeTask = ({ add, description }: any) => {
    setValue("add", add);
    setValue("description", description);
  };

  const { tasks, categories, setTasks }: any = useOutletContext();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    setTasks((tasks: any) =>
      tasks.map((task: any) =>
        task.id === id
          ? {
              id: id,
              add: data.add,
              description: data.description,
              Calendar: data.Calendar,
              Select: data.Select,
            }
          : task,
      ),
    );

  return { tasks, changeTask, handleSubmit, register, control, categories, onSubmit };
}

export default useControlChangeTask;
