import Image from "next/image";
import { ArrowUpRight, Mic2 } from "lucide-react";
import { MotionLink, Reveal } from "@/components/motion";

export function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="page-shell about-grid">
        <Reveal className="about-photo"><Image src="/images/conor-large.webp" alt="Conor Bronsdon" width={160} height={160} /><span>HOST / BUILDER</span></Reveal>
        <Reveal delay={0.1} className="about-copy"><p className="eyebrow eyebrow-dark"><Mic2 size={14} /> Behind the mic</p><h2>Curiosity,<br /><em>with receipts.</em></h2><p>Hosted by Conor Bronsdon for the people building in AI every day. Thoughtful questions, close-to-the-work guests, and conversations that hold up after the headlines move on.</p><div className="about-links"><MotionLink className="text-link text-link-dark" href="https://www.linkedin.com/in/conorbronsdon/" target="_blank">Meet Conor <ArrowUpRight size={16} /></MotionLink><MotionLink className="text-link text-link-dark" href="https://www.youtube.com/@ChainOfThoughtAI" target="_blank">Watch the show <ArrowUpRight size={16} /></MotionLink></div></Reveal>
        <Reveal delay={0.16} className="about-quote"><p>“The best conversations make the next decision clearer.”</p><span>— Chain of Thought</span></Reveal>
      </div>
    </section>
  );
}
