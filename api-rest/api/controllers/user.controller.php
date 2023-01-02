
<?php
require_once "../api/core/controller.php";
require_once "../api/models/user.model.php";


class UserController extends Controller
{

    public function __construct()
    {

        $user = new UserModel();

        switch ($_SERVER['REQUEST_METHOD']) {
            case 'GET':

                $response = $user->getUsers();
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
?>


