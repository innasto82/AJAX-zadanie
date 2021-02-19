console.log(`AJAX-Pobieranie danych po kliknięciu przycisku`);

$(document).ready(function () {
    $('#get-data').click(function () {

    $.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    .done(function (data) {

    console.log(data);

    const obj=JSON.parse(data);    

        let divId = $('<div id="dane-programisty"></div>');
        let pImie = $('<p></p>').text(`Imie: ${ obj.imie}`);
        let pNazwisko = $('<p></p>').text(`Nazwisko: ${obj.nazwisko}`);
        let pZawod = $('<p></p>').text(`Imie: ${ obj.zawod}`);
        let pFirma = $('<p></p>').text(`Nazwisko: ${obj.firma}`);
        let hr = $('<hr />');

        $('body').append(divId);
        $('#dane-programisty').append(pImie);
        $('#dane-programisty').append(pNazwisko);
        $('#dane-programisty').append(pZawod);
        $('#dane-programisty').append(pFirma);
        $('#dane-programisty').append(hr);

    })
        .fail(function (error) {
         console.error(error);
    });
  });

})