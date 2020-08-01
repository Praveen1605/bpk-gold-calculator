import { Injectable  } from '@angular/core';
import { Subject } from 'rxjs';
import { IYearPrice, IRangePercentage } from '../model/year-price.model';
import { element } from 'protractor';
import { SelectItem } from 'primeng/api';

@Injectable({providedIn:'root'})
export class PriceListService{
    public priceListing: Array<IYearPrice> = Object.assign([]);
    public yearPercentage: Array<IRangePercentage> = Object.assign([]);
    public yearDifferenceDropdown: Array<SelectItem> = Object.assign([]);
    public totalYearsCount: number = 0;
    public averagePercentageIncreased: number = 0;
    public init(){
        this.priceListing.push({
            year: 1964,
            price: 63.25
        });
        this.priceListing.push({
            year: 1965,
            price: 71.75
        });
        this.priceListing.push({
            year: 1966,
            price: 83.75
        });
        this.priceListing.push({
            year: 1967,
            price: 102.50
        });
        this.priceListing.push({
            year: 1968,
            price: 162.00
        });
        this.priceListing.push({
            year: 1969,
            price: 176.00
        });
        this.priceListing.push({
            year: 1970,
            price: 184.00
        });
        this.priceListing.push({
            year: 1971,
            price: 193.00
        });

        this.priceListing.push({
            year: 1972,
            price: 202.00
        });
        this.priceListing.push({
            year: 1973,
            price: 278.50
        });
        this.priceListing.push({
            year: 1974,
            price: 506.00
        });
        this.priceListing.push({
            year: 1975,
            price: 540.00
        });this.priceListing.push({
            year: 1976,
            price: 432.00
        });
        this.priceListing.push({
            year: 1977,
            price: 486.00
        });
        this.priceListing.push({
            year: 1978,
            price: 685.00
        });
        this.priceListing.push({
            year: 1979,
            price: 937.00
        });
        this.priceListing.push({
            year: 1980,
            price: 1330.00
        });
        this.priceListing.push({
            year: 1981,
            price: 1800.00
        });
        this.priceListing.push({
            year: 1982,
            price: 1645.00
        });
        this.priceListing.push({
            year: 1983,
            price: 1800.00
        });
        this.priceListing.push({
            year: 1984,
            price: 1970.00
        });
        this.priceListing.push({
            year: 1985,
            price: 2130.00
        });
        this.priceListing.push({
            year: 1986,
            price: 2140.00
        });
        this.priceListing.push({
            year: 1987,
            price: 2570.00
        });
        this.priceListing.push({
            year: 1988,
            price: 3130.00
        });
        this.priceListing.push({
            year: 1989,
            price: 3140.00
        });
        this.priceListing.push({
            year: 1990,
            price: 3200.00
        });
        this.priceListing.push({
            year: 1991,
            price: 3466.00
        });
        this.priceListing.push({
            year: 1992,
            price: 4334.00
        });
        this.priceListing.push({
            year: 1993,
            price: 4140.00
        });
        this.priceListing.push({
            year: 1994,
            price: 4598.00
        });
        this.priceListing.push({
            year: 1995,
            price: 4680.00
        });
        this.priceListing.push({
            year: 1996,
            price: 5160.00
        });
        this.priceListing.push({
            year: 1997,
            price: 4725.00
        });
        this.priceListing.push({
            year: 1998,
            price: 4045.00
        });
        this.priceListing.push({
            year: 1999,
            price: 4234.00
        });
        this.priceListing.push({
            year: 2000,
            price: 4400.00
        });
        this.priceListing.push({
            year: 2001,
            price: 4300.00
        });
        this.priceListing.push({
            year: 2002,
            price: 4990.00
        });
        this.priceListing.push({
            year: 2003,
            price: 5600.00
        });
        this.priceListing.push({
            year: 2004,
            price: 5850.00
        });
        this.priceListing.push({
            year: 2005,
            price: 7000.00
        });
        this.priceListing.push({
            year: 2006,
            price: 8400.00
        });
        this.priceListing.push({
            year: 2007,
            price: 10800.00
        });
        this.priceListing.push({
            year: 2008,
            price: 12500.00
        });
        this.priceListing.push({
            year: 2009,
            price: 14500.00
        });
        this.priceListing.push({
            year: 2010,
            price: 18500.00
        });
        this.priceListing.push({
            year: 2011,
            price: 26400.00
        }); this.priceListing.push({
            year: 2012,
            price: 31050.00
        });
        this.priceListing.push({
            year: 2013,
            price: 29600.00
        });
        this.priceListing.push({
            year: 2014,
            price: 28006.50
        });
        this.priceListing.push({
            year: 2015,
            price: 26343.50
        });
        this.priceListing.push({
            year: 2016,
            price: 28623.50
        });
        this.priceListing.push({
            year: 2017,
            price: 29667.50
        });
        this.priceListing.push({
            year: 2018,
            price: 31438.00
        });
        this.priceListing.push({
            year: 2019,
            price: 35220.00
        });
        //Gold price as of 1st August 2020
        this.priceListing.push({
            year: 2020,
            price: 55580.00
        });
        this.setYearDifferenceDropdown();
        this.yearPercentageCalculator(1);
        this.calculateAveragePercentageIncreased(1);
    }
    public yearPercentageCalculator(value:number){
        this.yearPercentage = Object.assign([]);
        if(this.priceListing && this.priceListing.length > 0 && value){
            this.totalYearsCount =  this.priceListing.length;
            for(let i = 0; i < this.totalYearsCount-1 && i+value< this.totalYearsCount; i++){
                const yearRange : string = this.priceListing[i].year + " - " + this.priceListing[(i+value)].year;
                const percentageChanged : number = (((this.priceListing[(i+value)].price/this.priceListing[i].price) * 100)-100);
                this.yearPercentage.push({
                    yearRange:yearRange,
                    percentageChanged:percentageChanged
                });
            }
        }
    }

    public calculateAveragePercentageIncreased(value:number){
        if(this.yearPercentage && this.yearPercentage.length > 0){
            let tempValue : number = 0;
            for(let i = 0; i < this.totalYearsCount-1 && i+value< this.totalYearsCount; i++){
                tempValue = tempValue + this.yearPercentage[i].percentageChanged;
            }
            this.averagePercentageIncreased = tempValue/(this.totalYearsCount-value);
        }
    }

    public setYearDifferenceDropdown(){
        this.yearDifferenceDropdown.push({
            label:"Difference by each year",
            value:1
        });
        this.yearDifferenceDropdown.push({
            label:"Difference between 2 year",
            value:2
        });
        this.yearDifferenceDropdown.push({
            label:"Difference between 5 year",
            value:5
        });
        this.yearDifferenceDropdown.push({
            label:"Difference between 8 year",
            value:8
        });
        this.yearDifferenceDropdown.push({
            label:"Difference between 10 year",
            value:10
        });
        
    }

    public rangeDropdownChanged(selectedYearRange:SelectItem){
        this.yearPercentageCalculator(selectedYearRange.value);
        this.calculateAveragePercentageIncreased(selectedYearRange.value);
        console.log("Praveen",selectedYearRange)
    }
}