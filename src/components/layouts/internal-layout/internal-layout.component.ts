import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TopbarComponent} from '../../topbar/topbar.component';
import {FooterComponent} from '../../footer/footer.component';
import {MenuComponent} from '../../menu/menu.component';
import {ScrollPanel} from 'primeng/scrollpanel';

@Component({
  selector: 'app-internal-layout',
  imports: [
    TopbarComponent,
    MenuComponent,
    RouterOutlet,
    FooterComponent,
    ScrollPanel
  ],
  templateUrl: './internal-layout.component.html',
  styleUrl: './internal-layout.component.scss'
})
export class InternalLayoutComponent {

}
