<?php

namespace App\Services;

use Weidner\Goutte\GoutteFacade;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ScheduleService
{
    /**
     * Transaction for create a new user, after a valid registration.
     *
     * @param  array $data
     * @return User
     */
    public function getSchedule()
    {
        try {
            $goutte = GoutteFacade::request('GET', config('const.scrapingUrl'));
            $goutte->filter('.profileShift tr')->each(function ($node) use (&$texts) {
                $texts[] = $node->text();
            });
            Storage::put('schedules/org.txt', $texts);
            return ['status' => 'init', 'error' => ''];
        } catch(\PDOException $e) {
            Log::Debug('Error: '. print_r($e, true));
            return ['status' => 'init', 'error' => $e];
        }
    }

    /**
     * Transaction for create a new user, after a valid registration.
     *
     * @param  array $data
     * @return User
     */
    public function checkSchedule()
    {
        try {
            $goutte = GoutteFacade::request('GET', config('const.scrapingUrl'));
            $goutte->filter('.profileShift tr')->each(function ($node) use (&$texts) {
                $texts[] = $node->text();
            });
            $dif = implode($texts);
            $org = Storage::get('schedules/org.txt');
            $status = ($org !== $dif) ? 'commuting' : 'rest';
            return ['status' => $status, 'error' => ''];
        } catch(\PDOException $e) {
            Log::Debug('Error: '. print_r($e, true));
            return ['status' => 'error', 'error' => $e];
        }
    }
}

