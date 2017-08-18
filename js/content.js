var testeMode = window.location.href.endsWith('teste');

var client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: 'ln55wc4ax9u5',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: '2461fa325882304971d276a20a19bb95d23f58b4957751075d952c52be5214e8'
});

var nomeDia = new Array(7);
nomeDia[0] = "Domingo";
nomeDia[1] = "Segunda-feira";
nomeDia[2] = "Terça-feira";
nomeDia[3] = "Quarta-feira";
nomeDia[4] = "Quinta-feira";
nomeDia[5] = "Sexta-feira";
nomeDia[6] = "Sábado";

var nomeMes = new Array(12);
nomeMes[0] = "Janeiro";
nomeMes[1] = "Fevereiro";
nomeMes[2] = "Março";
nomeMes[3] = "Abril";
nomeMes[4] = "Maio";
nomeMes[5] = "Junho";
nomeMes[6] = "Julho";
nomeMes[7] = "Agosto";
nomeMes[8] = "Setembro";
nomeMes[9] = "Outubro";
nomeMes[10] = "Novembro";
nomeMes[11] = "Dezembro";

var app = angular.module('isdlApp', []);
app.controller('isdlCtrl', function($scope) {
    client.getEntries({content_type: 'rituais', order: 'fields.data', 'fields.exibir': true}).then(function(entries) {
        // console.log(entries);
        var rituais = [];
        for (var i = 0; i < entries.total; i++) {
            var entry = entries.items[i].fields;
            if (testeMode == true || entry.modoDeTeste == false) {
                var dataRitual = new Date(Date.parse(entry.data));
                // dataRitual.setHours(dataRitual.getHours() -3);

                if (podeMostrarRitual(dataRitual)) {
                    var dataExtenso = dataRitual.getDate() + " de " + nomeMes[dataRitual.getMonth()] + " de " + dataRitual.getFullYear();
                    console.log(dataExtenso);

                    var dataTexto = dataExtenso + " às " + dataRitual.getHours();
                    console.log(dataTexto);

                    var titulo = "Meditação com Ayahuasca dia " + dataExtenso;
                    console.log(titulo);

                    entry.imagem.fields.file.url = protocol + entry.imagem.fields.file.url;
                    rituais.push(entry);
                }
            }
        }
        $scope.rituais = rituais;
        $scope.$apply();
    });

    function podeMostrarRitual(dataRitual) {
        var hoje = new Date();
        var dataTemp = new Date(dataRitual);
        dataTemp.setDate(dataTemp.getDate() + 1); //Adicionando 1 dia
        if (hoje > dataTemp) {
            return false;
        } else {
            return true;
        }
    }

});