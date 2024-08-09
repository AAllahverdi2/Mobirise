import React, { useState } from "react";
import { useFormik } from "formik";
import { basicSchema } from "../../schema";

function Admin() {
    const [productList, setProductList] = useState([]);
  const { values, handleChange, handleSubmit, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        urlInput: "",
        titleInput: "",
        priceInput: "",
      },
      validationSchema: basicSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values) => {
        // fetch("http://localhost:4000/flowers/", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(values),
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log("Success:", data);
        //     setProductList([...productList, data]);
        //     resetForm();
        //   })
        //   .catch((error) => {
        //     console.error("Error:", error);
        //   });
        console.log("okkkk");
      },
    });
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="py-5">Admin Page</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="urlInput" className="form-label fs-4">
              URL of product
            </label>
            <input
              type="text"
              className="form-control"
              id="urlInput"
              aria-describedby="textHelp"
              value={values.urlInput}
              onChange={handleChange}
            />
          </div>
          {errors.urlInput && touched.urlInput && (
            <p className="text-danger fs-4">{errors.urlInput}</p>
          )}
          <div className="d-flex gap-4">
            <div className="mb-3 w-50">
              <label htmlFor="titleInput" className="form-label fs-4">
                Title of product
              </label>
              <input
                type="text"
                className="form-control"
                id="titleInput"
                value={values.titleInput}
                onChange={handleChange}
              />
            {errors.titleInput && touched.titleInput && (
              <p className="text-danger fs-4">{errors.titleInput}</p>
            )}
            </div>
            <div className="mb-3 w-50">
              <label htmlFor="priceInput" className="form-label fs-4">
                Price of product
              </label>
              <input
                type="text"
                className="form-control"
                id="priceInput"
                value={values.priceInput}
                onChange={handleChange}
              />
              {errors.priceInput && touched.priceInput && (
                <p className="text-danger fs-4">{errors.priceInput}</p>
              )}
            </div>
          </div>

          <button type="submit" className="btn btn-primary px-5 fs-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
