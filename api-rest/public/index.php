<?php

  require_once("../api/core/route.php");

    Route::set('usuarios', function(){

        require_once("../api/controllers/user.controller.php");
        $usuarios = new UserController();
    });

    Route::set('cotizaciones', function(){

        require_once("../api/controllers/quote.controller.php");
        $quote = new QuoteController();
    });
?>
