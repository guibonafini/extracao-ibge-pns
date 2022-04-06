Esse script tem como o objetivo extrair dados da PNS 2019 realizada pelo IBGE para processamento e mineração de dados.
O objetivo é encontra uma relação entre o nível de escolaridade e a posse de planos de saúde com o atendimento público de saúde.

Os campos extraídos da pesquisa são os seguintes:

| Campo | Nome | Possíveis valores |
| ---- | ---- | ---- |
|escolaridade|Escolaridade| sem_instrucao, fundamental_incompleto, fundamental_completo, medio_incompleto, medio_completo, superior_incompleto, superior_completo |
|plano_saude|Plano de Saúde| sim ou nao |
|atendimento_publico|Atendimento público| sim ou nao |


Os dados extraídos se encontram no arquivo `dados/toy.zip`
---

## Fonte de dados

O arquivo base foi extraído da PNS (2019) e os dados brutos podem ser baixados através link a seguir: \
[Baixar PNS_2019_20210826.zip](https://ftp.ibge.gov.br/PNS/2019/Microdados/Dados/PNS_2019_20210826.zip)

A extração dos campos foi realizada através do dicionario e inputs da própria PNS (2019) e pode ser acessado através do seguinte link: \
[Baixar Dicionario_e_input_20220114.zip](https://ftp.ibge.gov.br/PNS/2019/Microdados/Documentacao/Dicionario_e_input_20220114.zip)
