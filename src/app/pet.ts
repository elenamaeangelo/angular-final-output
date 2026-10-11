export interface Pet {
  id: number;
  name: string;
  type: 'Dog' | 'Cat';
  breed: string;
  age: string;
  sex: string;
  size: string;
  location: string;
  image: string;
  description: string;
  traits: string[];
  adopted: boolean;
}
