import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { CreateUserView } from "./create-user-view";
import { UserFormValues } from "./create-user.types";

export const CreateUser: React.FC<{}> = () => {
  const initialValues: UserFormValues = {
    firstName: "",
    age: 0,
    parents: {
      fatherName: "",
      motherName: "",
    },
    brothers: [],
    hasSun: false,
  };

  const UserValidationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "O nome é muito curto")
      .max(50, "O nome é muito grande")
      .required("O campo é obrigatorio"),
  });

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
        <CreateUserView />
      </Formik>
    </div>
  );
};
