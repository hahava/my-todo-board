package hahava.com.github.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class MainController {

    @RequestMapping("/page/**")
    fun redirectApi(): String? = "forward:/"

}