class Turma {
  #nomecurso;
  #professor;
  #idcurso;
  alunos = [];
  constructor(nomecurso, professor, idturma) {
    this.#nomecurso = nomecurso;
    this.#professor = professor;
    this.#idcurso = idturma;
  }

  getNomeCurso(){
    return this.#nomecurso;
  }
  setNomeCurso(nome){
    this.#nomecurso = nome;
  }

  getProfessor(){
    return this.#professor;
  }

  setProfessor(prof){
    this.#professor = prof;
  }

  getIdturma(){
    return this.#idcurso;
  }

} //fim da classe 