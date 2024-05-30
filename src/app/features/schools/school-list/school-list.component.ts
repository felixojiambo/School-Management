import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss'],
  imports: [CommonModule, RouterModule]
})
export class SchoolListComponent implements OnInit {
  schools = [
    { id: 1, name: 'School A', address: 'Address A' },
    { id: 2, name: 'School B', address: 'Address B' },
    { id: 3, name: 'School C', address: 'Address C' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Fetch data from a service or API
  }
}
