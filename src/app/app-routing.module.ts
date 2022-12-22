import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlpageComponent } from './controlpage/controlpage.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {
    path: "Home",
    component: HomepageComponent
  },
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "Control",
    component: ControlpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
