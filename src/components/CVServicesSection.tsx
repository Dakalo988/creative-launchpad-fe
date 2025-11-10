import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FileText, RefreshCw, MessageSquare } from "lucide-react";

const phoneNumber = "27826656051";

const CVServicesSection = () => {
  const [showTerms, setShowTerms] = useState(false);
  const handleCTA = () => {
    const text =
      "Hello Zwiex! I'm interested in your ATS-Optimized CV Services. Please assist me.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="cv-services" className="py-24 bg-background relative">
      {/* background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">New Service</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground">
            ATS-Optimized<span className="text-gradient"> CV Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            Get a professional CV that passes ATS filters and helps you stand out to employers.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left: Description */}
          <div className="bg-card/60 border rounded-xl p-8 shadow-md">
            <p className="text-card-foreground leading-relaxed text-base md:text-lg">
              We help job seekers create modern, professional CVs that pass Applicant Tracking Systems (ATS) with high scores. Whether you’re applying for your first role or switching careers, our CVs are keyword-optimized, well-structured, and designed to impress both systems and recruiters.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Best for roles listed on LinkedIn, Indeed, and similar platforms. Share the job post link and we’ll tailor your CV to match. For jobs not listed on these platforms, ATS matching may be limited.
            </p>
            <div className="mt-6">
              <Button size="lg" className="hover-glow" onClick={handleCTA}>
                Get Your CV
              </Button>
            </div>
          </div>

          {/* Right: Pricing cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* CV Creation */}
            <div className="relative rounded-xl border bg-card p-6 shadow-md transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
              <Badge className="absolute -top-3 left-6 bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground shadow">Popular</Badge>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">CV Creation</h3>
              </div>
              <div className="mb-3 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-primary">R150</span>
              </div>
              <ul className="space-y-2 text-sm text-card-foreground">
                <li>• Professionally written & designed CV</li>
                <li>• Optimized for 80–100% ATS score</li>
                <li>• Editable & reusable format</li>
                <li>• Delivered in PDF + editable format</li>
              </ul>
              <div className="pt-5">
                <Button className="w-full" onClick={handleCTA}>Get Your CV</Button>
              </div>
            </div>

            {/* CV Revamp */}
            <div className="relative rounded-xl border bg-card p-6 shadow-md transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <RefreshCw className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">CV Revamp</h3>
              </div>
              <div className="mb-3 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-primary">R50</span>
              </div>
              <ul className="space-y-2 text-sm text-card-foreground">
                <li>• Update or refresh existing CV</li>
                <li>• Add new experience or tailor for a new job</li>
                <li>• Re-optimized for job-specific keywords</li>
              </ul>
              <div className="pt-5">
                <Button variant="outline" className="w-full" onClick={handleCTA}>Get Your CV</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Terms & Disclaimer */}
        <div className="max-w-6xl mx-auto mt-12">
          <Separator className="mb-6 opacity-50" />
          <div className="flex items-center justify-between bg-muted/30 border rounded-xl p-4">
            <h4 className="text-sm font-semibold text-foreground">Terms & Disclaimer</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowTerms((v) => !v)}
              className="text-sm"
            >
              {showTerms ? "Hide details" : "Learn more"}
            </Button>
          </div>
          {showTerms && (
            <div className="bg-muted/30 border border-t-0 rounded-b-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Zwiex CV Services provides professional CV optimization and design aimed at improving your presentation and boosting your chances of passing ATS (Applicant Tracking System) filters. While we aim for an ATS score of 80–100%, we do not guarantee interviews or job placement, as hiring decisions depend on each employer’s internal criteria.
                <br /><br />
                Our optimization is designed primarily for roles listed on platforms such as LinkedIn and Indeed. Clients can provide a link to the job posting for precise keyword alignment. For roles not listed on these platforms, ATS-focused optimization may be more challenging and results can vary.
                <br /><br />
                Clients are responsible for providing accurate and up-to-date information for all CV content. Once the CV is delivered, minor adjustments (such as typos or layout fixes) are free within 24 hours. Major revisions or updates requested after delivery — such as adding new experience, tailoring for another job, or re-optimizing keywords — fall under our R50 CV Revamp service.
                <br /><br />
                Refunds are not offered once work has been completed and delivered, as each CV is custom-made for the client.
              </p>
            </div>
          )}
        </div>

        {/* Testimonials (optional) */}
        <div className="max-w-4xl mx-auto mt-10">
          <div className="grid sm:grid-cols-2 gap-4">
            <figure className="rounded-lg border bg-card p-5 shadow-sm">
              <blockquote className="text-sm text-card-foreground">“Got my interview within a week!”</blockquote>
              <figcaption className="mt-2 text-xs text-muted-foreground">— Thato M.</figcaption>
            </figure>
            <figure className="rounded-lg border bg-card p-5 shadow-sm">
              <blockquote className="text-sm text-card-foreground">“My CV scored 92% on Jobscan amazing work!”</blockquote>
              <figcaption className="mt-2 text-xs text-muted-foreground">— Lerato S.</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVServicesSection;
