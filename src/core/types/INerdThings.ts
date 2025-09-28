export default interface INerdThings {
  hobbies: string[];
  music: IMusicGenre[];
}
export interface IMusicGenre{
  name: string;
  preference: number /* 1 - 5 */
}