"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/src/lib/api";

type Admin = {
  id: number;
  email: string;
  status: string;
  created_at: string | null;
};

export default function AllAdminsPage() {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch("/admin/admins")
      .then(setAdmins)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading admins...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">All Admins</h1>

      {admins.length === 0 ? (
        <p>No admins found.</p>
      ) : (
        <table className="border w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">ID</th>
              <th className="text-left p-2">Email</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Created</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id} className="border-b">
                <td className="p-2">{admin.id}</td>
                <td className="p-2">{admin.email}</td>
                <td className="p-2">{admin.status}</td>
                <td className="p-2">
                  {admin.created_at
                    ? new Date(admin.created_at).toLocaleString()
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
