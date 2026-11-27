document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Navigation Toggle
  const menuToggle = document.getElementById("menuToggle");
  const headerNav = document.getElementById("headerNav");

  if (menuToggle && headerNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = headerNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    headerNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        headerNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 2. Verticals Carousel (2 pages of 4 cards)
  const verticalsSlides = [
    [
      {
        img: "images/residential.webp",
        title: "Residential",
        text: "High-rise apartments, gated villas, and integrated townships."
      },
      {
        img: "images/commercial.webp",
        title: "Commercial",
        text: "Grade-A office towers, retail hubs, and corporate campuses."
      },
      {
        img: "images/industrial.webp",
        title: "Industrial",
        text: "Manufacturing plants, logistics parks, and heavy-load warehouses."
      },
      {
        img: "images/institutional.webp",
        title: "Institutional",
        text: "Educational campuses, healthcare centers, and civic facilities."
      }
    ],
    [
      {
        img: "images/government.webp",
        title: "Government",
        text: "Administrative complexes, civic buildings, and public utilities."
      },
      {
        img: "images/public-infrastructure.webp",
        title: "Public Infrastructure",
        text: "Transit hubs, bridges, and urban utility corridors."
      },
      {
        img: "images/sustainable-buildings.webp",
        title: "Sustainable Buildings",
        text: "LEED-certified green developments and net-zero facilities."
      },
      {
        img: "images/commercial.webp",
        title: "Mixed-Use",
        text: "Integrated urban developments combining retail, work, and living."
      }
    ]
  ];

  let verticalsIndex = 0;
  const verticalsTrack = document.getElementById("verticalsTrack");
  const verticalsCounter = document.getElementById("verticalsCounter");
  const verticalsPrev = document.getElementById("verticalsPrev");
  const verticalsNext = document.getElementById("verticalsNext");

  function renderVerticals(index) {
    if (!verticalsTrack || !verticalsCounter) return;
    const slide = verticalsSlides[index];
    verticalsTrack.innerHTML = slide
      .map(
        (item) => `
        <div class="col-lg-3 col-md-6 col-sm-6">
          <article>
            <div class="vertical-card-thumb">
              <img src="${item.img}" alt="${item.title}" />
            </div>
            <div>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </div>
          </article>
        </div>`
      )
      .join("");
    verticalsCounter.textContent = `0${index + 1}/0${verticalsSlides.length}`;
  }

  if (verticalsPrev && verticalsNext) {
    verticalsPrev.addEventListener("click", () => {
      verticalsIndex = (verticalsIndex - 1 + verticalsSlides.length) % verticalsSlides.length;
      renderVerticals(verticalsIndex);
    });
    verticalsNext.addEventListener("click", () => {
      verticalsIndex = (verticalsIndex + 1) % verticalsSlides.length;
      renderVerticals(verticalsIndex);
    });
  }

  // 3. The Ten Dimensions Carousel (5 pairs = 10 dimensions)
  const dimensionSlides = [
    [
      {
        num: "01",
        badgeClass: "dimension-badge-soft",
        img: "images/engineering-expertise.webp",
        title: "Engineering Expertise",
        desc: "Deep structural knowledge across complex terrains."
      },
      {
        num: "02",
        badgeClass: "dimension-badge-teal",
        img: "images/domain-intelligence.webp",
        title: "Domain Intelligence",
        desc: "Data-driven insights from decades of execution."
      }
    ],
    [
      {
        num: "03",
        badgeClass: "dimension-badge-soft",
        img: "images/systematic-processes.webp",
        title: "Systematic Processes",
        desc: "Standardized workflows for predictable delivery."
      },
      {
        num: "04",
        badgeClass: "dimension-badge-teal",
        img: "images/industry-standards.webp",
        title: "Industry Standards",
        desc: "Global benchmarks in safety and structural integrity."
      }
    ],
    [
      {
        num: "05",
        badgeClass: "dimension-badge-soft",
        img: "images/advanced-methodologies.webp",
        title: "Advanced Methodologies",
        desc: "Modern formwork, pre-cast, and post-tension systems."
      },
      {
        num: "06",
        badgeClass: "dimension-badge-teal",
        img: "images/technology-integration.webp",
        title: "Technology Integration",
        desc: "BIM coordination and real-time site telemetry."
      }
    ],
    [
      {
        num: "07",
        badgeClass: "dimension-badge-soft",
        img: "images/quality-assurance.webp",
        title: "Quality Assurance",
        desc: "Multi-stage material testing and audit protocols."
      },
      {
        num: "08",
        badgeClass: "dimension-badge-teal",
        img: "images/compliance-governance.webp",
        title: "Compliance Governance",
        desc: "Transparent regulatory and environmental adherence."
      }
    ],
    [
      {
        num: "09",
        badgeClass: "dimension-badge-soft",
        img: "images/engineering-precision.webp",
        title: "Engineering Precision",
        desc: "Millimeter-level tolerances on every structural element."
      },
      {
        num: "10",
        badgeClass: "dimension-badge-teal",
        img: "images/professional-management.webp",
        title: "Professional Management",
        desc: "Dedicated leadership from concept to commissioning."
      }
    ]
  ];

  let dimensionsIndex = 0;
  const dimensionsTrack = document.getElementById("dimensionsTrack");
  const dimensionsCounter = document.getElementById("dimensionsCounter");
  const dimensionsPrev = document.getElementById("dimensionsPrev");
  const dimensionsNext = document.getElementById("dimensionsNext");

  function renderDimensions(index) {
    if (!dimensionsTrack || !dimensionsCounter) return;
    const pair = dimensionSlides[index];
    dimensionsTrack.innerHTML = pair
      .map(
        (item) => `
        <div class="col-sm-6">
          <div class="dimension-card">
            <span class="dimension-badge ${item.badgeClass}">${item.num}</span>
            <div class="dimension-body">
              <img src="${item.img}" alt="${item.title}" />
              <div>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
              </div>
            </div>
          </div>
        </div>`
      )
      .join("");
    dimensionsCounter.textContent = `0${index + 1}/0${dimensionSlides.length}`;
  }

  if (dimensionsPrev && dimensionsNext) {
    dimensionsPrev.addEventListener("click", () => {
      dimensionsIndex = (dimensionsIndex - 1 + dimensionSlides.length) % dimensionSlides.length;
      renderDimensions(dimensionsIndex);
    });
    dimensionsNext.addEventListener("click", () => {
      dimensionsIndex = (dimensionsIndex + 1) % dimensionSlides.length;
      renderDimensions(dimensionsIndex);
    });
  }

  // 4. Success Stories Carousel
  const stories = [
    {
      img: "images/success-stories.webp",
      text: "Delivering an iconic waterfront cultural pavilion with complex free-form shell geometry, post-tensioned spans, and architectural exposed concrete—completed ahead of schedule with zero safety incidents."
    },
    {
      img: "images/commercial.webp",
      text: "Constructing a 28-story Grade-A corporate headquarters featuring high-performance curtain walling, seismic damping systems, and LEED Platinum sustainability certification."
    },
    {
      img: "images/industrial.webp",
      text: "Executing a 450,000 sq. ft. automated manufacturing and logistics hub with super-flat industrial flooring and long-span structural steel trusses in record turnaround time."
    }
  ];

  let storyIndex = 0;
  const storyImage = document.getElementById("storyImage");
  const storyText = document.getElementById("storyText");
  const storiesCounter = document.getElementById("storiesCounter");
  const storiesPrev = document.getElementById("storiesPrev");
  const storiesNext = document.getElementById("storiesNext");

  function renderStory(index) {
    if (!storyImage || !storyText || !storiesCounter) return;
    storyImage.src = stories[index].img;
    storyText.textContent = stories[index].text;
    storiesCounter.textContent = `0${index + 1}/0${stories.length}`;
  }

  if (storiesPrev && storiesNext) {
    storiesPrev.addEventListener("click", () => {
      storyIndex = (storyIndex - 1 + stories.length) % stories.length;
      renderStory(storyIndex);
    });
    storiesNext.addEventListener("click", () => {
      storyIndex = (storyIndex + 1) % stories.length;
      renderStory(storyIndex);
    });
  }

  // 5. Testimonials Carousel
  const testimonials = [
    "\"TenDi Infra demonstrated exceptional technical depth and schedule discipline throughout our commercial tower build. Their proactive engineering solutions saved both time and structural cost without compromising quality.\"",
    "\"Working with TenDi Infra on our institutional campus was seamless. Their transparent reporting, safety culture, and exposed concrete craftsmanship exceeded every expectation.\"",
    "\"From statutory approvals to final turnkey handover, TenDi delivered our industrial facility on budget and ahead of our production launch timeline.\""
  ];

  let testimonialIndex = 0;
  const testimonialQuote = document.getElementById("testimonialQuote");
  const testimonialsPrev = document.getElementById("testimonialsPrev");
  const testimonialsNext = document.getElementById("testimonialsNext");

  if (testimonialsPrev && testimonialsNext && testimonialQuote) {
    testimonialsPrev.addEventListener("click", () => {
      testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
      testimonialQuote.textContent = testimonials[testimonialIndex];
    });
    testimonialsNext.addEventListener("click", () => {
      testimonialIndex = (testimonialIndex + 1) % testimonials.length;
      testimonialQuote.textContent = testimonials[testimonialIndex];
    });
  }
});
