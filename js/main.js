// Conteúdo dinâmico das seções

document.getElementById('header').innerHTML = `
  <div class="header-container">
    <div class="header-title">
      <span class="logo">Emmanuel Martins</span>
      <span class="subtitle">Analista de Sistemas</span>
    </div>
    <nav>
      <ul class="nav">
        <li><a href="#about">Sobre</a></li>
        <li><a href="#technologies">Tecnologias</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  </div>
`;

document.getElementById('about').innerHTML = `
  <h2>Sobre mim</h2>
  <p>Sou um desenvolvedor de software com mais de 3 anos de experiência atuando em ambientes corporativos ágeis. Atualmente, trabalho no Grupo Energisa, contribuindo para o desenvolvimento e evolução de uma aplicação mobile crítica voltada à operação e manutenção de campo.<br><br>
  Utilizo tecnologias como C#, .NET, Xamarin, ASP.NET Web API, SQLite, MongoDB e Oracle, aplicando boas práticas de desenvolvimento, integração entre sistemas e versionamento com Azure DevOps.<br><br>
  Sou movido por desafios e pela busca constante de aprendizado. Tenho grande interesse em áreas como desenvolvimento mobile, backend, internet das coisas (IoT) e automação de processos. Possuo perfil colaborativo, sou comunicativo, resiliente e tenho facilidade de adaptação.</p>
  <div style="margin-top:1rem;">
    <a href="https://github.com/EmmanuelMartins21" target="_blank" class="btn">GitHub</a>
    <a href="https://www.linkedin.com/in/emmanuelmartinsb/" target="_blank" class="btn" style="margin-left:0.5rem;">LinkedIn</a>
  </div>
`;

document.getElementById('technologies').innerHTML = `
  <h2>Tecnologias</h2>
  <ul style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:1rem;list-style:none;padding:0;">
    <li>C#</li>
    <li>.NET</li>
    <li>Xamarin</li>
    <li>ASP.NET Web API</li>
    <li>SQLite</li>
    <li>MongoDB</li>
    <li>Oracle</li>
    <li>Azure DevOps</li>
    <li>Mobile</li>
    <li>Integrações</li>
    <li>Backend</li>
    <li>IoT</li>
  </ul>
`;

document.getElementById('projects').innerHTML = `
  <h2>Projetos</h2>
  <div style="display:grid;gap:1.5rem;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));">
    <div class="project-card">
      <h3>Gerador de apostas para Lotofácil</h3>
      <p>Aplicação web responsiva para geração de apostas numéricas, consumindo uma API segura em .NET. Cria combinações automaticamente com regras heurísticas e interface moderna.</p>
      <div style="margin-top:0.75rem; display:flex; gap:0.5rem;">
        <a href="https://aposta-web.vercel.app/" target="_blank" class="btn" style="padding:0.5rem 1rem;font-size:0.9rem;">Ver Site</a>
        <a href="https://github.com/EmmanuelMartins21/aposta-web" target="_blank" class="btn" style="padding:0.5rem 1rem;font-size:0.9rem;">GitHub</a>
      </div>
    </div>
    
    <div class="project-card">
      <h3>Visão Astro - Imagem do Dia</h3>
      <p>Aplicação React que exibe diariamente a Imagem do Dia (APOD) da NASA com atualização automática, exibindo foto ou vídeo astronômico com título e data.</p>
      <div style="margin-top:0.75rem; display:flex; gap:0.5rem;">
        <a href="https://visao-astro-diaria.vercel.app/" target="_blank" class="btn" style="padding:0.5rem 1rem;font-size:0.9rem;">Ver Site</a>
        <a href="https://github.com/EmmanuelMartins21/VisaoAstroDiaria" target="_blank" class="btn" style="padding:0.5rem 1rem;font-size:0.9rem;">GitHub</a>
      </div>
    </div>
    
    <div class="project-card">
      <h3>FreteAPI</h3>
      <p>API REST para cálculo de frete baseado na distância entre origem e destino, utilizando rotas reais com OSRM.</p>
      <div style="margin-top:0.75rem; display:flex; gap:0.5rem;">
        <a href="https://freteapi.onrender.com/scalar/" target="_blank" class="btn" style="padding:0.5rem 1rem;font-size:0.9rem;">Documentação</a>
        <a href="https://github.com/EmmanuelMartins21/FreteAPI" target="_blank" class="btn" style="padding:0.5rem 1rem;font-size:0.9rem;">GitHub</a>
      </div>
    </div>
    
    <div class="project-card">
      <h3>App Mobile de foco</h3>
      <p>Aplicativo mobile para gerenciamento de tempo, desenvolvido em ReactNative com Expo.</p>
      <a href="https://github.com/EmmanuelMartins21/app-foco-tarefa" target="_blank">Ver no GitHub</a>
    </div>
    
    <div class="project-card">
      <h3>App .NET MAUI</h3>
      <p>APP de estudo sobre o .NET MAUI, sem proposito especifico</p>
      <a href="https://github.com/EmmanuelMartins21/app-maui-estudo" target="_blank">Ver no GitHub</a>
    </div>

     <div class="project-card">
      <h3>LeitorPDF</h3>
      <p>Aplicação muitiplataforma de leitura de PDF, que permite a escoha de um pdf e tranforma o texto do mesmo em voz. Desenvolvida em .NET MAUI</p>
      <a href="https://github.com/EmmanuelMartins21/LeitorPdfApp" target="_blank">Ver no GitHub</a>
      <a href="https://github.com/EmmanuelMartins21/LeitorPdfApp/releases/download/v1.0%2Cbeta/LeitorPDF_V1.0.beta.zip" target="_blank" class="btn" style="padding:0.5rem 1rem;font-size:0.9rem;">Download</a>
    </div>
  </div>
`;

document.getElementById('contact').innerHTML = `
  <h2>Contato</h2>
  <p>Quer conversar ou saber mais? Entre em contato pelo LinkedIn ou envie um e-mail!</p>
  <a href="https://www.linkedin.com/in/emmanuelmartinsb/" target="_blank" class="btn">Fale comigo no LinkedIn</a>
`;

document.getElementById('footer').innerHTML = `
  <div style="text-align:center;color:var(--color-gray);font-size:0.95rem;">
    &copy; ${new Date().getFullYear()} Emmanuel Martins. Todos os direitos reservados.
    <span style="margin-left:1rem;">
      <a href="https://github.com/EmmanuelMartins21" target="_blank">GitHub</a> |
      <a href="https://www.linkedin.com/in/emmanuelmartinsb/" target="_blank">LinkedIn</a>
    </span>
  </div>
`;

// Scroll suave para navegação
const navLinks = document.querySelectorAll('header .nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});
