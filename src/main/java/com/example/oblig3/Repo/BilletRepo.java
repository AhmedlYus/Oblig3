package com.example.oblig3.Repo;

import com.example.oblig3.Module.Billett;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class BilletRepo {
    @Autowired
    private JdbcTemplate db;

    public void lagreBillet(Billett innBillet){
        String sql = "INSERT INTO Billet (film, antall, fornavn, etternavn, telefon, epost) VALUES (?, ?, ?, ?, ?, ?)";
        db.update(sql, innBillet.getFilm(), innBillet.getAntall(), innBillet.getFornavn(), innBillet.getEtternavn(), innBillet.getTelefon(), innBillet.getEpost());
    }

    public List<Billett> hentBilleter() {
        String sql = "SELECT * FROM Billet GROUP BY etternavn";
        List<Billett> alleBilleter = db.query(sql, new BeanPropertyRowMapper<>(Billett.class));
        return alleBilleter;
    }

    public void slettAlle (){
        String sql = "DELETE FROM Billet";
        db.update(sql);
    }
}
