const minnaLesson2 = {
  lessonNumber: 2,
  vocabularyList: [
    "これ", "それ", "あれ", "この", "その", "あの", "ほん", "じしょ", "ざっし",
    "しんぶん", "ノート", "てちょう", "めいし", "カード", "テレホンカード",
    "えんぴつ", "ボールペン", "シャープペンシル", "かぎ", "とけい", "かさ",
    "かばん", "カセットテープ", "テープレコーダー", "テレビ", "ラジオ",
    "カメラ", "コンピュータ", "じどうしゃ", "つくえ", "いす", "チョコレート",
    "コーヒー", "えいご", "にほんご", "～ご", "なん", "そう", "ちがいます",
    "そうですか", "あのう", "ほんのきもちです", "どうぞ", "どうも",
    "どうもありがとうございます", "これからおせわになります",
    "こちらこそよろしく"
  ],
  grammarTopics: [
    {
      topicNumber: 1,
      grammarPoint: "これ / それ / あれ は N です",
      structure: "これ/それ/あれ は N です",
      meaningBangla: "এটি / ওটি / ওটা হলো N",
      examples: [
        {
          japanese: "これ は ほん です。",
          romaji: "Kore wa hon desu.",
          bangla: "এটি একটি বই।",
          fromWebsite: true
        },
        {
          japanese: "それ は じしょ です。",
          romaji: "Sore wa jisho desu.",
          bangla: "ওটি একটি অভিধান।",
          fromWebsite: true
        },
        {
          japanese: "あれ は かばん です।",
          romaji: "Are wa kaban desu.",
          bangla: "ওটা একটি ব্যাগ।",
          fromWebsite: true
        },
        {
          japanese: "これ は ノート です。",
          romaji: "Kore wa nooto desu.",
          bangla: "এটি একটি নোটবুক।",
          fromWebsite: false
        },
        {
          japanese: "それ は テレホンカード です。",
          romaji: "Sore wa terehonkaado desu.",
          bangla: "ওটি একটি টেলিফোন কার্ড।",
          fromWebsite: false
        },
        {
          japanese: "あれ は じどうしゃ です।",
          romaji: "Are wa jidousha desu.",
          bangla: "ওটা একটি গাড়ি।",
          fromWebsite: false
        },
        {
          japanese: "これ は えんぴつ です।",
          romaji: "Kore wa enpitsu desu.",
          bangla: "এটি একটি পেন্সিল।",
          fromWebsite: false
        },
        {
          japanese: "それ は とけい です।",
          romaji: "Sore wa tokei desu.",
          bangla: "ওটি একটি ঘড়ি।",
          fromWebsite: false
        },
        {
          japanese: "あれ は カメラ です।",
          romaji: "Are wa kamera desu.",
          bangla: "ওটা একটি ক্যামেরা।",
          fromWebsite: false
        },
        {
          japanese: "これ は ざっし です。",
          romaji: "Kore wa zasshi desu.",
          bangla: "এটি একটি ম্যাগাজিন।",
          fromWebsite: false
        }
      ]
    },
    {
      topicNumber: 2,
      grammarPoint: "そう です / そうじゃありません",
      structure: "はい、そうです। / いいえ、そうじゃありません।",
      meaningBangla: "হ্যাঁ, তাই। / না, তা নয়।",
      examples: [
        {
          japanese: "それ は テレホンカード ですか।",
          romaji: "Sore wa terehonkaado desu ka.",
          bangla: "ওটি কি টেলিফোন কার্ড?",
          fromWebsite: true,
          answer: {
            japanese: "はい、そうです।",
            romaji: "Hai, sou desu.",
            bangla: "হ্যাঁ, তাই।"
          }
        },
        {
          japanese: "それ は テレホンカード ですか।",
          romaji: "Sore wa terehonkaado desu ka.",
          bangla: "ওটি কি টেলিফোন কার্ড?",
          fromWebsite: true,
          answer: {
            japanese: "いいえ、そうじゃありません।",
            romaji: "Iie, sou jaarimasen.",
            bangla: "না, তা নয়।"
          }
        },
        {
          japanese: "これ は にほんご の ほん ですか।",
          romaji: "Kore wa nihongo no hon desu ka.",
          bangla: "এটি কি জাপানি ভাষার বই?",
          fromWebsite: false,
          answer: {
            japanese: "はい、そうです。",
            romaji: "Hai, sou desu.",
            bangla: "হ্যাঁ, তাই।"
          }
        },
        {
          japanese: "それ は あなた の かさ ですか।",
          romaji: "Sore wa anata no kasa desu ka.",
          bangla: "ওটি কি আপনার ছাতা?",
          fromWebsite: false,
          answer: {
            japanese: "いいえ、そうじゃありません。",
            romaji: "Iie, sou jaarimasen.",
            bangla: "না, তা নয়।"
          }
        },
        {
          japanese: "あれ は てちょう ですか।",
          romaji: "Are wa techou desu ka.",
          bangla: "ওটা কি পকেট নোটবুক?",
          fromWebsite: false,
          answer: {
            japanese: "はい、そうです。",
            romaji: "Hai, sou desu.",
            bangla: "হ্যাঁ, তাই।"
          }
        },
        {
          japanese: "これ は コンピュータ の ざっし ですか।",
          romaji: "Kore wa konpyuuta no zasshi desu ka.",
          bangla: "এটি কি কম্পিউটারের ম্যাগাজিন?",
          fromWebsite: false,
          answer: {
            japanese: "いいえ、そうじゃありません。",
            romaji: "Iie, sou jaarimasen.",
            bangla: "না, তা নয়।"
          }
        },
        {
          japanese: "それ は シャープペンシル ですか।",
          romaji: "Sore wa shaapupenshiru desu ka.",
          bangla: "ওটি কি মেকানিক্যাল পেন্সিল?",
          fromWebsite: false,
          answer: {
            japanese: "はい、そうです。",
            romaji: "Hai, sou desu.",
            bangla: "হ্যাঁ, তাই।"
          }
        },
        {
          japanese: "あれ は カセットテープ ですか।",
          romaji: "Are wa kasetto teepu desu ka.",
          bangla: "ওটা কি ক্যাসেট টেপ?",
          fromWebsite: false,
          answer: {
            japanese: "いいえ、そうじゃありません。",
            romaji: "Iie, sou jaarimasen.",
            bangla: "না, তা নয়।"
          }
        },
        {
          japanese: "これ は テレビ ですか。",
          romaji: "Kore wa terebi desu ka.",
          bangla: "এটি কি টেলিভিশন?",
          fromWebsite: false,
          answer: {
            japanese: "はい、そうです。",
            romaji: "Hai, sou desu.",
            bangla: "হ্যাঁ, তাই।"
          }
        },
        {
          japanese: "それ は めいし ですか।",
          romaji: "Sore wa meishi desu ka.",
          bangla: "ওটি কি বিজনেস কার্ড?",
          fromWebsite: false,
          answer: {
            japanese: "いいえ、そうじゃありません。 カード です।",
            romaji: "Iie, sou jaarimasen. Kaado desu.",
            bangla: "না, তা নয়। এটি কার্ড।"
          }
        }
      ]
    },
    {
      topicNumber: 3,
      grammarPoint: "この/その/あの N1 は N2 の です",
      structure: "この/その/あの N1 は N2 の です",
      meaningBangla: "এই/ওই/ওই N1টি হলো N2-এর",
      examples: [
        {
          japanese: "この ノート は わたし の です।",
          romaji: "Kono nooto wa watashi no desu.",
          bangla: "এই নোটবুকটি আমার।",
          fromWebsite: true
        },
        {
          japanese: "その じしょ は さとうさん の です।",
          romaji: "Sono jisho wa Satou-san no desu.",
          bangla: "ওই অভিধানটি সাতো-সানের।",
          fromWebsite: true
        },
        {
          japanese: "あの めいし は カリナさん の です।",
          romaji: "Ano meishi wa Karina-san no desu.",
          bangla: "ওই বিজনেস কার্ডটি কারিনা-সানের।",
          fromWebsite: true
        },
        {
          japanese: "この かばん は たなかさん の です।",
          romaji: "Kono kaban wa Tanaka-san no desu.",
          bangla: "এই ব্যাগটি তানাকা-সানের।",
          fromWebsite: false
        },
        {
          japanese: "その とけい は わたし の です।",
          romaji: "Sono tokei wa watashi no desu.",
          bangla: "ওই ঘড়িটি আমার।",
          fromWebsite: false
        },
        {
          japanese: "あの かさ は やまださん の です।",
          romaji: "Ano kasa wa Yamada-san no desu.",
          bangla: "ওই ছাতাটি ইয়ামাদা-সানের।",
          fromWebsite: false
        },
        {
          japanese: "この いす は せんせい の です।",
          romaji: "Kono isu wa sensei no desu.",
          bangla: "এই চেয়ারটি শিক্ষকের।",
          fromWebsite: false
        },
        {
          japanese: "その ほん は にほんご の ほん です।",
          romaji: "Sono hon wa nihongo no hon desu.",
          bangla: "ওই বইটি জাপানি ভাষার বই।",
          fromWebsite: false
        },
        {
          japanese: "あの コンピュータ は さくらだいがく の です।",
          romaji: "Ano konpyuuta wa sakura daigaku no desu.",
          bangla: "ওই কম্পিউটারটি সাকুরা বিশ্ববিদ্যালয়ের।",
          fromWebsite: false
        },
        {
          japanese: "この テープレコーダー は ミラーさん の です।",
          romaji: "Kono teepurekoodaa wa Miraa-san no desu.",
          bangla: "এই টেপ রেকর্ডারটি মিলার-সানের।",
          fromWebsite: false
        }
      ]
    },
    {
      topicNumber: 4,
      grammarPoint: "これ/それ/あれ N1 ですか、N2 ですか",
      structure: "これ/それ/あれ は N1 ですか、N2 ですか",
      meaningBangla: "এটি/ওটি/ওটা কি N1 নাকি N2?",
      examples: [
        {
          japanese: "これ は ノート ですか、てちょう ですか।",
          romaji: "Kore wa nooto desu ka, techou desu ka.",
          bangla: "এটি কি নোটবুক নাকি পকেট নোটবুক?",
          fromWebsite: true,
          answer: {
            japanese: "ノート です।",
            romaji: "Nooto desu.",
            bangla: "এটি নোটবুক।"
          }
        },
        {
          japanese: "それ は えんぴつ ですか、ボールペン ですか।",
          romaji: "Sore wa enpitsu desu ka, boorupen desu ka.",
          bangla: "ওটি কি পেন্সিল নাকি বলপয়েন্ট কলম?",
          fromWebsite: true,
          answer: {
            japanese: "ボールペン です।",
            romaji: "Boorupen desu.",
            bangla: "এটি বলপয়েন্ট কলম।"
          }
        },
        {
          japanese: "あれ は しんぶん ですか、ざっし ですか।",
          romaji: "Are wa shinbun desu ka, zasshi desu ka.",
          bangla: "ওটা কি সংবাদপত্র নাকি ম্যাগাজিন?",
          fromWebsite: false,
          answer: {
            japanese: "しんぶん です।",
            romaji: "Shinbun desu.",
            bangla: "এটি সংবাদপত্র।"
          }
        },
        {
          japanese: "これ は コーヒー ですか、チョコレート ですか।",
          romaji: "Kore wa koohii desu ka, chokoreeto desu ka.",
          bangla: "এটি কি কফি নাকি চকলেট?",
          fromWebsite: false,
          answer: {
            japanese: "コーヒー です।",
            romaji: "Koohii desu.",
            bangla: "এটি কফি।"
          }
        },
        {
          japanese: "それ は カギ ですか、テレホンカード ですか।",
          romaji: "Sore wa kagi desu ka, terehonkaado desu ka.",
          bangla: "ওটি কি চাবি নাকি টেলিফোন কার্ড?",
          fromWebsite: false,
          answer: {
            japanese: "テレホンカード です।",
            romaji: "Terehonkaado desu.",
            bangla: "এটি টেলিফোন কার্ড।"
          }
        },
        {
          japanese: "あれ は テレビ ですか、ラジオ ですか।",
          romaji: "Are wa terebi desu ka, rajio desu ka.",
          bangla: "ওটা কি টেলিভিশন নাকি রেডিও?",
          fromWebsite: false,
          answer: {
            japanese: "テレビ です।",
            romaji: "Terebi desu.",
            bangla: "এটি টেলিভিশন।"
          }
        },
        {
          japanese: "これ は えいご の ほん ですか、にほんご の ほん ですか।",
          romaji: "Kore wa eigo no hon desu ka, nihongo no hon desu ka.",
          bangla: "এটি কি ইংরেজি ভাষার বই নাকি জাপানি ভাষার বই?",
          fromWebsite: false,
          answer: {
            japanese: "にほんご の ほん です।",
            romaji: "Nihongo no hon desu.",
            bangla: "এটি জাপানি ভাষার বই।"
          }
        },
        {
          japanese: "それ は あなた の かばん ですか、たなかさん の かばん ですか।",
          romaji: "Sore wa anata no kaban desu ka, Tanaka-san no kaban desu ka.",
          bangla: "ওটি কি আপনার ব্যাগ নাকি তানাকা-সানের ব্যাগ?",
          fromWebsite: false,
          answer: {
            japanese: "たなかさん の かばん です।",
            romaji: "Tanaka-san no kaban desu.",
            bangla: "এটি তানাকা-সানের ব্যাগ।"
          }
        },
        {
          japanese: "あれ は カメラ ですか、コンピュータ ですか।",
          romaji: "Are wa kamera desu ka, konpyuuta desu ka.",
          bangla: "ওটা কি ক্যামেরা নাকি কম্পিউটার?",
          fromWebsite: false,
          answer: {
            japanese: "カメラ です।",
            romaji: "Kamera desu.",
            bangla: "এটি ক্যামেরা।"
          }
        },
        {
          japanese: "これ は つくえ ですか、いす ですか।",
          romaji: "Kore wa tsukue desu ka, isu desu ka.",
          bangla: "এটি কি ডেস্ক নাকি চেয়ার?",
          fromWebsite: false,
          answer: {
            japanese: "つくえ です।",
            romaji: "Tsukue desu.",
            bangla: "এটি ডেস্ক।"
          }
        }
      ]
    },
    {
      topicNumber: 5,
      grammarPoint: "これ/それ/あれ は N1 の N2 です",
      structure: "これ/それ/あれ は N1 の N2 です",
      meaningBangla: "এটি/ওটি/ওটা হলো N1-এর N2",
      examples: [
        {
          japanese: "これ は コンピューター の ほん です।",
          romaji: "Kore wa konpyuutaa no hon desu.",
          bangla: "এটি কম্পিউটারের একটি বই।",
          fromWebsite: true
        },
        {
          japanese: "これ は わたし の ほん です।",
          romaji: "Kore wa watashi no hon desu.",
          bangla: "এটি আমার বই।",
          fromWebsite: true
        },
        {
          japanese: "これ は あなた の ほん ですか।",
          romaji: "Kore wa anata no hon desu ka.",
          bangla: "এটি কি আপনার বই?",
          fromWebsite: true,
          answer: {
            japanese: "はい、わたし の です。",
            romaji: "Hai, watashi no desu.",
            bangla: "হ্যাঁ, এটি আমার।"
          }
        },
        {
          japanese: "あれ は だれ の かさ ですか।",
          romaji: "Are wa dare no kasa desu ka.",
          bangla: "ওটা কার ছাতা?",
          fromWebsite: true,
          answer: {
            japanese: "さとうさん の です।",
            romaji: "Satou-san no desu.",
            bangla: "সাতো-সানের।"
          }
        },
        {
          japanese: "それ は にほんご の じしょ です。",
          romaji: "Sore wa nihongo no jisho desu.",
          bangla: "ওটি জাপানি ভাষার অভিধান।",
          fromWebsite: false
        },
        {
          japanese: "あれ は さくらだいがく の コンピュータ です。",
          romaji: "Are wa sakura daigaku no konpyuuta desu.",
          bangla: "ওটা সাকুরা বিশ্ববিদ্যালয়ের কম্পিউটার।",
          fromWebsite: false
        },
        {
          japanese: "これ は えいご の ざっし です。",
          romaji: "Kore wa eigo no zasshi desu.",
          bangla: "এটি ইংরেজি ভাষার ম্যাগাজিন।",
          fromWebsite: false
        },
        {
          japanese: "その カメラ は ワンさん の です。",
          romaji: "Sono kamera wa Wan-san no desu.",
          bangla: "ওই ক্যামেরাটি ওয়ান-সানের।",
          fromWebsite: false
        },
        {
          japanese: "あの てちょう は だれ の ですか।",
          romaji: "Ano techou wa dare no desu ka.",
          bangla: "ওই পকেট নোটবুকটি কার?",
          fromWebsite: false,
          answer: {
            japanese: "わたし の です।",
            romaji: "Watashi no desu.",
            bangla: "আমার।"
          }
        },
        {
          japanese: "この かぎ は じどうしゃ の かぎ です।",
          romaji: "Kono kagi wa jidousha no kagi desu.",
          bangla: "এই চাবিটি গাড়ির চাবি।",
          fromWebsite: false
        }
      ]
    },
    {
      topicNumber: 6,
      grammarPoint: "そうですか",
      structure: "そうですか",
      meaningBangla: "ওহ তাই নাকি! / সত্যিই!",
      examples: [
        {
          japanese: "A: この かさ は あわやさん の ですか। B: いいえ、あわやさん じゃありません、さとうさん です। A: そうですか।",
          romaji: "A: Kono kasa wa Awaya-san no desu ka. B: Iie, Awaya-san jaarimasen, Satou-san desu. A: Sou desu ka.",
          bangla: "A: এই ছাতাটি কি আওয়ায়া-সানের? B: না, আওয়ায়া-সানের নয়, সাতো-সানের। A: ওহ তাই নাকি!",
          fromWebsite: true
        },
        {
          japanese: "A: これ は コンピュータ の ざっし です। B: そうですか।",
          romaji: "A: Kore wa konpyuuta no zasshi desu. B: Sou desu ka.",
          bangla: "A: এটি কম্পিউটারের ম্যাগাজিন। B: ওহ তাই নাকি!",
          fromWebsite: false
        },
        {
          japanese: "A: それ は ミラーさん の とけい です। B: そうですか。",
          romaji: "A: Sore wa Miraa-san no tokei desu. B: Sou desu ka.",
          bangla: "A: ওটি মিলার-সানের ঘড়ি। B: ওহ তাই নাকি!",
          fromWebsite: false
        },
        {
          japanese: "A: あの かばん は たなかさん の じゃありません。 B: そうですか।",
          romaji: "A: Ano kaban wa Tanaka-san no jaarimasen. B: Sou desu ka.",
          bangla: "A: ওই ব্যাগটি তানাকা-সানের নয়। B: ওহ তাই নাকি!",
          fromWebsite: false
        },
        {
          japanese: "A: この しんぶん は わたし の です। B: そうですか。",
          romaji: "A: Kono shinbun wa watashi no desu. B: Sou desu ka.",
          bangla: "A: এই সংবাদপত্রটি আমার। B: ওহ তাই নাকি!",
          fromWebsite: false
        }
      ]
    }
  ],
  notes: [
    "「そうですか」 ব্যবহৃত হয় যখন স্পিকার নতুন কিছু জানতে পারে এবং সেই তথ্যের প্রতি তার মনোভাব প্রকাশ করতে চায়।",
    "「ちがいます」 অর্থ 'না, এটি তা নয়' বা 'আপনি ভুল বলেছেন'।"
  ]
};
