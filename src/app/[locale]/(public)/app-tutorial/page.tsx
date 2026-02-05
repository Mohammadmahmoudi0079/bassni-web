// pages/how-to-use.js
import Head from "next/head";

export default function HowToUse() {
  return (
    <>
      <Head>
        <title>How to Use Bassni</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 shadow-md rounded-2xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            How to Use Bassni
          </h1>

          <p className="text-gray-600 mb-10 max-w-3xl">
            Bassni is a simple and safe platform for sharing images with short
            captions and discovering content from others. This guide walks you
            through the basic features of the app.
          </p>

          {/* STEP 1 */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              1. Sign In or Create an Account
            </h2>
            <p className="text-gray-600 mb-6 max-w-3xl">
              When you open Bassni for the first time, you’ll be asked to sign
              in. Bassni uses Google Authentication for a fast and secure login
              experience.
            </p>

            {/* Screenshot placeholder */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center text-gray-400">
              Screenshot Placeholder – Sign in screen
            </div>
          </section>

          {/* STEP 2 */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              2. Explore the Feed
            </h2>
            <p className="text-gray-600 mb-6 max-w-3xl">
              After signing in, you’ll see the main feed. This is where public
              images and captions shared by other users appear.
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
              <li>Scroll to browse content</li>
              <li>Tap on an image to view it in detail</li>
              <li>Read captions added by other users</li>
            </ul>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center text-gray-400">
              Screenshot Placeholder – Main feed
            </div>
          </section>

          {/* STEP 3 */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              3. Upload an Image
            </h2>
            <p className="text-gray-600 mb-6 max-w-3xl">
              You can share your own image by tapping the upload or “add” button
              in the app.
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
              <li>Select an image from your device</li>
              <li>Add an optional caption</li>
              <li>Publish the post to make it public</li>
            </ul>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center text-gray-400">
              Screenshot Placeholder – Upload image screen
            </div>
          </section>

          {/* STEP 4 */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              4. Manage Your Profile
            </h2>
            <p className="text-gray-600 mb-6 max-w-3xl">
              Your profile shows the content you’ve shared and allows you to
              manage your account.
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
              <li>View your uploaded posts</li>
              <li>Access account settings</li>
              <li>Delete your account if needed</li>
            </ul>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center text-gray-400">
              Screenshot Placeholder – Profile screen
            </div>
          </section>

          {/* STEP 5 */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              5. Report Inappropriate Content
            </h2>
            <p className="text-gray-600 mb-6 max-w-3xl">
              Bassni is designed to be a safe platform. If you encounter content
              that violates the rules, you can report it directly from the app.
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
              <li>Tap the report option on a post</li>
              <li>Select a reason for reporting</li>
              <li>Submit the report for review</li>
            </ul>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center text-gray-400">
              Screenshot Placeholder – Report content dialog
            </div>
          </section>

          {/* FINAL SECTION */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Need Help?
            </h2>
            <p className="text-gray-600 max-w-3xl">
              If you experience any issues or have questions about using
              Bassni, you can contact us at{" "}
              <a
                href="mailto:bassni.app@gmail.com"
                className="text-blue-600 hover:underline"
              >
                bassni.app@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
