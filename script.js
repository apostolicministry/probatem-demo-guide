const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav-links]");

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", targetId);
    }
  });
});

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      navToggle.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("open");
      document.body.classList.remove("nav-open");
    }
  });
}

const toggleDisclosure = (button, panel) => {
  const isOpen = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!isOpen));
  panel.hidden = isOpen;
};

document.querySelectorAll(".question-card").forEach((card) => {
  const trigger = card.querySelector(".question-trigger");
  const answer = card.querySelector(".question-answer");

  if (trigger && answer) {
    trigger.addEventListener("click", () => toggleDisclosure(trigger, answer));
  }
});

document.querySelectorAll(".faq-item").forEach((item) => {
  const trigger = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  if (trigger && answer) {
    trigger.addEventListener("click", () => toggleDisclosure(trigger, answer));
  }
});

const tabs = document.querySelector("[data-tabs]");

if (tabs) {
  const tabButtons = [...tabs.querySelectorAll("[data-tab]")];
  const tabPanels = [...tabs.querySelectorAll("[data-panel]")];

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tab;

      tabButtons.forEach((tabButton) => {
        const isActive = tabButton === button;
        tabButton.classList.toggle("active", isActive);
        tabButton.setAttribute("aria-selected", String(isActive));
      });

      tabPanels.forEach((panel) => {
        const isActive = panel.dataset.panel === target;
        panel.hidden = !isActive;
        panel.classList.toggle("active", isActive);
      });
    });
  });
}

const demoInterests = document.querySelector("[data-demo-interests]");
const demoResponse = document.querySelector("[data-demo-response]");

if (demoInterests && demoResponse) {
  const updateDemoState = () => {
    const selectedInputs = demoInterests.querySelectorAll("input:checked");
    demoResponse.hidden = selectedInputs.length === 0;

    demoInterests.querySelectorAll(".interest-card").forEach((card) => {
      const input = card.querySelector("input");
      card.classList.toggle("selected", Boolean(input && input.checked));
    });
  };

  demoInterests.addEventListener("change", updateDemoState);
  updateDemoState();
}

// Update Calendly CTA href values in index.html when Jennifer's final scheduling link is ready.
