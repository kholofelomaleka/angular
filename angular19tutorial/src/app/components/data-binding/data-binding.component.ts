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
  rowNo: number = 121;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceholder: string = "Enter your full name";
  div1ClassName: string = "bg-primary"; // bg-primary is a Bootstrap class, it sets the background color to primary.
  selectedCity: string = "";

  // Optional constructor
  constructor() {

    console.log(this.firstName);
    console.log(this.rowNo);
    console.log(this.isActive);
    console.log(this.currentDate);
  
    this.isActive = false; // Change the value of isActive
    console.log(this.isActive); // Log the updated value
    //this.showWelcomeMessage(); // Call the method to show welcome message

  }
  // Method / Function to show a welcome message
  showWelcomeMessage(){
    alert("Welcome to Angular 19 Tutorial!");
  }
  // Method / Function to handle the click event
  onCityChange() {
    // console.log("City changed!");
    alert("City changed to: " + this.selectedCity);
  }
}
