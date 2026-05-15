const minnaLesson1 = {
  lessonNumber: 1,
  vocabularyList: [
    "わたし", "わたしたち", "あなた", "あのひと", "あのかた", "みなさん",
    "ふじだいがく", "～さん", "～ちゃん", "～くん", "～じん", "せんせい",
    "きょうし", "がくせい", "かいしゃいん", "～しゃいん", "ぎんこういん",
    "いしゃ", "けんきゅうしゃ", "エンジニア", "だいがく", "びょういん",
    "でんき", "だれ", "どなた", "～さい", "なんさい", "おいくつ",
    "はい", "いいえ", "しつれいですが", "おなまえは？", "はじめまして",
    "どうぞよろしくおねがいします", "こちらは～さんです", "～からきました",
    "アメリカ", "イギリス", "インド", "インドネシア", "かんこく", "タイ",
    "ちゅうごく", "ドイツ", "にほん", "フランス", "ブラジル", "さくらだいがく"
  ],
  grammarTopics: [
    {
      topicNumber: 1,
      grammarPoint: "N1 は N2 です",
      structure: "N1 は N2 です",
      meaningBangla: "N1 হলো N2",
      examples: [
        {
          japanese: "わたし は がくせい です。",
          romaji: "Watashi wa gakusei desu.",
          bangla: "আমি ছাত্র।",
          fromWebsite: true
        },
        {
          japanese: "さとさん は せんせい です。",
          romaji: "Sato-san wa sensei desu.",
          bangla: "সাতো-সান শিক্ষক।",
          fromWebsite: true
        },
        {
          japanese: "ミラーさん は ふじだいがく の がくせい です。",
          romaji: "Miraa-san wa fuji daigaku no gakusei desu.",
          bangla: "মিলার ফুজি বিশ্ববিদ্যালয়ের ছাত্র।",
          fromWebsite: false
        },
        {
          japanese: "あの かた は いしゃ です।",
          romaji: "Ano kata wa isha desu.",
          bangla: "ওই ব্যক্তিটি ডাক্তার।",
          fromWebsite: false
        },
        {
          japanese: "わたしたち は かいしゃいん です।",
          romaji: "Watashitachi wa kaishain desu.",
          bangla: "আমরা অফিস কর্মী।",
          fromWebsite: false
        },
        {
          japanese: "たなかさん は けんきゅうしゃ です।",
          romaji: "Tanaka-san wa kenkyuusha desu.",
          bangla: "তানাকা-সান গবেষক।",
          fromWebsite: false
        },
        {
          japanese: "こちら は ワンさん です।",
          romaji: "Kochira wa Wan-san desu.",
          bangla: "এই ব্যক্তিটি ওয়ান-সান।",
          fromWebsite: false
        },
        {
          japanese: "さくらだいがく の せんせい は やまださん です।",
          romaji: "Sakura daigaku no sensei wa Yamada-san desu.",
          bangla: "সাকুরা বিশ্ববিদ্যালয়ের শিক্ষক ইয়ামাদা-সান।",
          fromWebsite: false
        },
        {
          japanese: "この かた は ぎんこういん です।",
          romaji: "Kono kata wa ginkouin desu.",
          bangla: "এই ব্যক্তিটি ব্যাংক কর্মী।",
          fromWebsite: false
        },
        {
          japanese: "リンさん は エンジニア です।",
          romaji: "Rin-san wa enjinia desu.",
          bangla: "লিন-সান ইঞ্জিনিয়ার।",
          fromWebsite: false
        }
      ]
    },
    {
      topicNumber: 2,
      grammarPoint: "N1 は N2 じゃありません",
      structure: "N1 は N2 じゃ ありません",
      meaningBangla: "N1 N2 নয়",
      examples: [
        {
          japanese: "わたし は せんせい じゃありません।",
          romaji: "Watashi wa sensei jaarimasen.",
          bangla: "আমি শিক্ষক নই।",
          fromWebsite: true
        },
        {
          japanese: "ワンさん は エンジニア じゃありません।",
          romaji: "Wan-san wa enjinia jaarimasen.",
          bangla: "ওয়ান-সান ইঞ্জিনিয়ার নন।",
          fromWebsite: true
        },
        {
          japanese: "あなた は がくせい じゃありません।",
          romaji: "Anata wa gakusei jaarimasen.",
          bangla: "আপনি ছাত্র নন।",
          fromWebsite: false
        },
        {
          japanese: "あの ひと は かいしゃいん じゃありません।",
          romaji: "Ano hito wa kaishain jaarimasen.",
          bangla: "ওই ব্যক্তিটি অফিস কর্মী নন।",
          fromWebsite: false
        },
        {
          japanese: "わたし は ぎんこういん じゃありません।",
          romaji: "Watashi wa ginkouin jaarimasen.",
          bangla: "আমি ব্যাংক কর্মী নই।",
          fromWebsite: false
        },
        {
          japanese: "ミラーさん は ふじだいがく の せんせい じゃありません।",
          romaji: "Miraa-san wa fuji daigaku no sensei jaarimasen.",
          bangla: "মিলার ফুজি বিশ্ববিদ্যালয়ের শিক্ষক নন।",
          fromWebsite: false
        },
        {
          japanese: "この かた は いしゃ じゃありません।",
          romaji: "Kono kata wa isha jaarimasen.",
          bangla: "এই ব্যক্তিটি ডাক্তার নন।",
          fromWebsite: false
        },
        {
          japanese: "たなかさん は けんきゅうしゃ じゃありません।",
          romaji: "Tanaka-san wa kenkyuusha jaarimasen.",
          bangla: "তানাকা-সান গবেষক নন।",
          fromWebsite: false
        },
        {
          japanese: "さくらだいがく の がくせい は わたし じゃありません।",
          romaji: "Sakura daigaku no gakusei wa watashi jaarimasen.",
          bangla: "সাকুরা বিশ্ববিদ্যালয়ের ছাত্র আমি নই।",
          fromWebsite: false
        },
        {
          japanese: "リンさん は にほんじん じゃありません。 ちゅうごくじん です।",
          romaji: "Rin-san wa nihonjin jaarimasen. Chuugokujin desu.",
          bangla: "লিন-সান জাপানি নন। চাইনিজ।",
          fromWebsite: false
        }
      ]
    },
    {
      topicNumber: 3,
      grammarPoint: "N1 は N2 ですか",
      structure: "N1 は N2 ですか",
      meaningBangla: "N1 কি N2?",
      answers: {
        yes: "はい、N2 です。",
        no: "いいえ、N2 じゃありません / ではありません。"
      },
      examples: [
        {
          japanese: "あなた は さとさん ですか।",
          romaji: "Anata wa Sato-san desu ka.",
          bangla: "আপনি কি সাতো-সান?",
          fromWebsite: true,
          answer: {
            japanese: "はい、さと です。",
            romaji: "Hai, Sato desu.",
            bangla: "হ্যাঁ, আমি সাতো।"
          }
        },
        {
          japanese: "あの ひと は かいしゃいん ですか।",
          romaji: "Ano hito wa kaishain desu ka.",
          bangla: "ওই ব্যক্তিটি কি অফিস কর্মী?",
          fromWebsite: true,
          answer: {
            japanese: "いいえ、かいしゃいん じゃありません।",
            romaji: "Iie, kaishain jaarimasen.",
            bangla: "না, অফিস কর্মী নন।"
          }
        },
        {
          japanese: "ミラーさん は がくせい ですか।",
          romaji: "Miraa-san wa gakusei desu ka.",
          bangla: "মিলার কি ছাত্র?",
          fromWebsite: false,
          answer: {
            japanese: "はい、がくせい です।",
            romaji: "Hai, gakusei desu.",
            bangla: "হ্যাঁ, ছাত্র।"
          }
        },
        {
          japanese: "おなまえ は ワンさん ですか।",
          romaji: "Onamae wa Wan-san desu ka.",
          bangla: "আপনার নাম কি ওয়ান-সান?",
          fromWebsite: false,
          answer: {
            japanese: "いいえ、わたし は ワン じゃありません। リン です।",
            romaji: "Iie, watashi wa Wan jaarimasen. Rin desu.",
            bangla: "না, আমি ওয়ান নই। আমি লিন।"
          }
        },
        {
          japanese: "あの かた は せんせい ですか।",
          romaji: "Ano kata wa sensei desu ka.",
          bangla: "ওই ব্যক্তিটি কি শিক্ষক?",
          fromWebsite: false,
          answer: {
            japanese: "はい、せんせい です।",
            romaji: "Hai, sensei desu.",
            bangla: "হ্যাঁ, শিক্ষক।"
          }
        },
        {
          japanese: "あなた は エンジニア ですか।",
          romaji: "Anata wa enjinia desu ka.",
          bangla: "আপনি কি ইঞ্জিনিয়ার?",
          fromWebsite: false,
          answer: {
            japanese: "いいえ、エンジニア じゃありません。 ぎんこういん です।",
            romaji: "Iie, enjinia jaarimasen. Ginkouin desu.",
            bangla: "না, ইঞ্জিনিয়ার নই। ব্যাংক কর্মী।"
          }
        },
        {
          japanese: "こちら は たなかさん ですか।",
          romaji: "Kochira wa Tanaka-san desu ka.",
          bangla: "এই ব্যক্তিটি কি তানাকা-সান?",
          fromWebsite: false,
          answer: {
            japanese: "はい、たなか です।",
            romaji: "Hai, Tanaka desu.",
            bangla: "হ্যাঁ, তানাকা।"
          }
        },
        {
          japanese: "わたし の せんせい は やまださん ですか।",
          romaji: "Watashi no sensei wa Yamada-san desu ka.",
          bangla: "আমার শিক্ষক কি ইয়ামাদা-সান?",
          fromWebsite: false,
          answer: {
            japanese: "いいえ、やまだ じゃありません。 さとさん です।",
            romaji: "Iie, Yamada jaarimasen. Sato-san desu.",
            bangla: "না, ইয়ামাদা নন। সাতো-সান।"
          }
        },
        {
          japanese: "ふじだいがく の がくせい は ミラーさん ですか।",
          romaji: "Fuji daigaku no gakusei wa Miraa-san desu ka.",
          bangla: "ফুজি বিশ্ববিদ্যালয়ের ছাত্র কি মিলার-সান?",
          fromWebsite: false,
          answer: {
            japanese: "はい、ミラー です।",
            romaji: "Hai, Miraa desu.",
            bangla: "হ্যাঁ, মিলার।"
          }
        },
        {
          japanese: "あなた は インドじん ですか।",
          romaji: "Anata wa indojin desu ka.",
          bangla: "আপনি কি ভারতীয়?",
          fromWebsite: false,
          answer: {
            japanese: "いいえ、インドじん じゃありません। タイじん です।",
            romaji: "Iie, indojin jaarimasen. Taijin desu.",
            bangla: "না, ভারতীয় নই। থাই।"
          }
        }
      ]
    },
    {
      topicNumber: 4,
      grammarPoint: "N1 も N2 です",
      structure: "N1 も N2 です",
      meaningBangla: "N1-ও N2",
      examples: [
        {
          japanese: "わたし は がくせい です。 やまださん も がくせい です।",
          romaji: "Watashi wa gakusei desu. Yamada-san mo gakusei desu.",
          bangla: "আমি ছাত্র। ইয়ামাদা-সানও ছাত্র।",
          fromWebsite: true
        },
        {
          japanese: "さとさん は いしゃ じゃありません。 あわやさん も いしゃ じゃありません।",
          romaji: "Sato-san wa isha jaarimasen. Awaya-san mo isha jaarimasen.",
          bangla: "সাতো-সান ডাক্তার নন। আওয়ায়া-সানও ডাক্তার নন।",
          fromWebsite: true
        },
        {
          japanese: "ミラーさん は ふじだいがく の がくせい です। リンさん も ふじだいがく の がくせい です।",
          romaji: "Miraa-san wa fuji daigaku no gakusei desu. Rin-san mo fuji daigaku no gakusei desu.",
          bangla: "মিলার ফুজি বিশ্ববিদ্যালয়ের ছাত্র। লিন-সানও ফুজি বিশ্ববিদ্যালয়ের ছাত্র।",
          fromWebsite: false
        },
        {
          japanese: "わたし は かいしゃいん です। ワンさん も かいしゃいん です।",
          romaji: "Watashi wa kaishain desu. Wan-san mo kaishain desu.",
          bangla: "আমি অফিস কর্মী। ওয়ান-সানও অফিস কর্মী।",
          fromWebsite: false
        },
        {
          japanese: "たなかさん は にほんじん です। さとさん も にほんじん です।",
          romaji: "Tanaka-san wa nihonjin desu. Sato-san mo nihonjin desu.",
          bangla: "তানাকা-সান জাপানি। সাতো-সানও জাপানি।",
          fromWebsite: false
        },
        {
          japanese: "これ は ほん です। それ も ほん です।",
          romaji: "Kore wa hon desu. Sore mo hon desu.",
          bangla: "এটি বই। ওটাও বই।",
          fromWebsite: false
        },
        {
          japanese: "あなた は がくせい じゃありません। わたし も がくせい じゃありません।",
          romaji: "Anata wa gakusei jaarimasen. Watashi mo gakusei jaarimasen.",
          bangla: "আপনি ছাত্র নন। আমিও ছাত্র নই।",
          fromWebsite: false
        },
        {
          japanese: "この かた は せんせい です। あの かた も せんせい です।",
          romaji: "Kono kata wa sensei desu. Ano kata mo sensei desu.",
          bangla: "এই ব্যক্তিটি শিক্ষক। ওই ব্যক্তিটিও শিক্ষক।",
          fromWebsite: false
        },
        {
          japanese: "さくらだいがく の けんきゅうしゃ は やまださん です। たなかさん も けんきゅうしゃ です।",
          romaji: "Sakura daigaku no kenkyuusha wa Yamada-san desu. Tanaka-san mo kenkyuusha desu.",
          bangla: "সাকুরা বিশ্ববিদ্যালয়ের গবেষক ইয়ামাদা-সান। তানাকা-সানও গবেষক।",
          fromWebsite: false
        },
        {
          japanese: "イギリスじん は せんせい じゃありません। フランスじん も せんせい じゃありません।",
          romaji: "Igirisujin wa sensei jaarimasen. Furansujin mo sensei jaarimasen.",
          bangla: "ব্রিটিশ ব্যক্তি শিক্ষক নন। ফরাসি ব্যক্তিও শিক্ষক নন।",
          fromWebsite: false
        }
      ]
    },
    {
      topicNumber: 5,
      grammarPoint: "N1 は N2 の N3 です",
      structure: "N1 は N2 の N3 です",
      meaningBangla: "N1 হলো N2-এর N3",
      examples: [
        {
          japanese: "わたし は Jellyfish Education の しゃいん です।",
          romaji: "Watashi wa Jellyfish Education no shain desu.",
          bangla: "আমি জেলিফিশ এডুকেশনের কর্মচারী।",
          fromWebsite: true
        },
        {
          japanese: "ミラーさん は ふじだいがく の がくせい です।",
          romaji: "Miraa-san wa fuji daigaku no gakusei desu.",
          bangla: "মিলার ফুজি বিশ্ববিদ্যালয়ের ছাত্র।",
          fromWebsite: true
        },
        {
          japanese: "こちら は さくらだいがく の たなかさん です।",
          romaji: "Kochira wa sakura daigaku no Tanaka-san desu.",
          bangla: "এই ব্যক্তিটি সাকুরা বিশ্ববিদ্যালয়ের তানাকা-সান।",
          fromWebsite: false
        },
        {
          japanese: "あの かた は にほん の せんせい です।",
          romaji: "Ano kata wa nihon no sensei desu.",
          bangla: "ওই ব্যক্তিটি জাপানের শিক্ষক।",
          fromWebsite: false
        },
        {
          japanese: "これ は わたし の ほん です।",
          romaji: "Kore wa watashi no hon desu.",
          bangla: "এটি আমার বই।",
          fromWebsite: false
        },
        {
          japanese: "それ は やまださん の かばん です।",
          romaji: "Sore wa Yamada-san no kaban desu.",
          bangla: "ওটা ইয়ামাদা-সানের ব্যাগ।",
          fromWebsite: false
        },
        {
          japanese: "リンさん は アメリカ の エンジニア です।",
          romaji: "Rin-san wa amerika no enjinia desu.",
          bangla: "লিন-সান আমেরিকার ইঞ্জিনিয়ার।",
          fromWebsite: false
        },
        {
          japanese: "ワンさん は ちゅうごく の ぎんこういん です।",
          romaji: "Wan-san wa chuugoku no ginkouin desu.",
          bangla: "ওয়ান-সান চীনের ব্যাংক কর্মী।",
          fromWebsite: false
        },
        {
          japanese: "こちら は インド の けんきゅうしゃ です।",
          romaji: "Kochira wa indo no kenkyuusha desu.",
          bangla: "এই ব্যক্তিটি ভারতের গবেষক।",
          fromWebsite: false
        },
        {
          japanese: "あの ひと は タイ の かいしゃいん です।",
          romaji: "Ano hito wa tai no kaishain desu.",
          bangla: "ওই ব্যক্তিটি থাইল্যান্ডের অফিস কর্মী।",
          fromWebsite: false
        }
      ]
    }
  ],
  notes: [
    "さん শব্দটি শ্রদ্ধার জন্য অন্যের নামের সাথে ব্যবহার করা হয়। নিজের নামের সাথে さん ব্যবহার করা যায় না।",
    "আপনি যদি শ্রোতার নাম জানেন, তাহলে あなた (you) ব্যবহার না করে নাম + さん ব্যবহার করবেন।"
  ]
};
