import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  collectionsCount: number;
  signupsCount: number;
  totalRevenue: number;
  bouncedChequesCount: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDashboardData().subscribe(data => {
      this.collectionsCount = data.collections;
      this.signupsCount = data.signups;
      this.totalRevenue = data.revenue;
      this.bouncedChequesCount = data.bouncedCheques;
    });
  }
}
