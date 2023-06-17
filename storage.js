const jsonDb = require('node-json-db'),
config = require('node-json-db/dist/lib/JsonDBConfig'),
util = require('./util')

//having some files (/templates) in here, so the backend doesnt need as many external files


module.exports = {
    database: new jsonDb.JsonDB(new config.Config('users', true, false, '/')),
    dataTemplate: {
      vbucks: 10000,
      level: 253,
      accountLevel: 10000,
      battlestars: 1000,
      style_points: 1000,
      gold_bars: 1000,
      crowns: 1000,
      favorites: [],
      unseen_items:  [],
      random_loadout: false,
      login_code: util.randomHex(32),
      email: '',
      password: '',
      accountId: util.randomHex(32),
      username: '',
      lockers: [{
              templateId: 'CosmeticLocker:cosmeticlocker_athena',
              attributes: {
                  locker_slots_data: {
                      slots: {
                          Glider: {
                              items: ['AthenaGlider:Glider_Warthog'],
                              activeVariants: [{
                                  variants: [null]
                              }]
                          },
                          Backpack: {
                              items: ['AthenaBackpack:BID_004_BlackKnight'],
                              activeVariants: [null]
                          },
                          Dance: {
                              items: ['AthenaDance:EID_Fresh', 'AthenaDance:EID_Floss', 'AthenaDance:EID_TakeTheL', 'AthenaDance:EID_LazyShuffle', 'AthenaDance:EID_Cheerleading', 'AthenaDance:EID_Coronet'],
                              activeVariants: [null, null, null, null, null, null]
                          },
                          LoadingScreen: {
                              items: ['AthenaLoadingScreen:lsid_random'],
                              activeVariants: [null]
                          },
                          Character: {
                              items: ['AthenaCharacter:Character_BariumDemon'],
                              activeVariants: [null]
                          },
                          MusicPack: {
                              items: ['AthenaMusicPack:MusicPack_136_BlueJay'],
                              activeVariants: [null]
                          },
                          SkyDiveContrail: {
                              items: ['Contrail_Chainmail'],
                              activeVariants: [null]
                          },
                          Pickaxe: {
                              items: ['AthenaPickaxe:Pickaxe_ID_804_FNCSS20Male'],
                              activeVariants: [{
                                  variants: [null]
                              }]
                          },
                          ItemWrap: {
                              items: [null, null, null, null, null, null, null, null],
                              activeVariants: [null, null, null, null, null, null, null, null]
                          }
                      }
                  },
                  use_count: 1,
                  banner_icon_template: 'BRSeason01',
                  locker_name: 'PhantomFN',
                  banner_color_template: '',
                  item_seen: false,
                  favorite: false
              },
              quantity: 1
          }
      ]
  },
  profiles:  {
        athena: {
            _id: '78fd71eedd934d57b86a386ba36aa671',
            created: '2021-12-02T17:24:19.735Z',
            updated: '2022-04-09T21:32:50.584Z',
            rvn: 1742,
            
            wipeNumber: 5,
            accountId: '5f9577ca87fb4e64b4cf7e4296ac6a86',
            profileId: 'athena',
            version: 'season20_2010_ValueAdds_Apr_2022',
            items: {
              'AthenaLoadingScreenlsid_random': {
                'templateId': 'AthenaLoadingScreen:lsid_random',
                'attributes': {
                  'max_level_bonus': 0,
                  'level': 1,
                  'item_seen': true,
                  'rnd_sel_cnt': 0,
                  'xp': 0,
                  'variants': [],
                  'favorite': false
                },
                'quantity': 1
              },
              'AthenaCharacterCharacter_BariumDemon': {
                'templateId': 'AthenaCharacter:Character_BariumDemon',
                'attributes': {
                  'max_level_bonus': 0,
                  'level': 1,
                  'item_seen': true,
                  'rnd_sel_cnt': 0,
                  'xp': 0,
                  'variants': [],
                  'favorite': false
                },
                'quantity': 1
              },
              'AthenaCharacterCID_701_Athena_Commando_M_BananaAgent': {
                'templateId': 'AthenaCharacter:CID_701_Athena_Commando_M_BananaAgent',
                'attributes': {
                  'max_level_bonus': 0,
                  'level': 1,
                  'item_seen': true,
                  'rnd_sel_cnt': 0,
                  'xp': 0,
                  'variants': [],
                  'favorite': false
                },
                'quantity': 1
              }
            },
            stats: {
              attributes: {
                use_random_loadout: false,
                past_seasons: [],
                season_match_boost: 0,
                loadouts: [],
                style_points: 0,
                mfa_reward_claimed: true,
                rested_xp_overflow: 0,
                last_xp_interaction: '2022-04-09T21:32:27.117Z',
                rested_xp_golden_path_granted: 958064,
                quest_manager: {},
                book_level: 17,
                level: 100,
                season_num: 25,
                season_update: 1,
                book_xp: 4000,
                creative_dynamic_xp: {
                  timespan: 100,
                  bucketXp: 0,
                  bankXp: 0,
                  bankXpMult: 1,
                  boosterBucketXp: 10000,
                  boosterXpMult: 0.7,
                  dailyExcessXpMult: 1,
                  currentDayXp: 111000,
                  currentDay: 1
                },
                permissions: [],
                battlestars: 58,
                season: {
                  numWins: 15,
                  numHighBracket: 4,
                  numLowBracket: 4
                },
                battlestars_season_total: 80,
                alien_style_points: 0,
                lifetime_wins: 18,
                book_purchased: false,
                party_assist_quest: '',
                purchased_battle_pass_tier_offers: {},
                rested_xp_exchange: 0.4,
                level: 17,
                xp_overflow: 0,
                rested_xp: 653315,
                rested_xp_mult: 11,
                season_first_tracking_bits: [],
                accountLevel: 120,
                competitive_identity: {},
                style_points_season_total: 0,
                inventory_limit_bonus: 0,
                season_levels_purchased: 0,
                pinned_quest: '',
                last_applied_loadout: '2a2c4d64-dab9-4831-a18d-6a9801a1954d',
                daily_rewards: {},
                xp: 3978,
                season_friend_match_boost: 0,
                purchased_bp_offers: [],
                last_match_end_datetime: '2022-04-09T21:32:08.657Z',
                last_stw_accolade_transfer_datetime: '2022-04-09T21:32:27.120Z',
                active_loadout_index: 0
              }
            }
          },
    
        common_core: {
            _id: 'ebcc07b87f1149c29e9e78a75d507c37',
            created: '2021-12-02T17:23:54.212Z',
            updated: '2022-04-09T21:32:36.766Z',
            rvn: 1,
            wipeNumber: 1,
            accountId: '5f9577ca87fb4e64b4cf7e4296ac6a86',
            profileId: 'common_core',
            version: 'the_great_spectator_token_reset_feb_2022',
            items: {
                '052f1148-09f7-460c-94e1-84beace3881e': {
                  'templateId': 'HomebaseBannerIcon:brskirmishbushbandits',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                'f0c922f5-6f51-46ca-bf75-75af8bb28310': {
                  'templateId': 'HomebaseBannerIcon:standardbanner21',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                '6c2d391d-2150-4acc-8683-6eb3a2eb22fc': {
                  'templateId': 'HomebaseBannerIcon:standardbanner29',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                '3bb583ca-77b7-4e17-894b-d3e1fbb0a3a3': {
                  'templateId': 'HomebaseBannerIcon:standardbanner1',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                '8d55394b-a432-4661-a085-fc2b887e5c09': {
                  'templateId': 'HomebaseBannerColor:defaultcolor43',
                  'attributes': {
                    'item_seen': true
                  },
                  'quantity': 1
                },
                '2699431e-3da2-4351-ab79-ee8314d89d91': {
                  'templateId': 'HomebaseBannerIcon:standardbanner19',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                '56bfe7c8-7c82-40bc-828c-d6ea4a35b671': {
                  'templateId': 'HomebaseBannerIcon:standardbanner24',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                'e33e1114-0dc1-48af-9448-2e8d65f7a318': {
                  'templateId': 'HomebaseBannerIcon:brs19_islandnomad',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': false,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                '83224962-8b28-4f80-a7ce-13870fb8066f': {
                  'templateId': 'HomebaseBannerIcon:brs18_cerealbox',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                '68c5156e-0d57-4ca1-a4f1-e9983ec734f9': {
                  'templateId': 'HomebaseBannerColor:defaultcolor29',
                  'attributes': {
                    'item_seen': false
                  },
                  'quantity': 1
                },
                '10ce0ad4-4428-491b-90dc-c67906e8adef': {
                  'templateId': 'HomebaseBannerColor:defaultcolor28',
                  'attributes': {
                    'item_seen': false
                  },
                  'quantity': 1
                },
                'cd8a7e23-717b-413e-96dc-5651ca5805bf': {
                  'templateId': 'HomebaseBannerColor:defaultcolor37',
                  'attributes': {
                    'item_seen': false
                  },
                  'quantity': 1
                },
                '257d9a62-8250-48b8-bf2d-30c9935af6bb': {
                  'templateId': 'HomebaseBannerIcon:standardbanner10',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                'f4c6a8ad-3d15-4a98-aad4-2ae13178c303': {
                  'templateId': 'HomebaseBannerIcon:standardbanner28',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                '6209019f-0666-4001-ac12-1215614a7de0': {
                  'templateId': 'HomebaseBannerIcon:brs19_winterfest2021',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': false,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                '87f46646-3485-4900-8664-8617e757c0f2': {
                  'templateId': 'HomebaseBannerIcon:brskirmishluckyllamas',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                'c82f9d83-c9ef-45ca-b923-a493f5eafd4e': {
                  'templateId': 'HomebaseBannerIcon:brs18_spacechimp',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                '4f91b474-6e92-471a-b5d4-4eb5d285f395': {
                  'templateId': 'HomebaseBannerIcon:standardbanner23',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                '0ec3b91d-758b-4f94-92c3-5d95b43c1f4e': {
                  'templateId': 'HomebaseBannerIcon:standardbanner4',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                'e87df2c9-4c88-4bca-a97f-2f5d315ce9a4': {
                  'templateId': 'HomebaseBannerColor:defaultcolor14',
                  'attributes': {
                    'item_seen': false
                  },
                  'quantity': 1
                },
                '5a889419-9a39-4d02-8944-3be098b58187': {
                  'templateId': 'HomebaseBannerIcon:standardbanner16',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                '6afcb3c7-3007-492a-9b89-4db4b2e7d900': {
                  'templateId': 'HomebaseBannerColor:defaultcolor44',
                  'attributes': {
                    'item_seen': true
                  },
                  'quantity': 1
                },
                '0cf14e2f-9fd5-4f8b-8203-0314b2e00374': {
                  'templateId': 'HomebaseBannerIcon:brs18_teriyakifishtoon',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                '39822a18-e494-4ec8-8b8f-77d5805b31af': {
                  'templateId': 'HomebaseBannerColor:defaultcolor27',
                  'attributes': {
                    'item_seen': false
                  },
                  'quantity': 1
                },
                'dc7d5d2c-c185-43d5-9478-0cf06fb9dc5b': {
                  'templateId': 'HomebaseBannerIcon:brskirmishfortknights',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                '354ed7a7-4cdf-4cf1-ad03-a072e85b3ea6': {
                  'templateId': 'HomebaseBannerColor:defaultcolor2',
                  'attributes': {
                    'item_seen': false
                  },
                  'quantity': 1
                },
                '1249493f-0f15-41cc-a9b7-21e4f766f8c6': {
                  'templateId': 'HomebaseBannerColor:defaultcolor4',
                  'attributes': {
                    'item_seen': false
                  },
                  'quantity': 1
                },
                '14b07af4-7aa2-41b2-80c7-56eeadc0e1d3': {
                  'templateId': 'HomebaseBannerIcon:standardbanner25',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                'a73229da-2a36-4f3b-bc77-d3b85aa14260': {
                  'templateId': 'HomebaseBannerColor:defaultcolor13',
                  'attributes': {
                    'item_seen': false
                  },
                  'quantity': 1
                },
                '6c1e3b72-415d-4b36-8cd7-c4fa0304b496': {
                  'templateId': 'HomebaseBannerColor:defaultcolor17',
                  'attributes': {
                    'item_seen': false
                  },
                  'quantity': 1
                },
                '8594e879-4c84-4357-9852-fd7a442c8068': {
                  'templateId': 'HomebaseBannerIcon:standardbanner30',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                '0144c9d9-736b-4726-81e8-4ef6e5b79e48': {
                  'templateId': 'HomebaseBannerColor:defaultcolor7',
                  'attributes': {
                    'item_seen': true
                  },
                  'quantity': 1
                },
                '6f7a30ad-c8e4-49c9-8d4e-5c7e853be985': {
                  'templateId': 'EventPurchaseTracker:generic_instance',
                  'attributes': {
                    'event_purchases': {},
                    '_private': false,
                    'devName': '',
                    'event_instance_id': '73i8g29meihpvtpgi5scsrv1ts[0]2'
                  },
                  'quantity': 1
                },
                '226dbc27-f8d6-4998-a6ac-2813d1134fb7': {
                  'templateId': 'HomebaseBannerIcon:standardbanner31',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                '09d61181-9206-4db4-9bbd-fa7c3f1c6460': {
                  'templateId': 'HomebaseBannerIcon:standardbanner3',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                '4fb00363-0864-4c1c-8c45-d69097afc91f': {
                  'templateId': 'HomebaseBannerIcon:brs20_cyberarmor',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': false,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                '3a0d447b-6342-4667-95b5-cbc3c5130653': {
                  'templateId': 'HomebaseBannerColor:defaultcolor41',
                  'attributes': {
                    'item_seen': true
                  },
                  'quantity': 1
                },
                '023ffa3c-1f68-4a46-b780-211871f24716': {
                  'templateId': 'HomebaseBannerColor:defaultcolor10',
                  'attributes': {
                    'item_seen': false
                  },
                  'quantity': 1
                },
                '6e2946fe-eca4-4d51-986a-ec730320cf5e': {
                  'templateId': 'HomebaseBannerIcon:standardbanner5',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                'b230abc8-353e-4eaf-92b3-160808aa33e0': {
                  'templateId': 'HomebaseBannerColor:defaultcolor34',
                  'attributes': {
                    'item_seen': false
                  },
                  'quantity': 1
                },
                '5220a7ec-86e5-4b90-81d3-0e5989f2e60e': {
                  'templateId': 'HomebaseBannerColor:defaultcolor8',
                  'attributes': {
                    'item_seen': false
                  },
                  'quantity': 1
                },
                'bbc5a223-bfae-4b3c-ae70-2e7d38a19d51': {
                  'templateId': 'HomebaseBannerIcon:brs18_ghosthunter',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                '41cc50e9-b0b0-4bcb-981a-c26a3cec6cd9': {
                  'templateId': 'EventPurchaseTracker:generic_instance',
                  'attributes': {
                    'event_purchases': {},
                    '_private': false,
                    'devName': '',
                    'event_instance_id': '220ev8iocpiqp1lg3qas85f2co[1]2'
                  },
                  'quantity': 1
                },
                '3a19fa86-1158-4fdd-9ab9-d3870188ac8b': {
                  'templateId': 'HomebaseBannerColor:defaultcolor15',
                  'attributes': {
                    'item_seen': false
                  },
                  'quantity': 1
                },
                '8d99434d-f69a-4c3c-a842-27b2f3ca8be0': {
                  'templateId': 'HomebaseBannerIcon:standardbanner11',
                  'attributes': {
                    'max_level_bonus': 0,
                    'level': 1,
                    'item_seen': true,
                    'rnd_sel_cnt': 0,
                    'xp': 0,
                    'variants': [],
                    'favorite': false
                  },
                  'quantity': 1
                },
                '6319b11c-b638-4daf-a034-28c40485fb69': {
                  'templateId': 'HomebaseBannerColor:defaultcolor38',
                  'attributes': {
                    'item_seen': false
                  },
                  'quantity': 1
                },
                '9ee7b4e7-fdba-493d-86fd-0acd08a02ca5': {
                  'templateId': 'EventPurchaseTracker:generic_instance',
                  'attributes': {
                    'event_purchases': {},
                    '_private': false,
                    'devName': '',
                    'event_instance_id': '220ev8iocpiqp1lg3qas85f2co[0]2'
                  },
                  'quantity': 1
                },
                '3a25aaaa-f256-4646-8ac7-f697868eb083': {
                  'templateId': 'HomebaseBannerColor:defaultcolor31',
                  'attributes': {
                    'item_seen': false
                  },
                  'quantity': 1
                },
                'dd8539bf-a2ea-4557-813c-62614aaf697b': {
                  'templateId': 'HomebaseBannerColor:defaultcolor32',
                  'attributes': {
                    'item_seen': false
                  },
                  'quantity': 1,
                  '3f48b43d-8c8c-47d2-a4d9-511a07eaf7fa': {
                    'templateId': 'HomebaseBannerColor:defaultcolor40',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  'c80072e2-b30a-4356-8dfd-1982b7a3c1ba': {
                    'templateId': 'HomebaseBannerColor:defaultcolor12',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  '46a9cd03-f801-4730-aaf7-707930e6b3b0': {
                    'templateId': 'HomebaseBannerIcon:standardbanner12',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  '28304cb5-d470-438b-9a64-336bc1604dcc': {
                    'templateId': 'HomebaseBannerIcon:brskirmishdustydogs',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  '46a270aa-d392-439f-922f-99f4edb5f922': {
                    'templateId': 'HomebaseBannerColor:defaultcolor1',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  'f7deaf9d-62a5-4e37-bc50-37ec3d9f4d7f': {
                    'templateId': 'HomebaseBannerColor:defaultcolor21',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  '7dc9a6e5-8dba-40ed-b73e-23afc508414c': {
                    'templateId': 'HomebaseBannerIcon:brs18_punkkoi',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  '86aeadd3-4e9c-400d-939f-2f0593b2f181': {
                    'templateId': 'HomebaseBannerColor:defaultcolor26',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  '526b82b5-b271-454d-8f56-cdc3dac16604': {
                    'templateId': 'HomebaseBannerIcon:standardbanner9',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  '99903978-3911-456b-96c5-c1a716c3cf79': {
                    'templateId': 'HomebaseBannerColor:defaultcolor33',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  '80042f3c-af40-4cf4-80c7-5aa3b4dcb81a': {
                    'templateId': 'HomebaseBannerIcon:standardbanner15',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  'c92f6e39-e122-4900-96d0-7358849bb142': {
                    'templateId': 'HomebaseBannerIcon:standardbanner26',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  'f40b2842-fdb8-4f19-ba5b-595a5ede1071': {
                    'templateId': 'HomebaseBannerColor:defaultcolor6',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  'f7fb2e82-92e3-4d44-8cde-299afb0968a9': {
                    'templateId': 'HomebaseBannerIcon:standardbanner13',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  '798fc4b8-437c-4042-93b9-f0c8f2e58ce8': {
                    'templateId': 'HomebaseBannerColor:defaultcolor36',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  'b8e6a458-b3bf-438d-8e0a-b36da6af3acd': {
                    'templateId': 'HomebaseBannerColor:defaultcolor18',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  '88003bf2-f835-4622-adfd-579be312cba6': {
                    'templateId': 'HomebaseBannerColor:defaultcolor11',
                    'attributes': {
                      'item_seen': true
                    },
                    'quantity': 1
                  },
                  'd84d5062-0b6f-4e5c-a7c8-5f0688ff1b88': {
                    'templateId': 'HomebaseBannerColor:defaultcolor24',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  'ed19c544-c21d-49b4-9782-cd5b5292a2e4': {
                    'templateId': 'HomebaseBannerIcon:standardbanner7',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  '1ea08bbc-68d7-45a0-8159-fa0f325d3aa2': {
                    'templateId': 'HomebaseBannerIcon:standardbanner14',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  '6ab08f61-9c24-4d31-adc8-3f72a422f9f6': {
                    'templateId': 'HomebaseBannerIcon:brs19_lonewolf',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  'cd47daf8-964d-453e-8758-a27a203835e6': {
                    'templateId': 'HomebaseBannerIcon:brskirmishriftraiders',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  'bd32129e-07f2-4dc2-aff3-ededffbf3067': {
                    'templateId': 'HomebaseBannerIcon:brs19_gumball',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': false,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  '8dc1447c-0ead-40fe-8269-c019a7004be1': {
                    'templateId': 'HomebaseBannerColor:defaultcolor39',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  'dfbf8a1f-0f53-439a-86e4-a226370746bb': {
                    'templateId': 'HomebaseBannerIcon:standardbanner18',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  '4d32ec7c-a29f-47cc-8e00-d87930ffe921': {
                    'templateId': 'HomebaseBannerIcon:standardbanner8',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  '8a005f68-b46c-4119-beab-2b982a90a2e8': {
                    'templateId': 'HomebaseBannerIcon:brs19_buffllama',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  '2151a732-69b3-4c1a-85d4-a390eff3115c': {
                    'templateId': 'HomebaseBannerColor:defaultcolor20',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  'bf7a5919-1991-4174-b152-4bec141482e6': {
                    'templateId': 'HomebaseBannerColor:defaultcolor23',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  '79ce2a98-8cb4-464d-9c70-779e5fa6864a': {
                    'templateId': 'HomebaseBannerIcon:standardbanner22',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  '88eccae0-29f2-43ce-bcea-7ec21ab9fb82': {
                    'templateId': 'HomebaseBannerIcon:standardbanner17',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  '2bccec31-1703-4038-8a18-2388afea989d': {
                    'templateId': 'HomebaseBannerIcon:standardbanner20',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  '11d11620-04b4-411f-9aa4-a47635741e98': {
                    'templateId': 'HomebaseBannerColor:defaultcolor19',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  'ff82d2a3-c297-47b7-802d-83026e2fd1a0': {
                    'templateId': 'HomebaseBannerColor:defaultcolor35',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  '8d991aad-10bf-4722-bb59-d11b17abd112': {
                    'templateId': 'HomebaseBannerColor:defaultcolor16',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  '8d66a64d-db9a-490f-8d82-afaa4be3f514': {
                    'templateId': 'HomebaseBannerIcon:standardbanner6',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  '7f5e2c6e-8de1-4332-bb76-5835d8dd0714': {
                    'templateId': 'HomebaseBannerColor:defaultcolor3',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  '4f21e4e3-a0f4-4c69-9475-b5b9662619b4': {
                    'templateId': 'HomebaseBannerColor:defaultcolor5',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  '6cae2cc4-64c7-4bb8-b7c5-4ec1987e1e0d': {
                    'templateId': 'HomebaseBannerColor:defaultcolor9',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  '1fd8f4bb-64d6-451d-82b1-f6fe7c9641cd': {
                    'templateId': 'HomebaseBannerIcon:standardbanner2',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  '41bb7ef6-5936-4f97-8948-13cddd2c53c9': {
                    'templateId': 'HomebaseBannerColor:defaultcolor25',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  '44806c53-e1a4-4080-b7cc-1d09de944d4b': {
                    'templateId': 'HomebaseBannerColor:defaultcolor30',
                    'attributes': {
                      'item_seen': false
                    },
                    'quantity': 1
                  },
                  '8cdfb138-fbc2-45ca-8b12-f669c9f87251': {
                    'templateId': 'EventPurchaseTracker:generic_instance',
                    'attributes': {
                      'event_purchases': {},
                      '_private': false,
                      'devName': '',
                      'event_instance_id': '478i1knepd1kjahuej6p7u5vvj[0]130'
                    },
                    'quantity': 1
                  },
                  '5bee5390-2605-4d72-949d-ff32c6265658': {
                    'templateId': 'HomebaseBannerColor:defaultcolor22',
                    'attributes': {
                      'item_seen': true
                    },
                    'quantity': 1
                  },
                  '054a33ad-5e17-4e9c-8402-f167552e602a': {
                    'templateId': 'HomebaseBannerIcon:standardbanner27',
                    'attributes': {
                      'max_level_bonus': 0,
                      'level': 1,
                      'item_seen': true,
                      'rnd_sel_cnt': 0,
                      'xp': 0,
                      'variants': [],
                      'favorite': false
                    },
                    'quantity': 1
                  },
                  'f2274d26-9f59-4c8d-97bb-daa45e1236be': {
                    'templateId': 'HomebaseBannerColor:defaultcolor42',
                    'attributes': {
                      'item_seen': true
                    },
                    'quantity': 1
                  }
                },
                'stats': {
                  'attributes': {
                    'subscriptions': [],
                    'encryption_keys': [],
                    'subs': {},
                    'personal_offers': {},
                    'mtx_purchase_history': {
                      'refundsUsed': 0,
                      'refundCredits': 3,
                      'purchases': []
                    },
                    'import_friends_claimed': {},
                    'current_mtx_platform': 'EpicPC',
                    'mtx_affiliate': '',
                    'daily_purchases': {},
                    'forced_intro_played': 'Coconut',
                    'in_app_purchases': {},
                    'undo_timeout': 'min',
                    'permissions': [],
                    'mfa_enabled': true,
                    'allowed_to_receive_gifts': true,
                    'gift_history': {
                      'num_sent': 0,
                      'sentTo': {},
                      'num_received': 2,
                      'receivedFrom': {
                        '8945282ca6e349bc88ac97e42b826048': '2021-12-27T20:50:05.333Z'
                      },
                      'gifts': []
                    },
                    'survey_data': {
                      'allSurveysMetadata': {
                        'numTimesCompleted': 1,
                        'lastTimeCompleted': '2022-01-15T19:03:22.982Z'
                      },
                      'metadata': {
                        '210504_general aidc_fnbr': {
                          'numTimesCompleted': 1,
                          'lastTimeCompleted': '2022-01-15T19:03:22.982Z'
                        },
                        'fnbr_heartbeatsurveys': {
                          'numTimesCompleted': 1,
                          'lastTimeCompleted': '2022-01-15T19:03:23.205Z'
                        }
                      }
                    },
                    'intro_game_played': false,
                    'undo_cooldowns': [
                      {
                        'offerId': 'v2:/53d5b033ac3308b024ef61c79b7a2014c915798cd7e8b7f82126bad21c38148a',
                        'cooldownExpires': '2022-02-12T22:49:44.434Z'
                      }
                    ],
                    'inventory_limit_bonus': 0,
                    'weekly_purchases': {},
                    'ban_history': {},
                    'monthly_purchases': {},
                    'allowed_to_send_gifts': true,
                    'mtx_affiliate_id': ''
                  }
                },
                'commandRevision': 101
              },
            stats: {
                attributes: {
                    subscriptions: [],
                    encryption_keys: [],
                    subs: {},
                    personal_offers: {},
                    mtx_purchase_history: {
                        refundsUsed: 1,
                        refundCredits: 3,
                        purchases: []
                    },
                    import_friends_claimed: {},
                    current_mtx_platform: 'EpicPC',
                    mtx_affiliate: '',
                    daily_purchases: {},
                    forced_intro_played: 'Coconut',
                    in_app_purchases: {
                        receipts: [],
                        ignoredReceipts: [],
                        fulfillmentCounts: {}
                    },
                    undo_timeout: 'min',
                    permissions: [],
                    mfa_enabled: true,
                    allowed_to_receive_gifts: true,
                    gift_history: {
                        num_sent: 10,
                        sentTo: {},
                        num_received: 2,
                        receivedFrom:{},
                        gifts: []
                    },
                    survey_data: {},
                    intro_game_played: true,
                    undo_cooldowns: [],
                    inventory_limit_bonus: 0,
                    weekly_purchases: {},
                    ban_history: {},
                    monthly_purchases: {},
                    allowed_to_send_gifts: true,
                    mtx_affiliate_id: ''
                }
            },
            commandRevision: 1
        },
    
        collections: {
          _id: 'c4320cb1c1ab4eec8ae1d6403d02bc71',
          created: '2021-12-02T17:24:19.311Z',
          updated: '2022-04-09T20:56:22.256Z',
          rvn: 22,
          wipeNumber: 3,
          accountId: '5f9577ca87fb4e64b4cf7e4296ac6a86',
          profileId: 'collections',
          version: 'season20_2010_fix_fish_collection_incorrect_items_apr_2022',
          items: {
            '9377ba14-d9f7-4219-8a9c-0860974fea96': {
              templateId: 'CollectableCharacter:tandem',
              attributes: {
                collected: [{
                  variantTag: 'AISpawnerData.Type.Tandem.TameFoot',
                  contextTags: [],
                  properties: {
                    questsGiven: 0,
                    questsCompleted: 0,
                    encounterTypeFlags: 2
                  },
                  seenState: 'NewlyCompleted',
                  count: 1
                }, {
                  variantTag: 'AISpawnerData.Type.Tandem.CuddleTeamLeader',
                  contextTags: [],
                  properties: {
                    questsGiven: 0,
                    questsCompleted: 0,
                    encounterTypeFlags: 1
                  },
                  seenState: 'NewlyCompleted',
                  count: 1
                }]
              },
              quantity: 1
            },
            '7f171bb7-749a-459f-8f1a-d20344e6decc': {
              templateId: 'CollectableCharacter:boss',
              attributes: {
                  collected: [{
                  variantTag: 'AISpawnerData.Type.Boss.SloneResolve',
                  contextTags: [],
                  properties: {
                    questsGiven: 0,
                    questsCompleted: 0,
                    encounterTypeFlags: 2
                  },
                  seenState: 'NewlyCompleted',
                  count: 1
                }]
              },
              quantity: 1
            },
            '0cef770b-add4-457b-bd07-240c8066bd2a': {
              templateId: 'CollectableCharacter:io',
              attributes: {
                collected: [{
                  variantTag: 'AISpawnerData.Type.IO.B',
                  contextTags: [],
                  properties: {
                    questsGiven: 0,
                    questsCompleted: 0,
                    encounterTypeFlags: 2
                  },
                  seenState: 'NewlyCompleted',
                  count: 1
                }]
              },
              quantity: 1
            }
          },
          stats: {
            attributes: {
              current_season: 25.00
            }
          },
          commandRevision: 20
        }
    }
}