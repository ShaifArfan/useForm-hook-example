import useForm from "./hooks/useForm";

function Form() {
  const { values, resetForm, getFieldProps } = useForm({
    name: "initial name",
    myNumber: 45,
    email: "test@example.com",
    agreement: true,
    myRange: 200,
    myRadio: "option2",
    mySelect: "option2",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(values);
  };

  return (
    <div className="form">
      <h1>UseForm Hook:</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div className="form__field">
            <label htmlFor="name">Name:</label>
            <input id="name" {...getFieldProps("name", "text")} />
          </div>
          <div className="form__field">
            <label htmlFor="myNumber">My Number:</label>
            <input id="myNumber" {...getFieldProps("myNumber", "number")} />
          </div>
          <div className="form__field">
            <label htmlFor="email">Email:</label>
            <input id="email" {...getFieldProps("email", "email")} />
          </div>
          <div className="form__field form__field--checkbox">
            <input id="agreement" {...getFieldProps("agreement", "checkbox")} />
            <label htmlFor="agreement">Agree:</label>
          </div>
          <div className="form__field">
            <label htmlFor="myRange">My Range: {values.myRange}</label>
            <input
              id="myRange"
              min={100}
              max={1000}
              step={100}
              {...getFieldProps("myRange", "range")}
            />
          </div>
          <div className="form__field form__field--radio">
            <div>
              <input
                id="option1"
                {...getFieldProps("myRadio", "radio", "option1")}
              />
              <label htmlFor="option1">Option1</label>
            </div>
            <div>
              <input
                id="option2"
                {...getFieldProps("myRadio", "radio", "option2")}
              />
              <label htmlFor="option2">Option2</label>
            </div>
            <div>
              <input
                id="option3"
                {...getFieldProps("myRadio", "radio", "option3")}
              />
              <label htmlFor="option3">Option3</label>
            </div>
          </div>
          <div className="form__field">
            <label htmlFor="mySelect">My Select</label>
            <select id="mySelect" {...getFieldProps("mySelect", "select")}>
              <option value="option1">Option1</option>
              <option value="option2">Option2</option>
              <option value="option3">Option3</option>
            </select>
          </div>
          <div className="form__field">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              {...getFieldProps("message", "textarea")}
            ></textarea>
          </div>
          <div className="buttons">
            <button type="submit" className="submit">
              Send
            </button>
            <button type="button" onClick={resetForm}>
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
