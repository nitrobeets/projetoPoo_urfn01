class Interface{


  constructor(){
  
  
  }   

  static salvarTurma() {
   let nometurma = document.getElementById('nomecurso').value;
   let prof = document.getElementById('prof').value;
   let idturma = document.getElementById('idturma').value;
   let t1 = new Turma(nometurma, prof, idturma);
   alert('turma cadastrada');
   return t1;
  }
 
  static salvar(turmas) {
   let nome = document.getElementById('nome').value;
   let n1 = Number(document.getElementById('n1').value);
   let n2 = Number(document.getElementById('n2').value);
   let n3 = Number(document.getElementById('n3').value);
   let a1 = new Aluno(nome, n1, n2, n3);
   let idturma = document.getElementById('turma').value;
   let m = a1.gerarMedia(n1, n2, n3);
   a1.gerarEstado(m);
   let tencontrada = false;

   if(turmas.length == 0){
    alert('é necessario cadastrar uma turma primeiro para poder cadastrar um aluno.');
   }

   for(let i = 0; i < turmas.length; i++){
    if(turmas[i].getIdturma() == idturma){
      turmas[i].alunos.push(a1);
      alert('aluno cadastrado');
      alert(turmas[i].alunos.length)
      tencontrada = true;
    }
   }
   if(!(tencontrada)){
    alert('turma não encontrada, tente novamente!');
   }
  }

  static listar(turma) {
   const btnCadastrar = document.getElementById('btn-cadastrar');
   const tabCadastrar = document.getElementById('tab-cadastrar');
   const btnListar = document.getElementById('btn-listar');
   const tabListar = document.getElementById('tab-listar');
   btnListar.classList.add('active');
   btnCadastrar.classList.remove('active');
   // Ajusta o conteúdo visível
   tabListar.classList.add('active');
   tabCadastrar.classList.remove('active');

   let lista = '<table border="1">';

   // Cabeçalho da tabela
   lista +=
      "<tr>" +
      "<th>Nome da Turma</th>" +
      "<th>Professor</th>" +
      "<th>ID da Turma</th>" +
      "</tr>";

   for (let i = 0; i < turma.length; i++) {
      lista +=
         "<tr>" +
         "<td>" + turma[i].getNomeCurso() + "</td>" +
         "<td>" + turma[i].getProfessor() + "</td>" +
         "<td>" + turma[i].getIdturma() + "</td>" +
         "</tr>";
      if(turma[i].alunos.length >= 1){
        lista +=
        "<tr>" + 
        "<th>Nome do aluno</th>" +
        "<th>Média</th>" +
        "<th>Situação</th>" +
        "</tr>";
        for(let j = 0; j < turma[i].alunos.length; j++) {
          lista +=
            "<tr>"+
            "<td>"+turma[i].alunos[j].getNome() +"</td>"+
            "<td>"+turma[i].alunos[j].media.toFixed(2) +"</td>"+
            "<td>"+turma[i].alunos[j].estado +"</td>"
            "</tr>";
        }
      }else{
        lista += "<tr><td>Nenhum aluno Cadastrado nessa turma ainda.</td></tr>"
      }
   }
   lista += "</table>"
   document.getElementById('turmas').innerHTML = lista;
  }
  
  
  static cadastrar() {
   const btnCadastrar = document.getElementById('btn-cadastrar');
   const tabCadastrar = document.getElementById('tab-cadastrar');
   const btnListar = document.getElementById('btn-listar');
   const tabListar = document.getElementById('tab-listar');

  
   btnListar.classList.remove('active');
   btnCadastrar.classList.add('active');
  
  
   // Ajusta o conteúdo visível
   tabListar.classList.remove('active');
   tabCadastrar.classList.add('active');
   //document.getElementById("media").innerHTML = m;
  }

  static cadastrarTurma() {
    const btnCadastrarTurma = document.getElementById('btn-cadastrarTurma');
    const tabCadastrarTurma = document.getElementById('tab-cadastrarTurma');
    const btnCadastrarAluno = document.getElementById('btn-cadastrarAluno');
    const tabCadastrarAluno = document.getElementById('tab-cadastrarAluno');

    btnCadastrarAluno.classList.remove('active');
    btnCadastrarTurma.classList.add('active');

    tabCadastrarAluno.classList.remove('active');
    tabCadastrarTurma.classList.add('active');
  }

  static cadastrarAluno() {
    const btnCadastrarTurma = document.getElementById('btn-cadastrarTurma');
    const tabCadastrarTurma = document.getElementById('tab-cadastrarTurma');
    const btnCadastrarAluno = document.getElementById('btn-cadastrarAluno');
    const tabCadastrarAluno = document.getElementById('tab-cadastrarAluno');

    btnCadastrarAluno.classList.add('active');
    btnCadastrarTurma.classList.remove('active');

    tabCadastrarAluno.classList.add('active');
    tabCadastrarTurma.classList.remove('active');
  }
}