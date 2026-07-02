import { isFirebaseConfigured } from "@/lib/firebase";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export const metadata = {
  title: "Admin — ForgeLab",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  if (!isFirebaseConfigured()) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg">
          <h1 className="text-xl font-bold text-slate-900">Firebase not configured</h1>
          <p className="mt-3 text-sm text-slate-500">
            Copy <code className="text-slate-700">.env.example</code> to{" "}
            <code className="text-slate-700">.env.local</code> and add your Firebase
            project credentials.
          </p>
        </div>
      </div>
    );
  }

  return <AdminDashboard />;
}
