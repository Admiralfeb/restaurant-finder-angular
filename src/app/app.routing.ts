import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInputComponent } from './components/user-input/user-input.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  { path: 'input', component: UserInputComponent },
  { path: 'find', component: MapComponent },
  { path: '', redirectTo: 'input', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
