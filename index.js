import axios from "axios";
import admin from "firebase-admin";

// Inicializa Firebase
const serviceAccount = JSON.parse(process.env.FIREBASE_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Função principal
async function executar() {
  try {
    console.log("Buscando resultados...");

    const response = await axios.get(
      "https://www.historicosblaze.com/blaze/doubles"
    );

    const dados = response.data;

    console.log("Resultados recebidos");

    // Aqui depois vamos colocar a lógica da BW Sinais

  } catch (error) {
    console.log("Erro:", error.message);
  }
}

executar();