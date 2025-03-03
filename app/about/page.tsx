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
            Your Trusted UI/UX Design Partner in Indonesia
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Story
              </h2>
              <p className="text-muted-foreground">
                Founded with a passion for creating exceptional digital experiences, Ufacedesign has emerged as a leading UI/UX design studio in Indonesia. Our journey began with a clear vision: to help businesses connect with their users through intuitive, beautiful, and user-centered design solutions that drive engagement and satisfaction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Why Choose Us
              </h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li>Expert UI/UX Design Team</li>
                <li>User-Centered Design Approach</li>
                <li>Research-Driven Solutions</li>
                <li>Comprehensive Design Systems</li>
                <li>Iterative Design Process</li>
                <li>Proven Track Record in Digital Design</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Commitment
              </h2>
              <p className="text-muted-foreground">
                At Ufacedesign, we are committed to creating digital experiences that users love. Our team of skilled designers and researchers works tirelessly to understand your users' needs and create interfaces that are both beautiful and functional. We pride ourselves on building long-term partnerships and ensuring client success through innovative design solutions and user experience excellence.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Services
              </h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li>User Interface (UI) Design</li>
                <li>User Experience (UX) Design</li>
                <li>User Research & Testing</li>
                <li>Design Systems Development</li>
                <li>Interactive Prototyping</li>
                <li>Mobile & Web App Design</li>
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
                  <p>Komplek Perkantoran Duta Merlin Blok F13</p>
                  <p>Jalan Gajah Mada, Petojo Utara</p>
                  <p>Gambir, Jakarta Pusat</p>
                  <p>DKI Jakarta, Indonesia</p>
                  <p>Kode Pos: 10130</p>
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
                <p>Let's discuss your design needs:</p>
                <div className="mt-2 space-y-1">
                  <p>Phone: (021) 50111528</p>
                  <p>Email: admin@Ufacedesign.com</p>
                  <p>WhatsApp: +62 812-7766-8953</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 