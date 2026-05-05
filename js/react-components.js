/* Shared React islands for incremental migration */
(function sharedReactComponents(global) {
  const e = React.createElement;

  const NAV_LINKS = [
    { href: "discover.html", label: "Discover" },
    { href: "map.html", label: "Campus Map" },
    { href: "rooms.html", label: "Rooms" },
    { href: "events.html", label: "Events" },
    { href: "leaderboard.html", label: "Leaderboard" },
  ];

  function Navbar(props) {
    const currentPath = props.currentPath || "";
    return e(
      "div",
      { className: "nav-inner max-w-[1200px] mx-auto px-6" },
      e(
        "a",
        { href: "index.html", className: "logo tracking-tight" },
        "BRIDGR",
        e("span", { className: "logo-dot" }, ".")
      ),
      e(
        "ul",
        { className: "nav-links" },
        NAV_LINKS.map(function mapLink(link) {
          const isActive = currentPath.endsWith(link.href);
          return e(
            "li",
            { key: link.href },
            e(
              "a",
              { href: link.href, className: isActive ? "nav-active" : "" },
              link.label
            )
          );
        })
      ),
      e(
        "div",
        { className: "nav-actions flex items-center" },
        e("a", { href: "login.html", className: "nav-avatar", title: "Login" }, "AR"),
        e(
          "a",
          { href: "post.html", className: "btn-primary nav-cta inline-flex items-center" },
          "Post a problem"
        )
      )
    );
  }

  global.BridgrReactComponents = {
    e: e,
    Navbar: Navbar,
  };
})(window);
