import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list-view',
  templateUrl: './employee-list-view.component.html',
  styleUrls: ['./employee-list-view.component.css']
})
export class EmployeeListViewComponent {

  employeeData = [
    {
      eid: 1,
      name: "Aarti",
      gender:"female",
      dtOfJoin:"05/05/2024",
      salary : 5000
    },
    {
      eid: 2,
      name: "Kamini",
      gender:"female",
      dtOfJoin:"06/05/2024",
      salary : 6000
    },
    {
      eid: 1,
      name: "Nikita",
      gender:"female",
      dtOfJoin:"10/05/2024",
      salary : 10000
    } 
  ]

  ngOnInit(){
    console.log(this.employeeData);
  }
}
