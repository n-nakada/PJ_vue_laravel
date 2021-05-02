<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;

class UserRegisterService
{
    /**
     * Transaction for create a new user, after a valid registration.
     *
     * @param  array $data
     * @return User
     */
    public function userRegisterTransaction(array $data)
    {
        DB::beginTransaction();
        try {
            $user = User::create([
                'name'     => $data['Name'],
                'email'    => $data['Email'],
                'password' => Hash::make($data['Password']),
            ]);
            DB::commit();
            return $user;
        } catch(\PDOException $e) {
            DB::rollBack();
            Log::Debug('Transaction Error: '. print_r($e, true));
        }
    }
}

