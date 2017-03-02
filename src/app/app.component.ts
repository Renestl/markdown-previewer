import { Component } from '@angular/core';

export class MarkdownComponent {

   text: string;

}

@Component({
  selector: 'previewer',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userInput: MarkdownComponent = {
    text: 'Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**,\n`monospace`,~~strikethrough~~ .\n\nShopping list:\n* apples\n* oranges\n* pears\n\nNumbered list:\n1. apples\n2. oranges\n3. pears\n\n*[Jennifer Currie](http://freecodecamp.com/renestl)*'
  };



}
