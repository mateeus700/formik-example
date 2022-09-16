import { Field, FieldArray, Form, useFormikContext } from "formik";
import React from "react";
import { Input } from "../../components/input/input";
import { UserFormValues } from "./create-user.types";

export const CreateUserView: React.FC<{}> = () => {
  const { values } = useFormikContext<UserFormValues>();

  return (
    <>
      <Form>
        <Field
          id="firstName"
          name="firstName"
          placeholder="First Name"
          component={Input}
        />
        <Field
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          component={Input}
        />
        <Field
          id="age"
          name="age"
          placeholder="Age"
          type="number"
          component={Input}
        />
        <Field
          id="parents.fatherName"
          name="parents.fatherName"
          placeholder="Father Name"
          component={Input}
        />
        <Field
          id="parents.motherName"
          name="parents.motherName"
          placeholder="Mother Name"
          component={Input}
        />
        <FieldArray
          name="brothers"
          render={(arrayHelpers) => (
            <div>
              {values.brothers && values.brothers.length > 0 ? (
                values.brothers.map((brother, index) => (
                  <div key={index}>
                    <Field
                      id={`brothers.${index}.firstName`}
                      name={`brothers.${index}.firstName`}
                      placeholder="brother first name"
                      component={Input}
                    />

                    <Field
                      id={`brothers.${index}.lastName`}
                      name={`brothers.${index}.lastName`}
                      placeholder="brother last Name"
                      component={Input}
                    />
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)} // remove a brother from the list
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                    >
                      +
                    </button>
                  </div>
                ))
              ) : (
                <button type="button" onClick={() => arrayHelpers.push("")}>
                  {/* show this when user has removed all brothers from the list */}
                  Add a brother
                </button>
              )}
            </div>
          )}
        />

        <button type="submit">Submit</button>
      </Form>
    </>
  );
};
