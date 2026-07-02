"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Eye, EyeOff, Loader2, LogOut, Pencil, Plus, Trash2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import {
  createProject,
  deleteProject,
  getAllProjects,
  updateProject,
} from "@/lib/projects";
import type { Project, ProjectInput } from "@/lib/types/project";
import { isAdminEmail } from "@/lib/admin";
import { LoginForm } from "@/components/admin/LoginForm";
import { ProjectForm } from "@/components/admin/ProjectForm";

export function AdminDashboard() {
  const { user, loading: authLoading, login, logout } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Project | null>(null);
  const [creating, setCreating] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [authError, setAuthError] = useState("");

  const loadProjects = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllProjects();
      setProjects(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    if (!isAdminEmail(user.email)) {
      setAuthError("This account is not authorized to access the admin dashboard.");
      void logout();
      return;
    }

    setAuthError("");
  }, [user, logout]);

  useEffect(() => {
    if (!user || !isAdminEmail(user.email)) return;
    void loadProjects();
  }, [user, loadProjects]);

  const handleCreate = async (input: ProjectInput) => {
    await createProject(input);
    setCreating(false);
    await loadProjects();
  };

  const handleUpdate = async (input: ProjectInput) => {
    if (!editing) return;
    await updateProject(editing.id, input);
    setEditing(null);
    await loadProjects();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this project? This cannot be undone.")) return;
    setDeletingId(id);
    try {
      await deleteProject(id);
      await loadProjects();
    } finally {
      setDeletingId(null);
    }
  };

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-green-600" size={32} />
      </div>
    );
  }

  if (!user) {
    return <LoginForm onLogin={login} authError={authError} />;
  }

  if (!isAdminEmail(user.email)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-green-600" size={32} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="container-forge flex h-16 items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-slate-900">Project Admin</h1>
            <p className="text-xs text-slate-500">{user.email}</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/#projects"
              className="text-sm font-medium text-slate-600 hover:text-green-700"
            >
              View site
            </a>
            <button
              onClick={() => logout()}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
            >
              <LogOut size={14} />
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="container-forge py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Projects</h2>
            <p className="text-sm text-slate-500">
              Manage case studies shown in the Work section.
            </p>
          </div>
          {!creating && !editing && (
            <button
              onClick={() => setCreating(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
            >
              <Plus size={16} />
              Add project
            </button>
          )}
        </div>

        {(creating || editing) && (
          <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-5 text-lg font-semibold text-slate-900">
              {editing ? "Edit project" : "New project"}
            </h3>
            <ProjectForm
              initial={editing ?? undefined}
              onSubmit={editing ? handleUpdate : handleCreate}
              onCancel={() => {
                setCreating(false);
                setEditing(null);
              }}
            />
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-green-600" size={28} />
          </div>
        ) : projects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white py-16 text-center">
            <p className="text-slate-500">No projects yet. Add your first one.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center"
              >
                <div className="relative h-20 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-16 sm:w-24">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-slate-900">{project.name}</h3>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                        project.published
                          ? "bg-green-50 text-green-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {project.published ? (
                        <>
                          <Eye size={12} /> Published
                        </>
                      ) : (
                        <>
                          <EyeOff size={12} /> Draft
                        </>
                      )}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">
                    {project.category}
                    {project.client ? ` · ${project.client}` : ""}
                  </p>
                </div>

                <div className="flex gap-2 sm:shrink-0">
                  <button
                    onClick={() => {
                      setCreating(false);
                      setEditing(project);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                  >
                    <Pencil size={14} />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    disabled={deletingId === project.id}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 px-3 py-2 text-sm text-red-600 hover:bg-red-50 disabled:opacity-60"
                  >
                    {deletingId === project.id ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <Trash2 size={14} />
                    )}
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
