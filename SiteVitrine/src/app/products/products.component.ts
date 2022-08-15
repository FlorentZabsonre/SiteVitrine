import { Text } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit
{

  constructor() { }

  ngOnInit(): void {
  }

  onClickEpice() : void
  {
    var r =null;
    console.log(r);
     r= document.getElementById('epice');
    console.log("ee");
    console.log(r?.id);
    //let tmp= r?.ATTRIBUTE_NODE;

    console.log("aaa");
  }
  onClickFarines() : void
  {
    var r =null;
    console.log(r);
     r= document.getElementById('farines');
    console.log("ee");
    console.log(r?.id);
  }

  onClickAutres() : void
  { var r =null;
    console.log(r);
     r= document.getElementById('autres');
    console.log("ee");
    console.log(r?.id);

  }
}
