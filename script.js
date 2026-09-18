const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i * 45, 250)}ms`;
  observer.observe(el);
});

document.getElementById("year").textContent = new Date().getFullYear();

// ─── i18n ───────────────────────────────────────────────────────────────────

const translations = {
  es: {
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.minigame": "Minijuego",
    "nav.stack": "Stack",
    "nav.education": "Educación",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",
    "theme.toggle": "Cambiar tema oscuro o claro",
    "lang.toggle": "Cambiar idioma",
    "hero.availability": "Disponible para FCT · A Coruña",
    "hero.kicker": "DESARROLLO WEB / SOFTWARE",
    "hero.title": "Construyo cosas<br><em>que funcionan.</em>",
    "hero.text": "Soy Daniel Díaz Canosa, estudiante de Desarrollo de Aplicaciones Web (DAW). Me gusta entender cómo encajan las piezas, resolver problemas y convertir ideas en experiencias web.",
    "hero.viewProjects": "Ver proyectos",
    "hero.talk": "Hablemos",
    "terminal.location": "Galicia, España",
    "about.eyebrow": "Sobre mí",
    "about.title": "Curiosidad técnica,<br><em>cabeza fría.</em>",
    "about.lead": "Tengo 21 años y llevo tiempo intentando entender no solo <strong>qué</strong> hace una tecnología, sino <strong>por qué</strong> funciona.",
    "about.p2": "Antes de pasar al desarrollo web estudié un Grado de Sistemas Electrónicos y Automatizados, trabajando con autómatas de Siemens y lógica de sistemas eléctricos. Esa etapa me dejó una forma estructurada de pensar y de buscar soluciones.",
    "about.p3": "También fui árbitro de fútbol durante varios años en el Comité Técnico Gallego. Aprendí a decidir bajo presión, comunicarme con claridad y mantener la calma cuando toca resolver algo en segundos. Ahora traslado esa experiencia al código.",
    "trait1.title": "Decisión",
    "trait1.sub": "Rápida y objetiva bajo presión",
    "trait2.title": "Estructura",
    "trait2.sub": "Analizar antes de construir",
    "trait3.title": "Comunicación",
    "trait3.sub": "Clara, directa y colaborativa",
    "trait4.title": "Constancia",
    "trait4.sub": "Estudios, deporte y proyectos",
    "proj.eyebrow": "Trabajo seleccionado",
    "proj.title": "Proyectos que<br><em>me representan.</em>",
    "filter.all": "Todos",
    "filter.web": "Web",
    "filter.frontend": "Frontend",
    "meta.personal": "Personal",
    "meta.console": "Consola",
    "meta.team": "Equipo",
    "proj1.desc": "Blog personal con estética cálida y artesanal, diseño y contenido propios. Un proyecto para explorar WordPress desde la construcción y publicación de contenido hasta la identidad visual.",
    "proj2.desc": "Versión en consola del clásico juego contra una CPU, con tableros, colocación de barcos y gestión de disparos.",
    "proj3.desc": "Simulación de un campeonato de F1 con coches, pilotos, circuitos, carreras y clasificaciones por piloto y escudería.",
    "proj4.desc": "Web interactiva sobre la raza podenco con diseño Bento Grid, lightbox para imágenes y vídeo de carga con lógica JavaScript adaptada a móvil.",
    "link.visit": "Visitar proyecto",
    "link.github": "Ver en GitHub",
    "juego.eyebrow": "Minijuego interactivo",
    "juego.title": "Flappy Bird<br><em>en JavaScript.</em>",
    "stack.eyebrow": "Herramientas",
    "stack.title": "Stack y<br><em>herramientas.</em>",
    "edu.eyebrow": "Formación académica",
    "edu.title": "Educación<br><em>y estudios.</em>",
    "edu.d1": "Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web",
    "edu.d2": "Ciclo Formativo de Grado Medio en Instalaciones Eléctricas y Automáticas",
    "edu.d3": "Bachillerato",
    "exp.eyebrow": "Trayectoria profesional",
    "exp.title": "Experiencia<br><em>laboral.</em>",
    "exp.j1.title": "Pinche de cocina",
    "exp.j1.desc": "Servicio Galego de Saúde - Subdirección Xeral · Interino (2 meses)",
    "exp.j1.tags": "Cocina y Preparación de alimentos",
    "exp.j2.title": "Técnico de mantenimiento",
    "exp.j2.desc": "Attica21 Hotels · Jornada parcial (3 meses)",
    "exp.j2.t1": "Telecomunicaciones",
    "exp.j2.t2": "Mantenimiento y reparaciones",
    "exp.j3.title": "Árbitro de fútbol",
    "exp.j3.desc": "Comité Técnico Gallego de Árbitros de Fútbol · Jornada parcial (2 años 10 meses)",
    "exp.j3.t1": "Gestión de conflictos",
    "exp.j3.t2": "Toma de decisiones",
    "exp.j4.title": "Técnico de mantenimiento",
    "exp.j4.desc": "Hesperia World · Jornada parcial (3 meses)",
    "exp.j4.t1": "Mantenimiento de equipo",
    "exp.j4.t2": "Telecomunicaciones",
    "exp.j5.title": "Técnico de mantenimiento",
    "exp.j5.desc": "Attica21 Hotels · Jornada completa (3 meses)",
    "exp.j5.t1": "Electricidad Ligera",
    "exp.j5.t2": "Mantenimiento técnico",
    "contact.eyebrow": "Contacto",
    "contact.title": "¿Construimos<br><em>algo juntos?</em>",
    "contact.text": "Estoy buscando una oportunidad de FCT en desarrollo web/software y equipos donde seguir aprendiendo y aportar una mentalidad resolutiva.",
    "footer.made": "Hecho con HTML · CSS · JavaScript",
    "footer.top": "Volver arriba ↑"
  },
  en: {
    "nav.about": "About me",
    "nav.projects": "Projects",
    "nav.minigame": "Minigame",
    "nav.stack": "Stack",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "theme.toggle": "Toggle dark or light theme",
    "lang.toggle": "Change language",
    "hero.availability": "Available for FCT · A Coruña",
    "hero.kicker": "WEB DEVELOPMENT / SOFTWARE",
    "hero.title": "I build things<br><em>that work.</em>",
    "hero.text": "I'm Daniel Díaz Canosa, a Web Development (DAW) student. I like understanding how the pieces fit together, solving problems and turning ideas into web experiences.",
    "hero.viewProjects": "View projects",
    "hero.talk": "Let's talk",
    "terminal.location": "Galicia, Spain",
    "about.eyebrow": "About me",
    "about.title": "Technical curiosity,<br><em>cool head.</em>",
    "about.lead": "I'm 21 and I've been trying to understand not only <strong>what</strong> a technology does, but <strong>why</strong> it works.",
    "about.p2": "Before moving into web development I studied a Degree in Electronic and Automated Systems, working with Siemens PLCs and electrical logic. That stage gave me a structured way of thinking and finding solutions.",
    "about.p3": "I also worked as a football referee for several years at the Galician Technical Committee. I learned to decide under pressure, communicate clearly and stay calm when you have to solve things in seconds. Now I bring that experience to code.",
    "trait1.title": "Decisiveness",
    "trait1.sub": "Fast and objective under pressure",
    "trait2.title": "Structure",
    "trait2.sub": "Analyse before building",
    "trait3.title": "Communication",
    "trait3.sub": "Clear, direct and collaborative",
    "trait4.title": "Persistence",
    "trait4.sub": "Studies, sports and projects",
    "proj.eyebrow": "Selected work",
    "proj.title": "Projects that<br><em>represent me.</em>",
    "filter.all": "All",
    "filter.web": "Web",
    "filter.frontend": "Frontend",
    "meta.personal": "Personal",
    "meta.console": "Console",
    "meta.team": "Team",
    "proj1.desc": "Personal blog with a warm, artisanal aesthetic, own design and content. A project to explore WordPress from building and publishing content to visual identity.",
    "proj2.desc": "Console version of the classic game against a CPU, with boards, ship placement and shot management.",
    "proj3.desc": "Simulation of an F1 championship with cars, drivers, circuits, races and standings by driver and team.",
    "proj4.desc": "Interactive website about the podenco breed with a Bento Grid layout, image lightbox and lazy-load video with mobile-friendly JavaScript logic.",
    "link.visit": "Visit project",
    "link.github": "View on GitHub",
    "juego.eyebrow": "Interactive minigame",
    "juego.title": "Flappy Bird<br><em>in JavaScript.</em>",
    "stack.eyebrow": "Tools",
    "stack.title": "Stack and<br><em>tools.</em>",
    "edu.eyebrow": "Academic background",
    "edu.title": "Education<br><em>and studies.</em>",
    "edu.d1": "Higher Vocational Diploma in Web Application Development",
    "edu.d2": "Intermediate Vocational Diploma in Electrical and Automated Installations",
    "edu.d3": "High school",
    "exp.eyebrow": "Professional path",
    "exp.title": "Work<br><em>experience.</em>",
    "exp.j1.title": "Kitchen assistant",
    "exp.j1.desc": "Servicio Galego de Saúde - Subdirección Xeral · Temporary (2 months)",
    "exp.j1.tags": "Cooking and food preparation",
    "exp.j2.title": "Maintenance technician",
    "exp.j2.desc": "Attica21 Hotels · Part-time (3 months)",
    "exp.j2.t1": "Telecommunications",
    "exp.j2.t2": "Maintenance and repairs",
    "exp.j3.title": "Football referee",
    "exp.j3.desc": "Galician Technical Committee of Football Referees · Part-time (2y 10m)",
    "exp.j3.t1": "Conflict management",
    "exp.j3.t2": "Decision making",
    "exp.j4.title": "Maintenance technician",
    "exp.j4.desc": "Hesperia World · Part-time (3 months)",
    "exp.j4.t1": "Equipment maintenance",
    "exp.j4.t2": "Telecommunications",
    "exp.j5.title": "Maintenance technician",
    "exp.j5.desc": "Attica21 Hotels · Full-time (3 months)",
    "exp.j5.t1": "Light electrical work",
    "exp.j5.t2": "Technical maintenance",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's build<br><em>something together?</em>",
    "contact.text": "I'm looking for an FCT opportunity in web/software development and teams where I can keep learning and bring a problem-solving mindset.",
    "footer.made": "Made with HTML · CSS · JavaScript",
    "footer.top": "Back to top ↑"
  },
  pt: {
    "nav.about": "Sobre mim",
    "nav.projects": "Projetos",
    "nav.minigame": "Mini jogo",
    "nav.stack": "Stack",
    "nav.education": "Educação",
    "nav.experience": "Experiência",
    "nav.contact": "Contacto",
    "theme.toggle": "Alternar tema claro ou escuro",
    "lang.toggle": "Alterar idioma",
    "hero.availability": "Disponível para FCT · A Corunha",
    "hero.kicker": "DESENVOLVIMENTO WEB / SOFTWARE",
    "hero.title": "Construo coisas<br><em>que funcionam.</em>",
    "hero.text": "Sou Daniel Díaz Canosa, estudante de Desenvolvimento de Aplicações Web (DAW). Gosto de perceber como as peças encaixam, resolver problemas e transformar ideias em experiências web.",
    "hero.viewProjects": "Ver projetos",
    "hero.talk": "Vamos falar",
    "terminal.location": "Galiza, Espanha",
    "about.eyebrow": "Sobre mim",
    "about.title": "Curiosidade técnica,<br><em>cabeça fria.</em>",
    "about.lead": "Tenho 21 anos e há tempo que tento perceber não só <strong>o que</strong> faz uma tecnologia, mas <strong>porquê</strong> funciona.",
    "about.p2": "Antes de passar ao desenvolvimento web estudei um Grau de Sistemas Eletrónicos e Automatizados, trabalhei com autómatos da Siemens e lógica de sistemas elétricos. Essa etapa deixou-me uma forma estruturada de pensar e procurar soluções.",
    "about.p3": "Também fui árbitro de futebol durante vários anos no Comité Técnico Galego. Aprendi a decidir sob pressão, comunicar com clareza e manter a calma quando é preciso resolver algo em segundos. Agora levo essa experiência para o código.",
    "trait1.title": "Decisão",
    "trait1.sub": "Rápida e objetiva sob pressão",
    "trait2.title": "Estrutura",
    "trait2.sub": "Analisar antes de construir",
    "trait3.title": "Comunicação",
    "trait3.sub": "Clara, direta e colaborativa",
    "trait4.title": "Constância",
    "trait4.sub": "Estudos, desporto e projetos",
    "proj.eyebrow": "Trabalho selecionado",
    "proj.title": "Projetos que<br><em>me representam.</em>",
    "filter.all": "Todos",
    "filter.web": "Web",
    "filter.frontend": "Frontend",
    "meta.personal": "Pessoal",
    "meta.console": "Consola",
    "meta.team": "Equipa",
    "proj1.desc": "Blog pessoal com uma estética quente e artesanal, design e conteúdo próprios. Um projeto para explorar o WordPress desde a construção e publicação de conteúdo até à identidade visual.",
    "proj2.desc": "Versão em consola do clássico jogo contra uma CPU, com tabuleiros, posicionamento de navios e gestão de disparos.",
    "proj3.desc": "Simulação de um campeonato de F1 com carros, pilotos, circuitos, corridas e classificações por piloto e equipa.",
    "proj4.desc": "Site interativo sobre a raça podenco com design Bento Grid, lightbox para imagens e vídeo com carregamento atrasado e lógica JavaScript adaptada a telemóvel.",
    "link.visit": "Visitar projeto",
    "link.github": "Ver no GitHub",
    "juego.eyebrow": "Mini jogo interativo",
    "juego.title": "Flappy Bird<br><em>em JavaScript.</em>",
    "stack.eyebrow": "Ferramentas",
    "stack.title": "Stack e<br><em>ferramentas.</em>",
    "edu.eyebrow": "Formação académica",
    "edu.title": "Educação<br><em>e estudos.</em>",
    "edu.d1": "CFGS em Desenvolvimento de Aplicações Web",
    "edu.d2": "CFGM em Instalações Elétricas e Automáticas",
    "edu.d3": "Ensino secundário",
    "exp.eyebrow": "Percurso profissional",
    "exp.title": "Experiência<br><em>profissional.</em>",
    "exp.j1.title": "Ajudante de cozinha",
    "exp.j1.desc": "Servicio Galego de Saúde - Subdirección Xeral · Interno (2 meses)",
    "exp.j1.tags": "Cozinha e preparação de alimentos",
    "exp.j2.title": "Técnico de manutenção",
    "exp.j2.desc": "Attica21 Hotels · Tempo parcial (3 meses)",
    "exp.j2.t1": "Telecomunicações",
    "exp.j2.t2": "Manutenção e reparações",
    "exp.j3.title": "Árbitro de futebol",
    "exp.j3.desc": "Comité Técnico Galego de Árbitros de Futebol · Tempo parcial (2 anos 10 meses)",
    "exp.j3.t1": "Gestão de conflitos",
    "exp.j3.t2": "Tomada de decisões",
    "exp.j4.title": "Técnico de manutenção",
    "exp.j4.desc": "Hesperia World · Tempo parcial (3 meses)",
    "exp.j4.t1": "Manutenção de equipamentos",
    "exp.j4.t2": "Telecomunicações",
    "exp.j5.title": "Técnico de manutenção",
    "exp.j5.desc": "Attica21 Hotels · Tempo integral (3 meses)",
    "exp.j5.t1": "Eletricidade ligeira",
    "exp.j5.t2": "Manutenção técnica",
    "contact.eyebrow": "Contacto",
    "contact.title": "Construímos<br><em>algo juntos?</em>",
    "contact.text": "Procuro uma oportunidade de FCT em desenvolvimento web/software e equipas onde possa continuar a aprender e contribuir com uma mentalidade resolutiva.",
    "footer.made": "Feito com HTML · CSS · JavaScript",
    "footer.top": "Voltar ao topo ↑"
  }
};

let currentLang = "es";
try {
  currentLang = localStorage.getItem("lang") || "es";
} catch (e) {}

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute("lang", lang);
  const dict = translations[lang] || translations.es;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const pairs = el.getAttribute("data-i18n-attr").split(",");
    pairs.forEach(pair => {
      const [attr, key] = pair.split("|");
      if (attr && key && dict[key] !== undefined) el.setAttribute(attr, dict[key]);
    });
  });

  try {
    localStorage.setItem("lang", lang);
  } catch (e) {}

  updateLangFlag();

  window.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

const langToggle = document.getElementById("langToggle");
const langFlag = document.getElementById("langFlag");
const langOrder = ["es", "en", "pt"];
const flags = { es: "\uD83C\uDDEA\uD83C\uDDF8", en: "\uD83C\uDDEC\uD83C\uDDE7", pt: "\uD83C\uDDF5\uD83C\uDDF9" };

function updateLangFlag() {
  if (langFlag) langFlag.textContent = flags[currentLang] || flags.es;
}

applyLang(currentLang);

langToggle?.addEventListener("click", () => {
  const next = langOrder[(langOrder.indexOf(currentLang) + 1) % langOrder.length];
  applyLang(next);
});

window.addEventListener("storage", (e) => {
  if (e.key === "lang" && e.newValue) {
    currentLang = e.newValue;
    updateLangFlag();
    applyLang(currentLang);
  }
});

// ─── Theme toggle ────────────────────────────────────────────────────────────

const themeToggle = document.getElementById("themeToggle");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

function applyTheme(isLight) {
  document.body.classList.toggle("light", isLight);
  themeToggle?.setAttribute("aria-pressed", String(isLight));
  themeColorMeta?.setAttribute("content", isLight ? "#f5f6f2" : "#0b0d12");
}

let savedTheme;
try {
  savedTheme = localStorage.getItem("theme");
} catch (e) {}

applyTheme(savedTheme === "light");

themeToggle?.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  try {
    localStorage.setItem("theme", isLight ? "light" : "dark");
  } catch (e) {}
  applyTheme(isLight);
});

// ─── Project filters ─────────────────────────────────────────────────────────

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");

    projectCards.forEach(card => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.classList.remove("filtered-out");
      } else {
        card.classList.add("filtered-out");
      }
    });
  });
});
