import { ReactSVG } from "react-svg";
import { HTMLInputTypeAttribute } from 'react'
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { AnyObject, AnyObjectSchema } from "yup";

type InputProps = {
  id: string
  label: string
  placeholder: string
  error?: string
  preview?: string
  values?: Array<{ text: string, value: string }>
  value?: string
  onChange?: VoidFunction
  register?: UseFormRegisterReturn
  type: HTMLInputTypeAttribute
}

function Input({ id, label, placeholder, register, error, type = "text" }: InputProps) {
  return (
    <div className="input">
      <label htmlFor={id} className="input__label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="input__field"
        {...register}
      />
      <p className="input__error">{error}</p>
    </div>
  );
}

function Textarea({ id, label, register, error, placeholder }: InputProps) {
  return (
    <div className="input">
      <label htmlFor={id} className="input__label">
        {label}
      </label>
      <textarea
        id={id}
        className="input__field"
        rows={3}
        placeholder={placeholder}
        {...register}
      ></textarea>
      <p className="input__error">{error}</p>
    </div>
  );
}

function InputFile({ id, label, value, preview, onChange }: InputProps) {
  return (
    <div className="input input--file">
      <label htmlFor={id} className="input__label">
        {label}
      </label>
      <input type="file" value={value} id={id} onChange={onChange} />
      <label htmlFor={id} className="file-field">
        {preview ? <img src={preview} alt="preview" className="preview-image" /> : <ReactSVG src="/svg/upload.svg" />}
      </label>
    </div>
  );
}

function Select({ values, id, register, error, label }: InputProps) {
  return (
    <div className="input">
      <label htmlFor={id} className="input__label">
        {label}
      </label>
      <select id={id} className="input__field" {...register}>
        {values?.map((item, index) => {
          const { value, text } = item;
          return (
            <option key={index} value={value}>
              {text}
            </option>
          );
        })}
      </select>
      <p className="input__error">{error}</p>
    </div>
  );
}

export { Input, Textarea, InputFile, Select };
