$(function (){
    getBillet();
})

const blankt = () => {
    $('#film').val('');
    $('#antall').val('');
    $('#fornavn').val('');
    $('#etternavn').val('');
    $('#telefon').val('');
    $('#epost').val('');
};
const validering = (film, antall, fornavn, etternavn, telefon, epost) => {
    const visError = (elementId, melding) => {
        const errorSpan = $(`#${elementId}-error`);
        errorSpan.text(melding);
        errorSpan.toggleClass('text-danger', melding !== '');
        errorSpan.toggleClass('invalid-feedback', melding !== '');
    };
    const fjernError = (elementId) => {
        const errorSpan = $(`#${elementId}-error`);
        errorSpan.text('');
        errorSpan.removeClass('text-danger invalid-feedback');
    };
    const filmVal = () => {
        if (film === ''){
            visError('film', 'Velg en film');
            return false;
        }
        return true;
    };
    const antallVal = () => {
        if (antall < 1){
            visError('antall', 'Antall må være 1 eller mer');
            return false;
        }
        return true;
    };
    const fornavnVal = () => {
        if (fornavn.trim() === ''){
            visError('forNavn', 'Fornavn, Skriv inn ditt fornavn');
            return false;
        }
        return true;
    };
    const etternavnVal = () => {
        if (etternavn.trim() === ''){
            visError('etterNavn', 'Etternavn, Skriv inn ditt etternavn');
            return false;
        }
        return true;
    };
    const telefonVal = () => {
        if (telefon.trim() === '' || !/^[0-9]{8}$/.test(telefon)){
            visError('telefon', 'Telefon, skriv inn gyldig telefonnummer');
            return false;
        }
        return true;
    };
    const epostVal = () => {
        if (epost.trim() === '' || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(epost)){
            visError('epost', 'Epost, Skriv inn gyldig epost');
            return false;
        }
        return true;
    };
    return filmVal() && antallVal() && fornavnVal() && etternavnVal() && telefonVal() && epostVal();
};
const kinoBilleter = () => {
    const film = $('#film').val();
    const antall = $('#antall').val();
    const fornavn = $('#fornavn').val();
    const etternavn = $('#etternavn').val();
    const telefon = $('#telefon').val();
    const epost = $('#epost').val();

    if (validering(film, antall, fornavn, etternavn, telefon, epost)) {
        const ticket = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefon: telefon,
            epost: epost,
        };

        $.post("/lagre", ticket, function () {
            getBillet();
        });
        blankt();
    }
};
const getBillet = () => {
    $.get("/hentBilleter", function (data) {
        formaterData(data);
    });
}
const formaterData = (billeter) => {
    let ut = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th></tr>";
    for (const billet of billeter) {
        ut += "<tr><td>" + billet.film + "</td><td> " + billet.antall + "</td>" +
            "<td> " + billet.fornavn + "</td><td> " + billet.etternavn + "</td>" +
            "<td> " + billet.telefon + "</td><td> " + billet.epost + "</td>" +
            "<td><a class='btn btn-primary' href='EndreBillet.html?id="+billet.billett_id+"'>Endre</a></td>" +
            "<td><button class='btn btn-danger' onclick='slettEnBillet("+billet.billett_id+")'>Slett</button></td>";

    }
    ut += "</table>";
    $("#ut").html(ut);
};
const slettEnBillet =(billet_id) =>{
    const url = "/slettEnBillet?id="+billet_id;
    $.get(url, function (){
        window.location.href = 'index.html';
        getBillet();
    })
}
const slettbilleter = () => {
    $.get("/slett", function (data){
       getBillet();
    })
};