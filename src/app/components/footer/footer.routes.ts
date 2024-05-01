import { Routes } from '@angular/router';
import { ClubComponent } from './club/club.component';
import { EquiposComponent } from './equipos/equipos.component';
import { FefaComponent } from './fefa/fefa.component';

export const routes: Routes = [
    // path del footer
    { path: 'club', component: ClubComponent },
    { path: 'equipos', component: EquiposComponent },
    { path: 'fefa', component: FefaComponent },

    // Otras Rutas si es necesario
    // { path: '', redirectTo: '/club', pathMatch: 'full' }
    // Otras Rutas si es necesario (Normalmente rutas de errores)
];
