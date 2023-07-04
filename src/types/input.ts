export interface InputTypes {
  placeholder?: string;
  size?: string;
  name?: string;
  type?: string;
  icon: React.ReactElement;
}

export interface ISignUp {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
}

export interface ISignIn {
  email: string;
  password: string;
}
