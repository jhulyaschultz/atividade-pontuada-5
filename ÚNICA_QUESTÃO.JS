const readline = require('readline-sync');

let funcionarios = [];

function cadastrarFuncionario() {
    const nome = readline.question("DIGITE O NOME DO FÚNCIONARIO: ");
    const cargo = readline.question("DIGITE SEU CARGO: ");
    const salario = parseFloat(readline.question("DIGITE O SEU SÁLARIO: R$ "));

    if (isNaN(salario)) {
        console.log("Salário inválido!");
        return;
    }

    funcionarios.push({ nome, cargo, salario });
    console.log("FÚNCIONARIO CADASTRADO COM SUCESSO!");
}

function listarFuncionarios() {
    if (funcionarios.length === 0) {
        console.log("NENHUM FÚNCIONARIO CADASTRADO.");
    } else {
        console.log("\n--- LISTA DE FÚNCIONARIOS ---");
        funcionarios.forEach(f => {
            console.log(`Nome: ${f.nome}, Cargo: ${f.cargo}, Salário: R$ ${f.salario.toFixed(2)}`);
        });
    }
}

function buscarFuncionario() {
    const nomeBusca = readline.question("DIGITE O NOME PARA SER BUSCADO: ");
    const encontrados = funcionarios.filter(f => f.nome.toLowerCase().includes(nomeBusca.toLowerCase()));

    if (encontrados.length === 0) {
        console.log("NENHUM FÚNCIONARIO ENCONTRADO..");
    } else {
        console.log("\n--- RESULTADOS DA BUSCA ---");
        encontrados.forEach(f => {
            console.log(`Nome: ${f.nome}, Cargo: ${f.cargo}, Salário: R$ ${f.salario.toFixed(2)}`);
        });
    }
}

function atualizarSalario() {
    const nome = readline.question("NOME DO FÚNCIONARIO: ");
    const funcionario = funcionarios.find(f => f.nome.toLowerCase() === nome.toLowerCase());

    if (funcionario) {
        const novoSalario = parseFloat(readline.question("NOVO SÁLARIO: R$ "));

        if (isNaN(novoSalario)) {
            console.log("SÁLARIO INVÁLIDO!");
            return;
        }

        funcionario.salario = novoSalario;
        console.log(`SALÁRIO DE ${funcionario.nome} ATUALIZADO PARA R$ ${novoSalario.toFixed(2)}`);
    } else {
        console.log("FÚNCIONARIO NÃO ENCONTRADO.");
    }
}

function menu() {
    let opcao;
    do {
        console.log("\n=== SISTEMA DE RH ===");
        console.log("1. CADASTRAR FÚNCIONARIO");
        console.log("2. LISTAR FÚNCIONARIOS");
        console.log("3. BUSCAR POR NOME");
        console.log("4. ATUALIZAR SÁLARIO");
        console.log("5. SAIR");

        opcao = readline.question("ESCOLHA UMA OPÇÃO: ");

        switch (opcao) {
            case "1":
                cadastrarFuncionario();
                break;
            case "2":
                listarFuncionarios();
                break;
            case "3":
                buscarFuncionario();
                break;
            case "4":
                atualizarSalario();
                break;
            case "5":
                console.log("ENCERRANDO PROGRAMA...");
                break;
            default:
                console.log("OPÇÃO INVÁLIDA..");
        }
    } while (opcao !== "5");
}

// Inicia o programa
menu();
