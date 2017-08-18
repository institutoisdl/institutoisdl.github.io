var testeMode = window.location.href.endsWith('teste');

    var client = contentful.createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: 'ln55wc4ax9u5',
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: '2461fa325882304971d276a20a19bb95d23f58b4957751075d952c52be5214e8'
    });

    var app = angular.module('isdlApp', []);
    app.controller('isdlCtrl', function($scope) {
        client.getEntries({content_type: 'rituais', order: 'fields.data', 'fields.exibir': true}).then(function(entries) {
            // console.log(entries);
            var rituais = [];
            for (var i = 0; i < entries.total; i++) {
                var entry = entries.items[i].fields;
                if (testeMode == true || entry.modoDeTeste == false) {
                    var dataRitual = new Date(entry.data);

                    if (podeMostrarRitual(dataRitual)) {
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
            dataRitual.setDate(dataRitual.getDate() + 1); //Adicionando 1 dia
            if (hoje > dataRitual) {
                return false;
            } else {
                return true;
            }
        }

    });