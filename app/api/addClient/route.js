import { NextResponse } from "next/server";
import prisma from "@/app/libs/prisma";

export async function POST(request) {
  try {
    const body = await request.json();
    const { nom, prenoms, telephone, sexe, adresse } = body;

    if (!nom || !prenoms || !telephone || !sexe) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis." },
        { status: 400 }
      );
    }

    const existingClient = await prisma.client.findUnique({
      where: { telephone },
    });

    if (existingClient) {
      return NextResponse.json(
        { error: "Un client avec ce numéro de téléphone existe déjà." },
        { status: 409 }
      );
    }

    const client = await prisma.client.create({
      data: {
        nom,
        prenoms,
        telephone,
        sexe,
        adresse: adresse || null,
      },
    });

    return NextResponse.json(client, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de la création du client:", error);
    return NextResponse.json(
      { error: "Erreur serveur, veuillez réessayer plus tard." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const clients = await prisma.client.findMany();
    return NextResponse.json(clients);
  } catch (error) {
    console.error("Erreur lors de la récupération des clients :", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des clients." },
      { status: 500 }
    );
  }
}
