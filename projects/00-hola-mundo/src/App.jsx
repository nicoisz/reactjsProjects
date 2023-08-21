import "./App.css";
import { TwitterFollowCard } from "./twitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="nicotoo_">Nicolas Silva</TwitterFollowCard>
      <TwitterFollowCard userName="elonmusk">elon musk </TwitterFollowCard>
      <TwitterFollowCard userName="pheralb">eskdjs ssk </TwitterFollowCard>
      <TwitterFollowCard userName="ICONAtatiana">
        asdasd adsda
      </TwitterFollowCard>
    </section>
  );
}
