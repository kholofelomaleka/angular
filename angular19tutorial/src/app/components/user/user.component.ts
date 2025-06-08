import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  template: "<h2>User Component</h2>\n<p class='text-welcome'>This is a single file component.</p>",
  styles: ['.text-welcome { color: blue; }']
})
export class UserComponent {

}
