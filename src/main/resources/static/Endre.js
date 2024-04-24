const endreBillet = () => {
    const id = $("#id").val();
    const film = $("#filmer").val();
    const antall = $("#antall").val();
    const fornavn = $("#forNavn").val();
    const etternavn = $("#etterNavn").val();
    const telefon = $("#telefon").val();
    const epost = $("#epost").val();

    const billett = {
        id: id,
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        epost: epost,
    };

    $.post("/endreEnBillet", billett, function () {
    });
    window.location.href = 'index.html';
};
