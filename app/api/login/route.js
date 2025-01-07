import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connectToDatabase } from "@/app/libs/mongodb";

export async function POST(req) {
  try {

    const { username, password } = await req.json();

    const { db } = await connectToDatabase();


    const user = await db.collection("User").findOne({ username });

    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: "Utilisateur non trouvé" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const isMatch = await bcrypt.compare(password, user.hashedPassword);
    if (!isMatch) {
      return new Response(
        JSON.stringify({ success: false, message: "Mot de passe incorrect" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }


    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET, 
      { expiresIn: "30d" }
    );


    return new Response(
      JSON.stringify({ success: true, token }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    return new Response(
      JSON.stringify({ success: false, message: "Une erreur interne est survenue" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
