import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/validations-form/validations-form.routes').then(m => m.validationsFormRoutes)
    }
];
