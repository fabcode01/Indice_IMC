var $kg = document.getElementById('weight')
var $height = document.getElementById('height')

var $h1res = document.querySelector('.h1res')
var $pres = document.querySelector('.pres')


 


function calcular(){
    $h1res.id = ''
   
    
    //calculo
    var $imc = $kg.value / ($height.value * $height.value)

    $imc = $imc.toFixed(1)

   
    //Magreza Extrema Menor que 16

    if ($imc < 16){
        $h1res.innerHTML = 'extrema magreza'
        $h1res.id = 'alert'

        $pres.innerHTML = 'A extrema magreza pode ser provocada por diversos fatores, tais como fatores genéticos, alimentação inadequada, estresse e outras doenças.'

     //Magreza Entre 16 e 18.5

    } else if ($imc >= 16 && $imc <= 18.49){
        $h1res.innerHTML = 'magreza'

        $pres.innerHTML = 'o <strong>IMC entre 16 e 18.49</strong> é considerado uma pessoa magra segundo a Organização Mundial da Saúde'

    // Peso Normal Entre 18.5 e 24.99
    } else if ($imc > 18.5 && $imc <= 24.99){
        $h1res.innerHTML = 'Peso normal'

        $pres.innerHTML = 'o <strong>IMC entre 18.5 e 24.99</strong> é considerado uma pessoa com peso normal segundo a Organização Mundial da Saúde'

    // Sobrepeso grau 1 Entre 30 e 34.9
    } else if ($imc >= 25 && $imc <= 29.99){
        $h1res.innerHTML = 'Sobrepeso'

        $pres.innerHTML = 'o <strong>IMC entre 25 e 29.99</strong> é considerado uma pessoa com sobrepeso segundo a Organização Mundial da Saúde, faça leves caminhadas e reduza o consumo de alimentos com alto teor de gorduras.'

    // Obesidade grau 1   
    } else if ($imc >= 30 && $imc <= 34.99){
        $h1res.innerHTML = 'OBESIDADE I'

        $pres.innerHTML = 'o <strong>IMC entre 18.5 e 29.99</strong> é considerado uma pessoa com sobrepeso segundo a Organização Mundial da Saúde, faça leves caminhadas e reduza o consumo de alimentos com alto teor de gorduras.'

    //obesidade grau 2   
    } else if ($imc >= 35 && $imc <= 39.99){
        $h1res.innerHTML = 'OBESIDADE II'
        $h1res.id = 'orangealert'

        $pres.innerHTML = 'Uma vez que a obesidade é uma conseqüência do comportamento alimentar impróprio, então, sem sua correção, nenhum tratamento será efetivo. Em outras palavras, muitos nutricionistas concordam que uma dieta para a obesidade do 2º grau é o principal método de luta contra a doença e é equiparada a procedimentos médicos.'

    } else if ($imc > 40){
        $h1res.innerHTML = 'OBESIDADE mórbida'
        $h1res.id = 'alert'

        $pres.innerHTML = 'O excesso de peso significa que a ingestão de calorias é muito superior à quantidade de calorias gasta pelo que o excedente é armazenado como gordura. Qualquer pessoa se pode tornar obeso mas há certas condições que facilitam a obesidade. Procure um nutricionista.'
    }

}