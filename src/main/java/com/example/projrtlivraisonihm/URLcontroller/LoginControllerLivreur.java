package com.example.projrtlivraisonihm.URLcontroller;

import org.springframework.ui.Model;
import com.example.projrtlivraisonihm.Repesitory.LivreurRepository;
import com.example.projrtlivraisonihm.Entities.livreur;
import com.example.projrtlivraisonihm.Services.livreur.ServiceLivreur;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/loginLivreur")
public class LoginControllerLivreur {
    private final ServiceLivreur servicelivreur;

    private final LivreurRepository livreurRepository;

    public LoginControllerLivreur(ServiceLivreur servicelivreur, LivreurRepository livreurRepository) {
        this.servicelivreur = servicelivreur;
        this.livreurRepository = livreurRepository;
    }

    @GetMapping
    public String showLoginForm(Model model) {
        model.addAttribute("livreur", new livreur());
        return "login.html";
    }

    @PostMapping("/valid")
    public String processLoginForm(@ModelAttribute("livreur") livreur livreur, Model model) {
        String enteredEmail = livreur.getEmail();
        String enteredPassword = livreur.getPwd();
        boolean isAuthenticated = servicelivreur.authenticate(enteredEmail, enteredPassword);
        if (isAuthenticated) {
            return "acceuilLivreur.html";
        } else {
            model.addAttribute("error", "Invalid credentials. Please try again.");
            return "login.html";
        }
    }
}
