# Reel 2: "¿Para qué sirve el jalón al pecho?" (versión animada)

- **Archivo final:** `reel-jalon-al-pecho.mp4` · 1080×1920 · 30 fps · 45.6 s · H.264 + AAC
- **Portada:** `portada.png` (BRAZOS / menos en la ESPALDA)
- **Tipo:** alcance · estructura de identificación · cierre con "Guárdalo"
- **Formato:** misma plantilla que el Reel 1 (100 BPM, compás de 2.4 s, Montserrat, paleta AR, logo solo al final, música y efectos hechos en código), pero con los textos sin rectángulo de fondo: solo tipografía. Sobre tu video, el texto va en hueso con una sombra suave para que se lea.

## Tu video de 9 s

No llegó (pesaba mucho), así que el gancho (0–9.6 s) trae una animación de respaldo: una figura que jala con los brazos, con el bíceps encendido y un "?" en la espalda. El reel ya se puede publicar así.

Cuando quieras meter tu toma, el código ya la tiene contemplada: tu video va de fondo en los primeros 4 compases (0–9.6 s) con los textos encima, y la animación de respaldo se apaga sola. Para mandarlo:

1. Recórtalo a los 9–10 s que sirven y expórtalo a 1080p (no 4K). Con eso suele bajar a menos de 25 MB.
2. Súbelo al repo desde GitHub en la web (*Add file → Upload files*) dentro de `reels/02-jalon-al-pecho/`.
3. Lo vuelvo a renderizar con estos comandos:

```bash
cd reels/02-jalon-al-pecho/fuente
mkdir -p frames/jalon
ffmpeg -i ../TU_VIDEO.MOV -vf "fps=30,scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920" -q:v 3 frames/jalon/f_%04d.jpg
node build.js && node render.js audio && node render.js cover
OUT=../reel-jalon-al-pecho.mp4 node render.js full 4
```

## Storyboard por compás

| Compás | Tiempo | Escena | En pantalla / animación |
|---|---|---|---|
| 1 | 0.0–2.4 s | **Gancho** | SEGURO TE HA PASADO ESTO: / HACES JALÓN AL PECHO… · figura jalando con los brazos (o tu video) |
| 2 | 2.4–4.8 | Gancho | Y LO SIENTES TODO EN LOS **BRAZOS** / MENOS EN LA **ESPALDA.** · el bíceps se enciende y aparece un "?" en la espalda |
| 3–4 | 4.8–9.6 | Intro | ESO PASA PORQUE NADIE TE EXPLICÓ **PARA QUÉ ES** EL EJERCICIO. |
| 5 | 9.6–12.0 | 01/03 Qué trabaja | JALÓN VERTICAL · figura de espalda haciendo reps, el dorsal se ilumina · OBJETIVO: DORSAL ANCHO |
| 6 | 12.0–14.4 | 01/03 | El dorsal te da la ESPALDA ANCHA: LA "V" · líneas de la V y flecha de anchura de hombros |
| 7 | 14.4–16.8 | 01/03 | También trabajan: REDONDO MAYOR · TRAPECIO MEDIO E INFERIOR · BÍCEPS (DE APOYO), cada uno se enciende en la figura con su color |
| 8 | 16.8–19.2 | Bucle 1 (carbón) | Pero si no sabes QUÉ MOVIMIENTO HACE EL DORSAL, NUNCA LO VAS A SENTIR. Te lo explico. |
| 9 | 19.2–21.6 | 02/03 Cómo se mueve | Lleva el brazo DE ARRIBA → ABAJO Y HACIA EL CUERPO · vista de espalda con el arco que recorre el codo (aducción del hombro) |
| 10 | 21.6–24.0 | 02/03 | Piensa en llevar LOS CODOS A TUS BOLSAS DE ATRÁS · vista lateral: el codo baja y va hacia atrás, flecha punteada a la bolsa · ✗ no jalar con las manos |
| 11 | 24.0–26.4 | 02/03 | LAS MANOS SOLO SON GANCHOS. · dedos en gancho sobre la barra, flecha "JALA EL CODO" · La fuerza la pone tu espalda. |
| 12 | 26.4–28.8 | Bucle 2 (carbón) | Y hay una razón extra por la que VALE ORO, sobre todo si todavía no te salen DOMINADAS. |
| 13 | 28.8–31.2 | 03/03 Dominada ajustable | Es la versión AJUSTABLE de la dominada · dominada animada (100% TU PESO) vs. pila de placas que cambia 15 → 25 → 35 → 20 KG (TÚ ELIGES) |
| 14 | 31.2–33.6 | 03/03 | Progresas POCO A POCO hasta poder con tu propio cuerpo · escalera 40% → 55% → 70% → 85% → TU PESO · Tip: súmale negativas de dominada. |
| 15 | 33.6–36.0 | Cierre | Entonces: EL JALÓN AL PECHO es para tu **ESPALDA**, no para tus ~~BRAZOS~~. |
| 16 | 36.0–38.4 | Cierre | CODOS ABAJO Y HACIA ATRÁS. · figura lateral en bucle con la flecha a la bolsa |
| 17–19 | 38.4–45.6 | CTA | Logo AR, @abrahamrdz.fit, botón de guardar que se toca, GUÁRDALO para tu próximo día de espalda. Estructura primero. |

## Ajustes al guion original

- **Progresión a la dominada:** el guion decía que el jalón "te permite progresar hasta poder con tu propio cuerpo". Sí ayuda a ganar fuerza en los mismos músculos, pero no te garantiza la dominada solo, porque en la dominada también controlas todo tu cuerpo colgando. Por eso se agregó "Tip: súmale negativas de dominada".
- **"Las manos solo son ganchos":** se agregó "La fuerza la pone tu espalda" para que se entienda que no es soltar la barra, sino no apretar de más ni jalar con los brazos.
- **Bíceps:** se dejó como "de apoyo", tal cual tu guion. En la figura de espalda se marca en el brazo aunque esté por delante, para que se ubique rápido.
- **Movimiento del dorsal:** en pantalla dice "de arriba → abajo y hacia el cuerpo". Es la aducción y extensión del hombro, sin usar esos términos.
- **Cierre:** se cambió "Guárdalo para tu próximo día de espalda" por un botón de guardar animado, porque los guardados ayudan al alcance.
- **Sin voz:** el reel se entiende solo con el texto y la música. Si grabas tu voz con el guion, se reacomodan los tiempos como en el Reel 1.

## Caption sugerido

> Si en el jalón al pecho lo sientes todo en los brazos, no estás haciendo mal el ejercicio: nadie te explicó para qué es.
> Es para tu dorsal, el músculo de la espalda ancha. Piensa en llevar los codos a tus bolsas de atrás y usa las manos solo como ganchos.
> Guárdalo para tu próximo día de espalda. ¿Ya te sale tu primera dominada?

**Clasificación:** alcance.

## Código

En `fuente/`: `src.html` (animación, figuras SVG y música), `build.js` (mete fuente, logo y tu video si existe), `render.js` (`beats`, `cover`, `audio`, `full`). Se necesitan Node, Playwright y ffmpeg.
