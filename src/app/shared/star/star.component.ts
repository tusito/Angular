import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  // ngOnChanges(changes: import("c:/temp/angulartest/node_modules/@angular/core/src/metadata/lifecycle_hooks").SimpleChanges): void {
  //   throw new Error("Method not implemented.");
  // }
  
  @Input() 
  rating: number;
  starWidth: number;

  constructor() { 
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5
  }

  ngOnInit() {
  }

}
