import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {

  @Input() employeeDetails:any;

  ngOnInit(){
    console.log(this.employeeDetails);
  }

}
