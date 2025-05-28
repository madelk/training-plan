export interface UserContext {
  user: { username?: string };
  updateUsername: (name: string) => void;
}
