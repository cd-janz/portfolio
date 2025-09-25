export default interface IPerson {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  position: string;
  phrase: string;
  social: IPersonSocial[]
}

export interface IPersonSocial{
  icon: any
  path: string
}