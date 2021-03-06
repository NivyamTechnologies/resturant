import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthServiceGuard} from './auth-service.guard'
import { AuthComponent } from './layout/auth/auth.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  {
    path : 'login',
    loadChildren : './theme/auth/login/login.module#LoginModule'
  },
  {
    path: '',
    component: AdminComponent,
    canActivateChild : [AuthServiceGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './theme/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'navigation',
        loadChildren: './theme/navigation/navigation.module#NavigationModule'
      },
      {
        path: 'widget',
        loadChildren: './theme/widget/widget.module#WidgetModule'
      },
      {
        path: 'basic',
        loadChildren: './theme/ui-elements/basic/basic.module#BasicModule'
      },
      {
        path: 'advance',
        loadChildren: './theme/ui-elements/advance/advance.module#AdvanceModule'
      },
      {
        path: 'animations',
        loadChildren: './theme/ui-elements/animation/animation.module#AnimationModule'
      },
      {
        path: 'forms',
        loadChildren: './theme/forms/forms.module#FormsModule'
      },
      {
        path: 'bootstrap-table',
        loadChildren: './theme/table/bootstrap-table/bootstrap-table.module#BootstrapTableModule'
      },
      {
        path: 'data-table',
        loadChildren: './theme/table/data-table/data-table.module#DataTableModule'
      },
      {
        path: 'maintenance/error',
        loadChildren: './theme/maintenance/error/error.module#ErrorModule'
      },
      {
        path: 'maintenance/coming-soon',
        loadChildren: './theme/maintenance/coming-soon/coming-soon.module#ComingSoonModule'
      },
      {
        path: 'user',
        loadChildren: './theme/user/user.module#UserModule'
      },
      {
        path: 'email',
        loadChildren: './theme/email/email.module#EmailModule'
      },
      {
        path: 'task',
        loadChildren: './theme/task/task.module#TaskModule'
      },
      {
        path: 'crm-contact',
        loadChildren: './theme/crm-contact/crm-contact.module#CrmContactModule'
      },
      {
        path: 'invoice',
        loadChildren: './theme/extension/invoice/invoice.module#InvoiceModule'
      },
      {
        path: 'file-upload-ui',
        loadChildren: './theme/extension/file-upload-ui/file-upload-ui.module#FileUploadUiModule'
      },
      {
        path: 'calendar',
        loadChildren: './theme/extension/event-calendar/event-calendar.module#EventCalendarModule'
      },
      {
        path: 'charts',
        loadChildren: './theme/chart/chart.module#ChartModule'
      },
      {
        path: 'map',
        loadChildren: './theme/map/map.module#MapModule'
      },
      {
        path: 'simple-page',
        loadChildren: './theme/simple-page/simple-page.module#SimplePageModule'
      },
      {
        path : 'list',
        loadChildren : './theme/masters/booklist/booklist.module#BooklistModule'
      },
      {
        path : 'listbrowser',
        loadChildren : './theme/browsers/list-browser/list-browser.module#ListBrowser'
      },
      {
        path : 'sale',
        loadChildren : './theme/masters/sale/sale.module#SaleModule'
      },
      {
        path : 'salebrowser',
        loadChildren : './theme/browsers/sale-browser/sale-browser.module#SaleBrowserModule'
      },
      {
        path : 'saleorder',
        loadChildren : './theme/masters/newsaleorder/newsaleorder.module#NewsaleorderModule'
      },
      {
        path : 'school',
        loadChildren : './theme/masters/school/school.module#SchoolModule'
      },
      {
        path : 'tableadd',
        loadChildren : './theme/masters/tableadd/tableadd.module#TableaddModule'
      },
      {
        path : 'tablebrowser',
        loadChildren : './theme/browsers/table-browser/table-browser.module#TableBrowserModule'
      },
      {
        path : 'schoolbrowser',
        loadChildren : './theme/browsers/school-browser/school-browser.module#SchoolBrowserModule'
      },
      {
        path: 'reports',
        loadChildren : './theme/reports/reports.module#ReportsModule'
      },
      {
        path : 'print',
        loadChildren : './theme/prints/prints.module#PrintsModule'
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './theme/auth/auth.module#AuthModule'
      },
      {
        path: 'email/email-template',
        loadChildren: './theme/email/email-template/email-template.module#EmailTemplateModule'
      },
      {
        path: 'maintenance/offline-ui',
        loadChildren: './theme/maintenance/offline-ui/offline-ui.module#OfflineUiModule'
      },
      {
        path: 'landing',
        loadChildren: './theme/landing/landing.module#LandingModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
