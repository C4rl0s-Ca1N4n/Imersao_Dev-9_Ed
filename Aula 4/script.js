const personagensEscolhidos = [];
        const imagens = {
            "Guerreiro": "https://i.postimg.cc/k5MBWyy2/pngwing-com.png",
            "Mago": "https://i.postimg.cc/hvgKLDLK/pngwing-com-1.png",
            "Arqueiro": "https://i.postimg.cc/MpWHVDWh/pngwing-com-2.png",
            "Paladino": "https://i.postimg.cc/7hgpwdWh/paladino-barbaro-com-uma-armadura-de-pele-e-couro-mulher-jovem-guerreiro-ilustracao-de-personagem-10.jpg",
            "Ninja": "https://i.postimg.cc/3w9LCpkL/ninja.jpg",
            "Viking": "https://i.postimg.cc/sgYHxbsC/viking.jpg",
            "Samurai": "https://i.postimg.cc/gJfrhbJD/pngwing-com-5.png",
            "Feiticeiro": "https://i.postimg.cc/3JjWk6HX/pngwing-com-3.png",
            "Bárbaro": "https://i.postimg.cc/fySBNrBF/barbaro.jpg",
            "Cavaleiro": "https://i.postimg.cc/9FHrF2sX/pngwing-com-4.png"
        };
        const viloes = ["Dragão", "Lich", "Orc", "Goblin", "Necromante", "Demônio", "Vampiro", "Górgona", "Titã", "Espectro"];

        function adicionarPersonagem() {
            let select = document.getElementById("personagemSelect");
            let personagem = select.value;
            
            if (personagensEscolhidos.length < 3 && !personagensEscolhidos.includes(personagem)) {
                personagensEscolhidos.push(personagem);
                document.getElementById("personagensEscolhidos").innerText = "Personagens escolhidos: " + personagensEscolhidos.join(", ");
                atualizarImagens();
            } else {
                alert("Você já escolheu 3 personagens ou este personagem já foi selecionado!");
            }
        }

        function atualizarImagens() {
            let divImagens = document.getElementById("imagensPersonagens");
            divImagens.innerHTML = "";
            for (let i = 0; i < personagensEscolhidos.length; i++) {
                let img = document.createElement("img");
                img.src = imagens[personagensEscolhidos[i]];
                img.alt = personagensEscolhidos[i];
                divImagens.appendChild(img);
            }
        }

        function escolherViloes() {
            let escolhidos = [];
            for (let i = 0; i < 3; i++) {
                let vilao;
                do {
                    vilao = viloes[Math.floor(Math.random() * viloes.length)];
                } while (escolhidos.includes(vilao));
                escolhidos.push(vilao);
            }
            return escolhidos;
        }

        function iniciarBatalha() {
            if (personagensEscolhidos.length < 3) {
                alert("Escolha 3 personagens antes de iniciar a batalha!");
                return;
            }
            
            let viloesEscolhidos = escolherViloes();
            let forcaPersonagens = [];
            let forcaViloes = [];
            let totalForcaPersonagens = 0;
            let totalForcaViloes = 0;
            
            for (let i = 0; i < 3; i++) {
                let forca = Math.floor(Math.random() * 50) + 50;
                forcaPersonagens.push({ nome: personagensEscolhidos[i], forca: forca });
                totalForcaPersonagens += forca;
            }
            
            for (let i = 0; i < 3; i++) {
                let forca = Math.floor(Math.random() * 50) + 50;
                forcaViloes.push({ nome: viloesEscolhidos[i], forca: forca });
                totalForcaViloes += forca;
            }
            
            let resultadoTexto = "Personagens:\n";
            for (let i = 0; i < forcaPersonagens.length; i++) {
                resultadoTexto += `${forcaPersonagens[i].nome} - Força: ${forcaPersonagens[i].forca}\n`;
            }
            
            resultadoTexto += "\nVilões:\n";
            for (let i = 0; i < forcaViloes.length; i++) {
                resultadoTexto += `${forcaViloes[i].nome} - Força: ${forcaViloes[i].forca}\n`;
            }
            
            resultadoTexto += "\nTotal de força dos personagens: " + totalForcaPersonagens + "\n";
            resultadoTexto += "Total de força dos vilões: " + totalForcaViloes + "\n";
            
            if (totalForcaPersonagens > totalForcaViloes) {
                resultadoTexto += "Parabéns! Os heróis venceram a batalha!";
            } else {
                resultadoTexto += "Os vilões venceram! Treine mais para a próxima batalha!";
            }
            
            document.getElementById("resultado").innerText = resultadoTexto;
            document.getElementById("tenteNovamente").style.display = "block";
        }

        function reiniciarJogo() {
            personagensEscolhidos.length = 0;
            document.getElementById("personagensEscolhidos").innerText = "";
            document.getElementById("imagensPersonagens").innerHTML = "";
            document.getElementById("resultado").innerText = "";
            document.getElementById("tenteNovamente").style.display = "none";
        }