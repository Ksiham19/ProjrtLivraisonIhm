package com.example.projrtlivraisonihm.URLcontroller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UrlController {

    @GetMapping("/acceuilAdmin")
    public String home() {
        return "acceuilAdmin";
    }
}