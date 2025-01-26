# O que é o next? qual é o propósito para o qual ele foi criado?
O Next.js é um framework de desenvolvimento web construído com base no Node.js e na biblioteca React. 

Ele foi criado para superar as limitações das Single Page Applications (SPAs) tradicionais, como tempos iniciais de carregamento longos e dificuldades com SEO (Search Engine Optimization).

Seu principal propósito é atuar como uma camada intermediária, que processa e monta todo o HTML no servidor antes de enviá-lo ao navegador (SSR). Isso permite que o conteúdo seja exibido rapidamente ao usuário e seja amigável para mecanismos de busca (SEO).

# (SSR) Server Side Rendering
```javascript
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name:product.name,
      imageUrl: product.images[0],
      price: price.unit_amount
    }
  })

  return {
    props: {
      products,
    }
  }
}
```

# O que é (SSG) Static Site Generation ? 
- SSG é uma estratégia de renderização em que o HTML de uma página é gerado durante o processo de build da aplicação. Esse HTML é então servido como um arquivo estático para os usuários, eliminando a necessidade de processar requisições ao backend para cada visita à página.

Está estratégia é muito boa para Apps como Blogs, Artigos, E-commerce...

Por exemplo, suponha que nosso e-commerce receba 1 milhão de acessos em meia hora. Com SSG, o HTML da home com os produtos mais populares, é gerado no momento do build, e remontado a partir do tempo estabelecido para bater na api buscando alterações.

Dito isso, quando os 1 milhão de usuários acessar a página, o HTML já estará em cache, e os usuários serão atendidos diretamente com essa versão estática, sem disparar novas requisições ao backend.
Isso torna o processo muito mais performático, pois evita o processamento repetitivo no backend e reduz drasticamente a carga nos servidores. Como o conteúdo não muda durante o período configurado, todos os usuários recebem a mesma versão do HTML.

# Como o next lida com imagens?
Sabe aquela imagem pesada, com mais de 5000 pixels, que poderia deixar seu app lento? O Next.js, por padrão, otimiza imagens automaticamente para garantir melhor performance. Se você quiser exibir essa imagem em um espaço de, por exemplo, 300 pixels, o Next.js redimensiona a imagem para o tamanho exato necessário. Além disso, ele converte o formato da imagem para versões mais leves, como WebP, sempre que possível, reduzindo o peso sem comprometer a qualidade visual.

# O que é o turbopack do next?
Turbopack é um novo bundler (empacotador) de JavaScript e CSS criado pelo Next.js, desenvolvido como uma alternativa ao Webpack. Ele foi projetado para ser mais rápido, escalável e eficiente, aproveitando a capacidade do Rust (um linguagem de programação de baixo nível) para otimizar o desempenho de construção e desenvolvimento no Next.js.

Principais Características do Turbopack
Velocidade:

O Turbopack é construído em Rust, uma linguagem de programação que permite um desempenho muito mais rápido em comparação com o Webpack, que é escrito em JavaScript.
Ele foi projetado para ser incremental, ou seja, ele reprocessa apenas o que é necessário durante o desenvolvimento, ao contrário de reconstruir o projeto inteiro sempre.
Desenvolvimento e Build:

O Turbopack é altamente otimizado para o desenvolvimento, com recarga mais rápida da página (Hot Module Replacement - HMR) e tempos de construção mais rápidos.
Ele é projetado para ser extremamente eficiente, especialmente em projetos grandes, onde o Webpack pode ficar mais lento devido ao número de arquivos.
Compatibilidade com o Webpack:

O Turbopack não foi feito para substituir completamente o Webpack, mas para coexistir com ele. A ideia é que os desenvolvedores possam usar o Turbopack para melhorar a experiência de desenvolvimento, mas o Webpack ainda pode ser usado para compilar o código final para produção (embora no futuro o Turbopack deva ser capaz de também substituir o Webpack para builds de produção).


A função é executada no lado do servidor, antes que o conteúdo seja enviado ao cliente. O navegador apenas renderiza o conteúdo depois que o servidor processa e retorna a estrutura com os dados prontos para o cliente.

quando utilizar?
- Você deve usar getServerSideProps somente quando for essencial que os dados estejam disponíveis e renderizados na tela antes que o navegador carregue o conteúdo. Isso é particularmente útil quando:

- SEO (Search Engine Optimization): Para melhorar a indexação por bots, crawlers e buscadores (como Google, Bing, Yahoo), garantindo que o conteúdo dinâmico seja visível para eles no momento da requisição.
- Dados Sensíveis ou Dinâmicos: Quando os dados variam frequentemente e precisam estar atualizados em cada requisição, como informações de um painel administrativo ou uma página de notícias.


# Navegação no Next
```javascript
import Link from "next/link"

<Link href={`/product/${product.id}`} key={product.id}>
    <Product className="keen-slider__slide" >
        <Image src={product.imageUrl} width={520} height={480} alt=""/>
        <footer>
        <strong>{product.name}</strong>
        <span>
            {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL' }).format(product.price / 100)}
        </span>
        </footer>
    </Product>
</Link>
```