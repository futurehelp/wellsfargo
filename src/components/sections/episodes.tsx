import Image from "next/image";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { MotionLink, Reveal } from "@/components/motion";
import { latestEpisodes } from "@/lib/site-content";

export function Episodes() {
  return (
    <section className="episodes section-pad" id="episodes">
      <div className="page-shell">
        <div className="section-heading">
          <Reveal><p className="eyebrow eyebrow-dark">Listen now</p><h2>The latest thinking.</h2></Reveal>
          <Reveal delay={0.1} className="section-heading-aside"><p>One conversation at a time, with the people close enough to the work to see what’s really changing.</p><MotionLink className="text-link text-link-dark" href="#decoded">Explore the signal <ArrowUpRight size={16} /></MotionLink></Reveal>
        </div>
        <div className="episode-grid">
          {latestEpisodes.map((episode, index) => (
            <Reveal key={episode.number} delay={index * 0.08} className={`episode-card ${index === 0 ? "episode-card-featured" : ""}`}>
              <div className="episode-image"><Image src={episode.image} alt={episode.title} fill sizes="(max-width: 700px) 100vw, 33vw" /><span>EP {episode.number}</span></div>
              <div className="episode-body"><div className="episode-meta"><span>{episode.tag}</span><span><Clock3 size={13} /> {episode.duration}</span></div><h3>{episode.title}</h3><p>{episode.guest}</p><a href="#episodes" aria-label={`Play episode ${episode.number}`} className="episode-arrow"><ArrowUpRight size={18} /></a></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
