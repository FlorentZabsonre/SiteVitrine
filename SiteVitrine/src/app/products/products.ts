export class Products{
   id! : number;
   productName : string;  
   picture : string;
   price : number;
    constructor(productName: string, picture: string, price: number) {
        this.productName = productName;
        this.picture = picture;
        this.price = price;
    }
}