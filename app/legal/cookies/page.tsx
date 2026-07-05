import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
};

export default function CookiesPage() {
  return (
    <>
      <h1>Cookie Policy</h1>
      <p className="text-muted-foreground">Last updated: July 5, 2026</p>

      <h2>1. What Are Cookies</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you use it.
      </p>

      <h2>2. Cookies We Use</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Essential</td>
            <td>Required for basic site functionality</td>
            <td>Session</td>
          </tr>
          <tr>
            <td>Analytics</td>
            <td>Help us understand usage patterns</td>
            <td>1 year</td>
          </tr>
          <tr>
            <td>Preferences</td>
            <td>Remember your settings and choices</td>
            <td>1 year</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Third-Party Cookies</h2>
      <p>
        We may use third-party services (such as analytics providers) that set their own cookies. We do not control these cookies.
      </p>

      <h2>4. Managing Cookies</h2>
      <p>
        You can manage or disable cookies through your browser settings. Note that disabling cookies may affect site functionality.
      </p>
      <ul>
        <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
        <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies</li>
        <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
      </ul>

      <h2>5. Changes</h2>
      <p>
        We may update this cookie policy as our use of cookies evolves. Check this page for the latest version.
      </p>

      <h2>6. Contact</h2>
      <p>
        For questions about our cookie usage, contact us at <a href="mailto:hello@mikav.in">hello@mikav.in</a>.
      </p>
    </>
  );
}
