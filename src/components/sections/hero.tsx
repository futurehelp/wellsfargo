import Image from "next/image";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { MotionLink, Reveal } from "@/components/motion";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-background" />
      <div className="page-shell hero-grid">
        <div className="hero-copy">
          <Reveal className="eyebrow"><Sparkles size={14} /> The AI infrastructure podcast</Reveal>
          <Reveal delay={0.08}>
            <h1>
              The people building
              <br />
              <em>what comes next.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.16} className="hero-description">
            <p>Conversations with the engineers, founders, and operators shipping AI agents, infrastructure, and evaluation systems.</p>
            <div className="hero-actions">
              <MotionLink className="button button-lime" href="#episodes"><Play size={16} fill="currentColor" /> Play latest</MotionLink>
              <MotionLink className="text-link text-link-light" href="#about">Start here <ArrowRight size={16} /></MotionLink>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.12} className="hero-art">
          <Image src="/images/home.jpg" alt="Chain of Thought guests and visual identity" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
          <div className="hero-art-caption"><span>EPISODE 85</span><strong>Reasoning through<br />what changes next.</strong></div>
        </Reveal>
      </div>
      <div className="page-shell hero-bottom">
        <span>Hosted by Conor Bronsdon</span>
        <span>New conversations every week</span>
        <span>AI · systems · people</span>
      </div>
    </section>
  );
}
