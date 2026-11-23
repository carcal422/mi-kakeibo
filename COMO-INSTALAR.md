# Mi Kakeibo: de la descarga al celular

Tiempo total: unos 30 minutos, una sola vez. Las partes A a D las haces **tú desde el PC**. La parte E la hace **cada uno en su celular**.

---

## A. Descargar y descomprimir (PC)
1. En Claude, toca el archivo **mi-kakeibo-version-4.zip** y descárgalo. Queda en tu carpeta **Descargas**.
2. En Windows: clic derecho sobre el .zip → **Extraer todo…** → **Extraer**.
3. Se abre la carpeta **mi-kakeibo-version-4**. Adentro debe haber:
   `index.html`, `config.js`, `manifest.json`, `sw.js`, `COMO-INSTALAR.md` y la carpeta `icons`.
   No cambies nombres ni muevas nada de lugar.

## B. Publicarla gratis en GitHub Pages (PC)
1. Entra a **github.com** e inicia sesión (o crea una cuenta gratis).
2. Arriba a la derecha, **+ → New repository**. Nombre: `mi-kakeibo`, opción **Public**, y toca **Create repository**.
3. Toca el enlace **uploading an existing file**.
4. Abre la carpeta **mi-kakeibo-version-4**, selecciona **todo lo de adentro** (Ctrl+A), incluida la carpeta `icons`, y arrástralo a la página de GitHub.
   Arrastra lo que está **dentro** de la carpeta, no la carpeta completa.
5. Abajo toca **Commit changes**.
6. Ve a **Settings → Pages**. En *Branch* elige `main` y `/ (root)` y toca **Save**.
7. Espera 1 o 2 minutos y recarga la página. Arriba aparece tu enlace: `https://TU-USUARIO.github.io/mi-kakeibo/`. **Cópialo:** lo necesitas en la parte C.

## C. Crear el permiso de Google (PC, unos 10 minutos)
1. Entra a **console.cloud.google.com** con tu Gmail. Arriba, en el selector de proyecto, toca **Proyecto nuevo**, llámalo `Mi Kakeibo` y créalo. Verifica que quede seleccionado.
2. En el buscador de arriba escribe **Google Drive API** → **Habilitar**. Luego busca **Google Picker API** → **Habilitar**.
3. Busca **Google Auth Platform** (o *Pantalla de consentimiento de OAuth*) → **Comenzar**:
   - Nombre: `Mi Kakeibo`. Correo de asistencia: el tuyo.
   - Público: **Externo**. Contacto: tu correo. Acepta y toca **Crear**.
4. **Acceso a datos → Agregar o quitar permisos.** Busca y marca estos tres, y luego toca **Actualizar** y **Guardar**:
   - `.../auth/drive.appdata`
   - `.../auth/drive.file`
   - `.../auth/userinfo.email`
5. **Público → Usuarios de prueba → Agregar usuarios:** escribe tu Gmail y el de Stephanny.
6. **Clientes → Crear cliente:**
   - Tipo: **Aplicación web**.
   - **Orígenes autorizados de JavaScript:** `https://TU-USUARIO.github.io`
   - **URI de redireccionamiento autorizados:** `https://TU-USUARIO.github.io/mi-kakeibo/` (con la `/` al final)
   - Toca **Crear** y copia el **ID de cliente**, que termina en `.apps.googleusercontent.com`.
7. **APIs y servicios → Credenciales → Crear credenciales → Clave de API.** Copia la clave (`AIza…`). Luego toca **Editar clave**:
   - Restricción de aplicación: **Sitios web** → `https://TU-USUARIO.github.io/*`
   - Restricción de API: solo **Google Picker API**. Guarda.
8. Toca el menú ⋮ de arriba a la derecha → **Configuración del proyecto** y copia el **Número del proyecto**, que son solo números.

## D. Pegar los 3 datos en la app (PC)
1. En tu repositorio de GitHub abre **config.js** y toca el lápiz ✏️.
2. Pega cada dato entre sus comillas:
   ```
   googleClientId: '1234-abc.apps.googleusercontent.com',
   googleApiKey: 'AIza...',
   googleAppId: '123456789012'
   ```
3. Toca **Commit changes** y espera 1 minuto.

## E. Instalarla en cada celular
**Android (Camilo):** abre el enlace en **Chrome** → menú ⋮ → **Agregar a pantalla principal → Instalar**.

**iPhone (Stephanny):** abre el enlace en **Safari**, no en Chrome → botón **Compartir ⬆️ → Agregar a inicio → Agregar**.
Usa la app **siempre desde el ícono**, nunca desde una pestaña de Safari.

**Primera vez que la abren (cada uno):**
1. Sale el tutorial de 6 pasos. Léanlo.
2. **Más → Ajustes y respaldo → Conectar mi Google Drive**, y entra con tu Gmail. Si Google dice *"Google no verificó esta app"*, toca **Continuar** (o *Configuración avanzada → Ir a Mi Kakeibo*). Es normal y sale solo la primera vez.
3. **Planear el mes** y **agregar sus cuentas** (Inicio → "¿Dónde tienes tu plata?").

**El espacio "Casa":**
1. **Camilo:** **Más → Espacios compartidos → Crear un espacio**. Escribe el nombre, tu nombre y el Gmail de Stephanny, y toca **Crear**.
2. **Stephanny:** le llega un correo de Google Drive. En su app: **Más → Espacios compartidos → Unirme a uno → Buscar en mi Google Drive**, y elige "Mi Kakeibo · Casa".
3. **Prueba:** uno anota un gasto en Casa y, en máximo un minuto, al otro le debe aparecer con la app abierta.

---

## Si algo falla
- **"Falta configurar…":** revisa que los 3 datos de config.js estén bien pegados y entre comillas.
- **Error de Google al conectar (redirect_uri_mismatch):** el enlace del paso C.6 debe ser **idéntico** a tu enlace de GitHub, con la `/` final.
- **"Acceso bloqueado" o no deja entrar:** falta agregar ese Gmail en **Usuarios de prueba** (C.5).
- **No aparecen los cambios del otro:** los dos deben tener Drive conectado (✅ arriba en Inicio). Toca el ícono de la nube → **Respaldar ahora**.
- **Para actualizar la app más adelante:** sube los archivos nuevos a GitHub y, en `sw.js`, cambia `mi-kakeibo-v4` por `mi-kakeibo-v5`.
