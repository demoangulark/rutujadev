import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent  {
  constructor() {
    
   }

   saleData = [
    { name: "galaxy", value: 105000 },
    { name: "lodestar", value: 55000 },
    { name: "Milky Way", value: 15000 },
    { name: "solar flare", value: 150000 },
    { name: "supernova", value: 20000 }
  ];
 
}
