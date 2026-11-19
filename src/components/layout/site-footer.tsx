import { ArrowUpRight } from "lucide-react";
import { MotionLink } from "@/components/motion";

export function SiteFooter() {
  return (
    <footer className="site-footer"><div className="page-shell"><div className="footer-top"><div><div className="footer-wordmark">CHAIN<span>OF</span>THOUGHT</div><p>AI infrastructure, agents, and the people building what comes next.</p></div><div className="footer-links"><div><span>Listen</span><MotionLink href="https://www.youtube.com/@ChainOfThoughtAI" target="_blank">YouTube <ArrowUpRight size={14} /></MotionLink><MotionLink href="https://open.spotify.com/show/4axe6uydH3PT0Fy1jemjFT" target="_blank">Spotify <ArrowUpRight size={14} /></MotionLink></div><div><span>Explore</span><a href="#episodes">Episodes</a><a href="#decoded">AI, decoded</a><a href="#about">About</a></div></div></div><div className="footer-bottom"><span>© 2026 Chain of Thought</span><span>Hosted by Conor Bronsdon</span><a href="#top">Back to top ↑</a></div></div></footer>
  );
}
