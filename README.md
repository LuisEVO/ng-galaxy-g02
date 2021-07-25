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


