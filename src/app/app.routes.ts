import {Routes} from '@angular/router';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {ExternalLayoutComponent} from '../components/layouts/external-layout/external-layout.component';
import {InternalLayoutComponent} from '../components/layouts/internal-layout/internal-layout.component';
import {LoginComponent} from '../pages/login/login.component';
import {AuthGuard} from 'src/guards/auth.guard';
import {OsFormComponent} from '@pages/os/os-form/os-form.component';
import {MecanicoFormComponent} from '@pages/mecanico/mecanico-form/mecanico-form.component';
import {OsComponent} from '@pages/os/os.component';
import {ServicoComponent} from '@pages/servico/servico.component';
import {MecanicoComponent} from '@pages/mecanico/mecanico.component';
import {ClienteComponent} from '@pages/cliente/cliente.component';
import {ClienteFormComponent} from '@pages/cliente/cliente-form/cliente-form.component';

export const routes: Routes = [
  {
    path: '',
    component: ExternalLayoutComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      // { path: 'esqueci-senha', component: EsqueciSenhaComponent }
    ]
  },

  // Área interna (dashboard)
  {
    path: 'app',
    component: InternalLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {
        path: 'os', children: [
          {path: 'new', component: OsFormComponent},
          {path: 'list', component: OsComponent},
        ]
      },
      {
        path: 'cliente', children: [
          {path: 'list', component: ClienteComponent},
          {path: 'form', component: ClienteFormComponent},
        ]
      }, {
        path: 'servico', children: [
          {path: 'list', component: ServicoComponent},
        ]
      }, {
        path: 'mecanico', children: [
          {path: 'new', component: MecanicoFormComponent},
          {path: 'list', component: MecanicoComponent},
        ]
      }
    ]
  },
];
