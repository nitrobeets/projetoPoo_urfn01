class Interface{


  constructor(){
  
  
  }   
  static salvar() {
   let nome = document.getElementById('nome').value;
   let n1 = Number(document.getElementById('n1').value);
   let n2 = Number(document.getElementById('n2').value);
   let n3 = Number(document.getElementById('n3').value);
   let a1 = new Aluno(nome, n1, n2, n3);
   let m = a1.gerarMedia(n1, n2, n3);
   a1.gerarEstado(m);
   //turma[turma.length] = a1;
   alert('aluno cadastrado');
   return a1;
  }

  static salvarTurma() {
   let nometurma = document.getElementById('nomecurso').value;
   let prof = document.getElementById('prof').value;
   let idturma = document.getElementById('idturma').value;
   let t1 = new Turma(nometurma, prof, idturma);
   alert('turma cadastrada');
   return t1;
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
   
   let lista = '<table>';
   for (let i = 0; i < turma.length; i++) {
     lista =
     "<tr>"+
     "<td>"+turma[i].getNome() +"</td>"+
     "<td>"+turma[i].getProfessor() +"</td>"+
     "<td>"+turma[i].getIdturma() +"</td>"+
     "</tr>";
   }
   /*for (let i = 0; i < turma.length; i++) {
     lista =
       lista +
       "<tr>"+
       "<td>"+turma[i].getNome() +"</td>"+
       "<td>"+turma[i].media.toFixed(2) +"</td>"+
       "<td>"+turma[i].estado +"</td>"
       "</tr>";
   }*/
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