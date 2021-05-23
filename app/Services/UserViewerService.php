<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;

class UserViewerService
{
    /**
     * アカウント一覧用User情報取得
     *
     * @return array 検索結果
     */
    public function getter()
    {
        $cols = [
            'id',
            'name',
            'email',
            'created_at',
            'updated_at'
        ];

        return User::select($cols)->get()->toArray();
    }
}

