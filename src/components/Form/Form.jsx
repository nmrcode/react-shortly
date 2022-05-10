import classes from "./Form.module.scss";
import { Field, Form as FormikForm, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "../Button";

const SignupSchema = Yup.object().shape({
  url: Yup.string().url("Введите правильный URL").required("Обязательное поле"),
});

const Form = () => {
  return (
    <section className={classes.section}>
      <div className="container">
        <Formik
          initialValues={{
            url: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <FormikForm className={classes.form} autoComplete="off">
              {errors.url && touched.url ? (
                <div className={classes.error}>{errors.url}</div>
              ) : null}
              <Field
                name="url"
                placeholder="Paste link"
                className={classes.input}
                style={{
                  outline: `1px solid ${
                    errors.url && touched.url ? "red" : "transparent"
                  }`,
                }}
              />

              <Button variant="square" type="submit" size="medium">
                Shorten it!
              </Button>
            </FormikForm>
          )}
        </Formik>
      </div>
    </section>
  );
};

export { Form };
