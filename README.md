# Angular Reactive Forms Example

Este proyecto es una demostración de formularios reactivos en Angular, incluyendo validaciones síncronas y asíncronas, integración con TailwindCSS y buenas prácticas de organización de código.

## Características

- Formularios reactivos con Angular (`@angular/forms`)
- Validaciones síncronas y asíncronas (simulación de validación de email contra backend)
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

- `src/app/features/validations-form/pages/form-example/`: Página principal del formulario reactivo.
- `src/app/features/validations-form/services/`: Servicios para validaciones asíncronas.
- `src/app/features/validations-form/utils/`: Validadores personalizados y utilidades.
- `src/styles.css`: Estilos globales y configuración de TailwindCSS.

## Personalización

- Puedes modificar los validadores en `utils` o los servicios para conectar con tu backend real.
- Los estilos pueden adaptarse fácilmente gracias a TailwindCSS.


¡Contribuciones y sugerencias son bienvenidas!