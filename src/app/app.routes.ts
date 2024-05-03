import { Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { VideosComponent } from './components/videos/videos.component';
import { PodcastsComponent } from './components/podcasts/podcasts.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { CampoComponent } from './components/campo/campo.component';
import { ComunidadComponent } from './components/comunidad/comunidad.component';
import { SociosComponent } from './components/socios/socios.component';
import { EntradasComponent } from './components/entradas/entradas.component';
import { TiendaComponent } from './components/tienda/tienda.component';

export const routes: Routes = [
    // path del header (nav)
    { path: 'main', component: MainComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'videos', component: VideosComponent },
    { path: 'podcasts', component: PodcastsComponent },
    { path: 'fotos', component: FotosComponent },
    { path: 'calendario', component: CalendarioComponent },
    { path: 'equipo', component: EquipoComponent },
    { path: 'campo', component: CampoComponent },
    { path: 'comunidad', component: ComunidadComponent },
    { path: 'socios', component: SociosComponent },
    { path: 'entradas', component: EntradasComponent },
    { path: 'tienda', component: TiendaComponent },

    // Otras Rutas si es necesario
    { path: '', redirectTo: '/main', pathMatch: 'full' }
    // Otras Rutas si es necesario (Normalmente rutas de errores)
];
