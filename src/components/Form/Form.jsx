import classes from "./Form.module.scss";
import { Button } from "../Button";
import { Formik } from "formik";

const Form = () => {
  return (
    <section className={classes.section}>
      <div className="container">
        <Formik
          initialValues={{ url: "" }}
          validate={(values) => {
            const errors = {};
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className={classes.form} autoComplete="off">
              <input
                type="url"
                name="url"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.url}
                placeholder="Shorten a link here..."
                className={classes.input}
              />
              <Button variant="square" type="submit" size="medium">
                Shorten it!
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export { Form };
