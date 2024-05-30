# School Management Dashboard

A comprehensive School Management Dashboard built with Angular 17 using standalone components. This dashboard provides an overview of collections, sign-ups, total revenue, and bounced cheques, and includes modules for managing school details, invoices, and collections.

## Features

- Dashboard Overview: Visualize key metrics such as collections, sign-ups, total revenue, and bounced cheques.
- School Management: Manage school details, invoices, and collections.
- Responsive design with a modern UI.

## Project Structure

```
src/
├── app/
│   ├── features/
│   │   ├── dashboard/
│   │   │   └── overview/
│   │   │       ├── overview.component.html
│   │   │       ├── overview.component.scss
│   │   │       └── overview.component.ts
│   │   ├── schools/
│   │       ├── collection-management/
│   │       │   ├── collection-management.component.html
│   │       │   ├── collection-management.component.scss
│   │       │   └── collection-management.component.ts
│   │       ├── invoice-management/
│   │       │   ├── invoice-management.component.html
│   │       │   ├── invoice-management.component.scss
│   │       │   └── invoice-management.component.ts
│   │       └── school-detail/
│   │           ├── school-detail.component.html
│   │           ├── school-detail.component.scss
│   │           └── school-detail.component.ts
│   ├── shared/
│   │   ├── components/
│   │   │   ├── collection-list/
│   │   │   │   ├── collection-list.component.html
│   │   │   │   ├── collection-list.component.scss
│   │   │   │   └── collection-list.component.ts
│   │   │   ├── invoice-list/
│   │   │   │   ├── invoice-list.component.html
│   │   │   │   ├── invoice-list.component.scss
│   │   │   │   └── invoice-list.component.ts
│   │   │   ├── top-card/
│   │   │   │   ├── top-card.component.html
│   │   │   │   ├── top-card.component.scss
│   │   │   │   └── top-card.component.ts
│   │   ├── services/
│   │       └── data.service.ts
│   ├── app.component.html
│   ├── app.component.ts
│   ├── app.module.ts
│   └── app-routing.module.ts
```

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- Angular CLI (>= 17.x)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/school-management-dashboard.git
   cd school-management-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

1. **Start the development server:**
   ```bash
   ng serve
   ```

2. **Open your browser and navigate to:**
   ```
   http://localhost:4200
   ```

### Building the Application

1. **Build the project:**
   ```bash
   ng build
   ```

2. **The build artifacts will be stored in the `dist/` directory.**

### Project Details

#### Overview Component

The `OverviewComponent` provides a summary of key metrics. It uses `TopCardComponent` to display each metric.

- **Template:** `overview.component.html`
- **Styles:** `overview.component.scss`
- **Logic:** `overview.component.ts`

#### School Management

The School Management module handles the details, invoices, and collections for each school.

- **Collection Management:**
  - **Template:** `collection-management.component.html`
  - **Styles:** `collection-management.component.scss`
  - **Logic:** `collection-management.component.ts`
- **Invoice Management:**
  - **Template:** `invoice-management.component.html`
  - **Styles:** `invoice-management.component.scss`
  - **Logic:** `invoice-management.component.ts`
- **School Detail:**
  - **Template:** `school-detail.component.html`
  - **Styles:** `school-detail.component.scss`
  - **Logic:** `school-detail.component.ts`

### Services

The `DataService` handles API calls to fetch data for the dashboard.

- **Service:** `data.service.ts`

### Shared Components

Reusable components such as `CollectionListComponent`, `InvoiceListComponent`, and `TopCardComponent` are stored in the shared directory.

- **Collection List:**
  - **Template:** `collection-list.component.html`
  - **Styles:** `collection-list.component.scss`
  - **Logic:** `collection-list.component.ts`
- **Invoice List:**
  - **Template:** `invoice-list.component.html`
  - **Styles:** `invoice-list.component.scss`
  - **Logic:** `invoice-list.component.ts`
- **Top Card:**
  - **Template:** `top-card.component.html`
  - **Styles:** `top-card.component.scss`
  - **Logic:** `top-card.component.ts`

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Angular](https://angular.io/) - The web framework used
- [Bootstrap](https://getbootstrap.com/) - For the UI components

---

This README provides a comprehensive overview of the "School Management Dashboard" project, including setup instructions, project structure, and descriptions of key components and services.
