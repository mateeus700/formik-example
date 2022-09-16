import { ErrorMessage } from "./input.styled";

export const Input = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}: any) => (
  <div>
    {field.name}
    <input {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <ErrorMessage>{errors[field.name]}</ErrorMessage>
    )}
  </div>
);
