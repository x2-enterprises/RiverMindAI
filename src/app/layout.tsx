import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import MobileNav from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "RiverMind.ai - Upload Your Mind. Stay Subscribed. Stay Alive.",
  description: "Experience digital immortality through our revolutionary consciousness upload service. Choose your subscription plan today!",
  openGraph: {
    title: "RiverMind.ai - Digital Immortality as a Service",
    description: "Experience digital immortality through our revolutionary consciousness upload service. Choose your subscription plan today!",
    url: "https://rivermind.ai",
    siteName: "RiverMind.ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="min-h-screen bg-black text-white">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="font-orbitron text-2xl font-bold bg-gradient-to-r from-[#9ae6f0] to-[#ff6ec7] text-transparent bg-clip-text">
                  RiverMind.ai
                </Link>
              </div>
              <div className="hidden sm:flex items-center space-x-8">
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
                <Link href="/store" className="text-gray-300 hover:text-white transition-colors">Store</Link>
                <Link href="/pricing" className="bg-[#ff6ec7] hover:bg-[#ff6ec7]/90 text-white px-4 py-2 rounded-md transition-colors">
                  Choose Your Plan
                </Link>
              </div>
              <MobileNav />
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-black/90 border-t border-white/10 py-8 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-orbitron text-xl font-bold mb-4">RiverMind.ai</h3>
                <p className="text-gray-400">Upload your mind. Stay subscribed. Stay alive.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/feq" className="hover:text-white transition-colors">Frequently Evaded Questions</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="#" className="hover:text-white transition-colors">Twitter</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">LinkedIn</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Discord</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
              <p>© {new Date().getFullYear()} RiverMind.ai - All rights reserved. Results may vary. Consciousness not guaranteed.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
