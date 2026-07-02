// Seleção dos elementos do HTML através do JavaScript
const campoSenha = document.querySelector('#campo-senha');
const btnMenos = document.querySelector('.btn-menos');
const btnMais = document.querySelector('.btn-mais');
const textoTamanho = document.querySelector('.tamanho-senha');

// Configurações iniciais do gerador
let tamanhoSenha = 12;
const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-[]{}|;:,.<>?';

// Função responsável por construir a senha aleatória
function gerarSenha() {
let novaSenha = '';
for (let i = 0; i < tamanhoSenha; i++) {
const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
novaSenha += caracteres.charAt(indiceAleatorio);
}
campoSenha.value = novaSenha;
}

// Evento que reduz o tamanho (com limite mínimo de 4 caracteres)
btnMenos.addEventListener('click', () => {
if (tamanhoSenha > 4) {
tamanhoSenha--;
textoTamanho.textContent = tamanhoSenha;
gerarSenha();
}
});

// Evento que aumenta o tamanho (com limite máximo de 30 caracteres)
btnMais.addEventListener('click', () => {
if (tamanhoSenha < 30) {
tamanhoSenha++;
textoTamanho.textContent = tamanhoSenha;
gerarSenha();
}
});

// Executa a função automaticamente ao abrir ou atualizar a página
gerarSenha();