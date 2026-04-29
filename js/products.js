/**
 * SANDIK TECHNOLOGIES — PRODUCTS JS
 * Manages product catalog, filtering, and rendering
 * Based on ET System Electronic GmbH product range
 */

(function () {
  "use strict";

  /* ── PRODUCT DATA ────────────────────────── */
  const CATALOG = {
    "dc-sources": {
      label: "DC Sources",
      icon: "bi-lightning-charge",
      subcats: {
        "": { label: "All DC Sources" },
        "lab-smp": { label: "LAB/SMP Series (750W–2.4kW)" },
        "lab-hp": { label: "LAB/HP Series (3kW–63kW)" },
        "lab-slv": { label: "LAB/SLV High Voltage" },
        "lab-linear": { label: "Linear DC Sources" },
      },
      products: {
        "lab-smp": [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "LAB/SMP-60/25",
            series: "SMP",
            name: "60V / 25A DC Power Supply — 750W",
            icon: "⚡",
            specs: [
              "Output: 0–60V, 0–25A, 750W",
              "Switching technology, low noise",
              "CV / CC modes, RS232 + Analog I/F",
              "OVP / OCP / OTP protection",
              'Compact 1U 19" format',
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "LAB/SMP-160/15",
            series: "SMP",
            name: "160V / 15A DC Power Supply — 2.4kW",
            icon: "⚡",
            specs: [
              "Output: 0–160V, 0–15A, 2.4kW",
              "CV / CC / CR / CP (Professional)",
              "ATI 5/10V isolated analog interface",
              "PV-array simulation capable",
              'Benchtop or 19" rack mount',
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "LAB/SMP-320/7.5",
            series: "SMP",
            name: "320V / 7.5A DC Power Supply — 2.4kW",
            icon: "⚡",
            specs: [
              "Output: 0–320V, 0–7.5A, 2.4kW",
              "Sequential control via USB/RS485",
              "8 memory slots, 200 steps each",
              "Quiet operation, EMC compliant",
              "OVP / OCP / OTP protection",
            ],
          },
        ],
        "lab-hp": [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "LAB/HP-40/75",
            series: "HP",
            name: "40V / 75A High Power DC Source — 3kW",
            icon: "⚡",
            specs: [
              "Output: 0–40V, 0–75A, 3kW",
              "TFT touchscreen display",
              "CV / CC / CR / CP + PV simulation",
              "USB, RS232, LAN, GPIB (option)",
              "High-speed option available",
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "LAB/HP-120/25",
            series: "HP",
            name: "120V / 25A High Power DC Source — 3kW",
            icon: "⚡",
            specs: [
              "Output: 0–120V, 0–25A, 3kW",
              "Script standalone test operation",
              "USB data-log, floating output",
              "OVP / OCP / OTP / UVP",
              "Master-slave parallel operation",
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "LAB/HP-600/105",
            series: "HP",
            name: "600V / 105A High Power DC — 63kW",
            icon: "⚡",
            specs: [
              "Output: 0–600V, 0–105A, 63kW",
              '19" 9U rack format',
              "Up to 1MW via master-slave parallel",
              "PV array + Battery Sim options",
              "Voltage output up to 1,500V",
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "LAB/HP-1000/60",
            series: "HP",
            name: "1000V / 60A High Power DC — 60kW",
            icon: "⚡",
            specs: [
              "Output: 0–1,000V, 0–60A",
              "High-voltage industrial grade",
              "IGBT PWM switching technology",
              "Internal temp-regulated fan",
              "CE / UL / CSA approvals available",
            ],
          },
        ],
        "lab-slv": [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "LAB/SLV-1000/200",
            series: "SLV",
            name: "1000V Autorange Bidirectional DC — 100kW",
            icon: "⚡",
            specs: [
              "0–1000V autorange output",
              "100kW–300kW per single system",
              "Up to 1.2MW (4 units parallel)",
              "Battery Sim & PV Sim options",
              "IGBT PWM, high efficiency regen",
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "LAB/SLV-1500/300",
            series: "SLV",
            name: "1500V High Voltage DC Source",
            icon: "⚡",
            specs: [
              "Output: 0–1500V, 0–300A",
              "Standard voltages: 1000V/1500V/2000V",
              "Currents in ratio ×2, ×3, ×4",
              "Custom V/I on request",
              "Single-system up to 300kW",
            ],
          },
        ],
        "lab-linear": [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "LAB/SMS-60/20",
            series: "SMS",
            name: "60V / 20A Linear Regulated DC Source",
            icon: "⚡",
            specs: [
              "Linear regulated — ultra-low ripple",
              "CV / CC with LED display",
              "Floating output, short-circuit proof",
              "Optional IEEE 488, RS232, analog",
              "3-phase input option available",
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "LAB/ARS-60/20",
            series: "ARS",
            name: "60V / 20A Autoranging Linear DC Source",
            icon: "⚡",
            specs: [
              "Linear with automatic range selection",
              "Built-in electronic load",
              "Double current / double voltage mode",
              "Fast control response ~250µs",
              "Short-term 480W peak load",
            ],
          },
        ],
      },
    },

    "ac-sources": {
      label: "AC Sources",
      icon: "bi-activity",
      subcats: {
        "": { label: "All AC Sources" },
        "1ph": { label: "Single Phase Programmable" },
        "3ph": { label: "Three Phase Programmable" },
        motor: { label: "Motor-Controlled AC Sources" },
      },
      products: {
        "1ph": [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "ACS-1500-1Ø",
            series: "ACS",
            name: "1500VA Single Phase Programmable AC Source",
            icon: "〜",
            specs: [
              "Output: 0–300V AC, 45–450Hz",
              "THD < 0.5% at full load",
              "Harmonic generation & simulation",
              "IEC 61000-4-11/13 compliance",
              "USB / LAN / RS232 interfaces",
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "ACS-6000-1Ø",
            series: "ACS",
            name: "6kVA Single Phase AC Source",
            icon: "〜",
            specs: [
              "0–300V AC, 15Hz–1000Hz",
              "High power single-phase output",
              "Waveform synthesis capability",
              "Phase / frequency / amplitude control",
              '19" rack, parallel expansion',
            ],
          },
        ],
        "3ph": [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "ACS-15000-3Ø",
            series: "ACS",
            name: "15kVA Three Phase Programmable AC Source",
            icon: "〜",
            specs: [
              "3Ø / 1Ø selectable output",
              "0–300V L-N, 0–700VAC per phase",
              "Frequency: 15Hz – 2000Hz",
              "Phase angle control ±0.1°",
              "Worldwide grid standard simulation",
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "ACS-2MVA-3Ø",
            series: "ACS",
            name: "Up to 2000kVA Three Phase AC Source",
            icon: "〜",
            specs: [
              "Output: 0–700VAC / 1000VDC per phase",
              "Max current up to 2000A per phase",
              "Sine / square / triangle waveforms",
              "1Ø and 3Ø network simulation",
              "Configurable output frequency to 2000Hz",
            ],
          },
        ],
        motor: [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "MCS-AUTO",
            series: "MCS",
            name: "Regulated Motor-Controlled AC Source",
            icon: "〜",
            specs: [
              "Motor-controlled voltage regulation",
              "Separate V and current displays",
              "Robust mechanical construction",
              "Optional digital interfaces",
              "Stable output under varying load",
            ],
          },
        ],
      },
    },

    "dc-bidir": {
      label: "DC Bidirectional",
      icon: "bi-arrow-left-right",
      subcats: {
        "": { label: "All DC Bidirectional" },
        "lab-hpr": { label: "LAB/HPR Series (7kW–1.4MW)" },
        "lab-slv-e": { label: "LAB/SLV E Series (100kW–1.2MW)" },
        "lab-mobi": { label: "LAB/MOBI Multi-Channel" },
      },
      products: {
        "lab-hpr": [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "LAB/HPR-120/60",
            series: "HPR",
            name: "120V / 60A Regenerative Bidir DC — 7kW",
            icon: "↔",
            specs: [
              "Source & Sink in single unit",
              "Regenerative — energy back to grid",
              "Efficiency > 92% in both quadrants",
              "Wide operating range",
              "EV battery, capacitor testing",
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "LAB/HPR-600/200",
            series: "HPR",
            name: "600V / 200A Regenerative Bidir DC — 120kW",
            icon: "↔",
            specs: [
              "0–600V bidirectional operation",
              "0–200A source & sink",
              "Regenerative energy return",
              "CAN / LAN / USB interfaces",
              '19" rack, modular expandable',
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "LAB/HPR-1200/600",
            series: "HPR",
            name: "1200V / 600A Bidir DC — 720kW (1.4MW sys)",
            icon: "↔",
            specs: [
              "720kW per unit, 1.4MW max system",
              "Fully regenerative, zero waste heat",
              "Battery formation & cycling",
              "Complete system solutions available",
              "EV / ESS testing platform",
            ],
          },
        ],
        "lab-slv-e": [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "LAB/SLV-E-1000",
            series: "SLV-E",
            name: "1000V Autorange Bidir — 100kW to 300kW/unit",
            icon: "↔",
            specs: [
              "0–1000V autorange, bidir",
              "100kW, 150kW, 200kW, 250kW, 300kW",
              "Up to 1.2MW (4 units parallel)",
              "Battery Sim & PV Sim built-in",
              "IGBT PWM, high-efficiency regen",
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "LAB/SLV-E-1500",
            series: "SLV-E",
            name: "1500V / 2000V Bidir High Voltage Source",
            icon: "↔",
            specs: [
              "Standard: 1000V / 1500V / 2000V",
              "Currents in ratio ×2, ×3, ×4",
              "Autorange output function",
              "Per-unit power: 100–300kW",
              "Custom models on request",
            ],
          },
        ],
        "lab-mobi": [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "LAB/MOBI-2CH",
            series: "MOBI",
            name: "2-Channel Bidirectional DC System",
            icon: "↔",
            specs: [
              "2 individually controlled channels",
              "Per-channel: source & load functions",
              "Up to 1200V / 1200A per channel",
              "Cross-channel energy recycling",
              "Multi-cell / multi-battery test",
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "LAB/MOBI-4CH",
            series: "MOBI",
            name: "4-Channel Bidirectional DC System",
            icon: "↔",
            specs: [
              "4 independently programmable channels",
              "Source or sink per channel",
              "Up to 1200V / 1200A nominals",
              "Parallel energy recovery",
              "Ideal for module-level testing",
            ],
          },
        ],
      },
    },

    "ac-bidir": {
      label: "AC Bidirectional",
      icon: "bi-arrow-repeat",
      subcats: {
        "": { label: "All AC Bidirectional" },
        "1ph-bidir": { label: "Single Phase AC Bidirectional" },
        "3ph-bidir": { label: "Three Phase AC Bidirectional" },
      },
      products: {
        "1ph-bidir": [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "ABS-1500-1Ø",
            series: "ABS",
            name: "1500VA Single Phase AC Bidirectional",
            icon: "↺",
            specs: [
              "Source and Sink modes",
              "Grid feedback / regenerative",
              "Frequency: 15Hz–1000Hz",
              "PF, harmonic injection & absorption",
              "IEC grid standard compliance",
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "ABS-6000-1Ø",
            series: "ABS",
            name: "6kVA Single Phase AC Bidirectional",
            icon: "↺",
            specs: [
              "0–300V AC bidirectional",
              "High power single-phase",
              "Regen energy to grid",
              "Configurable frequency range",
              "USB / LAN / RS232 control",
            ],
          },
        ],
        "3ph-bidir": [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "ABS-15000-3Ø",
            series: "ABS",
            name: "15kVA Three Phase AC Bidirectional",
            icon: "↺",
            specs: [
              "3Ø bidirectional source & load",
              "Grid feedback, regenerative",
              "0–700VAC per phase",
              "15Hz – 2000Hz range",
              "Phase angle ±0.1° control",
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "ABS-2MVA-3Ø",
            series: "ABS",
            name: "Up to 2000kVA Three Phase AC Bidirectional",
            icon: "↺",
            specs: [
              "Source & sink combined",
              "Up to 2000kVA systems",
              "Worldwide grid simulation",
              "Regen efficiency > 90%",
              "Industrial test platform",
            ],
          },
        ],
      },
    },

    "dc-loads": {
      label: "DC Electronic Loads",
      icon: "bi-cpu",
      subcats: {
        "": { label: "All DC Loads" },
        "elp-dcw": { label: "ELP/DCW High Speed Loads" },
        "elp-dcm": { label: "ELP/DCM Modular Loads" },
        nxi: { label: "NXI Multi-Channel Loads" },
        std: { label: "Standard DC Loads" },
      },
      products: {
        "elp-dcw": [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "ELP/DCW-300/60",
            series: "DCW",
            name: "300V / 60A High Speed Electronic DC Load",
            icon: "⬇",
            specs: [
              "µs-fast load transients: 60A/µs",
              "CC / CV / CR / CP modes",
              "Battery & supercapacitor testing",
              "AC impedance measurements",
              "Parallel operation for power exp.",
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "ELP/DCW-600/100",
            series: "DCW",
            name: "600V / 100A High Speed Electronic DC Load",
            icon: "⬇",
            specs: [
              "High bandwidth: 30kHz dynamic mode",
              "Min operating voltage: 0.5V",
              "LED simulation, short-circuit sim",
              "Fast V and I regulation",
              "Parallel for higher power",
            ],
          },
        ],
        "elp-dcm": [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "ELP/DCM-600/40",
            series: "DCM",
            name: "600V / 40A Modular Electronic DC Load",
            icon: "⬇",
            specs: [
              "Modular expandable architecture",
              "Parallel operation",
              "30kHz dynamic load mode",
              "Battery discharge testing",
              "LED driver simulation",
            ],
          },
        ],
        nxi: [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "NXI-F1000",
            series: "NXI",
            name: "NXI-F1000 Multi-Channel DC Load Chassis",
            icon: "⬇",
            specs: [
              "Up to 16 channels per chassis",
              "Each channel independently controlled",
              "OCP / OVP / OPP per channel",
              "Test modes: CCD / CVD / CPD / CRD",
              "LED simulation, short-circuit per ch.",
            ],
          },
        ],
        std: [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "ELP/DC-200/20",
            series: "ELP",
            name: "200V / 20A Standard Electronic DC Load",
            icon: "⬇",
            specs: [
              "CC / CV / CR / CP modes",
              "RS232, RS485, USB interfaces",
              "8 memory slots, 200 steps each",
              "Parallel test software (up to 8 units)",
              "Programmable sequences",
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "ELP/DC-600/30",
            series: "ELP",
            name: "600V / 30A Standard Electronic DC Load",
            icon: "⬇",
            specs: [
              "Output: 0–600V, 0–30A",
              "CC / CV / CR / CP modes",
              "Digital + analog interfaces",
              "Short-circuit & OCP protection",
              '19" rack compatible',
            ],
          },
        ],
      },
    },

    "ac-dc-loads": {
      label: "AC/DC Loads",
      icon: "bi-plug",
      subcats: {
        "": { label: "All AC/DC Loads" },
        universal: { label: "Universal AC/DC Loads" },
      },
      products: {
        universal: [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "ELP/ACL-3000",
            series: "ACL",
            name: "3kW AC/DC Universal Electronic Load",
            icon: "🔌",
            specs: [
              "AC: 85–265V, 45–440Hz",
              "DC: 0–420V",
              "Power factor adjustable 0–1",
              "IEC 62368 / IEC 60950 compliance",
              "SMPS, charger, LED driver testing",
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "ELP/ACL-6000",
            series: "ACL",
            name: "6kW AC/DC Universal Electronic Load",
            icon: "🔌",
            specs: [
              "Higher power AC/DC universal load",
              "AC 85–265V or 150–530V range",
              "Full PF control (0 to 1, lead/lag)",
              "Three-phase input available",
              "USB PD / GaN charger testing",
            ],
          },
        ],
      },
    },

    "battery-pv-sim": {
      label: "Battery & PV Simulators",
      icon: "bi-battery-half",
      subcats: {
        "": { label: "All Simulators" },
        "bat-sim": { label: "Battery Simulators" },
        "pv-sim": { label: "PV Array Simulators" },
      },
      products: {
        "bat-sim": [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "BAT-SIM-100V/200A",
            series: "BAT",
            name: "100V / 200A Programmable Battery Simulator",
            icon: "🔋",
            specs: [
              "Li-Ion, LFP, NMC, NiMH, NCA profiles",
              "SoC / SoH / internal resistance sim",
              "OCV modeling from cell to pack",
              "CAN bus BMS communication",
              "Fault injection capability",
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "BAT-SIM-300V/100A",
            series: "BAT",
            name: "300V / 100A Battery Simulator — Pack Level",
            icon: "🔋",
            specs: [
              "Battery pack simulation up to 300V",
              "Bidirectional charge & discharge",
              "EV module and pack testing",
              "Real-time electrochemical modeling",
              "CAN / LAN / RS232 interfaces",
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "BAT-SIM-600V/200A",
            series: "BAT",
            name: "600V / 200A High Power Battery Simulator",
            icon: "🔋",
            specs: [
              "EV battery pack sim, 600V, 120kW",
              "Bidirectional, regenerative",
              "HIL-compatible interface",
              "Custom chemistry models available",
              "Regenerative energy recovery",
            ],
          },
        ],
        "pv-sim": [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "PV-SIM-600V/50A",
            series: "PV",
            name: "600V / 50A PV Array Simulator",
            icon: "☀",
            specs: [
              "I-V curve simulation per EN 50530",
              "MPPT tracking test capability",
              "Standard Si & thin-film models",
              "User-definable I-V curves",
              "EN 62109 / IEC 62116 testing",
            ],
          },
          {
            image: "../assets/images/LAB-SMP.png",
            model: "PV-SIM-1000V/25A",
            series: "PV",
            name: "1000V / 25A PV Array Simulator — HV",
            icon: "☀",
            specs: [
              "High-voltage PV string simulation",
              "1000V — utility-scale inverter test",
              "MPPT tracking efficiency testing",
              "Dynamic shading & mismatch scenarios",
              "Solar inverter full validation",
            ],
          },
        ],
      },
    },

    "system-solutions": {
      label: "System Solutions",
      icon: "bi-diagram-3",
      subcats: {
        "": { label: "All System Solutions" },
        turnkey: { label: "Turnkey Test Systems" },
        "battery-test": { label: "Battery Test Systems" },
        hil: { label: "HIL / Custom Systems" },
      },
      products: {
        turnkey: [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "SYS-TURNKEY",
            series: "SYS",
            name: "Turnkey Power Electronics Test System",
            icon: "⚙",
            specs: [
              'Fully wired 19" cabinet systems',
              "Multiple sources + loads integrated",
              "Custom interfaces & I/O modules",
              "Insulation monitors & interlocks",
              "Industrial PC with test software",
            ],
          },
        ],
        "battery-test": [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "SYS-BATTEST",
            series: "SYS",
            name: "Complete Battery Formation & Cycle System",
            icon: "🔋",
            specs: [
              "Multi-channel formation systems",
              "Bidirectional charge / discharge",
              "BMS interface (CAN / LAN)",
              "Data logging & analysis software",
              "EV cell / module / pack level",
            ],
          },
        ],
        hil: [
          {
            image: "../assets/images/LAB-SMP.png",
            model: "SYS-HIL",
            series: "SYS",
            name: "Hardware-in-Loop (HIL) Power Test System",
            icon: "⚙",
            specs: [
              "Real-time HIL integration",
              "dSPACE / NI / MATLAB compatible",
              "Custom power ranges and configs",
              "Signal conditioning & protection",
              "Full project management & support",
            ],
          },
        ],
      },
    },
  }; // end CATALOG

  /* ── STATE ───────────────────────────────── */
  let currentCat = "dc-sources";
  let currentSub = "";

  /* ── INIT ────────────────────────────────── */
  function init() {
    if (!document.getElementById("productsGrid")) return; // Not on products page

    buildSidebar();

    // Check URL params for initial state
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("cat") || "dc-sources";
    const sub = params.get("sub") || "";

    loadCategory(cat, sub);
    activateSidebarItem(cat, sub);
  }

  /* ── BUILD SIDEBAR ───────────────────────── */
  function buildSidebar() {
    const sidebar = document.getElementById("productsSidebar");
    if (!sidebar) return;

    let html = '<div class="sidebar-section-title">Product Categories</div>';

    Object.entries(CATALOG).forEach(([catKey, catData]) => {
      const subs = catData.subcats;
      const subEntries = Object.entries(subs).filter(([k]) => k !== "");

      html += `
        <button
          class="sidebar-cat-btn"
          id="scb-${catKey}"
          onclick="window.SANDIK_PRODUCTS.toggleCat('${catKey}')"
          aria-expanded="false">
          <span>
            <i class="bi ${catData.icon}" style="color:var(--red);margin-right:.5rem;"></i>
            ${catData.label}
          </span>
          <i class="bi bi-chevron-down"></i>
        </button>
        <div class="sidebar-subcats" id="ssc-${catKey}">
          <button class="sidebar-sub-btn" id="ssb-${catKey}-"
            onclick="window.SANDIK_PRODUCTS.loadCat('${catKey}','')">
            All ${catData.label}
          </button>`;

      subEntries.forEach(([subKey, subData]) => {
        html += `
          <button class="sidebar-sub-btn" id="ssb-${catKey}-${subKey}"
            onclick="window.SANDIK_PRODUCTS.loadCat('${catKey}','${subKey}')">
            ${subData.label}
          </button>`;
      });

      html += `</div>`;
    });

    sidebar.innerHTML = html;
  }

  /* ── TOGGLE CAT ──────────────────────────── */
  function toggleCat(catKey) {
    const btn = document.getElementById(`scb-${catKey}`);
    const ssc = document.getElementById(`ssc-${catKey}`);
    if (!btn || !ssc) return;

    const isOpen = btn.classList.contains("open");

    // Close all
    document.querySelectorAll(".sidebar-cat-btn").forEach((b) => {
      b.classList.remove("open", "active");
    });
    document.querySelectorAll(".sidebar-subcats").forEach((s) => {
      s.style.display = "none";
    });

    if (!isOpen) {
      btn.classList.add("open", "active");
      ssc.style.display = "block";
    }

    loadCategory(catKey, "");
  }

  /* ── LOAD CAT (external call) ─────────────── */
  function loadCat(catKey, subKey) {
    activateSidebarItem(catKey, subKey);
    loadCategory(catKey, subKey);
  }

  /* ── ACTIVATE SIDEBAR ────────────────────── */
  function activateSidebarItem(catKey, subKey) {
    // Clear all
    document
      .querySelectorAll(".sidebar-cat-btn, .sidebar-sub-btn")
      .forEach((b) => b.classList.remove("active"));

    // Open parent
    const catBtn = document.getElementById(`scb-${catKey}`);
    const ssc = document.getElementById(`ssc-${catKey}`);
    if (catBtn) catBtn.classList.add("open", "active");
    if (ssc) ssc.style.display = "block";

    // Activate sub
    const subBtn = document.getElementById(`ssb-${catKey}-${subKey}`);
    if (subBtn) subBtn.classList.add("active");
  }

  /* ── LOAD CATEGORY / RENDER PRODUCTS ──────── */
  function loadCategory(catKey, subKey) {
    currentCat = catKey;
    currentSub = subKey;

    const catData = CATALOG[catKey];
    if (!catData) return;

    // Get products
    let products = [];

    if (subKey && catData.products[subKey]) {
      products = catData.products[subKey];
    } else {
      // All: flatten
      Object.values(catData.products).forEach((arr) => {
        products = products.concat(arr);
      });
    }

    // Update breadcrumb
    const bc = document.getElementById("productsBreadcrumb");
    if (bc) {
      const subLabel = subKey
        ? catData.subcats[subKey]?.label || subKey
        : catData.label;
      bc.innerHTML = `Products / <span>${catData.label}${subKey ? " / " + subLabel : ""}</span>`;
    }

    // Update count
    const countEl = document.getElementById("productsCount");
    if (countEl) {
      countEl.textContent = `${products.length} Product${products.length !== 1 ? "s" : ""}`;
    }

    // Render
    const grid = document.getElementById("productsGrid");
    const noMsg = document.getElementById("noProductsMsg");

    if (!grid) return;

    if (products.length === 0) {
      grid.innerHTML = "";
      if (noMsg) noMsg.style.display = "block";
      return;
    }

    if (noMsg) noMsg.style.display = "none";

    grid.innerHTML = products
      .map((p) => renderProductCard(p, catData.label))
      .join("");

    // Animate in
    grid.querySelectorAll(".product-card").forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(16px)";
      setTimeout(() => {
        card.style.transition = "opacity 0.35s ease, transform 0.35s ease";
        card.style.opacity = "1";
        card.style.transform = "none";
      }, i * 60);
    });
  }

  /* ── RENDER PRODUCT CARD ─────────────────── */
  function renderProductCard(product, catLabel) {
    const specsHTML = product.specs.map((s) => `<li>${s}</li>`).join("");

    return `
      <div class="product-card">
        <div class="product-card-img">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          loading="lazy"
          class="product-real-img"
        />
          <div class="product-card-img-bg"></div>
          <div class="product-card-img-icon">${product.icon}</div>
          <div class="product-cat-badge">${catLabel}</div>
          <div class="product-series-tag">${product.series}</div>
        </div>
        <div class="product-card-body">
          <div class="product-model">Model: ${product.model}</div>
          <div class="product-name">${product.name}</div>
          <ul class="product-specs">${specsHTML}</ul>
          <div class="product-actions">
            <button class="btn-enquire" onclick="window.location.href='contact.html?product=${encodeURIComponent(product.model)}'">
              Request Quote
            </button>
          </div>
        </div>
      </div>`;
  }

  /* ── EXPOSE TO GLOBAL ────────────────────── */
  window.SANDIK_PRODUCTS = { toggleCat, loadCat, CATALOG };

  /* ── INIT ON DOM READY ───────────────────── */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
