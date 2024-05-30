import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../shared/services/data.service';
import { CollectionListComponent } from '../../../shared/components/collection-list/collection-list.component';

@Component({
  standalone: true,
  selector: 'app-collection-management',
  templateUrl: './collection-management.component.html',
  styleUrls: ['./collection-management.component.scss'],
  imports: [CommonModule, CollectionListComponent]
})
export class CollectionManagementComponent implements OnInit {
  collections: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCollections().subscribe(data => {
      this.collections = data;
    });
  }
}
