import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="text-muted-foreground">Last updated: July 5, 2026</p>

      <h2>1. Introduction</h2>
      <p>
        Mikav AI (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy. This policy explains what data we collect, how we use it, and your rights.
      </p>

      <h2>2. Data We Collect</h2>
      <p>We may collect:</p>
      <ul>
        <li><strong>Usage data</strong> — pages visited, interactions, and general usage patterns</li>
        <li><strong>Device data</strong> — browser type, operating system, and screen size</li>
        <li><strong>Voluntary data</strong> — information you provide through forms or contributions</li>
      </ul>

      <h2>3. How We Use Data</h2>
      <p>We use collected data to:</p>
      <ul>
        <li>Improve the platform and user experience</li>
        <li>Fix bugs and monitor performance</li>
        <li>Communicate updates when you opt in</li>
      </ul>

      <h2>4. Data Sharing</h2>
      <p>
        We do not sell your data. We may share anonymized, aggregated data for research purposes. We do not share personally identifiable information with third parties without your consent.
      </p>

      <h2>5. Open Source Data</h2>
      <p>
        Cultural datasets provided through Mikav are open and publicly available. Contributions to open datasets are attributed as specified in contribution guidelines.
      </p>

      <h2>6. Cookies</h2>
      <p>
        We may use cookies for functionality and analytics. See our <a href="/legal/cookies">Cookie Policy</a> for details.
      </p>

      <h2>7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal data</li>
        <li>Request deletion of your data</li>
        <li>Opt out of communications</li>
        <li>Request data portability</li>
      </ul>

      <h2>8. Security</h2>
      <p>
        We implement reasonable measures to protect your data. No system is fully secure — report vulnerabilities to <a href="mailto:security@mikav.in">security@mikav.in</a>.
      </p>

      <h2>9. Changes</h2>
      <p>
        We may update this policy. Changes will be posted on this page with an updated date.
      </p>

      <h2>10. Contact</h2>
      <p>
        For privacy questions, contact us at <a href="mailto:hello@mikav.in">hello@mikav.in</a>.
      </p>
    </>
  );
}
