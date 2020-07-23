import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'content', component: ContentComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
