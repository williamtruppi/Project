import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sectionChoosed: string = 'recipe';

  showSection(section: string) {
    console.log(section);
    this.sectionChoosed = section;
  }

}
