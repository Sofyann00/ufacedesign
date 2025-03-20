import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - PT CERITA LAMA INDONESIA',
  description: 'Privacy Policy for Ufacedesign services and customer data protection',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground italic mb-8">
            Last Updated: January 15, 2025
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Introduction
              </h2>
              <p className="text-muted-foreground">
                At Ufacedesign, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage our UI/UX design services. Please read this policy carefully to understand our practices regarding your personal data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground mb-3">
                We collect information to provide better services to our clients and improve our design solutions. The types of information we collect include:
              </p>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and job title when you contact us or request our services.</li>
                <li><strong>Project Information:</strong> Design requirements, brand guidelines, user personas, and other materials you share for project purposes.</li>
                <li><strong>User Research Data:</strong> Information collected during user testing, interviews, or surveys conducted as part of our UX research services (with appropriate consent).</li>
                <li><strong>Website Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on our site.</li>
                <li><strong>Communication Records:</strong> Records of our communications with you, including emails, calls, and project management tool interactions.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li>To provide and deliver our UI/UX design services</li>
                <li>To communicate with you about your project or inquiry</li>
                <li>To create and refine user personas and journey maps</li>
                <li>To conduct user research and usability testing</li>
                <li>To improve our design methodologies and service offerings</li>
                <li>To send you relevant updates about our services or design industry insights</li>
                <li>To process payments and maintain billing records</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-muted-foreground">
                We respect the confidentiality of your information and do not sell, trade, or otherwise transfer your personal information to outside parties. We may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you, provided those parties agree to keep this information confidential. This may include cloud storage providers, project management tools, and payment processors. We may also release your information when we believe release is appropriate to comply with the law or protect our rights.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. User Research and Design Artifacts
              </h2>
              <p className="text-muted-foreground">
                For UX research services, we collect data from research participants with explicit consent. This data is anonymized whenever possible and used solely for the purpose of improving design outcomes. Research recordings, transcripts, and analysis are stored securely and shared only with the client who commissioned the research. Design artifacts created during our process (wireframes, prototypes, user flows) are treated as confidential client materials.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Data Security
              </h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. These measures include internal reviews of our data collection, storage, and processing practices and security measures, as well as physical security measures to guard against unauthorized access to systems where we store personal data. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Your Rights
              </h2>
              <p className="text-muted-foreground">
                You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data or request a copy of your data in a structured, electronic format. To exercise these rights, please contact us using the information provided below. We will respond to your request within a reasonable timeframe.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                8. Portfolio and Case Studies
              </h2>
              <p className="text-muted-foreground">
                We may showcase our design work in our portfolio or case studies. We will obtain your permission before featuring your project and will respect any confidentiality requirements. You can request that we remove or anonymize your project from our portfolio at any time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                9. Changes to This Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                10. Contact Us
              </h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-2">
                <p>PT CERITA LAMA INDONESIA</p>
                <p>Gedung Is Plaza Lt. 5,</p>
                <p>Jl Pramuka Kav 150,</p>
                <p>Utan Kayu Utara, Matraman,</p>
                <p>Jakarta Timur,</p>
                <p>13120</p>
                <p>Email: support@Ufacedesign.com</p>
                <p>Phone: (021) 50111528</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 