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
        String sql = "SELECT * FROM Billet ORDER BY etternavn";
        List<Billett> alleBilleter = db.query(sql, new BeanPropertyRowMapper<>(Billett.class));
        return alleBilleter;
    }

    public void slettAlle (){
        String sql = "DELETE FROM Billet";
        db.update(sql);
    }
    public Billett hentEnBillett(int id){
        System.out.println(id);
        String sql = "SELECT * FROM Billet WHERE billett_id=?";
        Billett Billet = db.queryForObject(sql, new BeanPropertyRowMapper<>(Billett.class), id);
        return Billet;
    }
    public void endreEnBillet(Billett innBillet){
        String sql = "UPDATE Billet SET film=?, antall=?, fornavn=?, etternavn=?, telefon=?, epost=? WHERE billett_id=?";
        db.update(sql, innBillet.getFilm(), innBillet.getAntall(), innBillet.getFornavn(), innBillet.getEtternavn(), innBillet.getTelefon(), innBillet.getEpost(), innBillet.getBillett_id());
    }
    public void slettEnBillet(int id){
        String sql = "DELETE FROM Billet WHERE billett_id=" + id;
        db.update(sql);
    }
}
