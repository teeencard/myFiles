const minnaLesson4 = {
  lessonNumber: 4,
  vocabularyList: [
    "おきます", "ねます", "はたらきます", "やすみます", "べんきょうします",
    "おわります", "デパート", "ぎんこう", "ゆうびんきょく", "としょかん",
    "びじゅつかん", "でんわばんごう", "なんばん", "いま", "～じ", "～ふん",
    "はん", "なんじ", "なんぷん", "ごぜん", "ごご", "あさ", "ひる", "ばん",
    "よる", "おととい", "きのう", "きょう", "あした", "あさって", "けさ",
    "こんばん", "そちら", "やすみ", "ひるやすみ", "まいあさ", "まいばん",
    "まいにち", "たいへんですね", "ばんごうあんない", "おといあわせのばんご",
    "をおねがいします", "かしこまりました", "げつようび", "かようび",
    "すいようび", "もくようび", "きんようび", "どようび", "にちようび",
    "なんようび", "～から", "～まで", "～と～", "ペキン", "ロンドン",
    "バンコク", "ロサンゼルス", "えーと"
  ],
  grammarTopics: [
    {
      topicNumber: 1,
      grammarPoint: "いま(は) なんじ / なんぷん ですか",
      structure: "いま なんじ/なんぷん ですか",
      meaningBangla: "এখন কয়টা বাজে? / কত মিনিট?",
      examples: [
        {
          japanese: "いま なんじ ですか।",
          romaji: "Ima nanji desu ka.",
          bangla: "এখন কয়টা বাজে?",
          fromWebsite: true,
          answer: {
            japanese: "はちじ さんじゅっぷん (はちじはん) です。",
            romaji: "Hachiji sanjuppun (hachiji han) desu.",
            bangla: "সকাল ৮টা ৩০ মিনিট (সাড়ে ৮টা)।"
          }
        },
        {
          japanese: "いま なんぷん ですか।",
          romaji: "Ima nanpun desu ka.",
          bangla: "এখন কত মিনিট?",
          fromWebsite: false,
          answer: {
            japanese: "ごじ じゅうごふん です。",
            romaji: "Goji juugofun desu.",
            bangla: "৫টা ১৫ মিনিট।"
          }
        },
        {
          japanese: "いま ごぜん なんじ ですか।",
          romaji: "Ima gozen nanji desu ka.",
          bangla: "এখন সকাল কয়টা বাজে?",
          fromWebsite: false,
          answer: {
            japanese: "くじ です।",
            romaji: "Kuji desu.",
            bangla: "সকাল ৯টা।"
          }
        },
        {
          japanese: "いま ごご なんじ ですか।",
          romaji: "Ima gogo nanji desu ka.",
          bangla: "এখন বিকেল কয়টা বাজে?",
          fromWebsite: false,
          answer: {
            japanese: "ろくじ はん です।",
            romaji: "Rokuji han desu.",
            bangla: "সন্ধ্যা সাড়ে ৬টা।"
          }
        },
        {
          japanese: "いま なんじ なんぷん ですか।",
          romaji: "Ima nanji nanpun desu ka.",
          bangla: "এখন কয়টা বাজে এবং কত মিনিট?",
          fromWebsite: false,
          answer: {
            japanese: "いちじ よんじゅうごふん です।",
            romaji: "Ichiji yonjuugofun desu.",
            bangla: "১টা ৪৫ মিনিট।"
          }
        },
        {
          japanese: "にほん は いま なんじ ですか।",
          romaji: "Nihon wa ima nanji desu ka.",
          bangla: "জাপানে এখন কয়টা বাজে?",
          fromWebsite: false,
          answer: {
            japanese: "ごぜん さんじ です।",
            romaji: "Gozen sanji desu.",
            bangla: "ভোর ৩টা।"
          }
        },
        {
          japanese: "ロンドン は いま なんじ ですか।",
          romaji: "Rondon wa ima nanji desu ka.",
          bangla: "লন্ডনে এখন কয়টা বাজে?",
          fromWebsite: false,
          answer: {
            japanese: "ごご はちじ です।",
            romaji: "Gogo hachiji desu.",
            bangla: "রাত ৮টা।"
          }
        },
        {
          japanese: "あした の いま なんじ ですか।",
          romaji: "Ashita no ima nanji desu ka.",
          bangla: "আগামীকাল এখন সময় কত?",
          fromWebsite: false,
          answer: {
            japanese: "くじ はん です。",
            romaji: "Kuji han desu.",
            bangla: "সাড়ে ৯টা।"
          }
        },
        {
          japanese: "いま なんようび ですか।",
          romaji: "Ima nanyoubi desu ka.",
          bangla: "আজ কী বার?",
          fromWebsite: false,
          answer: {
            japanese: "げつようび です।",
            romaji: "Getsuyoubi desu.",
            bangla: "সোমবার।"
          }
        },
        {
          japanese: "いま なんじ から なんじ まで です か।",
          romaji: "Ima nanji kara nanji made desu ka.",
          bangla: "এখন কটা থেকে কটা পর্যন্ত?",
          fromWebsite: false,
          answer: {
            japanese: "くじ から ごじ まで です।",
            romaji: "Kuji kara goji made desu.",
            bangla: "সকাল ৯টা থেকে বিকেল ৫টা পর্যন্ত।"
          }
        }
      ]
    },
    {
      topicNumber: 2,
      grammarPoint: "N (location) は いま なんじ ですか",
      structure: "N は いま なんじ ですか",
      meaningBangla: "এখন N-তে কয়টা বাজে?",
      examples: [
        {
          japanese: "ニューヨーク は いま なんじ ですか।",
          romaji: "Nyuuyooku wa ima nanji desu ka.",
          bangla: "নিউইয়র্কে এখন কয়টা বাজে?",
          fromWebsite: true,
          answer: {
            japanese: "ごぜん よんじ はん です。",
            romaji: "Gozen yoji han desu.",
            bangla: "ভোর সাড়ে ৪টা।"
          }
        },
        {
          japanese: "ペキン は いま なんじ ですか।",
          romaji: "Pekin wa ima nanji desu ka.",
          bangla: "বেইজিংয়ে এখন কয়টা বাজে?",
          fromWebsite: false,
          answer: {
            japanese: "ごご いちじ です।",
            romaji: "Gogo ichiji desu.",
            bangla: "বিকেল ১টা।"
          }
        },
        {
          japanese: "ロサンゼルス は いま なんじ ですか।",
          romaji: "Rosanzerusu wa ima nanji desu ka.",
          bangla: "লস অ্যাঞ্জেলেসে এখন কয়টা বাজে?",
          fromWebsite: false,
          answer: {
            japanese: "ごご さんじ じゅうごふん です。",
            romaji: "Gogo sanji juugofun desu.",
            bangla: "বিকেল ৩টা ১৫ মিনিট।"
          }
        },
        {
          japanese: "にほん は いま なんじ ですか।",
          romaji: "Nihon wa ima nanji desu ka.",
          bangla: "জাপানে এখন কয়টা বাজে?",
          fromWebsite: false,
          answer: {
            japanese: "ごぜん はちじ です।",
            romaji: "Gozen hachiji desu.",
            bangla: "সকাল ৮টা।"
          }
        },
        {
          japanese: "バンコク は いま なんじ ですか।",
          romaji: "Bankoku wa ima nanji desu ka.",
          bangla: "ব্যাংককে এখন কয়টা বাজে?",
          fromWebsite: false,
          answer: {
            japanese: "ごご しちじ です।",
            romaji: "Gogo shichiji desu.",
            bangla: "রাত ৭টা।"
          }
        }
      ]
    },
    {
      topicNumber: 3,
      grammarPoint: "Verb ます (Present/Future affirmative)",
      structure: "Vます",
      meaningBangla: "ক্রিয়া (বর্তমান/ভবিষ্যৎ, ইতিবাচক)",
      examples: [
        {
          japanese: "まいにち じゅういちじ に ねます।",
          romaji: "Mainichi juuichiji ni nemasu.",
          bangla: "আমি প্রতিদিন রাত ১১টায় ঘুমাই।",
          fromWebsite: true
        },
        {
          japanese: "まいあさ ろくじ に おきます।",
          romaji: "Maiasa rokuji ni okimasu.",
          bangla: "আমি প্রতিদিন সকাল ৬টায় উঠি।",
          fromWebsite: false
        },
        {
          japanese: "まいばん べんきょうします।",
          romaji: "Maiban benkyoushimasu.",
          bangla: "আমি প্রতিদিন রাতে পড়ি।",
          fromWebsite: false
        },
        {
          japanese: "きょう デパート で はたらきます।",
          romaji: "Kyou depaato de hatarakimasu.",
          bangla: "আমি আজ ডিপার্টমেন্ট স্টোরে কাজ করি।",
          fromWebsite: false
        },
        {
          japanese: "ひるやすみ に ぎんこう で やすみます।",
          romaji: "Hiruyasumi ni ginkou de yasumimasu.",
          bangla: "আমি লাঞ্চ ব্রেকে ব্যাংকে বিশ্রাম করি।",
          fromWebsite: false
        },
        {
          japanese: "ごご さんじ に しごと が おわります।",
          romaji: "Gogo sanji ni shigoto ga owarimasu.",
          bangla: "আমার কাজ বিকেল ৩টায় শেষ হয়।",
          fromWebsite: false
        },
        {
          japanese: "まいにち としょかん で べんきょうします।",
          romaji: "Mainichi toshokan de benkyoushimasu.",
          bangla: "আমি প্রতিদিন লাইব্রেরিতে পড়ি।",
          fromWebsite: false
        },
        {
          japanese: "あさ はちじ に ゆうびんきょく に いきます।",
          romaji: "Asa hachiji ni yuubinkyoku ni ikimasu.",
          bangla: "আমি সকাল ৮টায় পোস্ট অফিসে যাই।",
          fromWebsite: false
        },
        {
          japanese: "こんばん びじゅつかん で はたらきます।",
          romaji: "Konban bijutsukan de hatarakimasu.",
          bangla: "আমি আজ সন্ধ্যায় আর্ট মিউজিয়ামে কাজ করি।",
          fromWebsite: false
        },
        {
          japanese: "どようび に おきます。",
          romaji: "Doyoubi ni okimasu.",
          bangla: "আমি শনিবারে উঠি।",
          fromWebsite: false
        }
      ]
    },
    {
      topicNumber: 4,
      grammarPoint: "Tense of verbs (Present, Past, Affirmative, Negative)",
      structure: "ます (present/future affirmative) | ません (present/future negative) | ました (past affirmative) | ませんでした (past negative)",
      meaningBangla: "ক্রিয়ার কাল (বর্তমান/অতীত, ইতিবাচক/নেতিবাচক)",
      examples: [
        {
          japanese: "まいばん べんきょうします।",
          romaji: "Maiban benkyoushimasu.",
          bangla: "আমি প্রতিদিন রাতে পড়ি।",
          fromWebsite: true
        },
        {
          japanese: "あした べんきょうしません।",
          romaji: "Ashita benkyoushimasen.",
          bangla: "আমি আগামীকাল পড়ব না।",
          fromWebsite: true
        },
        {
          japanese: "きのう べんきょうしました।",
          romaji: "Kinou benkyoushimashita.",
          bangla: "আমি গতকাল পড়লাম।",
          fromWebsite: true
        },
        {
          japanese: "おととい べんきょうしませんでした।",
          romaji: "Ototoi benkyoushimasen deshita.",
          bangla: "আমি পরশু পড়িনি।",
          fromWebsite: true
        },
        {
          japanese: "まいあさ おきます।",
          romaji: "Maiasa okimasu.",
          bangla: "আমি প্রতিদিন সকালে উঠি।",
          fromWebsite: false
        },
        {
          japanese: "けさ おきませんでした।",
          romaji: "Kesa okimasen deshita.",
          bangla: "আমি আজ সকালে উঠিনি।",
          fromWebsite: false
        },
        {
          japanese: "きょう はたらきます।",
          romaji: "Kyou hatarakimasu.",
          bangla: "আমি আজ কাজ করি।",
          fromWebsite: false
        },
        {
          japanese: "きのう はたらきませんでした।",
          romaji: "Kinou hatarakimasen deshita.",
          bangla: "আমি গতকাল কাজ করিনি।",
          fromWebsite: false
        },
        {
          japanese: "あした やすみます।",
          romaji: "Ashita yasumimasu.",
          bangla: "আমি আগামীকাল ছুটি নেব।",
          fromWebsite: false
        },
        {
          japanese: "おととい やすみませんでした।",
          romaji: "Ototoi yasumimasen deshita.",
          bangla: "আমি পরশু ছুটি নেইনি।",
          fromWebsite: false
        }
      ]
    },
    {
      topicNumber: 5,
      grammarPoint: "N (time) に + Vます",
      structure: "Time に Verbます",
      meaningBangla: "নির্দিষ্ট সময়ে কিছু করা",
      notes: "সংখ্যাবাচক সময়ের পরে に বসে। সপ্তাহের দিনের নামের পরে য় বসাতে হবে বা না বসাতে পারে।",
      examples: [
        {
          japanese: "わたし は じゅうにじ に たべます।",
          romaji: "Watashi wa juuniji ni tabemasu.",
          bangla: "আমি ১২টায় খাই।",
          fromWebsite: true
        },
        {
          japanese: "どようび べんきょうしません।",
          romaji: "Doyoubi benkyoushimasen.",
          bangla: "আমি সাধারণত শনিবারে পড়ি না।",
          fromWebsite: true
        },
        {
          japanese: "まいあさ ろくじ に おきます।",
          romaji: "Maiasa rokuji ni okimasu.",
          bangla: "আমি প্রতিদিন সকাল ৬টায় উঠি।",
          fromWebsite: false
        },
        {
          japanese: "まいばん じゅういちじ に ねます।",
          romaji: "Maiban juuichiji ni nemasu.",
          bangla: "আমি প্রতিদিন রাত ১১টায় ঘুমাই।",
          fromWebsite: false
        },
        {
          japanese: "にちようび やすみます।",
          romaji: "Nichiyoubi yasumimasu.",
          bangla: "আমি রবিবারে ছুটি নিই।",
          fromWebsite: false
        },
        {
          japanese: "ごご さんじ に しごと が おわります।",
          romaji: "Gogo sanji ni shigoto ga owarimasu.",
          bangla: "আমার কাজ বিকেল ৩টায় শেষ হয়।",
          fromWebsite: false
        },
        {
          japanese: "ひるやすみ に ぎんこう に いきます।",
          romaji: "Hiruyasumi ni ginkou ni ikimasu.",
          bangla: "আমি লাঞ্চ ব্রেকে ব্যাংকে যাই।",
          fromWebsite: false
        },
        {
          japanese: "げつようび から きんようび まで はたらきます।",
          romaji: "Getsuyoubi kara kin'youbi made hatarakimasu.",
          bangla: "আমি সোমবার থেকে শুক্রবার কাজ করি।",
          fromWebsite: false
        },
        {
          japanese: "あさ はちじ に ゆうびんきょく に いきます।",
          romaji: "Asa hachiji ni yuubinkyoku ni ikimasu.",
          bangla: "আমি সকাল ৮টায় পোস্ট অফিসে যাই।",
          fromWebsite: false
        },
        {
          japanese: "ごご よじ に ともだち と あいます।",
          romaji: "Gogo yoji ni tomodachi to aimasu.",
          bangla: "আমি বিকেল ৪টায় বন্ধুর সাথে দেখা করি।",
          fromWebsite: false
        }
      ]
    },
    {
      topicNumber: 6,
      grammarPoint: "～ から ～ まで",
      structure: "Start から End まで",
      meaningBangla: "শুরু থেকে শেষ পর্যন্ত",
      examples: [
        {
          japanese: "はちじ から じゅういちじ まで べんきょうします।",
          romaji: "Hachiji kara juuichiji made benkyoushimasu.",
          bangla: "আমি সকাল ৮টা থেকে ১১টা পর্যন্ত পড়ি।",
          fromWebsite: true
        },
        {
          japanese: "まいにち しちじ から はちじ まで ほん を よみます।",
          romaji: "Mainichi shichiji kara hachiji made hon o yomimasu.",
          bangla: "আমি প্রতিদিন ৭টা থেকে ৮টা পর্যন্ত বই পড়ি।",
          fromWebsite: true
        },
        {
          japanese: "くじ から ごじ まで はたらきます।",
          romaji: "Kuji kara goji made hatarakimasu.",
          bangla: "আমি সকাল ৯টা থেকে বিকেল ৫টা পর্যন্ত কাজ করি।",
          fromWebsite: false
        },
        {
          japanese: "げつようび から きんようび まで べんきょうします।",
          romaji: "Getsuyoubi kara kin'youbi made benkyoushimasu.",
          bangla: "আমি সোমবার থেকে শুক্রবার পড়ি।",
          fromWebsite: false
        },
        {
          japanese: "あさ はちじ から ひる じゅうにじ まで デパート で はたらきます।",
          romaji: "Asa hachiji kara hiru juuniji made depaato de hatarakimasu.",
          bangla: "আমি সকাল ৮টা থেকে দুপুর ১২টা পর্যন্ত ডিপার্টমেন্ট স্টোরে কাজ করি।",
          fromWebsite: false
        },
        {
          japanese: "ゆうびんきょく は くじ から ごじ まで です।",
          romaji: "Yuubinkyoku wa kuji kara goji made desu.",
          bangla: "পোস্ট অফিস সকাল ৯টা থেকে বিকেল ৫টা পর্যন্ত খোলা থাকে।",
          fromWebsite: false
        },
        {
          japanese: "ぎんこう は くじ から さんじ まで です।",
          romaji: "Ginkou wa kuji kara sanji made desu.",
          bangla: "ব্যাংক সকাল ৯টা থেকে বিকেল ৩টা পর্যন্ত খোলা থাকে।",
          fromWebsite: false
        },
        {
          japanese: "としょかん は じゅうじ から よじ まで です।",
          romaji: "Toshokan wa juuji kara yoji made desu.",
          bangla: "লাইব্রেরি সকাল ১০টা থেকে বিকেল ৪টা পর্যন্ত খোলা থাকে।",
          fromWebsite: false
        },
        {
          japanese: "にほん の かいしゃ は さんじ から ごご じゅういちじ まで はたらきます।",
          romaji: "Nihon no kaisha wa sanji kara gogo juuichiji made hatarakimasu.",
          bangla: "জাপানি কোম্পানি সকাল ৯টা থেকে রাত ১১টা পর্যন্ত কাজ করে।",
          fromWebsite: false
        },
        {
          japanese: "ロサンゼルス まで なんじ から なんじ まで ひこうき です か।",
          romaji: "Rosanzerusu made nanji kara nanji made hikouki desu ka.",
          bangla: "লস অ্যাঞ্জেলেস পর্যন্ত কটা থেকে কটা বিমান?",
          fromWebsite: false
        }
      ]
    },
    {
      topicNumber: 7,
      grammarPoint: "N1 と N2",
      structure: "N1 と N2",
      meaningBangla: "N1 এবং N2",
      examples: [
        {
          japanese: "この ほん と あの ノート は わたし の です।",
          romaji: "Kono hon to ano nooto wa watashi no desu.",
          bangla: "এই বইটি এবং ওই নোটবুকটি আমার।",
          fromWebsite: true
        },
        {
          japanese: "ぎんこう と ゆうびんきょく は どこ です か।",
          romaji: "Ginkou to yuubinkyoku wa doko desu ka.",
          bangla: "ব্যাংক এবং পোস্ট অফিস কোথায়?",
          fromWebsite: false
        },
        {
          japanese: "まいあさ パン と コーヒー を たべます।",
          romaji: "Maiasa pan to koohii o tabemasu.",
          bangla: "আমি প্রতিদিন সকালে পাউরুটি ও কফি খাই।",
          fromWebsite: false
        },
        {
          japanese: "きょう と あした は やすみ です।",
          romaji: "Kyou to ashita wa yasumi desu.",
          bangla: "আজ এবং আগামীকাল ছুটি।",
          fromWebsite: false
        },
        {
          japanese: "デパート と びじゅつかん の あいだ に こうえん が あります।",
          romaji: "Depaato to bijutsukan no aida ni kouen ga arimasu.",
          bangla: "ডিপার্টমেন্ট স্টোর ও আর্ট মিউজিয়ামের মাঝে একটি পার্ক আছে।",
          fromWebsite: false
        },
        {
          japanese: "ペキン と ロンドン は とても とおい です।",
          romaji: "Pekin to Rondon wa totemo tooi desu.",
          bangla: "বেইজিং ও লন্ডন অনেক দূরে।",
          fromWebsite: false
        },
        {
          japanese: "にほんご と えいご を べんきょうします。",
          romaji: "Nihongo to eigo o benkyoushimasu.",
          bangla: "আমি জাপানি ও ইংরেজি পড়ি।",
          fromWebsite: false
        },
        {
          japanese: "バンコク と ロサンゼルス は いま なんじ です か।",
          romaji: "Bankoku to Rosanzerusu wa ima nanji desu ka.",
          bangla: "ব্যাংকক ও লস অ্যাঞ্জেলেসে এখন কয়টা বাজে?",
          fromWebsite: false
        },
        {
          japanese: "まいばん てれび と ラジオ を ききます।",
          romaji: "Maiban terebi to rajio o kikimasu.",
          bangla: "আমি প্রতিদিন রাতে টিভি ও রেডিও শুনি।",
          fromWebsite: false
        },
        {
          japanese: "あさって の げつようび と かようび は やすみ です।",
          romaji: "Asatte no getsuyoubi to kayoubi wa yasumi desu.",
          bangla: "আগামী পরশু সোমবার ও মঙ্গলবার ছুটি।",
          fromWebsite: false
        }
      ]
    },
    {
      topicNumber: 8,
      grammarPoint: "～ ね (sentence ending particle)",
      structure: "Sentence + ね",
      meaningBangla: "… তাই না? / …不是吗? (শ্রোতার সম্মতি বা সহমত জানতে চাওয়া)",
      examples: [
        {
          japanese: "この ケーキ は おいしい です ね।",
          romaji: "Kono keeki wa oishii desu ne.",
          bangla: "এই কেকটি সুস্বাদু, তাই না?",
          fromWebsite: true
        },
        {
          japanese: "きょう は あつい です ね।",
          romaji: "Kyou wa atsui desu ne.",
          bangla: "আজ গরম, তাই না?",
          fromWebsite: false
        },
        {
          japanese: "まいにち たいへん です ね।",
          romaji: "Mainichi taihen desu ne.",
          bangla: "প্রতিদিন খুব কষ্ট, তাই না?",
          fromWebsite: false
        },
        {
          japanese: "ロンドン の しょくどう は ここ です ね।",
          romaji: "Rondon no shokudou wa koko desu ne.",
          bangla: "লন্ডনের ক্যান্টিনটি এখানেই, তাই না?",
          fromWebsite: false
        },
        {
          japanese: "あした は どようび です ね।",
          romaji: "Ashita wa doyoubi desu ne.",
          bangla: "আগামীকাল শনিবার, তাই না?",
          fromWebsite: false
        },
        {
          japanese: "この でんわばんごう は なんばん です か ね।",
          romaji: "Kono denwa bangou wa nanban desu ka ne.",
          bangla: "এই ফোন নম্বরটি কত, তাই না?",
          fromWebsite: false
        },
        {
          japanese: "けさ は よく ねました ね।",
          romaji: "Kesa wa yoku nemashita ne.",
          bangla: "আজ সকালে ভালো ঘুমিয়েছ, তাই না?",
          fromWebsite: false
        }
      ]
    }
  ],
  notes: [
    "「じ は ん」: সময়ের অর্ধেক (৩০ মিনিট) বোঝাতে 'হান' ব্যবহার করা হয়। যেমন: はちじはん (সাড়ে ৮টা)",
    "「に」 কণাটি শুধুমাত্র সংখ্যাবাচক সময়ের পরে বসে। সপ্তাহের দিনের নামের (げつようび ইত্যাদি) পরে 'に' বসাতে হবে বা না বসাতে পারে।",
    "「～から～まで」: সময় বা স্থানের শুরু ও শেষ বোঝাতে। এরা একা একাও ব্যবহার করা যায়।",
    "「～ね」 বাক্যের শেষে বসে। স্পিকার তার অনুভূতি প্রকাশ করতে বা শ্রোতার সম্মতি জানতে চাইলে এটি ব্যবহার করে।"
  ]
};
