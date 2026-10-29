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

A continuación se detalla la estructura modular del proyecto sacado de cmd:


```text
Proyecto_Despliegue/
│
├── public/                  # Directorio público expuesto por el servidor web
│   ├── css/                 # Directorio de hojas de estilo
│   │   └── style.css        # Reglas de estilo CSS de la interfaz
│   ├── js/                  # Directorio de scripts del cliente
│   │   └── main.js          # Lógica de interacción en JavaScript
│   └── index.php            # Punto de entrada de la aplicación PHP
│
├── sql/                     # Scripts de gestión de base de datos
│   └── init.sql             # Esquema e inicialización de la base de datos
│
├── .gitignore               # Configuración de exclusión de rastreo (IDE, credenciales)
├── LOG.md                   # Bitácora de incidencias, comandos y evidencias
└── README.md                # Documentación técnica del repositorio
```


### Descripción de módulos principales

- public/index.php: Fichero principal servido por la aplicación PHP que incluye la estructura HTML base y el registro de autoría.
- public/js/main.js: Módulo JavaScript cliente encargado del procesamiento de datos y la gestión del contador.
- sql/init.sql: Script de definición de datos (DDL) para la inicialización de la base de datos.
- LOG.md: Documento técnico de trazabilidad de ramas, respuestas al flujo de trabajo y registro de resolución de conflictos.

### Nuestro trabajo 

*   commit efa1aa59242ff55ebcf3763c642eb541f4b6548a (HEAD -> main, origin/main, origin/HEAD)
|\  Merge: 8134035 1a23b41
| | Author: ZoraidaMourao <zoraidamourao@gmail.com>
| | Date:   Thu Oct 29 09:01:44 2026 +0100
| |
| |     Merge pull request #12 from alexvfp/feat/basic-styling
| |
| |     Feat/basic styling actualizar index y css
| |
| *   commit 1a23b41ea29f8211284f916c60a8985957cbe09c (origin/feat/basic-styling)
| |\  Merge: a714c75 8134035
| |/  Author: ZoraidaMourao <zoraidamourao@gmail.com>
|/|   Date:   Thu Oct 29 09:00:05 2026 +0100
| |
| |       Actualizar index y css
| |
* |   commit 8134035541d30ca780a564398807ebfa8c6a0b41
|\ \  Merge: df29daa 7813155
| | | Author: alexvfp <alexzvfp@gmail.com>
| | | Date:   Thu Oct 29 08:58:32 2026 +0100
| | |
| | |     Merge pull request #11 from alexvfp/preguntas
| | |
| | |     Preguntas
| | |
| * | commit 7813155d3f3aa8ed5390cb05fe8b065249be7818 (origin/preguntas, preguntas)
| | | Author: alexvfp <alexzvfp@gmail.com>
| | | Date:   Thu Oct 29 08:53:18 2026 +0100
| | |
| | |     Cambiar nombre imagen captura.png
| | |
| * | commit 6e05c76cc4dd1f738378c61d5b950a0e48bef8d0
| | | Author: alexvfp <alexzvfp@gmail.com>
| | | Date:   Thu Oct 29 08:48:52 2026 +0100
| | |
| | |     Añadir imagen para LOG.md
| | |
| * | commit 91c211cd25391adee466c32a4cf54f2d47d18b38
| | | Author: alexvfp <alexzvfp@gmail.com>
| | | Date:   Wed Oct 28 14:00:25 2026 +0100
| | |
| | |     Añadir imagen de ramas
| | |
* | |   commit df29daa66ec5dbc51c6f8731adab51ceb14fbbb0
|\ \ \  Merge: 5ccc7d4 9b937e3
| | | | Author: Adrián Rodríguez Román <adrian.rodriguez.roman@gmail.com>
| | | | Date:   Thu Oct 29 08:49:59 2026 +0100
| | | |
| | | |     Merge branch 'docs/setup-guide'
| | | |
| * | | commit 9b937e358587547928ddfe803271c8c238371d84 (origin/docs/setup-guide)
| | | | Author: Adrián Rodríguez Román <adrian.rodriguez.roman@gmail.com>
| | | | Date:   Thu Oct 29 08:47:40 2026 +0100
| | | |
| | | |     README.MD
| | | |
* | | |   commit 5ccc7d46b1879b3bf1a0f5f9e2255616cfee90bd
|\ \ \ \  Merge: 7aee2da d5adbec
| | |/ /  Author: alexvfp <alexzvfp@gmail.com>
| |/| |   Date:   Wed Oct 28 13:59:57 2026 +0100
| | | |
| | | |       Merge pull request #10 from alexvfp/preguntas
| | | |
| | | |       Crear LOG.md
| | | |
| * | | commit d5adbec6c55737411ab967dec72f5c4a8b54c8d4
| | | | Author: alexvfp <alexzvfp@gmail.com>
| | | | Date:   Wed Oct 28 13:55:30 2026 +0100
| | | |
| | | |     Crear LOG.md
| | | |
* | | |   commit 7aee2dab7ccbd132031243206b306867f261c9ab
|\ \ \ \  Merge: 7532242 d695738
| |/ / /  Author: Adrián Rodríguez Román <adrian.rodriguez.roman@gmail.com>
|/| / /   Date:   Wed Oct 28 13:39:35 2026 +0100
| |/ /
| | |         Merge pull request #9 from alexvfp/docs/setup-guide
| | |
| | |         Añadido el README.md
| | |
| * | commit d6957384a276905e1350396d0faf277cdd08eb0d
|/ /  Author: Adrián Rodríguez Román <adrian.rodriguez.roman@gmail.com>
| |   Date:   Wed Oct 28 13:37:35 2026 +0100
| |
| |       Añadido el README.md
| |
* |   commit 753224246123a2136bc73455d69e546281e9e62d
|\ \  Merge: 1f27a26 0a341f9
| | | Author: ZoraidaMourao <zoraidamourao@gmail.com>
| | | Date:   Wed Oct 28 12:12:33 2026 +0100
| | |
| | |     Merge pull request #7 from alexvfp/docs/autor-zoraida
| | |
| | |     Añado el nombre de Zoraida
| | |
| * |   commit 0a341f998c333104fb995f44fffba82a0b5f8347 (origin/docs/autor-zoraida)
| |\ \  Merge: 3a3282a 1f27a26
| |/ /  Author: ZoraidaMourao <zoraidamourao@gmail.com>
|/| |   Date:   Wed Oct 28 12:11:16 2026 +0100
| | |
| | |       Merge branch 'main' into docs/autor-zoraida
| | |
* | |   commit 1f27a26b0246548a7cf155851fa7d788758bc51b
|\ \ \  Merge: 84e2271 755d83f
| | | | Author: alexvfp <alexzvfp@gmail.com>
| | | | Date:   Wed Oct 28 12:09:15 2026 +0100
| | | |
| | | |     Merge pull request #8 from alexvfp/docs/autor-alexander
| | | |
| | | |     Corregido Alexander y Adrián
| | | |
| * | |   commit 755d83fadfc5e3140381d54e8f5daf9aa774fa9a (origin/docs/autor-alexander)
| |\ \ \  Merge: 0023f7c 84e2271
| |/ / /  Author: alexvfp <alexzvfp@gmail.com>
|/| | |   Date:   Wed Oct 28 12:08:00 2026 +0100
| | | |
| | | |       Merge branch 'main' into docs/autor-alexander
| | | |
* | | |   commit 84e2271f67f7f5997345e269735e1d287f5554e9
|\ \ \ \  Merge: ff4694d 42e3252
| | | | | Author: Adrián Rodríguez Román <adrian.rodriguez.roman@gmail.com>
| | | | | Date:   Wed Oct 28 12:06:32 2026 +0100
| | | | |
| | | | |     Merge pull request #6 from alexvfp/docs/autor-adrianrrdev
| | | | |
| | | | |     Nombre de adrian añadido
| | | | |
| * | | | commit 42e3252e57d64b4098baf105377c7bafe566da60 (origin/docs/autor-adrianrrdev)
| | | | | Author: Adrián Rodríguez Román <adrian.rodriguez.roman@gmail.com>
| | | | | Date:   Wed Oct 28 12:01:18 2026 +0100
| | | | |
| | | | |     Nombre de adrian añadido
| | | | |
| | * | | commit 0023f7c78e0e5c39e5d3e0c2990742cb60280729 (docs/autor-alexander)
| | | | | Author: alexvfp <alexzvfp@gmail.com>
| | | | | Date:   Wed Oct 28 12:05:11 2026 +0100
| | | | |
| | | | |     Añadir nombre Alexander
| | | | |
| | * | |   commit df409520c0349a6d0c2d0823855dc0256bcfb242
| | |\ \ \  Merge: b71fbe8 ff4694d
| |_|/ / /  Author: alexvfp <alexzvfp@gmail.com>
|/| | | |   Date:   Fri Oct 23 13:57:56 2026 +0200
| | | | |
| | | | |       Merge branch 'main' of github.com:alexvfp/Proyecto_Despliegue
| | | | |
* | | | |   commit ff4694d4d2342b8d702e1f2d33c287794ba4dec0
|\ \ \ \ \  Merge: 7a4d002 1ebec2d
| | | | | | Author: alexvfp <alexzvfp@gmail.com>
| | | | | | Date:   Fri Oct 23 13:49:35 2026 +0200
| | | | | |
| | | | | |     Merge pull request #1 from alexvfp/fix/js-infinite-loop
| | | | | |
| | | | | |     Fix/js infinite loop
| | | | | |
| * | | | | commit 1ebec2d006d42ab85230f20943c3dbb11314cde0 (origin/fix/js-infinite-loop)
| | | | | | Author: Adrián Rodríguez Román <adrian.rodriguez.roman@gmail.com>
| | | | | | Date:   Fri Oct 23 12:33:36 2026 +0200
| | | | | |
| | | | | |     Arreglado el main.js por parte de adrianrrdev
| | | | | |
| * | | | | commit 6184d7c5f53c4c6a010c6e6f5752812fc5634da5
| |/ / / /  Author: Adrián Rodríguez Román <adrian.rodriguez.roman@gmail.com>
| | | | |   Date:   Fri Oct 23 12:30:40 2026 +0200
| | | | |
| | | | |       Arreglado el main.js por parte de adrianrrdev
| | | | |
* | | | |   commit 7a4d002915b245d25b8aded5d21026d774fa15c5
|\ \ \ \ \  Merge: 6a2de21 bc3c3dd
| | | | | | Author: ZoraidaMourao <zoraidamourao@gmail.com>
| | | | | | Date:   Fri Oct 23 13:48:27 2026 +0200
| | | | | |
| | | | | |     Merge pull request #3 from alexvfp/chore/limpieza-seguridad
| | | | | |
| | | | | |     Sacar del seguimiento config/db.php .txt basura y las carpetas .vscod…
| | | | | |
| * | | | | commit bc3c3ddf063a0767f9b3d3c3e976d52fe6d3e419 (origin/chore/limpieza-seguridad, chore/limpieza-seguridad)
| |/ / / /  Author: alexvfp <alexzvfp@gmail.com>
| | | | |   Date:   Fri Oct 23 12:33:04 2026 +0200
| | | | |
| | | | |       Sacar del seguimiento config/db.php .txt basura y las carpetas .vscode/ e .idea/
| | | | |
* | | | |   commit 6a2de217ab78194d7ad0655adbdd7ab8c3733e19
|\ \ \ \ \  Merge: 0962343 4ceedc5
| | | | | | Author: Adrián Rodríguez Román <adrian.rodriguez.roman@gmail.com>
| | | | | | Date:   Fri Oct 23 13:47:15 2026 +0200
| | | | | |
| | | | | |     Merge pull request #5 from alexvfp/revert-2-feat/basic-styling
| | | | | |
| | | | | |     "Crear css y enlazarlo con index.php"
| | | | | |
| * | | | | commit 4ceedc515a873266cff3d066811532ff840f5c92 (origin/revert-2-feat/basic-styling)
|/ / / / /  Author: Adrián Rodríguez Román <adrian.rodriguez.roman@gmail.com>
| | | | |   Date:   Fri Oct 23 13:45:14 2026 +0200
| | | | |
| | | | |       Revert "Crear css y enlazarlo con index.php"
| | | | |
* | | | |   commit 096234367a16319cb05d13c6d5dd44b3b41d56ce
|\ \ \ \ \  Merge: 9e4a6a1 4f2f89e
| |/ / / /  Author: ZoraidaMourao <zoraidamourao@gmail.com>
|/| | | |   Date:   Fri Oct 23 13:43:52 2026 +0200
| | | | |
| | | | |       Merge pull request #2 from alexvfp/feat/basic-styling
| | | | |
| | | | |       Crear css y enlazarlo con index.php
| | | | |
| | * | | commit b71fbe808dc8aaf8e5f2263b3456450d41996a78 (origin/fix/sql-syntax, fix/sql-syntax)
| |/ / /  Author: alexvfp <alexzvfp@gmail.com>
|/| | |   Date:   Fri Oct 23 13:35:51 2026 +0200
| | | |
| | | |       Corregir error de código línea 3
| | | |
| | * | commit 3a3282ae1dec66f7764d7e6ca17fbea290528710
| |/ /  Author: ZoraidaMourao <zoraidamourao@gmail.com>
|/| |   Date:   Wed Oct 28 12:04:59 2026 +0100
| | |
| | |       Añado el nombre de Zoraida
| | |
| | * commit a714c755ef54bee41089d73292c966cd3d5887f1
| | | Author: ZoraidaMourao <zoraidamourao@gmail.com>
| | | Date:   Thu Oct 29 08:48:55 2026 +0100
| | |
| | |     Cierro el punto y coma de la linea 10
| | |
| | * commit d74d18e95d2882d400096b4317687a34e42d4e27
| |/  Author: ZoraidaMourao <zoraidamourao@gmail.com>
| |   Date:   Wed Oct 28 11:49:11 2026 +0100
| |
| |       espacio porque la pantalla se apaga
| |
| * commit 4f2f89eebffaebbe39adecfa0114ff6ee843dde0
|/  Author: ZoraidaMourao <zoraidamourao@gmail.com>
|   Date:   Fri Oct 23 12:35:18 2026 +0200
|
|       Crear css y enlazarlo con index.php
|
* commit 9e4a6a1d9a699563d92cc5bc29669f13112233b4
  Author: alexvfp <alexzvfp@gmail.com>
  Date:   Fri Oct 23 12:10:08 2026 +0200

      Initial commit
(END)
| |   Date:   Wed Oct 28 11:49:11 2026 +0100
| |
| |       espacio porque la pantalla se apaga
| |
| * commit 4f2f89eebffaebbe39adecfa0114ff6ee843dde0
|/  Author: ZoraidaMourao <zoraidamourao@gmail.com>
|   Date:   Fri Oct 23 12:35:18 2026 +0200
|
|       Crear css y enlazarlo con index.php
|
* commit 9e4a6a1d9a699563d92cc5bc29669f13112233b4
  Author: alexvfp <alexzvfp@gmail.com>
  Date:   Fri Oct 23 12:10:08 2026 +0200

