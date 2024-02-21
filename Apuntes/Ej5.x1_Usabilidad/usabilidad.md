# Usabilidad web

- Don't make me think (Steve Krug)

Una propiedad que refleja el fácil funcionamiento de un sistema de información.

## Principios básicos

- Evitar la navegación lineal; es decir, tenemos que poder navegar siempre por cualquier sitio de la web.
- El usuario debe saber en todo momento donde está.
- Se tiene que facilitar la búsqueda de contenido.
- Lo más importante está arriba a la izquierda, y lo menos importante abajo a la derecha.
- Anteponer el ancho por delante de la profundidad (First width, then depth).
- Solo un `h1` por página. Los demás por orden, después de un `h1` va un `h2`, etc.

## Navegación: capacidad de moverse dentro de la web.

- Estructurales: webs del mismo sitio.
- Asociativos: contenidos dentro de la misma página (links de indices, links que lleven a un contenido dentro de la misma página).
- Embebidos: enlaces de webs externas.

Estructurales y asociativos --> sobreescriben la URL (se cargan dentro de la misma página).
Embebidos --> abren una nueva página a una web externa.

Diseño enlaces:
    - Textuales: resaltamos el color del texto normal.
    - No textual: remarcamos que el elemento (grafico, foto, video) es un enlace.

Menú: máximo 2 subniveles.

## Páginas

- Dar más importancia al contenido que a la estética.
- Scroll:
  - Páginas cortas (sin scroll o poco): página principal, páginas de navegación o acceso inmediato.
  - Páginas largas: facilite la lectura ininterrumpida (impresión).
  - Evitar siempre el scroll horizontal.
- Página principal:
  - Función: indicar al usuario donde está y la función de la web.
  - Información a mostrar: logo, nombre del sitio, introducción, enlaces a las páginas principales (menú), condiciones de acceso (cookies), barra de búsqueda, etc.

## Texto

- Minimizar la extensión del texto: eliminar introducciones innecesarias, no incluir información superflua.
- Emplear tablas y enumeraciones para organizar la información.
- No emplear vocabulario informal.
- Emplear colores de alto contraste con el fondo.
- Texto estático (sin movimiento ni parpadeo).
- Extensión: 60 cáracteres por línea.
- Tamaño:
  - xx-small:   9px
  - x-small:    10-11px
  - small:      13px
  - medium:     16px
  - large:      18px
  - x-large:    24px
  - xx-large:   32px
- Interlineado: 15-20% del tamaño de la fuente.
- No emplear de forma exagerada textos en mayúsculas.
- Texto justificado. En su defecto, alineado a la izquierda.

## Contenido

- Reducir el tiempo de carga al mínimo posible. (1-3s sería aceptable, más de 10s nunca).
- Evitar el uso de sonidos y locuciones innecesarias.
- Dar siempre el estado actual en procesos largos (pago, cuestionario, etc).
- Veracidad de los datos.
- Locale: fechas, días de la semana, unidades de medida, etc. en formato local (idiomas, sistema métrico, etc).
  - Formato fecha:
    - 2024-01-23 (no para el usuario)
    - 23/01/2023 (sí para el usuario)

## Formularios

- No dejar enviar información con formularios erroneos.
- Si hay un error, remarcar exactamente el campo que tiene el error.
- Autorrellenado de datos siempre que sea posible.

## Mensajes de error

Los mensaje de error tienen que ayudar al usuario a detectar y resolver el problema.   

Los mensajes de error debe ser específicos, constructivos, y en positivo.   

Ejemplo:  
    - El campo "nombre" debe estar informado. --> Correcto.
    - No deje el campo "nombre" vacío. --> Incorrecto. (Está en negativo.)
    - Corrija los errores. --> Incorrecto. (No específica.)
    - No tiene sentido que el campo "nombre" está vacío. --> Incorrecto. (Es destructivo.)

## En contexto de gestión...

- Poder hacer CRUD (Create, Read, Update, Delete).
- Listado donde cada elemento se pueda actualizar y eliminar. Arriba debe haber un botón para añadir.

### Regla Nº1 de Steve Krug --> No me hagas pensar.
### Regla Nº2 de Steve Krug --> ¿Cómo puedo saber si funciona?

## Medidas objetivas para medir la usabilidad

- Mapa de calor (heat map).
  - Miden la interactividad de un usuario en nuestra web.
    - Arriba a la izquierda es más importante que abajo a la derecha.
    - Fotos con personas tienen más audiencia.
    - Imagenes son más importantes que el texto.
    - F-shapped pattern: leemos la web en forma de F.
    - Los resumenes funcionan mejor que los artículos enteros.
    - Banner blindness: los banners del sidebar son ignorados.
- Ley de los 3 clicks: si el usuario no encuentra lo que quiere en 3 clicks, se va. Esto incrementa el bounce rate.
- Bounce rate (tasa de rebotes): gente que abre la página, no interactua, y se va. Se puede medir con Google Analytics.
- % de links rotos (debería ser 0).
- Disponibilidad de la web > 99%. (uptimerobot.com)
- Tiempo de permanencia en la página > 30s (Analytics).
- Número de errores de front end (si se aproxima a 0, mejor). (Stack Driver)

## Optimización

Mejorar la experiencia de usuario, normalmente a costa de algo. Ej: Disminuir la cálidad (fotos, videos, etc), cantidad de archivos (concatenando archivos), o la omisión (borrado parcial de archivos).   
