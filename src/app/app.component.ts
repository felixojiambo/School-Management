import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SideNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zeraki-dashboard';
}
