import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { decimalInputHandler, getRandomString } from "@/utility/utility";

const RepairForm = ({ values, setFieldValue, session, touched, errors }) => {
  console.log(values);
  return (
    <React.Fragment>
      <Form className="uk-form-stacked">
        <div>
          <div className="uk-text-right uk-clearfix">
            <button type="submit" className="uk-button uk-button-small uk-button-primary uk-border-rounded">
              Next
            </button>
          </div>
          <hr />
        </div>
        <div className={"uk-child-width-1-2 uk-grid-small"} uk-grid={1}>
          <div>
            <label className="uk-form-label uk-text-bold" htmlFor="Device">
              Device*
            </label>
            <div className="uk-form-controls">
              <Field
                className={[
                  "uk-input",
                  touched.device && errors.device ? "uk-form-danger uk-animation-shake" : "",
                ].join(" ")}
                id="Device"
                name="device"
                type="text"
                placeholder="iphone 7"
              />
            </div>
          </div>
          <div>
            <label className="uk-form-label uk-text-bold" htmlFor="Defectivepart">
              Defective part*
            </label>
            <div className="uk-form-controls">
              <Field
                className={[
                  "uk-input",
                  touched.defectivepart && errors.defectivepart ? "uk-form-danger uk-animation-shake" : "",
                ].join(" ")}
                id="Defectivepart"
                name="defectivepart"
                type="text"
                placeholder="Lcd screen"
              />
            </div>
          </div>
          <div>
            <label className="uk-form-label uk-text-bold" htmlFor="category">
              Category
              {/* <span  className="uk-float-right uk-link" uk-icon="icon: grid;"></span> */}
            </label>
            <div className="uk-form-controls">
              <Field
                className={[
                  "uk-select",
                  errors.category && touched.category ? "uk-form-danger uk-animation-shake" : "",
                ].join(" ")}
                id="category"
                name="category"
                as="select"
              >
                <option value="" disabled></option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
              </Field>
            </div>
          </div>
          <div>
            <label className="uk-form-label uk-text-bold" htmlFor="Imei">
              Imei/Serial #
            </label>
            <div className="uk-form-controls">
              <Field className="uk-input" id="Imei" name="imei" type="text" placeholder="356893504830934" />
            </div>
          </div>

          <div>
            <label className="uk-form-label uk-text-bold" htmlFor="amount">
              Cost
            </label>
            <div className="uk-form-controls">
              <Field
                className={["uk-select", errors.cost && touched.cost ? "uk-form-danger uk-animation-shake" : ""].join(
                  " "
                )}
                id="amount"
                name="amount"
                type="text"
                inputMode="number"
                onInput={decimalInputHandler}
              />
            </div>
          </div>
          <div>
            <label className="uk-form-label uk-text-bold" htmlFor="tech">
              Tech
            </label>
            <div className="uk-form-controls">
              <Field className="uk-input" name="technician" type="hidden" />
              <Field className="uk-input" name="store" type="hidden" />
              <Field
                className="uk-input uk-disabled"
                id="name"
                name="name"
                type="text"
                value={`${session.user.firstname} ${session.user.lastname}`}
                readOnly={true}
              />
            </div>
          </div>

          <div className="uk-width-1-1">
            <div className="uk-form-controls">
              <label className="uk-form-label uk-text-bold" htmlFor="note">
                Notes
              </label>
              <textarea
                className="uk-textarea"
                rows="5"
                id="note"
                name="note"
                style={{ resize: "none" }}
                placeholder="Type repair notes here"
              ></textarea>
            </div>
          </div>
        </div>
      </Form>
    </React.Fragment>
  );
};

const FormikRepairForm = withFormik({
  mapPropsToValues({
    device,
    amount,
    transationId = getRandomString(10),
    imei,
    category,
    defectivePart,
    technician,
    note,
    store,
  }) {
    return {
      device: device || "",
      defectivePart: defectivePart || "",
      imei: imei || "",
      category: category || "",
      technician: technician || "",
      transationId: transationId || "",
      amount: amount || "",
      note: note || "",
      store: store || "",
    };
  },
  validationSchema: Yup.object().shape({
    device: Yup.string().required(),
    defectivepart: Yup.string().required(),
    store: Yup.string().required(),
    category: Yup.string().required(),
    technician: Yup.string().required(),
    store: Yup.string().required(),
    amount: Yup.number().required(),
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {},
})(RepairForm);

export default FormikRepairForm;
