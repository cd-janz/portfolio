export default interface IApp {
  title: string;
  nav: IAppNavigation[]
}
export interface IAppNavigation{
  label: string;
  path: string;
}