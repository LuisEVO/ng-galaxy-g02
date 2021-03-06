## Comandos utilizados en clase

### Generar un espacio de trabajo

```
ng new <Nombre del espacio de trabajo> --create-application false
```


### Generar una aplicación

```
ng generate application <Nombre de la aplicación> --defaults

ng generate application <Nombre de la aplicación> --routing true --style scss

ng g app <Nombre de la aplicación> --defaults
```

### Ejecutar servidor de desarrollo de una aplicación

```
ng serve <Nombre de la aplicación>

ng serve <Nombre de la aplicación> --port <Numero de puerto>

ng serve <Nombre de la aplicación> -p <Numero de puerto>

ng serve --project <Nombre de la apliación>
```


### Generar un componente

```
ng generate component <Nombre del componente>

ng generate component <ruta>/<Nombre del componente>

ng generate component <ruta>/<Nombre del componente> --project <nombre del proyecto>

ng g c <Nombre del componente>
```

Generar un componente pagina y cambiarle la extensión para diferenciarlo (opcional):

`ng g c <Nombre del componente> --type <extensión> --skip-selector`

### Generar un pipe

```
ng generate pipe <Nombre del pipe>

ng g p <Nombre del pipe>
```

### Generar un modulo Lazy Loading

```
ng g m <Nombre del modulo> --routing true
ng g m <Ruta del module/Nombre del modulo> --routing true

ng g m <Ruta del module/Nombre del modulo> --routing true --project <nombre de la aplicación>
```

### Generar un guard

```
ng g guard <Nombre del guardian> --implements CanActivate
ng g guard <Ruta del module/Nombre del guardian> --implements CanActivateChild

ng g guard <Ruta del module/Nombre del guardian> --project <nombre de la aplicación>
```

### Generar un resolver

```
ng g resolver <Ruta del resolver/Nombre del resolver> --project <nombre de la aplicación>
```

### Generar un servicio

```
ng generate service <Nombre del servicio>
ng g s <Nombre del servicio>
```

### Generar un interceptor

```
ng generate interceptor <Nombre del interceptor>
ng g interceptor <Nombre del interceptor>
```

### Instalar dependencias con npm

```
npm install <nombre de la dependencia> --save

npm install <nombre de la dependencia> --save-dev

npm i <nombre de la dependencia> --save
npm i <nombre de la dependencia> -D

```

### Instalar bootstrap

```
npm install bootstrap --save

npm install bootstrap@<version> --save
```

Agregar esta linea de importación en el archivo styles.css de la aplicación

```
@import '~bootstrap/dist/css/bootstrap.min.css';
```

## Crear una libreria interna

Nota: Antes de crear la libreria debemos modificar en `angular.json`
la propiedad `"newProjectRoot": "libs"`

```
ng generate library <Nombre de la libreria> --prefix <prefijo>
ng g lib <Nombre de la libreria> --prefix <prefijo>
```

Modificar el path en el archivo `tsconfig.json`

```
"paths": {
  "ui-components": [
    "libs/<nombre de la libreria>/src/public-api.ts",
  ],
  "ui-components/*": [
    "libs/<nombre de la libreria>/src/lib/*",
  ],
}
```

## Añadir soporte para idioma español

Instalar Angular Localize

`ng add @angular/localize`

Modificar el `app.module.ts`

```
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
registerLocaleData(localEs);


providers: [
  {
    provide: LOCALE_ID,
    useValue: 'es'
  }
],

```


## Instalar mock

Instalar json server

`npm install --save-dev json-server`

Crear una carpeta en la ruta raiz `mock` y crear dentro un `db.json`

Agregar el siguiente script en el archivo `package.json`

```
"mock": "json-server mock/db.json --watch"
```

para ejecutar

```
npm run mock
```


## Testting

```
ng test
ng test <Nombre del proyecto>
ng test --code-coverage <Nombre del proyecto>
```