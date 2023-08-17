export function TwitterFollowCard({ children, userName, name, isFollowing }) {
  const imageUserName = `https://unavatar.io/twitter/${userName}`;
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={imageUserName} alt="" />
        <div className="tw-followCard-info">
          <strong> {children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">seguir</button>
      </aside>
    </article>
  );
}
