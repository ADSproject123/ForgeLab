import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  type DocumentData,
} from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import type { Project, ProjectInput } from "@/lib/types/project";

const COLLECTION = "projects";

function mapProject(id: string, data: DocumentData): Project {
  return {
    id,
    name: data.name ?? "",
    category: data.category ?? "",
    client: data.client ?? "",
    description: data.description ?? "",
    image: data.image ?? "",
    stack: Array.isArray(data.stack) ? data.stack : [],
    projectUrl: data.projectUrl ?? "",
    published: Boolean(data.published),
    order: typeof data.order === "number" ? data.order : 0,
    createdAt: data.createdAt ?? Date.now(),
    updatedAt: data.updatedAt ?? Date.now(),
  };
}

export async function getPublishedProjects(): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects.filter((project) => project.published);
}

export async function getAllProjects(): Promise<Project[]> {
  const db = getFirebaseDb();
  const q = query(collection(db, COLLECTION), orderBy("order", "asc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => mapProject(d.id, d.data()));
}

export async function createProject(input: ProjectInput) {
  const db = getFirebaseDb();
  const now = Date.now();
  const docRef = await addDoc(collection(db, COLLECTION), {
    ...input,
    projectUrl: input.projectUrl || "",
    createdAt: now,
    updatedAt: now,
  });
  return docRef.id;
}

export async function updateProject(id: string, input: ProjectInput) {
  const db = getFirebaseDb();
  await updateDoc(doc(db, COLLECTION, id), {
    ...input,
    projectUrl: input.projectUrl || "",
    updatedAt: Date.now(),
  });
}

export async function deleteProject(id: string) {
  const db = getFirebaseDb();
  await deleteDoc(doc(db, COLLECTION, id));
}
