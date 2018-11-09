import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaSenderComponent } from '../meta/meta-sender/meta-sender.component';
import { DisplayStatusComponent } from '../shared/display-status/display-status.component';

const appRoutes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home',
    },
    {
      path: 'home',
      component: DisplayStatusComponent
    }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        // { enableTracing: true }
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutesModule {}
