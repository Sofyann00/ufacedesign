import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - PT CERITA LAMA INDONESIA',
  description: 'Terms of Service and conditions for using Ufacedesign services',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground italic mb-8">
            Last Updated: June 15, 2024
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Introduction
              </h2>
              <p className="text-muted-foreground">
                Welcome to Ufacedesign. These Terms of Service govern your use of our website and design services. By accessing our website or engaging our services, you agree to these terms. Please read them carefully.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Service Description
              </h2>
              <p className="text-muted-foreground">
                Ufacedesign provides UI/UX design services including but not limited to user interface design, user experience research, wireframing, prototyping, design systems, UX writing, and logo design. Our services are delivered according to the specifications agreed upon in the project proposal or service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Project Process
              </h2>
              <p className="text-muted-foreground">
                Our design process typically includes discovery, research, wireframing, design, and delivery phases. Clients will receive deliverables as outlined in their service agreement. We offer a specific number of revision rounds as detailed in each service package. Additional revisions beyond the included amount may incur extra charges.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Payment Terms
              </h2>
              <p className="text-muted-foreground">
                Payment terms are specified in the service agreement. For most design projects, we require a 50% deposit before work begins, with the remaining balance due upon project completion. For subscription-based services, payment is due according to the billing cycle specified. We accept payment via bank transfer, credit card, and other methods specified on our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                Upon full payment, clients receive ownership rights to the final deliverables as specified in the service agreement. Ufacedesign retains the right to display the work in our portfolio unless otherwise agreed. We respect all third-party intellectual property and expect clients to provide only content they have rights to use. Design systems, templates, and component libraries may have specific licensing terms detailed in the service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Confidentiality
              </h2>
              <p className="text-muted-foreground">
                We treat all client information as confidential. This includes business strategies, user research data, and proprietary information shared during the design process. We may require clients to sign a Non-Disclosure Agreement for projects involving sensitive information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Project Cancellation
              </h2>
              <p className="text-muted-foreground">
                If a client wishes to cancel a project after work has begun, payment will be due for all work completed up to the cancellation date. Deposits are non-refundable unless otherwise specified in the service agreement. Ufacedesign reserves the right to terminate a project if a client violates these terms or if circumstances prevent project completion.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                8. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                Ufacedesign is not liable for any indirect, consequential, or incidental damages arising from our services. Our total liability shall not exceed the amount paid for the services. While we strive to deliver designs that improve user experience and business outcomes, we cannot guarantee specific business results from implementing our designs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                9. Changes to Terms
              </h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be effective upon posting to our website. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                10. Contact Information
              </h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-2">
                <p>PT CERITA LAMA INDONESIA</p>
                <p>Gedung Is Plaza Lt. 5,</p>
                <p>Jl Pramuka Kav 150,</p>
                <p>Utan Kayu Utara, Matraman,</p>
                <p>Jakarta Timur,</p>
                <p>13120</p>
                <p>Email: admin@Ufacedesign.com</p>
                <p>Phone: (021) 50111528</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 