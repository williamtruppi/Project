import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    @Output() sectionChoosed = new EventEmitter<string>();

    selectSection(section: string){
        /* console.log(section) */;
        this.sectionChoosed.emit(section);
    }

}