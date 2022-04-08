export default interface Session {
  uid: string;
  name: string;
  difficulty: string;
  speed: number;
  correct: number;
  incorrect: number;
  total: number;
  _id?: string;
}
