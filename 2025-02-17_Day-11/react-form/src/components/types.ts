export type InputFieldType = {
  type: string;
  id: string;
  name: string;
  labelText: string;
  placeholder?: string;
  inputClassName?: string;
  labelClassName?: string;
  containerClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
export type RadioButtonsType = {
  options: string[];
  name: string;
  labelText: string;
  radioItemClassName?: string;
  radioGroupClassName?: string;
  labelClassName?: string;
  containerClassName?: string;
};
export type DropdownType = {
  options: string[];
  name: string;
  id: string;
  labelText: string;
  selectClassName?: string;
  labelClassName?: string;
  containerClassName?: string;
};
export type TextAreaType = {
  name: string;
  id: string;
  labelText: string;
  placeholder?: string;
  cols?: number;
  rows?: number;
  textareaClassName?: string;
  labelClassName?: string;
  containerClassName?: string;
};
