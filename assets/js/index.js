//função de mudar o tema da página

function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('ligth')
}

//função para mudar o idioma da página

function toggleLang() {
    const html = document.documentElement;
    const langBtn = document.querySelector('#language button');
    const isPT = html.lang === "pt-br";
    html.lang = isPT ? "en" : "pt-br";
    langBtn.textContent = isPT ? "EN" : "PT";

    // Menu
    document.querySelector('a[href="#sobre-mim"]').textContent = isPT ? "About me" : "Sobre mim";
    document.querySelector('a[href="#projetos-destaque"]').textContent = isPT ? "Projects" : "Projetos";
    document.querySelector('a[href="#contato"]').textContent = isPT ? "Contact" : "Contato";

    // Sobre mim
    document.querySelector('.conteudo-sobre-mim h2').textContent = isPT ? "About me" : "Sobre mim";
    document.querySelector('.conteudo-sobre-mim p').textContent = isPT
        ? "Hello, my name is Mirela Santos, also known as Koala! I'm a designer, front-end developer and passionate about code. I use my passion and skills to create quality digital products and new web experiences."
        : "Olá, meu nome é Mirela Santos, mas também conhecida como Koala! Sou designer, desenvolvedora front-end e apaixonada por códigos Eu uso minha paixão e habilidades para criar produtos digitais de qualidade e novas experiências na web.";

    // Projetos em destaque
    document.querySelector('.projetos-destaque h2').textContent = isPT ? "Featured Projects" : "Projetos em destaque";
    document.querySelector('.projetos-destaque p').textContent = isPT
        ? "Check out some featured projects made by me."
        : "Confira alguns projetos em destaque feitos por mim.";

    // Botões dos projetos
    document.querySelectorAll('.projetos-destaque button').forEach(btn => {
        btn.textContent = isPT ? "Visit this page >" : "Visite esta página >";
    });

    // Nomes dos projetos
    const projectNamesPT = [
        "Meu Curriculo",
        "Meow Café",
        "Recomendaçoes de animes",
        "Balle Bot",
        "Dev Links",
        "Pousada Villa Amistá"
    ];
    const projectNamesEN = [
        "My Resume",
        "Meow Café",
        "Anime recommendations",
        "Balle Bot",
        "Dev Links",
        "Villa Amistá Inn"
    ];
    document.querySelectorAll('.projetos-destaque article p').forEach((p, i) => {
        p.textContent = isPT ? projectNamesEN[i] : projectNamesPT[i];
    });

    // Contato
    document.querySelector('.conteudo-contato h2').textContent = isPT ? "Contact" : "Contato";
    document.querySelector('.conteudo-contato p').textContent = isPT
        ? "Do you need a beautiful and well-structured website that you can own and maintain? Get in touch."
        : "Precisa de um site bonito e bem estruturado que você possa possuir e manter? Entre em contato.";
    document.querySelector('.conteudo-contato button').textContent = isPT ? "Contact me >" : "Fale comigo >";

    //rodapé
    document.querySelector(".rodape p").textContent = isPT ? "Made with love by Koala" : "Feito com amor por Koala";
}

var menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(function(element) {
    element.addEventListener('mouseenter', function(){
        element.classList.add('underline');
    });
    element.addEventListener('mouseleave', function(){
        element.classList.remove('underline');
    });
});

window.addEventListener('load', function() {
    setTimeout(function(){
        document.getElementById('preloader').style.display = 'none';
    }, 1000);
});
