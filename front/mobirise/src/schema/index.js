import * as yup from "yup";
const passwordRule =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  urlInput: yup.string().url("Duzgun URL daxil edin").required("Sekil URL daxil edin"),
  priceInput: yup
    .number()
    .positive("Menfi deyer vere bilmezsiniz...")
    .integer("Qiymeti tam eded kimi daxil edin")
    .required("Qiymeti daxil edin"),
    titleInput: yup.string().required("Title-i daxil edin"),
});
