export default interface IPerson {
  firstName: string;
  lastName: string;
  nickname: string;
  email: string;
  phoneNumber: string;
  position: string;
  location: string;
  phrase: string;
  social: IPersonSocial[]
}

export interface IPersonSocial{
  icon: any
  path: string
}