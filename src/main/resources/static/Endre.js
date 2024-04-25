
$(function (){

    const id = window.location.search.substring(1);
    const url = "/hentEnBillet?"+ id;
    $.get(url, function(billet){
        console.log(billet.billett_id)
        $("#id").val(billet.billett_id);
        $("#antall").val(billet.antall);
        $("#film").val(billet.film);
        $("#fornavn").val(billet.fornavn);
        $("#etternavn").val(billet.etternavn);
        $("#telefon").val(billet.telefon);
        $("#epost").val(billet.epost);
    })
})

$('#billetForm').on('submit', function(e) {
        endreBillet();
        e.preventDefault();
});


const endreBillet = () => {
    const billet = {
        id : $("#id").val(),
        film : $("#film").val(),
        antall : $("#antall").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefon : $("#telefon").val(),
        epost: $("#epost").val(),
    }
    $.post("/endreEnBillet", billet, function (){
        window.location.href = 'index.html';
    });
};
