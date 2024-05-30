import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from '../../../shared/components/pie-chart/pie-chart.component';

@Component({
  standalone: true,
  selector: 'app-targets-visualization',
  templateUrl: './targets-visualization.component.html',
  styleUrls: ['./targets-visualization.component.scss'],
  imports: [CommonModule, PieChartComponent]
})
export class TargetsVisualizationComponent implements OnInit {
  targets = [
    { title: 'Zeraki Analytics', data: [70, 30] }, // Example data
    { title: 'Zeraki Finance', data: [50, 50] }, // Example data
    { title: 'Zeraki Timetable', data: [80, 20] } // Example data
  ];

  constructor() { }

  ngOnInit(): void {
    // Fetch data from a service or API
  }
}
