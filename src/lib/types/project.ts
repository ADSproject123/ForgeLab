export interface Project {
  id: string;
  name: string;
  category: string;
  client: string;
  description: string;
  image: string;
  stack: string[];
  projectUrl?: string;
  published: boolean;
  order: number;
  createdAt: number;
  updatedAt: number;
}

export type ProjectInput = Omit<Project, "id" | "createdAt" | "updatedAt">;

export const emptyProjectInput = (): ProjectInput => ({
  name: "",
  category: "",
  client: "",
  description: "",
  image: "",
  stack: [],
  projectUrl: "",
  published: true,
  order: 0,
});
