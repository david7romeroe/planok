<?php

require_once "../api/core/controller.php";
require_once "../api/models/quote.model.php";

    class QuoteController extends Controller{

        function __construct()
        {
            $quote = new QuoteModel();

            switch ($_SERVER['REQUEST_METHOD']) {
                case 'GET':
                    
                    if(isset($_GET['quote_id'])){
                        $response = $quote->getQuotesById($_GET['quote_id']);

                    } else{
                        $response = $quote->getQuotes();                  
                    }

                    echo json_encode($response);
                    
                    break;
                case 'POST':
                    break;
                case 'PUT':
                    break;
                case 'DELETE':
                    break;
            }
        }
    }