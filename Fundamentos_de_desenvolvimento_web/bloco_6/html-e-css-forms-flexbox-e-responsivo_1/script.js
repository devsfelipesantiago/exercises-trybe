window.onload = () => {
  stateList();
};

//Criar lista de estados do Brasil
function stateList() {
  const select = document.querySelector('.list-state');
  const stateList = [
    'Acre(AC)',
    'Alagoas(AL)',
    'Amapá(AP)',
    'Amazonas(AM)',
    'Bahia(BA)',
    'Ceará(CE)',
    'Distrito Federal(DF)',
    'Espírito Santo(ES)',
    'Goiás(GO)',
    'Maranhão(MA)',
    'Mato Grosso(MT)',
    'Mato Grosso do Sul(MS)',
    'Minas Gerais(MG)',
    'Pará(PA)',
    'Paraíba(PB)',
    'Paraná(PR)',
    'Pernambuco(PE)',
    'Piauí(PI)',
    'Rio de Janeiro(RJ)',
    'Rio Grande do Norte(RN)',
    'Rio Grande do Sul(RS)',
    'Rondônia(RO)',
    'Roraima(RR)',
    'Santa Catarina(SC)',
    'São Paulo(SP)',
    'Sergipe(SE)',
    'Tocantins(TO)',
  ];

  for (const key in stateList) {
    const options = document.createElement('option');
    options.innerText = stateList[key];
    select.appendChild(options);
  }
}
