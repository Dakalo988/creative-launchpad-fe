import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Rocket, Layers, HeartHandshake } from "lucide-react";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-5xl text-center animate-fade-in-slow">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            From CreativeNexus to <span className="text-gradient">ZwieX</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            ZwieX means good things inspired by the Venda word “Zwivhuya.” It’s our promise to
            build digital experiences that are blessings to the people and brands they touch.
          </p>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl space-y-8 text-lg leading-relaxed text-muted-foreground">
          <p>
            We began as <span className="text-foreground font-semibold">CreativeNexus</span> studio obsessed with design and
            detail. But as our work evolved, so did our purpose. We weren’t just designing websites. We were
            building systems, automations, and resilient digital experiences that helped brands grow. The name
            needed to grow with us.
          </p>
          <p>
            <span className="text-foreground font-semibold">ZwieX</span> is that evolution. A proudly African brand with a global
            mindset futuristic, confident, and intentional. We stand at the intersection of creativity and
            technology, where imagination becomes engineering, and ideas become outcomes.
          </p>
          <p>
            The <span className="text-foreground font-semibold">“X”</span> represents the unknown: the next, the future, the variable we
            solve for. And <span className="text-foreground font-semibold">“Zwie”</span> is our essence good things created with care:
            design that feels premium, systems that scale, and experiences that inspire progress.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-primary/20 rounded-2xl p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Mission</h3>
            <p className="text-muted-foreground">
              We build innovative digital experiences that bring ideas to life blending design, code, and
              automation to help brands grow.
            </p>
          </div>

          <div className="bg-card border border-primary/20 rounded-2xl p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Essence</h3>
            <p className="text-muted-foreground">
              ZwieX means good things creations that last. We craft work that is beautiful, reliable, and built
              for the future.
            </p>
          </div>

          <div className="bg-card border border-primary/20 rounded-2xl p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <HeartHandshake className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Promise</h3>
            <p className="text-muted-foreground">
              We partner with founders and teams to design systems, not just pages experiences that feel premium
              and perform under pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center bg-card border border-primary/20 rounded-2xl p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Good things, built to last.</h2>
          <p className="text-muted-foreground mb-8">
            If you believe great design and smart engineering can change your business, we’d love to build with
            you.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground font-semibold hover:opacity-90 transition hover-glow"
          >
            Explore Services
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;
