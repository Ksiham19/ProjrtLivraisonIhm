package com.example.projrtlivraisonihm.URLcontroller;

import com.example.projrtlivraisonihm.Entities.agence;
import com.example.projrtlivraisonihm.Repesitory.AgenceRepository;
import com.example.projrtlivraisonihm.Services.agence.ServiceAgence;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/loginAgence")
public class LoginControllerAgence {
    private final ServiceAgence serviceagence;

    private final AgenceRepository agenceRepository;

    public LoginControllerAgence(ServiceAgence serviceagence, AgenceRepository agenceRepository) {
        this.serviceagence = serviceagence;
        this.agenceRepository = agenceRepository;
    }

    @GetMapping
    public String showLoginForm(Model model) {
        model.addAttribute("agence", new agence());
        return "loginAgence.html";
    }
}
