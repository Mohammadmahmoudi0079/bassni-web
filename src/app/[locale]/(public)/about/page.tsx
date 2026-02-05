// pages/about.js
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Bassni</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 shadow-md rounded-2xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            About Bassni
          </h1>

          <p className="text-gray-600 mb-8">
            Bassni is a simple and community-focused platform for sharing images
            with short captions. It is built to encourage creativity, discovery,
            and respectful interaction in a clean and safe environment.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Our Purpose
            </h2>
            <p className="text-gray-600">
              Bassni was created with the idea that sharing visual moments should
              be easy, enjoyable, and accessible to everyone. The app focuses on
              straightforward features without unnecessary complexity, allowing
              users to express themselves through images and concise text.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              A Safe and Respectful Space
            </h2>
            <p className="text-gray-600">
              We are committed to maintaining a platform that is safe and
              welcoming. Content that includes violence, nudity, or sexually
              explicit material is not permitted. Users can report content that
              violates our guidelines, and reported content is reviewed to help
              protect the community.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Built Independently
            </h2>
            <p className="text-gray-600">
              Bassni is independently developed and operated by{" "}
              <strong>Mohammad Reza Mahmoudi</strong>. As an individual developer,
              the focus is on thoughtful design, performance, and listening to
              user feedback to improve the app over time.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Privacy First
            </h2>
            <p className="text-gray-600">
              User privacy is taken seriously. Bassni collects only the minimum
              information required to operate the app and does not sell or share
              personal data for marketing purposes. More details can be found in
              the Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Get in Touch
            </h2>
            <p className="text-gray-600">
              Questions, feedback, or suggestions are always welcome. You can
              reach out via email at{" "}
              <a
                href="mailto:bassni.app@gmail.com"
                className="text-blue-600 hover:underline"
              >
                bassni.app@gmail.com
              </a>.
            </p>
          </section>

          <footer className="border-t border-gray-200 pt-6 mt-10 text-gray-500 text-sm">
            <p className="mb-1">
              <strong>App Name:</strong> Bassni
            </p>
            <p className="mb-1">
              <strong>Owner:</strong> Mohammad Reza Mahmoudi
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
