<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\ApiFormRequestTrait;

class UserRegistPost extends FormRequest
{
    use ApiFormRequestTrait;

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'Name' => ['required', 'string', 'max:20', 'unique:users'],
            'Email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'Password' => ['required', 'string', 'min:8', 'confirmed'],
            'Password_confirmation' => ['required'],
        ];
    }
}

