import { Deserializable } from "./deserializable.model";
import { SubCategory } from "./subcategory";

export class Product implements Deserializable{
    _id:number;
    name:String;
    price:Number;
    dateOfEntry:String;
    dateOfSale:String;
    currencyCode:String;
    state:String;
    quantity:String;
    id_subcat:SubCategory

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}