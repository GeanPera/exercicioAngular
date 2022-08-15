
### Exercícios 
1. Descreva com suas palavras como é feita a instalação do Framework Angular passo-a-passo. 

    - Abra em qualquer lugar o prompt de comando e digite o comando "npm install -g @angular/cli".(Nesse caso ele vai intalar o angular no global)

    - Depois da intalação, para cria um projeto angular e só abrir o prompt de comando na pasta que você quiser cria o projeto e digitar "ng new + 'nome de projeto'"

    - Ele vai fazer a pergunta "Would you like to add Angular routing?" que vc responde com "yes" ou "no"
    
    - Depois ele pergunta "Which stylesheet format would you like to use?" e aparece algumas opção como: CSS, SCSS, Sass e Less. (Essas não são todas as opções possiveis)

    - Selecionando a opcção ele começa a intalar o projeto

5. Observe e compare o repositório local e o repositório remoto. 
    - Há diferenças? 
        Sim, existem algumas diferenças entre o repositório local e o remoto

    - Se sim, quais? 
        Alguns arquivos não foram enviados como o 'node_modules'

    - Por que essas diferenças ocorrem?
        Por conta do gitignore, que quando vamos dar o push para o github o gitignore faz com que certos arquivos não sejam enviados

6. Apague o repositório local e clone o remoto devolta para sua máquina e rode o projeto.   
    - Qual comando do Node instala as dependências? 
        Os comandos são 'npm i' ou 'npm install'

    - Como o Node sabe quais dependências precisam ser instaladas? 
        Ele sabe por meio de um arquivo que mostra quais são dependências necessárias para o projeto