import { ErrorMessage } from "./toogle.styled";

export const Toggle = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}: any) => (
  <div>
    <label>
      {field.name}
      <input type="checkbox" {...field} {...props} />
    </label>
    {touched[field.name] && errors[field.name] && (
      <ErrorMessage>{errors[field.name]}</ErrorMessage>
    )}
  </div>
);
