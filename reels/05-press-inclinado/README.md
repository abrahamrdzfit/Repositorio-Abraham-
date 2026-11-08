# Reel 5: "¿Cuál debe ser el énfasis en el press inclinado?" (versión animada)

- **Archivo final:** `reel-press-inclinado.mp4` · 1080×1920 · 30 fps · 48 s · H.264 + AAC
- **Portada:** `portada.png` ("Y LO SIENTES PURO HOMBRO" con la banca muy inclinada)
- **Tipo:** alcance · estructura de identificación · cierre con "Guárdalo"
- **Formato:** igual que los reels anteriores: solo tipografía, elementos simples sin bordes, 100 BPM, compás de 2.4 s, música en código

## Las figuras

1. **Vista lateral en banca ajustable.** El ángulo de la banca se anima, con un transportador que marca los grados y la zona de 30–45° en verde. La figura hace press con mancuernas.
   - **Colores:** pecho alto (clavicular) en ocre, hombro frontal en terracota. La intensidad de cada uno cambia con la inclinación.
   - **Barras:** "PECHO ALTO" contra "HOMBRO FRONTAL" muestran cuál domina.
2. **Vista de frente para los codos.** El brazo se mueve de pegado (14°) a abierto al máximo (90°) y se queda en 58°. La zona de 45–70° va marcada en verde, con los grados abajo.

## Storyboard por compás

| Compás | Tiempo | Escena | En pantalla / animación |
|---|---|---|---|
| 1 | 0.0–2.4 s | **Gancho** | SEGURO TE HA PASADO ESTO: HACES PRESS INCLINADO PARA PECHO ALTO… · banca a 60° |
| 2 | 2.4–4.8 | Gancho | Y LO SIENTES **PURO HOMBRO.** · se enciende el hombro frontal |
| 3 | 4.8–7.2 | Intro | El press inclinado TIENE UN OBJETIVO **CLARO.** · aparece el transportador en 60° |
| 4 | 7.2–9.6 | Intro | pero hay que PONÉRSELO FÁCIL **AL MÚSCULO.** · la banca baja a 38° y se enciende el pecho alto |
| 5 | 9.6–12.0 | 01/03 Qué trabaja | Énfasis: **PECHO ALTO** — la parte clavicular del pecho |
| 6 | 12.0–14.4 | 01/03 | El hombro frontal también trabaja. ES NORMAL, **PERO NO DEBE DOMINAR.** · la barra del hombro sube un poco, pero queda debajo del pecho |
| 7 | 14.4–16.8 | Bucle 1 (carbón) | El primer detalle que cambia todo ESTÁ EN LA **BANCA,** no en ti. |
| 8 | 16.8–19.2 | 02/03 La banca | Inclinación de **30 A 45°** aproximadamente · la banca sube de 15° a 38° |
| 9 | 19.2–21.6 | 02/03 | Más inclinado que eso, MÁS SE VA **AL HOMBRO.** · la banca sube a 62° y la barra del hombro gana |
| 10 | 21.6–24.0 | 02/03 | Si lo sientes todo en hombro, BAJA LA BANCA **UN NIVEL.** · clic y la banca baja a 45° |
| 11 | 24.0–26.4 | Bucle 2 (carbón) | Y aunque tengas la banca bien, HAY ALGO EN **TU POSICIÓN** que hace la diferencia. |
| 12 | 26.4–28.8 | 03/03 Tu posición | ESCÁPULAS JUNTAS **Y ABAJO,** pecho arriba · los hombros van hacia atrás y abajo, con una flecha |
| 13 | 28.8–31.2 | 03/03 | CODOS NI PEGADOS NI ABIERTOS AL MÁXIMO. · vista de frente: 14° (PEGADOS) → 90° (ABIERTOS AL MÁXIMO) |
| 14 | 31.2–33.6 | 03/03 | A unos **45–70°** del torso. · el brazo se acomoda en 58°, en la zona verde |
| 15 | 33.6–36.0 | 03/03 | BAJA CONTROLADO hasta la parte alta del pecho **Y SIENTE EL ESTIRAMIENTO.** · bajada lenta; el pecho alto se marca abajo |
| 16 | 36.0–38.4 | Cierre | **BANCA A 30–45°,** ESCÁPULAS ATRÁS **Y BAJADA CONTROLADA.** |
| 17 | 38.4–40.8 | Cierre | Así el pecho alto ES EL **PROTAGONISTA.** · figura haciendo reps bien |
| 18–20 | 40.8–48.0 | CTA | Logo AR, @abrahamrdz.fit, botón de guardar que se toca, GUÁRDALO y pruébalo el próximo día de pecho. Estructura primero. |

## Notas sobre el contenido

- **30–45°:** los estudios con electromiografía encuentran la mayor activación del pecho alto alrededor de 30°; arriba de 45° el hombro frontal toma más trabajo. Por eso se dejó "aproximadamente".
- **"Más inclinado → más hombro":** en la animación, las barras de pecho alto y hombro frontal cambian según el ángulo de la banca, para que se vea el cambio de énfasis sin poner números de estudio.
- **Codos a 45–70°:** se muestra de frente porque de lado no se aprecia el ángulo con el torso.
- **Sin voz:** el reel se entiende con texto y música. Si grabas tu voz, se reacomodan los tiempos como en el Reel 1.

## Caption sugerido

> Si haces press inclinado para pecho alto y lo sientes puro hombro, revisa primero la banca: entre 30 y 45° le pones fácil el trabajo al pecho alto.
> Luego tu posición: escápulas juntas y abajo, codos a 45–70° del torso y bajada controlada hasta la parte alta del pecho.
> Guárdalo y pruébalo el próximo día de pecho.

**Clasificación:** alcance.

## Código

En `fuente/`: `src.html` (animación, figuras SVG y música), `build.js`, `render.js`.

```bash
cd reels/05-press-inclinado/fuente
node build.js && node render.js audio && node render.js cover
OUT=../reel-press-inclinado.mp4 node render.js full 4
```
