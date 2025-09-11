import {Routes} from '@angular/router';
import { GestaoComponent } from '../pages/gestao/gestao.component';
import { ExternalLayoutComponent } from '../components/layouts/external-layout/external-layout.component';
import { InternalLayoutComponent } from '../components/layouts/internal-layout/internal-layout.component';
import { LoginComponent } from '../pages/login/login.component';
import { AuthGuard } from '../guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: ExternalLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      // { path: 'nova-conta', component: NovaContaComponent },
      // { path: 'esqueci-senha', component: EsqueciSenhaComponent }
    ]
  },

  // Área interna (dashboard)
  {
    path: 'app',
    component: InternalLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'gestao', pathMatch: 'full' },
      { path: 'gestao', component: GestaoComponent },
      // { path: 'ordem-servico', component: OrdemServicoComponent }
    ]
  },
];
