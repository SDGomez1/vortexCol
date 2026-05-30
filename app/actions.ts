"use server";

import { fetchMutation } from "convex/nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { api } from "../convex/_generated/api";

export type LeadFormState = {
  error: string | null;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidDob(value: string) {
  const parsed = new Date(`${value}T00:00:00`);
  return value.length === 10 && !Number.isNaN(parsed.getTime()) && parsed < new Date();
}

export async function submitLeadForm(
  _previousState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const dob = String(formData.get("dob") ?? "").trim();
  const allowPromotionalEmails = formData.get("allowPromotionalEmails") === "on";

  if (name.length < 2) {
    return { error: "Escribe tu nombre completo." };
  }

  if (!isValidEmail(email)) {
    return { error: "Escribe un correo válido." };
  }

  if (!isValidDob(dob)) {
    return { error: "Selecciona una fecha de nacimiento válida." };
  }

  try {
    await fetchMutation(api.leads.submit, {
      name,
      email,
      dob,
      allowPromotionalEmails,
      source: "7-bebidas-rapidas",
    });
  } catch (error) {
    console.error(error);
    return {
      error:
        "No pudimos guardar tus datos en este momento. Revisa la conexión de Convex e intenta de nuevo.",
    };
  }

  const cookieStore = await cookies();
  cookieStore.set("vortex_lead_gate", "1", {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  redirect("/");
}
