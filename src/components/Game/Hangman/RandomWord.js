let Programming_Language = [
  "JAVA",
  "C",
  "RUBY",
  "PERL",
  "PYTHON",
  "R",
  "JAVASCRIPT",
  "CSS",
  "HTML",
  "PHP",
  "SQL",
  "MYSQL",
  "COBOL",
  "SCALA",
  "XML",
  "KOTLIN",
  "MATLAB",
  "PASCAL",
  "TYPESCRIPT",
];

function randomWord() {
  return Programming_Language[
    Math.floor(Math.random() * Programming_Language.length)
  ];
}

export { randomWord };
