import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarGraphComponent } from '../../../shared/components/bar-graph/bar-graph.component';

@Component({
  standalone: true,
  selector: 'app-signups-overview',
  templateUrl: './signups-overview.component.html',
  styleUrls: ['./signups-overview.component.scss'],
  imports: [CommonModule, BarGraphComponent]
})
export class SignupsOverviewComponent implements OnInit {
  signups = [
    { title: 'Primary Schools', data: [10, 20, 30] }, // Example data
    { title: 'Secondary Schools', data: [15, 25, 35] }, // Example data
    { title: 'IGCSE Schools', data: [5, 10, 15] } // Example data
  ];

  constructor() { }

  ngOnInit(): void {
    // Fetch data from a service or API
  }
}
