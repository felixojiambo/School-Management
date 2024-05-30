import { Routes } from '@angular/router';
import { OverviewComponent } from './features/dashboard/overview/overview.component';
import { SchoolListComponent } from './features/schools/school-list/school-list.component';

const routes: Routes = [
  { path: 'dashboard', component: OverviewComponent },
  { path: 'schools', component: SchoolListComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
