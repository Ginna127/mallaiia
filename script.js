// script.js COMPLETO con todos los ramos y dependencias organizados por semestre

const ramos = [
  // --- Primer semestre ---
  { id: "prec", nombre: "Precálculo", abre: ["calcint", "algebra"], semestre: 1 },
  { id: "calcdif", nombre: "Cálculo diferencial", abre: ["calcint"], semestre: 1 },
  { id: "fisica", nombre: "Física clásica y lab", abre: ["estatica"], semestre: 1 },
  { id: "quimica", nombre: "Química básica y lab", abre: [], semestre: 1 },
  { id: "calidad", nombre: "Ing. industrial, calidad y prod", abre: [], semestre: 1 },
  { id: "etica", nombre: "Ética y cultura de la legalidad", abre: [], semestre: 1 },
  { id: "genero", nombre: "Cultura de género", abre: [], semestre: 1 },
  { id: "paz", nombre: "Cultura de paz", abre: [], semestre: 1 },

  // --- Segundo semestre ---
  { id: "calcint", nombre: "Cálculo integral", abre: ["calcvec", "materiales", "prog", "conta", "dibujo", "electricidad", "termo"], semestre: 2 },
  { id: "emocion", nombre: "Intelig. emocional", abre: ["calcvec", "materiales", "prog", "conta", "dibujo", "electricidad", "termo"], semestre: 2 },
  { id: "redaccion", nombre: "Redacción", abre: ["calcvec", "materiales", "prog", "conta", "dibujo", "electricidad", "termo"], semestre: 2 },
  { id: "estatica", nombre: "Estática y lab", abre: ["calcvec", "materiales", "prog", "conta", "dibujo", "electricidad", "termo"], semestre: 2 },
  { id: "algebra", nombre: "Álgebra lineal", abre: ["calcvec", "materiales", "prog", "conta", "dibujo", "electricidad", "termo"], semestre: 2 },
  { id: "tecinfo", nombre: "Tecnología informática", abre: ["calcvec", "materiales", "prog", "conta", "dibujo", "electricidad", "termo"], semestre: 2 },
  { id: "economia", nombre: "Economía aplicada", abre: ["calcvec", "materiales", "prog", "conta", "dibujo", "electricidad", "termo"], semestre: 2 },
  { id: "rse", nombre: "Responsabilidad social", abre: ["calcvec", "materiales", "prog", "conta", "dibujo", "electricidad", "termo"], semestre: 2 },
  { id: "liderazgo", nombre: "Liderazgo e innovación", abre: ["calcvec", "materiales", "prog", "conta", "dibujo", "electricidad", "termo"], semestre: 2 },

  // --- Tercer semestre ---
  { id: "calcvec", nombre: "Cálculo multivariable", abre: ["ecdiff"], semestre: 3 },
  { id: "materiales", nombre: "Tecnología de materiales", abre: ["manufactura"], semestre: 3 },
  { id: "prog", nombre: "Programación estructurada", abre: [], semestre: 3 },
  { id: "conta", nombre: "Contabilidad financiera", abre: ["finanzas"], semestre: 3 },
  { id: "dibujo", nombre: "Dibujo técnico", abre: ["dibujocad"], semestre: 3 },
  { id: "electricidad", nombre: "Fund. de electricidad", abre: ["circuitos"], semestre: 3 },
  { id: "termo", nombre: "Termodinámica", abre: [], semestre: 3 },

  // --- Cuarto semestre ---
  { id: "ecdiff", nombre: "Ecuaciones diferenciales", abre: [], semestre: 4 },
  { id: "automat", nombre: "Automatización industrial", abre: ["maquinados"], semestre: 4 },
  { id: "admin", nombre: "Introducción a la administración", abre: [], semestre: 4 },
  { id: "manufactura", nombre: "Procesos de manufactura", abre: [], semestre: 4 },
  { id: "circuitos", nombre: "Circuitos eléctricos y lab", abre: [], semestre: 4 },
  { id: "modelosdet", nombre: "Modelos determinísticos", abre: ["modelosprob"], semestre: 4 },
  { id: "finanzas", nombre: "Análisis e interpr. financieros", abre: ["costos"], semestre: 4 },
  { id: "dibujocad", nombre: "Dibujo computarizado", abre: ["cad"], semestre: 4 },

  // --- Quinto semestre ---
  { id: "prob", nombre: "Probabilidad y estadística", abre: ["experimentos"], semestre: 5 },
  { id: "seguridad", nombre: "Seguridad y gestión ambiental", abre: [], semestre: 5 },
  { id: "comportamiento", nombre: "Comportamiento organizacional", abre: [], semestre: 5 },
  { id: "modelosprob", nombre: "Modelos probabilísticos", abre: ["planeacion"], semestre: 5 },
  { id: "costos", nombre: "Ingeniería de costos", abre: [], semestre: 5 },
  { id: "cad", nombre: "Diseño asistido por computadora", abre: [], semestre: 5 },
  { id: "ingles", nombre: "Competencia comunicativa inglés", abre: [], semestre: 5 },
  { id: "opt1", nombre: "Optativa I", abre: ["opt2"], semestre: 5 },

  // --- Sexto semestre ---
  { id: "experimentos", nombre: "Estadística y diseño de experimentos", abre: ["control", "inteligencia"], semestre: 6 },
  { id: "estudio", nombre: "Estudio del trabajo", abre: ["ergonomia", "planeacion", "mantenimiento"], semestre: 6 },
  { id: "labestudio", nombre: "Lab estudio del trabajo", abre: [], semestre: 6 },
  { id: "simulacion", nombre: "Simulación de procesos", abre: [], semestre: 6 },
  { id: "maquinados", nombre: "Maquinados y metrología", abre: [], semestre: 6 },
  { id: "mercadotecnia", nombre: "Fund. de mercadotecnia", abre: [], semestre: 6 },
  { id: "opt2", nombre: "Optativa II", abre: [], semestre: 6 },

  // --- Séptimo semestre ---
  { id: "capitalhumano", nombre: "Administración de capital humano", abre: [], semestre: 7 },
  { id: "control", nombre: "Control estadístico del proceso", abre: ["mantenimiento"], semestre: 7 },
  { id: "ergonomia", nombre: "Ergonomía y factores humanos", abre: [], semestre: 7 },
  { id: "planeacion", nombre: "Planeación y control de ops", abre: ["suministro", "clase"], semestre: 7 },
  { id: "economica", nombre: "Ingeniería económica", abre: ["proyectos"], semestre: 7 },
  { id: "calidad", nombre: "Sistemas de gestión de calidad", abre: ["mantenimiento"], semestre: 7 },

  // --- Octavo semestre ---
  { id: "servicio", nombre: "Servicio social", abre: [], semestre: 8 },
  { id: "inteligencia", nombre: "Inteligencia de negocios", abre: [], semestre: 8 },
  { id: "mantenimiento", nombre: "Gestión del mantenimiento", abre: [], semestre: 8 },
  { id: "suministro", nombre: "Administración cadena de suministro", abre: [], semestre: 8 },
  { id: "proyectos", nombre: "Administración de proyectos", abre: ["seminario"], semestre: 8 },

  // --- Noveno semestre ---
  { id: "localizacion", nombre: "Localización y diseño instalaciones", abre: ["seminario"], semestre: 9 },
  { id: "estrategia", nombre: "Estrategia de negocios", abre: [], semestre: 9 },
  { id: "clase", nombre: "Manufactura de clase mundial", abre: [], semestre: 9 },
  { id: "derecho", nombre: "Derecho laboral", abre: [], semestre: 9 },
  { id: "optcurri", nombre: "Optativa profesional integradora", abre: [], semestre: 9 },

  // --- Décimo semestre ---
  { id: "seminario", nombre: "Seminario integrador", abre: [], semestre: 10 },
  { id: "desempeno", nombre: "Seminario desempeño profesional", abre: [], semestre: 10 },
  { id: "opt3", nombre: "Optativa III", abre: [], semestre: 10 },
  { id: "opt4", nombre: "Optativa IV", abre: [], semestre: 10 }
];

const aprobados = new Set();

function crearMalla() {
  const container = document.getElementById("malla");
  const semestres = {};

  // Agrupar ramos por semestre
  ramos.forEach(r => {
    if (!semestres[r.semestre]) {
      semestres[r.semestre] = [];
    }
    semestres[r.semestre].push(r);
  });

  // Crear secciones por semestre
  Object.keys(semestres).sort((a, b) => a - b).forEach(sem => {
    const section = document.createElement("div");
    section.className = "semestre";

    const title = document.createElement("h2");
    title.textContent = `Semestre ${sem}`;
    section.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "grid";

    semestres[sem].forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.id = ramo.id;
      div.textContent = ramo.nombre;
      div.onclick = () => aprobarRamo(ramo.id);
      grid.appendChild(div);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });

  actualizarEstado();
}

function aprobarRamo(id) {
  if (!document.getElementById(id).classList.contains("habilitado")) return;
  aprobados.add(id);
  document.getElementById(id).classList.add("aprobado");
  actualizarEstado();
}

function actualizarEstado() {
  const desbloqueados = new Set();

  ramos.forEach(r => {
    if (!aprobados.has(r.id)) {
      const prereqs = ramos.filter(x => x.abre.includes(r.id)).map(x => x.id);
      const cumplidos = prereqs.every(p => aprobados.has(p));
      if (prereqs.length === 0 || cumplidos) desbloqueados.add(r.id);
    }
  });

  ramos.forEach(r => {
    const elem = document.getElementById(r.id);
    if (aprobados.has(r.id)) {
      elem.classList
