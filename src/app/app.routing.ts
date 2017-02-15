import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InputPageComponent } from './pages/input-page/input-page.component';
import { SelectPageComponent } from './pages/select-page/select-page.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'input', component: InputPageComponent },
    { path: 'select', component: SelectPageComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
