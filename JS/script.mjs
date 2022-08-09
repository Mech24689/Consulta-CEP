const cep = document.querySelector('#cep')
const logradouro = document.querySelector('#logradouro')
const bairro = document.querySelector('#bairro')
const localidade = document.querySelector('#localidade')
const uf = document.querySelector('#uf')

async function carregaApi(){
  const request = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
  const data = await request.json();
  
  logradouro.value = data.logradouro
  bairro.value = data.bairro
  localidade.value = data.localidade
  uf.value = data.uf
}


cep.addEventListener('blur', e => {
  e.preventDefault()
  let TamanhoCep = 0
  for(let i in cep.value){
    TamanhoCep++
    }

      if(cep.value == "" || TamanhoCep < 8){
        cep.value = ""
        logradouro.value = ""
        bairro.value = ""
        localidade.value = ""
        uf.value = ""
      }else if(cep.value != "" && TamanhoCep == 8){
        carregaApi()
      }
    })
    
