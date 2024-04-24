package com.example.oblig3.Controller;

import com.example.oblig3.Module.Billett;
import com.example.oblig3.Repo.BilletRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class KinoController {
    @Autowired
    private BilletRepo rep;
    @PostMapping("/lagre")
    public void lagreBilleter(Billett innBillet){
        rep.lagreBillet(innBillet);
    }

    @GetMapping("/hentBilleter")
    public List<Billett> hentBilleter(){
        return rep.hentBilleter();
    }

    @GetMapping("/slett")
    public void slettAlt(){
        rep.slettAlle();
    }

    @GetMapping("/endreEnBillet")
    public void endreEnBillet(Billett innBillet){
        rep.endreEnBillet(innBillet);
    }

    @GetMapping("/hentEnBillet")
    public Billett hentEnBillet(@RequestParam("id") Integer id) {
        return rep.hentEnBillett(id);
    }

    @GetMapping("/slettEnBillet")
    public void slettEnBillet(int id){
        rep.slettEnBillet(id);
    }
}
