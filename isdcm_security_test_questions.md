# Preguntas de Test ISDCM - Seguridad en Internet

### INTRODUCCIÓN Y CRIPTOGRAFÍA

**Pregunta 1:** La Intercepción, Manipulación, Suplantación (Impersonation) y Repudio son amenazas típicas a la seguridad en las comunicaciones.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 2:** AES y DES son mecanismos de cifrado de clave simétrica.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 3:** DES y AES son ejemplos de mecanismos de cifrado basados en bloques.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 4:** El DES (Data Encryption Standard) para cifrado simétrico está obsoleto (no se usa) respecto al AES (Advanced Encryption Standard).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 5:** No es posible utilizar el algoritmo AES para firma digital.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 6:** En criptografía, el principio de "confusión" es el que provoca que un pequeño cambio en la clave logre un gran cambio en el texto cifrado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 7:** En criptografía, el principio de "difusión" es el que logra que con un pequeño cambio en el texto claro, ocurra un gran cambio en el texto cifrado (independencia entre texto plano y texto cifrado).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 8:** SubBytes, ShiftRows y MixColumns son ejemplos de permutaciones del algoritmo RSA para cifrado simétrico.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es para AES. RSA es asimétrico.

**Pregunta 9:** ShiftRows, MixColumns y AddRoundKey son ejemplos de permutaciones del algoritmo DES para cifrado simétrico.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Son para AES.

**Pregunta 10:** En Diffie-Hellman, dos máquinas A y B logran compartir una clave secreta intercambiando los valores α^a (enviado por A) y α^b (enviado por B), siendo a∈G y α^a∈G, y también b∈G y α^b∈G, donde G es un grupo finito multiplicativo con un generador α∈G conocido por A y B. Por otro lado, a y b solo son conocidos por A y B, respectivamente.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 11:** En Diffie-Hellman, dos máquinas A y B logran compartir una clave secreta intercambiando los valores α^a (enviado por A) y α^b (enviado por B), siendo a∈G y α^a∈G, y también b∈G y α^b∈G, donde G es un grupo finito multiplicativo con un generador α∈G conocido por A y B. Por otro lado, a y b son conocidos tanto por A como por B, pero no por el resto de máquinas.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. a y b solo son conocidos por A y B, respectivamente.

**Pregunta 12:** En el "cifrado asimétrico", se utiliza la clave privada del destinatario para cifrar un mensaje.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Se utiliza la clave pública del destinatario.

**Pregunta 13:** No es útil cifrar con clave simétrica y enviar esa clave a través de un mecanismo de clave pública.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Cifrar con clave simétrica es más eficiente, y enviar la clave simétrica utilizando PKI resuelve el problema de la distribución de claves.

**Pregunta 14:** Una firma electrónica se genera con la parte pública de la clave asimétrica del firmante.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Con la parte secreta.

**Pregunta 15:** En seguridad, los algoritmos Hash se utilizan para intercambiar claves simétricas.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Se utilizan para "resumir" (sin posibilidad de recuperar el original) el contenido de un mensaje para firmar.

**Pregunta 16:** En el cifrado asimétrico, la parte secreta de la clave puede deducirse de la parte pública de la clave.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso.

**Pregunta 17:** En el cifrado simétrico, la parte pública de la clave puede cifrarse con la parte secreta.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. No hay claves públicas en el cifrado simétrico.

**Pregunta 18:** En RSA, el valor e de la clave pública debe ser coprimo con el valor de Φ(n).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 19:** En RSA, la parte secreta de la clave se calcula directamente a partir de los dos valores de la parte pública, e y n.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. No se usa el módulo n, sino que se utilizan los números p y q para el cálculo.

**Pregunta 20:** En el mecanismo ElGamal para cifrado asimétrico, necesitamos la clave secreta para calcular la clave pública.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. La clave pública Kp se calcula como Kp = α^Ks, siendo Ks la clave secreta y α un número conocido.

**Pregunta 21:** En el mecanismo ElGamal para cifrado asimétrico, la clave secreta Ks se calcula como Ks = α^Kp, siendo Kp la clave pública y α un número conocido.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es justo lo contrario; es decir, Kp = α^Ks.

**Pregunta 22:** En el mecanismo ElGamal para cifrado asimétrico, la clave pública Kp se calcula como Kp = α^Ks, siendo Ks la clave secreta y α un número conocido.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 23:** En el mecanismo ElGamal para cifrado asimétrico, para cifrar m debemos calcular c=m*(α^a)^v mod g, donde v es un número aleatorio elegido por el remitente, que no se envía.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 24:** En el mecanismo de cifrado asimétrico ElGamal, para cifrar m debemos calcular c=m*(α^a)^v mod g, donde v es un número aleatorio elegido por el remitente, que también se envía.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El número aleatorio v no se envía.

### INFRAESTRUCTURA DE CLAVE PÚBLICA (PKI)

**Pregunta 1:** Aparte de otras responsabilidades, una Autoridad de Registro (RA) verifica la información sobre el usuario al que se le va a entregar un certificado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 2:** En PKI, si comparamos OCSP con SCVP, podemos decir que OCSP necesita clientes más complejos.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 3:** OCSP (Online Certificate Status Protocol) construye la ruta de certificación de un certificado para validarlo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Esto es SCVP.

**Pregunta 4:** SCVP (Server-Based Certificate Validation Protocol) es mejor que OCSP (Online Certificate Status Protocol) en el sentido de que permite a los clientes no preocuparse por construir la ruta de certificación.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 5:** En SCVP (Server-Based Certificate Validation Protocol), el software de los clientes necesita implementar más tareas que en OCSP (Online Certificate Status Protocol).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es al contrario. En SCVP, el servidor construye la ruta de certificación de un certificado para validarlo, simplificando así el cliente.

**Pregunta 6:** SCVP (Server-Based Certificate Validation Protocol) construye la ruta de certificación de un certificado para validarlo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 7:** Para generar un sello de tiempo confiable, una Autoridad de Sellado de Tiempo utiliza tecnología Hash y PKI.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. Se calcula un hash a partir de los datos que se van a sellar y el sello de tiempo se firma digitalmente.

**Pregunta 8:** Para confirmar que la hora es correcta, una Autoridad de Sellado de Tiempo necesita guardar una copia del documento al que se le asigna un sello de tiempo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es suficiente con un Hash del documento.

**Pregunta 9:** El modelo de confianza distribuida de PKI no utiliza Autoridades de Certificación.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. Se basa en la información recopilada por los usuarios.

**Pregunta 10:** En un modelo de confianza plano (Plain), el certificado de la CA es autofirmado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 11:** En el caso de un modelo de confianza jerárquico, un certificado X.509 incluye la firma de todas las autoridades de certificación del árbol.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Solo la firma de la CA que ha emitido el certificado.

**Pregunta 12:** En PKI, un modelo de confianza plano es como uno jerárquico, pero el plano solo tiene la CA raíz y un nivel único de CAs.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Un modelo plano solo tiene una CA, la raíz.

**Pregunta 13:** El modelo de lista de confianza de PKI es controlado por el usuario.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 14:** Sin añadir mecanismos híbridos, un usuario de una CA que siga el modelo jerárquico no confiará en un certificado proveniente de otra CA que siga el modelo plano.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 15:** El modelo de confianza Bridge solo funciona con PKIs que utilizan el modelo jerárquico.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Puede funcionar para relacionar cualquier tipo de infraestructura.

**Pregunta 16:** El modelo de confianza de certificación bridge de PKI es más eficiente que el de certificación cruzada con respecto al número de certificados necesarios.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 17:** El modelo de confianza Bridge implica añadir una nueva Autoridad de Certificación.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 18:** Un certificado X.509 incluye la firma del propietario del certificado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. La única firma es la del emisor del certificado.

**Pregunta 19:** Un certificado X.509 incluye la clave pública de su propietario.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 20:** Un certificado digital incluye la firma de la Autoridad de Certificación que emite ese certificado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 21:** ASN.1 es un protocolo para intercambiar certificados X.509.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. ASN.1 es un lenguaje de representación de datos utilizado para formalizar certificados X.509.

**Pregunta 22:** ASN.1 es un lenguaje de representación de datos utilizado para formalizar documentos XML.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. ASN.1 no tiene nada que ver con XML. Se utiliza para representar certificados X.509.

**Pregunta 23:** ASN.1 es un lenguaje de representación de datos utilizado para formalizar certificados X.509 que ha sido estandarizado por el IETF (estándar de Internet).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es un estándar ISO.

**Pregunta 24:** ASN.1, estandarizado por ISO, es el lenguaje de representación de datos utilizado para formalizar certificados X.509.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 25:** PKCS#7 (Public-Key Cryptography Standards 7) especifica cómo enviar documentos cifrados y sus firmas. Algunos de sus conceptos se aplican en la seguridad del correo electrónico.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 26:** En un mensaje PKCS#7 de tipo "enveloped data", es posible firmar sobre un hash o digest del mensaje.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. No hay firma en "enveloped data".

**Pregunta 27:** En un mensaje PKCS#7 de tipo "enveloped data", el algoritmo de firma debe ser RSA.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. No hay firma en "enveloped data".

**Pregunta 28:** En un mensaje PKCS#7 de tipo "signed data", no es posible firmar sobre un hash o digest del mensaje.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. La norma recomienda cifrar un digest.

**Pregunta 29:** En un mensaje PKCS#7, la clave simétrica no se envía, ya que se supone que se transfiere por medios no electrónicos.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Lo que especifica PKCS#7 es cómo enviar, cifrada, la clave simétrica.

**Pregunta 30:** Existen mensajes PKCS#7 que definen cómo enviar una clave pública con una clave simétrica.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. PKCS#7 especifica cómo enviar la clave simétrica cifrada con una clave asimétrica.

**Pregunta 31:** En PKCS#7, "signedAndEnvelopedData" es simplemente añadir "signedData" a "EnvelopedData".
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. "signedAndEnvelopedData" es más complejo, es "envelopedData" + doble cifrado (firma cifrada con clave de contenido) del resumen del mensaje (message digest).

**Pregunta 32:** PKCS#7 (Cryptographic Message Syntax) es una de las pocas (menos de 20) reglas PKCS.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. Solo hay reglas numeradas de la #1 a la #15, y faltan 3.

**Pregunta 33:** PKCS#7 (Cryptographic Message Syntax) es una de cientos de reglas PKCS.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Solo hay reglas numeradas de la #1 a la #15, y faltan 3.

### SEGURIDAD EN LA CAPA DE APLICACIÓN

**Pregunta 1:** La seguridad de HTTPS puede lograrse añadiendo seguridad a TCP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 2:** Existe una nueva versión del protocolo TLS (TLSv1.3) que reduce el número de pasos en la fase de negociación (handshake).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 3:** La versión 1.3 del protocolo TLS (TLSv1.3) aumenta, respecto a la versión anterior, el número de fases en la negociación inicial para mejorar el nivel de seguridad.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Reduce el número de fases para reducir la sobrecarga (overhead).

**Pregunta 4:** En TLSv1.3, los certificados solo son obligatorios para el servidor.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 5:** En TLSv1.3, los certificados son obligatorios para el cliente y opcionales para el servidor.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es al revés.

**Pregunta 6:** En TLSv1.3 es obligatorio que el servidor presente un certificado, mientras que el certificado del cliente no siempre es obligatorio.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 7:** En TLSv1.3, ya no se utilizan certificados porque la clave simétrica se cifra con algoritmos Diffie-Hellman.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Los certificados se utilizan para identificar a las partes.

**Pregunta 8:** En TLSv1.3, la clave simétrica puede cifrarse con algoritmos Diffie-Hellman, pero en este caso, debe indicarse durante la fase de negociación.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Los algoritmos Diffie-Hellman se utilizan siempre.

**Pregunta 9:** TLSv1.3 soporta 5 suites de cifrado. TLS_AES_128_GCM_SHA256 es un ejemplo de suite.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 10:** TLSv1.3 soporta 5 suites de cifrado. Todas ellas se basan en AES.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Hay una suite basada en CHACHA20 (cifrado de flujo).

**Pregunta 11:** No hay suites de cifrado en TLSv1.3 que soporten cifrado de flujo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Hay una suite basada en CHACHA20, pero no otros cifrados de flujo.

**Pregunta 12:** TLSv1.3 especifica una fase del protocolo de negociación que incluye autenticación y negociación de "cipher suite".
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 13:** En TLSv1.3, la clave simétrica se cifra con algoritmos Diffie-Hellman.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 14:** En TLSv1.3, la negociación de "cipher suite" es parte del protocolo de negociación (handshake).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 15:** Al menos dos de las 5 suites de cifrado en TLSv1.3 soportan cifrado de flujo (no solo cifrado de bloque).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Hay una suite basada en CHACHA20, pero no otros cifrados de flujo.

**Pregunta 16:** TLSv1.3 especifica una fase del protocolo de negociación que incluye autenticación, pero la negociación de "cipher suite" queda fuera del protocolo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. La negociación de "cipher suite" es parte del protocolo de negociación.

**Pregunta 17:** La principal diferencia entre TLSv1.2 y TLSv1.3 es que en la primera, nunca se envían certificados desde el cliente.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Los certificados del cliente son posibles en ambos casos.

**Pregunta 18:** En TLSv1.3, la clave simétrica siempre se cifra con algoritmos Diffie-Hellman durante la fase de negociación.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 19:** Una de las 5 posibles suites de cifrado en TLSv1.3 es un caso particular de cifrado de flujo, mientras que las otras son casos de cifrado de bloque.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 20:** QUIC ("A UDP-Based Multiplexed and Secure Transport") no proporciona su propio mecanismo de seguridad. Por lo tanto, necesitamos añadir un mecanismo de seguridad sobre él.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. En QUIC se proporcionan mecanismos de seguridad similares a TLSv1.3.

**Pregunta 21:** QUIC ("A UDP-Based Multiplexed and Secure Transport") proporciona un nivel de seguridad equivalente a TLSv1.3.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 22:** Para tener un protocolo seguro, no necesitamos añadir una capa TLSv1.3 a una implementación de QUIC ("A UDP-Based Multiplexed and Secure Transport").
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. La seguridad equivalente ya está proporcionada en QUIC.

**Pregunta 23:** QUIC estandariza cómo combinarlo con cualquier protocolo de aplicación.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Por el momento, solo estandariza cómo combinarlo con HTTP, que es HTTP/3.

**Pregunta 24:** Uno de los objetivos en el diseño de QUIC ha sido reducir la latencia en la fase de establecimiento de la conexión.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 25:** Una limitación de QUIC ("A UDP-Based Multiplexed and Secure Transport") es que la seguridad debe añadirse encima (por ejemplo, añadiendo TLSv1.3).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. TLSv1.3 está incluido en QUIC.

**Pregunta 26:** Las funcionalidades de TLSv1.3 están incluidas en QUIC ("A UDP-Based Multiplexed and Secure Transport").
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 27:** Las características de seguridad de QUIC ("A UDP-Based Multiplexed and Secure Transport") incluyen un proceso de negociación equivalente al de TLSv1.3.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 28:** HTTP/3 es "HTTP sobre QUIC". Por lo tanto, no se utiliza TCP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 29:** HTTP/3 es "HTTP sobre QUIC". El problema es que se pierden las nuevas características de HTTP/2.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Las características de HTTP/2 están incluidas.

**Pregunta 30:** El protocolo HTTP/3 identifica las características de HTTP/2 que son absorbidas por QUIC, y describe cómo las extensiones de HTTP/2 pueden ser portadas a HTTP/3.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 31:** S/MIME es MIME enviado sobre PKCS#7 (tipo enveloped data).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

### SEGURIDAD XML

**Pregunta 1:** XML Encryption es una recomendación del W3C, pero XML Signature no lo es.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. XML Signature también es una recomendación del W3C.

**Pregunta 2:** XML Encryption siempre proporciona no repudio.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Necesitamos algo más, como un tercero de confianza.

**Pregunta 3:** El contenido cifrado obtenido con XML Encryption siempre se incluye en el documento resultante del proceso de cifrado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Podría ser externo y estar referenciado con el elemento `xenc:CipherReference`.

**Pregunta 4:** El contenido cifrado obtenido con XML Encryption puede ser referenciado desde el propio documento XML, en lugar de ser incluido en el documento resultante del proceso de cifrado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 5:** Si los datos cifrados se incluyen en XML Encryption, están dentro del elemento `CipherValue`, codificando en base64 la secuencia de octetos cifrados.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 6:** En XML Encryption, es posible utilizar el elemento `xenc:CipherReference` para referirse a un resultado del cifrado que es externo al documento.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 7:** El contenido cifrado obtenido con XML Encryption no siempre se incluye en el documento resultante del proceso de cifrado. Es posible utilizar el elemento `xenc:CipherReference` para referirse a un documento externo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 8:** Una firma destacada (detached) en XML Signature significa que el elemento de firma puede, opcionalmente, mantenerse fuera del documento XML firmado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Siempre está fuera del documento.

**Pregunta 9:** Una firma destacada (detached) en XML Signature significa que el elemento de firma está fuera del documento XML firmado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 10:** En XML Signature, en el caso de una firma destacada, el elemento de firma está en la raíz del elemento XML firmado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Está fuera del documento.

**Pregunta 11:** En XML Signature, en el caso destacado (detached), el elemento de firma no está en el mismo documento XML que se firma.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 12:** En una firma XML destacada, el documento firmado se referencia desde el elemento `Reference`, que forma parte del elemento `Signature`.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 13:** En XML Signature, el algoritmo de firma que genera el elemento `SignatureValue` se aplica a la canonización del elemento `SignedInfo` del elemento `Signature`.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 14:** En XML Signature, tanto en los casos envueltos (enveloped) como en los envolventes (enveloping), el elemento de firma se incluye en el documento XML firmado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 15:** En XML Signature, si un elemento de firma forma parte de otro elemento, esto significa que la firma es envolvente (enveloping).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es envuelta (enveloped).

**Pregunta 16:** En XML Signature, el algoritmo de firma que genera el elemento `SignatureValue` se aplica directamente sobre el Digest del documento XML.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Se aplica sobre la canonización del elemento `SignedInfo`, que incluye el método de canonización, el método de firma, el URI y el propio Digest.

**Pregunta 17:** En XML Signature, el algoritmo de firma que genera el elemento `SignatureValue` se aplica al elemento `SignedInfo` (su canonización), que incluye más elementos que solo el Digest del documento XML a firmar.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. Se aplica sobre la canonización del elemento `SignedInfo`, que incluye el método de canonización, el método de firma, el URI y el propio Digest.

**Pregunta 18:** En XML Signature, el algoritmo de firma que genera el elemento `SignatureValue` se aplica a la canonización del elemento `SignedInfo`, que incluye el método de canonización, el método de firma, el URI y el Digest.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 19:** En XML Signature, el elemento Digest es el dato sobre el cual se aplica el algoritmo de firma.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El algoritmo de firma se aplica sobre el elemento `SignedInfo`, que incluye los métodos de canonización y firma, el URI y el Digest.

**Pregunta 20:** En XML Signature, el Digest del documento a firmar se incluye en el elemento `SignedInfo`.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 21:** En XML Signature, el Digest del documento a firmar se incluye en el elemento `SignedInfo` solo cuando la firma es envuelta (enveloped) o envolvente (enveloping).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Se incluye en todos los casos.

**Pregunta 22:** En XML Signature, cuando se utiliza RSA, el cifrado RSA con la clave secreta del firmante se aplica a la canonización del elemento `SignedInfo`.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 23:** En XML Signature, en el caso envolvente (enveloping), el elemento de firma se incluye en la parte inferior del árbol del documento XML firmado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El XML Signature es el elemento raíz, y el documento firmado está dentro.

**Pregunta 24:** Una firma destacada (detached) en XML Signature significa que el elemento de firma está al final del documento XML firmado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Está fuera del documento XML firmado.

**Pregunta 25:** En XML Signature, tanto en los casos envueltos (enveloped) como en los envolventes (enveloping), el elemento de firma se incluye en el documento XML firmado solo cuando el elemento incluido está activado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Siempre se incluye. No existe tal "elemento incluido".

### PROTOCOLOS DE SEGURIDAD ESPECÍFICOS

**Pregunta 1:** No es posible expresar un token SAML en XML.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Un token SAML (aserción) se expresa e intercambia en XML.

**Pregunta 2:** Las "Aserciones SAML" son estructuras de datos representadas en XML.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 3:** En SAML, los usuarios se identifican ante un Proveedor de Servicios que, posteriormente, se comunica con un Proveedor de Identidad en nombre del usuario.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Los usuarios se identifican ante un Proveedor de Identidad independientemente de cuándo se comuniquen con el Proveedor de Servicios.

**Pregunta 4:** En SAML, el usuario se identifica ante un Proveedor de Identidad.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 5:** En SAML, el usuario debe conectarse inicialmente a un Proveedor de Identidad antes de acceder al Proveedor de Servicios.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El usuario puede empezar tanto por el IdP como por el SP.

**Pregunta 6:** En SAML, el Proveedor de Identidad y el Proveedor de Servicios siempre se comunican directamente entre ellos cuando un usuario quiere acceder a un recurso en el Proveedor de Servicios.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. En algunos casos, la comunicación entre IdP y SP se realiza a través del usuario.

**Pregunta 7:** En SAML, cuando un usuario quiere acceder a un recurso en un Proveedor de Servicios, el Proveedor de Identidad y el Proveedor de Servicios se comunican a través del usuario.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 8:** Un navegador que implemente SAML necesitará transferir información entre un proveedor de identidad y un proveedor de servicios. Para este propósito, utilizará el método POST cuando use HTTP.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 9:** El protocolo OAuth 2.0 es totalmente compatible con su versión anterior (protocolo OAuth 1.0).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso.

**Pregunta 10:** El protocolo OAuth 2.0 se implementa sobre HTTP, y una respuesta podría incluir información JSON o datos XML en su cuerpo.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 11:** OAuth es un protocolo de autorización.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 12:** En OAuth 2.0, el "Authorization code" es un tipo de "Authorization grant".
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 13:** En OAuth 2.0, el "redirect_uri" es parte del "Access token request".
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 14:** Con el protocolo OAuth 2.0, la contraseña del usuario nunca se comparte con la aplicación.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 15:** El protocolo OAuth 2.0 protege la contraseña del usuario cifrándola cuando se comparte.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. La contraseña nunca se comparte.

**Pregunta 16:** El protocolo OAuth 2.0 comparte la contraseña de los usuarios con la aplicación que actúa en su nombre, pero esto se hace de forma segura para que nadie más pueda tener acceso a la contraseña.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. La contraseña no se comparte.

**Pregunta 17:** El protocolo OAuth 2.0 no comparte normalmente la contraseña de los usuarios con la aplicación que actúa en su nombre. Cuando es necesario, esto se hace en modo cifrado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. La contraseña nunca se comparte.

**Pregunta 18:** Resource Owner, Resource Server y Client Application son ejemplos de los roles definidos por OAuth 2.0.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 19:** Dos de las características del protocolo OAuth 2.0 son que permite a los usuarios aprobar que una aplicación actúe en su nombre y que la contraseña no se comparte con la aplicación.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 20:** En OAuth 2.0, el "scope" es parte de la "Authorization response".
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es parte del "Authorization request".

**Pregunta 21:** Un "token endpoint" es utilizado por el cliente para intercambiar una concesión de autorización (authorization grant) por un token de acceso, típicamente con autenticación del cliente.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 22:** El cuerpo de una respuesta de token de acceso en OAuth 2.0 puede incluir una cadena JSON.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 23:** OpenID Connect es una capa simple para gestionar la identidad sobre OAuth 2.0.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 24:** OpenID Connect proporciona autorización, por lo que es muy útil usarlo en combinación con OAuth 2.0, que proporciona autenticación.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es al revés.

**Pregunta 25:** Los JSON Web Tokens (JWT) pretenden ser una simplificación de XML.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Están simplificando SAML.

**Pregunta 26:** Una estructura JWT es una secuencia de caracteres ASCII.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero. Está codificada con BaseUrl.

**Pregunta 27:** En los JSON Web Tokens (JWT), información como el "algoritmo de firma/descifrado" está dentro de la Cabecera (Header), mientras que las reclamaciones (claims) forman parte de la Carga Útil (Payload).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 28:** La estructura JWT está codificada en Base64Url.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 29:** El estándar Encrypted JWT recomienda algoritmos de cifrado de contenido, pero no algoritmos de cifrado de clave.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Recomienda ambos.

**Pregunta 30:** En el Encrypted JWT no hay cabecera protegida.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso.

**Pregunta 31:** Al igual que para XML, JSON tiene su propio "JSON Web Signature" y "JSON Web Encryption", también estandarizados por el W3C.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Está estandarizado por el IETF.

**Pregunta 32:** Una estructura JWT contiene una Cabecera, la Carga Útil y una Firma. Las tres son obligatorias.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. La firma es opcional.

**Pregunta 33:** Un Encrypted JWT (JWE) contiene una Cabecera protegida, una Clave cifrada (simétrica), un Vector de inicialización, los Datos cifrados (texto cifrado) y una Etiqueta de autenticación. El vector y la etiqueta son opcionales, mientras que el resto son obligatorios.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

### PRIVACIDAD Y CONTROL DE ACCESO

**Pregunta 1:** Los controles de privacidad que reducen la Información de Identificación Personal (PII) son ejemplos de Tecnologías de Mejora de la Privacidad (PETs).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 2:** Las Tecnologías de Mejora de la Privacidad (PETs) ayudan a controlar el acceso a la Información de Identificación Personal (PII).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 3:** La Información de Identificación Personal (PII) es aquella que puede distribuirse libremente, ya que no afecta a la privacidad de sus propietarios.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Justo lo contrario: es la información que debe protegerse.

**Pregunta 4:** El nombre de una persona puede considerarse Información de Identificación Personal (PII), mientras que el número de su documento de identidad no se considera PII.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Ambos son PII ya que identifican al usuario.

**Pregunta 5:** Los datos de salud no se consideran Información de Identificación Personal (PII), por lo que no deben protegerse.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Son PII sensibles.

**Pregunta 6:** Las herramientas de anonimización y seudonimización son ejemplos de PETs (Tecnologías de Mejora de la Privacidad).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 7:** La anonimización es un ejemplo de PET (Tecnología de Mejora de la Privacidad), mientras que la seudonimización no lo es.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. La seudonimización también es una PET.

**Pregunta 8:** El PDP (Policy Decision Point) necesita información del PAP (Policy Administration Point) y del PIP (Policy Information Point) para tomar una decisión de acceso.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 9:** El PEP (Policy Enforcement Point) es el que controla el acceso a los recursos, mientras que el PDP (Policy Decision Point) es el que toma la decisión basándose en las políticas y otra información.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 10:** En los sistemas de control de acceso, el PEP (Policy Enforcement Point) no siempre necesita un PDP (Policy Decision Point).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Ambos son módulos que trabajan juntos.

**Pregunta 11:** Los usuarios solicitan acceso al PEP (Policy Enforcement Point), pero el módulo que trabaja con las políticas para permitir o denegar el acceso es el PDP (Policy Decision Point).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 12:** El Control de Acceso Discrecional (DAC) se basa en el uso de etiquetas de seguridad (niveles y categorías).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Este es el Control de Acceso Obligatorio (MAC). El DAC se basa en listas de control de acceso (ACL).

**Pregunta 13:** El Control de Acceso Obligatorio (MAC) se basa en el uso de etiquetas de seguridad (niveles y categorías).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 14:** Las etiquetas de seguridad se utilizan en MAC (Mandatory Access Control), pero no en DAC (Discretionary Access Control).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 15:** RBAC significa Control de Acceso Basado en Registros (Record Based Access Control) y, como su nombre indica, se basa en "registros" con información de los usuarios.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. La "R" se refiere a "Rol" (Role Based Access Control).

**Pregunta 16:** ABAC es un mecanismo de Control de Acceso basado en atributos.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 17:** XACML (eXtensible Access Control Markup Language) es un estándar del W3C.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es de OASIS.

**Pregunta 18:** XACML define elementos como Rule, Policy y PolicySet.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 19:** XACML es útil para el modelo RBAC, pero no para el ABAC.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso.

**Pregunta 20:** XACML es un lenguaje basado en XML utilizado para representar licencias.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es para representar reglas, como políticas de privacidad, por ejemplo.

**Pregunta 21:** XACML es un lenguaje para definir políticas de privacidad utilizando reglas.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 22:** XACML es un estándar que permite expresar reglas para el control de acceso.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 23:** Con XACML somos capaces de especificar las reglas que controlan el acceso a un recurso específico.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 24:** XACML es un software que permite controlar el acceso a los datos.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. No es un software, sino una especificación XML.

**Pregunta 25:** En XACML, el Algoritmo de Combinación de Reglas (Rule Combining Algorithm) permite decidir cómo combinar mecanismos de cifrado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Permite expresar cómo combinar varias reglas en una Política.

**Pregunta 26:** XACML incluye el elemento Rule Combining Algorithm dentro de una Política (Policy), ya que puede haber varias reglas diferentes dentro de una política.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 27:** XACML es una extensión de XML para añadir seguridad a la comunicación.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. XACML define reglas, como por ejemplo reglas de privacidad.

### XACML y ejemplos

**Pregunta 1:** La siguiente línea de una Regla XACML: `<Rule RuleId="urn:oasis:names:tc:xacml:3.0:RuleSAM" Effect="Permit">` establece, con el atributo Effect, que el acceso no será permitido si la Regla se valida.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El acceso será permitido.

**Pregunta 2:** La siguiente línea de una Política XACML: `<Rule RuleId="urn:oasis:names:tc:xacml:3.0:RuleSAM" Effect="Permit">` indica con el valor del atributo Effect que incluso si lo que especifica la regla no se cumple, el acceso será permitido.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El acceso no se permite si no se cumple lo que especifica la regla.

**Pregunta 3:** La siguiente línea de un documento XML: `<Rule RuleId="urn:oasis:names:tc:xacml:3.0:RuleSAM" Effect="Permit">` no es un inicio válido de una Regla XACML, porque el atributo Effect debería estar en un elemento XML diferente.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Es válido.

**Pregunta 4:** Dado el siguiente fragmento de una Regla XACML: `<Rule RuleId="urn:oasis:names:tc:xacml:3.0:RuleSAM" Effect="Deny"> ...` si solicitamos la acción "Modify", será autorizada.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. El Efecto es Denegar (Deny), por lo que no será autorizada.

**Pregunta 5:** Dado el fragmento anterior de una Regla XACML, el elemento Match especifica que la Solicitud XACML debe tener exactamente la cadena "Modify" como "acción" para aplicar el "Efecto" indicado.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 6:** Dado el siguiente fragmento de una Regla XACML: `<Rule RuleId="urn:oasis:names:tc:xacml:3.0:RuleSAM" Effect="Permit"> ...` si solicitamos la acción Print, será autorizada.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

**Pregunta 7:** La siguiente línea de una Regla XACML: `<Rule RuleId="urn:oasis:names:tc:xacml:3.0:RuleSAM" Effect="Permit">` establece, con el atributo Effect, que el acceso no será permitido si la Regla se valida.
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Falso. Establece que el acceso será permitido.

**Pregunta 8:** Si queremos especificar una regla XACML para que un "Investigador" (Researcher) obtenga un archivo que contenga información genómica de un cromosoma específico, la regla XACML correspondiente podría tener 3 elementos Match, uno para el recurso (información del cromosoma), otro para la acción (get) y otro para el usuario (Investigador, como un Rol).
- [ ] Verdadero
- [ ] Falso
> **Respuesta:** Verdadero.

