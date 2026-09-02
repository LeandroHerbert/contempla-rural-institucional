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

## Revisão solicitada em 2 de setembro de 2026

A home revisada foi capturada integralmente em 1440 × 900 e 390 × 844. A referência vertical “Contempla Rural / 01–07” não aparece mais no hero, e os dois botões da primeira seção foram removidos sem gerar espaço vazio ou desequilíbrio. O rótulo “Uma conversa com contexto” também foi retirado do fechamento; a pergunta principal permanece como entrada direta da seção.

A assinatura em SVG/texto foi substituída por uma extração da própria prancha oficial de identidade. A marca agora preserva o símbolo no lugar do primeiro “O” de CONTEMPLA, a tipografia incorporada no arquivo, o espaçamento de RURAL e as linhas laterais. A versão original extraída é usada sobre fundos escuros; a versão verde usa a mesma máscara oficial sobre fundos claros. Em desktop e mobile, a proporção e a legibilidade foram preservadas no cabeçalho, menu e rodapé.

A quinta seção continua preparada para receber a fotografia oficial de Rafael. Nenhuma fotografia inexistente foi simulada como retrato; o quadro atual permanece como composição provisória até o arquivo autoral ser fornecido.

A primeira dobra foi inspecionada novamente sem redução de página, em 1440 × 900 e 390 × 844. A assinatura oficial mantém boa leitura nos dois tamanhos e exibe claramente o símbolo radial no lugar do primeiro “O”. O cabeçalho móvel preserva espaço adequado entre a marca e o botão do menu. A remoção dos botões do hero não deixou lacunas ou elementos desalinhados.

A auditoria final do DOM confirmou quatro ocorrências da assinatura oficial carregadas com dimensões nativas de 331 × 68 pixels, nenhuma imagem quebrada e nenhuma reconstrução antiga em SVG. A home contém zero ocorrências da referência lateral, zero botões dentro do hero e nenhuma ocorrência textual de “Uma conversa com contexto”.
