import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InvoiceListComponent } from '../../../shared/components/invoice-list/invoice-list.component';
import { CollectionListComponent } from '../../../shared/components/collection-list/collection-list.component';

@Component({
  standalone: true,
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.scss'],
  imports: [CommonModule, InvoiceListComponent, CollectionListComponent]
})
export class SchoolDetailComponent implements OnInit {
  school: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const schoolId = this.route.snapshot.paramMap.get('id');
    // Fetch school data by ID from a service or API
    this.school = {
      id: schoolId,
      name: 'School A',
      address: 'Address A',
      balance: 5000,
      invoices: [
        { id: 1, amount: 1000, dueDate: '2024-06-01' },
        { id: 2, amount: 1500, dueDate: '2024-06-05' }
      ],
      collections: [
        { id: 1, amount: 500, date: '2024-05-01' },
        { id: 2, amount: 800, date: '2024-05-15' }
      ]
    };
  }
}
