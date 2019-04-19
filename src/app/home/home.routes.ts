import { Route } from '@angular/router';
import { HomeComponent } from './home.component';

export const HomeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: 'app/home/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'settings',
        loadChildren: 'app/home/settings/settings.module#SettingsModule'
      },
      {
        path: 'products',
        loadChildren: 'app/home/products/products.module#ProductsModule'
      },
      {
        path: 'user/:username',
        loadChildren: 'app/home/user/user.module#UserModule'
      }
    ]
  }
];
