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

  const { tasks, categories }: any = useOutletContext();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    tasks.map((task: any) => {
      if (task.id === id) {
        task.id = id;
        task.add = data.add;
        task.description = data.description;
        task.Calendar = data.Calendar;
        task.Select = data.Select;
      }
    });
  };
  console.log(tasks);
  return { tasks, changeTask, handleSubmit, register, control, categories, onSubmit };
}

export default useControlChangeTask;
