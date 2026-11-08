# Reel 6: "Un step up debería verse así" (versión animada)

- **Archivo final:** `reel-step-up.mp4` · 1080×1920 · 30 fps · 45.6 s · H.264 + AAC
- **Portada:** `portada.png` ("UN STEP UP DEBERÍA VERSE ASÍ" con la rep bien hecha)
- **Tipo:** confianza · estructura de identificación · cierre con palabra clave **STEP** en comentarios
- **Formato:** igual que los reels anteriores: solo tipografía, elementos simples sin bordes, 100 BPM, compás de 2.4 s, música en código

## Las figuras

1. **Vista lateral con cajón.** La pierna de arriba va en negro (el muslo se pinta en verde cuando trabaja el cuádriceps) y la de abajo en gris oscuro, o en terracota cuando se impulsa. El glúteo va en ocre y el torso se puede inclinar.
2. **Vista de frente de la pierna de arriba.** La rodilla pasa de irse hacia adentro (punto terracota) a quedar alineada con la punta del pie (punto verde, sobre una línea guía).

## Storyboard por compás

| Compás | Tiempo | Escena | En pantalla / animación |
|---|---|---|---|
| 1–2 | 0.0–4.8 s | **Gancho** | UN STEP UP DEBERÍA VERSE **ASÍ.** · reps bien hechas (o tu video, si lo mandas) |
| 3 | 4.8–7.2 | Intro | Y seguro el tuyo se ve diferente. NO PASA NADA, te digo qué ajustar. |
| 4 | 7.2–9.6 | 01/03 El pie de arriba | **PIE COMPLETO** arriba del cajón, no solo la punta. · el pie empieza solo con la punta (✗) y se acomoda completo (✓) |
| 5 | 9.6–12.0 | 01/03 | ALTURA: que la rodilla quede a **~90° O UN POCO MÁS** · arco con los grados de la rodilla |
| 6 | 12.0–14.4 | Bucle 1 (carbón) | Pero el error número uno NO ESTÁ EN EL PIE DE ARRIBA, **ESTÁ EN EL DE ABAJO.** |
| 7 | 14.4–16.8 | 02/03 El pie de abajo | Si te impulsas con la de abajo, LA DE ARRIBA **TRABAJA MENOS.** · rebote con la pierna de abajo en terracota; barras PIERNA DE ARRIBA vs. PIERNA DE ABAJO |
| 8 | 16.8–19.2 | 02/03 | La de atrás solo acompaña; EMPUJA CON **LA DE ARRIBA.** · las barras se invierten |
| 9 | 19.2–21.6 | 02/03 | **TRUCO:** levanta la punta del pie de abajo para no impulsarte. · la punta sube, con flecha |
| 10 | 21.6–24.0 | Bucle 2 (carbón) | Y hay un ajuste QUE CAMBIA **QUÉ MÚSCULO** TRABAJA MÁS. |
| 11 | 24.0–26.4 | 03/03 Torso y rodilla | Torso un poco inclinado hacia adelante **→ MÁS GLÚTEO** · el torso se inclina; barras GLÚTEO vs. CUÁDRICEPS |
| 12 | 26.4–28.8 | 03/03 | Torso más recto **→ MÁS CUÁDRICEPS** · el torso se endereza y las barras se invierten |
| 13 | 28.8–31.2 | 03/03 | RODILLA ALINEADA con la punta del pie. · vista de frente: rodilla adentro → alineada |
| 14 | 31.2–33.6 | 03/03 | **BAJA CONTROLADO,** no te dejes caer. · subida normal, bajada larga |
| 15 | 33.6–36.0 | Cierre | PIE COMPLETO, EMPUJA CON LA DE ARRIBA **Y BAJA LENTO.** |
| 16 | 36.0–38.4 | Cierre | ¿Quieres que revise **TU TÉCNICA?** · figura haciendo reps |
| 17–19 | 38.4–45.6 | CTA | Logo AR, @abrahamrdz.fit, ESCRÍBEME **STEP** (se escribe letra por letra) en comentarios y reviso tu técnica. Con cabeza, con gusto. |

## Notas sobre el contenido

- **Torso inclinado → más glúteo / recto → más cuádriceps:** se muestra como un cambio de énfasis con dos barras, no como que un músculo se apague. Los dos trabajan siempre.
- **Rodilla a ~90°:** la animación marca el ángulo real de la rodilla de la figura (unos 86–90° abajo).
- **Gancho:** dice "debería verse así" mientras la figura hace la rep bien. Si grabas tu repetición, sus cuadros van en `fuente/frames/step` y entran de fondo en los primeros 7.2 s.

## Caption sugerido

> Un step up debería verse así: pie completo arriba, empujas con la pierna de arriba y bajas lento.
> El error más común está en el pie de abajo: si te impulsas con él, la de arriba trabaja menos. Truco: levanta la punta.
> ¿Quieres que revise tu técnica? Escríbeme STEP en comentarios.

**Clasificación:** confianza.

## Código

En `fuente/`: `src.html` (animación, figuras SVG y música), `build.js`, `render.js`.

```bash
cd reels/06-step-up/fuente
node build.js && node render.js audio && COVER_T=1.2 node render.js cover
OUT=../reel-step-up.mp4 node render.js full 4
```
