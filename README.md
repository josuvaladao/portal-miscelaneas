# Portal de Miscelâneas — GitHub Pages

Página de entrada para o aplicativo existente no Google Apps Script.
O GitHub Pages hospeda a página externa; a interface incorporada, o login,
as planilhas, o BigQuery e as integrações continuam executando no Google.
Isto não migra o servidor para o GitHub.

Os cinco arquivos recebidos e o manifesto corrigido estão em `apps-script-local/`,
uma pasta de trabalho excluída do Git por conter a configuração interna original.
No editor do Apps Script, os nomes dos arquivos HTML devem ser `Index`, `Styles`,
`Script_Core` e `Script_AdmDash`, respeitando maiúsculas e minúsculas.

## Configuração

1. No projeto original do Apps Script, use **Implantar → Gerenciar implantações**
   e copie a URL do aplicativo da Web, terminada em `/exec`.
   Se não houver implantação, crie uma como **Aplicativo da Web**, com acesso
   adequado aos usuários do portal e às regras da organização.
2. Mantenha no `doGet()` a configuração já existente:
   `.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)`.
3. Cole o endereço no campo `appUrl` de `docs/config.js`.
4. No repositório do GitHub, envie a pasta `docs`, este README e `.gitignore`.
5. Em **Settings → Pages → Build and deployment**, escolha
   **Deploy from a branch**, branch **main** e pasta **/docs**, e salve.
6. Aguarde a publicação e abra o endereço exibido no GitHub Pages.

O JSON exportado original contém uma URL assinada de integração e referências
internas. Ele fica fora do Git pelo `.gitignore`: não o envie manualmente ao
repositório. Apenas os arquivos de `docs` são necessários para hospedar a página.

## Conferência após configurar

- Abra a URL `/exec` diretamente e confira o login.
- Abra o GitHub Pages e confira login, consultas, gravação e envio de fotos
  com um registro de teste autorizado.
- Se o navegador bloquear a autenticação dentro do quadro, use
  **Abrir em nova aba**, que acessa diretamente o aplicativo original.
- Confira câmera e localização nos dispositivos usados pela equipe;
  permissões do navegador e políticas do Google podem limitar a incorporação.

Sem a URL de implantação, a página mostra "Portal em configuração".
O funcionamento completo depende de uma implantação ativa do Apps Script
e não pode ser validado apenas com o JSON exportado.

Referências: [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
e [incorporação no Apps Script](https://developers.google.com/apps-script/reference/html/x-frame-options-mode).
