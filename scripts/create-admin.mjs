import { readFileSync } from "fs";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const ADMIN_EMAIL = "xnxx@gmail.com";
const ADMIN_PASSWORD = "xnxx168";

function loadEnv() {
  const env = {};
  try {
    const content = readFileSync(".env", "utf8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      env[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
    }
  } catch {
    // .env optional if vars are already in environment
  }
  return env;
}

const env = { ...loadEnv(), ...process.env };

const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

createUserWithEmailAndPassword(auth, ADMIN_EMAIL, ADMIN_PASSWORD)
  .then(() => {
    console.log(`Admin account created: ${ADMIN_EMAIL}`);
    process.exit(0);
  })
  .catch((err) => {
    if (err.code === "auth/email-already-in-use") {
      console.log(`Admin account already exists: ${ADMIN_EMAIL}`);
      process.exit(0);
    }
    console.error("Failed to create admin:", err.message);
    process.exit(1);
  });
