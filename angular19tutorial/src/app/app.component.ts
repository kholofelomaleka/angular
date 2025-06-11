import { Component } from '@angular/core';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
// Uncomment the following line if you want to use RouterOutlet for routing
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [AdminComponent, UserComponent, DataBindingComponent, NgIfComponent, NgForComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular19tutorial';
}
