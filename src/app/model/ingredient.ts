export class Ingredient {
  name: string;
  imageUrl: string;


  constructor(details: { name: string, imageUrl: string }) {
    this.name = details.name;
    this.imageUrl = details.imageUrl;
  }
}
