export default interface Session {
  uid: number;
  name: string;
  difficulty: string;
  speed: number;
  correct: number;
  incorrect: number;
  total: number;
  _id?: string;
}
