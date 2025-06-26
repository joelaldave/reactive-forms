# Angular Reactive Forms Example

Este proyecto es una demostración de formularios reactivos en Angular, incluyendo validaciones síncronas y asíncronas, integración con TailwindCSS y buenas prácticas de organización de código.

## Características

- Formularios reactivos con Angular (`@angular/forms`)
- Validaciones síncronas y asíncronas (simulación de validación de email contra backend)
- Selects anidados (marca y modelo de vehículo) con carga dinámica y feedback visual
- Estilos modernos con TailwindCSS y soporte para modo oscuro
- Componentes reutilizables y código organizado
- Ejemplo de integración de servicios y validadores personalizados

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/angular-reactive-forms.git
   cd angular-reactive-forms
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta la aplicación:
   ```bash
   ng serve
   ```
   Luego abre [http://localhost:4200](http://localhost:4200) en tu navegador.

## Estructura principal

- `src/app/features/validations-form/pages/form-example/`: Página principal del formulario reactivo con validación de email.
- `src/app/features/validations-form/pages/form-example2/`: Formulario con selects anidados de marca y modelo de vehículo.
- `src/app/features/validations-form/services/`: Servicios para validaciones asíncronas y obtención de datos.
- `src/app/features/validations-form/utils/`: Validadores personalizados y utilidades.
- `src/styles.css`: Estilos globales y configuración de TailwindCSS.

## Personalización

- Puedes modificar los validadores en `utils` o los servicios para conectar con tu backend real.
- Los estilos pueden adaptarse fácilmente gracias a TailwindCSS.
- El formulario de vehículos (`form-example2`) puede adaptarse a cualquier relación anidada de selects.

¡Contribuciones y sugerencias son bienvenidas!