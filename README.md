<<<<<<< HEAD
# AngularPp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
=======
🧩 Parte 1 – Propuesta Visual

- ¿Qué mejorarías de este flujo?

R: Lo que principalmente mejoraría del flujo seria simplificar este en general. Por ejemplo, cuando uno agrega un "ítem", no queda muy claro su funcionalidad o para 
qué sirve, da la sensación de que es algo separado, pero al final simplemente es para poder agregar un producto. Eso confunde un poco, es por eso que sería mejor unificarlo o
mostrarlo de una forma más directa, para que se entiende que lo que realmente se está haciendo es agregar un producto al presupuesto.

- ¿Cómo lo harías más claro, usable o eficiente?

R:Mejoraría los títulos para que se vean más claros y realmente reflejen lo que el usuario está haciendo o viendo. También cambiaría la forma en que se muestra la creación del presupuesto: la mantendría visible en un panel lateral, por sobre el chat, con un ancho mayor para aprovechar mejor el espacio.

Eliminaría íconos que no aportan mucho en ese contexto y permitiría agregar productos de forma más directa. Cambiaría algunos subtítulos por otros más comprensibles; por ejemplo, en lugar de “Total”, usaría algo como “Detalle de costos”, que es más claro. En vez de usar siempre botones azules, incorporaría botones verdes para distinguir acciones principales.

En la lista de productos, reemplazaría el mensaje que aparece al final de la tabla por un botón “Crear producto” ubicado arriba a la derecha, con un color azul más visible frente a los tonos grises de la tabla. Ese botón abriría un modal con las mismas características que mencioné antes.

Por último, al seleccionar un producto, se agregaría directamente a la vista de presupuesto y se mostraría el total de inmediato. A medida que se agregan más productos, el sistema iría sumando automáticamente los valores, para que el usuario vea en tiempo real el costo total.

También, cabe destacar que si se sube una imagen y luego quiere ser eliminada esta tendría una X en rojo para eliminar directamente.

LINK PROTOTIPO: https://www.figma.com/design/OcV2Ig4pRfUS25A1maPOSM/Test-Pr%C3%A1ctico-Front---ControlCar?node-id=0-1&m=dev&t=Ry6RoZW6iTZC33T7-1  

🧩 Parte 2 – Análisis Crítico

- ¿Qué errores visuales, de jerarquía o de experiencia puedes identificar en la imagen?

R: No se diferencian bien los tipos de mensajes (sistema, técnicos o cliente), lo que puede generar confusión. Además, faltan indicadores visuales que ayuden al usuario a entender el estado de los mensajes y las acciones disponibles, lo que afecta la claridad del flujo de comunicación dentro del chat.
No hay diferencia visual clara entre distintas secciones del chat (encabezado, cuerpo, mensajes), lo que afecta la comprensión visual general.
Si hay mensajes de distintos días (como se ve en la imagen), sería útil un divisor con la fecha para facilitar el seguimiento del tiempo.
Placeholder debería tener algo como "Escribe un mensaje..."


- ¿Qué funcionalidades o mejoras implementarías?
R:

1. Separar visualmente tipos de mensajes: Usar colores o etiquetas distintas para mensajes del sistema, técnicos y cliente.

2. Agregar nombres y roles visibles: Mostrar claramente quién escribe y si es técnico, administrador o cliente.

3. Mostrar fecha de los mensajes como separador: Incluir divisores tipo "Hoy", "Ayer", "16 de mayo" para mejorar la lectura temporal.

4. Campo de texto con Placeholder: Mostrar "Escribe un mensaje..."

5. Botón destacado para acciones principales: Por ejemplo, "Llamar al cliente" o "Cambiar estado" como botones grandes visibles.

6. Visualizar estado del mensaje: Agregar íconos de "enviado", "entregado", "visto" al lado de cada mensaje.

7. Agregar opción para marcar mensajes importantes: Por ejemplo, marcar como "destacado" o "relevante para el taller".




>>>>>>> 7f1efd2e7d1cd7733add2b9962cf395ff0c88c34
