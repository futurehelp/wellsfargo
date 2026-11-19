import { ArrowRight, Check, Sparkles } from "lucide-react";
import { MotionLink, Reveal } from "@/components/motion";
import { topics } from "@/lib/site-content";

export function Decoded() {
  return (
    <section className="decoded section-pad" id="decoded">
      <div className="page-shell">
        <div className="decoded-grid">
          <Reveal className="decoded-copy"><p className="eyebrow eyebrow-lime"><Sparkles size={14} /> From the conversations</p><h2>AI, decoded<br /><em>for builders.</em></h2><p className="decoded-lead">Plain answers to the questions technical teams ask, linked to the guests who have actually run into them.</p><MotionLink className="text-link text-link-light" href="#newsletter">Get the next one <ArrowRight size={16} /></MotionLink></Reveal>
          <Reveal delay={0.1} className="topic-list"><div className="topic-list-header"><span>Browse the signal</span><span>06 topics</span></div>{topics.map((topic, index) => <div className="topic-row" key={topic}><span className="topic-index">0{index + 1}</span><strong>{topic}</strong><Check size={16} /></div>)}</Reveal>
        </div>
      </div>
    </section>
  );
}
