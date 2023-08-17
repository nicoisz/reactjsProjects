import "./App.css";
import { TwitterFollowCard } from "./twitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing={false} userName="nicotoo_">
        Nicolas Silva
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing userName="elonmusk">
        elon musk{" "}
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing userName="pheralb">
        eskdjs ssk{" "}
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false} userName="ICONAtatiana">
        asdasd adsda
      </TwitterFollowCard>
    </section>
  );
}
