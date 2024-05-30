import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListComponent } from '../../../shared/components/invoice-list/invoice-list.component';

@Component({
  standalone: true,
  selector: 'app-invoice-management',
  templateUrl: './invoice-management.component.html',
  styleUrls: ['./invoice-management.component.scss'],
  imports: [CommonModule, InvoiceListComponent]
})
export class InvoiceManagementComponent implements OnInit {
  invoices = [
    { id: 1, school: 'School A', amount: 1000, dueDate: '2024-06-01' },
    { id: 2, school: 'School B', amount: 1500, dueDate: '2024-06-05' },
    { id: 3, school: 'School C', amount: 2000, dueDate: '2024-06-10' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Fetch data from a service or API
  }
}
