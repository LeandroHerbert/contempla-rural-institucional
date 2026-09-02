# Registro de validação — Contempla Rural

Data: 2 de setembro de 2026.

## Inspeção visual

Foram capturadas e inspecionadas as páginas Início, A Contempla Rural, Carta contemplada rural, Como atuamos, Rafael Gois, Conteúdos, um artigo completo e Contato em viewport desktop de 1440 × 900. A composição, a tipografia, os ativos autorais, a navegação e a alternância de fundos mantiveram coerência com o sistema Horizonte em Camadas.

Foram inspecionadas a home, a página Carta contemplada rural, Como atuamos, um artigo e Contato em viewport mobile de 390 × 844. Os títulos, botões, formulários, percursos, perguntas frequentes e rodapé permaneceram legíveis, sem rolagem horizontal ou sobreposição visível.

## Testes funcionais

A troca de abas na home foi testada programaticamente: o critério ativo mudou de Aquisição para Estrutura financeira e o painel associado foi atualizado. O menu responsivo alternou corretamente `aria-expanded` e `aria-hidden`, aplicou bloqueio de rolagem quando aberto e restaurou o estado ao fechar.

A FAQ da página Carta contemplada rural abriu corretamente o segundo item. O DOM e o JSON-LD apresentaram seis perguntas correspondentes. Cada página testada apresentou um único `h1`.

Todas as rotas internas encontradas na home responderam com status HTTP 200. Nenhuma imagem carregada apresentou largura natural igual a zero. A home e a página educativa apresentaram descrição, canonical e dados estruturados específicos.

## Compilação

`pnpm check` e `pnpm build` foram executados com sucesso. As páginas internas foram separadas em carregamento sob demanda. O aviso remanescente de tamanho do pacote inicial decorre do runtime e da infraestrutura do template; não impediu a compilação nem o funcionamento da aplicação.

## Conteúdos provisórios assumidos

O vídeo institucional está identificado como “Em produção” e não simula um player ativo. A página de Rafael identifica explicitamente o quadro que receberá a fotografia oficial. Biografia completa, dados societários, domínio definitivo e integrações externas continuam sujeitos à validação do cliente.
