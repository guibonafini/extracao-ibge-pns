const events = require('events');
const fs = require('fs');
const readline = require('readline');

const planoSaudeOptions = { '1': 'sim', '2': 'nao', '9': 'nao_se_sabe' };
const escolaridadeOptions = {
    "1": "sem_instrucao",
    "2": "fundamental_incompleto",
    "3": "fundamental_completo",
    "4": "medio_incompleto",
    "5": "medio_completo",
    "6": "superior_incompleto",
    "7": "superior_completo"
}

const atendimentoPublicoOptions = {
    "01": "nao", //"farmacia",
    "02": "sim", //"posto_saude",
    "03": "sim", //"policlinica_publica",
    "04": "sim", //"upa",
    "05": "sim", //"ambulatorio_publico",
    "06": "nao", //"clinica_particular",
    "07": "nao", //"pronto_socorro_privado",
    "08": "nao", //"atendimento_domiciliar",
    "09": "nao", //"outro_servico"
}

const PROCURA_EMERGENCIA_POSITION = 383;
const ESCOLARIDADE_POSITION = 1512;
const PLANO_SAUDE_POSITION = 354;

let rows = ['escolaridade,plano_saude,atendimento_publico'];

(async function processLineByLine() {
    try {
        const rl = readline.createInterface({ input: fs.createReadStream('PNS_2019.txt'), crlfDelay: Infinity });
        rl.on('line', (line) => {
            if (
                escolaridadeOptions[line[ESCOLARIDADE_POSITION]] &&
                planoSaudeOptions[line[PLANO_SAUDE_POSITION]] &&
                atendimentoPublicoOptions[`${line[PROCURA_EMERGENCIA_POSITION]}${line[PROCURA_EMERGENCIA_POSITION + 1]}`]
            ) {
                rows.push([
                    escolaridadeOptions[line[ESCOLARIDADE_POSITION]],
                    planoSaudeOptions[line[PLANO_SAUDE_POSITION]],
                    atendimentoPublicoOptions[`${line[PROCURA_EMERGENCIA_POSITION]}${line[PROCURA_EMERGENCIA_POSITION + 1]}`]
                ].join(','))
            }
        });

        await events.once(rl, 'close');
        fs.writeFileSync('toy.csv', rows.join('\n'), 'utf8');
    } catch (err) {
        console.error(err);
    }
})();