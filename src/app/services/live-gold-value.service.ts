import { Injectable  } from '@angular/core';

@Injectable({providedIn:'root'})
export class LiveGoldValueService{
    public currentGoldValue: number = 0;
    public init(){}

    // var myHeaders = new Headers();
    // myHeaders.append("x-access-token", "goldapi-vah9ykdbrh8f2-io");
    // myHeaders.append("Content-Type", "application/json");

    // var requestOptions = {
    // method: 'GET',
    // headers: myHeaders,
    // redirect: 'follow'
    // };

    // fetch("https://www.goldapi.io/api/XAU/INR", requestOptions)
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
}