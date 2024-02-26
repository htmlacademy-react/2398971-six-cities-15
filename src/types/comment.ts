export type User = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
}

export type Comments = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: User;
};
