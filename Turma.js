class Turma {
  #nomecurso;
  #professor;
  #idcurso;
  alunos = [];
  constructor(nomecurso, professor, idturma) {
    this.#nomecurso = nomecurso;
    this.#professor = professor;
    this.#idturma = idturma;
    console('nova turma cirada');
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

  setProfessor(prof){
    this.#professor = prof
  }

  getIdturma(){
    return this.#idcurso;
  }

  adcionarAluno(aluno){
    this.alunos.push(aluno)
  }

} //fim da classe 