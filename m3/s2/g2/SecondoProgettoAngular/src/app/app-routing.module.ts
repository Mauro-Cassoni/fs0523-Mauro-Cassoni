import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostAttiviComponent } from './pages/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './pages/post-inattivi/post-inattivi.component';

const routes: Routes = [
{
  path: '',
  title: 'Home Page',
  component: HomeComponent
},
{
  path: 'post-attivi',
  title: 'Post attivi',
  component: PostAttiviComponent
},
{
  path: 'post-inattivi',
  title: 'Post inattivi',
  component: PostInattiviComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
