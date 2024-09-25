const devMode = false;

const dragPiece = document.getElementById("drag-piece");
const emptySlot = document.getElementById("empty-slot");
const sections = document.querySelectorAll(".section");
const puzzle = document.getElementById("puzzle-img");
const hero = document.getElementById("hero");
const projectsSection = document.getElementById("projects-section");

const bottomText = document.querySelector(".hero__bottom-text");

const isMobile = () => {
	return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
		navigator.userAgent
	);
};

const initDragDrop = () => {
	dragPiece.addEventListener("dragstart", (e) => {
		console.log("Drag started");
		e.dataTransfer.setData("text", e.target.id);
	});

	emptySlot.addEventListener("dragover", (e) => {
		e.preventDefault();
		emptySlot.classList.add("highlight");
	});

	emptySlot.addEventListener("dragleave", () => {
		emptySlot.classList.remove("highlight");
	});

	emptySlot.addEventListener("drop", (e) => {
		initiate();
	});
};

const initClick = () => {
	dragPiece.addEventListener("click", () => {
		initiate();
	});
};

const initiate = () => {
	const draggedElement = document.getElementById("drag-piece");
	emptySlot.appendChild(draggedElement);
	emptySlot.classList.remove("highlight");
	emptySlot.style.display = "none";

	puzzle.src = "assets/images/puzzle-full.png";

	sections.forEach((section) => (section.style.display = "block"));
	hero.classList.add("active");

	setTimeout(() => {
		gsap.to(window, {
			scrollTo: { y: projectsSection, offsetY: 50 },
			duration: 2,
			ease: "power1.inOut",
		});
	}, 500);

	// Animate Projects Section
	const projects = gsap.utils.toArray(".project");
	gsap.fromTo(
		projects,
		{
			opacity: 0,
			y: 20,
		},
		{
			opacity: 1,
			y: 0,
			duration: 1,
			ease: "power1.out",
			stagger: 0.2,
			scrollTrigger: {
				trigger: ".projects",
				start: "top 80%",
			},
		}
	);

	// Animate About Section
	const aboutTitle = document.querySelector(".section__title");
	const aboutContent = document.querySelector(".about__content");

	gsap.fromTo(
		aboutTitle,
		{ opacity: 0, y: 20 },
		{
			opacity: 1,
			y: 0,
			duration: 1,
			ease: "power1.out",
			scrollTrigger: {
				trigger: aboutTitle,
				start: "top 80%",
			},
		}
	);

	gsap.fromTo(
		aboutContent,
		{ opacity: 0, y: 20 },
		{
			opacity: 1,
			y: 0,
			duration: 1,
			ease: "power1.out",
			scrollTrigger: {
				trigger: aboutContent,
				start: "top 80%",
			},
		}
	);

	const aboutInfo = gsap.utils.toArray(".about-section__right");

	gsap.fromTo(
		aboutInfo,
		{ opacity: 0, x: 50 },
		{
			opacity: 1,
			x: 0,
			duration: 1,
			ease: "power1.out",
			scrollTrigger: {
				trigger: aboutInfo,
				start: "top 80%",
			},
		}
	);

	// Animate Contact Section
	const contactTitle = document.querySelector(".contact-section__title");
	const contactLinks = gsap.utils.toArray(".contact-link__link");
	const contactImage = document.querySelector(".contact-section__image");

	gsap.fromTo(
		contactTitle,
		{ opacity: 0 },
		{
			opacity: 1,
			duration: 1,
			ease: "power1.out",
			scrollTrigger: {
				trigger: contactTitle,
				start: "top 80%",
			},
		}
	);

	gsap.fromTo(
		contactLinks,
		{ opacity: 0, y: 20 },
		{
			opacity: 1,
			y: 0,
			duration: 1,
			ease: "power1.out",
			stagger: 0.2,
			scrollTrigger: {
				trigger: contactTitle,
				start: "top 80%",
			},
		}
	);

	gsap.fromTo(
		contactImage,
		{ opacity: 0, y: 20 },
		{
			opacity: 0.3,
			y: 0,
			duration: 1,
			ease: "power1.out",
			scrollTrigger: {
				trigger: contactImage,
				start: "top 80%",
			},
		}
	);
};

document.addEventListener("DOMContentLoaded", () => {
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(ScrollToPlugin);

	if (devMode) {
		initiate();
	}

	// Check if user is on mobile or desktop
	if (isMobile()) {
		initClick();
		bottomText.textContent = "Click missing piece to complete puzzle";
	} else {
		initDragDrop();
		bottomText.textContent = "Drag missing piece to complete puzzle";
	}

	// Hero Section Animation
	gsap.fromTo(
		".puzzle",
		{ opacity: 0, y: 20 },
		{
			opacity: 1,
			y: 0,
			duration: 0.5,
			ease: "power1.out",
			delay: 0.25,
		}
	);

	gsap.fromTo(
		".hero__title",
		{ opacity: 0, y: 20 },
		{
			opacity: 1,
			y: 0,
			duration: 0.5,
			ease: "power1.out",
			delay: 0.5,
		}
	);

	gsap.fromTo(
		".hero__subtitle",
		{ opacity: 0, y: 20 },
		{
			opacity: 1,
			y: 0,
			duration: 0.5,
			ease: "power1.out",
			delay: 0.75,
		}
	);

	gsap.fromTo(
		".hero__image",
		{ opacity: 0, y: 20 },
		{
			opacity: 1,
			y: 0,
			duration: 0.5,
			ease: "power1.out",
			delay: 1,
		}
	);

	gsap.fromTo(
		".hero__bottom-text",
		{ opacity: 0 },
		{
			opacity: 1,
			duration: 0.5,
			ease: "power1.out",
			delay: 1.25,
		}
	);
});
