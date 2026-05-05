/* Landing page React islands */
(function indexReactIslands() {
  const shared = window.BridgrReactComponents;
  if (!shared || !window.ReactDOM) return;

  const e = shared.e;

  const floatingCards = [
    { className: "float-card fc-1", text: '🐛 "async/await is lying to me"', location: "📍 Block C, 3rd floor" },
    { className: "float-card fc-2", text: '🤯 "3 hours on one pointer bug"', location: "📍 Library" },
    { className: "float-card fc-3", text: "⚡ Solved in 9 min" },
    { className: "float-card fc-4", text: "🎯 5 people nearby know React" },
  ];

  const profiles = [
    { initials: "AR", avatarClass: "profile-avatar av-1", name: "Aryan R.", title: "React Wizard 🧙", skills: ["React", "Next.js", "TypeScript"], cred: "⚡ 847 karma points", status: "🟢 available now · Block A" },
    { initials: "SK", avatarClass: "profile-avatar av-2", name: "Sneha K.", title: "Bug Slayer 🔪", skills: ["C++", "DSA", "Algorithms"], cred: "⚡ 1.2k karma points", status: "🟢 available · Library" },
    { initials: "PV", avatarClass: "profile-avatar av-3", name: "Priya V.", title: "StackOverflow Warrior 🏹", skills: ["Python", "ML", "Pandas"], cred: "⚡ 623 karma points", status: "🟡 busy · Hostel B" },
    { initials: "RT", avatarClass: "profile-avatar av-4", name: "Rahul T.", title: "Git God 🔱", skills: ["Git", "DevOps", "Docker"], cred: "⚡ 512 karma points", status: "🟢 available · Block D" },
  ];

  function FloatingCardList() {
    return e(
      e.Fragment,
      null,
      floatingCards.map(function card(cardData) {
        return e(
          "div",
          { key: cardData.className, className: cardData.className + " will-change-transform" },
          cardData.text,
          cardData.location ? e("span", { className: "fc-loc" }, cardData.location) : null
        );
      })
    );
  }

  function ProfileGrid() {
    return e(
      e.Fragment,
      null,
      profiles.map(function profile(profileData) {
        return e(
          "div",
          { key: profileData.name, className: "profile-card reveal" },
          e("div", { className: profileData.avatarClass + " shrink-0" }, profileData.initials),
          e(
            "div",
            { className: "profile-info" },
            e("div", { className: "profile-name" }, profileData.name),
            e("div", { className: "profile-title" }, profileData.title),
            e(
              "div",
              { className: "profile-skills flex flex-wrap gap-2" },
              profileData.skills.map(function skill(skillName) {
                return e("span", { key: profileData.name + "-" + skillName, className: "skill-tag" }, skillName);
              })
            ),
            e("div", { className: "profile-cred" }, profileData.cred),
            e("div", { className: "profile-status" }, profileData.status)
          )
        );
      })
    );
  }

  function renderIslands() {
    const navRoot = document.getElementById("reactNav");
    if (navRoot) {
      ReactDOM.createRoot(navRoot).render(e(shared.Navbar, { currentPath: window.location.pathname }));
    }

    const cardsRoot = document.getElementById("reactFloatingCards");
    if (cardsRoot) {
      ReactDOM.createRoot(cardsRoot).render(e(FloatingCardList));
    }

    const profilesRoot = document.getElementById("reactProfiles");
    if (profilesRoot) {
      ReactDOM.createRoot(profilesRoot).render(e(ProfileGrid));
    }

    if (typeof window.initMainInteractions === "function") {
      window.initMainInteractions();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderIslands, { once: true });
    return;
  }
  renderIslands();
})();
