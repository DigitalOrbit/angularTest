import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InputPageComponent } from './pages/input-page/input-page.component';

export const appRoutes: Routes = [
    //   { path: 'hero/:id', component: HeroDetailComponent },
    //   { path: 'crisis-center', component: CrisisCenterComponent },
    //   {
    //     path: 'heroes',
    //     component: HeroListComponent,
    //     data: {
    //       title: 'Heroes List'
    //     }
    //   },
    { path: 'home', component: HomeComponent },
    { path: 'input', component: InputPageComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);