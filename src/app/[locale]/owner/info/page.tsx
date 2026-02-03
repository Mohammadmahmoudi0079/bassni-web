'use client';

import { apiFetch } from "@/src/lib/api";
import { useState, useEffect } from "react";

export default function OwnerInformation() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [countryCode, setCountryCode] = useState("+1|US");
  const [message, setMessage] = useState("");

  const countryPhoneCodes: Record<string, string> = {
    US: "+1",
    TR: "+90",
    IN: "+91",
  };

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await apiFetch("/owner/information");
        if (data.profile) {
          setProfile(data.profile);
          setPhoneNumber(data.profile.phone_number || "");
          setCompanyName(data.profile.company_name || "");
          setCountryCode(data.profile.country || "+1|US");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  const handleSubmit = async () => {
    setMessage("");
    try {
      const payload = profile
        ? { phone_number: phoneNumber }
        : {
            company_name: companyName,
            phone_number: phoneNumber,
            country_code: countryCode,
          };

      const data = await apiFetch("/owner/information", {
        method: profile ? "PATCH" : "POST",
        body: JSON.stringify(payload),
      });

      setMessage(data.message || "Operation successful");

      if (!profile && data.success) {
        setProfile({
          company_name: companyName,
          phone_number: phoneNumber,
          country: countryCode.split("|")[1],
        });
      }
    } catch (err: any) {
      console.error(err);
      setMessage(err.message || "Request failed");
    }
  };

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-center">Owner Information</h2>

      {message && (
        <div className="bg-blue-100 text-blue-800 p-3 rounded">
          {message}
        </div>
      )}

      {/* Information Box */}
      <div className="bg-white border rounded-lg shadow p-5">
        <h3 className="text-lg font-medium mb-4">Current Profile</h3>

        {profile ? (
          <div className="space-y-2 text-sm">
            <p><strong>Company Name:</strong> {profile.company_name}</p>
            <p><strong>Country:</strong> {profile.country}</p>
            <p><strong>Phone Number:</strong> {profile.phone_number}</p>
          </div>
        ) : (
          <p className="text-gray-500">No information yet.</p>
        )}
      </div>

      {/* Form Box */}
      <div className="bg-white border rounded-lg shadow p-5">
        <h3 className="text-lg font-medium mb-4">
          {profile ? "Update Phone Number" : "Create Profile"}
        </h3>

        {!profile && (
          <>
            <input
              type="text"
              className="border p-2 rounded w-full mb-3"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />

            <select
              className="border p-2 rounded w-full mb-3"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              {Object.entries(countryPhoneCodes).map(([code, phone]) => (
                <option key={code} value={`${phone}|${code}`}>
                  {phone} {code}
                </option>
              ))}
            </select>
          </>
        )}

        <input
          type="text"
          className="border p-2 rounded w-full mb-4"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <button
          className={`w-full py-2 rounded text-white ${
            profile ? "bg-blue-600" : "bg-green-600"
          }`}
          onClick={handleSubmit}
        >
          {profile ? "Update" : "Submit"}
        </button>
      </div>
    </div>
  );
}
