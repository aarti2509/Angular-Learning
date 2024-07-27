import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DemoComponent } from './demo/demo.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learningApp';


  users:any[] =[
    {name:'Aarti', city:'Bangalore',dob:"2001-09-28T10:47:25.643Z"},
    {name:'Dhanu', city:'Pune',dob:"1999-09-28T10:47:25.643Z"},
    {name:'Nikita', city:'Mumbai',dob:"2002-09-28T10:47:25.643Z"},
    {name:'Kamini', city:'Baramati',dob:"1998-09-28T10:47:25.643Z"},
  ]

  constructor(private dialog:MatDialog){}

   ngOnInit(){

   }

  openDialog(){
    const dialogRef = this.dialog.open(DemoComponent, {
      //data: {name: this.name, animal: this.animal},
    });
  }
}
