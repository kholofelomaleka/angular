import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList: string[] = ["Cape Town", "Durban", "Johannesburg", "Pretoria", "Port Elizabeth"];

  employeeArray: any[] = [
    { empID: "000", name: "John Doe", age: 30, city: "Cape Town", position: "Software Engineer", contactNo: "012-456-7890" },
    { empID: "001", name: "Jane Smith", age: 25, city: "Durban", position: "Project Manager", contactNo: "011-654-3210" },
    { empID: "002", name: "Alice Johnson", age: 28, city: "Johannesburg", position: "UX Designer", contactNo: "013-555-5555" },
    { empID: "003", name: "Bob Brown", age: 35, city: "Pretoria", position: "Data Scientist", contactNo: "072-222-3333" },
    { empID: "004", name: "Charlie White", age: 40, city: "Port Elizabeth", position: "DevOps Engineer", contactNo: "083-444-5555"},
    { empID: "005", name: "Diana Green", age: 32, city: "Cape Town", position: "QA Engineer", contactNo: "021-777-8888" },
    { empID: "006", name: "Ethan Black", age: 29, city: "Durban", position: "Business Analyst", contactNo: "031-999-0000" },
    { empID: "007", name: "Fiona Blue", age: 27, city: "Johannesburg", position: "Frontend Developer", contactNo: "041-111-2222" },
    { empID: "008", name: "George Yellow", age: 38, city: "Pretoria", position: "Backend Developer", contactNo: "051-333-4444" },
    { empID: "009", name: "Hannah Purple", age: 31, city: "Port Elizabeth", position: "System Administrator", contactNo: "061-555-6666" }
  ];

}
