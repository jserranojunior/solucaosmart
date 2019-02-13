<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;


class EmailController extends Controller
{
    public function index(){
        return view('emails.mails');
    }

    public function send(Request $request){

    
        $dados = ['dados' => $request->all()];

       //return view('emails.bodymails')->with($dados);

        Mail::send('emails.bodymails', $dados, function($message){
            // $message->to('contato@solucaosmart.com');
                     $message->to('jorgeserranojunior@hotmail.com');
            $message->subject('E-mail enviado pelo site da Solucão Smart');
        });
        return response()->json([
            'message' => 'E-mail Enviado',  
            'data' => ''              
        ]);
    }
}

