import { Routes } from '@angular/router';
import { FormExampleComponent } from './pages/form-example/form-example.component';
import { FormExample2Component } from './pages/form-example2/form-example2.component';

export const validationsFormRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'form-example',
                component: FormExampleComponent
            },
            {
                path: 'form-example-2',
                component:FormExample2Component
            },
        ]
    },
];