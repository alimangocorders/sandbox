// â”€â”€ Hub Slider â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
(function () {
    const track = document.getElementById("hub-track");
    const cards = Array.from(track.querySelectorAll(".hub-card"));
    const btnPrev = document.getElementById("hub-prev");
    const btnNext = document.getElementById("hub-next");
    const visible = 4;
    let cur = 0;
    const max = cards.length - visible;

    function getCardWidth() {
        const gap = parseFloat(window.getComputedStyle(track).gap) || 15;
        return cards[0].getBoundingClientRect().width + gap;
    }

    function updateHubButtons() {
        btnPrev.disabled = cur === 0;
        btnNext.disabled = cur >= max;
        btnPrev.style.opacity = cur === 0 ? "0.25" : "1";
        btnNext.style.opacity = cur >= max ? "0.25" : "1";
        btnPrev.style.cursor = cur === 0 ? "not-allowed" : "pointer";
        btnNext.style.cursor = cur >= max ? "not-allowed" : "pointer";
    }

    function hubGo(index) {
        cur = Math.max(0, Math.min(index, max));

        if (cur === max) {
            const wrapWidth = track.parentElement.getBoundingClientRect().width;
            const gap = parseFloat(window.getComputedStyle(track).gap) || 15;
            const totalWidth = cards.reduce((acc, card, i) => {
                return (
                    acc +
                    card.getBoundingClientRect().width +
                    (i < cards.length - 1 ? gap : 0)
                );
            }, 0);
            track.style.transform = `translateX(-${totalWidth - wrapWidth}px)`;
        } else {
            track.style.transform = `translateX(-${cur * getCardWidth()}px)`;
        }

        updateHubButtons();
    }

    btnPrev.addEventListener("click", () => hubGo(cur - 1));
    btnNext.addEventListener("click", () => hubGo(cur + 1));

    updateHubButtons();
})();

// â”€â”€ Social Section Animations â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
gsap.from(".social-text-left", {
    scrollTrigger: {
        trigger: ".social-section",
        start: "top 75%",
        toggleActions: "play none none reverse",
    },
    x: -120,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
});

gsap.from(".social-text-right", {
    scrollTrigger: {
        trigger: ".social-section",
        start: "top 75%",
        toggleActions: "play none none reverse",
    },
    x: 120,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
});

gsap.from(".social-video-wrap", {
    scrollTrigger: {
        trigger: ".social-section",
        start: "top 75%",
        toggleActions: "play none none reverse",
    },
    y: 40,
    opacity: 0,
    duration: 1.1,
    ease: "power3.out",
    delay: 0.2,
});

gsap.from(".social-divider", {
    scrollTrigger: {
        trigger: ".social-divider",
        start: "top 90%",
        toggleActions: "play none none reverse",
    },
    scaleX: 0,
    transformOrigin: "left center",
    duration: 1,
    ease: "power2.out",
});

gsap.from([".social-tag", ".social-description"], {
    scrollTrigger: {
        trigger: ".social-bottom",
        start: "top 90%",
        toggleActions: "play none none reverse",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out",
});

// â”€â”€ Impact Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const impactData = [
    {
        label: "Startup Growth",
        numbers: [
            { num: "390", label: "Startups in Hub71â€™s Ecosystem" },
            {
                num: "295",
                label: "Total number of Startups Onboarded in Hub71 Programmes",
            },
            { num: "$2.7+B", label: "Value of Funds Raised" },
            { num: "$1.5+B", label: "Revenue Startups Generated" },
            { num: "$244 M", label: "Revenue Startups Generated" },
            { num: "66", label: "Capital Partners" },
        ],
    },
    {
        label: "2024 Impact Highlight",
        numbers: [
            { num: "51", label: "Family Offices" },
            { num: "38", label: "Market Partners" },
            { num: "27", label: "Government Partners" },
            { num: "20", label: "Cross-border Partners" },
            { num: "1200+", label: "Mentorship Hours Provided" },
            { num: "10", label: "Talent Partners" },
        ],
    },
    {
        label: "Abu Dhabi Tech Ecosystem",
        numbers: [
            { num: "720+", label: "Total One-On-One Mentorship Sessions" },
            // { num: "1000+", label: "Mentorship hours" },
            // { num: "95", label: "Community events hosted" },
            // { num: "$4.2B", label: "Total funding raised" },
            // { num: "58", label: "New startups joined" },
            // { num: "19", label: "Countries represented" },
        ],
    },
];

const impactLeft = document.querySelector(".impact-left");
impactLeft.querySelectorAll(".con-numbers").forEach((el) => el.remove());

const grid = document.createElement("div");
grid.className = "con-numbers";
impactLeft.appendChild(grid);

function renderNumbers(dataset) {
    grid.innerHTML = dataset.numbers
        .map(
            (n) => `
        <div class="numbers">
            <p class="number">${n.num}</p>
            <p class="label">${n.label}</p>
        </div>
    `,
        )
        .join("");

    gsap.from(grid.querySelectorAll(".numbers"), {
        y: 30,
        opacity: 0,
        duration: 0.55,
        stagger: 0.12,
        ease: "power2.out",
    });
}

// Add a reference to the new fill line
const navLineFill = document.querySelector(".nav-line-fill");
const navItems = document.querySelectorAll(".impact-nav-item");

function setActiveNav(idx) {
    navItems.forEach((el, i) => {
        // Highlight text for current step
        el.classList.toggle("active", i === idx);

        // Highlight dot for current AND past steps
        el.classList.toggle("completed", i <= idx);
    });

    // Animate the line height to the specific state
    // For 3 items: idx 0 = 0%, idx 1 = 50%, idx 2 = 100%
    const heightPercentage = (idx / (navItems.length - 1)) * 100;

    gsap.to(navLineFill, {
        height: `${heightPercentage}%`,
        duration: 0.5, // Duration of the line moving to the next dot
        ease: "power2.inOut",
    });

    renderNumbers(impactData[idx]);
}

navItems.forEach((item, idx) => {
    item.addEventListener("click", () => setActiveNav(idx));
});

let currentImpact = 0;
const totalImpact = impactData.length;

ScrollTrigger.create({
    trigger: ".impact-section",
    start: "top top",
    end: `+=${totalImpact * 100}%`,
    pin: true,
    scrub: false, // Keep scrub false so it relies on our GSAP transition, not scroll speed
    invalidateOnRefresh: true,
    onUpdate(self) {
        // Determine which of the 3 states we are in based on scroll progress
        const step = Math.min(
            Math.floor(self.progress * totalImpact),
            totalImpact - 1,
        );

        // Only trigger the change when crossing into a new state
        if (step !== currentImpact) {
            currentImpact = step;
            setActiveNav(step);
        }
    },
});

// Initialize the first state
setActiveNav(0);

// â”€â”€ Lead Slider â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
(function () {
    const track = document.getElementById("leadTrack");
    const slides = Array.from(document.querySelectorAll(".lead-slide"));
    const imgs = Array.from(document.querySelectorAll(".lead-person-img"));
    const btnPrev = document.getElementById("leadPrev");
    const btnNext = document.getElementById("leadNext");
    let current = 0;
    let animating = false;

    function updateButtons() {
        btnPrev.disabled = current === 0;
        btnNext.disabled = current === slides.length - 1;
        btnPrev.style.opacity = current === 0 ? "0.25" : "1";
        btnNext.style.opacity = current === slides.length - 1 ? "0.25" : "1";
        btnPrev.style.cursor = current === 0 ? "not-allowed" : "pointer";
        btnNext.style.cursor =
            current === slides.length - 1 ? "not-allowed" : "pointer";
    }

    function goTo(next) {
        if (animating) return;
        next = Math.max(0, Math.min(next, slides.length - 1));
        if (next === current) return;
        animating = true;

        slides[current].classList.add("leaving");
        slides[current].classList.remove("active");

        setTimeout(function () {
            slides[current].classList.remove("leaving");
        }, 280);

        track.style.transform = `translateX(-${next * 100}%)`;

        if (imgs[current]) imgs[current].classList.remove("active");
        if (imgs[next]) imgs[next].classList.add("active");

        slides[next].classList.add("active");
        current = next;

        updateButtons();

        setTimeout(function () {
            animating = false;
        }, 560);
    }

    btnNext.addEventListener("click", function () {
        goTo(current + 1);
    });
    btnPrev.addEventListener("click", function () {
        goTo(current - 1);
    });

    updateButtons();
})();

// â”€â”€ Prog Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
(function () {
    const section = document.querySelector(".prog");
    if (!section) return;

    const items = gsap.utils.toArray(".prog-item");
    const circleMain = document.getElementById("circleMain");
    const circleSub = document.getElementById("circleSub");

    const programs = [
        { main: "HUB71", sub: "+CLIMATECH" },
        { main: "HUB71", sub: "+AI" },
        { main: "HUB71", sub: "+DIGITAL" },
    ];

    const arcMap = [
        { start: -90, end: 30 },
        { start: 30, end: 150 },
        { start: 150, end: 270 },
    ];

    let svgArc = null;
    let currentStep = -1;

    function initArcSVG() {
        const circle = document.querySelector(".prog-circle");
        if (!circle) return;

        const cssArc = circle.querySelector(".prog-circle-green");
        if (cssArc) cssArc.style.display = "none";

        const r = 266;
        const cx = 268;
        const cy = 268;
        const circumference = 2 * Math.PI * r;

        const svg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg",
        );
        svg.setAttribute("viewBox", "0 0 536 536");
        svg.style.cssText =
            "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible;";

        const track = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle",
        );
        track.setAttribute("cx", cx);
        track.setAttribute("cy", cy);
        track.setAttribute("r", r);
        track.setAttribute("fill", "none");
        track.setAttribute("stroke", "rgba(255,255,255,0.08)");
        track.setAttribute("stroke-width", "1.5");

        const arc = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle",
        );
        arc.setAttribute("cx", cx);
        arc.setAttribute("cy", cy);
        arc.setAttribute("r", r);
        arc.setAttribute("fill", "none");
        arc.setAttribute("stroke", "#2ecc8f");
        arc.setAttribute("stroke-width", "2");
        arc.setAttribute("stroke-linecap", "round");
        arc.setAttribute("stroke-dasharray", `0 ${circumference}`);
        arc.setAttribute("stroke-dashoffset", "0");
        arc.setAttribute("transform", `rotate(-90, ${cx}, ${cy})`);

        svg.appendChild(track);
        svg.appendChild(arc);
        circle.appendChild(svg);

        svgArc = { el: arc, circumference, cx, cy };
    }

    function drawArc(index) {
        if (!svgArc) return;
        const { el, circumference, cx, cy } = svgArc;
        const { start, end } = arcMap[index];

        let span = end - start;
        if (span <= 0) span += 360;

        const dashLength = (span / 360) * circumference;
        const gapLength = circumference - dashLength;

        gsap.to(el, {
            duration: 1.4,
            ease: "power2.inOut",
            attr: {
                "stroke-dasharray": `${dashLength} ${gapLength}`,
                "stroke-dashoffset": 0,
                transform: `rotate(${start}, ${cx}, ${cy})`,
            },
        });
    }

    function updateLabel(index) {
        gsap.to([circleMain, circleSub], {
            opacity: 0,
            y: -10,
            duration: 0.4,
            onComplete() {
                circleMain.textContent = programs[index].main;
                circleSub.textContent = programs[index].sub;
                gsap.to([circleMain, circleSub], {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                });
            },
        });
    }

    function setActive(index) {
        if (index === currentStep) return;
        currentStep = index;
        items.forEach((item, i) =>
            item.classList.toggle("active", i === index),
        );
        updateLabel(index);
        drawArc(index);
    }

    initArcSVG();
    setActive(0);

    ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${items.length * 300}vh`,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
        onUpdate(self) {
            const step = Math.min(
                Math.floor(self.progress * items.length),
                items.length - 1,
            );
            setActive(step);
        },
    });
})();

// â”€â”€ Gateway Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
(function () {
    const section = document.querySelector(".gateway");
    if (!section) return;

    const track = document.getElementById("gatewayTrack");
    const dots = Array.from(section.querySelectorAll(".dot"));
    const cards = Array.from(track.querySelectorAll(".card"));
    const right = section.querySelector(".gateway-right");

    const START_OFFSET = 300; // matches CSS translateY(300px)

    function setDot(idx) {
        dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    }

    function getScrollDistance() {
        return track.scrollHeight - right.offsetHeight;
    }

    let st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollDistance() + START_OFFSET}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate(self) {
            const total = getScrollDistance() + START_OFFSET;
            const raw = self.progress * total;
            const offset = START_OFFSET - raw; // starts at 300, goes to negative (scrolled up)
            track.style.transform = `translateY(${offset}px)`;

            const scrolled = Math.max(0, raw - START_OFFSET);
            const step = Math.min(
                Math.floor((scrolled / getScrollDistance()) * cards.length),
                cards.length - 1,
            );
            setDot(step);
        },
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            const progress = i / (cards.length - 1);
            window.scrollTo({
                top: st.start + progress * (st.end - st.start),
                behavior: "smooth",
            });
        });
    });
})();

// â”€â”€ Collab Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".collab-section");
    const cursor = document.getElementById("custom-cursor");
    const eyebrowEl = document.getElementById("collab-eyebrow");
    const titleEl = document.getElementById("section-title");
    const descEl = document.getElementById("collab-desc");
    const tabItems = document.querySelectorAll(".tab-item");

    const SLIDE_TIME = 5000;
    let currentIndex = -1;
    let autoSlideTimeout;

    const slides = [
        {
            eyebrow: "Driving impact through a connected ecosystem",
            title: "Startup â€“ To â€“ Startup<br>Collaborations",
            desc: "Fuze and Bit2Me collaborated to strengthen digital asset infrastructure across key markets.",
        },
        {
            eyebrow: "Shaping the future of policy",
            title: "Regulatory<br>Advancements",
            desc: "Leading discussions with global regulators to create a sustainable digital economy.",
        },
        {
            eyebrow: "Fueling high-growth ventures",
            title: "Investor<br>Partnerships",
            desc: "Connecting world-class capital with the most ambitious founders in the region.",
        },
        {
            eyebrow: "National scale innovation",
            title: "Government-Backed<br>Initiatives",
            desc: "Partnering with public sectors to deploy blockchain solutions for citizens.",
        },
        {
            eyebrow: "The foundation of success",
            title: "Angel Support<br>Network",
            desc: "Providing mentorship and early-stage funding to the next generation of unicorns.",
        },
        {
            eyebrow: "Bridging corporate and agile",
            title: "Corporate<br>Partnerships",
            desc: "Creating synergy between industry giants and disruptive startup technologies.",
        },
    ];

    section.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        const rect = section.getBoundingClientRect();
        if (e.clientX - rect.left < rect.width / 2)
            cursor.classList.add("is-left");
        else cursor.classList.remove("is-left");
    });

    function updateContent(index) {
        eyebrowEl.classList.remove("fade-up-active");
        titleEl.classList.remove("fade-up-active");
        descEl.classList.remove("fade-up-active");

        setTimeout(() => {
            eyebrowEl.innerHTML = slides[index].eyebrow;
            titleEl.innerHTML = slides[index].title;
            descEl.innerHTML = slides[index].desc;

            eyebrowEl.classList.add("fade-up-active");
            setTimeout(() => titleEl.classList.add("fade-up-active"), 100);
            setTimeout(() => descEl.classList.add("fade-up-active"), 200);
        }, 400);
    }

    function goToSlide(index) {
        clearTimeout(autoSlideTimeout);

        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        if (index === currentIndex) return;

        tabItems.forEach((tab) => {
            tab.classList.remove("active", "running");
            void tab.offsetWidth;
        });

        currentIndex = index;
        const activeTab = tabItems[currentIndex];
        activeTab.classList.add("active");

        updateContent(currentIndex);

        setTimeout(() => {
            activeTab.classList.add("running");
        }, 50);

        autoSlideTimeout = setTimeout(() => {
            goToSlide(currentIndex + 1);
        }, SLIDE_TIME);
    }

    section.addEventListener("click", (e) => {
        if (e.target.closest(".tab-item")) return;
        const rect = section.getBoundingClientRect();
        if (e.clientX - rect.left < rect.width / 2) goToSlide(currentIndex - 1);
        else goToSlide(currentIndex + 1);
    });

    tabItems.forEach((tab, i) => {
        tab.addEventListener("click", (e) => {
            e.stopPropagation();
            goToSlide(i);
        });
    });

    goToSlide(0);
});

// â”€â”€ Drag Slider â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
(function () {
    const section = document.getElementById("programs");
    const container = document.getElementById("sliderContainer");
    const cards = document.getElementById("conCards");
    const cursor = document.getElementById("dragCursor");
    const cardEls = Array.from(cards.querySelectorAll(".card"));

    // NEW: Grab the global timeline track
    const timelineTrack = document.getElementById("timelineTrack");

    const CARD_WIDTH = 350;
    const GAP = 90;
    const CARD_STEP = CARD_WIDTH + GAP;
    const PADDING = 120;

    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    let offsetX = 0;
    let activeIndex = cardEls.findIndex((c) => c.classList.contains("active"));

    // Fallback if no active class is found initially
    if (activeIndex === -1) activeIndex = 0;

    function getCenter() {
        return container.offsetWidth / 2;
    }

    function getTargetOffset(index) {
        const cardCenter = PADDING + index * CARD_STEP + CARD_WIDTH / 2;
        return getCenter() - cardCenter;
    }

    function setActive(index) {
        activeIndex = index;

        // 1. Update Card Classes
        cardEls.forEach((c, i) => {
            c.classList.toggle("active", i === index);
        });

        // 2. NEW: Slide the global timeline
        // Multiplies the active index by 100% to slide the track groups smoothly left/right
        if (timelineTrack) {
            timelineTrack.style.transform = `translateX(-${index * 100}%)`;
        }
    }

    function snapToNearest() {
        const center = getCenter();
        let closest = 0;
        let minDist = Infinity;
        cardEls.forEach((c, i) => {
            const cardCenter =
                PADDING + i * CARD_STEP + CARD_WIDTH / 2 + currentX;
            const dist = Math.abs(cardCenter - center);
            if (dist < minDist) {
                minDist = dist;
                closest = i;
            }
        });
        currentX = getTargetOffset(closest);
        cards.style.transition =
            "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)";
        cards.style.transform = `translateX(${currentX}px)`;

        // Trigger the update
        setActive(closest);
    }

    // Initialize layout positions
    currentX = getTargetOffset(activeIndex);
    cards.style.transform = `translateX(${currentX}px)`;
    setActive(activeIndex); // Set initial timeline position

    // Mouse Events
    section.addEventListener("mouseenter", () => {
        if (cursor) cursor.style.display = "block";
    });

    section.addEventListener("mouseleave", () => {
        if (cursor) cursor.style.display = "none";
        if (isDragging) {
            isDragging = false;
            snapToNearest();
        }
    });

    document.addEventListener("mousemove", (e) => {
        if (cursor) {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        }

        if (isDragging) {
            const dx = e.clientX - startX;
            currentX = offsetX + dx;
            cards.style.transition = "none";
            cards.style.transform = `translateX(${currentX}px)`;
        }
    });

    section.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        offsetX = currentX;
        if (cursor) cursor.style.transform = "translate(-50%, -50%) scale(0.9)";
        cards.style.transition = "none";
    });

    document.addEventListener("mouseup", () => {
        if (!isDragging) return;
        isDragging = false;
        if (cursor) cursor.style.transform = "translate(-50%, -50%) scale(1)";
        snapToNearest();
    });

    // Touch Events
    section.addEventListener(
        "touchstart",
        (e) => {
            isDragging = true;
            startX = e.touches[0].clientX;
            offsetX = currentX;
            cards.style.transition = "none";
        },
        { passive: true },
    );

    document.addEventListener(
        "touchmove",
        (e) => {
            if (!isDragging) return;
            currentX = offsetX + (e.touches[0].clientX - startX);
            cards.style.transform = `translateX(${currentX}px)`;
        },
        { passive: true },
    );

    document.addEventListener("touchend", () => {
        if (!isDragging) return;
        isDragging = false;
        snapToNearest();
    });

    // Resize Event
    window.addEventListener("resize", () => {
        currentX = getTargetOffset(activeIndex);
        cards.style.transition = "none";
        cards.style.transform = `translateX(${currentX}px)`;
    });
})();

// â”€â”€ Menu â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const openMenuButton = document.querySelectorAll("#open_menu");
const closeMenuButton = document.querySelector("#close_menu");
const header = document.querySelector("#fixed_header");
const menu = document.querySelector("#the_menu");

// Map menu link text to section selectors
const menuSectionMap = {
    intro: ".hero",
    "impact in numbers": ".impact-section",
    "sectors breakdown": ".hub",
    "hub71 programs": ".programs",
    "scaling from abu dhabi": ".gateway",
    "empowering talent": ".empower",
    "innovation from abu dhabi": ".delivering-section",
    "key timelines": ".business-section",
    "emerging sectors": ".sectors",
    "unlocking growth": ".ugc",
    "a connected ecosystem": ".collab-section",
    "building knowledge": ".kb-wrap",
};

function closeMenu() {
    menu.classList.add("close_the_menu");
    menu.classList.remove("open_the_menu");
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
}

function openMenu() {
    menu.classList.add("open_the_menu");
    menu.classList.remove("close_the_menu");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
}

openMenuButton.forEach((btn) => {
    btn.onclick = openMenu;
});

closeMenuButton.onclick = closeMenu;

// â”€â”€ Menu Links â†’ Scroll to Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const menuLinks = document.querySelectorAll(".con-menu ul li a");

menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const label = link.textContent.trim().toLowerCase();
        const selector = menuSectionMap[label];

        closeMenu();

        if (selector) {
            const target = document.querySelector(selector);
            if (target) {
                // Small delay to let menu close animation finish
                setTimeout(() => {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }, 300);
            }
        }
    });
});

// â”€â”€ Scroll Header â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
window.onscroll = () => {
    if (window.scrollY > 130) {
        header.classList.add("show_header");
    } else {
        header.classList.remove("show_header");
    }
};

// â”€â”€ Final Refresh â€” must be last â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
window.onload = () => {
    ScrollTrigger.refresh();
};

////// business section
document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. YOUR DATA (Notice Tab 1 has 10 items now)
    // ==========================================
    const sliderData = {
        0: [
            {
                title: "Hub71 onboarded Saudi Awwal Bank (SAB) as market partner",
                date: "Jan",
            },
            {
                title: "Shorooq Capital won the Sheikh Khalifa Excellence Award.",
                date: "Feb",
            },
            {
                title: "Hub71 entered a strategic partnership with Borouge",
                date: "Mar ",
            },
            {
                title: "Jasoor Ventures onboarded as Hub71 capital partner",
                date: "Mar ",
            },
            {
                title: "Hub71 partnered with NVIDIA to provide startups with access to the NVIDIA Inception Programme",
                date: "Mar ",
            },
            {
                title: "Hub71 joined Abu Dhabiâ€™s HELM cluster to advance HealthTech and Life Sciences innovation",
                date: "Apr",
            },
            {
                title: "Hub71 partnered with Yas Investments to strengthen Tech Barzaâ€™s role in connecting family o!ices with startups",
                date: "May ",
            },
            {
                title: "Hub71 and Japan External Trade Organization (JETRO) signed a partnership to connect Japanese startups with Abu Dhabiâ€™s ecosystem",
                date: "May ",
            },
            {
                title: "Stryde acquired Qora71 forming Stryde71 and strengthening early-stage capital formation in Abu Dhabi",
                date: "Jun",
            },

            {
                title: "Hub71 partnered with ADGM, ADGMA, TII and ASPIRE to launch UAEâ€™s first quantum-secure communications testbed",
                date: "Aug ",
            },
            {
                title: "Hub71 joined the Presight AI-Startup Accelerator as a strategic partner",
                date: "Aug ",
            },
            {
                title: "National Founders Programme was launched in partnership with Mubadala and Antler to commercialise research-driven innovation",
                date: "Sep",
            },
            {
                title: "Hub71 partnered with HSITP, Cyberport and MTR Lab at Investopia Hong Kong to strengthen cross-border startup growth",
                date: "Sep",
            },
            {
                title: "Hub71 signed a partnership with the New Jersey Economic Development Authority to unlock cross-border expansion opportunities for startups",
                date: "Oct",
            },
            {
                title: "Hub71 partnered with the Abu Dhabi Early Childhood Authority (ECA) to advance innovation for children through the integration of Anjal Z into Hub71â€™s Access Programme",
                date: "Oct",
            },
            {
                title: "Hub71 partnered with Numou to unlock SME access to funding",
                date: "Oct",
            },
            {
                title: "Bunat Ventures joined Hub71 as a capital partner",
                date: "Oct",
            },
            {
                title: "Big Idea Ventures was onboarded as a Hub71 capital partner",
                date: "Oct",
            },
            {
                title: "Constructor Capital joined Hub71â€™s capital partner network",
                date: "Oct",
            },

            {
                title: "Hub71 partnered with Unicorn Factory Lisboa to advance innovation and entrepreneurship between UAE and Portugal",
                date: "NOV",
            },
            {
                title: "Hub71 partnered with the UAE-India CEPA Council to accelerate trade, investment and innovation",
                date: "NOV",
            },
            {
                title: "AMKM was onboarded as a TechBarza member",
                date: "NOV",
            },
            {
                title: "Hub71 partnered with Emirates Growth Fund to strengthen the UAEâ€™s economy",
                date: "DEC",
            },
            {
                title: "Hub71 joined Abu Dhabiâ€™s FIDA Cluster to advance next-generation financial and investment solutions",
                date: "DEC",
            },
            {
                title: "Hub71 partnered with Abu Dhabi Youth Business Council to support youth-led startups",
                date: "DEC",
            },
            {
                title: "Hub71 partnered with Irelandâ€™s Venturewave Capital to strengthen founder access across both markets",
                date: "DEC",
            },
            {
                title: "Speedinvest joined Hub71 as a capital partner",
                date: "DEC",
            },
            {
                title: "Globinvest joined Hub71â€™s capital partner network",
                date: "DEC",
            },
            {
                title: "Magna Investment was onboarded as a TechBarza member",
                date: "DEC",
            },
        ],
        1: [
            {
                title: "Basetwo advanced industrial AI to scale physics-based manufacturing intelligence",
                date: "JAN",
            },
            {
                title: "Bluewhale secured $100 million (AED 367 million) to expand multichain infrastructure",
                date: "JAN",
            },
            {
                title: "Mamotest secured a $1.6 million (AED 6 million) investment from Philips Foundation",
                date: "JAN",
            },
            {
                title: "BioTwin partnered with Cleveland Clinic Abu Dhabi and Microsoft to advance AI-breast cancer screening in the UAE",
                date: "JAN",
            },
            {
                title: "CarbonSifr expanded regional footprint through Careem partnership",
                date: "JAN",
            },
            {
                title: "44.01 secured an additional $4.9 million (AED 18 million) in Series A funding",
                date: "FEB",
            },
            {
                title: "Seez was acquired by UK-based Pinewood AI for $46.2 million (AED 196.6 million)",
                date: "FEB",
            },
            {
                title: "25 Hub71 startups were named among the Future 100 at Investopia 2025",
                date: "FEB",
            },
            {
                title: "Enrichly secured an investment from the American Heart Association to Expand Self-Esteem Development Platform",
                date: "FEB",
            },
            {
                title: "Pemo was recognised as a winner of the G2 Best Software Awards",
                date: "FEB",
            },
            {
                title: "Atmocooling raised $2.7 million (AED 10 million) in Pre-Seed investments to advance sustainable cooling technologies",
                date: "MAR",
            },
            {
                title: "Key2enable partnered with Zayed Higher Organization to empower students of determination",
                date: "MAR",
            },
            {
                title: "Retailhub partnered with Talabat to transform inventory management",
                date: "MAR",
            },
            {
                title: "Carbonsifr won Metaâ€™s Llama Challenge for its AI-driven emissions solution, validated through a POC with Dubai Holding",
                date: "MAR",
            },
            {
                title: "Pemo, Lean, Thndr, and Sarwa were recognised in the â€œForbes FinTech 50â€",
                date: "APR",
            },
            {
                title: "NymCard raised $33 million (AED 121 million) in Series B round",
                date: "APR",
            },
            {
                title: "BioSapien was recognised at Abu Dhabi Global Health Week Innovation Awards",
                date: "APR",
            },
            {
                title: "Fuze secured a retail payment services license by the Central Bank of the UAE",
                date: "APR",
            },
            {
                title: "Thndr raised $15.7 million (AED 57.6 million)",
                date: "MAY",
            },
            {
                title: "Zest Equity raised $4.3 million (AED 15.8 million) in Pre-Series A funding to simplify private market transactions",
                date: "MAY",
            },
            {
                title: "Fuze secured $12.3 million (AED 45 million) in a Series A funding round",
                date: "MAY",
            },
            {
                title: "Qashio raised $19.5 million (AED 71.6 million) to expand regional FinTech operations",
                date: "MAY",
            },
            {
                title: "NymCard was officially licensed by the Central Bank of the UAE to provide open finance services",
                date: "MAY",
            },
            {
                title: "XBTO received full 3A license approval from ADGM",
                date: "MAY",
            },
            {
                title: "InvoiceMate won the ADIB Ventures Digital Assets Innovation Challenge",
                date: "MAY",
            },
            {
                title: "ABHI partnered with LuLu Financial Holdings Partners to advance financial inclusion and cross-border remittance solutions",
                date: "MAY",
            },
            {
                title: "8 Hub71 startups were selected for the â€˜UAE Future 50â€™ initiative",
                date: "MAY",
            },
            {
                title: "XX and XX awarded at Make it in the Emirates Startup Pitch Competition",
                date: "MAY",
            },
            {
                title: "Cypherleak was awarded the UAE Cybersecurity Award 2025 by the Cyber Security Council",
                date: "JUN",
            },
            {
                title: "Inovat raised $300,000 (AED 1.10 million) from Angelspark",
                date: "JUN",
            },
            {
                title: "xMap won the top prize at CIC Pitch in Japan",
                date: "JUN",
            },
            {
                title: "Ovasave raised $1.2 million (AED 4.4 million) Pre-Seed to advance womenâ€™s health innovation",
                date: "JUL",
            },
            {
                title: "TruKKer secured a $15 million (AED 20.2 million) private credit investment",
                date: "JUL",
            },
            {
                title: "BioSapien extended its Pre-Series A round to $8 million (AED 29.4 million)",
                date: "JUL",
            },
            {
                title: "SmartCrowd was acquired by Nawy",
                date: "JUL",
            },
            {
                title: "Graphmatech secured a $2.9 million (AED 10.6 million) grant for Uppsala pilot facility",
                date: "JUL",
            },
            {
                title: "Bit2Me raised $34.7 million (AED 127.4 million), with Tether Ventures taking a strategic stake",
                date: "AUG",
            },
            {
                title: "Wuilt secured $2 million (AED 7.3 million) in follow-on round to scale regional SaaS growth",
                date: "AUG",
            },
            {
                title: "Greengage signed a strategic partnership with Commercial Bank International to launch UAE-based Banking-as-a-Service",
                date: "AUG",
            },
            {
                title: "Thndr signed a partnership with ADX as the first remote retail trading member",
                date: "AUG",
            },
            {
                title: "Tarabut received in-principle approval from the Central Bank of the UAE for Open Finance",
                date: "AUG",
            },
            {
                title: "Maalexi secured a $20 million (AED 73.4 million) shariah-compliant credit facility",
                date: "AUG",
            },
            {
                title: "Electrogenos was named the UAEâ€™s Top Tech Innovator by KPMG",
                date: "AUG",
            },
            {
                title: "Kilde raised $1.5 million (AED 5.5 million) in Pre-Series A round to scale alternative lending infrastructure",
                date: "SEP",
            },
            {
                title: "Metric closed its Seed round at $1.28 million (AED 4.7 million)",
                date: "SEP",
            },
            {
                title: "1Money secured 30+ US licenses and Bermuda approval to enable compliant global stablecoin payments",
                date: "SEP",
            },
            {
                title: "Orbii raised $3.6 million (AED 13.2 million) to expand SME lending across MENA",
                date: "SEP",
            },
            {
                title: "Clarity raised $12 million (AED 44 million) to scale AI-powered enterprise solutions",
                date: "SEP",
            },
            {
                title: "Maalexi secured $5 million (AED 18.4 million) facility to expand agri-trade across UAE and KSA",
                date: "SEP",
            },
            {
                title: "Basetwo was selected for AWS Generative AI Accelerator",
                date: "OCT",
            },
            {
                title: "Archireef partnered with the Environment Agency - Abu Dhabi to advance coral reef restoration and marine biodiversity protection",
                date: "OCT",
            },
            {
                title: "eVoost AI enabled Danube Propertiesâ€™ autonomous expansion into Europe",
                date: "NOV",
            },
            {
                title: "Orbillion was acquired by Fork & Good",
                date: "NOV",
            },
            {
                title: "xMap, AIRMO, and FortyGuard partnered with Space42 to integrate next-gen AI into geospatial intelligence",
                date: "NOV",
            },
            {
                title: "KingPin raised $3.5 million (AED 12.8 million) to scale AI-driven revenue intelligence",
                date: "NOV",
            },
            {
                title: "FortyGuard awarded Gold Impact Seal by MAJRA",
                date: "NOV",
            },
            {
                title: "Circa Biotech won the ClimateTech World Cup at the CARE 2025 MENA",
                date: "NOV",
            },
            {
                title: "1Money launched a stablecoin orchestration platform",
                date: "DEC",
            },
            {
                title: "Sustainable Bitcoin Protocol introduced a climate-aligned digital asset class",
                date: "DEC",
            },
            {
                title: "Planys raised $12 million (AED 44 million) to scale subsea intelligence",
                date: "DEC",
            },
            {
                title: "Syd Life AI secured a $1 billion (AED 3.67 billion) commitment to advance preventive healthcare",
                date: "DEC",
            },
            {
                title: "Abhi expanded private credit infrastructure through an on-chain partnership model",
                date: "DEC",
            },
            {
                title: "Reno raised $4 million (AED 15 million) in a mixed equity and debt round",
                date: "DEC",
            },
            {
                title: "Biosapien was awarded the â€œExcellence in Biotech Innovation for Oncology â€“ UAE 2025â€ by Global Brands Magazine",
                date: "DEC",
            },
            {
                title: "Lune partnered with Emirates Foundation to demonstrate a new government-focused enrichment use case",
                date: "DEC",
            },
        ],
        2: [
            {
                title: "Hub71 onboarded 27 startups as part of Cohort 16",
                date: "FEB",
            },
            {
                title: "Hub71 sponsored Step Conference Dubai",
                date: "FEB",
            },
            {
                title: "Hub71 joined the Abu Dhabi Investment Forums in Beijing and Shanghai",
                date: "FEB",
            },
            {
                title: "Hub71 joined an Abu Dhabi delegation to Hong Kong and China",
                date: "MAR",
            },
            {
                title: "Hub71 and Shorooq Partner co-hosted a curated roadshow in London for startups and investors",
                date: "APR",
            },
            {
                title: "28 Hub71 startups joined the â€œGoogle for Startupsâ€ Accelerator Programme to advance AI innovation from Abu Dhabi",
                date: "MAY",
            },
            {
                title: "Hub71 joined the Abu Dhabi Investment Forum in Tokyo to strengthen UAEâ€“Japan innovation ties",
                date: "MAY",
            },
            {
                title: "Hub71 showcased Abu Dhabiâ€™s innovation ecosystem at SusHi Tech Tokyo",
                date: "MAY",
            },
            {
                title: "Hub71 sponsored the Startup Competition at Make It in the Emirates (MIITE)",
                date: "MAY",
            },
            {
                title: "Hub71 startups joined a UAE delegation at GITEX Europe in Berlin",
                date: "MAY",
            },
            {
                title: "Abu Dhabiâ€™s startup ecosystem ranked 3rd in MENA in Startup Genomeâ€™s Global Start-up Ecosystem Report",
                date: "JUN",
            },
            {
                title: "Hub71 attended VivaTech in Paris",
                date: "JUN",
            },
            {
                title: "Hub71 participated in Investopia Dublin",
                date: "JUN",
            },
            {
                title: "Hub71 participated in the Blockchain Leaders Summit in Japan",
                date: "AUG",
            },
            {
                title: "Hub71 onboarded 26 startups as part of Cohort 17",
                date: "SEP",
            },
            {
                title: "Hub71 organised a roadshow in Riyadh for 4 startups",
                date: "SEP",
            },
            {
                title: "Hub71 attended Investopia Hong Kong to advance cross-border collaboration",
                date: "SEP",
            },
            {
                title: "Hub71 participated in Abu Dhabi Chamberâ€™s business mission to Berlin",
                date: "SEP",
            },
            {
                title: "Hub71 attended Climate Week NYC",
                date: "SEP",
            },
            {
                title: "Hub71 participated in the Digital Trade Expo in Hangzhou, China",
                date: "SEP",
            },
            {
                title: "Hub71 sponsored Key Capitalâ€™s London Trek 2025",
                date: "SEP",
            },
            {
                title: "Hub71 welcomed seven Japanese startups as part of its Startup Immersion Programme",
                date: "OCT",
            },
            {
                title: "Hub71 welcomed seven Hong Kong startups to Abu Dhabi as part of its Startup Immersion Programme",
                date: "OCT",
            },
            {
                title: "Hub71 joined Abu Dhabi Investment Forums in New York and London",
                date: "OCT",
            },
            {
                title: "Hub71 launched Hub71+ Life Sciences with 12 partners, including founding partners DOH, EDE and HELM",
                date: "OCT",
            },
            {
                title: "Hub71 launched its new Initiate Programme for early-stage founders",
                date: "OCT",
            },
            {
                title: "Hub71+ AI expanded with 16 new partners, including Advanced Technology Research Council (ATRC) and BECO Capital as Anchor Partners",
                date: "OCT",
            },
            {
                title: "Hub71 joined UAE Investment Showcase in Australia",
                date: "OCT",
            },
            {
                title: "Hub71 joined Abu Dhabi Investment Forums in Singapore and Mumbai",
                date: "NOV",
            },
            {
                title: "Hub71 participated in Unicorn Factory Lisboaâ€™s International Pitch Night",
                date: "NOV",
            },
            {
                title: "Hub71 participated at Web Summit with startups and partners",
                date: "NOV",
            },
            {
                title: "Hub71 sponsored the UAEâ€“India CEPA Councilâ€™s UAE-India Startup Series",
                date: "NOV",
            },
            {
                title: "Hub71 enabled smart and autonomous mobility startups to access Abu Dhabiâ€™s SAVI cluster",
                date: "NOV",
            },
            {
                title: "Hub71 participated in Plug and Playâ€™s Silicon Valley Summit",
                date: "NOV",
            },
            {
                title: "Hub71 partnered with Khalifa Fund to launch MZN x Hub71 Programme",
                date: "DEC",
            },
            {
                title: "Hub71 delivered ADFW Activate on the sidelines of Abu Dhabi Finance Week",
                date: "DEC",
            },
        ],
    };

    // ==========================================
    // 2. SLIDER VARIABLES & CONSTANTS
    // ==========================================
    const container = document.querySelector(".con-slider");
    const prevBtn = document.querySelector(".con-nav .prev");
    const nextBtn = document.querySelector(".con-nav .next");

    // NEW: Data Management Variables
    const MAX_VISIBLE_CARDS = 7;
    let currentData = [];
    let startIndex = 0; // Tracks which data item is at the far left
    let actualVisible = 0;

    let cards = [];
    let totalLayoutWidth = 0;
    let startX = 0;

    const W = container.offsetWidth || window.innerWidth;
    const H = container.offsetHeight || window.innerHeight;
    const cx = W / 2;

    // Adjustable Layout Settings
    const cardW = 228;
    const stepX = 250;
    const curveDepth = 340;
    const cy = H - 320;
    const edgeInset = 150;
    const animSpeed = 500;
    let isAnimating = false;

    // ==========================================
    // 3. RENDER ENGINE
    // ==========================================
    // Helper function to generate the HTML for a single card
    function createCardElement(item) {
        const cardElement = document.createElement("div");
        cardElement.className = "card";
        cardElement.innerHTML = `
            <p>${item.title}</p>
            <p class="date">${item.date}</p>
        `;
        return cardElement;
    }

    function renderSlider(tabIndex) {
        container.innerHTML = ""; // Clear existing
        cards = [];

        // Load new data
        currentData = sliderData[tabIndex] || [];
        startIndex = 0; // Reset back to the first item

        // Determine how many cards to show (max 7, or fewer if data is small)
        actualVisible = Math.min(currentData.length, MAX_VISIBLE_CARDS);

        if (actualVisible === 0) return;

        // Recalculate layout width and center start position
        totalLayoutWidth = Math.max(0, (actualVisible - 1) * stepX) + cardW;
        startX = cx - totalLayoutWidth / 2;

        // Build the initial set of visible cards
        for (let i = 0; i < actualVisible; i++) {
            const dataIndex = (startIndex + i) % currentData.length;
            const cardElement = createCardElement(currentData[dataIndex]);
            container.appendChild(cardElement);
            cards.push(cardElement);
        }

        init();
    }

    // ==========================================
    // 4. MATH & STYLING LOGIC
    // ==========================================
    function getSlotStyle(i) {
        let x = startX + i * stepX;

        // Apply edge insets to pull the far left/right cards inward
        if (i === 0) x += edgeInset;
        else if (i === actualVisible - 1) x -= edgeInset;
        else if (i < 0) x += edgeInset;
        else if (i >= actualVisible) x -= edgeInset;

        const progress =
            actualVisible > 1 ? (i / (actualVisible - 1)) * 2 - 1 : 0;
        const y = cy - Math.pow(progress, 2) * curveDepth;
        const zIndex = Math.round((1 - Math.abs(progress)) * 100);

        const opacity = i < 0 || i >= actualVisible ? 0 : 1;
        const pointerEvents = i < 0 || i >= actualVisible ? "none" : "auto";

        return { x, y, zIndex, opacity, pointerEvents };
    }

    function applyStyle(card, style, animate = true) {
        card.style.position = "absolute";
        card.style.transition = animate
            ? `all ${animSpeed}ms cubic-bezier(0.25, 1, 0.5, 1)`
            : "none";
        card.style.left = style.x + "px";
        card.style.top = style.y + "px";
        card.style.opacity = style.opacity;
        card.style.pointerEvents = style.pointerEvents;
    }

    function init() {
        cards.forEach((card, i) => applyStyle(card, getSlotStyle(i), false));
    }

    // ==========================================
    // 5. ANIMATION LOGIC (Next / Prev)
    // ==========================================
    function moveNext() {
        if (isAnimating || currentData.length <= 1) return;
        isAnimating = true;

        // 1. Figure out what data comes next after our visible window
        const newDataIndex = (startIndex + actualVisible) % currentData.length;
        const incomingCard = createCardElement(currentData[newDataIndex]);
        container.appendChild(incomingCard);

        // 2. Place it instantly in the hidden slot on the right
        applyStyle(incomingCard, getSlotStyle(actualVisible), false);
        incomingCard.getBoundingClientRect(); // Force browser to register the position

        // 3. Update arrays
        cards.push(incomingCard);
        const outgoingCard = cards.shift();

        // 4. Animate to new positions
        cards.forEach((card, i) => applyStyle(card, getSlotStyle(i), true));
        applyStyle(outgoingCard, getSlotStyle(-1), true); // Animate old card to hidden left slot

        // 5. Update our tracker
        startIndex = (startIndex + 1) % currentData.length;

        // 6. Cleanup
        setTimeout(() => {
            outgoingCard.remove();
            isAnimating = false;
        }, animSpeed);
    }

    function movePrev() {
        if (isAnimating || currentData.length <= 1) return;
        isAnimating = true;

        // 1. Figure out what data comes right before our visible window
        const newDataIndex =
            (startIndex - 1 + currentData.length) % currentData.length;
        const incomingCard = createCardElement(currentData[newDataIndex]);
        container.insertBefore(incomingCard, container.firstChild);

        // 2. Place it instantly in the hidden slot on the left
        applyStyle(incomingCard, getSlotStyle(-1), false);
        incomingCard.getBoundingClientRect(); // Force browser to register the position

        // 3. Update arrays
        cards.unshift(incomingCard);
        const outgoingCard = cards.pop();

        // 4. Animate to new positions
        cards.forEach((card, i) => applyStyle(card, getSlotStyle(i), true));
        applyStyle(outgoingCard, getSlotStyle(actualVisible), true); // Animate old card to hidden right slot

        // 5. Update our tracker
        startIndex = (startIndex - 1 + currentData.length) % currentData.length;

        // 6. Cleanup
        setTimeout(() => {
            outgoingCard.remove();
            isAnimating = false;
        }, animSpeed);
    }

    nextBtn.addEventListener("click", moveNext);
    prevBtn.addEventListener("click", movePrev);

    // ==========================================
    // 6. TAB LOGIC & INITIALIZATION
    // ==========================================
    const tabs = document.querySelectorAll(".tabs .tab");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            if (isAnimating) return; // Prevent clicking tabs mid-animation
            tabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
            renderSlider(index);
        });
    });

    renderSlider(0);
});

/////////////// sectors
(function () {
    let activeTab = "priority";
    let offset = 0;

    const track = document.getElementById("sectors-track");
    const tabs = document.querySelectorAll(".sectors-tab");
    const prevBtn = document.getElementById("sectors-prev");
    const nextBtn = document.getElementById("sectors-next");

    function getCards(tab) {
        return [...track.querySelectorAll(`.sectors-card[data-tab="${tab}"]`)];
    }

    function applyTab(tab) {
        activeTab = tab;
        offset = 0; // Reset slider position

        // Hide all cards, show only active tab's cards
        [...track.querySelectorAll(".sectors-card")].forEach((c) => {
            c.style.display = "none";
            c.style.borderLeft = ""; // reset borders
        });

        getCards(tab).forEach((c, i) => {
            c.style.display = "";
            // Re-apply the left border only to the first visible card
            if (i === 0)
                c.style.borderLeft = "1px solid rgba(255,255,255,0.08)";
        });

        // Reset track position instantly
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
    }

    function slide() {
        const cards = getCards(activeTab);
        if (!cards.length) return;

        // Measure actual widths from the DOM
        const cardW = cards[0].offsetWidth;
        const containerW = track.parentElement.offsetWidth;

        // Calculate how many full cards actually fit (e.g., 100% / 28% = 3)
        const visibleCards = Math.floor(containerW / cardW) || 1;
        const max = Math.max(0, cards.length - visibleCards);

        // Keep offset within bounds
        offset = Math.max(0, Math.min(offset, max));

        // Max pixels we can scroll before creating empty space at the end
        const maxScroll = Math.max(0, track.scrollWidth - containerW);
        let translateX = offset * cardW;

        // If we reach the end, lock exactly to the end of the track to show the final card perfectly
        if (offset === max || translateX > maxScroll) {
            translateX = maxScroll;
        }

        track.style.transition = "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)";
        track.style.transform = `translateX(-${translateX}px)`;
    }

    // Tab switching
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
            applyTab(tab.dataset.tab);
        });
    });

    // Arrow navigation
    nextBtn.addEventListener("click", () => {
        const cards = getCards(activeTab);
        if (!cards.length) return;

        const cardW = cards[0].offsetWidth;
        const visibleCards =
            Math.floor(track.parentElement.offsetWidth / cardW) || 1;
        const max = Math.max(0, cards.length - visibleCards);

        if (offset < max) {
            offset++;
            slide();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (offset > 0) {
            offset--;
            slide();
        }
    });

    // Recalculate if the user resizes their browser window
    window.addEventListener("resize", () => {
        slide();
    });

    // Initialize
    applyTab("priority");
})();

document.addEventListener("DOMContentLoaded", () => {
    const hotspots = document.querySelectorAll(".hotspot");

    hotspots.forEach((hotspot) => {
        const btn = hotspot.querySelector(".btn-plus");

        if (btn) {
            btn.addEventListener("click", (e) => {
                e.stopPropagation(); // Prevent clicks from bubbling up

                // Check if this one is already active
                const isActive = hotspot.classList.contains("active");

                // Close all tooltips first
                hotspots.forEach((h) => h.classList.remove("active"));

                // If the clicked one wasn't active, open it
                if (!isActive) {
                    hotspot.classList.add("active");
                }
            });
        }
    });

    // Close tooltips if the user clicks anywhere else on the screen
    document.addEventListener("click", () => {
        hotspots.forEach((h) => h.classList.remove("active"));
    });
});

/////////go up
const goUpButton = document.querySelector("#goUp");

goUpButton.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

// â”€â”€ AOS Init â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
AOS.init({
    duration: 900,
    easing: "ease-out-cubic",
    once: true,
    offset: 80,
});