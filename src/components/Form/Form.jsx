import classes from "./Form.module.scss";
import { Field, Form as FormikForm, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "../Button";
import LinkStore from "../../store/linkStore";
import { observer } from "mobx-react";

const urlSchema = Yup.object().shape({
  url: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Введите корректный URL!"
    )
    .required("URL-это обязательное поле"),
});

const Form = observer(() => {
  return (
    <section className={classes.section}>
      <div className="container">
        <Formik
          initialValues={{
            url: "",
          }}
          validationSchema={urlSchema}
          onSubmit={(values, actions) => {
            LinkStore.createShortLink(values.url);
            console.log(LinkStore.loading);
            actions.resetForm();
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
                Сократить
              </Button>
            </FormikForm>
          )}
        </Formik>
      </div>
    </section>
  );
});

export { Form };
