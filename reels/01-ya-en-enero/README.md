# Reel 1: "Ya en enero me pongo bien" (versión animada)

- **Archivo final:** `reel-ya-en-enero.mp4` · 1080×1920 · 30 fps · 50.4 s · H.264 + AAC
- **Portada:** `portada.png` (cuadro del gancho)
- **Tipo:** identificación → venta · cierre con palabra clave RECETAS por DM
- **Formato:** plantilla "Formato Reel AR" (100 BPM, compás de 2.4 s, Montserrat, paleta AR, logo solo al final, música y efectos generados en código)

## Storyboard por compás

| Compás | Tiempo | Escena | En pantalla |
|---|---|---|---|
| 1 | 0.0–2.4 s | **Gancho** sobre tu video de la pizza | SEGURO TE HA PASADO ESTO: / "YA EN ENERO ME PONGO BIEN." |
| 2 | 2.4–4.8 | Intro | NOV · DIC, son semanas de… POSADAS / TAMALES / COMER LO QUE HAYA |
| 3 | 4.8–7.2 | Intro | ENERO, barra que se vacía de 100% a 0%, Desde cero. Otra vez. |
| 4 | 7.2–9.6 | 01/03 Por qué pasa | 9:00 PM, tres tuppers VACÍOS, "Llegas cansado y no hay nada hecho." |
| 5 | 9.6–12.0 | 01/03 | ¿QUÉ CENO? → huevo, cereal, sándwich… PEDIR ALGO; "Decidir cansado = acabas pidiendo algo." |
| 6 | 12.0–14.4 | 01/03 | No te falta ~~FUERZA DE VOLUNTAD~~. Te falta ESTRUCTURA. |
| 7 | 14.4–16.8 | Bucle 1 (fondo carbón) | Lo que más te ayuda NO ES COMER MENOS. Es algo que haces el DOMINGO. Ahorita te digo. |
| 8 | 16.8–19.2 | 02/03 El domingo | 1 HORA. Dejas listo: PROTEÍNA · ARROZ · VERDURA. "La base de toda tu semana." |
| 9 | 19.2–21.6 | **Tu video de los tuppers** | ASÍ SE VE MI DOMINGO / TODA LA SEMANA LISTA. |
| 10 | 21.6–24.0 | Entre semana | SOLO ARMAS Y CALIENTAS, L M M J V que se llenan |
| 11 | 24.0–26.4 | Entre semana | 35 MIN o menos (regla de 0 a 60), "Con cosas del súper de siempre." |
| 12 | 26.4–28.8 | Bucle 2 (fondo carbón) | Pero ojo: NO DEJES DE IR A LA POSADA. Al final te digo cómo le hago yo. |
| 13 | 28.8–31.2 | 03/03 Modo posada | SÍ VAS. SÍ COMES. "Es diciembre. Se vale." |
| 14 | 31.2–33.6 | 03/03 | NO LLEGAS EN AYUNAS: desayuno y comida con proteína, luego la posada |
| 15 | 33.6–36.0 | 03/03 | Al día siguiente NO COMPENSAS matándote de hambre. Bowl con el recalentado y sigues. |
| 16 | 36.0–38.4 | Recetario | Contador de 1 a 16 RECETAS, "De 35 min o menos, con cosas del súper." |
| 17 | 38.4–40.8 | Recetario | 16 RECETAS + PLAN DEL DOMINGO + MODO POSADA. Con cabeza, con gusto. |
| 18–21 | 40.8–50.4 | CTA | Logo AR, @abrahamrdz.fit, COMENTA [RECETAS] con botón de enviar, "y te lo mando por DM." Estructura primero. |

## Caption sugerido

> Llega noviembre y siempre es lo mismo: "ya en enero me pongo bien".
> No te falta fuerza de voluntad, te falta estructura. Una hora el domingo cambia toda tu semana, y sí puedes ir a la posada.
> Comenta RECETAS y te mando el recetario por DM: 16 recetas, el plan del domingo y el modo posada.

## Ajustes al guion original

- El "sirviendo la tinga" se cambió por la toma real de tus tuppers (pollo, verdura, pasta y garbanzo).
- Se agregó "Es diciembre. Se vale." en el modo posada, para que suene a ti y no a regaño.
- "Llegas con menos hambre" (por comer proteína en el día) se dejó como efecto práctico, sin prometer nada más.
- No hay voz: el reel se entiende solo con el texto en pantalla y la música. Si quieres, grabas tu voz encima usando el guion y los tiempos de la tabla.

## Cómo volver a generarlo

Código en `fuente/`. Se necesitan Node, Playwright y ffmpeg, más los cuadros de los videos en `fuente/frames/pizza` y `fuente/frames/tuppers`:

```bash
ffmpeg -i IMG_3868.MOV -vf scale=1080:1920 -q:v 3 frames/pizza/f_%04d.jpg
ffmpeg -i IMG_0887.MOV -vf scale=1080:1920 -q:v 3 frames/tuppers/f_%04d.jpg
node build.js && node render.js audio && node render.js cover
OUT=reel-ya-en-enero.mp4 node render.js full 4
```

## Versión con tu voz (`reel-ya-en-enero-voz.mp4`)

- **Duración:** 74.4 s · 1080×1920 · 30 fps · voz a −15 LUFS
- **Voz:** sacada de tu edición de CapCut. Ahí venía mezclada con la música del reel, así que la resté usando la pista original y quedó limpia en `voz-limpia.m4a`. Después lleva filtro de graves, reducción de ruido, compresión suave y normalización.
- **Sincronía:** no se aceleró la voz. Se reacomodaron los tiempos del reel para que cada escena entre en el tiempo (beat) más cercano a cuando dices esa frase. La música sigue a 100 BPM y baja sola cuando hablas.
- **Tiempos por escena** (`NEW` en `fuente/src.html`): gancho 0.0 · nov-dic 5.1 · enero 9.6 · 9 PM 12.6 · ¿qué ceno? 15.6 · estructura 20.4 · bucle 1 23.4 · 1 hora 27.6 · tuppers 31.2 · entre semana 33.6 · 35 min 36.0 · bucle 2 41.4 · sí vas 48.0 · ayunas 50.4 · día siguiente 54.6 · recetario 61.2 · incluye 65.4 · logo 67.8 · comenta 69.0 · DM 70.2 · cierre 71.4
