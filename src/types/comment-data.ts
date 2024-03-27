export type CommentData = {
  id: string;
  date: string;
  user: {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  };
  comment: string;
  rating: number;
};
