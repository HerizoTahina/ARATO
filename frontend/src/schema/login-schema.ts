import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
  email: Yup.string().required("Email obligatoire"),
  password: Yup.string().required("Mot de passe obligatoire"),
});

type ILoginForm = Yup.InferType<typeof loginFormSchema>;
export type { ILoginForm };
export { loginFormSchema };
