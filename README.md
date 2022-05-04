# Tarea N°1 Sistemas Distribuidos 2022

## __Integrantes__
Sebastián Garrido,
Jorge Fernández

## __Problemática__
R-GGB Spa es una empresa tradicional dedicada al rubro del e-commerce, que, debido a los diversos cambios tecnológicos,no se encuentra a la vanguardia de los nuevos requerimientos del sistema. Esta empresa realiza sus operaciones a través de SOAP, desarrollado en lenguaje C y Assembly.
Debido a un creciente aumento en usuarios en su plataforma, se traduce en un aumento en las ventas pero también
en un aumento en la carga de los servidores. La arquitectura de su sistema se basa en el mítico cliente-servidor (C-S) de toda la vida, con un monolito recibiendo las requests (consultas) de los usuarios a toda hora. El explosivo crecimiento de la plataforma ha hecho ver a los ingenieros de JR-GGB Spa múltiples problemas de rendimiento y escalabilidad en el sistema. Ante esta situación la empresa ha decidido contactarlo para resolver algunos de estos problemas. Las actividades que usted tendrá que realizar para dar solución a este problema consisten en implementar un sistema de inventarios que consta de los siguientes módulos: buscador, cache e inventario.

## __Modulos__
### __Redis__
Redis es un almacén de estructura de datos de valores de clave en memoria rápido y de código abierto. Redis también incorpora un conjunto de estructuras de datos en memoria verátiles que permiten crear con facilidad diversas aplicaciones personalizadas. Algunos casos de uso principal de Redis se encuentra el almacenamiento en caché, administrar sesiones y las clasificaciones.
En nuestro archivo "docker-compose" contamos con la siguiente configuración:
- Nombre del Servicio:
    - redis
- Nombre del Contenedor:
    - redis
- Imagen usada:
    - bitnami/redis:6.0
- Variable de entorno:
    - REDIS_MAXMEMORY=1mb
    - REDIS_MAXMEMORY_POLICY=allkeys-lru
    - ALLOW_EMPTY_PASSWORD=yes
- Puerto:
    - 6379
- Comandos:
    - command: ["redis-server", "--bind", "redis", "--maxmemory 1mb", "--maxmemory-policy allkeys-lru"]
Este ultimo noas permite iniciar el servidor con los parametros de politica de remoción y memoria que nosotros deseamos.

## __Comparación entre algoritmos__
