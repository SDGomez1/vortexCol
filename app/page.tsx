import Image, { type StaticImageData } from "next/image";
import { cookies } from "next/headers";

import cinnamonLatte from "../assets/img/cinnamon-latte.png";
import ctaMugDrinks from "../assets/img/cta-mug-drinks.png";
import heroSelfStirringMug from "../assets/img/hero-self-stirring-mug.png";
import hotChocolate from "../assets/img/hot-chocolate.png";
import icedCoffee from "../assets/img/iced-coffee.png";
import matchaLatte from "../assets/img/matcha-latte.png";
import mochaEnergy from "../assets/img/mocha-energy.png";
import oatCollagenCoffee from "../assets/img/oat-collagen-coffee.png";
import vanillaProtein from "../assets/img/vanilla-protein.png";
import { LeadGateForm } from "./LeadGateForm";

type Recipe = {
  title: string;
  time: string;
  useCase: string;
  image: StaticImageData;
  imageAlt: string;
  ingredients: string[];
  steps: string[];
  tip: string;
  featured?: boolean;
};

type Feature = {
  title: string;
  description: string;
};

const recipes: Recipe[] = [
  {
    title: "Café Frío Cremoso en 2 Minutos",
    time: "2 min",
    useCase: "Para cuando necesitas cafeína y salir rápido.",
    image: icedCoffee,
    imageAlt: "Café frío cremoso con hielo en vaso de vidrio",
    ingredients: [
      "1 taza de leche fría",
      "1 cucharadita de café instantáneo",
      "1 cucharadita de azúcar, miel o endulzante",
      "Hielo al gusto",
      "Opcional: unas gotas de vainilla",
    ],
    steps: [
      "Agrega la leche, el café y el endulzante.",
      "Mezcla hasta que el café se integre.",
      "Añade hielo y disfruta.",
    ],
    tip: "La taza mezcladora ayuda a disolver el café instantáneo más rápido y evita residuos en el fondo.",
    featured: true,
  },
  {
    title: "Latte de Canela y Miel",
    time: "3 min",
    useCase: "Para empezar el día con algo cálido y suave.",
    image: cinnamonLatte,
    imageAlt: "Latte caliente con canela y miel",
    ingredients: [
      "1 taza de leche caliente",
      "1 cucharadita de café instantáneo",
      "1 cucharadita de miel",
      "1 pizca de canela",
    ],
    steps: [
      "Agrega la leche caliente al vaso.",
      "Añade café, miel y canela.",
      "Mezcla hasta que quede uniforme.",
    ],
    tip: "El movimiento automático ayuda a integrar la miel y la canela sin usar cuchara.",
  },
  {
    title: "Chocolate Caliente Express",
    time: "3 min",
    useCase: "Para una bebida dulce sin complicarte.",
    image: hotChocolate,
    imageAlt: "Chocolate caliente en taza transparente",
    ingredients: [
      "1 taza de leche caliente",
      "1 cucharada de cacao o chocolate en polvo",
      "1 cucharadita de azúcar o endulzante",
      "Opcional: una pizca de canela",
    ],
    steps: [
      "Agrega la leche caliente.",
      "Añade el cacao y el endulzante.",
      "Mezcla hasta eliminar grumos.",
    ],
    tip: "Perfecta para polvos como cacao, que suelen quedarse pegados o formar grumos.",
  },
  {
    title: "Matcha Latte Rápido",
    time: "3 min",
    useCase: "Para una alternativa al café con sabor moderno.",
    image: matchaLatte,
    imageAlt: "Matcha latte verde en taza de vidrio",
    ingredients: [
      "1 taza de leche caliente o fría",
      "1 cucharadita de matcha",
      "1 cucharadita de miel o endulzante",
      "Hielo si lo prefieres frío",
    ],
    steps: [
      "Agrega la leche al vaso.",
      "Añade matcha y endulzante.",
      "Mezcla hasta que la bebida tome un color verde uniforme.",
    ],
    tip: "El matcha puede ser difícil de disolver a mano; la mezcla automática lo hace más práctico.",
  },
  {
    title: "Proteína de Vainilla Sin Grumos",
    time: "2 min",
    useCase: "Para una opción rápida después de entrenar o antes de salir.",
    image: vanillaProtein,
    imageAlt: "Bebida ligera de proteína de vainilla",
    ingredients: [
      "1 taza de leche o agua",
      "1 porción de proteína de vainilla en polvo",
      "Opcional: 1/2 banana muy triturada",
      "Hielo al gusto",
    ],
    steps: [
      "Agrega primero el líquido.",
      "Añade la proteína en polvo.",
      "Mezcla hasta lograr una textura suave.",
    ],
    tip: "Funciona mejor para bebidas ligeras en polvo. Para mezclas espesas o fruta en trozos, usa licuadora.",
  },
  {
    title: "Café Mocha Energético",
    time: "3 min",
    useCase: "Para combinar café y chocolate en una sola bebida.",
    image: mochaEnergy,
    imageAlt: "Café mocha con remolino cremoso",
    ingredients: [
      "1 taza de leche caliente",
      "1 cucharadita de café instantáneo",
      "1 cucharadita de cacao en polvo",
      "1 cucharadita de azúcar o endulzante",
    ],
    steps: [
      "Agrega la leche.",
      "Añade café, cacao y endulzante.",
      "Mezcla hasta que todo quede parejo y cremoso.",
    ],
    tip: "Al combinar dos polvos, una mezcla constante ayuda a lograr mejor textura.",
  },
  {
    title: "Colágeno con Café de Avena",
    time: "3 min",
    useCase: "Para quienes agregan suplementos a su bebida de la mañana.",
    image: oatCollagenCoffee,
    imageAlt: "Café con bebida de avena y colágeno",
    ingredients: [
      "1 taza de bebida de avena caliente o fría",
      "1 cucharadita de café instantáneo",
      "1 porción de colágeno en polvo",
      "Endulzante al gusto",
    ],
    steps: [
      "Agrega la bebida de avena.",
      "Añade café y colágeno.",
      "Mezcla hasta integrar por completo.",
    ],
    tip: "El colágeno y otros polvos pueden asentarse en el fondo; mezclarlos bien mejora cada sorbo.",
  },
];

const features: Feature[] = [
  {
    title: "Un botón",
    description: "Mezcla sin buscar cuchara ni batidor.",
  },
  {
    title: "Menos grumos",
    description: "Ideal para polvos solubles y bebidas rápidas.",
  },
  {
    title: "Vidrio práctico",
    description: "Se ve bien en casa, oficina o escritorio.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-secondary sm:text-base">
      <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_5px_rgba(200,154,106,0.2)]" />
      {children}
    </p>
  );
}

function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article
      className={`flex min-w-0 flex-col overflow-hidden rounded-lg border border-line bg-white ${
        recipe.featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="relative aspect-[4/3] min-h-56 overflow-hidden bg-primary/10">
        <Image
          src={recipe.image}
          alt={recipe.imageAlt}
          className="h-full w-full object-cover"
          sizes={
            recipe.featured
              ? "(min-width: 1024px) 746px, (min-width: 768px) 50vw, 100vw"
              : "(min-width: 1024px) 363px, (min-width: 768px) 50vw, 100vw"
          }
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-2xl font-bold leading-tight text-foreground">
            {recipe.title}
          </h3>
          <span className="shrink-0 rounded-full bg-primary/15 px-3 py-1 text-sm font-extrabold text-primary-dark">
            {recipe.time}
          </span>
        </div>
        <p className="text-muted">{recipe.useCase}</p>
        <div>
          <h4 className="mb-2 text-sm font-extrabold uppercase text-secondary">
            Ingredientes
          </h4>
          <ul className="list-disc space-y-1 pl-5 text-foreground">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-extrabold uppercase text-secondary">
            Preparación
          </h4>
          <ol className="list-decimal space-y-1 pl-5 text-foreground">
            {recipe.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <p className="mt-auto rounded-lg border border-secondary/15 bg-secondary/10 p-3 text-sm text-secondary">
          <strong className="mb-1 block">Tip de mezcla</strong>
          {recipe.tip}
        </p>
      </div>
    </article>
  );
}

export default async function Home() {
  const cookieStore = await cookies();
  const canViewGuide = cookieStore.get("vortex_lead_gate")?.value === "1";

  if (!canViewGuide) {
    return <LeadGateForm />;
  }

  return (
    <>
      <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <section className="bg-[linear-gradient(180deg,rgba(200,154,106,0.18),rgba(251,250,246,0)_76%)] py-8 pb-12 sm:py-10 lg:pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <nav
              aria-label="Navegación principal"
              className="mb-9 flex items-center justify-between gap-5"
            >
              <div className="flex items-center gap-3 text-sm font-bold text-primary-dark sm:text-base">
                <span className="grid h-9 w-9 place-items-center rounded-lg border-2 border-primary bg-white text-lg font-black text-primary">
                  7
                </span>
                Guía rápida de bebidas
              </div>
              <a
                href="#recetas"
                className="border-b-2 border-transparent pb-0.5 font-bold text-secondary transition-colors hover:border-primary"
              >
                Ver recetas
              </a>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]">
              <div>
                <Eyebrow>Mini guía gratis</Eyebrow>
                <h1 className="max-w-3xl text-5xl font-black leading-[1.04] text-foreground sm:text-6xl lg:text-7xl">
                  7 Bebidas Rápidas para Mañanas Ocupadas
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                  Recetas simples para preparar café, matcha, chocolate,
                  proteína y más en pocos minutos, sin complicarte la mañana.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="#recetas"
                    className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-primary bg-primary px-5 py-3 font-extrabold text-white shadow-[0_10px_24px_rgba(139,94,52,0.18)] transition-colors hover:border-primary-dark hover:bg-primary-dark"
                  >
                    Ver las recetas
                  </a>
                  <a
                    href="#taza"
                    className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-primary bg-transparent px-5 py-3 font-extrabold text-primary-dark transition-colors hover:bg-primary/10"
                  >
                    Preparar más rápido
                  </a>
                </div>
                <p className="mt-4 text-sm text-muted">
                  Pensada para rutinas reales: casa, oficina, estudio y días
                  con poco tiempo.
                </p>
              </div>

              <div className="overflow-hidden rounded-lg border border-line bg-primary/10 shadow-[0_14px_30px_rgba(139,94,52,0.14)]">
                <Image
                  src={heroSelfStirringMug}
                  alt="Taza mezcladora de vidrio creando un vortex en una bebida de mañana"
                  className="h-full min-h-80 w-full object-cover lg:min-h-[420px]"
                  priority
                  sizes="(min-width: 1024px) 493px, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="intro-title" className="py-9">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-8 border-y border-line py-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(260px,0.5fr)]">
              <div>
                <h2
                  id="intro-title"
                  className="text-3xl font-black leading-tight sm:text-4xl"
                >
                  Una mañana más fácil empieza con no pensar tanto.
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted">
                  Esta guía te da siete bebidas fáciles para resolver una
                  pregunta diaria: qué preparo rápido antes de salir, trabajar o
                  estudiar. Todas usan ingredientes comunes y pasos cortos para
                  que puedas repetirlas sin convertir la cocina en una tarea
                  larga.
                </p>
              </div>
              <ul
                aria-label="Beneficios de la guía"
                className="grid content-start gap-3"
              >
                {[
                  "Recetas listas en pocos minutos.",
                  "Opciones frías, calientes, dulces y funcionales.",
                  "Tips para mezclar mejor y evitar grumos.",
                ].map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 font-bold text-foreground"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-sm font-black text-white">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="recetas"
          aria-labelledby="recipes-title"
          className="py-10 pb-16"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-7 gap-6 lg:flex lg:items-end lg:justify-between">
              <div>
                <Eyebrow>Las 7 recetas</Eyebrow>
                <h2
                  id="recipes-title"
                  className="max-w-2xl text-3xl font-black leading-tight sm:text-4xl"
                >
                  Bebidas simples, rápidas y fáciles de repetir.
                </h2>
              </div>
              <p className="mt-4 max-w-xl text-lg leading-8 text-muted lg:mt-0">
                Usa estas recetas como base. Ajusta dulzor, cantidad de hielo o
                tipo de leche según tu gusto.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.title} recipe={recipe} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="taza"
          aria-labelledby="bridge-title"
          className="border-y border-secondary/15 bg-secondary/10 py-14"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid items-center gap-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.72fr)]">
              <div>
                <Eyebrow>Siguiente paso</Eyebrow>
                <h2
                  id="bridge-title"
                  className="text-3xl font-black leading-tight sm:text-4xl"
                >
                  Haz que estas bebidas sean todavía más fáciles.
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted">
                  La taza mezcladora de vidrio ayuda a preparar café,
                  chocolate, matcha, proteína ligera y bebidas con polvos en
                  segundos. Presionas un botón, ves el remolino y reduces el
                  esfuerzo de revolver a mano.
                </p>
                <div
                  aria-label="Beneficios de la taza mezcladora"
                  className="my-7 grid gap-3 sm:grid-cols-3"
                >
                  {features.map((feature) => (
                    <div
                      key={feature.title}
                      className="rounded-lg border border-secondary/15 bg-white/70 p-4"
                    >
                      <strong className="mb-2 block text-secondary">
                        {feature.title}
                      </strong>
                      <span className="text-sm text-muted">
                        {feature.description}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="#cta-final"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border-2 border-primary bg-primary px-5 py-3 font-extrabold text-white shadow-[0_10px_24px_rgba(139,94,52,0.18)] transition-colors hover:border-primary-dark hover:bg-primary-dark sm:w-auto"
                >
                  Preparar mis bebidas más rápido
                </a>
              </div>

              <div className="overflow-hidden rounded-lg border border-line bg-white">
                <Image
                  src={ctaMugDrinks}
                  alt="Taza mezcladora de vidrio con ingredientes para bebidas rápidas"
                  className="h-full min-h-80 w-full object-cover"
                  sizes="(min-width: 1024px) 432px, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="cta-final"
          aria-labelledby="cta-title"
          className="bg-secondary py-14 text-center text-white"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2
              id="cta-title"
              className="mx-auto max-w-4xl text-3xl font-black leading-tight sm:text-4xl"
            >
              Si quieres preparar estas recetas en segundos, la taza mezcladora
              de vidrio es el siguiente paso.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/85">
              Convierte tu bebida de la mañana en una rutina más rápida, limpia
              y fácil de repetir.
            </p>
            <a
              href="https://vortexsegcol.com/products/taza-mug-mezcladora-de-vidrio"
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-lg border-2 border-primary bg-primary px-5 py-3 font-extrabold text-white transition-colors hover:border-primary-dark hover:bg-primary-dark sm:w-auto"
            >
              Quiero la taza mezcladora
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-background py-5 text-sm text-muted">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          Estas recetas son sugerencias y pueden ajustarse según tu gusto,
          ingredientes disponibles y necesidades personales.
        </div>
      </footer>
    </>
  );
}
