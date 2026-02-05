// pages/terms.js
import Head from "next/head";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | Bassni</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-md rounded-2xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Terms of Service
          </h1>
          <div className="text-gray-500 text-sm mb-8">
            Last updated: {/* Insert Date */}
          </div>

          <p className="mb-6">
            These Terms of Service ("Terms") govern your access to and use of the
            Bassni mobile application ("App"). Bassni is owned and operated by{" "}
            <strong>Mohammad Reza Mahmoudi</strong> as an individual developer.
          </p>

          <p className="mb-6">
            By accessing or using the App, you agree to be bound by these Terms.
            If you do not agree, you must not use the App.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Eligibility
          </h2>
          <p className="mb-6">
            You must be at least <strong>13 years old</strong> to use Bassni. By
            using the App, you represent and warrant that you meet this
            requirement.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. Account Registration
          </h2>
          <p className="mb-6">
            To access certain features, you may be required to create an
            account. You are responsible for maintaining the confidentiality of
            your account credentials and for all activity that occurs under
            your account.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. User Content
          </h2>
          <p className="mb-4">
            Users may upload images, captions, and other content ("User
            Content"). By posting User Content, you:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Confirm that you own or have rights to the content</li>
            <li>Grant Bassni a non-exclusive, worldwide license to display and
              distribute the content within the App</li>
            <li>Acknowledge that posted content is public by default</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Prohibited Content and Conduct
          </h2>
          <p className="mb-4">
            You agree not to post or engage in content or behavior that:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Contains nudity, sexual, or pornographic material</li>
            <li>Promotes violence, hate, or harassment</li>
            <li>Violates any applicable law or regulation</li>
            <li>Infringes intellectual property rights</li>
            <li>Attempts to exploit or harm others</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Content Moderation
          </h2>
          <p className="mb-6">
            Bassni reserves the right to review, remove, or restrict access to
            any content that violates these Terms or community standards, with
            or without notice.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            6. Account Suspension and Termination
          </h2>
          <p className="mb-6">
            We may suspend or terminate your account at any time if you violate
            these Terms or misuse the App. You may delete your account at any
            time through the App settings.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            7. Third-Party Services
          </h2>
          <p className="mb-6">
            The App integrates third-party services such as Google
            Authentication, Google AdMob, and cloud infrastructure providers.
            Bassni is not responsible for the practices or content of third
            parties.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            8. Disclaimer of Warranties
          </h2>
          <p className="mb-6">
            The App is provided on an <strong>"as is"</strong> and{" "}
            <strong>"as available"</strong> basis. We make no warranties,
            express or implied, regarding availability, reliability, or
            accuracy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            9. Limitation of Liability
          </h2>
          <p className="mb-6">
            To the maximum extent permitted by law, Bassni shall not be liable
            for any indirect, incidental, or consequential damages arising from
            your use of the App.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            10. Indemnification
          </h2>
          <p className="mb-6">
            You agree to indemnify and hold harmless Bassni from any claims,
            damages, or expenses arising out of your use of the App or violation
            of these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            11. Governing Law
          </h2>
          <p className="mb-6">
            These Terms shall be governed by and construed in accordance with
            the laws of <strong>Turkey (TR)</strong>, without regard to conflict
            of law principles.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            12. Changes to These Terms
          </h2>
          <p className="mb-8">
            We may update these Terms from time to time. Continued use of the
            App after changes constitutes acceptance of the updated Terms.
          </p>

          <footer className="border-t border-gray-200 pt-6 text-gray-500 text-sm">
            <p className="mb-1">
              <strong>Owner:</strong> Mohammad Reza Mahmoudi
            </p>
            <p className="mb-1">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:bassni.app@gmail.com"
                className="text-blue-600 hover:underline"
              >
                bassni.app@gmail.com
              </a>
            </p>
            <p className="mb-1">
              <strong>App Name:</strong> Bassni
            </p>
            <p>
              <strong>Jurisdiction:</strong> Turkey (TR)
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
