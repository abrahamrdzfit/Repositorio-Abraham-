# Reel 3: "¿Debo estirar los brazos completamente en jalón al pecho?" (versión animada)

- **Archivo final:** `reel-jalon-estirar.mp4` · 1080×1920 · 30 fps · 45.6 s · H.264 + AAC
- **Portada:** `portada.png` ("MANTÉN TENSIÓN ARRIBA" con la rep corta)
- **Tipo:** alcance · estructura mito vs. dato · cierre con "Compártelo"
- **Formato:** misma plantilla que el Reel 2: solo tipografía (sin fondos detrás del texto), elementos simples sin bordes, 100 BPM, compás de 2.4 s, música en código

## Storyboard por compás

| Compás | Tiempo | Escena | En pantalla / animación |
|---|---|---|---|
| 1 | 0.0–2.4 s | **Gancho** | SEGURAMENTE HAS ESCUCHADO ESTO: "NO ESTIRES TODO EL BRAZO." · figura de espalda haciendo reps cortas; en claro, detrás, los brazos estirados que se está saltando |
| 2 | 2.4–4.8 | Gancho | "MANTÉN TENSIÓN **ARRIBA**." |
| 3 | 4.8–7.2 | Intro | Suena lógico… PERO DEBERÍAS **SABER ESTO.** · la figura pasa a reps completas |
| 4 | 7.2–9.6 | 01/03 Arriba está el estiramiento | Con el brazo extendido arriba, EL DORSAL QUEDA **MÁS ESTIRADO.** · la figura sube a la posición estirada y se enciende el dorsal |
| 5 | 9.6–12.0 | 01/03 | Esto es por el hombro: SI EL BRAZO SUBE, EL DORSAL SE ALARGA. · barra "LARGO DEL DORSAL" que se llena arriba y se vacía abajo |
| 6 | 12.0–14.4 | 01/03 | Ahí el músculo trabaja **ESTIRADO** Y BAJO TENSIÓN. |
| 7 | 14.4–16.8 | Bucle 1 (carbón) | Y aquí viene lo que dice **LA EVIDENCIA**, que es lo más interesante. |
| 8 | 16.8–19.2 | 02/03 Lo que dice la evidencia | Varios estudios sugieren que ENTRENAR ESTIRADO puede dar igual o más CRECIMIENTO MUSCULAR. · dos columnas: recorrido corto vs. con estiramiento (+ "o más") · nota: casi todos los estudios son en piernas y brazos |
| 9 | 19.2–21.6 | 02/03 | Ojo: TODA TÉCNICA se hace con **INTENCIÓN** y **CONCENTRACIÓN.** |
| 10 | 21.6–24.0 | 02/03 | CORTAR EL RECORRIDO = te pierdes una parte del ejercicio. · reps cortas + barra LO QUE HACES / TE LO PIERDES |
| 11 | 24.0–26.4 | Bucle 2 (carbón) | Pero estirar no significa **SOLTARTE** COMO COSTAL. Hay una forma correcta. |
| 12 | 26.4–28.8 | 03/03 Cómo hacerlo | SUBE CONTROLADO y deja que el hombro suba un poco. · rep con subida lenta; arriba se eleva el hombro |
| 13 | 28.8–31.2 | 03/03 | SIENTE EL ESTIRAMIENTO en el costado de la espalda. · figura arriba con flechas a los lados del dorsal |
| 14 | 31.2–33.6 | 03/03 | ARRANCA EL JALÓN: 1 PRIMERO HOMBROS ABAJO · 2 LUEGO LOS CODOS (cada paso se pinta en ocre cuando la figura lo hace) |
| 15 | 33.6–36.0 | Cierre | Así que sí: ESTIRA LOS BRAZOS ARRIBA, **PERO CON CONTROL.** |
| 16 | 36.0–38.4 | Cierre | MÁS RECORRIDO, más trabajo **PARA TU DORSAL.** · figura con reps completas |
| 17–19 | 38.4–45.6 | CTA | Logo AR, @abrahamrdz.fit, ícono de compartir que se toca y sale volando, COMPÁRTELO con tu amigo de gym que no puede con los jalones. Estructura primero. |

## Ajustes al guion original

- **Evidencia:** los estudios sobre entrenar en posiciones estiradas (o con más recorrido) son casi todos en piernas, tríceps y bíceps; en dorsal todavía hay pocos. Por eso el texto dice "sugieren" y en pantalla aparece la nota "Ojo: casi todos los estudios son en piernas y brazos. En dorsal todavía hay pocos."
- **"Más recorrido, tienes mejor estímulo"** quedó como "Más recorrido, más trabajo para tu dorsal": dice lo mismo sin prometer un resultado que los datos todavía no confirman para este músculo.
- **"Bajo tensión":** en el cuerpo 2 cambié "posiciones bajo tensión" por "entrenar estirado", que es lo que realmente miden esos estudios.
- **"Esto es por el hombro"** se explica en pantalla como "si el brazo sube, el dorsal se alarga", con una barra que muestra el largo del dorsal en cada parte de la rep.
- **Arranque del jalón:** se marca en dos pasos numerados (hombros abajo, luego codos) y la figura los hace en ese orden.

## Caption sugerido

> "No estires todo el brazo, mantén tensión arriba." Suena lógico, pero arriba es justo donde tu dorsal trabaja más estirado.
> Estira con control: sube lento, siente el costado de la espalda y arranca bajando primero los hombros y luego los codos.
> Compártelo con tu amigo de gym que no puede con los jalones.

**Clasificación:** alcance.

## Código

En `fuente/`: `src.html` (animación, figuras SVG y música), `build.js`, `render.js` (`beats`, `cover`, `audio`, `full`). Si después grabas una toma tuya, sus cuadros van en `fuente/frames/estirar` y entran de fondo en el gancho (0–7.2 s).

```bash
cd reels/03-jalon-estirar/fuente
node build.js && node render.js audio && node render.js cover
OUT=../reel-jalon-estirar.mp4 node render.js full 4
```
