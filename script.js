const malla = {
  "1° Semestre": [
    "Precálculo", "Cálculo diferencial", "Física clásica y laboratorio",
    "Química básica y laboratorio", "Ingeniería industrial, calidad y productividad",
    "Ética y cultura de la legalidad", "Cultura de género", "Cultura de paz"
  ],
  "2° Semestre": [
    "Cálculo Integral", "Inteligencia emocional y psicología positiva",
    "Redacción y exposición de temas de ingeniería", "Estática y laboratorio",
    "Álgebra lineal", "Tecnología informática", "Economía aplicada a los negocios",
    "Responsabilidad social y desarrollo sustentable", "Liderazgo, emprendimiento e innovación"
  ],
  "3° Semestre": [
    "Cálculo de funciones multivariables", "Tecnología de materiales",
    "Programación estructurada", "Contabilidad financiera", "Dibujo técnico",
    "Fundamentos de electricidad y laboratorio", "Termodinámica"
  ],
  "4° Semestre": [
    "Ecuaciones diferenciales", "Automatización industrial", "Introducción a la administración",
    "Procesos de manufactura", "Circuitos eléctricos y laboratorio",
    "Modelos determinísticos", "Análisis e interpretación de estados financieros",
    "Dibujo computarizado"
  ],
  "5° Semestre": [
    "Probabilidad y estadística", "Seguridad y gestión ambiental",
    "Comportamiento organizacional y liderazgo", "Modelos probabilísticos",
    "Ingeniería de costos", "Diseño asistido por computadora",
    "Competencia comunicativa en el idioma inglés", "Optativa I"
  ],
  "6° Semestre": [
    "Estadística y diseño de experimentos", "Estudio del trabajo",
    "Laboratorio de estudio del trabajo", "Simulación de procesos productivos",
    "Maquinados y metrología dimensional", "Fundamentos de mercadotecnia", "Optativa II"
  ],
  "7° Semestre": [
    "Administración de capital humano", "Control estadístico del proceso",
    "Ergonomía y factores humanos", "Planeación y control de las operaciones",
    "Ingeniería económica", "Sistemas de gestión de calidad"
  ],
  "8° Semestre": [
    "Servicio social", "Inteligencia de negocios", "Gestión del mantenimiento",
    "Administración de la cadena de suministro", "Administración de proyectos"
  ],
  "9° Semestre": [
    "Localización y diseño de instalaciones", "Estrategia de negocios",
    "Manufactura de classe mundial", "Derecho laboral",
    "Optativa del área curricular de formación profesional integradora"
  ],
  "10° Semestre": [
    "Seminario integrador", "Seminario para el desempeño profesional",
    "Optativa III", "Optativa IV"
  ]
};

// Requisitos para desbloquear
const requisitos = {
  "Cálculo Integral": ["Precálculo", "Cálculo diferencial"],
  "Álgebra lineal": ["Precálculo"],
  "Estática y laboratorio": ["Física clásica y laboratorio"],
  "Cálculo de funciones multivariables": [
    "Cálculo Integral", "Inteligencia emocional y psicología positiva",
    "Redacción y exposición de temas de ingeniería", "Estática y laboratorio",
    "Álgebra lineal", "Tecnología informática", "Economía aplicada a los negocios",
    "Responsabilidad social y desarrollo sustentable", "Liderazgo, emprendimiento e innovación"
  ],
  "Tecnología de materiales": ["Cálculo Integral", "Inteligencia emocional y psicología positiva",
    "Redacción y exposición de temas de ingeniería", "Estática y laboratorio",
    "Álgebra lineal", "Tecnología informática", "Economía aplicada a los negocios",
    "Responsabilidad social y desarrollo sustentable", "Liderazgo, emprendimiento e innovación"
  ],
  "Programación estructurada": ["Cálculo Integral"],
  "Contabilidad financiera": ["Cálculo Integral"],
  "Dibujo técnico": ["Cálculo Integral"],
  "Fundamentos de electricidad y laboratorio": ["Cálculo Integral"],
  "Termodinámica": ["Cálculo Integral"],
  "Ecuaciones diferenciales": ["Cálculo de funciones multivariables"],
  "Procesos de manufactura": ["Tecnología de materiales"],
  "Análisis e interpretación de estados financieros": ["Contabilidad financiera"],
  "Dibujo computarizado": ["Dibujo técnico"],
  "Circuitos eléctricos y laboratorio": ["Fundamentos de electricidad y laboratorio"],
  "Modelos probabilísticos": ["Modelos determinísticos"],
  "Ingeniería de costos": ["Análisis e interpretación de estados financieros"],
  "Optativa II": ["Optativa I"],
  "Control estadístico del proceso": ["Estadística y diseño de experimentos"],
  "Inteligencia de negocios": ["Estadística y diseño de experimentos"],
  "Ergonomía y factores humanos": ["Estudio del trabajo"],
  "Planeación y control de las operaciones": ["Estudio del trabajo", "Modelos probabilísticos"],
  "Gestión del mantenimiento": ["Estudio del trabajo", "Control estadístico del proceso", "Sistemas de gestión de calidad"],
  "Administración de la cadena de suministro": ["Planeación y control de las operaciones"],
  "Manufactura de classe mundial": ["Planeación y control de las operaciones"],
  "Administración de proyectos": ["Ingeniería económica"],
  "Seminario integrador": ["Administración de proyectos", "Localización y diseño de instalaciones"]
};

// Estado actual de cada ramo
const estado = {};
const container = document.getElementById("malla-container");

// Crear visualmente los semestres y sus ramos
for (const [semestre, ramos] of Object.entries(malla)) {
  const columna = document.createElement("div");
  columna.className = "semestre";

  const titulo = document.createElement("h2");
  titulo.textContent = semestre;
  columna.appendChild(titulo);

  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo bloqueado";
    div.id = ramo;
    div.textContent = ramo;
    div.onclick = () => aprobar(ramo);
    columna.appendChild(div);
    estado[ramo] = false;
  });

  container.appendChild(columna);
}

// ✅ Desbloquear ramos sin requisitos propios
for (const ramo in estado) {
  if (!requisitos.hasOwnProperty(ramo)) {
    document.getElementById(ramo).classList.remove("bloqueado");
  }
}

// Función para aprobar un ramo
function aprobar(ramo) {
  const el = document.getElementById(ramo);
  if (el.classList.contains("bloqueado") || estado[ramo]) return;

  estado[ramo] = true;
  el.classList.add("aprobado");

  // Intentar desbloquear ramos que dependen de este
  for (const [destino, reqs] of Object.entries(requisitos)) {
    if (reqs.includes(ramo)) {
      const cumplidos = reqs.every(r => estado[r]);
      if (cumplidos) {
        const objetivo = document.getElementById(destino);
        if (objetivo) objetivo.classList.remove("bloqueado");
      }
    }
  }
}