import {Routes} from '@angular/router';
import {GestaoComponent} from '../pages/gestao/gestao.component';
import {ExternalLayoutComponent} from '../components/layouts/external-layout/external-layout.component';
import {InternalLayoutComponent} from '../components/layouts/internal-layout/internal-layout.component';
import {LoginComponent} from '../pages/login/login.component';
import {AuthGuard} from 'src/guards/auth.guard';
import {OsRegisterComponent} from '@pages/os-register/os-register.component';
import {MecanicoRegisterComponent} from '@pages/mecanico-register/mecanico-register.component';
import {OsListComponent} from '@pages/os-list/os-list.component';
import {ServicoListComponent} from '@pages/servico-list/servico-list.component';
import {MecanicoListComponent} from '@pages/mecanico-list/mecanico-list.component';
import {ServicoRegisterComponent} from '@pages/servico-cadastro/servico-register.component';

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
      {path: '', redirectTo: 'gestao', pathMatch: 'full'},
      {path: 'gestao', component: GestaoComponent},
      {
        path: 'os', children: [
          {path: 'new', component: OsRegisterComponent},
          {path: 'list', component: OsListComponent},
        ]
      },
      {
        path: 'servico', children: [
          {path: 'new', component: ServicoRegisterComponent},
          {path: 'list', component: ServicoListComponent},
        ]
      }, {
        path: 'mecanico', children: [
          {path: 'new', component: MecanicoRegisterComponent},
          {path: 'list', component: MecanicoListComponent},
        ]
      }
    ]
  },
];
