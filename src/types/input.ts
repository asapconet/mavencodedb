import { UseFormRegister } from "react-hook-form";

export interface InputType {
  textarea?: boolean;
  errors?: any;
  label?: string;
  rightIcon?: string;
  value?: any;
  name?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  register?: UseFormRegister<any>;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
