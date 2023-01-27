import { SubmitHandler, useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

function useControl() {
  const { register, handleSubmit, control, reset } = useForm<Inputs>({
    defaultValues: {
      add: "",
      description: "",
      Calendar: undefined,
      Select: { value: "Дом", label: "Дом" },
    },
  });

  const { tasks, setTasks, categories }: any = useOutletContext();

  let id = tasks.length;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
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
    reset();
  };

  return { tasks, handleSubmit, register, control, categories, onSubmit };
}

export default useControl;
