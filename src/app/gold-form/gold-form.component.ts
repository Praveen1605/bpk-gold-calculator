import { Component, OnInit } from '@angular/core';
import { PriceListService } from '../services/price-list.servie';
import { IYearPrice, IRangePercentage } from '../model/year-price.model';
import { SelectItem } from 'primeng/api';
@Component({
  selector: 'app-gold-form',
  templateUrl: './gold-form.component.html',
  styleUrls: ['./gold-form.component.scss']
})
export class GoldFormComponent implements OnInit {

  constructor(private priceListService:PriceListService) { }

  public index: number = -1;
  public selectedYearRange: SelectItem = Object.assign({});

  ngOnInit(): void {
    this.priceListService.init();
    this.selectedYearRange = this.yearDifferenceDropdown[0];
  }

  get priceList() : Array<IYearPrice>{
    return this.priceListService.priceListing;
  }

  get percentageList() : Array<IRangePercentage>{
    return this.priceListService.yearPercentage;
  }

  get averagePercentageIncreased(): number{
    if(this.priceListService.averagePercentageIncreased){
      return this.priceListService.averagePercentageIncreased;
    }
    return 0;
  }
  get yearDifferenceDropdown() : Array<SelectItem>{
    return this.priceListService.yearDifferenceDropdown;
  }
  public openPrev(){
    this.index = (this.index <= 0) ? 3 : this.index - 1;
  }


  public openNext(){
    this.index = (this.index === 3) ? 0 : this.index + 1;
  }

  public onValueChange(){
    this.priceListService.rangeDropdownChanged(this.selectedYearRange);
  }


  public getGramValue(price: number) : number{
    if(price){
      return price/10;
    }
    return 0;
  }

  public getPoundValue(price: number) : number{
    if(price){
      return (price/10)*8;
    }
    return 0;
  }

  // public openPrev(){
    
  // }

}
