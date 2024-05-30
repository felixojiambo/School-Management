import { Component } from '@angular/core';
import { TopCardComponent } from "../../../shared/components/top-card/top-card.component";

@Component({
    selector: 'app-overview',
    standalone: true,
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.css',
    imports: [TopCardComponent]
})
export class OverviewComponent {
  collectionsCount = 120; 
  signupsCount = 30; 
  totalRevenue = 15000; 
  bouncedChequesCount = 2; 
}
