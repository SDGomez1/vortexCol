"use client";

import Image from "next/image";
import { useActionState } from "react";

import heroSelfStirringMug from "../assets/img/hero-self-stirring-mug.png";
import { submitLeadForm, type LeadFormState } from "./actions";

const initialState: LeadFormState = {
  error: null,
};

export function LeadGateForm() {
  const [state, formAction, pending] = useActionState(
    submitLeadForm,
    initialState,
  );

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,rgba(200,154,106,0.2),rgba(251,250,246,0)_72%)] text-foreground">
      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.7fr)]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-secondary sm:text-base">
            <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_5px_rgba(200,154,106,0.2)]" />
            Mini guía gratis
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.04] sm:text-6xl">
            7 Bebidas Rápidas para Mañanas Ocupadas
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            Déjanos tus datos para acceder a la guía con recetas simples para
            preparar café, matcha, chocolate, proteína y más en pocos minutos.
          </p>
          <div className="mt-8 overflow-hidden rounded-lg border border-line bg-primary/10 shadow-[0_14px_30px_rgba(139,94,52,0.14)]">
            <Image
              src={heroSelfStirringMug}
              alt="Taza mezcladora de vidrio creando un vortex en una bebida de mañana"
              className="h-full max-h-[390px] w-full object-cover"
              priority
              sizes="(min-width: 1024px) 610px, 100vw"
            />
          </div>
        </div>

        <form
          action={formAction}
          className="rounded-lg border border-line bg-white p-5 shadow-[0_14px_30px_rgba(139,94,52,0.12)] sm:p-7"
        >
          <h2 className="text-2xl font-black leading-tight">
            Accede a la guía
          </h2>
          <p className="mt-2 text-muted">
            Completa estos datos y podrás ver las recetas al instante.
          </p>

          <div className="mt-6 grid gap-4">
            <label className="grid gap-2 font-bold text-foreground">
              Nombre
              <input
                name="name"
                type="text"
                autoComplete="name"
                required
                minLength={2}
                className="min-h-12 rounded-lg border border-line bg-background px-4 font-normal outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Tu nombre"
              />
            </label>

            <label className="grid gap-2 font-bold text-foreground">
              Correo electrónico
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-h-12 rounded-lg border border-line bg-background px-4 font-normal outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="tu@email.com"
              />
            </label>

            <label className="grid gap-2 font-bold text-foreground">
              Fecha de nacimiento
              <input
                name="dob"
                type="date"
                required
                className="min-h-12 rounded-lg border border-line bg-background px-4 font-normal outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>

            <label className="flex gap-3 rounded-lg border border-line bg-background p-4 text-sm text-muted">
              <input
                name="allowPromotionalEmails"
                type="checkbox"
                className="mt-1 h-4 w-4 shrink-0 accent-primary"
              />
              <span>
                Acepto recibir correos promocionales, novedades y ofertas de
                Vortex. Puedo dejar de recibirlos cuando quiera.
              </span>
            </label>
          </div>

          {state.error ? (
            <p className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm font-bold text-red-700">
              {state.error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={pending}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg border-2 border-primary bg-primary px-5 py-3 font-extrabold text-white transition-colors hover:border-primary-dark hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
          >
            {pending ? "Guardando..." : "Ver la guía gratis"}
          </button>

          <p className="mt-3 text-center text-xs text-muted">
            Usaremos tus datos para darte acceso a esta guía y gestionar tus
            preferencias de comunicación.
          </p>
        </form>
      </section>
    </main>
  );
}
