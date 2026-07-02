"use client";

import { useRef, useState } from "react";
import { Loader2, Upload } from "lucide-react";
import type { Project, ProjectInput } from "@/lib/types/project";
import { uploadProjectImage } from "@/lib/storage";

interface ProjectFormProps {
  initial?: Project;
  onSubmit: (input: ProjectInput) => Promise<void>;
  onCancel: () => void;
}

export function ProjectForm({ initial, onSubmit, onCancel }: ProjectFormProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<ProjectInput>({
    name: initial?.name ?? "",
    category: initial?.category ?? "",
    client: initial?.client ?? "",
    description: initial?.description ?? "",
    image: initial?.image ?? "",
    stack: initial?.stack ?? [],
    projectUrl: initial?.projectUrl ?? "",
    published: initial?.published ?? true,
    order: initial?.order ?? 0,
  });
  const [stackInput, setStackInput] = useState((initial?.stack ?? []).join(", "));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : name === "order" ? Number(value) : value,
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");
    try {
      const url = await uploadProjectImage(file);
      setForm((prev) => ({ ...prev, image: url }));
    } catch {
      setError("Failed to upload image. Try a URL instead.");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const stack = stackInput
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    if (!form.name || !form.category || !form.description || !form.image) {
      setError("Name, category, description, and image are required.");
      setLoading(false);
      return;
    }

    try {
      await onSubmit({ ...form, stack });
    } catch {
      setError("Failed to save project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/10";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-slate-700">Project name</label>
          <input name="name" value={form.name} onChange={handleChange} required className={inputClass} />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">Category</label>
          <input name="category" value={form.category} onChange={handleChange} required className={inputClass} placeholder="AI & Machine Learning" />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">Client</label>
          <input name="client" value={form.client} onChange={handleChange} className={inputClass} placeholder="Client name" />
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-slate-700">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} required rows={4} className={inputClass} />
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-slate-700">Image URL</label>
          <input name="image" value={form.image} onChange={handleChange} required className={inputClass} placeholder="https://..." />
          <div className="mt-2 flex items-center gap-3">
            <input ref={fileRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              disabled={uploading}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 transition-colors hover:border-green-300 hover:text-green-700 disabled:opacity-60"
            >
              {uploading ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
              Upload image
            </button>
            {form.image && (
              <span className="truncate text-xs text-slate-400">Image set</span>
            )}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-slate-700">Tech stack</label>
          <input
            value={stackInput}
            onChange={(e) => setStackInput(e.target.value)}
            className={inputClass}
            placeholder="Next.js, Python, Firebase (comma separated)"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">Project URL</label>
          <input name="projectUrl" value={form.projectUrl} onChange={handleChange} className={inputClass} placeholder="https://..." />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">Display order</label>
          <input name="order" type="number" value={form.order} onChange={handleChange} className={inputClass} />
        </div>

        <div className="flex items-center gap-2 sm:col-span-2">
          <input
            id="published"
            name="published"
            type="checkbox"
            checked={form.published}
            onChange={handleChange}
            className="h-4 w-4 rounded border-slate-300 text-green-600 focus:ring-green-500"
          />
          <label htmlFor="published" className="text-sm text-slate-700">
            Published (visible on website)
          </label>
        </div>
      </div>

      {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={loading || uploading}
          className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700 disabled:opacity-60"
        >
          {loading && <Loader2 size={14} className="animate-spin" />}
          {initial ? "Update project" : "Create project"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
