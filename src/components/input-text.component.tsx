/* eslint-disable @typescript-eslint/no-explicit-any */
import type { UseFormRegisterReturn } from 'react-hook-form';
import '../styles/InputText.css';

interface InputTextComponentProps {
  nameStrong?: string;
  containerClass?: string;
  register?: UseFormRegisterReturn<any>;
  errors?: any;
  required?: boolean;
  caracters?: number;
  minLength?: number;
  field: string;
  typeError: any;
  type?: string;
  height?: string;
  uppercase?: boolean;
  style?: React.CSSProperties;
}

export const InputText: React.FC<
  InputTextComponentProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  nameStrong,
  containerClass = '',
  register,
  required,
  type = 'text',
  height,
  uppercase,
  style,
  typeError,
  ...props
}) => (
  <div className={`input-container ${containerClass}`} style={style}>
    {nameStrong && <label className="input-label">{nameStrong}</label>}
    <input
      {...props}
      {...register}
      type={type}
      required={required}
      className={`input-field ${uppercase ? 'uppercase' : ''} ${typeError ? 'error' : ''}`}
      style={{ height: height ?? '38px' }}
    />
  </div>
);
