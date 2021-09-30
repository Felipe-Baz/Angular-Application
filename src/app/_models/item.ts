import { Category } from "./category";

export class Item{
  public name!: string;
  public complete!: boolean;
  public description!: string;
  public endDate!: Date;
  public startDate!: Date;
  public category!: Category;
  public guid!: string;
}
