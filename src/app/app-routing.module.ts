import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { QuotesComponent } from './quotes/quotes.component';
import { UserResolverService } from './user-list/user-resolver.service';

const routes: Routes = [
{
  path: 'user-list', component: UserListComponent, resolve:{users: UserResolverService}
},
{
  path: 'quotes', component: QuotesComponent
},
{
  path: '', pathMatch: 'full', redirectTo: 'user-list'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
