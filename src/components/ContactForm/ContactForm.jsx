import { useId } from "react";
import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from 'nanoid';

const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    number: Yup.string()
        .matches(/^\d{3}-\d{2}-\d{2}$/, "Must be in the format xxx-xx-xx")
        .required("Required")
});

export default function ContactForm({ onAdd }) {
    const fieldId = useId() 
    
    const handleSubmit = (values, actions) => {
        onAdd({
      ...values,
      id: nanoid()
    })
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{
                name: "",
                number: ""
            }}
            validationSchema={FeedbackSchema}
            onSubmit={handleSubmit}
        >
            <Form className={css.form}>
                <label htmlFor={`name-${fieldId}`}>Name</label>
                <Field type="text" name="name" id={`name-${fieldId}`} className={css.field} />
                <ErrorMessage name="name" className={css.error} component="div" />

                <label htmlFor={`number-${fieldId}`}>Number</label>
                <Field type="text" name="number" id={`number-${fieldId}`} className={css.field}/>
                <ErrorMessage name="number" className={css.error} component="div" />

                <button type="submit" className={css.btn}>Add contact</button>
            </Form>
        </Formik>
    );
}