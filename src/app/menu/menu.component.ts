import { Component, Input,} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getMenuClass(): string {

    let styleClass = '';

    if ( this.collapsed && this.screenWidth > 768) {
      styleClass = 'menu-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'menu-my-screen'
    }
    return styleClass;
  }

}

