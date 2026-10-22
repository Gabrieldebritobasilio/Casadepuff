var DEF = {
    wa: "5511989034644", ig: "https://www.instagram.com/casadepuff/", pw: "admin123", prods: [
        ["Puff Pera", "Formato descontraído para festas, lounges e áreas de convivência.", "17 opções"],
        ["Puff Bola", "Visual leve e moderno para compor qualquer ambiente.", "Consultar cores"],
        ["Puff Quadrado", "Versátil para montar lounges e espaços de descanso.", "Consultar cores"],
        ["Puff Hexagonal", "Formato diferente para montagens criativas.", "Consultar cores"],
        ["Tamborete", "Assento prático para complementar o ambiente.", "Consultar cores"],
        ["Puff Ilha", "Grande, para ser o centro de áreas de convivência.", "Consultar cores"],
        ["Puff Redondo", "Conforto e estilo para festas e eventos.", "Consultar cores"],
        ["Balcão", "Apoio para bares, recepções e áreas de serviço.", "Consultar"],
        ["Puff Retangular", "Acomoda mais de uma pessoa, ótimo para espaços VIP.", "Consultar cores"],
        ["Puff Feijão", "Formato orgânico e confortável para lounges.", "Consultar cores"],
        ["Poltrona e Sofá", "Elegância e conforto para recepções e lounges.", "Consultar cores"],
        ["Cadeiras e Mesas", "Complemento para eventos de todos os tamanhos.", "Consultar"],
        ["Banquetas e Bistro", "Mobiliário alto para bares, coquetéis e áreas gourmet.", "Consultar"],
        ["Puff Coluna", "Assento alto para compor ambientes modernos.", "Consultar cores"],
        ["Mesa Lateral", "Apoio prático ao lado de sofás e poltronas.", "Consultar"],
        ["Lixeira Metal Aramado", "Praticidade e organização para o seu evento.", "Consultar"]
    ].map(function (p) { return { n: p[0], d: p[1], c: p[2], i: "" } })
};
var PERA = [["Branco", "#ffffff", "images/pera-branco.jpg"], ["Verde-água", "#139f9a", "images/pera-verde-agua.jpg"], ["Amarelo", "#f5d90a", "images/pera-amarelo.jpg"], ["Azul-bebê", "#6fa8e8", "images/pera-azul-bebe.jpg"], ["Azul Royal", "#1536c9", "images/pera-azul-royal.jpg"], ["Laranja", "#f26a1b", "images/pera-laranja.jpg"], ["Pink", "#e0188c", "images/pera-pink.jpg"], ["Prata", "#a9a9a9", "images/pera-prata.jpg"], ["Preto", "#111111", "images/pera-preto.jpg"], ["Rosa-bebê", "#f0a8b0", "images/pera-rosa-bebe.jpg"], ["Roxo", "#7b2fbe", "images/pera-roxo.jpg"], ["Verde-limão", "#8fe02b", "images/pera-verde-limao.jpg"], ["Bege", "#d2b48c", "images/pera-bege.jpg"], ["Vermelho", "#e01e1e", "images/pera-vermelho.jpg"], ["Azul-marinho", "#1b2d63", "images/pera-azul-marinho.jpg"], ["Verde-folha", "#1b7a2e", "images/pera-verde-folha.jpg"], ["Azul Tiffany", "#0abab5", "images/pera-azul-tiffany.jpg"]];
var COR = ["Puff Pera", "Puff Bola", "Puff Quadrado", "Puff Hexagonal", "Puff Ilha", "Puff Redondo", "Puff Retangular", "Puff Feijão", "Puff Coluna"], CC = {};
function lum(h) { return parseInt(h.substr(1, 2), 16) * .3 + parseInt(h.substr(3, 2), 16) * .6 + parseInt(h.substr(5, 2), 16) * .1 }
function colBlock(k, p) { var pera = p.n === "Puff Pera"; return '<div class="ph" id="img' + k + '" role="img" aria-label="' + esc(p.n) + '" style="background:#fff' + (pera ? ' url(' + PERA[0][2] + ') center/contain no-repeat' : '') + ';color:#555">' + (pera ? '' : 'Foto em breve') + '</div><div class="sw">' + PERA.map(function (c, i) { return '<button type="button" data-c="' + i + '" data-p="' + k + '" title="' + c[0] + '" aria-label="Cor ' + c[0] + '" style="background:' + c[1] + '"></button>' }).join('') + '</div>' }
var S; try { S = JSON.parse(localStorage.getItem("puffs") || "null") } catch (e) { }
S = S || JSON.parse(JSON.stringify(DEF));
function save() { try { localStorage.setItem("puffs", JSON.stringify(S)) } catch (e) { } }
function wa(t) { return S.wa ? "https://wa.me/" + S.wa.replace(/\D/g, "") + (t ? "?text=" + encodeURIComponent(t) : "") : "#orcamento" }
function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML }
function ph(i, l) { return '<div class="ph" role="img" aria-label="' + esc(l) + '"' + (i ? ' style="background-image:url(' + esc(i) + ')"' : "") + '>' + (i ? "" : "Foto: " + esc(l)) + '</div>' }
function render() {
    document.getElementById("prods").innerHTML = S.prods.map(function (p, k) { return '<article class="card">' + (COR.indexOf(p.n) >= 0 ? colBlock(k, p) : ph(p.i, p.n)) + '<h3>' + esc(p.n) + '</h3><p>' + esc(p.d) + '</p><div class="cores">Cores: ' + esc(p.c || "sob consulta") + '</div><a class="btn" href="#orcamento" data-k="' + k + '">Consultar disponibilidade</a></article>' }).join("");
    document.getElementById("difs").innerHTML = ["Produtos limpos e higienizados", "Variedade de modelos e cores", "Atendimento personalizado", "Entrega e retirada mediante condições combinadas", "Orçamentos personalizados", "Soluções para eventos pequenos e grandes"].map(function (t, i) { return '<div class="card"><h3>' + ["✦", "◐", "☺", "⇄", "✎", "⌂"][i] + " " + t + '</h3></div>' }).join("");
    document.getElementById("evs").innerHTML = ["Festas de aniversário", "Casamentos", "Eventos empresariais", "Feiras e exposições", "Formaturas", "Festas universitárias", "Eventos em sítios e salões", "Festas particulares", "Camarotes e áreas VIP"].map(function (t) { return '<div class="card">' + ph("", t) + '<h3>' + t + '</h3><p>Ambientes confortáveis para receber bem seus convidados.</p></div>' }).join("");
    document.getElementById("gal").innerHTML = ["Montagem lounge", "Puffs coloridos", "Casamento ao ar livre", "Evento corporativo", "Área VIP", "Festa infantil"].map(function (t) { return ph("", t) }).join("");
    document.getElementById("revs").innerHTML = [["Cliente exemplo 1", "Comentário demonstrativo.", 5], ["Cliente exemplo 2", "Comentário demonstrativo.", 5], ["Cliente exemplo 3", "Comentário demonstrativo.", 4]].map(function (r) { return '<div class="card"><b>' + r[0] + '</b> <span class="demo">(demonstrativo)</span><div style="color:var(--gold)">' + "★".repeat(r[2]) + "☆".repeat(5 - r[2]) + '</div><p>' + r[1] + '</p></div>' }).join("");
    ["waHero", "waFoot", "waFloat"].forEach(function (id) { document.getElementById(id).href = wa("Olá, Casa de Puff! Vim pelo site e gostaria de um orçamento de puffs e móveis para o meu evento."); if (!S.wa) document.getElementById(id).removeAttribute("target") });
    document.getElementById("ig").href = S.ig || "#";
}
render();
document.getElementById("prods").onclick = function (e) { var c = e.target.getAttribute("data-c"); if (c !== null) { var q = e.target.getAttribute("data-p"), x = PERA[c], el = document.getElementById("img" + q); CC[q] = x[0]; if (S.prods[q].n === "Puff Pera") { el.style.backgroundImage = "url(" + x[2] + ")" } else { el.style.background = x[1]; el.style.color = lum(x[1]) > 150 ? "#222" : "#fff" } e.target.parentNode.querySelectorAll("button").forEach(function (b) { b.classList.toggle("on", b === e.target) }); return } var k = e.target.getAttribute("data-k"); if (k !== null) document.getElementById("prodIn").value = S.prods[k].n + (CC[k] ? " - " + CC[k] : "") };
document.getElementById("f").onsubmit = function (e) {
    e.preventDefault(); var d = new FormData(e.target), m = document.getElementById("msg");
    if (!S.wa) { m.textContent = "O número de WhatsApp ainda não foi configurado no painel administrativo."; return }
    var t = "Olá, Casa de Puff! Vim pelo site e gostaria de um orçamento.\n\nNome: " + d.get("nome") + "\nTelefone: " + d.get("tel") + "\nTipo de evento: " + d.get("tipo") + "\nData: " + d.get("data") + "\nEndereço/região: " + d.get("end") + "\nProdutos: " + d.get("prod") + "\nQuantidade: " + d.get("qtd") + "\nObservações: " + (d.get("obs") || "-");
    window.open(wa(t), "_blank", "noopener"); m.textContent = "Abrindo o WhatsApp com sua mensagem."
};
var A = document.getElementById("adm");
document.getElementById("admBtn").onclick = function (e) { e.preventDefault(); A.style.display = "block" };
document.getElementById("close").onclick = function () { A.style.display = "none" };
function pl() { document.getElementById("plist").innerHTML = S.prods.map(function (p, k) { return '<div>' + esc(p.n) + ' <button class="rm" data-r="' + k + '">remover</button></div>' }).join("") }
document.getElementById("go").onclick = function () { if (document.getElementById("pw").value === S.pw) { document.getElementById("login").hidden = true; document.getElementById("panel").hidden = false; document.getElementById("cfgWa").value = S.wa; document.getElementById("cfgIg").value = S.ig; pl() } else alert("Senha incorreta.") };
document.getElementById("plist").onclick = function (e) { var r = e.target.getAttribute("data-r"); if (r !== null) { S.prods.splice(r, 1); pl() } };
document.getElementById("add").onclick = function () { var n = document.getElementById("pn").value.trim(); if (!n) return; S.prods.push({ n: n, d: document.getElementById("pd").value, c: document.getElementById("pc").value, i: document.getElementById("pi").value });["pn", "pd", "pc", "pi"].forEach(function (i) { document.getElementById(i).value = "" }); pl() };
document.getElementById("save").onclick = function () { S.wa = document.getElementById("cfgWa").value; S.ig = document.getElementById("cfgIg").value; save(); render(); alert("Alterações salvas neste navegador.") };