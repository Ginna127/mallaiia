const semestres = {
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
    "Cálculo de funciones multivariables", "Tecnología de materiales", "Programación estructurada",
    "Contabilidad financiera", "Dibujo técnico", "Fundamentos de electricidad y laboratorio",
    "Termodinámica"
  ],
  "4° Semestre": [
    "Ecuaciones diferenciales", "Automatización industrial", "Introducción a la administración",
    "Procesos de manufactura", "Circuitos eléctricos y laboratorio", "Modelos determinísticos",
    "Análisis e interpretación de estados financieros", "Dibujo computarizado"
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
    "Maquinados y metrología dimensional", "Fundamentos de mercadotecnia",
    "Optativa II"
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

const dependencias = {
  "Precálculo": ["Cálculo Integral", "Álgebra lineal"],
  "Cálculo diferencial": ["Cálculo Integral"],
  "Física clásica y laboratorio": ["Estática y laboratorio"],
  "Cálculo Integral": ["Cálculo de funciones multivariables", "Tecnología de materiales", "Programación estructurada",
                       "Contabilidad financiera", "Dibujo técnico", "Fundamentos de electricidad y laboratorio", "Termodinámica"],
  "Inteligencia emocional y psicología positiva": ["Cálculo de funciones multivariables", "Tecnología de materiales", "Programación estructurada",
                       "Contabilidad financiera", "Dibujo técnico", "Fundamentos de electricidad y laboratorio", "Termodinámica"],
  "Redacción y exposición de temas de ingeniería": ["Cálculo de funciones multivariables", "Tecnología de materiales", "Programación estructurada",
                       "Contabilidad financiera", "Dibujo técnico", "Fundamentos de electricidad y laboratorio", "Termodinámica"],
  "Estática y laboratorio": ["Cálculo de funciones multivariables", "Tecnología de materiales", "Programación estructurada",
                       "Contabilidad financiera", "Dibujo técnico", "Fundamentos de electricidad y laboratorio", "Termodinámica"],
  "Álgebra lineal": ["Cálculo de funciones multivariables", "Tecnología de materiales", "Programación estructurada",
                       "Contabilidad financiera", "Dibujo técnico", "Fundamentos de electricidad y laboratorio", "Termodinámica"],
  "Tecnología informática": ["Cálculo de funciones multivariables", "Tecnología de materiales", "Programación estructurada",
                       "Contabilidad financiera", "Dibujo técnico", "Fundamentos de electricidad y laboratorio", "Termodinámica"],
  "Economía aplicada a los negocios": ["Cálculo de funciones multivariables", "Tecnología de materiales", "Programación estructurada",
                       "Contabilidad financiera", "Dibujo técnico", "Fundamentos de electricidad y laboratorio", "Termodinámica"],
  "Responsabilidad social y desarrollo sustentable": ["Cálculo de funciones multivariables", "Tecnología de materiales", "Programación estructurada",
                       "Contabilidad financiera", "Dibujo técnico", "Fundamentos de electricidad y laboratorio", "Termodinámica"],
  "Liderazgo, emprendimiento e innovación": ["Cálculo de funciones multivariables", "Tecnología de materiales", "Programación estructurada",
                       "Contabilidad financiera", "Dibujo técnico", "Fundamentos de electricidad y laboratorio", "Termodinámica"],
  "Cálculo de funciones multivariables": ["Ecuaciones diferenciales"],
  "Tecnología de materiales": ["Procesos de manufactura"],
  "Contabilidad financiera": ["Análisis e interpretación de estados financieros"],
  "Dibujo técnico": ["Dibujo computarizado"],
  "Fundamentos de electricidad y laboratorio": ["Circuitos eléctricos y laboratorio"],
  "Automatización industrial": ["Maquinados y metrología dimensional"],
  "Modelos determinísticos": ["Modelos probabilísticos"],
  "Análisis e interpretación de estados financieros": ["Ingeniería de costos"],
  "Dibujo computarizado": ["Diseño asistido por computadora"],
  "Probabilidad y estadística": ["Estadística y diseño de experimentos"],
  "Modelos probabilísticos": ["Planeación y control de las operaciones"],
  "Optativa I": ["Optativa II"],
  "Estadística y diseño de experimentos": ["Control estadístico del proceso", "Inteligencia de negocios"],
  "Estudio del trabajo": ["Ergonomía y factores humanos", "Planeación y control de las operaciones", "Gestión del mantenimiento"],
  "Control estadístico del proceso": ["Gestión del mantenimiento"],
  "Planeación y control de las operaciones": ["Administración de la cadena de suministro", "Manufactura de classe mundial"],
  "Ingeniería económica": ["Administración de proyectos"],
  "Sistemas de gestión de calidad": ["Gestión del mantenimiento"],
  "Administración de proyectos": ["Seminario integrador"],
  "Localización y diseño de instalaciones": ["Seminario integrador"]
};

const estado = {};
const container = document.getElementById("malla-container");

// Crear columnas por semestre
for (const [nombreSemestre, ramos] of Object.entries(semestres)) {
  const columna = document.createElement("div");
  columna.className = "semestre";
  const titulo = document.createElement("h2");
  titulo.textContent = nombreSemestre;
  columna.appendChild(titulo);

  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo bloqueado";
    div.textContent = ramo;
    div.id = ramo;
    div.onclick = () => aprobar(ramo);
    columna.appendChild(div);
    estado[ramo] = false;
  });

  container.appendChild(columna);
}

// Desbloquear los ramos sin requisitos
const ramosConRequisitos = Object.values(dependencias).flat();
Object.keys(estado).forEach(ramo => {
  if (!ramosConRequisitos.includes(ramo)) desbloquear(ramo);
});

function desbloquear(ramo) {
  const el = document.getElementById(ramo);
  if (el) el.classList.remove("bloqueado");
}

function aprobar(ramo) {
  const el = document.getElementById(ramo);
  if (!el || el.classList.contains("bloqueado") || estado[ramo]) return;
  estado[ramo] = true;
  el.classList.add("aprobado");

  for (const [requisito, dependientes] of Object.entries(dependencias)) {
    dependientes.forEach(destino => {
      const requisitos = Object.entries(dependencias)
        .filter(([, list]) => list.includes(destino))
        .map(([req]) => req);
      const todosAprobados = requisitos.every(r => estado[r]);
      if (todosAprobados) desbloquear(destino);
    });
  }
}
