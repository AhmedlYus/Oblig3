package com.example.oblig3.Repo;

import com.example.oblig3.Module.Film;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class filmRepo {
    @Autowired
    private JdbcTemplate filmdb;

    public void lagreFilm(Film filmer){
        String sql = "INSERT INTO Film (film,) VALUES (?,)";
        filmdb.update(sql, filmer.getFilm());
    }
    public List<Film> hentFilm (){
        String sql = "SELECT * FROM Film";
        List<Film> alleFilmer = filmdb.query(sql, new BeanPropertyRowMapper<>(Film.class));
        return alleFilmer;
    }
    public void slettFilm (){
        String sql = "DELETE FROM Film";
        filmdb.update(sql);
    }
}
