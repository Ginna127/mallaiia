
const ramos = [
  // --- Primer semestre ---
  { id: "prec", nombre: "Precálculo", abre: ["calcint", "algebra"] },
  { id: "calcdif", nombre: "Cálculo diferencial", abre: ["calcint"] },
  { id: "fisica", nombre: "Física clásica y lab", abre: ["estatica"] },
  { id: "quimica", nombre: "Química básica y lab", abre: [] },
  { id: "calidad", nombre: "Ing. industrial, calidad y prod", abre: [] },
  { id: "etica", nombre: "Ética y cultura de la legalidad", abre: [] },
  { id: "genero", nombre: "Cultura de género", abre: [] },
  { id: "paz", nombre: "Cultura de paz", abre: [] },

  // --- Segundo semestre ---
  { id: "calcint", nombre: "Cálculo integral", abre: ["calcvec", "materiales", "prog", "conta", "dibujo", "electricidad", "termo"] },
  { id: "emocion", nombre: "Intelig. emocional", abre: ["calcvec", "materiales", "prog", "conta", "dibujo", "electricidad", "termo"] },
  { id: "redaccion", nombre: "Redacción", abre: ["calcvec", "materiales", "prog", "conta", "dibujo", "electricidad", "termo"] },
  { id: "estatica", nombre: "Estática y lab", abre: ["calcvec", "materiales", "prog", "conta", "dibujo", "electricidad", "termo"] },
  { id: "algebra", nombre: "Álgebra lineal", abre: ["calcvec", "materiales", "prog", "conta", "dibujo", "electricidad", "termo"] },
  { id: "tecinfo", nombre: "Tecnología informática", abre: ["calcvec", "materiales", "prog", "conta", "dibujo", "electricidad", "termo"] },
  { id: "economia", nombre: "Economía aplicada", abre: ["calcvec", "materiales", "prog", "conta", "dibujo", "electricidad", "termo"] },
  { id: "rse", nombre: "Responsabilidad social", abre: ["calcvec", "materiales", "prog", "conta", "dibujo", "electricidad", "termo"] },
  { id: "liderazgo", nombre: "Liderazgo e innovación", abre: ["calcvec", "materiales", "prog", "conta", "dibujo", "electricidad", "termo"] },

  // --- Tercer semestre ---
  { id: "calcvec", nombre: "Cálculo multivariable", abre: ["ecdiff"] },
  { id: "materiales", nombre: "Tecnología de materiales", abre: ["manufactura"] },
  { id: "prog", nombre: "Programación estructurada", abre: [] },
  { id: "conta", nombre: "Contabilidad financiera", abre: ["finanzas"] },
  { id: "dibujo", nombre: "Dibujo técnico", abre: ["dibujocad"] },
  { id: "electricidad", nombre: "Fund. de electricidad", abre: ["circuitos"] },
  { id: "termo", nombre: "Termodinámica", abre: [] },

  // --- Cuarto semestre ---
  { id: "ecdiff", nombre: "Ecuaciones diferenciales", abre: [] },
  { id: "automat", nombre: "Automatización industrial", abre: ["maquinados"] },
  { id: "admin", nombre: "Introducción a la administración", abre: [] },
  { id: "manufactura", nombre: "Procesos de manufactura", abre: [] },
  { id: "circuitos", nombre: "Circuitos eléctricos y lab", abre: [] },
  { id: "modelosdet", nombre: "Modelos determinísticos", abre: ["modelosprob"] },
  { id: "finanzas", nombre: "Análisis e interpr. financieros", abre: ["costos"] },
  { id: "dibujocad", nombre: "Dibujo computarizado", abre: ["cad"] },

  // --- Quinto semestre ---
  { id: "prob", nombre: "Probabilidad y estadística", abre: ["experimentos"] },
  { id: "seguridad", nombre: "Seguridad y gestión ambiental", abre: [] },
  { id: "comportamiento", nombre: "Comportamiento organizacional", abre: [] },
  { id: "modelosprob", nombre: "Modelos probabilísticos", abre: ["planeacion"] },
  { id: "costos", nombre: "Ingeniería de costos", abre: [] },
  { id: "cad", nombre: "Diseño asistido por computadora", abre: [] },
  { id: "ingles", nombre: "Competencia comunicativa inglés", abre: [] },
  { id: "opt1", nombre: "Optativa I", abre: ["opt2"] },

  // --- Sexto semestre ---
  { id: "experimentos", nombre: "Estadística y diseño de experimentos", abre: ["control", "inteligencia"] },
  { id: "estudio", nombre: "Estudio del trabajo", abre: ["ergonomia", "planeacion", "mantenimiento"] },
  { id: "labestudio", nombre: "Lab estudio del trabajo", abre: [] },
  { id: "simulacion", nombre: "Simulación de procesos", abre: [] },
  { id: "maquinados", nombre: "Maquinados y metrología", abre: [] },
  { id: "mercadotecnia", nombre: "Fund. de mercadotecnia", abre: [] },
  { id: "opt2", nombre: "Optativa II", abre: [] },

  // --- Séptimo semestre ---
  { id: "capitalhumano", nombre: "Administración de capital humano", abre: [] },
  { id: "control", nombre: "Control estadístico del proceso", abre: ["mantenimiento"] },
  { id: "ergonomia", nombre: "Ergonomía y factores humanos", abre: [] },
  { id: "planeacion", nombre: "Planeación y control de ops", abre: ["suministro", "clase"] },
  { id: "economica", nombre: "Ingeniería económica", abre: ["proyectos"] },
  { id: "calidad", nombre: "Sistemas de gestión de calidad", abre: ["mantenimiento"] },

  // --- Octavo semestre ---
  { id: "servicio", nombre: "Servicio social", abre: [] },
  { id: "inteligencia", nombre: "Inteligencia de negocios", abre: [] },
  { id: "mantenimiento", nombre: "Gestión del mantenimiento", abre: [] },
  { id: "suministro", nombre: "Administración cadena de suministro", abre: [] },
  { id: "proyectos", nombre: "Administración de proyectos", abre: ["seminario"] },

  // --- Noveno semestre ---
  { id: "localizacion", nombre: "Localización y diseño instalaciones", abre: ["seminario"] },
  { id: "estrategia", nombre: "Estrategia de negocios", abre: [] },
  { id: "clase", nombre: "Manufactura de clase mundial", abre: [] },
  { id: "derecho", nombre: "Derecho laboral", abre: [] },
  { id: "optcurri", nombre: "Optativa profesional integradora", abre: [] },

  // --- Décimo semestre ---
  { id: "seminario", nombre: "Seminario integrador", abre: [] },
  { id: "desempeno", nombre: "Seminario desempeño profesional", abre: [] },
  { id: "opt3", nombre: "Optativa III", abre: [] },
  { id: "opt4", nombre: "Optativa IV", abre: [] }
];

const aprobados = new Set();

function crearMalla() {
  const container = document.getElementById("malla");
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.id = ramo.id;
    div.textContent = ramo.nombre;
    div.onclick = () => aprobarRamo(ramo.id);
    container.appendChild(div);
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
      elem.classList.add("aprobado");
      elem.classList.remove("habilitado");
    } else if (desbloqueados.has(r.id)) {
      elem.classList.add("habilitado");
    } else {
      elem.classList.remove("habilitado");
    }
  });
}

crearMalla();
