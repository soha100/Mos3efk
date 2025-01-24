import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CommentsPageComponent } from './comments-page/comments-page.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'comments', component: CommentsPageComponent },
  { path: 'appointment', component: AppointmentPageComponent },
  { path: 'doctor-profile', component: DoctorProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
