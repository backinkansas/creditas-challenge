## CSS

Unifiquei estilos universais no arquivo `base`, pensando na possibilidade da página crescer ou de mais páginas seres adicionadas ao projeto.

Criei mixins baseadas em classes e adicionei essas novas classes aos elementos HTML. Caso fosse possível, acredito que um pré-processador como SASS facilitaria o processo, mas as classes permitiram reutilizar conjuntos de propriedades que se repetiam no projeto. Assim foi possível diminuir repetição de código.

Centralizei os tamanhos e especificidades de fontes nas variáveis, além de margens e larguras. Assim, o projeto ficou mais consistente visualmente. Também criei media-queries para as próprias variáveis, tornando-as responsivas por si só e evitando a necessidade de media-queries em excesso espalhadas por todos os componentes.

## HTML

Renomeei as classes em português para garantir consistência e apliquei o método BEM. Também adicionei marcação de mensagem de erro. 

Retirei a div `form__result` de dentro do formulário por razões semânticas e também por definir que o formulário seria o componente `loan-data`, enquanto a `form__result` englobaria o componente `simulation-result`.

## JS

Separei as classes de acordo com a responsabilidade de cada uma. Na escolha do produto, utilizei um padrão strategy que simula uma interface. Essa "interface" é a classe `Product`, que apenas retorna os dados específicos de cada strategy concreta. Seria fácil implementar novos métodos ou adicionar novos dados nas classes concretas, sendo necessário apenas adicionar também na interface `Product`. Criei uma classe para agir como client, a `ProductChoice`, cuja responsabilidade é instanciar a strategy concreta de acordo com o input que recebe e devolvê-la.

A classe que faz uso da `ProductChoice` é o `Mediator`, que age dentro desse contexto sendo completamente agnóstico à implementação da strategy concreta, utilizando apenas a interface disponível. Dessa forma, a complexidade da escolha do produto não chega ao `Mediator`.

Além disso, separei a view em uma camada única, que visa isolar as manipulações diretas do DOM de toda a lógica de produto. As classes `RangeHandler`, `ProductDisplay`, `InputDisplay` e `ErrorHandler` modifica o DOM diretamente, mas cada uma tem uma responsabilidade única. Para que elas ficassem encapsuladas, adotei o padrão mediator através da classe `Mediator`, que gerencia as chamadas para cada uma das classes. Com ele, consegui reduzir as dependências entre as classes, mas acabou gerando uma "classe deus" que gerencia muito ao mesmo tempo, uma desvantagem do próprio padrão.

## Testes e coverage

Criei testes unitários e/ou de integração para todas as classes das camadas de produto e mediação. Apenas o Mediator não atingiu o objetivo de 80% de cobertura, ficando na casa dos 50%. Acredito que isso sirva como um _smell_ da própria complexidade da classe e das muitas dependências. Ao mesmo tempo, como todas as outras classes que ele chama já foram testadas, acredito que a cobertura para ele esteja suficiente.

Para a camada de view, optei por implementar testes de aceitação (end-to-end). Por serem classes que realizam tarefas diretamente no DOM, os testes unitários se tornaram tão complexos e extensos que não mais valiam a pena, pois eram quase uma nova implementação. Utilizando o framework de teste **CodeceptJS** ficou muito simples escrever testes para a interface gráfica. Os cenários foram escritos para todas as classes e responsabilidades da camada de view, garantindo uma cobertura e assertividade maior para os objetivos delas.

OBS.: O code coverage do projeto está sendo calculado apenas pelo Jest. Contando com os testes e2e, a cobertura é, na verdade, maior do que 40%.
