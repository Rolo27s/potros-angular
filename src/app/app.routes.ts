import { Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { VideosComponent } from './components/videos/videos.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { CampoComponent } from './components/campo/campo.component';
import { EntradasComponent } from './components/entradas/entradas.component';

// Imports de la parte legal (footer)
import { PoliticaPrivacidadComponent } from './components/footer/legal/politica-privacidad/politica-privacidad.component';
import { ContactoComponent } from './components/footer/legal/contacto/contacto.component';
import { AccesibilidadComponent } from './components/footer/legal/accesibilidad/accesibilidad.component';
import { MapaComponent } from './components/footer/legal/mapa/mapa.component';
import { AnunciosComponent } from './components/footer/legal/anuncios/anuncios.component';
import { PrivacidadComponent } from './components/footer/legal/privacidad/privacidad.component';

export const routes: Routes = [
    // path del header (nav)
    { path: 'main', component: MainComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'noticia/:id', component: NoticiasComponent },
    { path: 'videos', component: VideosComponent },
    { path: 'fotos', component: FotosComponent },
    { path: 'calendario', component: CalendarioComponent },
    { path: 'equipo', component: EquipoComponent },
    { path: 'campo', component: CampoComponent },
    { path: 'entradas', component: EntradasComponent },

    // rutas para la parte legal (footer)
    { path: 'politica-privacidad', component: PoliticaPrivacidadComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'accesibilidad', component: AccesibilidadComponent },
    { path: 'mapa', component: MapaComponent },
    { path: 'anuncios', component: AnunciosComponent },
    { path: 'privacidad', component: PrivacidadComponent },
    
    // Ruta de navegacion en caso de ruta vacia
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    // Redirige ruta no encontrada a ruta vacia
    { path: '**', redirectTo: ''},
];
