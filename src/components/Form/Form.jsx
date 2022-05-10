import classes from "./Form.module.scss";
import { Field, Form as FormikForm, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "../Button";

const urlSchema = Yup.object().shape({
  url: Yup.string()
    .url("Введите правильный URL")
    .required("URL-это обязательное поле"),
});

const Form = () => {
  return (
    <section className={classes.section}>
      <div className="container">
        <Formik
          initialValues={{
            url: "",
          }}
          validationSchema={urlSchema}
          onSubmit={(values) => {
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
                placeholder="Вставьте ссылку"
                className={classes.input}
                style={{
                  outline: `2px solid ${
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
