export default interface ProductsProps{
    id:number | string;
    name: string;
    desc:string;
    category:string;
    price:number;
    inStock: true | false;
    rating: number ;
    image: string;
}