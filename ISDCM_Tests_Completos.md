# Tests de ISDCM - Internet, Seguridad y Distribución de Contenidos Multimedia

**Curso 2025-26 Q2**
**Máster en Ingeniería Informática (MEI)**

---

## Índice

1. [Estandarización](#1-estandarización)
2. [Ciclo de Vida](#2-ciclo-de-vida)
3. [Caracteres Unicode](#3-caracteres-unicode)
4. [Audio](#4-audio)
5. [Imágenes](#5-imágenes)
6. [Vídeo](#6-vídeo)
7. [Contenedores](#7-contenedores)
8. [Metadatos](#8-metadatos)
9. [Modelo OSI](#9-modelo-osi)
10. [MIME](#10-mime)
11. [URL](#11-url)
12. [HTTP](#12-http)
13. [XML](#13-xml)
14. [Servicios Web](#14-servicios-web)
15. [HTML5 y Streaming](#15-html5-y-streaming)
16. [DASH](#16-dash)
17. [Seguridad](#17-seguridad)

---

### 1. Estandarización

**Pregunta 1:** ISO es una SDO (Standards Development Organization), mientras que IEEE no lo es.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Ambas son SDOs.

**Pregunta 2:** ISO e IEEE son ejemplos de SDO (Standards Development Organization).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 3:** Grandes empresas como Samsung o Microsoft pueden ser miembros de ISO.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Los miembros de ISO son Organizaciones de Estándares de los países reconocidos por las Naciones Unidas ("National Bodies", 1 por país).

**Pregunta 4:** Es posible tener estándares que han sido desarrollados en un entorno cerrado pero que son gratuitos.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 5:** Nunca hay que pagar para obtener el texto de un estándar desarrollado abiertamente.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El hecho de que un estándar sea desarrollado abiertamente no impide que obtener su texto sea gratuito.

**Pregunta 6:** En el proceso de estandarización de ISO, la primera versión de un estándar para votación/comentarios es el CD (Committee Draft).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 7:** Un riesgo del proceso de votación en ISO es que muchos miembros podrían votar NO sin proporcionar comentarios.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. No está permitido votar NO sin proporcionar comentarios. De hecho, votar SÍ sin comentarios, lo cual está permitido, podría ser un riesgo.

**Pregunta 8:** Los estándares ISO son desarrollados en Grupos de Trabajo, donde expertos de diferentes organizaciones colaboran, pero los estándares son aprobados en un proceso de votación formal en el que cada National Body tiene un voto.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 9:** ISO es una SDO (Standards Development Organization), mientras que HL7 International no lo es.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Ambas son SDOs.

**Pregunta 10:** En el proceso de estandarización de ISO, el primer documento para votación es el WD (Working Draft).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso, es el CD (Committee Draft). Los WDs no se votan.

**Pregunta 11:** En los estándares desarrollados por W3C, IETF e ISO/IEC, la última versión de un estándar (conocida como la copia del Editor) es accesible públicamente en la Web.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Este no es el caso de ISO/IEC.

**Pregunta 12:** ISO, W3C e IETF son ejemplos de SDO (Standards Development Organization).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 13:** W3C (World Wide Web Consortium) no es una SDO (Standards Development Organization) porque sus miembros son empresas y organizaciones.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso.


---

### 2. Ciclo de Vida

**Pregunta 1:** Creación y Almacenamiento son los primeros pasos del ciclo de vida de los contenidos multimedia.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 2:** "Creation" y "Storage" son los primeros pasos del ciclo de vida de los contenidos multimedia.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.


---

### 3. Caracteres Unicode

**Pregunta 1:** Una Code Unit es un número único asignado a cada carácter Unicode.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Esto es un Code Point.

**Pregunta 2:** Un Code Point es un número único asignado a cada carácter Unicode.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 3:** UCS (Universal Character Set) es un estándar ISO, mientras que UNICODE no lo es.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 4:** En Unicode, un Glyph es una representación gráfica de un carácter.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 5:** En Unicode, un Glyph es una representación gráfica de un Code Point único.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Puede corresponder a varios Code Points.

**Pregunta 6:** En Unicode, un Glyph es una representación gráfica que puede corresponder a varios caracteres diferentes.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 7:** En Unicode, un Glyph es una representación gráfica que corresponde a un solo carácter.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Puede corresponder a varios caracteres.

**Pregunta 8:** Las Code Units para un UTF específico tienen una longitud fija.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 9:** Las Code Units en Unicode son de longitud fija, pero cada Code Point específico puede necesitar un número diferente de Code Units para su codificación.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 10:** UTF-8 y UTF-16 definen cómo codificar caracteres Unicode con 1 o 2 Code Units, respectivamente.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. En UTF-8 y UTF-16, las Code Units tienen 1 o 2 bytes, respectivamente.

**Pregunta 11:** Un carácter dado codificado en UTF-16 tiene el doble de bytes que el mismo carácter codificado en UTF-8.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. La unidad mínima para codificación (Code Unit) tiene el doble de bytes en UTF-16, pero el número de unidades mínimas necesarias para la codificación no es necesariamente el doble.

**Pregunta 12:** Si el Code Point de un carácter Unicode necesita 24 bits para codificarse en forma binaria, entonces necesitaremos más de 4 octetos si usamos UTF-8.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. 4 octetos es el máximo. No hay Code Points que necesiten más de 20 bits.

**Pregunta 13:** El carácter Unicode cuyo "Code Point" es 100 (en Decimal) necesita 2 "Code Units" al codificarse en "UTF-16".
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Necesita solo una code unit de 16 bits.

**Pregunta 14:** Un "Code Unit" es un número único asignado a cada carácter Unicode.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Esto es un Code Point.


---

### 4. Audio

**Pregunta 1:** El formato de audio MP3 está especificado en una parte de un estándar ISO/IEC.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. En un estándar MPEG, un Grupo de Trabajo de ISO/IEC.

**Pregunta 2:** Los formatos de audio de MPEG, como MP3 o AAC, se basan en PCM (Pulse Code Modulation).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. PCM es el formato básico para telefonía (orientado a voz).

**Pregunta 3:** AAC es un formato de audio de MPEG-2.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 4:** Advanced Audio Coding (AAC) y Vorbis son ejemplos de estándares "open-source" que compiten con MP3.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. AAC no es open-source y es una evolución de MP3.

**Pregunta 5:** Vorbis es un formato de audio open source.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.


---

### 5. Imágenes

**Pregunta 1:** CGM es un estándar ISO para gráficos vectoriales.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 2:** SVG (Scalable Vector Graphics) es un formato de gráficos vectoriales basado en XML.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 3:** CGM y SVG son ejemplos de formatos de gráficos vectoriales basados en XML.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. CGM no está basado en XML.

**Pregunta 4:** SVG (Scalable Vector Graphics) es un formato de gráficos basado en XML que permite varias resoluciones en las imágenes.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es para gráficos vectoriales, los cuales no tienen resolución.

**Pregunta 5:** CorelDRAW es un estándar para gráficos vectoriales, por lo que su tipo de contenido MIME es image.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es application, ya que es propietario.

**Pregunta 6:** WebP es un formato para imágenes en movimiento desarrollado por Google.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es para imágenes estáticas.

**Pregunta 7:** JFIF es el formato de intercambio de archivos para JPEG.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 8:** JFIF es un formato de intercambio de archivos válido para varias codificaciones, como JPEG, BMP o GIF.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Solo es para JPEG.

**Pregunta 9:** HEIF (High Efficiency Image File Format) es un formato de imagen que proviene de un estándar de vídeo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. Es el Formato de Archivo de Imagen de HEVC (High Efficiency Video Coding), es decir, MPEG-H parte 12.

**Pregunta 10:** JPEG es un formato de imágenes ráster del tipo "raw".
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es un formato de compresión.

**Pregunta 11:** .eps, .svg y .cgm son ejemplos de extensiones para formatos de imágenes vectoriales.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 12:** El formato de imágenes AVIF es el único caso en el que la representación de la imagen se basa en un mecanismo de compresión de vídeo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Hay otros. Es una tendencia actual.

**Pregunta 13:** Los formatos de gráficos vectoriales se basan en el uso de objetos geométricos para definir imágenes.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 14:** SVG (Scalable Vector Graphics) es un formato de gráficos basado en XML que permite diversas resoluciones en las imágenes.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es para gráficos vectoriales, los cuales no tienen resolución.

**Pregunta 15:** HEIF (High Efficiency Image File Format) es un formato de imagen basado en un estándar de vídeo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. Es el Image File Format de HEVC (High Efficiency Video Coding), es decir MPEG-H parte 12.


---

### 6. Vídeo

**Pregunta 1:** MPEG-4 AVC y H.264 están alineados, pero tienen algunas pequeñas diferencias técnicas.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Ambos son exactamente iguales (excepto el nombre), ya que han sido desarrollados por un comité conjunto de grupos de ISO/IEC e ITU-T.

**Pregunta 2:** MPEG-4 define dos mecanismos para compresión de vídeo (uno en su parte 2 y otro en la parte 10). Sin embargo, H.264 de ITU-T solo coincide con la parte 10.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 3:** HEVC mejora alrededor de 10 veces la eficiencia de AVC.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Solo 2 veces.

**Pregunta 4:** HEVC ha sido estandarizado por ISO/IEC como MPEG-H, y como H.265 por ITU-T.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 5:** VP8 y VP9 son formatos de compresión de vídeo diseñados para competir con H.264 y H.265, respectivamente.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 6:** AV1 es un estándar de contenido de vídeo libre de regalías de ISO.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. No es de ISO, sino desarrollado por la Alliance for Open Media.

**Pregunta 7:** AV1, desarrollado por la Alliance for Open Media, está sustituyendo a VP9 como formato de compresión de vídeo de código abierto.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 8:** SMIL es un estándar W3C basado en XML para describir presentaciones y animaciones multimedia.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 9:** VVC (Versatile Video Coding) tiene mayor compresión que HEVC (High Efficiency Video Coding).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 10:** VP8 es el formato de vídeo con el que Google compite con HEVC.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es VP9.

---

### 7. Contenedores

**Pregunta 1:** WAV es un conjunto de metadatos específico para audio.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es un contenedor de audio.

**Pregunta 2:** RIFF (Resource Interchange File Format) es un formato de contenedor genérico que ha sido la base para otros formatos, como AVI, WAV o WebP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 3:** WebM es un contenedor de vídeo y audio definido por Google.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 4:** Los contenedores (o formatos de archivo) pueden estructurar los recursos de vídeo en segmentos o "chunks".
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 5:** MP3, Matroska y PNG son tres formatos que permiten almacenar el mismo tipo de información.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. MP3 es un formato de audio, Matroska es un contenedor y PNG es para imágenes.

**Pregunta 6:** VOB es el formato para DVDs.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 7:** El formato de archivo base de medios ISO ha sido estandarizado por el comité MPEG de ISO/IEC.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 8:** El formato de archivo base de medios ISO está especializado en imágenes estáticas, aunque también puede usarse para vídeo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es válido para todos los formatos, aunque inicialmente fue desarrollado para vídeo.

**Pregunta 9:** El formato de archivo base de medios ISO solo permite almacenar contenido especificado con estándares MPEG.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es un formato genérico que permite almacenar cualquier tipo de contenido.

**Pregunta 10:** El formato de archivo base de medios ISO está basado en un formato inicialmente desarrollado por Apple.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 11:** El formato de archivo base de medios ISO es la base para muchos formatos de archivo (contenedores).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 12:** El formato de archivo base de medios ISO permite almacenar cualquier tipo de contenido, no solo contenido de estándares MPEG.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 13:** WAV es un contenedor de audio, no un formato de compresión de audio.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 14:** El Formato de Archivo Base de Medios ISO es útil para representar varias estructuras de contenido multimedia, pero no cuando necesitamos streaming.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es muy apropiado para streaming.

---

### 8. Metadatos

**Pregunta 1:** La descripción del contenido audiovisual debe estar incrustada en el propio contenido.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. También puede estar separada del contenido.

**Pregunta 2:** No es posible incrustar metadatos en los recursos que están describiendo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso.

**Pregunta 3:** Si los metadatos no están "incrustados" en los recursos que describen, entonces necesitamos un contenedor para poder relacionarlos.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Hay otros mecanismos para relacionarlos, tanto desde el recurso como desde los metadatos.

**Pregunta 4:** Un esquema de metadatos puede definir atributos de "alto nivel", como Resolución o Color, y/o los llamados atributos de "bajo nivel", como Palabras Clave o Descripción.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. "alto" y "bajo" están intercambiados.

**Pregunta 5:** "Creador" o "fecha" son ejemplos de los llamados "atributos de bajo nivel", para distinguirlos de los "atributos de alto nivel".
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Son "atributos de alto nivel".

**Pregunta 6:** Si usamos el conjunto de metadatos JPSearch, podemos almacenar información sobre las fechas de creación y modificación de las imágenes.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 7:** Si tengo imágenes descritas con Dublin Core, entonces podría buscarlas basándome en el fotógrafo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. El nombre o identificación del fotógrafo podría incluirse en los elementos Publisher o Contributor, por ejemplo.

**Pregunta 8:** Dublin Core es un esquema de metadatos muy utilizado, pero no es válido para describir contenido audiovisual.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Puede usarse, aunque el nivel de detalle puede ser bajo para algunas aplicaciones.

**Pregunta 9:** Dublin Core es un esquema de metadatos muy utilizado, principalmente para describir contenido audiovisual.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Dublin Core es genérico, no específico para contenido audiovisual.

**Pregunta 10:** El punto clave de Dublin Core para representación de metadatos es que tiene solo 15 elementos simples. La desventaja es que es imposible extender ese conjunto de metadatos.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es extensible. Sin embargo, hay riesgo de perder interoperabilidad.

**Pregunta 11:** Dublin Core es un estándar de metadatos que tiene 15 elementos simples, facilitando así la interoperabilidad entre repositorios.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 12:** Dublin Core permite describir los metadatos de un objeto físico.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. Además de, por supuesto, los digitales.

**Pregunta 13:** El conjunto de metadatos EBUCore está destinado a contenido educativo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Está destinado a información de radio y televisión.

**Pregunta 14:** EBUCore permite almacenar información sobre programas de TV originalmente descritos con Dublin Core.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. Es un superconjunto.

**Pregunta 15:** Si describimos información sobre programas de TV con Dublin Core, podemos incluirla en un repositorio usando EBUCore, aunque estará incompleta.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. EBUCore es un superconjunto de Dublin Core.

**Pregunta 16:** "JPSearch core metadata" es un estándar de ISO.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.


---

### 9. Modelo OSI

**Pregunta 1:** Los modelos OSI e Internet son iguales. La única diferencia es que ambos usan nombres diferentes.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Difieren en el número de capas y la estructura de algunas de ellas. Además, las capas del modelo Internet no están formalizadas.

**Pregunta 2:** La capa de Transporte en el modelo OSI es equivalente a las capas TCP/UDP e IP en el modelo Internet.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El Transporte OSI es equivalente al Transporte Internet, es decir, TCP/UDP.

**Pregunta 3:** Las capas de Presentación y Sesión en el modelo OSI son equivalentes a la capa de Transporte en el modelo Internet.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Presentación y Sesión en OSI son parte de Aplicación en Internet.

**Pregunta 4:** Un segmento TCP no incluye información a nivel de aplicación.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Incluye información de todos sus niveles superiores.

**Pregunta 5:** Un datagrama IP (unidad de datos de capa de red) puede incluir un segmento TCP (unidad de datos de capa de transporte).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 6:** Una data unit de TCP (un segmento TCP) no incluye información del nivel de aplicación.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Incluye información de todos sus niveles superiores.


---

### 10. MIME

**Pregunta 1:** MIME fue propuesto inicialmente como la solución a varias limitaciones del formato de correo electrónico, como combinar varios tipos de contenido en el mismo mensaje.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. Pero más importante es la capacidad de codificar contenido "multimedia" de forma legible por humanos (compatible con sistemas ASCII).

**Pregunta 2:** MIME define, aparte de otras características, cómo combinar varios tipos de contenido en el mismo mensaje.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. Aunque la característica más importante es la posibilidad de codificar contenido "multimedia" de forma legible y, por tanto, compatible con sistemas ASCII.

**Pregunta 3:** audio, image y video son tipos de contenido MIME válidos.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 4:** Más de la mitad de los subtipos existentes en MIME pertenecen a los tipos de contenido audio, image y video.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. La mayoría de los subtipos pertenecen al tipo de contenido application.

**Pregunta 5:** image/gif es una combinación válida de tipo/subtipo de contenido MIME.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 6:** image y video son tipos de contenido MIME válidos, mientras que example no lo es.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Example también es un tipo de contenido MIME válido.

**Pregunta 7:** image y animation son tipos de contenido MIME válidos.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Animation no es un tipo de contenido MIME válido.

**Pregunta 8:** En MIME, font es subtipo de text.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es un tipo por sí mismo.

**Pregunta 9:** font es un tipo de contenido MIME válido.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 10:** base64 es ineficiente porque necesita transmitir 1 byte por cada 7 bits de información.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El tamaño aumenta porque necesitamos 4 bytes por cada 3.

**Pregunta 11:** base64 es ineficiente porque necesita transmitir 1 byte extra por cada octeto.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El tamaño aumenta porque necesitamos 4 bytes por cada 3.

**Pregunta 12:** base64 es ineficiente porque necesita transmitir 1 byte extra por cada 3 octetos.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 13:** base64 es un posible Content-Transfer-Encoding en MIME que permite reducir el tamaño de la codificación original del contenido.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El tamaño aumenta (necesitamos 4 bytes por cada 3).

**Pregunta 14:** base64 es un posible Content-Transfer-Encoding en MIME. Sin embargo, el tamaño del contenido codificado original se multiplica por 4.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El tamaño aumenta, pero necesitamos 4 bytes por cada 3.

**Pregunta 15:** base64 es un posible Content-Type en MIME.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. base64 es un tipo de Content-Transfer-Encoding.

**Pregunta 16:** base64 es un mecanismo de codificación en MIME.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 17:** Reply-To e In-Reply-To son operaciones de un protocolo de transferencia de mensajes en Internet.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Son elementos (campos) de la cabecera de un mensaje.

**Pregunta 18:** MIME define, aparte de otras características, cómo combinar diferentes tipos de contenido en el mismo mensaje.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. Aunque la característica más importante es la posibilidad de codificar contenido "multimedia" de forma legible y, por tanto, compatible con sistemas ASCII.

**Pregunta 19:** Más de la mitad de los subtypes en MIME pertenecen a los content types audio, image y video.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. La mayoría de los subtipos pertenecen al content type application.

**Pregunta 20:** base64 es ineficiente porque necesita transmitir 1 octeto extra por cada octeto original.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El tamaño aumenta porque necesitamos 4 bytes por cada 3.


---

### 11. URL

**Pregunta 1:** http://urn:example:animal:ferret:nose es un ejemplo válido de URL.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. La parte después de http:// es una URN.

**Pregunta 2:** urn:example:animal:ferret:nose es un ejemplo válido de URN.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 3:** urn:example:animal:ferret:nose es un ejemplo válido de URI.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. Es una URN, un caso particular de URI.

**Pregunta 4:** urn:myapplication:element:details es, sintácticamente, un ejemplo válido de URI.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. Es una URN, que es una URI.

**Pregunta 5:** Un IRI (Internationalized Resource Identifier) es una URI que puede incluir caracteres no latinos.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 6:** Un IRI (Internationalized Resource Identifier) es una URI que podría usarse en diferentes idiomas.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Las URIs no tienen idioma asociado. Un IRI es una URI que puede incluir caracteres no ASCII.

**Pregunta 7:** Una diferencia entre una URL (Uniform Resource Locator) y una URN (Uniform Resource Name) es que la primera permite localizar el recurso, mientras que la segunda no.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 8:** Los caracteres "ç" o "ñ", por ejemplo, pueden aparecer en un IRI (Internationalized Resource Identifier).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. Un IRI es una URI que puede incluir caracteres no ASCII.

**Pregunta 9:** Tanto una URL como una URN se pueden usar para localizar un recurso que se quiere acceder con HTTP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Solo una URL.


---

### 12. HTTP

**Pregunta 1:** HTTP no es un protocolo de tipo Petición-Respuesta.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El cliente siempre envía una Petición, y luego el servidor responde con una Respuesta.

**Pregunta 2:** Para enviar un archivo con el protocolo HTTP, usamos el método GET.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Necesitamos usar POST.

**Pregunta 3:** Un mensaje de petición del protocolo HTTP consiste en una línea de petición y el cuerpo del mensaje.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. También tiene una cabecera.

**Pregunta 4:** Un mensaje de petición del protocolo HTTP consiste en una línea de petición, una cabecera y el cuerpo del mensaje (si lo hay).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 5:** El método HEAD de HTTP devuelve el mismo cuerpo que el método GET.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Solo devuelve la cabecera.

**Pregunta 6:** Los métodos POST, PUT, DELETE y PATCH de HTTP pueden modificar el servidor.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 7:** HEAD, TRACE y OPTIONS son métodos HTTP que no modifican el contenido del servidor.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 8:** El método POST de HTTP es el único que puede modificar el servidor.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. También PUT, DELETE y PATCH están permitidos para modificar.

**Pregunta 9:** La siguiente cabecera de una Petición HTTP es válida:
```
GET /index.html HTTP/1.1
Host: www.example.com
```
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 10:** Los valores de los elementos If-Modified-Since y If-None-Match, si los hay, son parte de la cabecera en una Petición HTTP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 11:** Los elementos If-Modified-Since y If-None-Match de la Petición HTTP fuerzan a descargar contenido que ya tenemos en el cliente.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es para evitarlo.

**Pregunta 12:** El elemento If-Modified-Since de una Petición HTTP evita descargar contenido ya disponible en el cliente. Otra forma de hacerlo es con el elemento If-None-Match.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 13:** Un Entity Tag en una cabecera HTTP es un hash de un recurso identificado por una URL.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 14:** Un Entity Tag en una cabecera HTTP proporciona una marca de tiempo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Un Entity Tag es un hash de un recurso identificado por una URL.

**Pregunta 15:** HTTP solo puede transferir contenido HTML.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El protocolo HTTP puede transferir cualquier tipo de contenido.

**Pregunta 16:** HTTP siempre funciona en modo stateless; es decir, una petición dada es independiente de las anteriores.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 17:** HTTP puede funcionar en modo stateless (una petición dada es independiente de las anteriores) o no, permitiendo en este último caso crear peticiones dependientes.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. HTTP es siempre, y solo, stateless.

**Pregunta 18:** Todas las peticiones HTTP incluyen un cuerpo obligatorio.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El cuerpo no es obligatorio. De hecho, en el método GET, no está permitido.

**Pregunta 19:** El elemento connection de una Petición HTTP permite gestionar pipelining.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es para la persistencia.

**Pregunta 20:** El elemento connection de una Petición HTTP permite gestionar la persistencia.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 21:** Tanto una URL como una URN podrían usarse para localizar un recurso al que acceder con HTTP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Solo una URL.

**Pregunta 22:** La cabecera de un mensaje de petición del protocolo HTTP consta de varios elementos. Los elementos específicos a incluir se especifican en el esquema HTTP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. No existe esquema HTTP. Los elementos se definen en el estándar y en usos específicos de HTTP, incluso aplicaciones "privadas".

**Pregunta 23:** Para enviar contenido con el protocolo HTTP, podemos usar el método POST.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 24:** Para enviar contenido con el protocolo HTTP, normalmente usamos el método POST, pero usar GET es una buena alternativa.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. GET no permite añadir contenido en el cuerpo.

**Pregunta 25:** La siguiente parte de una cabecera de Petición HTTP es correcta:
```
GET /index.html HTTP/1.1
Host: www.example.com
Accept: text/html
Accept-Language: en-us
```
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 26:** Los códigos de estado HTTP son parte de las Respuestas HTTP. Indican, por ejemplo, si ha habido un error en el servidor.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 27:** Los códigos de estado HTTP son parte de las Peticiones HTTP. Indican, por ejemplo, si ha habido un error en el servidor.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Son parte de las Respuestas HTTP.

**Pregunta 28:** Los códigos de estado HTTP se incluyen en la cabecera de la Respuesta HTTP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 29:** PUT y DELETE son métodos del protocolo HTTP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 30:** Los valores del elemento Accept de la Petición HTTP son subtipos MIME.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 31:** El valor del elemento Etag de la Respuesta HTTP es asignado por el servidor.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 32:** El valor del elemento Etag de la "Respuesta HTTP" es asignado por el servidor incluyendo una marca de tiempo en la respuesta.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es asignado por el servidor, pero es un hash del contenido, no una marca de tiempo.

**Pregunta 33:** El valor del elemento Etag de la Respuesta HTTP es asignado por el cliente al recibir una respuesta del servidor.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es asignado por el servidor.

**Pregunta 34:** La siguiente parte de una cabecera de Petición HTTP es correcta:
```
GET /index.html HTTP/1.1 200 OK
Host: www.example.com
Accept: text/html
Accept-Language: en-us
```
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El valor "200 OK" en la Línea de Petición solo es parte de una Respuesta HTTP.

**Pregunta 35:** HTTP/2 permite Respuestas generadas sin necesidad de que un cliente envíe una Petición previa.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 36:** El problema de HTTP/2 es su falta de compatibilidad hacia atrás con HTTP/1.1.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Son compatibles.

**Pregunta 37:** HTTP/2 especifica mecanismos para mejorar el rendimiento de las implementaciones HTTP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 38:** Aunque hay mejoras, HTTP/2 es compatible hacia atrás con HTTP/1.1.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 39:** HTTP/2 añade nuevos métodos sobre HTTP/1.1.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso.

**Pregunta 40:** HTTP/2 se divide en 2 subniveles para añadir nuevos métodos a HTTP/1.1.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. La división en 2 niveles es para mantener los métodos y cambiar la implementación sobre cómo usar TCP.

**Pregunta 41:** HTTP/2 añade nuevos métodos a HTTP/1.1, pero son opcionales.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. No hay nuevos métodos.

**Pregunta 42:** La "HTTP Request Line" correspondiente a esta respuesta acaba con "HTTP/1.1".
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 43:** El "status code" de la respuesta corresponde con el mensaje "Moved Permanently".
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El código de estado es "200", que indica que el recurso ha sido enviado correctamente.

**Pregunta 44:** Una de las ventajas de HTTP/2 es que añade nuevos métodos a los ya existentes en HTTP/1.1.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. No añade nuevos métodos.

**Pregunta 45:** En un HTTP header, un Entity Tag proporciona una marca de tiempo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Un Entity Tag es un hash de un recurso identificado por una URL.

**Pregunta 46:** El problema de HTTP/2 para las aplicaciones que lo quieren utilizar es su falta de compatibilidad ("backwards compatibility") con HTTP/1.1.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Son compatibles.


---

### 13. XML

**Pregunta 1:** Las etiquetas XML solo pueden ser definidas por SDOs (Standards Development Organizations).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Cada diseñador de un esquema XML puede hacerlo.

**Pregunta 2:** Cada diseñador XML puede usar Namespaces XML. Para este propósito, se necesita usar el atributo xmlns.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 3:** Un esquema XML específico está escrito en lenguaje XML, pero la especificación de la sintaxis para escribir esquemas XML usa otro mecanismo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El esquema XML también se especifica como un esquema XML.

**Pregunta 4:** La siguiente parte de una instancia XML incluye "elementos" y "texto", pero no "atributos":
```xml
<book>
  <title lang="en">XML</title>
  <author>John Smith</author>
  <year>2018</year>
</book>
```
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. "lang" es un atributo.

**Pregunta 5:** La siguiente parte de una instancia XML incluye un elemento raíz, "atributos" y "texto", pero no otros "elementos":
```xml
<book>
  <title lang="en">XML</title>
  <author>John Smith</author>
  <year>2018</year>
</book>
```
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. "title", "author" y "year" son elementos.

**Pregunta 6:** La siguiente parte de una instancia XML incluye uno o más "elementos", "atributos" y "texto":
```xml
<book>
  <title lang="en">XML</title>
  <author>John Smith</author>
  <year>2018</year>
</book>
```
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 7:** La siguiente parte de una instancia XML incluye "atributos", "texto" y "elementos":
```xml
<book>
  <title>XML</title>
  <author>John Smith</author>
  <year>2019</year>
</book>
```
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. No hay "atributos".

**Pregunta 8:** La siguiente parte de una instancia XML incluye "texto" y "elementos":
```xml
<book>
  <title>XML</title>
  <author>John Smith</author>
  <year>2019</year>
</book>
```
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 9:** La siguiente parte de una instancia XML incluye "atributos", "texto" y "elementos":
```xml
<book>
  <title lang="en">XML</title>
  <author>John Smith</author>
  <year>2019</year>
</book>
```
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 10:** La siguiente parte de una instancia XML incluye "texto" y "elementos", pero no "atributos":
```xml
<book>
  <title>XML</title>
  <author>John Smith</author>
  <year>2019</year>
</book>
```
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 11:** Este fragmento de un documento XML es el elemento raíz de un esquema:
```xml
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  targetNamespace="http://www.films.org"
  xmlns="http://www.films.org">
```
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 12:** Dado el siguiente fragmento de documento XML, en http://www.films.org tenemos posibles valores de "films":
```xml
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  targetNamespace="http://www.films.org"
  xmlns="http://www.films.org">
```
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Tenemos un "namespace": identificadores de elementos (no valores).

**Pregunta 13:** El atributo schemaLocation de un documento XML puede identificar el archivo que contiene su esquema XML.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 14:** Con XSLT, podemos convertir de un esquema XML a un esquema XML diferente.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 15:** El propósito de XSL y XSLT es convertir de un esquema XML a HTML.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es para convertir de un esquema XML a un esquema XML diferente.

**Pregunta 16:** Usando XSL y XSLT podemos convertir de un esquema XML a un esquema XML diferente, incluyendo de un esquema XML a HTML.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 17:** XSL y XSLT son herramientas para ayudar a transformar de documentos siguiendo un esquema XML a otro. Sin embargo, no es posible transformar de un esquema XML a HTML.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. También es posible la transformación a HTML.

**Pregunta 18:** XSL y XSLT son herramientas para ayudar a transformar de un esquema XML a otro, incluyendo la transformación de un esquema XML a HTML.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 19:** JSON (JavaScript Object Notation) es un formato de intercambio de datos estandarizado por el W3C (World Wide Web Consortium).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es un estándar IETF.

**Pregunta 20:** "USD" va entre comillas por tratarse del valor de un atributo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 21:** "Name" es el "root element" del documento XML por ser el primero de los elementos en "PaymentInfo".
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El elemento raíz es "PaymentInfo".

**Pregunta 22:** El siguiente fragmento de documento XML incluye un elemento raíz, atributos y texto, pero no otros elementos.
```xml
<book>
  <title lang="en">XML</title>
  <author>John Smith</author>
  <year>2018</year>
</book>
```
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. "title", "author" y "year" son elementos.

**Pregunta 23:** JSON (JavaScript Object Notation) es un formato de intercambio de datos estandarizado por el W3C (World Wide Web Consortium).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es un estándar IETF.

**Pregunta 24:** Los tags de XML sólo pueden ser definidos por SDOs (Standards Development Organizations).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Cada diseñador de un esquema XML puede hacerlo.


---

### 14. Servicios Web

**Pregunta 1:** La única diferencia entre las versiones 1.1 y 2.0 de WSDL es el nombre: Web Services Description Language (para 2.0) y Web Services Definition Language (para 1.1).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Hay otras diferencias, principalmente de sintaxis.

**Pregunta 2:** UDDI todavía se usa ampliamente para hacer públicos los servicios WSDL.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Ya no se usa.

**Pregunta 3:** WSDL es usado por un proveedor de servicios web para permitir que otros implementen clientes para acceder remotamente a ese servicio.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 4:** WSDL permite definir bindings sobre diferentes protocolos como SOAP o HTTP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. Es posible indicar que un servicio está implementado sobre SOAP o directamente sobre métodos HTTP.

**Pregunta 5:** WSDL no permite definir bindings directamente sobre HTTP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es posible, por ejemplo, indicar que un servicio está implementado sobre SOAP o directamente sobre métodos HTTP.

**Pregunta 6:** SOAP define, en XML, peticiones y respuestas para enviarse solo sobre HTTP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es posible usar otros protocolos, como SMTP.

**Pregunta 7:** http://www.w3.org/ns/wsdl/soap identifica el "WSDL SOAP Binding Namespace".
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 8:** Para una petición dada, normalmente necesitamos enviar más información (más bytes) cuando usamos SOAP que cuando usamos REST.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 9:** Aunque usemos REST para implementar un servicio web, podríamos usar SOAP para devolver las respuestas.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 10:** Un servicio ofrecido como REST siempre se accede con el método GET de HTTP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. También es posible usar otros métodos.

**Pregunta 11:** Un archivo WSDL solo define operaciones de un servicio web REST.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Define operaciones de un servicio en general.

**Pregunta 12:** En REST, solo se pueden usar los métodos GET y POST de HTTP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. También PUT o DELETE podrían usarse.

**Pregunta 13:** SOAP no es la única forma de enviar operaciones especificadas con WSDL.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 14:** Con SOAP, es posible conectarse a un servicio web público.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 15:** Un proveedor de servicios web utiliza WSDL para permitir que otros puedan implementar clientes que remotamente accedan a ese servicio.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 16:** En REST, solo se pueden usar los métodos HTTP GET y POST.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. También PUT o DELETE podrían usarse.

**Pregunta 17:** Aunque usemos REST para implementar un servicio web, podríamos usar SOAP para devolver las respuestas.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.


---

### 15. HTML5 y Streaming

**Pregunta 1:** Aparte de otras características, HTML5 añade nuevas etiquetas respecto a HTML4 para gestionar nativamente contenido de vídeo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 2:** HTML5 dispone de etiquetas específicas para incluir audio, pero se tiene que identificar en qué formato concreto.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 3:** "Renderizado continuo" podría ser una definición de "streaming".
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 4:** "Multimedia que es constantemente recibido y presentado a un usuario final mientras se entrega" es una posible definición de "multimedia streaming".
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 5:** Streaming se refiere al renderizado continuo de contenido basado en tiempo desde un servidor a un cliente.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 6:** Solo hay un protocolo que permite streaming de contenido multimedia.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Hay varios protocolos tanto para streaming "directo" como basado en HTTP.

**Pregunta 7:** El protocolo RTCP permite enviar streams de audio y vídeo sobre el protocolo UDP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. RTCP es solo un protocolo de control. Los streams se envían con RTP.

**Pregunta 8:** RTCP es un protocolo de control que no permite enviar streams de audio y vídeo sobre el protocolo UDP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 9:** RTP es un protocolo Cliente/Servidor.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 10:** RTSP es un protocolo Cliente/Servidor.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 11:** Para recibir un vídeo por streaming, RTSP necesita otro protocolo para transportar los datos (el vídeo).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. Al menos RTP o equivalente.

**Pregunta 12:** Es posible transmitir contenido multimedia en streaming con diferentes calidades usando el protocolo RTSP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. RTSP no es un protocolo de streaming, sino un protocolo para controlar la sesión de streaming.

**Pregunta 13:** RTSP es un protocolo especificado por el comité MPEG de ISO/IEC.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es una tecnología basada en Internet especificada por IETF.

**Pregunta 14:** Mientras RTSP permite gestionar sesiones de streaming, el protocolo RTP permite enviar streams de audio y vídeo sobre el protocolo UDP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. También necesitamos RTCP para controlar el proceso de envío, pero el envío en sí lo hace RTP.

**Pregunta 15:** Todos los protocolos que permiten streaming de contenido multimedia están basados en HTTP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Hay varios protocolos antiguos que permiten streaming directo sin HTTP.

**Pregunta 16:** Para proporcionar streaming con RTP, se necesita un servidor HTTP para entregar el contenido.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Cuando se usa RTP, HTTP no está haciendo ninguna entrega de contenido.

**Pregunta 17:** RTSP es suficiente para recibir un vídeo a través de streaming.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Necesitamos al menos RTP para transmisión y RTCP para control.

**Pregunta 18:** Un cliente RTSP también puede interactuar contra un servidor HTTP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Un Cliente siempre interactúa contra un Servidor con el mismo protocolo. Una cosa diferente es hacer streaming con HTTP.

---

### 16. DASH

**Pregunta 1:** Aunque MPEG-DASH es mejor, es posible tener streaming multimedia adaptativo con RTSP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Solo MPEG-DASH implementa streaming adaptativo.

**Pregunta 2:** El estándar DASH especifica, aparte de otras cosas, el archivo que describe el contenido que vamos a hacer streaming sobre HTTP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 3:** El estándar DASH especifica, aparte de otras cosas, la forma en que los clientes verifican el ancho de banda disponible.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. No hay nada estandarizado sobre los Clientes.

**Pregunta 4:** El estándar DASH especifica, aparte de otras cosas, cómo construir URLs para las Peticiones HTTP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 5:** DASH solo soporta ISO Base Media File Format como stream.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. También MPEG-2 TS.

**Pregunta 6:** DASH solo soporta ISO Base Media File Format y MPEG-2 TS como tipos de stream.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 7:** DASH define solo dos perfiles: "On demand" y "Live".
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Hay 6: "On demand", "Live" y "Main" para ISO base media file format, "simple" y "main" para MPEG-2 TS, y "Full profile".

**Pregunta 8:** Todos los perfiles DASH son independientes entre ellos; es decir, no comparten ninguna característica.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Algunos perfiles son subconjuntos de otros.

**Pregunta 9:** El estándar DASH especifica, aparte de otras cosas, cómo obtener los diferentes fragmentos en los que se estructurará la transferencia de archivos HTTP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 10:** Los perfiles DASH son independientes de la transmisión "On demand" o "Live".
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es uno de los criterios para definir perfiles, junto con el tipo de stream.

---

### 17. Seguridad

**Pregunta 1:** En el mecanismo ElGamal para encriptación asimétrica, la clave secreta es simplemente un número seleccionado dentro de un rango G dado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 2:** De acuerdo con X.509, la clave pública de una Autoridad de Certificación emitiendo un certificado debe incluirse en dicho certificado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. La Clave Pública de la Autoridad de Certificación no se incluye, solo su firma.

**Pregunta 3:** CHACHA20 es el único mecanismo de "stream encryption" soportado en las TLSv1.3 cipher suites.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 4:** En TLSv1.3, la clave simétrica debe estar siempre encriptada con algoritmos Diffie-Hellman.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 5:** QUIC ("A UDP-Based Multiplexed and Secure Transport") integra el TLSv1.3 completo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. QUIC proporciona un nivel de seguridad equivalente a TLSv1.3 e integra el proceso de handshake.

**Pregunta 6:** S/MIME está estandarizado por el IETF. Especifica diferentes mensajes construidos sobre PKCS#7.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 7:** La encriptación de un documento con XML Encryption incluye un proceso de canonicalización.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es parte del proceso de firma con XML Signature.

**Pregunta 8:** En XML Signature, tanto en el caso enveloped como en el enveloping, el elemento signature está siempre incluido en el documento XML firmado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 9:** SAML especifica cómo definir JWTs y enviarlos en servicios web basados en REST.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Se define con XML y permite definir aserciones de seguridad, que serían equivalentes a un JWT, pero no permite definirlas.

**Pregunta 10:** El cuerpo de una "access token response" en OAuth 2.0 está siempre representado en XML.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Puede ser también JSON o texto plano.

**Pregunta 11:** En OAuth 2.0, la respuesta a una Authorization Request es un token que se usa para obtener después un Authorization Grant.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. La respuesta a una Authorization Request es un Authorization Grant, que consiste en una Credencial para obtener un access token.

**Pregunta 12:** Un "Encrypted JWT" (JWE) contiene un "Protected header", una "Encrypted key" (simétrica), un "Initialization vector", los datos encriptados ("ciphertext") y un "Authentication tag". El vector y el tag son opcionales, mientras que el resto son obligatorios.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 13:** OpenID Connect especifica "Claims" para ser usados en JWTs.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 14:** En el contexto de control de acceso, el PDP (Policy Decision Point), solicitado por el PEP (Policy Enforcement Point), utiliza información del PAP (Policy Administration Point), que tiene las reglas de privacidad, y el PIP (Policy Information Point) para decidir conceder acceso o no.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 15:** El "Mandatory Access Control" está basado en el uso de "security labels" (niveles y categorías), mientras que el "Discretionary Access Control" utiliza listas de control de acceso.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 16:** XACML es un estándar que permite expresar reglas para control de acceso. Las reglas se pueden agrupar en políticas. El lenguaje permite especificar cómo combinar las reglas dentro de una política.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 17:** La exclusividad de los derechos morales se podría negociar.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Los derechos morales no pueden transferirse, por lo que la "exclusividad" no aplica.

**Pregunta 18:** En el mecanismo ElGamal para encriptación asimétrica, la clave secreta es simplemente un número seleccionado dentro de un rango G dado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 19:** De acuerdo con X.509, la clave pública de una Autoridad de Certificación emitiendo un certificado se debe incluir en dicho certificado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. La Clave Pública de la Autoridad de Certificación no se incluye, solo su firma.


---

## Resumen de Categorías

| Categoría | Número de Preguntas |
|-----------|---------------------|
| Estandarización | 14 |
| Ciclo de Vida | 2 |
| Caracteres Unicode | 14 |
| Audio | 5 |
| Imágenes | 15 |
| Vídeo | 10 |
| Contenedores | 14 |
| Metadatos | 16 |
| Modelo OSI | 6 |
| MIME | 20 |
| URL | 9 |
| HTTP | 46 |
| XML | 24 |
| Servicios Web | 17 |
| HTML5 y Streaming | 18 |
| DASH | 10 |
| Seguridad | 19 |
| **Total** | **259** |

---

**Documento generado a partir de los materiales del curso ISDCM**
**Curso 2025-26 Q2 - Máster en Ingeniería Informática (MEI)**