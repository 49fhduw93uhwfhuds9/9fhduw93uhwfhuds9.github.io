/* //some routes that i wasnt done adding
app.put('/profile/play_region', (req, res) => {

    res.json({})
})

app.get('/fortnite/api/calendar/v1/timeline', (req, res) => {
    
    res.json({
        cacheIntervalMins: 75,
        currentTime: new Date().toISOString(),
        channels: {}
    })
})

app.get('/fortnite/api/storefront/v2/catalog', (req, res) => {
    
    res.json({
        dailyPurchaseHrs: 72,
        expiration: () => {
            let date = new Date()
            date.setDate(date.getDate() + 3)
            return date.toISOString()
        },
        refreshIntervalHrs: 3,
        storefronts: []
    })
})

app.get('/statsproxy/api/statsv2/account/:accountId', (req, res) => {

    res.json({
        accountId: req.params.accountId,
        startTime: 0,
        endTime: 9.2233720368547758E+18,
        stats: {
            "br_kills_keyboardmouse_m0_playlist_showdownalt_solo": 999,
            "br_playersoutlived_keyboardmouse_m0_playlist_defaultduo": 999,
            "br_matchesplayed_keyboardmouse_m0_playlist_trios": 999,
            "br_score_touch_m0_playlist_defaultsolo": 999,
            "br_matchesplayed_gamepad_m0_playlist_defaultsolo": 999,
            "br_kills_keyboardmouse_m0_playlist_playgroundv2": 999,
            "br_minutesplayed_keyboardmouse_m0_playlist_showdownalt_solo": 999,
            "br_playersoutlived_touch_m0_playlist_defaultsolo": 999,
            "br_score_keyboardmouse_m0_playlist_showdownalt_solo": 999,
            "br_minutesplayed_touch_m0_playlist_playgroundv2": 999,
            "br_lastmodified_touch_m0_playlist_defaultsolo": 999,
            "br_score_keyboardmouse_m0_playlist_playgroundv2": 999,
            "br_placetop6_keyboardmouse_m0_playlist_defaultsquad": 999,
            "br_score_keyboardmouse_m0_playlist_defaultsolo": 999,
            "br_minutesplayed_keyboardmouse_m0_playlist_defaultsquad": 999,
            "br_matchesplayed_touch_m0_playlist_defaultsolo": 999,
            "br_placetop25_gamepad_m0_playlist_defaultsolo": 999,
            "br_matchesplayed_keyboardmouse_m0_playlist_defaultsquad": 999,
            "br_score_touch_m0_playlist_playgroundv2": 999,
            "br_lastmodified_gamepad_m0_playlist_defaultsolo": 999,
            "br_kills_keyboardmouse_m0_playlist_showdownalt_duos": 999,
            "br_kills_keyboardmouse_m0_playlist_trios": 999,
            "br_lastmodified_keyboardmouse_m0_playlist_playgroundv2": 999,
            "br_placetop25_keyboardmouse_m0_playlist_defaultsolo": 999,
            "br_matchesplayed_touch_m0_playlist_playgroundv2": 999,
            "br_minutesplayed_keyboardmouse_m0_playlist_defaultduo": 999,
            "br_placetop1_keyboardmouse_m0_playlist_defaultsolo": 999,
            "br_score_keyboardmouse_m0_playlist_trios": 999,
            "s18_social_bp_level": 999,
            "br_minutesplayed_keyboardmouse_m0_playlist_playgroundv2": 999,
            "br_kills_keyboardmouse_m0_playlist_defaultsquad": 999,
            "br_lastmodified_keyboardmouse_m0_playlist_defaultduo": 999,
            "br_playersoutlived_keyboardmouse_m0_playlist_showdownalt_solo": 999,
            "br_matchesplayed_keyboardmouse_m0_playlist_defaultsolo": 999,
            "br_playersoutlived_keyboardmouse_m0_playlist_defaultsolo": 999,
            "br_score_keyboardmouse_m0_playlist_defaultsquad": 999,
            "br_placetop3_keyboardmouse_m0_playlist_defaultsquad": 999,
            "br_matchesplayed_keyboardmouse_m0_playlist_playgroundv2": 999,
            "br_minutesplayed_touch_m0_playlist_defaultsolo": 999,
            "br_matchesplayed_keyboardmouse_m0_playlist_defaultduo": 999,
            "br_minutesplayed_gamepad_m0_playlist_defaultsolo": 999,
            "br_kills_keyboardmouse_m0_playlist_defaultduo": 999,
            "br_minutesplayed_keyboardmouse_m0_playlist_showdownalt_duos": 999,
            "br_minutesplayed_keyboardmouse_m0_playlist_trios": 999,
            "br_lastmodified_keyboardmouse_m0_playlist_defaultsquad": 999,
            "br_matchesplayed_keyboardmouse_m0_playlist_showdownalt_duos": 999,
            "br_kills_gamepad_m0_playlist_defaultsolo": 999,
            "br_lastmodified_keyboardmouse_m0_playlist_defaultsolo": 999,
            "br_placetop5_keyboardmouse_m0_playlist_defaultduo": 999,
            "br_playersoutlived_keyboardmouse_m0_playlist_defaultsquad": 999,
            "br_score_keyboardmouse_m0_playlist_showdownalt_duos": 999,
            "br_lastmodified_keyboardmouse_m0_playlist_showdownalt_duos": 999,
            "br_lastmodified_touch_m0_playlist_playgroundv2": 999,
            "br_score_gamepad_m0_playlist_defaultsolo": 999,
            "s19_social_bp_level": 999,
            "br_placetop1_keyboardmouse_m0_playlist_defaultduo": 999,
            "br_playersoutlived_keyboardmouse_m0_playlist_trios": 999,
            "br_playersoutlived_gamepad_m0_playlist_defaultsolo": 999,
            "br_kills_keyboardmouse_m0_playlist_defaultsolo": 999,
            "br_lastmodified_keyboardmouse_m0_playlist_showdownalt_solo": 999,
            "s20_social_bp_level": 999,
            "br_score_keyboardmouse_m0_playlist_defaultduo": 999,
            "br_playersoutlived_keyboardmouse_m0_playlist_showdownalt_duos": 999,
            "br_placetop10_keyboardmouse_m0_playlist_defaultsolo": 999,
            "br_lastmodified_keyboardmouse_m0_playlist_trios": 999,
            "br_minutesplayed_keyboardmouse_m0_playlist_defaultsolo": 999,
            "br_matchesplayed_keyboardmouse_m0_playlist_showdownalt_solo": 999,
            "br_placetop12_keyboardmouse_m0_playlist_defaultduo": 999
        }
    })
})

app.get('/fortnite/api/game/v2/privacy/account/:accountId', (req, res) => {

    res.json({
        accountId: req.params.accountId,
        optOutOfPublicLeaderboards: true
    })
})
*/