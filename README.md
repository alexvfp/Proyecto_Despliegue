# Proyecto de Despliegue - Git y GitHub

Repositorio correspondiente al proyecto intermodular de despliegue y gestión de versiones mediante Git y GitHub. Este documento contiene la configuración inicial, las instrucciones de clonación y la arquitectura del repositorio.

## Integrantes del equipo

- Adrian Rodriguez - GitHub: adrianrrdev
- Zoraida Mourao - GitHub: zoraidamourao
- Alexander Arauco - GitHub: alexvfp

## Clonación del repositorio mediante SSH

Para clonar el repositorio localmente utilizando la sintaxis SSH de Git, ejecute el siguiente comando en la consola de comandos:


git clone git@github.com:alexvfp/Proyecto_Despliegue.git


Posteriormente, acceda al directorio del proyecto y verifique la estrategia de resolución de merges:

cd Proyecto_Despliegue
git config pull.rebase false


## Estructura de archivos y directorios

A continuación se detalla la estructura modular del proyecto:

text
Proyecto_Despliegue/
│
├── .gitignore             # Configuración de exclusión de rastreo de archivos (entornos IDE, credenciales)
├── README.md              # Documentación técnica del repositorio
├── LOG.md                 # Bitácora de incidencias, comandos ejecutados y evidencias de integración
│
├── public/                # Directorio público expuesto por el servidor web
│   ├── index.php          # Punto de entrada de la aplicación PHP
│   ├── css/               # Directorio de hojas de estilo
│   │   └── style.css      # Reglas de estilo CSS de la interfaz
│   └── js/                # Directorio de scripts del cliente
│       └── main.js        # Lógica de interacción en JavaScript
│
└── sql/                   # Scripts de gestión de base de datos
    └── init.sql           # Esquema e inicialización de la base de datos


### Descripción de módulos principales

- public/index.php: Fichero principal servido por la aplicación PHP que incluye la estructura HTML base y el registro de autoría.
- public/js/main.js: Módulo JavaScript cliente encargado del procesamiento de datos y la gestión del contador.
- sql/init.sql: Script de definición de datos (DDL) para la inicialización de la base de datos.
- LOG.md: Documento técnico de trazabilidad de ramas, respuestas al flujo de trabajo y registro de resolución de conflictos.