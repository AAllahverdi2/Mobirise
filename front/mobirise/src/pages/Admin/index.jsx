import { useFormik } from "formik";
import { basicSchema } from "../../schema";
import { useCreateProductMutation, useDeleteProductMutation, useGetAllProductsQuery } from "../../redux/productsApi/productsApi";

function Admin() {
  const [addProduct] = useCreateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const {data: products, isLoading, isError} = useGetAllProductsQuery();
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
        addProduct({
          image: values.urlInput,
          name: values.titleInput,
          price: values.priceInput,
        });
        resetForm();
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
        <table className="table table-bordered table-striped mt-5">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
          {
            products && products.map((product, index) => (
              <tr key={index}>
                <td>
                  <img src={product.image} alt={product.name} style={{width: '80px'}}/>
                </td>
                <td style={{fontSize: '20px'}}>{product.name}</td>
                <td style={{fontSize: '20px'}}>{product.price}</td>
                <td>
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-danger" onClick={()=>deleteProduct(product._id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </table>
      </div>
    </div>
  );
}

export default Admin;
