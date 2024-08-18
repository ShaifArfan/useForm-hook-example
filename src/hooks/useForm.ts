import { useState } from "react";

export default function useForm<T>(initialValues: T) {
  const [values, setValues] = useState(initialValues);

  const resetForm = () => {
    setValues(initialValues);
  };

  const handleFieldChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    let v: unknown = value;

    if (type === "checkbox") {
      v = (e.target as HTMLInputElement).checked;
    }
    // handle other input types here if needed

    setValues({
      ...values,
      [name]: v,
    });
  };

  const getFieldProps = (name: keyof T, type = "text", value?: string) => {
    const payload: {
      name: keyof T;
      value?: string | number;
      onChange: typeof handleFieldChange;
      type: string;
      checked?: boolean;
    } = {
      name,
      onChange: handleFieldChange,
      type,
    };

    if (type === "checkbox") {
      payload.checked = values[name] as boolean;
    } else if (type === "radio") {
      if (!value) throw new Error("Radio button value is required");
      payload.checked = values[name] === value;
      payload.value = value;
    } else {
      payload.value = value || (values[name] as string | number);
    }

    return payload;
  };

  return {
    initialValues,
    handleFieldChange,
    resetForm,
    values,
    getFieldProps,
  };
}
