(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      nav.classList.toggle("is-open", open);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    }));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const launcher = document.querySelector("#bot-launcher");
  const panel = document.querySelector("#bot-panel");
  const close = document.querySelector("#bot-close");
  const messages = document.querySelector("#bot-messages");
  const addMessage = (text, cls = "bot-message") => {
    const p = document.createElement("p");
    p.className = cls;
    p.textContent = text;
    messages.replaceChildren(p);
  };
  const openBot = (open) => {
    panel.hidden = !open;
    launcher.setAttribute("aria-expanded", String(open));
    if (open) close.focus();
  };
  launcher?.addEventListener("click", () => openBot(panel.hidden));
  close?.addEventListener("click", () => { openBot(false); launcher.focus(); });
  document.querySelectorAll("[data-bot]").forEach(button => button.addEventListener("click", () => {
    const topic = button.dataset.bot;
    if (topic === "projects") addMessage("Explore the Builds section for the JSON-powered chatbot and personal portfolio. Use each GitHub link to inspect the source.");
    else if (topic === "skills") addMessage("The listed stack includes HTML, CSS, JavaScript, Python, C++, Git, and GitHub. Please verify the list reflects your current skills.");
    else addMessage("Use the Contact section for email, GitHub, and LinkedIn. Replace the email placeholder with your real public contact address before publishing.");
  }));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && panel && !panel.hidden) openBot(false);
  });
})();