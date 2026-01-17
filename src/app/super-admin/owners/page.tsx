"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/src/lib/api";

type Admin = {
  id: number;
  email: string;
  status: string;
  created_at: string | null;
};

type StatusFilter = "all" | "active" | "pending" | "revoked";

export default function AllOwnersPage() {
  const [owners, setOwners] = useState<Admin[]>([]);
  const [filteredOwners, setFilteredOwners] = useState<Admin[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const updateOwnerStatus = async (ownerId: number, status: string) => {
  try {
    const res = await apiFetch(
      `/admin/owners/${ownerId}/status`,
      {
        method: "PATCH",
        body: JSON.stringify({ status }),
      }
    );

    // Update local state
    setOwners((prev) =>
      prev.map((o) =>
        o.id === ownerId ? { ...o, status } : o
      )
    );
  } catch (err: any) {
    alert(err.message || "Failed to update status");
  }
};

  useEffect(() => {
    apiFetch("/admin/owners")
      .then(setOwners)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (statusFilter === "all") {
      setFilteredOwners(owners);
    } else {
      setFilteredOwners(owners.filter(owner => owner.status === statusFilter));
    }
  }, [owners, statusFilter]);

  const getStatusCounts = () => {
    const counts = {
      all: owners.length,
      active: owners.filter(o => o.status === "active").length,
      pending: owners.filter(o => o.status === "pending").length,
      revoked: owners.filter(o => o.status === "revoked").length,
    };
    return counts;
  };

  const statusCounts = getStatusCounts();

  if (loading) return <p>Loading owners...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">All Owners</h1>

      {/* Status Filter Tabs */}
      <div className="mb-6 border-b">
        <div className="flex space-x-1">
          {(["all", "active", "pending", "revoked"] as StatusFilter[]).map((filter) => (
            <button
              key={filter}
              onClick={() => setStatusFilter(filter)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                statusFilter === filter
                  ? "bg-blue-100 text-blue-700 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
              <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-gray-200">
                {statusCounts[filter]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Filter Summary */}
      <div className="mb-4 text-sm text-gray-600">
        Showing {filteredOwners.length} of {owners.length} owners
        {statusFilter !== "all" && ` (filtered by: ${statusFilter})`}
      </div>

      {filteredOwners.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>No owners found{statusFilter !== "all" ? ` with status "${statusFilter}"` : ""}.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="text-left p-3 font-medium">ID</th>
                <th className="text-left p-3 font-medium">Email</th>
                <th className="text-left p-3 font-medium">Status</th>
                <th className="text-left p-3 font-medium">Created</th>
              </tr>
            </thead>
            <tbody>
              {filteredOwners.map((owner) => (
                <tr key={owner.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{owner.id}</td>
                  <td className="p-3">{owner.email}</td>
                  <td className="p-3">
                  <select
                    value={owner.status}
                    onChange={(e) =>
                      updateOwnerStatus(owner.id, e.target.value)
                    }
                    className="border rounded px-2 py-1 text-sm"
                  >
                    <option value="pending">Pending</option>
                    <option value="active">Active</option>
                    <option value="revoked">Revoked</option>
                  </select>
                </td>

                  <td className="p-3">
                    {owner.created_at
                      ? new Date(owner.created_at).toLocaleString()
                      : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}