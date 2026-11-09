let turmas = [];


function listarAluno(){
   Interface.listar(turmas);
}


function btnSalvar(){
  let a = Interface.salvar();
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