const questions = [
  {
    question:
      "Los modelos OSI e Internet son iguales. La única diferencia es que ambos utilizan nombres diferentes.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation:
      "Difieren en el número de capas y en la estructura de algunas de ellas. Además, las capas del modelo de Internet no están formalizadas.",
  },
  {
    question:
      "La capa de Transporte en el modelo OSI es equivalente a las capas TCP/UDP e IP en el modelo de Internet.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation:
      "El transporte en OSI equivale únicamente al transporte en Internet, es decir, TCP/UDP.",
  },
  {
    question:
      "Las capas de Presentación y Sesión del modelo OSI equivalen a la capa de Transporte del modelo de Internet.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation:
      "Las capas de Presentación y Sesión en OSI forman parte de la capa de Aplicación en Internet.",
  },
  {
    question: "Un segmento TCP no incluye información del nivel de aplicación.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Incluye información de todos sus niveles superiores.",
  },
  {
    question:
      "Un datagrama IP (unidad de datos de la capa de red) puede incluir un segmento TCP (unidad de datos de la capa de transporte).",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "Modelos de Comunicación y Protocolos de Correo",
  },
  {
    question:
      "El modelo Cliente/Servidor se refiere a dos entidades que se comunican siguiendo una relación asimétrica.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "No es posible ejecutar en la misma máquina aplicaciones Cliente/Servidor y aplicaciones Simétricas (o de Sistema).",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "",
  },
  {
    question: "Los protocolos de sistema son siempre asimétricos.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Son simétricos.",
  },
  {
    question:
      "Una máquina determinada puede actuar al mismo tiempo como Servidor en un protocolo de acceso y como Solicitante (Requestor) en un protocolo de sistema.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question: "El protocolo SMTP permite enviar y recuperar mensajes.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Solo permite enviarlos, incluso de forma simétrica.",
  },
  {
    question:
      "Aunque el protocolo POP3 ha sido desarrollado para recuperar correos, también puede usarse para enviarlos.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation:
      "Solo puede usarse para lectura. Es un protocolo asimétrico en el que el cliente solicita mensajes al servidor para recuperarlos.",
  },
  {
    question:
      '"Reply-To" e "In-Reply-To" son operaciones de un protocolo de transferencia de mensajes en Internet.',
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Son elementos (campos) de la cabecera de un mensaje.",
  },
  {
    question:
      '"Reply-To" e "In-Reply-To" son elementos en la cabecera de un correo de Internet.',
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "En el Webmail, SMTP y otros protocolos de correo se ejecutan sobre HTTP (el protocolo de acceso web) en lugar de sobre TCP.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation:
      "Los correos se intercambian con HTTP, mientras que el servidor HTTP es quien utiliza SMTP y otros protocolos de correo. Tanto HTTP como SMTP se ejecutan sobre TCP.\n\nEstándares MIME",
  },
  {
    question: "Fue necesario modificar SMTP para poder ser utilizado con MIME.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation:
      "MIME define líneas de cabecera que no estaban en la primera versión de SMTP, pero solo es necesario implementar MIME en el servidor; no hace falta modificar el protocolo SMTP.",
  },
  {
    question:
      "Algunos de los elementos en una cabecera SMTP pueden ser direcciones de correo electrónico.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "Las direcciones de correo del originador y los destinatarios en SMTP están fuera de la cabecera.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "",
  },
  {
    question:
      "MIME se propuso inicialmente como solución a varias limitaciones del formato de correo, como la combinación de varios tipos de contenido en un mismo mensaje.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation:
      'Pero más importante es la capacidad de codificar contenido "multimedia" de forma legible para humanos (compatible con sistemas ASCII).',
  },
  {
    question:
      "MIME define, aparte de otras características, cómo combinar varios tipos de contenido en el mismo mensaje.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation:
      ", aunque la característica más importante es la posibilidad de codificar contenido multimedia en un formato legible compatible con sistemas ASCII.",
  },
  {
    question:
      "Un correo MIME multiparte incluye un elemento de límite (boundary) para separar sus diferentes partes. El valor exacto se define en el estándar.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Se especifica para cada correo individual.",
  },
  {
    question:
      "Un mensaje MIME multiparte incluye un elemento de límite para separar todas sus partes. El valor de este elemento varía de un mensaje a otro.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question: '"audio", "image" y "video" son tipos de contenido MIME válidos.',
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "Más de la mitad de los subtipos existentes en MIME pertenecen a los tipos de contenido audio, imagen y vídeo.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation:
      'La mayoría de los subtipos pertenecen al tipo de contenido "application".',
  },
  {
    question:
      '"image/gif" es una combinación válida de tipo/subtipo de contenido MIME.',
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      '"image" y "video" son tipos de contenido MIME válidos, mientras que "example" no lo es.',
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: '"example" también es un tipo de contenido MIME válido.',
  },
  {
    question: '"image" y "animation" son tipos de contenido MIME válidos.',
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: '"animation" no es un tipo de contenido MIME válido.',
  },
  {
    question: 'En MIME, "font" es un subtipo de "text".',
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Es un tipo por sí mismo.",
  },
  {
    question: '"font" es un tipo de contenido MIME válido.',
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "Codificación Base64 y URIs",
  },
  {
    question:
      "Una razón por la que Base64 es ineficiente es porque necesita transmitir 1 byte por cada 7 bits de información.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "El tamaño aumenta porque se necesitan 4 bytes por cada 3.",
  },
  {
    question:
      "Una razón por la que Base64 es ineficiente es porque necesita transmitir 1 byte extra por cada octeto.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "El tamaño aumenta porque se necesitan 4 bytes por cada 3.",
  },
  {
    question:
      "Base64 es una posible codificación de transferencia de contenido (Content-Transfer-Encoding) en MIME que permite reducir el tamaño de la codificación original.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "El tamaño aumenta (se necesitan 4 bytes por cada 3).",
  },
  {
    question:
      "Base64 es una posible codificación de transferencia en MIME. Sin embargo, el tamaño del contenido original se multiplica por 4.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation:
      "El tamaño aumenta, pero la relación es de 4 bytes por cada 3.",
  },
  {
    question:
      "http://urn:example:animal:ferret:nose es un ejemplo válido de URL.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "La parte después de http:// es un URN.",
  },
  {
    question: "urn:example:animal:ferret:nose es un ejemplo válido de URN.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question: "urn:example:animal:ferret:nose es un ejemplo válido de URI.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "Es un URN, que es un caso particular de URI.",
  },
  {
    question:
      "urn:myapplication:element:details es, sintácticamente, un ejemplo válido de URI.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "Es un URN, el cual es un URI.",
  },
  {
    question:
      "Un IRI (Identificador de Recurso Internacionalizado) es un URI que puede incluir caracteres no latinos.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "Un IRI (Identificador de Recurso Internacionalizado) es un URI que podría usarse en diferentes idiomas.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation:
      "Los URIs no tienen un idioma asociado. Un IRI es un URI que puede incluir caracteres no latinos.\n\nProtocolo HTTP",
  },
  {
    question:
      "HTTP no es un protocolo de tipo Petición-Respuesta (Request-Reply).",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation:
      "El cliente siempre envía una Petición (Request) y el servidor responde con una Respuesta (Reply).",
  },
  {
    question:
      "Para enviar un archivo con el protocolo HTTP, utilizamos el método GET.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Se debe usar POST.",
  },
  {
    question:
      "Un mensaje de petición HTTP consiste en una línea de petición y el cuerpo del mensaje.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "También tiene una cabecera.",
  },
  {
    question:
      "Un mensaje de petición HTTP consiste en una línea de petición, una cabecera y el cuerpo del mensaje (si lo hay).",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "El método HEAD de HTTP devuelve el mismo cuerpo que el método GET.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Solo devuelve la cabecera.",
  },
  {
    question:
      "Los métodos POST, PUT, DELETE y PATCH de HTTP pueden modifiacar el servidor.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "HEAD, TRACE y OPTIONS son métodos HTTP que no modifican el contenido del servidor.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "El método POST de HTTP es el único que puede modificar el servidor.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "También se permite que PUT, DELETE y PATCH lo modifiquen.",
  },
  {
    question:
      "La siguiente cabecera de una petición HTTP es válida: GET /index.html HTTP/1.1\n\nHost: www.example.com",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "Los valores de los elementos If-Modified-Since e If-None-Match, si existen, forman parte de la cabecera en una petición HTTP.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "Los elementos If-Modified-Since e If-None-Match de la petición HTTP obligan a descargar contenido que ya tenemos en el cliente.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Su función es precisamente evitarlo.",
  },
  {
    question:
      "El elemento If-Modified-Since de una petición HTTP evita la descarga de contenido que ya está disponible en el cliente. Otra forma de hacer esto es con el elemento If-None-Match.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "Una Etiqueta de Entidad (Entity Tag) en una cabecera HTTP es un hash de un recurso identificado por una URL.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "Una Etiqueta de Entidad en una cabecera HTTP proporciona una marca de tiempo (time stamp).",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Es un hash de un recurso identificado por una URL.",
  },
  {
    question: "HTTP solo puede transferir contenido HTML.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation:
      "El protocolo HTTP puede transferir cualquier tipo de contenido.",
  },
  {
    question:
      "HTTP siempre funciona en modo sin estado (stateless); es decir, una petición determinada es independiente de las anteriores.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "HTTP puede funcionar en modo sin estado o no, permitiendo en este último caso crear peticiones dependientes.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "HTTP es siempre, y únicamente, sin estado.",
  },
  {
    question: "Todas las peticiones HTTP incluyen un cuerpo obligatorio.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation:
      "El cuerpo no es obligatorio. De hecho, en el método GET, no está permitido.",
  },
  {
    question:
      'El elemento "connection" de la petición HTTP permite gestionar el "pipelining".',
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Sirve para gestionar la persistencia.",
  },
  {
    question:
      'El elemento "connection" de la petición HTTP permite gestionar la persistencia.',
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "Tanto una URL como una URN podrían usarse para localizar un recurso al que se accede con HTTP.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Solo una URL.",
  },
  {
    question:
      "La cabecera de una petición HTTP consiste en varios elementos. Los elementos específicos a incluir se especifican en el esquema HTTP.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation:
      "No existe un esquema HTTP. Los elementos se definen en el estándar y en usos específicos de HTTP, incluso en aplicaciones privadas.",
  },
  {
    question:
      "Para enviar contenido con el protocolo HTTP, podemos usar el método POST.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "Para enviar contenido con el protocolo HTTP, normalmente usamos POST, pero usar GET es una buena alternativa.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "GET no permite añadir contenido en el cuerpo.",
  },
  {
    question:
      "La siguiente parte de una cabecera de petición HTTP es correcta: GET /index.html HTTP/1.1\nHost: www.example.com\nAccept: text/html\n\nAccept-Language: en-us",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "La cabecera de una petición HTTP consiste en varios elementos. Los elementos específicos a incluir se especifican en el esquema HTTP.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation:
      "No hay un esquema HTTP; los elementos se definen en el estándar o aplicaciones específicas.",
  },
  {
    question:
      "Los códigos de estado HTTP forman parte de las respuestas HTTP. Indican, por ejemplo, si ha habido un error en el servidor.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "Los códigos de estado HTTP forman parte de las peticiones HTTP. Indican, por ejemplo, si ha habido un error en el servidor.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Forman parte de las respuestas HTTP.",
  },
  {
    question:
      "Los códigos de estado HTTP forman parte de las peticiones HTTP. Indican, por ejemplo, si ha habido un error en el cliente.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Se encuentran en el servidor (como respuesta).",
  },
  {
    question: "PUT y DELETE son métodos del protocolo HTTP.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "Los valores del elemento Accept de la petición HTTP son subtipos de MIME.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "El valor del elemento Etag de la respuesta HTTP es asignado por el servidor.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "El valor del elemento Etag de la respuesta HTTP es asignado por el cliente al recibir una respuesta del servidor.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Es asignado por el servidor.",
  },
  {
    question:
      "La siguiente parte de una cabecera de petición HTTP es correcta: GET /index.html HTTP/1.1 200 OK\nHost: www.example.com\nAccept: text/html\n\nAccept-Language: en-us",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation:
      'El valor "200 OK" en la línea de petición solo forma parte de una respuesta HTTP.\n\nHTTP/2 e Interacción Web',
  },
  {
    question:
      "HTTP/2 permite generar respuestas sin necesidad de que el cliente envíe una petición previa.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "El problema de HTTP/2 es su falta de compatibilidad hacia atrás con HTTP/1.1.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Son compatibles.",
  },
  {
    question:
      "HTTP/2 especifica mecanismos para mejorar el rendimiento de las implementaciones de HTTP.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "Aunque hay mejoras, HTTP/2 es compatible hacia atrás con HTTP/1.1.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question: "HTTP/2 añade nuevos métodos sobre HTTP/1.1.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "",
  },
  {
    question:
      'HTML permite el uso de "Client scripting", que consiste en el procesamiento de documentos por parte del cliente.',
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "XML, Esquemas y Transformaciones",
  },
  {
    question:
      "Las etiquetas XML solo pueden ser definidas por organizaciones de estandarización (SDOs).",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Cualquier diseñador de un esquema XML puede hacerlo.",
  },
  {
    question:
      "Cualquier diseñador XML puede usar espacios de nombres (Name spaces). Para ello, se debe utilizar el atributo xmlns.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      'El siguiente fragmento de instancia XML incluye "elementos" y "texto", pero no "atributos": <book>\n<title lang="en">XML</title>\n<author>John Smith</author>\n<year>2018</year>\n\n</book>',
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: '"lang" es un atributo.',
  },
  {
    question:
      'El siguiente fragmento incluye un elemento raíz, "atributos" y "texto", pero ningún otro "elemento": <book>\n<title lang="en">XML</title>\n<author>John Smith</author>\n<year>2018</year>\n\n</book>',
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: '"title", "author" y "year" son elementos.',
  },
  {
    question:
      'El siguiente fragmento de instancia XML incluye uno o más "elementos", "atributos" y "texto": <book>\n<title lang="en">XML</title>\n<author>John Smith</author>\n<year>2018</year>\n\n</book>',
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      'El siguiente fragmento de instancia XML incluye "atributos", "texto" y "elementos": <book>\n<title>XML</title>\n<author>John Smith</author>\n<year>2019</year>\n\n</book>',
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: 'No hay "atributos".',
  },
  {
    question:
      'El siguiente fragmento de instancia XML incluye "texto" y "elementos": <book>\n<title>XML</title>\n<author>John Smith</author>\n<year>2019</year>\n\n</book>',
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      'El siguiente fragmento de instancia XML incluye "atributos", "texto" y "elementos": <book>\n<title lang="en">XML</title>\n<author>John Smith</author>\n<year>2019</year>\n\n</book>',
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      'Este fragmento de un documento XML es el elemento raíz de un esquema: <xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\ntargetNamespace="http://www.films.org"\n\nxmlns="http://www.films.org">',
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      'Dado el fragmento anterior, en http://www.films.org tenemos los valores posibles de "films".',
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation:
      'Tenemos un "espacio de nombres": identificadores de elementos, no valores.',
  },
  {
    question:
      "El atributo schemaLocation de un documento XML puede identificar el archivo que contiene su esquema XML.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "Con XSLT, podemos convertir de un esquema XML a un esquema XML diferente.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "El propósito de XSL y XSLT es convertir de un esquema XML a HTML.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Es convertir de un esquema XML a un esquema XML diferente.",
  },
  {
    question:
      "Usando XSL y XSLT podemos convertir de un esquema XML a otro esquema XML diferente, incluyendo la conversión a HTML.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "XSL y XSLT son herramientas para ayudar a transform un esquema XML en otro. Sin embargo, no es posible transformar de un esquema XML a HTML.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation:
      "También es posible la transformación a HTML.\n\nServicios Web (WSDL, SOAP, REST)",
  },
  {
    question:
      "La única diferencia entre las versiones 1.1 y 2.0 de WSDL es el nombre: Web Services Description Language (para 2.0) y Web Services Definition Language (para 1.1).",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Hay otras diferencias, principalmente en la sintaxis.",
  },
  {
    question:
      "UDDI todavía se usa ampliamente para hacer públicos los servicios WSDL.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Ya no se utiliza.",
  },
  {
    question:
      "WSDL es utilizado por un proveedor de servicios web para permitir que otros implementen clientes que accedan remotamente a dicho servicio.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "WSDL permite definir enlaces (bindings) sobre diferentes protocolos como SOAP o HTTP.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation:
      "Es posible indicar que un servicio se implementa sobre SOAP o directamente sobre métodos HTTP.",
  },
  {
    question: "WSDL no permite definir enlaces directamente sobre HTTP.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation:
      "Es posible indicar, por ejemplo, que un servicio se implementa sobre SOAP o directamente sobre métodos HTTP.",
  },
  {
    question:
      "SOAP no es la única manera de enviar operaciones especificadas con WSDL.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "Con SOAP es posible conectarse con un servicio web público existente.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "SOAP define, en XML, peticiones y respuestas para ser enviadas solo con HTTP.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Se pueden usar otros protocolos.",
  },
  {
    question:
      'http://www.w3.org/ns/wsdl/soap identifica el "WSDL SOAP Binding Namespace".',
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "En SOAP se utiliza un recurso, mientras que en REST se invoca un método.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Es al revés.",
  },
  {
    question:
      "Para una petición determinada, normalmente necesitamos enviar más información (más bytes) cuando usamos SOAP que cuando usamos REST.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "Aunque usemos REST para implementar un servicio web, podríamos usar SOAP para devolver las respuestas.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "Un servicio ofrecido como REST es siempre accedido con el método GET de HTTP.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Se pueden usar también otros métodos.",
  },
  {
    question:
      "Un fichero WSDL solo puede definir las operaciones de un servicio web REST.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Define las operaciones de un servicio en general.",
  },
  {
    question: "En REST, solo se pueden usar los métodos HTTP GET y POST.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "También podrían usarse PUT o DELETE.",
  },
  {
    question:
      "“Creation” (Creación) y “Storage” (Almacenamiento) son los primeros pasos del ciclo de vida de los contenidos multimedia.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "Un “Code Unit” es un número único asignado a cada carácter Unicode.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation: "Eso es un Code Point (Punto de código).",
  },
  {
    question: "Vorbis es un formato de audio de código abierto (open source).",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation: "",
  },
  {
    question:
      "SVG (Scalable Vector Graphics) es un formato de gráficos basado en XML que permite diversas resoluciones en las imágenes.",
    options: ["Cierto", "Falso"],
    correct: 1,
    explanation:
      "Es para gráficos vectoriales, los cuales no tienen resolución (son independientes de ella).",
  },
  {
    question:
      "HEIF (High Efficiency Image File Format) es un formato de imagen basado en un estándar de vídeo.",
    options: ["Cierto", "Falso"],
    correct: 0,
    explanation:
      "Es el formato de archivo de imagen de HEVC (High Efficiency Video Coding), es decir, MPEG-H parte 12.",
  },
];

// DOM Elements
const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const questionText = document.getElementById("question-text");
const optionsGrid = document.getElementById("options-grid");
const questionCounter = document.getElementById("question-counter");
const scoreDisplay = document.getElementById("score-display");
const finalScore = document.getElementById("final-score");
const feedbackIcon = document.getElementById("feedback-icon");

const feedbackContainer = document.getElementById("feedback-container");
const explanationText = document.getElementById("explanation-text");
const nextBtn = document.getElementById("next-btn");

// Game State
let currentQuestionIndex = 0;
let score = 0;
let canClick = true;

// Store original questions order
const originalQuestions = [...questions];

// Event Listeners
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", resetGame);
nextBtn.addEventListener("click", handleNextQuestion);

function startGame() {
  currentQuestionIndex = 0;
  score = 0;

  // Restore original order
  questions.splice(0, questions.length, ...originalQuestions);

  // Always shuffle
  questions.sort(() => Math.random() - 0.5);

  showScreen(questionScreen);
  loadQuestion();
}

function resetGame() {
  currentQuestionIndex = 0;
  score = 0;
  showScreen(startScreen);
}

function showScreen(screen) {
  startScreen.classList.remove("active");
  questionScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  screen.classList.add("active");
}

function loadQuestion() {
  canClick = true;
  feedbackContainer.classList.add("hidden");

  const currentQuestion = questions[currentQuestionIndex];

  questionCounter.innerText = `Pregunta ${currentQuestionIndex + 1}/${questions.length}`;
  scoreDisplay.innerText = `Puntuación: ${score}`;
  questionText.innerText = currentQuestion.question;

  optionsGrid.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => handleOptionClick(button, index));
    optionsGrid.appendChild(button);
  });
}

function handleOptionClick(selectedBtn, selectedIndex) {
  if (!canClick) return;
  canClick = false; // Prevent multiple clicks

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedIndex === currentQuestion.correct;

  const allOptions = document.querySelectorAll(".option-btn");

  if (isCorrect) {
    score++;
    selectedBtn.classList.add("correct");
    explanationText.innerHTML =
      "<strong>¡Correcto!</strong> " + (currentQuestion.explanation || "");
  } else {
    selectedBtn.classList.add("wrong");
    allOptions[currentQuestion.correct].classList.add("correct");
    explanationText.innerHTML =
      "<strong>Incorrecto.</strong> " + (currentQuestion.explanation || "");
  }

  scoreDisplay.innerText = `Puntuación: ${score}`;

  // Fade out other options
  allOptions.forEach((btn, index) => {
    btn.disabled = true;
    if (index !== selectedIndex && index !== currentQuestion.correct) {
      btn.classList.add("fade");
    }
    btn.style.boxShadow = "none";
    btn.style.transform = btn.classList.contains("correct")
      ? "scale(1.05)"
      : "translateY(6px)";
  });

  // Show feedback
  feedbackContainer.classList.remove("hidden");
}

function handleNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  showScreen(resultScreen);

  let resultMessage = `¡Has acertado ${score} de ${questions.length}!\n`;

  if (score === questions.length) {
    feedbackIcon.innerText = "🏆";
    resultMessage += "¡Puntuación Perfecta!";
  } else if (score >= questions.length / 2) {
    feedbackIcon.innerText = "👍";
    resultMessage += "¡Buen Trabajo!";
  } else {
    feedbackIcon.innerText = "📚";
    resultMessage += "¡Sigue Aprendiendo!";
  }

  finalScore.innerText = resultMessage;
}
