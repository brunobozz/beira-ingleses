import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFotosComponent } from './pages/page-fotos/page-fotos.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageItensComponent } from './pages/page-itens/page-itens.component';
import { PageRegrasComponent } from './pages/page-regras/page-regras.component';

const routes: Routes = [
  {
    path: 'home',
    component: PageHomeComponent,
  },
  {
    path: 'regras',
    component: PageRegrasComponent,
  },
  {
    path: 'itens',
    component: PageItensComponent,
  },
  {
    path: 'fotos',
    component: PageFotosComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
