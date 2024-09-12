function pesquisar() {
   // Seleciona a seção onde os resultados da pesquisa serão exibidos
   let section = document.getElementById
      ("resultados-pesquisa");

   let campoPesquisa = document.getElementById
      ("campo-pesquisa").value;

   if (campoPesquisa == "") {
      section.innerHTML = "<p>Nada encontrado! Necessário digitar uma tecnologia...</p>"
      return
   }

   campoPesquisa = campoPesquisa.toLowerCase();

   // Inicializa uma string vazia para armazenar os resultados formatados
   let resultados, titulo, descricao, tags = ""

   // Itera sobre cada tecnologia no array 'tecnologias'
   for (let dado of tecnologias) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
      // se titulo incluso em campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)
         || tags.includes(campoPesquisa)) {
         // Constrói o HTML para o item do resultado da pesquisa
         resultados += `
         <div class="item-resultado">
            <h2>
               <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="descricao-meta">${dado.aplicacao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
         </div>`;
      }

      if (!resultados) {
         resultados = "<p>Tecnologia não encontrada! Tente novamente...</p>"
      }

      // Atribui o HTML gerado para a seção de resultados
      section.innerHTML = resultados;
   }
}