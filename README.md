# PokeApi - Prueba técnica

Para esta prueba técnica se utilizó como herramienta:

-Angular 16
-TailwindCSS
-Angular Material

La decisión de usar Angular Material es por la optimización de tiempo, ya que provee varios componentes estilizados y de uso frecuente.

En la tabla principal de busqueda y el tablero resúmen se implementó el patrón de diseño Lazy loading para la carga y optimización de memoria eficiente.

Si bien en las instrucciones de la prueba técnica sólo daba a entender almacenar todos los datos en memoria y luego mostrarlos en pantalla en una tabla con paginación,
preferí que las cargas de datos sean fragmentadas y de manera Lazy, para que sólo se carguen a la memoría cuando sea necesario.

Sin embargo, la instrucción de la tabla de resúmen por alfabeto estaba un poco en contra de esa filosofía. Así que opté por no cargar esos datos hasta que se navegara a la ruta correspondiente "/resume". De esta manera al iniciar la aplicación no se cargarán los cientos de datos que requiere el módulo tabla resúmen.

# Instrucciones para inicializar en servidor local

- Clonar el Repositorio:
  git clone <URL_del_repositorio>

- Instalar Dependencias:
  cd <nombre_del_directorio_clonado>
  npm install

- Iniciar el Servidor Local:
  ng serve
  La aplicación estará disponible en http://localhost:4200/. Puedes acceder a ella a través del navegador.
