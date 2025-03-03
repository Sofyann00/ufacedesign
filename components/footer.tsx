import Link from "next/link";
import { Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-x-2">
              <img 
                src="/app_icon.png" 
                alt="UFaceDesign Logo"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold">UFaceDesign</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Your trusted UI/UX design partner. We specialize in creating beautiful, 
              user-centered digital experiences. From design systems to mobile apps, 
              we help businesses build products that users love to interact with.
            </p>
          </div>


          {/* Help section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-2">Technical Support</p>
              <div className="space-y-2">
                <p>
                  <a
                    href="mailto:admin@ufacedesign.com"
                    className="hover:text-foreground transition-colors"
                  >
                    admin@ufacedesign.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:021-50111528"
                    className="hover:text-foreground transition-colors"
                  >
                    021-50111528
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Office Location section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Office Location</h3>
            <div className="text-sm text-muted-foreground">
              <p className="leading-relaxed">
                Gedung Is Plaza Lt. 5,<br />
                Jl Pramuka Kav 150,<br />
                Utan Kayu Utara, Matraman,<br />
                Jakarta Timur,<br />
                13120
              </p>
            </div>
          </div>

          {/* Copyright section */}
          <div className="col-span-1 md:col-span-4 mt-16 pt-8 border-t">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} PT CERITA LAMA INDONESIA.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
