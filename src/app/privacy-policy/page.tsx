
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Your Store Name</title>
        <meta name="description" content="Learn how we collect, use, and protect your personal data." />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last Updated: April 20, 2025</p>

        <Section title="1. Information We Collect">
          <ul className="list-disc list-inside space-y-1">
            <li>Name</li>
            <li>Email Address</li>
            <li>Shipping Address</li>
            <li>Billing Address</li>
            <li>Password</li>
            <li>Order and Payment Information (processed securely via third-party providers like Wix Payments or Stripe)</li>
            <li>Technical Data (such as IP address, browser type, and visit duration)</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul className="list-disc list-inside space-y-1">
            <li>Create and manage your account</li>
            <li>Process your orders and payments</li>
            <li>Provide customer support</li>
            <li>Send order confirmations and updates</li>
            <li>Improve our website functionality and user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </Section>

        <Section title="3. How We Share Your Information">
          <p>We do <strong>not sell</strong> your personal information. However, we may share your data with trusted third parties necessary to operate our business, including:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Payment processors (e.g., Stripe, Wix Payments)</li>
            <li>Shipping providers</li>
            <li>Email service providers (e.g., Wix Email)</li>
            <li>Analytics tools (e.g., Google Analytics)</li>
          </ul>
          <p className="mt-2">These parties are only given the information necessary to perform their functions and are not permitted to use your data for any other purpose.</p>
        </Section>

        <Section title="4. How We Protect Your Information">
          <ul className="list-disc list-inside space-y-1">
            <li>Secure servers</li>
            <li>Encrypted password storage</li>
            <li>HTTPS connections</li>
          </ul>
          <p className="mt-2">Despite these measures, no method of transmission over the internet is 100% secure.</p>
        </Section>

        <Section title="5. Your Rights">
          <p>If you are a resident of California or certain other jurisdictions, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Request access to the personal data we have about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt-out of data sharing (where applicable)</li>
          </ul>
        </Section>

        <Section title="6. Cookies and Tracking">
          <p>We may use cookies and similar technologies to:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Remember your preferences</li>
            <li>Track usage for analytics</li>
            <li>Improve site performance</li>
          </ul>
          <p className="mt-2">You can control cookie settings through your browser.</p>
        </Section>

        <Section title="7. Changes to This Policy">
          <p>We may update this Privacy Policy periodically. If changes are significant, we will notify you via email or a prominent message on our site.</p>
        </Section>

      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="text-gray-700 space-y-2">{children}</div>
    </div>
  );
}
