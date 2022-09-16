import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { CreateUserView } from "./create-user-view";
import { UserFormValues } from "./create-user.types";

export const CreateUser: React.FC<{}> = () => {
  const initialValues: UserFormValues = {
    firstName: "",
    lastName: "",
    age: 0,
    parents: {
      fatherName: "",
      motherName: "",
    },
    brothers: [],
  };

  const UserValidationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "O nome é muito curto")
      .max(50, "O nome é muito grande")
      .required("O campo é obrigatorio"),
    lastName: Yup.string()
      .min(2, "O nome é muito curto")
      .max(50, "O nome é muito grande")
      .required("O campo é obrigatorio"),
  });

  console.log("Renderizei");

  return (
    <div>
      <h1>Formulario de Usuario</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={UserValidationSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {/* <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="First Name" />
          <button type="submit">Submit</button>
        </Form> */}
        <CreateUserView />
      </Formik>
    </div>
  );
};
