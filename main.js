let turmas = [];

function listarTurmas(){
   Interface.listar(turmas);
}

function btnSalvar(){
  let a = Interface.salvar(turmas);
  //alterar essa funcao pra salvar o aluno na turma.
}

function btnSalvarTurma(){
   let t = Interface.salvarTurma()
   turmas.push(t)
}

function cadastro(){
   Interface.cadastrar();
}

function cadastroAluno(){
   Interface.cadastrarAluno();
}

function cadastroTurma(){
   Interface.cadastrarTurma();
}

function editarNotas(nturma, aluno){
   Interface.editarNotas(nturma, aluno, turmas);
}