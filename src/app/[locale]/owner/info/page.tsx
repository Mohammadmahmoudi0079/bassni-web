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

  const countryPhoneCodes = {
    US: "+1",
    TR: "+90",
    IN: "+91",
  };

  useEffect(() => {
    async function fetchProfile() {
      try {
        // apiFetch returns JSON directly
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

  const handleUpdate = async () => {
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
          country: countryCode,
        });
      }
    } catch (err: any) {
      console.error(err);
      setMessage(err.message || "Request failed");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-4 text-center">Owner Information</h2>

      {message && (
        <div className="bg-green-100 text-green-700 p-2 rounded mb-4">
          {message}
        </div>
      )}

      {profile ? (
        <div>
          <p><strong>Company Name:</strong> {profile.company_name}</p>
          <p><strong>Country:</strong> {profile.country}</p>

          <input
            type="text"
            className="border p-2 rounded w-full mb-2"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            onClick={handleUpdate}
          >
            Update Phone Number
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            className="border p-2 rounded w-full mb-2"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <select
            className="border p-2 rounded w-full mb-2"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          >
            {Object.entries(countryPhoneCodes).map(([code, phone]) => (
              <option key={code} value={`${phone}|${code}`}>
                {phone} {code}
              </option>
            ))}
          </select>

          <input
            type="text"
            className="border p-2 rounded w-full mb-2"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <button
            className="bg-green-600 text-white px-4 py-2 rounded w-full"
            onClick={handleUpdate}
          >
            Create Profile
          </button>
        </div>
      )}
    </div>
  );
}
