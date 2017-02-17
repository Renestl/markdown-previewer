import { Component } from '@angular/core';

@Component({
  selector: 'previewer',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Markdown Previewer';
  userInput = `Heading
  [Jennifer Currie](https://freecodecamp.com/renestl)
  `;

}
