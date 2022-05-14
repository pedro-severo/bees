import { useEffect, useState } from "react";
import { isLetters } from "../utils/checkIfIsTextOnly";

const useForm = (initialState: any) => {
  const [form, setForm] = useState(initialState);
  const [disabledForm, setDisabledForm] = useState(true);

  const handleCommonInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setForm({ ...form, [name]: checked });
  };

  const handleTextOnlyInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    if (isLetters(value)) setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    if (Object.values(form).every((prop) => prop)) {
      setDisabledForm(false);
    } else if (!disabledForm) {
      setDisabledForm(true);
    }
  }, [form]);

  const cleanFields = () => {
    setForm(initialState);
  };

  return {
    form,
    handleCommonInputChange,
    cleanFields,
    handleCheckboxChange,
    disabledForm,
    handleTextOnlyInputChange,
  };
};

export default useForm;
