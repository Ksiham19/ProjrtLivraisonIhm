package com.example.projrtlivraisonihm.URLcontroller;

import com.example.projrtlivraisonihm.Entities.client;
import com.example.projrtlivraisonihm.Entities.livreur;
import com.example.projrtlivraisonihm.Repesitory.ClientRespository;
import com.example.projrtlivraisonihm.Services.client.ServiceClient;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/loginClient")
public class LoginControllerClient {
    private final ServiceClient servicClient;

    private final ClientRespository clientRepository;

    public LoginControllerClient(ServiceClient servicClient, ClientRespository clientRepository) {
        this.servicClient = servicClient;
        this.clientRepository = clientRepository;
    }

    @GetMapping
    public String showLoginForm(Model model) {
        model.addAttribute("client", new client());
        return "loginClient.html";
    }

    @PostMapping("/valid")
    public String processLoginForm(@ModelAttribute("client") client client, Model model) {
        String enteredEmail = client.getEmail();
        String enteredPassword = client.getPassword();
        boolean isAuthenticated = servicClient.authenticate(enteredEmail, enteredPassword);
        if (isAuthenticated) {
            return "acceuilClient.html";
        } else {
            model.addAttribute("error", "Invalid credentials. Please try again.");
            return "login.html";
        }
    }
}
