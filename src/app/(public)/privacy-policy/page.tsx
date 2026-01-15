// pages/privacy.js
import Head from "next/head";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Bassni</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-md rounded-2xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <div className="text-gray-500 text-sm mb-8">Last updated: {/* Insert Date */}</div>

          <p className="mb-4">
            Bassni is owned and operated by <strong>Mohammad Reza Mahmoudi</strong> as an individual developer.
            This Privacy Policy explains how we collect, use, store, and protect your information when you use the Bassni mobile application.
          </p>

          <p className="mb-6">
            By using the App, you agree to the practices described in this Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>

          <h3 className="text-xl font-medium text-gray-900 mb-2">1.1 Personal Information</h3>
          <p className="mb-4">We collect limited personal information necessary to operate the App:</p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Email address (used solely for account creation and authentication)</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mb-2">1.2 User-Generated Content</h3>
          <p className="mb-4">
            Users may voluntarily share content within the App, including images and captions. All user-generated content is public by default and may be viewed by other users.
          </p>

          <h3 className="text-xl font-medium text-gray-900 mb-2">1.3 Automatically Collected Information</h3>
          <p className="mb-6">
            We may collect technical and usage data such as device information, operating system, app interactions, and crash reports. This data is used only to maintain and improve the App.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Account authentication and management</li>
            <li>Operating and maintaining the App</li>
            <li>Displaying public user-generated content</li>
            <li>Enforcing community guidelines</li>
            <li>Reviewing reported content</li>
            <li>Sending push notifications (if enabled)</li>
            <li>Improving performance and user experience</li>
          </ul>
          <p className="mb-6">User data is used internally only and is never sold or shared for marketing purposes.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Public Content</h2>
          <p className="mb-6">Any images or captions you share in Bassni are publicly visible to other users. You are responsible for the content you choose to post.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Content Moderation</h2>
          <p className="mb-6">
            Bassni strictly prohibits violent content, nudity, and sexually explicit material. Users may report content that violates these rules. Reported content may be reviewed and removed.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Services</h2>
          <p className="mb-4">Bassni uses third-party services to operate the App, including:</p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Google Authentication</li>
            <li>Google Cloud</li>
            <li>Google AdMob</li>
            <li>Render Web Services</li>
            <li>Render PostgreSQL</li>
            <li>S3-compatible object storage</li>
          </ul>
          <p className="mb-6">These services process data only as required to provide their functionality and are governed by their own privacy policies.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Sharing</h2>
          <p className="mb-6">
            We do not sell, rent, or trade user data. Information may be disclosed only when required by law or valid legal requests.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Security</h2>
          <p className="mb-6">
            We implement reasonable technical and organizational measures to protect your data. However, no method of transmission or storage is completely secure.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Retention and Account Deletion</h2>
          <p className="mb-6">
            Users may delete their account at any time from within the App. Upon deletion, all personal data and all public content will be permanently deleted and cannot be recovered.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Push Notifications</h2>
          <p className="mb-6">
            Bassni may send push notifications related to app activity or updates. Users can disable notifications at any time through device or app settings.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Cookies and Tracking</h2>
          <p className="mb-6">
            Bassni is a mobile application and does not use browser cookies. Tracking, where applicable, is handled via standard mobile SDKs.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Children’s Privacy</h2>
          <p className="mb-6">
            Bassni is designed as a safe application but is not intended for children under the age of 13. We do not knowingly collect personal data from children.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Your Rights</h2>
          <p className="mb-6">
            Depending on your location, you may have the right to access, correct, or delete your personal data. Requests can be made using the contact information below.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to This Policy</h2>
          <p className="mb-8">
            We may update this Privacy Policy from time to time. Changes will be posted on this page and take effect upon publication.
          </p>

          <footer className="border-t border-gray-200 pt-6 text-gray-500 text-sm">
            <p className="mb-1"><strong>Owner:</strong> Mohammad Reza Mahmoudi</p>
            <p className="mb-1">
              <strong>Email:</strong>{" "}
              <a href="mailto:bassni.app@gmail.com" className="text-blue-600 hover:underline">
                bassni.app@gmail.com
              </a>
            </p>
            <p className="mb-1"><strong>App Name:</strong> Bassni</p>
            <p><strong>Jurisdiction:</strong> Turkey (TR)</p>
          </footer>
        </div>
      </div>
    </>
  );
}
