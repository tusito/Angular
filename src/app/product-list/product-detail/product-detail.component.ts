import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product :  IProduct;

  constructor(private route: ActivatedRoute, 
              private router: Router){
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    let id=+this.route.snapshot.paramMap.get('id');
    this.pageTitle+=`: ${id}`;
    this.product = {
      'productId': id,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-001',
      'releaseDate': 'March 19, 2-16',
      'description': "Leaf rake with 48-inch wooden handle.",
      'price': 10.95,
      'starRating': 3.2,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    }
  }

  OnBack(){
    this.router.navigate(['/products']);
  }
}
