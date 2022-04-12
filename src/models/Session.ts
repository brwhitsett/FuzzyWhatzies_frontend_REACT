export default interface Session {
  uid: string;
  displayName: string;
  difficulty: string;
  speed: string;
  correct: number;
  incorrect: number;
  total: number;
  _id?: string;
}
