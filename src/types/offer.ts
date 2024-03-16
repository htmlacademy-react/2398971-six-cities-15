export type OfferCity = {
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

export type Comments = {
id: string;
comment: string;
date: string;
rating: number;
user: User;
};

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

export type OffersList = PreviewImage & Offer & {
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

export type CurrentOffer = Offer & {
  description: string;
  images: string[];
  goods: string[];
  host: User;
  bedrooms: number;
  maxAdults: number;
};

