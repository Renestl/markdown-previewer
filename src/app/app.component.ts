import { Component } from '@angular/core';

export class TextEntered {
  text: string;
}

@Component({
  selector: 'previewer',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Markdown Previewer';
  userInput: TextEntered = {
    text: "Testing it out"
  };

}
