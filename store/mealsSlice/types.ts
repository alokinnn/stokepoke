export type InitialState = {
  bowls: Bowl[];
};

export type Bowl = {
  id: number;
  name: string;
  description: string;
  image?: object;
  imagePath: string;
};
