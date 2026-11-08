# Reel 4: "El recorrido del hip thrust sí importa" (versión animada)

- **Archivo final:** `reel-hip-thrust-recorrido.mp4` · 1080×1920 · 30 fps · 48 s · H.264 + AAC
- **Portada:** `portada.png` ("Y SE SIENTE RARO O MUY LIMITADO" con la figura a medias)
- **Tipo:** confianza · estructura de identificación · cierre con "Escríbeme en comentarios"
- **Formato:** igual que los reels 2 y 3: solo tipografía, elementos simples sin bordes, 100 BPM, compás de 2.4 s, música en código

## La figura

Vista lateral: hombros en la banca, barra (disco) sobre la cadera, pies en el piso. Se anima por partes:
- **Altura de cadera**: de casi tocar el piso a extensión completa.
- **Arqueo lumbar**: la espalda baja se dobla hacia arriba y se marca en rojo terracota.
- **Pelvis metida** y **barbilla al pecho**.
- **Glúteo**: se pinta en ocre más fuerte mientras más extendida está la cadera.

## Storyboard por compás

| Compás | Tiempo | Escena | En pantalla / animación |
|---|---|---|---|
| 1 | 0.0–2.4 s | **Gancho** | SEGURO TE HA PASADO ESTO: LE SUBES PESO AL HIP THRUST… · disco grande, reps a medias con temblor, cabeza hacia atrás |
| 2 | 2.4–4.8 | Gancho | Y SE SIENTE RARO **O MUY LIMITADO.** |
| 3 | 4.8–7.2 | Intro | Casi siempre NO ES EL PESO, **ES EL RECORRIDO.** · aparece en claro la posición completa que falta |
| 4 | 7.2–9.6 | 01/03 Arriba está la clave | El glúteo trabaja más fuerte EN EXTENSIÓN **COMPLETA DE CADERA.** · reps completas + barra "EXTENSIÓN DE CADERA" |
| 5 | 9.6–12.0 | 01/03 | Subes la barra y MANTIENES PRESIÓN **ARRIBA.** · se queda arriba con el glúteo encendido |
| 6 | 12.0–14.4 | 01/03 | Si te quedas a medias, TE SALTAS LA PARTE **CON MÁS TENSIÓN.** · reps a medias contra la posición completa en claro |
| 7 | 14.4–16.8 | Bucle 1 (carbón) | Pero hay un error arriba QUE TE QUITA **TODO EL BENEFICIO** y casi nadie lo nota. |
| 8 | 16.8–19.2 | 02/03 El error de arriba | ARQUEAR LA ESPALDA BAJA para "subir más" · la lumbar se arquea (en rojo) y la cabeza se va atrás |
| 9 | 19.2–21.6 | 02/03 | La cadera no se extiende, **NOMÁS LA LUMBAR.** · la barra de extensión se queda a medias |
| 10 | 21.6–24.0 | 02/03 | ARRIBA: ✓ COSTILLAS ABAJO · ✓ PELVIS METIDA (retroversión) · ✓ BARBILLA AL PECHO · la figura se corrige paso por paso |
| 11 | 24.0–26.4 | 02/03 | ESPINILLAS **VERTICALES** en la parte de arriba · línea punteada vertical sobre la espinilla |
| 12 | 26.4–28.8 | Bucle 2 (carbón) | Y abajo también hay **UN DETALLE** QUE IMPORTA. |
| 13 | 28.8–31.2 | 03/03 Abajo y el ritmo | BAJA HASTA QUE LA CADERA **CASI TOQUE EL PISO,** sin perder la posición. · flecha que marca el espacio con el piso |
| 14 | 31.2–33.6 | 03/03 | RECORRIDO COMPLETO **Y CONTROLADO** = más enfoque en cada serie. · rep lenta |
| 15 | 33.6–36.0 | 03/03 | PAUSA DE 1 SEGUNDO **ARRIBA.** No hay prisa de acabar. · la figura se queda arriba 1 s real y una barra cuenta 0.0 → 1.0 s |
| 16 | 36.0–38.4 | Cierre | RECORRIDO COMPLETO, **CON PAUSAS.** |
| 17 | 38.4–40.8 | Cierre | Prueba bajarle peso y hazlo con más **CONCENTRACIÓN.** · el disco se hace más chico y la rep sale completa |
| 18–20 | 40.8–48.0 | CTA | Logo AR, @abrahamrdz.fit, globo de comentario que se toca, ESCRÍBEME en comentarios cómo te fue. Con cabeza, con gusto. |

## Ajustes al guion original

- **"El glúteo trabaja más fuerte en extensión completa":** se dejó así. En el hip thrust, la activación del glúteo es más alta arriba, con la cadera extendida. No se dice que eso garantice más crecimiento.
- **"Recorrido completo y controlado > más enfoque en tus series"** quedó como "Recorrido completo y controlado = más enfoque en cada serie", para que se lea claro en pantalla.
- **Pausa de 1 segundo:** en la animación la pausa arriba dura 1 s de verdad, para que el contador no mienta.
- **Cierre:** el tagline es "Con cabeza, con gusto." porque la pieza es de confianza.
- **Tus tomas:** las tomas laterales que mencionas (espalda arqueada vs. pelvis metida) ya están animadas en los compases 8–11. Si las grabas, se pueden poner de fondo en el gancho (cuadros en `fuente/frames/hip`) o las metes tú en CapCut junto a esa parte.

## Caption sugerido

> Si le subes peso al hip thrust y se siente raro o limitado, casi siempre no es el peso: es el recorrido.
> Arriba: costillas abajo, pelvis metida y barbilla al pecho. Abajo: casi tocas el piso. Y una pausa de 1 segundo arriba.
> Pruébalo con menos peso en tu próximo día de pierna y escríbeme en comentarios cómo te fue.

**Clasificación:** confianza.

## Código

En `fuente/`: `src.html` (animación, figura SVG del hip thrust y música), `build.js`, `render.js`.

```bash
cd reels/04-hip-thrust-recorrido/fuente
node build.js && node render.js audio && node render.js cover
OUT=../reel-hip-thrust-recorrido.mp4 node render.js full 4
```
