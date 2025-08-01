import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Ufacedesign',
  description: 'Learn about Ufacedesign, your trusted UI/UX Design Partner in Indonesia',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            About Ufacedesign
          </h1>
          <p className="text-sm text-muted-foreground italic mb-8">
            Transforming Digital Experiences Through Human-Centered Design
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Story
              </h2>
              <p className="text-muted-foreground">
                Ufacedesign was born from a simple belief: great design should solve real problems for real people. As a specialized UI/UX design studio in Indonesia, we've dedicated ourselves to creating digital experiences that not only look beautiful but work intuitively. Our team combines strategic thinking with creative execution to deliver designs that connect with users and drive business growth.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Why Choose Us
              </h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li>Deep expertise in UI/UX design across multiple industries</li>
                <li>Research-driven approach that puts users at the center</li>
                <li>Comprehensive design systems that scale with your business</li>
                <li>Collaborative process that involves clients at every step</li>
                <li>Focus on measurable outcomes and business impact</li>
                <li>Continuous iteration based on user feedback and data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Approach
              </h2>
              <p className="text-muted-foreground">
                We believe that exceptional design emerges from understanding both business goals and user needs. Our process begins with thorough research and discovery, followed by strategic planning, creative design, and rigorous testing. Whether we're designing a mobile app, website, or complex digital product, we focus on creating experiences that are intuitive, accessible, and delightful to use.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Services
              </h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li>UI Design & Visual Identity</li>
                <li>UX Research & User Testing</li>
                <li>Wireframing & Prototyping</li>
                <li>Mobile App & Website Design</li>
                <li>Design Systems & Component Libraries</li>
                <li>UX Writing & Content Strategy</li>
                <li>Logo Design & Brand Identity</li>
                <li>Interactive Prototypes & Usability Testing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Office Location
              </h2>
              <div className="text-muted-foreground">
                <p>Visit our design studio:</p>
                <div className="mt-2">
                  <p>Ufacedesign</p>
                  <p>Gedung Is Plaza Lt. 5,</p>
                  <p>Jl Pramuka Kav 150,</p>
                  <p>Utan Kayu Utara, Matraman,</p>
                  <p>Jakarta Timur,</p>
                  <p>13120</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Business Hours
              </h2>
              <div className="text-muted-foreground grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Weekdays:</p>
                  <p>Monday - Friday</p>
                  <p>09:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Weekends:</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Contact Information
              </h2>
              <div className="text-muted-foreground">
                <p>Ready to transform your digital experience?</p>
                <div className="mt-2 space-y-1">
                  <p>Phone: 021-50111528</p>
                  <p>Email: admin@ufacedesign.com</p>
                  <p>WhatsApp: 087724191186</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 