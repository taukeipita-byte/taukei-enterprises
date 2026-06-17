import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Phone, Clock, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Taukei Enterprises for business inquiries, acquisition opportunities, investment discussions, or partnership proposals. Based in Santa Rosa, California.",
};

const inquiryTypes = [
  "General Inquiry",
  "Business Acquisition",
  "Investment / Partnership",
  "Home Care Services",
  "Employment",
  "Media & Press",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Taukei Enterprises"
        title="Let's Start a Conversation"
        subtitle="Whether you're a potential investor, acquisition target, partner, or client — we'd love to hear from you."
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left: form */}
            <div className="lg:col-span-3">
              <AnimateIn direction="left">
                <h2 className="font-display text-2xl font-bold text-navy mb-2">Send a Message</h2>
                <p className="text-navy/60 text-sm mb-8">
                  Fill out the form below and our team will respond within 1–2 business days.
                </p>
                <ContactForm inquiryTypes={inquiryTypes} />
              </AnimateIn>
            </div>

            {/* Right: contact info */}
            <div className="lg:col-span-2">
              <AnimateIn direction="right" delay={0.1}>
                <div className="space-y-8">
                  {/* Contact details */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy mb-6">Contact Information</h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-navy/5 flex items-center justify-center flex-shrink-0">
                          <MapPin size={18} className="text-gold" />
                        </div>
                        <div>
                          <p className="font-semibold text-navy text-sm">Headquarters</p>
                          <p className="text-navy/60 text-sm mt-1">
                            Santa Rosa, California<br />
                            <span className="text-navy/40 text-xs">Regional Operations: Sonoma County</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-navy/5 flex items-center justify-center flex-shrink-0">
                          <Mail size={18} className="text-gold" />
                        </div>
                        <div>
                          <p className="font-semibold text-navy text-sm">Email</p>
                          <a href="mailto:info@taukeienterprises.com" className="text-navy/60 text-sm hover:text-gold transition-colors duration-200 cursor-pointer mt-1 block">
                            info@taukeienterprises.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-navy/5 flex items-center justify-center flex-shrink-0">
                          <Phone size={18} className="text-gold" />
                        </div>
                        <div>
                          <p className="font-semibold text-navy text-sm">Phone</p>
                          <a href="tel:+17075551000" className="text-navy/60 text-sm hover:text-gold transition-colors duration-200 cursor-pointer mt-1 block">
                            (707) 555-1000
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-navy/5 flex items-center justify-center flex-shrink-0">
                          <Clock size={18} className="text-gold" />
                        </div>
                        <div>
                          <p className="font-semibold text-navy text-sm">Office Hours</p>
                          <p className="text-navy/60 text-sm mt-1">
                            Monday – Friday: 9:00 AM – 5:00 PM PT<br />
                            <span className="text-navy/40 text-xs">Weekend: By Appointment</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subsidiary */}
                  <div className="p-6 border border-gold/30 bg-navy/2">
                    <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Flagship Company</p>
                    <h4 className="font-display font-bold text-navy mb-1">Providential Fijian Home Care</h4>
                    <p className="text-navy/60 text-sm mb-3">Serving Sonoma, Marin &amp; San Francisco Counties</p>
                    <a
                      href="https://www.providentialfijianhomecare.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all duration-200 cursor-pointer"
                    >
                      Visit their website <ExternalLink size={14} />
                    </a>
                  </div>

                  {/* Acquisition box */}
                  <div className="p-6 bg-navy text-white">
                    <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">Business Acquisitions</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Are you a business owner exploring exit options? We approach acquisitions with
                      integrity and respect. Let&rsquo;s have a confidential conversation.
                    </p>
                    <p className="text-white/40 text-xs mt-3">All inquiries are strictly confidential.</p>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-gray-50 py-12">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="h-64 bg-navy/5 border border-gray-200 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <MapPin size={32} className="text-gold mx-auto mb-3" />
                <p className="font-display font-bold text-navy">Santa Rosa, California</p>
                <p className="text-navy/50 text-sm">Sonoma County · Bay Area Region</p>
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light" />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
