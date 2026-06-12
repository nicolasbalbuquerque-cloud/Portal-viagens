# Portal de Viagens 

Uma aplicação web responsiva e dinâmica desenvolvida com **Next.js** e **TypeScript** para listagem, busca e detalhamento de destinos turísticos. O projeto adota práticas modernas de desenvolvimento, como o sistema de rotas baseado em arquivos (*App Router*), componentes altamente reutilizáveis e estilização isolada com CSS Modules.

---

##  Funcionalidades do Projeto

* **Hub Central de Destinos (`/destinos`):** Página principal que renderiza cartões de viagem dinâmicos a partir de um mock estruturado com mais de 4 destinos integrados.
* **Rotas Dinâmicas (`/destinos/[id]`):** Sistema de roteamento que renderiza páginas exclusivas para os detalhes de cada local de forma assíncrona, utilizando o `next/link` para navegação SPA instantânea.
* **Componentização Avançada:** Separação rígida de responsabilidades através dos componentes modulares `CardDestino` e `Layout`.
* **Gerenciamento de Assets:** Centralização e otimização de imagens locais armazenadas na pasta estrutural `public/`.

---

##  Stack Tecnológica

* **Next.js** (App Router) – Framework React para renderização híbrida e gerenciamento de rotas.
* **TypeScript** – Tipagem estática para maior segurança e prevenção de erros em tempo de desenvolvimento.
* **CSS Modules** – Estilização encapsulada por componente, evitando vazamento de escopo global.

---

##  Estrutura do Repositório

```text
├── public/              # Imagens locais e assets estáticos
├── src/
│   ├── app/
│   │   ├── destinos/    # Rota de listagem e sub-rota dinâmica [id]
│   │   ├── layout.tsx   # Layout global da aplicação (Configuração SSR)
│   │   └── page.tsx     # Página de entrada do portal
│   ├── components/      # Componentes reutilizáveis (CardDestino, Layout)
│   ├── mocks/           # Base de dados mockada dos destinos
│   └── styles/          # CSS Modules isolados por view