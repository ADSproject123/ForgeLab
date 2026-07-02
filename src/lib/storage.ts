import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getFirebaseStorage } from "@/lib/firebase";

export async function uploadProjectImage(file: File): Promise<string> {
  const storage = getFirebaseStorage();
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const path = `projects/${Date.now()}-${safeName}`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}
