const applicationsData = {
  ev: {
    title: "Electric Vehicles & eMobility",
    products: [
      {
        name: "Programmable DC Power Supply",
        image: "../assets/images/LAB-SMP.png",
        usage: [
          "Battery pack charge/discharge cycling",
          "Motor drive and inverter testing",
          "On-board charger (OBC) validation",
          "BMS HIL simulation and validation",
        ],
      },
      {
        name: "Regenerative Electronic Load",
        image: "../assets/images/LAB-SMP.png",
        usage: [
          "Energy recovery during battery discharge testing",
          "EV powertrain efficiency testing",
          "High-power DC load simulation",
          "Thermal and endurance testing",
        ],
      },
    ],
  },

  "renewable-energy": {
    title: "Renewable Energy & Grid",
    products: [
      {
        name: "Grid Simulator",
        image: "../assets/images/LAB-SMP.png",
        usage: [
          "Solar inverter MPPT testing",
          "Grid compliance testing",
          "Voltage/frequency disturbance simulation",
          "Anti-islanding verification",
        ],
      },
      {
        name: "Bidirectional Power Supply",
        image: "../assets/images/LAB-SMP.png",
        usage: [
          "Energy storage system (ESS) testing",
          "Battery charge/discharge cycles",
          "Microgrid simulation",
          "Renewable integration validation",
        ],
      },
    ],
  },

  "aerospace-defence": {
    title: "Aerospace & Defence",
    products: [
      {
        name: "High Precision AC Source",
        image: "../assets/images/LAB-SMP.png",
        usage: [
          "MIL-STD-704 compliance testing",
          "Avionics power simulation",
          "Aircraft electrical system validation",
          "Frequency variation testing",
        ],
      },
      {
        name: "DC Power Supply",
        image: "../assets/images/LAB-SMP.png",
        usage: [
          "Satellite subsystem testing",
          "DO-160 compliance",
          "Radar and communication systems validation",
          "Ground support equipment testing",
        ],
      },
    ],
  },

  rd: {
    title: "R&D Laboratories",
    products: [
      {
        name: "Programmable Power Supply",
        image: "../assets/images/LAB-SMP.png",
        usage: [
          "Prototype validation",
          "Converter topology testing",
          "Component characterization",
          "Low-noise precision testing",
        ],
      },
      {
        name: "Electronic Load",
        image: "../assets/images/LAB-SMP.png",
        usage: [
          "SMPS performance testing",
          "Efficiency measurement",
          "EMC pre-compliance testing",
          "Dynamic load simulation",
        ],
      },
    ],
  },

  "industrial-automation": {
    title: "Industrial Automation",
    products: [
      {
        name: "AC Source",
        image: "../assets/images/LAB-SMP.png",
        usage: [
          "Servo and VSD testing",
          "Industrial equipment validation",
          "Voltage variation testing",
          "Factory automation systems",
        ],
      },
      {
        name: "DC Power Supply",
        image: "../assets/images/LAB-SMP.png",
        usage: [
          "PLC and control panel testing",
          "UPS system validation",
          "Industrial electronics testing",
          "Reliability and burn-in testing",
        ],
      },
    ],
  },

  "consumer-electronics": {
    title: "Consumer Electronics",
    products: [
      {
        name: "DC Power Supply",
        image: "../assets/images/LAB-SMP.png",
        usage: [
          "USB-PD testing",
          "Mobile and laptop charger validation",
          "SMPS efficiency testing",
          "Adapter testing",
        ],
      },
      {
        name: "Electronic Load",
        image: "../assets/images/LAB-SMP.png",
        usage: [
          "LED driver testing",
          "Battery discharge testing",
          "IEC 62368 safety testing",
          "Consumer device validation",
        ],
      },
    ],
  },
};

function buildUsecaseItems(usageList) {
  return usageList
    .map(
      (u) => `
    <div class="usecase-item">
      <div class="usecase-dot"><i class="bi bi-check2"></i></div>
      <p class="usecase-text">${u}</p>
    </div>
  `,
    )
    .join("");
}

function renderApplication() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  const container = document.getElementById("application-content");

  if (!cat) {
    container.innerHTML = "";
    return;
  }

  document.querySelectorAll(".app-section-block").forEach((el) => {
    el.style.display = "none";
  });

  if (!applicationsData[cat]) {
    container.innerHTML =
      "<p style='padding:4rem 2rem;text-align:center;color:var(--mid)'>Application not found.</p>";
    return;
  }

  const app = applicationsData[cat];

  // Each product gets its own full section block, alternating layout like the static page
  const sectionsHTML = app.products
    .map((product, index) => {
      const isEven = index % 2 === 0;

      const leftCol = `
      <div class="reveal reveal-left">
        <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius:8px; display:block;">
      </div>
    `;

      const rightCol = `
      <div class="reveal reveal-right">
        <div class="section-label" style="margin-bottom:1rem;">Typical Use Cases</div>
        <h3 style="font-family:var(--font-heading);font-weight:800;font-size:1.4rem;margin-bottom:1.5rem;">${product.name}</h3>
        ${buildUsecaseItems(product.usage)}
      </div>
    `;

      // Even index: image left, usecases right
      // Odd index: usecases left, image right (mirror layout like static page)
      const gridContent = isEven
        ? `${leftCol}${rightCol}`
        : `${rightCol}${leftCol}`;

      return `
      <section class="app-section-block">
        <div class="container">
          <div class="app-detail-grid">
            ${gridContent}
          </div>
        </div>
      </section>
    `;
    })
    .join("");

  // Page title header block
  const headerHTML = `
    <div style="background:var(--white);padding:3rem 0 0;">
      <div class="container">
        <div class="section-label">Application Area</div>
        <h2 class="section-title">${app.title}</h2>
        <div class="red-rule"></div>
      </div>
    </div>
  `;

  container.innerHTML = headerHTML + sectionsHTML;

  // Re-trigger reveal animations for dynamically injected elements
  if (typeof window.observeNewRevealElements === "function") {
    window.observeNewRevealElements(container);
  } else {
    container
      .querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => {
        el.classList.add("revealed");
      });
  }
}

document.addEventListener("DOMContentLoaded", renderApplication);
