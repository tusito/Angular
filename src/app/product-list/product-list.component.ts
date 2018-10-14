import { Component, OnInit  } from '@angular/core';
import { IProduct } from './iproduct';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List!";
  imageWidth: number=50;
  imageMargin: number =2;
  showImage: boolean=true;
  products: IProduct[]=[];
  filteredProducts: IProduct[];
  errorMessage: string;
  
  
  constructor(private productService: ProductService) {
    // this.listFilter="cart";
  }
  
  performFilter(filterBy: string): IProduct[] {
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct)=>
    product.productName.toLocaleLowerCase().indexOf(filterBy) != -1
    )
  }
  
  public get listFilter(): string {
    return this._listFilter;
  }
  
  private _listFilter: string;
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts=
    this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  
  toggleImage(): void {
    this.showImage=!this.showImage;
  }
  
  ngOnInit(): void {
    // this.products=
    this.productService.getProducts().subscribe(
      products=> {
        this.products=products;
        this.filteredProducts=this.products;
      },
      error=>this.errorMessage=<any> error
    );
    // console.log("In OnInit");
    //  throw new Error("Method not implemented.");
  }
  
}
