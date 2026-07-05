import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p className="text-muted-foreground">Last updated: July 5, 2026</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using Mikav AI (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        Mikav AI is an open-source Malayalam AI platform that provides cultural information about Kerala, open datasets, and community tools. The Service is provided free of charge.
      </p>

      <h2>3. Use of Service</h2>
      <p>You agree to:</p>
      <ul>
        <li>Use the Service only for lawful purposes</li>
        <li>Not misrepresent AI-generated content as human-authored research</li>
        <li>Not attempt to reverse-engineer or misuse the platform</li>
        <li>Respect the community and other users</li>
      </ul>

      <h2>4. Intellectual Property</h2>
      <p>
        Mikav AI is licensed under the MIT License. Open datasets are provided under their respective licenses as noted in documentation. User-contributed content remains the property of contributors.
      </p>

      <h2>5. Disclaimer</h2>
      <p>
        The Service is provided &quot;as is&quot; without warranties of any kind. Cultural and historical information is provided for educational purposes and may not be exhaustive or fully accurate.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        Mikav AI shall not be liable for any damages arising from the use of the Service, including but not limited to direct, indirect, incidental, or consequential damages.
      </p>

      <h2>7. Changes to Terms</h2>
      <p>
        We may update these terms from time to time. Continued use of the Service after changes constitutes acceptance of the new terms.
      </p>

      <h2>8. Contact</h2>
      <p>
        For questions about these terms, contact us at <a href="mailto:hello@mikav.in">hello@mikav.in</a>.
      </p>
    </>
  );
}
