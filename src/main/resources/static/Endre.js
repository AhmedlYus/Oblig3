const endreBillet =() =>{
    kinoBilleter();
    const id = window.location.search.substring(1);
    const url = "/endreEnBillet?="+ id;
    $.get("/endreEnBillet?="+ id, function (bilett){
        $("#id").val(bilett.id);
        $("#filmer").val(bilett.film);
        $("#antall").val(bilett.antall);
        $("#forNavn").val(bilett.fornavn);
        $("#etterNavn").val(bilett.etternavn);
        $("#telefon").val(bilett.telefon);
        $("#epost").val(bilett.epost);
    })
    const bilett = {
        id : $("#id").val(),
        film: $("#filmer").val(),
        antall: $("#antall").val(),
        fornavn: $("#forNavn").val(),
        etternavn: $("#etterNavn").val(),
        telefon: $("#telefon").val(),
        epost: $("#epost").val(),

    }
    $.post("/endreEnBillet", bilett, function (){
        window.location.href='index.html';
    });
}