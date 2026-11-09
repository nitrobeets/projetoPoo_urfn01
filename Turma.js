class Turma {
  #nomecurso;
  #professor;
  #idcurso;
  alunos = [];
  constructor(nomecurso, professor, idturma) {
    this.#nomecurso = nomecurso;
    this.#professor = professor;
    this.#idturma = idturma;
  }
  getNome(){
    return this.#nomecurso;
  }
  setNome(nome){
    this.#nomecurso = nome;
  }

  getProfessor(){
    return this.#professor;
  }

  setNota1(prof){
    this.#professor = prof
  }

  getIdturma(){
    return this.#idcurso;
  }

  adcionarAluno(aluno){
    this.alunos.push(aluno)
  }

 } //fim da classe
 