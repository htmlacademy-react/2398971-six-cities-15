export type OfferCity = {
  name: string;
  location: OfferLocation;
};

export type Cities = {
  id: string;
  name: string;
  location: OfferLocation;
};

export type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type PreviewImage = {
  previewImage: string;
}

export type User = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
}

export type NewComment = {
  comment: string;
  rating: number;
  };

export type Comment = {
id: string;
comment: string;
date: string;
rating: number;
user: User;
};

export type Comments = Comment[];

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: OfferCity;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type OfferList = PreviewImage & Offer;

export type OffersList = OfferList[];

export type CurrentOffer = Offer & {
  description: string;
  images: string[];
  goods: string[];
  host: User;
  bedrooms: number;
  maxAdults: number;
};

export type Sorting = {
  id: string;
  name: string;
};

