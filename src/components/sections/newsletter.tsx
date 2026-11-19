import { ArrowUpRight, Mail } from "lucide-react";
import { MotionLink, Reveal } from "@/components/motion";

export function Newsletter() {
  return (
    <section className="newsletter" id="newsletter">
      <div className="page-shell newsletter-grid">
        <Reveal><p className="eyebrow eyebrow-lime"><Mail size={14} /> The newsletter</p><h2>Keep the<br /><em>thread going.</em></h2></Reveal>
        <Reveal delay={0.1} className="newsletter-copy"><p>New episodes and Conor’s essays on what they add up to. Up to once a week, no noise.</p><MotionLink className="button button-lime" href="https://newsletter.chainofthought.show/" target="_blank">Subscribe free <ArrowUpRight size={17} /></MotionLink></Reveal>
      </div>
    </section>
  );
}
