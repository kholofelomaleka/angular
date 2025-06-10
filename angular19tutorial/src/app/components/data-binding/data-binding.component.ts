import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  
  firstName: string = "John";
  lastName: string = "Dell";
  rollNo: number = 121;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceholder: string = "Enter your full name";
  div1ClassName: string = "bg-primary";
  selectedCity: string = "";

  // Optional constructor
  constructor() {

    console.log(this.firstName);
    console.log(this.rollNo);
    console.log(this.isActive);
    console.log(this.currentDate);
  
    this.isActive = false; // Change the value of isActive
    console.log(this.isActive); // Log the updated value
    //this.showWelcomeMessage(); // Call the method to show welcome message

  }

  showWelcomeMessage(){
    alert("Welcome to Angular 19 Tutorial!");
  }

  onCityChange() {
    console.log("City changed!");
  }
}
