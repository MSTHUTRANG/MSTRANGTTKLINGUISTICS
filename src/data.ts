import { Chapter, Question, Flashcard } from './types';
import { EXTRA_QUESTION_DATA } from './extraQuestions';

export const CHAPTER_DATA: Chapter[] = [
  {
    id: 'ch3',
    number: 'Chương 3',
    title: 'The Sounds of Language',
    vietnameseTitle: 'Ngữ Âm Học (Phonetics)',
    terms: [
      {
        id: 'phonetics',
        term: 'Phonetics',
        translation: 'Ngữ âm học',
        definition: 'The general study of the characteristics of speech sounds.',
        citation: 'Yule, p. 29',
        explanation: 'Phân ngành ngôn ngữ học nghiên cứu các đặc tính vật lý, cơ học của âm thanh lời nói do con người tạo ra, độc lập với hệ thống ngôn ngữ cụ thể.'
      },
      {
        id: 'articulatory_phonetics',
        term: 'Articulatory phonetics',
        translation: 'Ngữ âm học cấu âm',
        definition: 'The study of how speech sounds are made, or articulated.',
        citation: 'Yule, p. 29',
        explanation: 'Nghiên cứu hoạt động của các bộ phận trong khoang miệng, thanh quản và phổi (như môi, răng, lưỡi, dây thanh) để tạo thành các âm thanh.'
      },
      {
        id: 'acoustic_phonetics',
        term: 'Acoustic phonetics',
        translation: 'Ngữ âm học vật lý / âm học',
        definition: 'Deals with the physical properties of speech as sound waves in the air.',
        citation: 'Yule, p. 29',
        explanation: 'Nghiên cứu sóng âm truyền qua không khí bằng các chỉ số tần số (frequency), biên độ (amplitude) và cao độ (pitch).'
      },
      {
        id: 'auditory_phonetics',
        term: 'Auditory phonetics',
        translation: 'Ngữ âm học thính giác',
        definition: 'Deals with the perception, via the ear, of speech sounds.',
        citation: 'Yule, p. 29',
        explanation: 'Nghiên cứu cách tai tiếp nhận các rung động sóng âm và cách não bộ giải mã, nhận diện các âm thanh đó.'
      },
      {
        id: 'voiceless',
        term: 'Voiceless sounds',
        translation: 'Âm vô thanh (Voiceless)',
        definition: 'When the vocal folds are spread apart, the air from the lungs passes between them with no obstruction.',
        citation: 'Yule, p. 29',
        explanation: 'Khi phát âm, dây thanh mở rộng, luồng hơi từ phổi đi qua khe thanh quản một cách tự do, không tạo ra rung động ở cổ họng. Ví dụ: [p], [t], [k], [s], [f], [θ], [ʃ], [tʃ]. Mẹo nhớ: đặt tay lên cổ họng phát âm kéo dài [sssss] sẽ không thấy rung.'
      },
      {
        id: 'voiced',
        term: 'Voiced sounds',
        translation: 'Âm hữu thanh (Voiced)',
        definition: 'When the vocal folds are drawn together, the air from the lungs repeatedly pushes them apart as it passes through, creating a vibration.',
        citation: 'Yule, p. 29',
        explanation: 'Khi phát âm, dây thanh quản khép sát, luồng khí đẩy qua liên tục làm rung động dây thanh. Bạn có thể sờ nhẹ vào cổ họng khi phát âm kéo dài [zzzzz] để cảm nhận độ rung mạnh mẽ. Ví dụ: [b], [d], [g], [z], [v], [ð], [ʒ], [dʒ], cùng tất cả nguyên âm.'
      },
      {
        id: 'bilabial',
        term: 'Bilabial',
        ipa: '[p], [b], [m], [w]',
        translation: 'Âm hai môi (Place of Articulation)',
        definition: 'Sounds formed using both upper and lower lips.',
        citation: 'Yule, p. 30',
        explanation: 'Vị trí cấu âm tại hai môi. Hai môi chạm hoặc khép lại với nhau để chặn luồng hơi. Ví dụ: "pat" [p] (vô thanh), "bat" [b] (hữu thanh), "wet" [w], "mat" [m].'
      },
      {
        id: 'labiodental',
        term: 'Labiodental',
        ipa: '[f], [v]',
        translation: 'Âm môi răng (Place of Articulation)',
        definition: 'Sounds formed with the upper teeth and the lower lip.',
        citation: 'Yule, p. 30',
        explanation: 'Răng hàm trên tiếp xúc nhẹ với môi dưới. Ví dụ: "fat" [f] (vô thanh), "vat" [v] (hữu thanh).'
      },
      {
        id: 'dental',
        term: 'Dental / Interdental',
        ipa: '[θ], [ð]',
        translation: 'Âm răng / Âm liên răng (Place of Articulation)',
        definition: 'Sounds formed with the tongue tip behind the upper front teeth (or between teeth).',
        citation: 'Yule, p. 31',
        explanation: 'Đầu lưỡi đặt giữa răng cửa trên và dưới (liên răng) hoặc áp sát mặt sau răng cửa trên. Ví dụ: "thin" [θ] (vô thanh), "then" [ð] (hữu thanh).'
      },
      {
        id: 'alveolar',
        term: 'Alveolar',
        ipa: '[t], [d], [s], [z], [n], [l], [r]',
        translation: 'Âm lợi (Place of Articulation)',
        definition: 'Sounds formed with the front part of the tongue on the alveolar ridge.',
        citation: 'Yule, p. 31',
        explanation: 'Phần trước của lưỡi chạm hoặc áp sát vào phần gờ lợi (nướu răng) ngay sau răng cửa trên. Ví dụ: "top" [t], "dog" [d], "sit" [s], "zoo" [z], "nut" [n], "lap" [l].'
      },
      {
        id: 'palatal',
        term: 'Palatal',
        ipa: '[ʃ], [ʒ], [tʃ], [dʒ], [j]',
        translation: 'Âm vòm / Ngạc cứng (Place of Articulation)',
        definition: 'Sounds produced with the tongue and the hard palate.',
        citation: 'Yule, p. 32',
        explanation: 'Mặt lưỡi nâng lên áp sát hoặc tiếp xúc với vòm miệng cứng (ngạc cứng). Ví dụ: "shop" [ʃ], "casual" [ʒ], "chop" [tʃ], "gem" [dʒ], "yes" [j].'
      },
      {
        id: 'velar',
        term: 'Velar',
        ipa: '[k], [g], [ŋ]',
        translation: 'Âm vòm mềm / Ngạc mềm (Place of Articulation)',
        definition: 'Sounds produced with the back of the tongue against the velum.',
        citation: 'Yule, p. 32',
        explanation: 'Phần sau (gốc) của lưỡi nâng lên chạm vào ngạc mềm (phần thịt mềm phía sau vòm miệng). Ví dụ: "cat" [k] (vô thanh), "go" [g] (hữu thanh), "sing" [ŋ] (hữu thanh).'
      },
      {
        id: 'glottal',
        term: 'Glottal',
        ipa: '[h], [ʔ]',
        translation: 'Âm khe thanh (Place of Articulation)',
        definition: 'Sounds produced without the active use of the tongue and other parts of the mouth.',
        citation: 'Yule, p. 32',
        explanation: 'Âm phát ra trực tiếp từ khe thanh quản đang mở. Ví dụ: "hat" [h], hoặc âm tắc khe thanh quản [ʔ] trong phát âm nhanh tiếng Anh-Mỹ như "uh-oh" hoặc "button" [bʌʔn].'
      },
      {
        id: 'stop',
        term: 'Stop / Plosive',
        ipa: '[p], [b], [t], [d], [k], [g]',
        translation: 'Âm tắc (Manner of Articulation)',
        definition: 'Sounds produced by completely blocking the airflow, then letting it go abruptly.',
        citation: 'Yule, p. 33',
        explanation: 'Luồng hơi từ phổi bị chặn đứng hoàn toàn tại một vị trí cấu âm trong tích tắc, sau đó được giải phóng đột ngột tạo tiếng nổ nhẹ.'
      },
      {
        id: 'fricative',
        term: 'Fricative',
        ipa: '[f], [v], [θ], [ð], [s], [z], [ʃ], [ʒ], [h]',
        translation: 'Âm xát (Manner of Articulation)',
        definition: 'Sounds produced by almost blocking the airflow, pushing the air through a very narrow opening.',
        citation: 'Yule, p. 33',
        explanation: 'Luồng khí bị ép đi qua một khe hở cực kỳ hẹp, tạo ra ma sát liên tục như gió rít. Tiếng Anh có 9 âm xát.'
      },
      {
        id: 'affricate',
        term: 'Affricate',
        ipa: '[tʃ], [dʒ]',
        translation: 'Âm tắc-xát (Manner of Articulation)',
        definition: 'A brief stopping of the airflow with an obstructed release which causes friction.',
        citation: 'Yule, p. 34',
        explanation: 'Kết hợp hai giai đoạn: đầu tiên chặn hoàn toàn luồng hơi (như âm tắc), sau đó hé mở từ từ tạo ra âm xát ngắn. Ví dụ: "cheap" [tʃ], "jeep" [dʒ].'
      },
      {
        id: 'nasal_manner',
        term: 'Nasal',
        ipa: '[m], [n], [ŋ]',
        translation: 'Âm mũi (Manner of Articulation)',
        definition: 'Sounds produced when the velum is lowered, allowing air to flow through the nose.',
        citation: 'Yule, p. 34',
        explanation: 'Ngạc mềm được hạ xuống, bít đường miệng và cho phép luồng hơi đi tự do qua khoang mũi. Tất cả âm mũi đều hữu thanh.'
      },
      {
        id: 'liquid',
        term: 'Liquid',
        ipa: '[l], [r]',
        translation: 'Âm bên & âm xát lướt (Manner of Articulation)',
        definition: 'Sounds produced with a let-go airflow around the sides of the tongue.',
        citation: 'Yule, p. 34',
        explanation: 'Luồng hơi đi qua khe hở bên cạnh lưỡi (như [l] - Lateral) hoặc lướt qua đầu lưỡi uốn cong (như [r]).'
      },
      {
        id: 'glide',
        term: 'Glide / Semi-vowel',
        ipa: '[w], [j]',
        translation: 'Âm lướt / Bán nguyên âm (Manner of Articulation)',
        definition: 'Sounds produced with the tongue in motion to or from the position of a vowel.',
        citation: 'Yule, p. 34',
        explanation: 'Âm được phát ra khi bộ phận cấu âm đang chuyển dịch nhanh chóng từ hoặc đến vị trí của một nguyên âm lân cận. Ví dụ: "we" [w], "yes" [j].'
      }
    ],
    examples: [
      'Phân biệt cách cấu âm (Manner): [p] (Tắc hai môi vô thanh) và [f] (Xát môi răng vô thanh) trong cặp từ "pan" và "fan".',
      'Định danh mô tả 3 tham số (Voice + Place + Manner): Ví dụ [ð] là "Voiced dental fricative" (Âm xát răng hữu thanh).',
      'Âm "Flap" [ɾ]: Khi phát âm nhanh từ "writer" hay "butter" trong tiếng Anh-Mỹ, âm [t]/[d] biến thành âm vỗ lợi nhanh [ɾ].'
    ]
  },
  {
    id: 'ch4',
    number: 'Chương 4',
    title: 'The Sound Patterns of Language',
    vietnameseTitle: 'Âm Vị Học (Phonology)',
    terms: [
      {
        id: 'phonology',
        term: 'Phonology',
        translation: 'Âm vị học',
        definition: 'The description of the systems and patterns of speech sounds in a language.',
        citation: 'Yule, p. 45',
        explanation: 'Khác với Ngữ âm học nghiên cứu thực tế vật lý, Âm vị học nghiên cứu khía cạnh tinh thần, trừu tượng và các quy luật sắp xếp âm vị trong bộ não của người bản ngữ.'
      },
      {
        id: 'phoneme',
        term: 'Phoneme',
        translation: 'Âm vị',
        definition: 'Each one of the meaning-distinguishing sounds in a language.',
        citation: 'Yule, p. 46',
        explanation: 'Đơn vị âm trừu tượng nhỏ nhất có chức năng khu biệt ý nghĩa trong một ngôn ngữ cụ thể. Nếu thay thế một âm vị, nghĩa của từ sẽ thay đổi hoàn toàn. Ký hiệu trong dấu gạch chéo / /.'
      },
      {
        id: 'phone',
        term: 'Phone',
        translation: 'Phân âm / Âm đoạn thực tế',
        definition: 'A physical sound unit in actual speech, representing the concrete realization of a phoneme.',
        citation: 'Yule, p. 46',
        explanation: 'Âm thanh cụ thể phát ra trực tiếp từ miệng người nói, có thể đo lường bằng vật lý. Ký hiệu bằng dấu ngoặc vuông [ ]. Một âm vị trừu tượng có thể có nhiều phân âm thực tế biểu diễn.'
      },
      {
        id: 'allophone',
        term: 'Allophone',
        translation: 'Biến thể âm vị',
        definition: 'A set of phones, all of which are versions of one phoneme.',
        citation: 'Yule, p. 47',
        explanation: 'Các biến thể phát âm thực tế của cùng một âm vị trừu tượng trong những ngữ cảnh khác nhau. Sự thay thế giữa các biến thể âm vị không làm thay đổi nghĩa từ. Ví dụ: Âm bật hơi [tʰ] trong "tar" và âm không bật hơi [t] trong "star" đều là biến thể của âm vị /t/.'
      },
      {
        id: 'minimal_pair',
        term: 'Minimal pair',
        translation: 'Cặp từ tối giản (Minimal pair)',
        definition: 'Two words that are identical in form except for a contrast in one phoneme in the same position.',
        citation: 'Yule, p. 48',
        explanation: 'Hai từ có cách viết và phát âm giống hệt nhau, chỉ khác biệt duy nhất một âm vị ở cùng một vị trí nhằm chứng minh hai âm đó là hai âm vị phân biệt của ngôn ngữ đó. Ví dụ: "pat" /pæt/ và "bat" /bæt/ chứng tỏ /p/ và /b/ là hai âm vị.'
      },
      {
        id: 'complementary_distribution',
        term: 'Complementary distribution',
        translation: 'Phân bố bổ sung',
        definition: 'The situation where two allophones of the same phoneme occur in different environments and never in the same environment.',
        citation: 'Yule, p. 47',
        explanation: 'Mối quan hệ loại trừ lẫn nhau giữa các biến thể âm vị (allophones). Ở đâu đã xuất hiện biến thể A thì không bao giờ xuất hiện biến thể B. Ví dụ: âm [tʰ] bật hơi chỉ xuất hiện ở đầu âm tiết chịu trọng âm, còn âm [t] không bật hơi chỉ xuất hiện sau phụ âm [s]. Chúng bổ sung ngữ cảnh cho nhau.'
      },
      {
        id: 'syllable',
        term: 'Syllable',
        translation: 'Âm tiết',
        definition: 'A unit of pronunciation having one vowel sound, with or without surrounding consonants.',
        citation: 'Yule, p. 49',
        explanation: 'Cấu trúc âm tiết gồm có Phần đầu (Onset - chứa các phụ âm đầu) và Phần vần (Rhyme). Phần vần bắt buộc chứa Hạt nhân (Nucleus - nguyên âm) và có thể có Âm cuối (Coda - phụ âm).'
      },
      {
        id: 'assimilation',
        term: 'Assimilation',
        translation: 'Sự đồng hóa âm',
        definition: 'When two sound segments occur in sequence and some aspect of one segment is taken or "copied" by the other.',
        citation: 'Yule, p. 51',
        explanation: 'Hiện tượng một âm biến đổi một vài đặc tính cấu âm để trở nên giống hoặc tương tự âm lân cận nhằm tiết kiệm năng lượng phát âm. Ví dụ: "have to" /hæv tu/ -> [hæftə] (âm /v/ hữu thanh bị vô thanh hóa thành /f/ bởi âm /t/ vô thanh đứng kề).'
      },
      {
        id: 'nasalization',
        term: 'Nasalization',
        translation: 'Sự mũi hóa',
        definition: 'Any vowel becomes nasalized when it immediately precedes a nasal consonant.',
        citation: 'Yule, p. 51',
        explanation: 'Nguyên âm bị kéo theo luồng khí qua khoang mũi do phụ âm mũi kề sau nó (ngạc mềm hạ xuống sớm). Ký hiệu dấu ngã trên đầu nguyên âm: "pan" -> [pæ̃n].'
      },
      {
        id: 'elision',
        term: 'Elision',
        translation: 'Sự lược âm',
        definition: 'The process of not pronouncing a sound segment that might be present in the deliberate pronunciation of a word.',
        citation: 'Yule, p. 52',
        explanation: 'Lược bỏ hoàn toàn một âm khi nói nhanh trong giao tiếp thực tế giúp phát âm mượt mà hơn. Ví dụ: "next door" phát âm là [neksdɔː] biến mất âm [t], hay "friendship" phát âm là [frenʃɪp] biến mất âm [d].'
      }
    ],
    examples: [
      'Cấu trúc Âm tiết (Syllable structure): Từ "green" /ɡriːn/ có Onset = [ɡr], Rhyme gồm Nucleus = [iː] và Coda = [n].',
      'Cặp tối giản (Minimal Pair): "site" /saɪt/ và "side" /saɪd/ chứng minh /t/ và /d/ là hai âm vị riêng biệt trong tiếng Anh.',
      'Sự lược âm (Elision): Trong cụm từ "you and me", âm /d/ thường bị tiêu biến hoàn toàn để phát âm mượt mà [ju ən mi].'
    ]
  },
  {
    id: 'ch5',
    number: 'Chương 5',
    title: 'Word Formation',
    vietnameseTitle: 'Quá Trình Tạo Từ (Word Formation Processes)',
    terms: [
      {
        id: 'etymology',
        term: 'Etymology',
        translation: 'Từ nguyên học',
        definition: 'The study of the origin and history of a word.',
        citation: 'Yule, p. 60',
        explanation: 'Nghiên cứu về nguồn gốc lịch sử, sự phát triển và biến đổi ngữ nghĩa của từ qua các thời kỳ phát triển ngôn ngữ.'
      },
      {
        id: 'borrowing',
        term: 'Borrowing',
        translation: 'Vay mượn từ',
        definition: 'Taking words from other languages.',
        citation: 'Yule, p. 61',
        explanation: 'Quá trình tiếp nhận từ vựng trực tiếp từ ngôn ngữ khác. Ví dụ tiếng Anh mượn "croissant" (Pháp), "sofa" (Ả Rập), "piano" (Ý).'
      },
      {
        id: 'calque',
        term: 'Calque / Loan-translation',
        translation: 'Từ dịch sao phỏng (Calque)',
        definition: 'A type of borrowing in which there is a direct translation of the elements of a word into the borrowing language.',
        citation: 'Yule, p. 61',
        explanation: 'Một dạng vay mượn đặc biệt bằng cách dịch sát nghĩa từng thành phần của từ gốc nước ngoài. Ví dụ: tiếng Anh dịch cụm từ tiếng Pháp "gratte-ciel" thành "skyscraper" (sky-scraper), hay tiếng Việt dịch "supermarket" thành "siêu thị".'
      },
      {
        id: 'compounding',
        term: 'Compounding',
        translation: 'Sự ghép từ (Compounding)',
        definition: 'Joining two separate words to produce a single form.',
        citation: 'Yule, p. 62',
        explanation: 'Kết hợp hai từ hoàn chỉnh độc lập để tạo ra một từ mới. Ví dụ: "bookcase" (book + case), "fingerprint" (finger + print), "wallpaper".'
      },
      {
        id: 'blending',
        term: 'Blending',
        translation: 'Sự trộn từ (Blending)',
        definition: 'Combination of two separate forms to produce a single new term, typically taking the beginning of one and joining it to the end of another.',
        citation: 'Yule, p. 63',
        explanation: 'Cắt ghép phần đầu của từ này kết hợp với phần đuôi của từ kia. Ví dụ: "brunch" (breakfast + lunch), "smog" (smoke + fog), "motel" (motor + hotel).'
      },
      {
        id: 'clipping',
        term: 'Clipping',
        translation: 'Sự cắt từ / rút gọn (Clipping)',
        definition: 'A word of more than one syllable is reduced to a shorter form.',
        citation: 'Yule, p. 63',
        explanation: 'Rút ngắn từ có nhiều âm tiết thành dạng ngắn gọn hơn mà không thay đổi nghĩa hay từ loại ban đầu. Ví dụ: "gas" (gasoline), "ad" (advertisement), "gym" (gymnasium), "exam" (examination).'
      },
      {
        id: 'backformation',
        term: 'Backformation',
        translation: 'Sự cấu tạo ngược (Backformation)',
        definition: 'A word of one type (usually a noun) is reduced to form a word of another type (usually a verb).',
        citation: 'Yule, p. 64',
        explanation: 'Quá trình giảm lược một từ (thường là danh từ kết thúc bằng đuôi có vẻ là hậu tố) để tạo thành từ thuộc từ loại khác (thường là động từ). Ví dụ: danh từ "television" tạo ra động từ "televise", "donation" tạo ra "donate", "babysitter" tạo ra "babysit".'
      },
      {
        id: 'conversion',
        term: 'Conversion / Category shift',
        translation: 'Sự chuyển loại từ (Conversion)',
        definition: 'A change in the function of a word, as when a noun comes to be used as a verb (without any reduction).',
        citation: 'Yule, p. 65',
        explanation: 'Thay đổi chức năng ngữ pháp (từ loại) của một từ mà hoàn toàn không thay đổi hình thức viết hay phát âm của nó. Ví dụ: danh từ "butter" chuyển sang động từ "to butter the bread", hay động từ "guess" chuyển sang danh từ "a guess".'
      },
      {
        id: 'coinage',
        term: 'Coinage',
        translation: 'Sự sáng tạo từ mới hoàn toàn (Coinage)',
        definition: 'The invention of totally new terms.',
        citation: 'Yule, p. 66',
        explanation: 'Sáng tạo ra một từ hoàn toàn mới, không dựa trên từ cũ, thường bắt nguồn từ tên thương mại độc quyền của sản phẩm rồi phổ biến hóa thành danh từ chung. Ví dụ: "Google", "Aspirin", "Xerox", "Kleenex", "Teflon", "Vaseline".'
      },
      {
        id: 'acronym',
        term: 'Acronym',
        translation: 'Từ viết tắt đầu chữ (Acronym)',
        definition: 'New words formed from the initial letters of a set of other words.',
        citation: 'Yule, p. 67',
        explanation: 'Từ mới cấu tạo bằng cách ghép các chữ cái đầu tiên của một cụm từ và được phát âm như một từ thông thường độc lập. Ví dụ: "NATO", "NASA", "LASER", "SCUBA". Khác với Initialism (phát âm từng chữ cái lẻ như "FBI", "HTML").'
      },
      {
        id: 'derivation',
        term: 'Derivation',
        translation: 'Sự dẫn xuất từ / phái sinh',
        definition: 'The production of new words by using affixes (prefixes, suffixes, infixes).',
        citation: 'Yule, p. 67',
        explanation: 'Quá trình tạo từ bằng cách thêm các phụ tố (tiền tố, hậu tố, trung tố) vào từ gốc để tạo từ mới có ý nghĩa hoặc từ loại khác biệt. Ví dụ: "unhappy" (thêm tiền tố un-), "careless" (thêm hậu tố -less).'
      }
    ],
    examples: [
      'Trộn từ (Blending): Từ "Spanglish" được tạo bằng cách trộn đầu từ "Spanish" và đuôi từ "English".',
      'Cấu tạo ngược (Backformation): "He babysits every weekend" - động từ "babysit" xuất hiện sau danh từ "babysitter".',
      'Sự vay mượn gián tiếp (Calque): "skyscraper" là bản dịch sát nghĩa của từ tiếng Pháp "gratte-ciel" (gratte = cào/scraper, ciel = trời/sky).'
    ]
  },
  {
    id: 'ch6',
    number: 'Chương 6',
    title: 'Morphology',
    vietnameseTitle: 'Hình Thái Học (Morphology)',
    terms: [
      {
        id: 'morphology',
        term: 'Morphology',
        translation: 'Hình thái học',
        definition: 'The study of forms in languages.',
        citation: 'Yule, p. 76',
        explanation: 'Lĩnh vực nghiên cứu cấu trúc bên trong của từ và các quy luật xây dựng từ từ những đơn vị cơ sở mang ý nghĩa.'
      },
      {
        id: 'morpheme',
        term: 'Morpheme',
        translation: 'Hình vị',
        definition: 'A minimal unit of meaning or grammatical function.',
        citation: 'Yule, p. 76',
        explanation: 'Đơn vị ngôn ngữ nhỏ nhất mang ý nghĩa từ vựng hoặc đảm nhận một chức năng ngữ pháp cụ thể. Ví dụ: "reopened" chứa 3 hình vị: "re-" (lặp lại), "open" (mở), "-ed" (quá khứ).'
      },
      {
        id: 'free_morpheme',
        term: 'Free Morpheme',
        translation: 'Hình vị tự do',
        definition: 'Morphemes that can stand by themselves as single words.',
        citation: 'Yule, p. 77',
        explanation: 'Có thể đứng độc lập làm một từ hoàn chỉnh có ý nghĩa. Ví dụ: "house", "teach", "book". Được chia thành 2 nhóm: Lexical (từ vựng) và Functional (chức năng).'
      },
      {
        id: 'bound_morpheme',
        term: 'Bound Morpheme',
        translation: 'Hình vị ràng buộc',
        definition: 'Morphemes that cannot stand alone and must be attached to another form.',
        citation: 'Yule, p. 77',
        explanation: 'Không thể đứng một mình, bắt buộc phải đính kèm vào một hình vị tự do hoặc hình vị gốc khác để tồn tại. Thường là các phụ tố (affixes) như tiền tố (prefixes) và hậu tố (suffixes).'
      },
      {
        id: 'lexical_morpheme',
        term: 'Lexical Morpheme',
        translation: 'Hình vị từ vựng',
        definition: 'A free morpheme that is a content word (noun, adjective, verb, adverb) carrying real-world meaning.',
        citation: 'Yule, p. 77',
        explanation: 'Các danh từ, động từ, tính từ, trạng từ biểu đạt thế giới quan thực tế. Là tập hợp mở (open class of words) vì ngôn ngữ liên tục tiếp nhận các từ vựng mới thuộc nhóm này. Ví dụ: "man", "blue", "run".'
      },
      {
        id: 'functional_morpheme',
        term: 'Functional Morpheme',
        translation: 'Hình vị chức năng',
        definition: 'A free morpheme that serves a grammatical role (conjunctions, prepositions, articles, pronouns).',
        citation: 'Yule, p. 78',
        explanation: 'Các từ hư (hư từ) đóng vai trò liên kết ngữ pháp như giới từ, liên từ, mạo từ, đại từ. Là tập hợp đóng (closed class of words) vì hầu như không bao giờ có thêm từ mới. Ví dụ: "and", "but", "the", "in", "it".'
      },
      {
        id: 'derivational_morpheme',
        term: 'Derivational Morpheme',
        translation: 'Hình vị phái sinh',
        definition: 'Bound morphemes used to make new words or words of a different grammatical category.',
        citation: 'Yule, p. 78',
        explanation: 'Các phụ tố dùng để tạo từ mới, thường làm thay đổi ý nghĩa từ hoặc biến đổi từ loại ngữ pháp của từ gốc. Ví dụ: thêm hậu tố "-ness" vào tính từ "quick" tạo danh từ "quickness", hoặc tiền tố "un-" biến "happy" thành "unhappy".'
      },
      {
        id: 'inflectional_morpheme',
        term: 'Inflectional Morpheme',
        translation: 'Hình vị biến vĩ / biến hình',
        definition: 'Bound morphemes used to indicate aspects of the grammatical function of a word (plural, tense, comparative).',
        citation: 'Yule, p. 79',
        explanation: 'Hậu tố dùng để thể hiện các đặc điểm ngữ pháp như số nhiều, thì, so sánh. Không bao giờ làm chuyển đổi từ loại của từ gốc. Tiếng Anh chỉ có đúng 8 hình vị loại này.'
      },
      {
        id: 'the_8_inflections',
        term: 'The 8 Inflectional Morphemes',
        translation: '8 hình vị biến hình của tiếng Anh',
        definition: 'The precise, closed set of eight bound grammatical suffixes in English.',
        citation: 'Yule, p. 79',
        explanation: 'Tài liệu bắt buộc phải nhớ cho kỳ thi lý thuyết. Gồm: 1) Noun plural \'-s\' (cats), 2) Noun possessive \'-s\' (John\'s), 3) Verb 3rd person singular present \'-s\' (runs), 4) Verb progressive \'-ing\' (running), 5) Verb past tense \'-ed\' (walked), 6) Verb past participle \'-en\' (eaten), 7) Adjective comparative \'-er\' (taller), 8) Adjective superlative \'-est\' (tallest).'
      },
      {
        id: 'allomorph',
        term: 'Allomorph',
        translation: 'Biến thể hình vị',
        definition: 'One of a closely related set of morphs that represent a single morpheme.',
        citation: 'Yule, p. 80',
        explanation: 'Cách phát âm hoặc thể hiện chữ viết thực tế của một hình vị tùy thuộc bối cảnh âm học xung quanh. Ví dụ hình vị số nhiều {-s} tiếng Anh có 3 biến thể hình vị phát âm: [s] trong "cats", [z] trong "dogs", [ɪz] trong "buses".'
      }
    ],
    examples: [
      'Phân tích từ "disagreements": chứa 4 hình vị: "dis-" (bound, derivational), "agree" (free, lexical), "-ment" (bound, derivational), "-s" (bound, inflectional).',
      'Trật tự sắp xếp: Trong tiếng Anh, hình vị phái sinh luôn đứng trước hình vị biến vĩ. Ví dụ: "teach-er-s" (teach + phái sinh -er + biến vĩ số nhiều -s).',
      'Hình vị rỗng / Zero morph: Hiện tượng một hình vị biến vĩ không biểu hiện bằng hình thức âm học cụ thể. Ví dụ: "sheep" (số ít) chuyển sang "sheep" (số nhiều).'
    ]
  },
  {
    id: 'ch7_8',
    number: 'Chương 7-8',
    title: 'Grammar & Syntax',
    vietnameseTitle: 'Ngữ Pháp Và Cú Pháp (Grammar & Syntax)',
    terms: [
      {
        id: 'grammar',
        term: 'Grammar',
        translation: 'Ngữ pháp học',
        definition: 'The process of describing the structure of phrases and sentences in such a way that we account for all the grammatical sequences.',
        citation: 'Yule, p. 87',
        explanation: 'Tập hợp các quy tắc chi phối việc tổ chức từ ngữ thành cụm từ, câu chuẩn mực mang ý nghĩa.'
      },
      {
        id: 'prescriptive',
        term: 'Prescriptive Approach',
        translation: 'Tiếp cận tiền quy',
        definition: 'An approach to grammar that has rules for the "proper" use of language.',
        citation: 'Yule, p. 89',
        explanation: 'Quan điểm áp đặt thế nào là đúng/sai dựa trên các quy tắc cổ điển có sẵn (thường dựa theo tiếng Latinh). Ép buộc mọi người nói/viết theo chuẩn. Ví dụ quy tắc: "Cấm chia tách động từ nguyên mẫu (No split infinitives)" hay "Không kết thúc câu bằng giới từ".'
      },
      {
        id: 'descriptive',
        term: 'Descriptive Approach',
        translation: 'Tiếp cận miêu tả',
        definition: 'An approach to grammar that describes how language is actually used, rather than how it should be used.',
        citation: 'Yule, p. 91',
        explanation: 'Nghiên cứu và ghi nhận khách quan cách mọi người sử dụng ngôn ngữ tự nhiên hàng ngày trong giao tiếp thực tế, không đưa ra phán xét đạo đức hay áp đặt đúng sai.'
      },
      {
        id: 'syntax',
        term: 'Syntax',
        translation: 'Cú pháp học',
        definition: 'The analysis of the structure and ordering of components in a sentence.',
        citation: 'Yule, p. 104',
        explanation: 'Phân ngành ngôn ngữ học tập trung vào trật tự tuyến tính và cấu trúc phân cấp sắp xếp các từ để tạo thành các cụm từ (Phrases) và câu (Sentences) hợp lệ.'
      },
      {
        id: 'generative',
        term: 'Generative Grammar',
        translation: 'Ngữ pháp sản sinh',
        definition: 'A set of rules defining the possible combinations of words in a language.',
        citation: 'Yule, p. 105',
        explanation: 'Học thuyết nổi tiếng của Noam Chomsky chỉ ra rằng bộ não con người sở hữu một tập hợp các quy tắc hữu hạn để sản sinh ra số lượng câu đúng ngữ pháp vô hạn.'
      },
      {
        id: 'phrase_structure_rules',
        term: 'Phrase Structure Rules',
        translation: 'Quy tắc cấu trúc cụm từ',
        definition: 'Rules that determine how phrases are constructed from words and other phrases.',
        citation: 'Yule, p. 107',
        explanation: 'Quy tắc biểu diễn cú pháp chỉ ra cách phân rã các khối lớn thành khối nhỏ hơn. Ví dụ: S -> NP VP (Câu gồm cụm danh từ và cụm động từ), NP -> (Art) (Adj) N (Cụm danh từ gồm mạo từ, tính từ tùy chọn và danh từ chính), VP -> V NP (PP).'
      },
      {
        id: 'syntactic_categories',
        term: 'Syntactic Categories (NP, VP, PP)',
        translation: 'Các phạm trù cú pháp chính',
        definition: 'Grammatical classes such as Noun Phrase (NP), Verb Phrase (VP), and Prepositional Phrase (PP).',
        citation: 'Yule, p. 107',
        explanation: 'Các đơn vị tổ hợp cấu thành sơ đồ cây. NP (Cụm danh từ - ví dụ "the big dog"), VP (Cụm động từ - ví dụ "saw a giant"), PP (Cụm giới từ - ví dụ "with a telescope").'
      },
      {
        id: 'deep_structure',
        term: 'Deep structure',
        translation: 'Cấu trúc sâu',
        definition: 'An abstract level of structural organization in which all the elements determining structural interpretation are represented.',
        citation: 'Yule, p. 106',
        explanation: 'Tầng nghĩa trừu tượng, mô hình quan hệ cú pháp cốt lõi nhất nằm trong tư duy trí não. Đóng vai trò quyết định ý nghĩa thực sự của câu.'
      },
      {
        id: 'surface_structure',
        term: 'Surface structure',
        translation: 'Cấu trúc bề mặt',
        definition: 'The outward form of a sentence as it is spoken or written.',
        citation: 'Yule, p. 106',
        explanation: 'Hình thái cụ thể, trật tự từ ngữ khi nói hoặc viết ra ngoài thực tế. Hai câu có cấu trúc bề mặt khác biệt hoàn toàn vẫn có thể chia sẻ chung một cấu trúc sâu đại diện cho cùng một tầng nghĩa. Ví dụ: "Charlie broke the window" (Chủ động) và "The window was broken by Charlie" (Bị động).'
      },
      {
        id: 'structural_ambiguity',
        term: 'Structural ambiguity',
        translation: 'Sự mơ hồ cấu trúc',
        definition: 'A situation where a single surface structure has two different deep structures.',
        citation: 'Yule, p. 106',
        explanation: 'Một câu có duy nhất một hình thức bề mặt nhưng có thể phân tích thành nhiều cấu trúc phân cấp nhánh khác nhau, tạo ra hai nghĩa khác biệt. Ví dụ: "I saw the man with an umbrella" (Có nghĩa là tôi dùng cái ô để nhìn thấy người đàn ông, hoặc tôi nhìn thấy một người đàn ông đang cầm ô).'
      },
      {
        id: 'recursion',
        term: 'Recursion',
        translation: 'Tính đệ quy',
        definition: 'The capacity of phrase structure rules to apply repeatedly, generating infinitely long sentences or nested structures.',
        citation: 'Yule, p. 105',
        explanation: 'Đặc tính kỳ diệu của cú pháp cho phép lồng ghép lặp đi lặp lại một cấu trúc trong một cấu trúc khác cùng loại một cách vô tận. Ví dụ, lồng mệnh đề: "This is the cat [that caught the rat [that ate the cheese...]]" hoặc cụm giới từ "on the table [by the window [near the door]]".'
      }
    ],
    examples: [
      'Sự phù hợp ngữ pháp (Agreement): Quy tắc đảm bảo sự nhất quán về Giống (Gender), Số (Number), Nhân xưng (Person), Thì (Tense) giữa các thành phần câu.',
      'Cấu trúc bề mặt và cấu trúc sâu: Cặp câu "You took the books" và "Did you take the books?" có cấu trúc sâu tương tự nhau về mặt hành động ngữ nghĩa nhưng khác biệt cấu trúc bề mặt.',
      'Tính đệ quy (Recursion): Quy tắc "NP -> NP PP" cho phép ta viết câu "The book on the table under the lamp near the computer..." dài vô tận.'
    ],
    treeDiagram: {
      sentence: 'I saw the giant with a telescope',
      description: 'Sơ đồ cây cú pháp cho câu mang nghĩa: "Tôi dùng kính viễn vọng để nhìn người khổng lồ" (Bổ ngữ dụng cụ - PP bổ nghĩa trực tiếp cho VP).',
      tree: `               S (Sentence)
         _____________|_____________
        /                           \\
     NP (Noun Phrase)               VP (Verb Phrase)
        |                    _______|_________
     Pro (Pronoun)          /       \\         \\
        |                  V        NP        PP (Prep Phrase)
        I                 saw     /    \\      /  \\
                                 Art    N   Prep  NP
                                  |     |    |   /  \\
                                 the  giant withArt  N
                                                   |  |
                                                   a telescope`
    }
  },
  {
    id: 'ch9',
    number: 'Chương 9',
    title: 'Semantics',
    vietnameseTitle: 'Ngữ Nghĩa Học (Semantics)',
    terms: [
      {
        id: 'semantics',
        term: 'Semantics',
        translation: 'Ngữ nghĩa học',
        definition: 'The study of the meaning of words, phrases and sentences.',
        citation: 'Yule, p. 124',
        explanation: 'Phân ngành nghiên cứu ý nghĩa khách quan, võ đoán biểu thị của ngôn từ, tránh việc lồng ghép ý định cá nhân hay ngữ cảnh tình huống sử dụng thực tế (khác với Ngữ dụng học - Pragmatics).'
      },
      {
        id: 'conceptual_meaning',
        term: 'Conceptual meaning',
        translation: 'Nghĩa khái niệm / Nghĩa biểu thị',
        definition: 'The basic, essential components of meaning that are conveyed by the literal use of a word.',
        citation: 'Yule, p. 124',
        explanation: 'Phần nghĩa cốt lõi, cơ bản, mang tính từ điển khách quan của một từ. Ví dụ nghĩa khái niệm của "needle" là một dụng cụ khâu vá bằng thép mỏng, sắc nhọn, có lỗ luồn chỉ.'
      },
      {
        id: 'associative_meaning',
        term: 'Associative meaning',
        translation: 'Nghĩa liên tưởng / Nghĩa biểu cảm',
        definition: 'Feelings or reactions to words which may be different from person to person.',
        citation: 'Yule, p. 124',
        explanation: 'Sự liên tưởng tâm lý, cảm xúc hay định kiến văn hóa xã hội gắn liền với từ đó tùy từng cá nhân. Ví dụ khi nhắc tới "needle", một người có thể liên tưởng tới "đau đớn", "bệnh viện", "máu", "ma túy".'
      },
      {
        id: 'semantic_features',
        term: 'Semantic Features',
        translation: 'Nét nghĩa / Đặc điểm nghĩa học',
        definition: 'Basic elements of meaning, represented by "+" or "-", used to analyze the semantic compatibility of words in a sentence.',
        citation: 'Yule, p. 125',
        explanation: 'Các thành tố ngữ nghĩa cơ bản nhất để phân biệt các từ và giải thích tính bất thường của câu. Ví dụ từ "boy" mang nét nghĩa: [+animate, +human, -female, -adult]. Việc phân tích nét nghĩa giúp hiểu tại sao câu "The hamburger ate the boy" không hợp lệ về nghĩa (hamburger mang nét [-animate] nên không làm chủ ngữ của "eat" được).'
      },
      {
        id: 'semantic_roles',
        term: 'Semantic Roles (Thematic Roles)',
        translation: 'Hệ thống vai ngữ nghĩa',
        definition: 'The various roles that noun phrases play in relation to the action or state described by the verb.',
        citation: 'Yule, p. 126',
        explanation: 'Hệ thống các vai trò ngữ nghĩa của danh từ trong câu (không trùng với chức năng ngữ pháp như chủ ngữ, tân ngữ). Gồm: Agent, Theme, Instrument, Experiencer, Location, Source, Goal.'
      },
      {
        id: 'agent',
        term: 'Agent',
        translation: 'Vai Tác nhân (Agent)',
        definition: 'The entity that performs the action.',
        citation: 'Yule, p. 126',
        explanation: 'Thực thể (thường mang ý chí, chủ động) trực tiếp thực hiện hoặc gây ra hành động trong câu. Ví dụ: "THE BOY kicked the ball".'
      },
      {
        id: 'theme',
        term: 'Theme / Patient',
        translation: 'Vai Khách thể / Chịu tác động (Theme)',
        definition: 'The entity that is involved in or affected by the action.',
        citation: 'Yule, p. 126',
        explanation: 'Thực thể chịu sự tác động trực tiếp, biến đổi trạng thái hoặc bị dịch chuyển bởi hành động của Tác nhân. Ví dụ: "The boy kicked THE BALL".'
      },
      {
        id: 'instrument',
        term: 'Instrument',
        translation: 'Vai Công cụ / Phương tiện (Instrument)',
        definition: 'The entity used by the agent in order to perform the action.',
        citation: 'Yule, p. 126',
        explanation: 'Vật dụng, phương tiện mà tác nhân sử dụng để thực hiện hành động. Ví dụ: "She cut the cake with A KNIFE".'
      },
      {
        id: 'experiencer',
        term: 'Experiencer',
        translation: 'Vai Thực thể cảm nghiệm (Experiencer)',
        definition: 'The entity that has a feeling, perception or state.',
        citation: 'Yule, p. 127',
        explanation: 'Thực thể (phải là sinh vật có cảm xúc, nhận thức) trải qua một trạng thái tâm lý, tri giác hoặc cảm xúc, không trực tiếp thực hiện một hành động mang tính động lực kéo theo. Ví dụ: "THE GIRL saw the rainbow", "THE CAT felt cold".'
      },
      {
        id: 'synonymy',
        term: 'Synonymy',
        translation: 'Quan hệ đồng nghĩa (Synonyms)',
        definition: 'Two or more words with very closely related meanings.',
        citation: 'Yule, p. 128',
        explanation: 'Hai hoặc nhiều từ có ý nghĩa tương đồng, có thể thay thế nhau trong một số ngữ cảnh nhất định. Tuy nhiên hầu như không có từ đồng nghĩa tuyệt đối. Ví dụ: "large" / "big", "almost" / "nearly".'
      },
      {
        id: 'antonymy',
        term: 'Antonymy',
        translation: 'Quan hệ trái nghĩa (Antonyms)',
        definition: 'Two forms with opposite meanings.',
        citation: 'Yule, p. 129',
        explanation: 'Được chia thành 3 loại cực kỳ quan trọng hay thi: 1) Gradable antonyms (trái nghĩa thang độ: "hot" / "cold" - có thể dùng so sánh "hotter"), 2) Non-gradable / Complementary antonyms (trái nghĩa lưỡng phân: "dead" / "alive" - phủ định cái này là khẳng định cái kia), 3) Reversives (trái nghĩa nghịch đảo/hành động ngược: "enter" / "exit", "dress" / "undress").'
      },
      {
        id: 'hyponymy',
        term: 'Hyponymy',
        translation: 'Quan hệ bao nghĩa / hạ nghĩa (Hyponyms)',
        definition: 'When the meaning of one form is included in the meaning of another.',
        citation: 'Yule, p. 131',
        explanation: 'Quan hệ thuộc nhóm, mối liên hệ "A là một loại của B". Ví dụ: "daffodil" (hoa thủy tiên) là hạ nghĩa (hyponym) của "flower" (thượng nghĩa - superordinate). Các từ cùng cấp hạ nghĩa như "dog" và "cat" gọi là co-hyponyms dưới lớp "animal".'
      },
      {
        id: 'homonyms',
        term: 'Homonyms',
        translation: 'Từ đồng âm đồng tự (Homonyms)',
        definition: 'When one form (written and spoken) has two or more unrelated meanings.',
        citation: 'Yule, p. 134',
        explanation: 'Một từ có cách viết và phát âm giống hệt nhau nhưng mang hai nghĩa hoàn toàn khác biệt, nguồn gốc từ vựng hoàn toàn độc lập (được tra cứu ở hai mục từ điển riêng biệt). Ví dụ: "bank" (bờ sông) và "bank" (ngân hàng), hoặc "bat" (con dơi) và "bat" (gậy bóng chày).'
      },
      {
        id: 'polysemy',
        term: 'Polysemy',
        translation: 'Từ đa nghĩa (Polysemy)',
        definition: 'One form (written or spoken) having multiple meanings which are all related by extension.',
        citation: 'Yule, p. 134',
        explanation: 'Một từ duy nhất có nhiều ý nghĩa khác nhau nhưng có mối liên hệ logic hoặc liên tưởng tương đồng với nhau (được tra cứu chung trong một mục từ điển lớn). Ví dụ: "head" (đầu người, người đứng đầu cơ quan, đầu giường).'
      },
      {
        id: 'metonymy',
        term: 'Metonymy',
        translation: 'Quan hệ hoán dụ (Metonymy)',
        definition: 'A semantic relationship based on a close everyday association between two concepts, where one word is used to represent another.',
        citation: 'Yule, p. 135',
        explanation: 'Mối liên kết thực tế bền vững giữa các thực thể trong đời sống hàng ngày, dùng tên gọi này để đại diện cho cái kia. Gồm các kiểu: 1) Bình chứa - Vật chứa ("drink the whole bottle"), 2) Toàn thể - Bộ phận ("we need some fresh wheels" = xe hơi), 3) Đại diện - Cơ quan ("The White House announced...").'
      }
    ],
    examples: [
      'Trái nghĩa lưỡng phân (Non-gradable): "male" / "female" - Không thể nói là "rất nam" hay "hơi nam", phủ định từ này là khẳng định từ kia.',
      'Hyponymy Co-hyponyms: "dog" và "cat" đều là co-hyponyms dưới thượng nghĩa là "animal".',
      'Metonymy (Hoán dụ): Thay thế một từ bằng một từ khác có mối liên hệ mật thiết. Ví dụ: "The White House announced..." (White House hoán dụ cho Tổng thống/Chính phủ Mỹ).'
    ]
  }
];

export const QUESTION_DATA: Question[] = [
  // CH3
  {
    id: 'q_ch3_1',
    chapterId: 'ch3',
    type: 'tf',
    questionText: 'Phonetics is the study of how speech sounds are conceptualized and organized abstractly in our minds.',
    correctAnswer: 'false',
    explanation: 'Correct! That is the definition of Phonology. Phonetics is the study of the physical characteristics of speech sounds.'
  },
  {
    id: 'q_ch3_2',
    chapterId: 'ch3',
    type: 'mc',
    questionText: 'The complete phonetic description for the speech sound [ð] in the word "then" is:',
    options: [
      'Voiceless dental fricative',
      'Voiced dental fricative',
      'Voiced alveolar stop',
      'Voiceless dental stop'
    ],
    correctAnswer: '1', // index of 'Voiced dental fricative'
    explanation: 'Correct! [ð] is a voiced dental fricative.'
  },
  {
    id: 'q_ch3_3',
    chapterId: 'ch3',
    type: 'fib',
    questionText: 'The sound produced by touching the tip of the tongue to the alveolar ridge just behind the upper front teeth is called an ________ sound (fill in an English word starting with "a").',
    correctAnswer: 'alveolar',
    explanation: 'Correct! The answer is "alveolar" (e.g. [t], [d], [s], [z]).'
  },
  {
    id: 'q_ch3_4',
    chapterId: 'ch3',
    type: 'mc',
    questionText: 'Which of the following consonant groups are all stop consonants (Stops) in English?',
    options: [
      '[p, b, t, d, k, g]',
      '[f, v, s, z, h]',
      '[m, n, ŋ]',
      '[w, j, r, l]'
    ],
    correctAnswer: '0',
    explanation: 'Correct! [p, b, t, d, k, g] are the six main stop consonants (Plosives) in standard English.'
  },
  {
    id: 'q_ch3_5',
    chapterId: 'ch3',
    type: 'mc',
    questionText: 'The manner of articulation when the velum is lowered, allowing the air stream to pass freely through the nose is called:',
    options: [
      'Liquid',
      'Nasal',
      'Glide',
      'Affricate'
    ],
    correctAnswer: '1',
    explanation: 'Correct! Lowering the velum allows air to escape through the nasal cavity rather than the oral cavity.'
  },

  // CH4
  {
    id: 'q_ch4_1',
    chapterId: 'ch4',
    type: 'tf',
    questionText: 'Substituting one phoneme for another will result in a word with a different meaning.',
    correctAnswer: 'true',
    explanation: 'Correct! Because phonemes are the smallest meaning-distinguishing units of sound. Changing a phoneme changes the meaning.'
  },
  {
    id: 'q_ch4_2',
    chapterId: 'ch4',
    type: 'mc',
    questionText: 'Which of the following pairs of words constitutes a Minimal Pair?',
    options: [
      'cat and cut',
      'meat and meet',
      'sit and site',
      'black and block'
    ],
    correctAnswer: '0', // "cat and cut"
    explanation: 'Correct! "cat" /kæt/ and "cut" /kʌt/ differ in only one vowel in the same position and have different meanings.'
  },
  {
    id: 'q_ch4_3',
    chapterId: 'ch4',
    type: 'fib',
    questionText: 'The phenomenon where two realizations of the same phoneme only occur in mutually exclusive phonetic environments is called ___________ (fill in two lowercase English words separated by a space).',
    correctAnswer: 'complementary distribution',
    explanation: 'Correct! The answer is "complementary distribution" (e.g. aspirated [tʰ] vs. unaspirated [t]).'
  },
  {
    id: 'q_ch4_4',
    chapterId: 'ch4',
    type: 'mc',
    questionText: 'Which component is mandatory in the Rhyme of an English syllable?',
    options: [
      'Onset',
      'Coda',
      'Nucleus',
      'Consonant cluster'
    ],
    correctAnswer: '2',
    explanation: 'Correct! The Nucleus (usually a vowel) is the only compulsory component of the Rhyme.'
  },
  {
    id: 'q_ch4_5',
    chapterId: 'ch4',
    type: 'mc',
    questionText: 'Identify the difference between a "Phoneme" and a "Phone":',
    options: [
      'A Phoneme is abstract and mental; a Phone is physical and phonetic.',
      'A Phone is abstract and mental; a Phoneme is physical and phonetic.',
      'A Phoneme changes meaning, whereas a Phone does not exist in English.',
      'There is no difference; they are used interchangeably.'
    ],
    correctAnswer: '0',
    explanation: 'Correct! A phoneme is the abstract representation in the mind, while a phone is the actual physical sound produced.'
  },

  // CH5
  {
    id: 'q_ch5_1',
    chapterId: 'ch5',
    type: 'tf',
    questionText: 'Blending involves combining two words by taking the beginning of one and joining it to the end of another.',
    correctAnswer: 'true',
    explanation: 'Correct! Blending is indeed the fusion of the beginning of one word and the end of another (e.g. smog = smoke + fog).'
  },
  {
    id: 'q_ch5_2',
    chapterId: 'ch5',
    type: 'mc',
    questionText: 'The verb "to donate" is formed from the noun "donation" through which process?',
    options: [
      'Conversion',
      'Backformation',
      'Clipping',
      'Blending'
    ],
    correctAnswer: '1',
    explanation: 'Correct! This is backformation, which shortens a word (usually a noun) to create another word of a different category (usually a verb).'
  },
  {
    id: 'q_ch5_3',
    chapterId: 'ch5',
    type: 'fib',
    questionText: 'The word-formation process of translating each morpheme or word component of a foreign phrase directly (e.g., "supermarket" into "siêu thị") is called _________ (fill in a lowercase English word).',
    correctAnswer: 'calque',
    explanation: 'Correct! The answer is "calque" or loan-translation.'
  },
  {
    id: 'q_ch5_4',
    chapterId: 'ch5',
    type: 'mc',
    questionText: 'The process of changing a word\'s syntactic category (e.g., noun "bottle" to verb "to bottle") without any structural change is called:',
    options: [
      'Acronym',
      'Derivation',
      'Conversion',
      'Coinage'
    ],
    correctAnswer: '2',
    explanation: 'Correct! Conversion (also known as functional shift or category change).'
  },

  // CH6
  {
    id: 'q_ch6_1',
    chapterId: 'ch6',
    type: 'tf',
    questionText: 'An inflectional morpheme never changes the grammatical category (part of speech) of a word.',
    correctAnswer: 'true',
    explanation: 'Correct! Inflectional morphemes only serve grammatical functions and keep the word class identical (e.g., "book" [N] -> "books" [N]).'
  },
  {
    id: 'q_ch6_2',
    chapterId: 'ch6',
    type: 'mc',
    questionText: 'How many morphemes are there in the word "carelessness"?',
    options: [
      '2 morphemes',
      '3 morphemes',
      '4 morphemes',
      '5 morphemes'
    ],
    correctAnswer: '1', // 3 morphemes
    explanation: 'Correct! There are 3 morphemes: "care" (free lexical), "-less" (bound derivational), and "-ness" (bound derivational).'
  },
  {
    id: 'q_ch6_3',
    chapterId: 'ch6',
    type: 'fib',
    questionText: 'What is the name of the category of free morphemes that includes functional words such as articles, prepositions, and conjunctions?',
    correctAnswer: 'functional',
    explanation: 'Correct! The answer is "functional" morphemes.'
  },
  {
    id: 'q_ch6_4',
    chapterId: 'ch6',
    type: 'mc',
    questionText: 'How many inflectional morphemes exist in modern standard English?',
    options: [
      '5 morphemes',
      '8 morphemes',
      '10 morphemes',
      'Infinitely many'
    ],
    correctAnswer: '1',
    explanation: 'Correct! Standard English has exactly 8 inflectional morphemes (-s plural, -s possessive, -s 3rd sing, -ing progress, -ed past, -en past part, -er compar, -est superl).'
  },

  // CH7_8
  {
    id: 'q_ch7_8_1',
    chapterId: 'ch7_8',
    type: 'tf',
    questionText: 'A prescriptive grammar approach describes how speakers actually speak in their daily lives.',
    correctAnswer: 'false',
    explanation: 'Correct! A prescriptive approach lays down rules about how speakers "should" speak, while a descriptive approach describes actual language use.'
  },
  {
    id: 'q_ch7_8_2',
    chapterId: 'ch7_8',
    type: 'mc',
    questionText: 'The sentence "I saw the giant with a telescope" can exhibit which of the following phenomena due to having two distinct underlying syntactic structures?',
    options: [
      'Lexical ambiguity',
      'Structural ambiguity',
      'Morphological shift',
      'Allophonic variation'
    ],
    correctAnswer: '1',
    explanation: 'Correct! Structural ambiguity occurs when a single surface structure corresponds to two distinct deep structures.'
  },
  {
    id: 'q_ch7_8_3',
    chapterId: 'ch7_8',
    type: 'fib',
    questionText: 'The property of syntax that allows phrase structure rules to be applied repeatedly inside themselves to generate infinitely long sentences is called ________ (fill in a lowercase English word).',
    correctAnswer: 'recursion',
    explanation: 'Correct! The answer is "recursion".'
  },

  // CH9
  {
    id: 'q_ch9_1',
    chapterId: 'ch9',
    type: 'tf',
    questionText: 'Polysemy refers to words that have identical spellings and sounds, but have completely unrelated origins and meanings.',
    correctAnswer: 'false',
    explanation: 'Correct! That describes homonyms. Polysemy refers to words with multiple related meanings and a shared origin.'
  },
  {
    id: 'q_ch9_2',
    chapterId: 'ch9',
    type: 'mc',
    questionText: 'In the sentence "The fire destroyed the building with intense heat", what is the semantic role of "with intense heat"?',
    options: [
      'Agent',
      'Experiencer',
      'Instrument',
      'Theme'
    ],
    correctAnswer: '2',
    explanation: 'Correct! "with intense heat" functions as the Instrument used by the agent (or force) to cause the destruction.'
  },
  {
    id: 'q_ch9_3',
    chapterId: 'ch9',
    type: 'fib',
    questionText: 'The relationship of semantic association or contiguity where one word is used to represent another closely related entity (e.g., "the White House announced" meaning the President) is called _________ (fill in a lowercase English word).',
    correctAnswer: 'metonymy',
    explanation: 'Correct! The answer is "metonymy".'
  },
  {
    id: 'q_ch9_4',
    chapterId: 'ch9',
    type: 'mc',
    questionText: 'Which of the following semantic features explains the anomalous semantic nature of the sentence "The table ate the pizza"?',
    options: [
      '"table" has the feature [-animate], so it cannot perform the action of "eat".',
      '"table" has the feature [+animate], but it does not like pizza.',
      '"pizza" has the feature [-animate], so it cannot be eaten.',
      '"eat" is a verb with the feature [+human], so it is restricted to humans.'
    ],
    correctAnswer: '0',
    explanation: 'Correct! The semantic feature analysis shows that "table" is [-animate], which conflicts with the selectional restriction of "eat" (which requires an [+animate] subject).'
  },
  ...EXTRA_QUESTION_DATA
];

export const FLASHCARD_DATA: Flashcard[] = [
  {
    id: 'fc1',
    term: 'Phonetics',
    ipa: '/fəˈnet.ɪks/',
    vietnameseText: 'Ngữ âm học',
    definition: 'Study of the physical characteristics of speech sounds.',
    hint: 'Chương 3 - Tập trung vào các thuộc tính vật lý phát âm, truyền dẫn và thính giác.'
  ,
    examples: [
      "[p] - voiceless bilabial stop",
      "[v] - voiced labiodental fricative",
      "[ŋ] - voiced velar nasal"
    ]
  },
  {
    id: 'fc2',
    term: 'Phonology',
    ipa: '/fəˈnɒl.ə.dʒi/',
    vietnameseText: 'Âm vị học',
    definition: 'Study of the abstract systems and patterns of sounds in a language.',
    hint: 'Chương 4 - Nghiên cứu hệ thống âm thanh trừu tượng và tính phân bổ trong trí não.'
  ,
    examples: [
      "/t/ - phoneme with allophones [tʰ], [t], [ɾ]",
      "/p/ vs /b/ - contrastive phonemes in 'pin' vs 'bin'",
      "Rules for vowel nasalization before nasal consonants"
    ]
  },
  {
    id: 'fc3',
    term: 'Allophone',
    ipa: '/ˈæl.ə.fəʊn/',
    vietnameseText: 'Biến thể âm vị',
    definition: 'A set of physical phones representing a single abstract phoneme.',
    hint: 'Chương 4 - Ví dụ [tʰ] và [t] là biến thể của âm vị /t/.'
  ,
    examples: [
      "[tʰ] (aspirated t) in 'tar'",
      "[t] (unaspirated t) in 'star'",
      "[ɾ] (flap) in 'writer' / 'butter'"
    ]
  },
  {
    id: 'fc4',
    term: 'Minimal Pair',
    ipa: '/ˈmɪn.ɪ.məl peə/',
    vietnameseText: 'Cặp từ tối giản',
    definition: 'Two words identical in form except for one phoneme contrast in the same position.',
    hint: 'Chương 4 - Ví dụ "bat" và "pat" chứng minh /b/ và /p/ là các âm vị riêng biệt.'
  ,
    examples: [
      "'bat' and 'pat' (contrasting /b/ and /p/)",
      "'site' and 'side' (contrasting /t/ and /d/)",
      "'fan' and 'van' (contrasting /f/ and /v/)"
    ]
  },
  {
    id: 'fc5',
    term: 'Blending',
    ipa: '/ˈblend.ɪŋ/',
    vietnameseText: 'Sự trộn từ',
    definition: 'Combining the beginning of one word and the end of another.',
    hint: 'Chương 5 - Ví dụ: Brunch (breakfast + lunch), Smog (smoke + fog).'
  ,
    examples: [
      "Brunch (breakfast + lunch)",
      "Smog (smoke + fog)",
      "Podcast (iPod + broadcast)"
    ]
  },
  {
    id: 'fc6',
    term: 'Calque / Loan-translation',
    ipa: '/kælk/',
    vietnameseText: 'Dịch sao phỏng',
    definition: 'Direct word-for-word translation of a borrowed foreign phrase.',
    hint: 'Chương 5 - Ví dụ "skyscraper" dịch từ tiếng Pháp "gratte-ciel".'
  ,
    examples: [
      "'skyscraper' (from French 'gratte-ciel')",
      "'flea market' (from French 'marché aux puces')",
      "'beer garden' (from German 'Biergarten')"
    ]
  },
  {
    id: 'fc7',
    term: 'Inflectional Morpheme',
    ipa: '/ɪnˈflek.ʃən.əl/',
    vietnameseText: 'Hình vị biến hình',
    definition: 'Morphemes indicating grammatical functions, never changing word class.',
    hint: 'Chương 6 - Tiếng Anh chỉ có đúng 8 hình vị loại này (như -s, -ed, -ing).'
  ,
    examples: [
      "-s (plural: cats, dogs)",
      "-ed (past tense: walked, played)",
      "-er (comparative: taller, faster)"
    ]
  },
  {
    id: 'fc8',
    term: 'Phrase Structure Rules',
    ipa: '/freɪz ˈstrʌk.tʃər rʊəlz/',
    vietnameseText: 'Quy tắc cấu trúc cụm từ',
    definition: 'Rules determining how phrases are constructed from words and other phrases.',
    hint: 'Chương 7-8 - Ví dụ: S -> NP VP.'
  ,
    examples: [
      "S → NP VP",
      "NP → (Art) (Adj) N",
      "VP → V (NP) (PP)"
    ]
  },
  {
    id: 'fc9',
    term: 'Structural Ambiguity',
    ipa: '/ˈstrʌk.tʃər.əl/',
    vietnameseText: 'Mơ hồ cấu trúc',
    definition: 'When a single sentence can be parsed in multiple syntactic ways.',
    hint: 'Chương 7-8 - Ví dụ: "I saw the man with a telescope".'
  ,
    examples: [
      "'I saw the man with a telescope' (Who has the telescope?)",
      "'The chicken is ready to eat' (Is the chicken eating or being eaten?)",
      "'Flying planes can be dangerous' (Are planes flying or is flying them dangerous?)"
    ]
  },
  {
    id: 'fc10',
    term: 'Recursion',
    ipa: '/rɪˈkɜː.ʃən/',
    vietnameseText: 'Tính đệ quy',
    definition: 'The capacity of phrase rules to apply repeatedly, generating infinitely nested structures.',
    hint: 'Chương 7-8 - Cho phép tạo câu dài vô tận bằng cách lồng ghép các cụm từ.'
  ,
    examples: [
      "'The cat chased the rat that ate the cheese that was on the table...'",
      "'He said that she said that they said that it was true...'",
      "'The book on the table in the room near the window by the garden...'"
    ]
  },
  {
    id: 'fc11',
    term: 'Polysemy',
    ipa: '/pəˈlɪs.ɪ.mi/',
    vietnameseText: 'Từ đa nghĩa',
    definition: 'One word having multiple meanings related by conceptual extension.',
    hint: 'Chương 9 - Ví dụ: "head" (đầu người, đầu giường, người đứng đầu).'
  ,
    examples: [
      "'head' (human head / head of bed / head of company)",
      "'foot' (human foot / foot of mountain / foot of page)",
      "'run' (to run fast / a computer run / water run)"
    ]
  },
  {
    id: 'fc12',
    term: 'Metonymy',
    ipa: '/meˈtɒn.ɪ.mi/',
    vietnameseText: 'Quan hệ hoán dụ',
    definition: 'Semantic link based on everyday close associations of container, part, or symbol.',
    hint: 'Chương 9 - Ví dụ "The White House announced..." (White House đại diện Tổng thống).'
  ,
    examples: [
      "'The White House announced...' (White House stands for the President/administration)",
      "'He drank the whole bottle.' (Bottle stands for the liquid inside)",
      "'We need some new wheels.' (Wheels stand for a car)"
    ]
  },
  {
    id: 'fc13',
    term: 'Semantic Features',
    ipa: '/sɪˈmæn.tɪk ˈfiː.tʃəz/',
    vietnameseText: 'Nét nghĩa phân tích',
    definition: 'Basic units of meaning [+animate, +human] used to assess compatibility.',
    hint: 'Chương 9 - Giải thích sự bất thường của câu "The hamburger ate the boy".'
  ,
    examples: [
      "'The hamburger ate the boy.' (Violates [+animate] requirement of 'eat')",
      "'My typewriter is pregnant.' (Violates [+animate, +female] requirement of 'pregnant')",
      "'The dog read the book.' (Violates [+human] or [+literate] requirement of 'read')"
    ]
  },
  {
    id: 'fc14',
    term: 'Articulatory Phonetics',
    ipa: '/ɑːˈtɪk.jə.lə.tər.i fəˈnet.ɪks/',
    vietnameseText: 'Ngữ âm học cấu âm',
    definition: 'The study of how speech sounds are produced using the vocal tract.',
    hint: 'Chương 3 - Phân tích cách cơ quan phát âm (môi, lưỡi, răng...) tạo ra âm thanh.'
  ,
    examples: [
      "Analyzing vocal cords vibration to produce voiced vs voiceless sounds",
      "Tracking tongue movement during the production of high back vowels like [u]",
      "Determining how airflow is obstructed by the lips to produce bilabials like [p], [b]"
    ]
  },
  {
    id: 'fc15',
    term: 'Acoustic Phonetics',
    ipa: '/əˈkuː.stɪk fəˈnet.ɪks/',
    vietnameseText: 'Ngữ âm học âm học',
    definition: 'The study of the physical properties of speech as sound waves in the air.',
    hint: 'Chương 3 - Nghiên cứu tần số, biên độ và cao độ của sóng âm thanh lời nói.'
  ,
    examples: [
      "Measuring sound waves of speech using spectrograms",
      "Analyzing the pitch frequencies (fundamental frequency F0) of a speaker's voice",
      "Comparing the formant frequencies of different vowels like [i] and [a]"
    ]
  },
  {
    id: 'fc16',
    term: 'Auditory Phonetics',
    ipa: '/ˈɔː.dɪ.tər.i fəˈnet.ɪks/',
    vietnameseText: 'Ngữ âm học thính giác',
    definition: 'The study of how speech sounds are perceived by the ear and brain.',
    hint: 'Chương 3 - Tập trung vào sự tiếp nhận của tai và giải mã âm thanh của não bộ.'
  ,
    examples: [
      "Testing how human ear converts speech sound waves into nerve signals",
      "Investigating speech perception of ambiguous words in noisy environments",
      "Analyzing how the brain categorizes sound variations into phonemic units"
    ]
  },
  {
    id: 'fc17',
    term: 'Bilabial',
    ipa: '/baɪˈleɪ.bi.əl/',
    vietnameseText: 'Âm hai môi',
    definition: 'Consonant sounds produced using both upper and lower lips.',
    hint: 'Chương 3 - Các âm trong tiếng Anh như [p], [b], [m], [w].'
  ,
    examples: [
      "[p] as in 'pat'",
      "[b] as in 'bat'",
      "[m] as in 'mat'"
    ]
  },
  {
    id: 'fc18',
    term: 'Labiodental',
    ipa: '/ˌleɪ.bi.əʊˈden.təl/',
    vietnameseText: 'Âm môi răng',
    definition: 'Consonant sounds formed with the upper teeth and the lower lip.',
    hint: 'Chương 3 - Gồm các âm [f] và [v].'
  ,
    examples: [
      "[f] as in 'fan'",
      "[v] as in 'van'",
      "[f] in 'cough'"
    ]
  },
  {
    id: 'fc19',
    term: 'Dental',
    ipa: '/ˈden.təl/',
    vietnameseText: 'Âm răng',
    definition: 'Consonant sounds produced with the tongue tip behind or between the teeth.',
    hint: 'Chương 3 - Gồm các âm [θ] (thin) và [ð] (this).'
  ,
    examples: [
      "[θ] in 'thin'",
      "[ð] in 'this'",
      "[θ] in 'bath'"
    ]
  },
  {
    id: 'fc20',
    term: 'Alveolar',
    ipa: '/ælˈvɪə.lər/',
    vietnameseText: 'Âm lợi',
    definition: 'Consonant sounds produced with the tongue tip touching the alveolar ridge.',
    hint: 'Chương 3 - Gồm các âm [t], [d], [s], [z], [n], [l].'
  ,
    examples: [
      "[t] in 'top'",
      "[d] in 'dog'",
      "[s] in 'sad'"
    ]
  },
  {
    id: 'fc21',
    term: 'Palatal',
    ipa: '/ˈpæl.ə.təl/',
    vietnameseText: 'Âm vòm cứng (ngạc)',
    definition: 'Consonant sounds produced with the tongue near the hard palate.',
    hint: 'Chương 3 - Gồm các âm [ʃ], [ʒ], [tʃ], [dʒ], [j].'
  ,
    examples: [
      "[ʃ] in 'shoe'",
      "[ʒ] in 'treasure'",
      "[tʃ] in 'cheap'"
    ]
  },
  {
    id: 'fc22',
    term: 'Velar',
    ipa: '/ˈviː.lər/',
    vietnameseText: 'Âm vòm mềm (ngạc mềm)',
    definition: 'Consonant sounds produced with the back of the tongue against the velum.',
    hint: 'Chương 3 - Gồm các âm [k], [g], [ŋ].'
  ,
    examples: [
      "[k] in 'cat'",
      "[g] in 'go'",
      "[ŋ] in 'sing'"
    ]
  },
  {
    id: 'fc23',
    term: 'Glottal',
    ipa: '/ˈɡlɒt.əl/',
    vietnameseText: 'Âm thanh hầu',
    definition: 'Sounds produced in the space between the vocal folds (glottis).',
    hint: 'Chương 3 - Gồm âm [h] và âm tắc thanh hầu [ʔ].'
  ,
    examples: [
      "[h] in 'house'",
      "[ʔ] (glottal stop) in 'uh-oh' / Cockney 'bottle'",
      "[h] in 'who'"
    ]
  },
  {
    id: 'fc24',
    term: 'Voiced Sounds',
    ipa: '/vɔɪst saʊndz/',
    vietnameseText: 'Âm hữu thanh',
    definition: 'Speech sounds produced when the vocal folds vibrate.',
    hint: 'Chương 3 - Thử đặt tay lên cổ họng khi phát âm [z], [v], [b] để cảm nhận rung.'
  ,
    examples: [
      "[z] in 'buzz' (vocal cords vibrate)",
      "[v] in 'vine' (vocal cords vibrate)",
      "[b] in 'boy' (vocal cords vibrate)"
    ]
  },
  {
    id: 'fc25',
    term: 'Voiceless Sounds',
    ipa: '/ˈvɔɪs.ləs saʊndz/',
    vietnameseText: 'Âm vô thanh',
    definition: 'Speech sounds produced without vocal fold vibration.',
    hint: 'Chương 3 - Thử phát âm [s], [f], [p] không thấy cổ họng rung.'
  ,
    examples: [
      "[s] in 'bus' (vocal cords spread apart)",
      "[f] in 'fine' (vocal cords spread apart)",
      "[p] in 'pie' (vocal cords spread apart)"
    ]
  },
  {
    id: 'fc26',
    term: 'Stop (Plosive)',
    ipa: '/stɒp/',
    vietnameseText: 'Âm tắc',
    definition: 'A consonant produced by stopping and then suddenly releasing the airflow.',
    hint: 'Chương 3 - Các âm [p], [b], [t], [d], [k], [g] trong tiếng Anh.'
  ,
    examples: [
      "[p] and [b] (bilabial stops)",
      "[t] and [d] (alveolar stops)",
      "[k] and [g] (velar stops)"
    ]
  },
  {
    id: 'fc27',
    term: 'Fricative',
    ipa: '/ˈfrɪk.ə.tɪv/',
    vietnameseText: 'Âm xát',
    definition: 'A consonant produced by squeezing airflow through a narrow gap.',
    hint: 'Chương 3 - Luồng khí bị cản trở tạo ra tiếng xát liên tục: [f], [v], [s], [z], [θ], [ð].'
  ,
    examples: [
      "[f] and [v] (labiodental fricatives)",
      "[θ] and [ð] (dental fricatives)",
      "[s] and [z] (alveolar fricatives)"
    ]
  },
  {
    id: 'fc28',
    term: 'Affricate',
    ipa: '/ˈæf.rɪ.kət/',
    vietnameseText: 'Âm tắc xát',
    definition: 'A complex sound starting with a stop and releasing into a fricative.',
    hint: 'Chương 3 - Trong tiếng Anh gồm [tʃ] (cheap) và [dʒ] (jeep).'
  ,
    examples: [
      "[tʃ] in 'church'",
      "[dʒ] in 'judge'",
      "[tʃ] in 'nature'"
    ]
  },
  {
    id: 'fc29',
    term: 'Nasal',
    ipa: '/ˈneɪ.zəl/',
    vietnameseText: 'Âm mũi',
    definition: 'Sounds produced when the velum is lowered, letting air flow out the nose.',
    hint: 'Chương 3 - Gồm ba phụ âm mũi: [m], [n], [ŋ].'
  ,
    examples: [
      "[m] (bilabial nasal) in 'mother'",
      "[n] (alveolar nasal) in 'no'",
      "[ŋ] (velar nasal) in 'song'"
    ]
  },
  {
    id: 'fc30',
    term: 'Liquid',
    ipa: '/ˈlɪk.wɪd/',
    vietnameseText: 'Âm bên / Âm lướt nước',
    definition: 'Consonant sounds produced with relatively free airflow around the tongue.',
    hint: 'Chương 3 - Các âm [l] và [r] trong tiếng Anh.'
  ,
    examples: [
      "[l] (lateral liquid) in 'light'",
      "[r] (retroflex liquid) in 'red'",
      "[l] in 'wall'"
    ]
  },
  {
    id: 'fc31',
    term: 'Glide',
    ipa: '/ɡlaɪd/',
    vietnameseText: 'Âm lướt (bán nguyên âm)',
    definition: 'Sounds produced with the tongue moving quickly to or from a vowel.',
    hint: 'Chương 3 - Gồm [w] and [j].'
  ,
    examples: [
      "[w] in 'wet'",
      "[j] in 'yes'",
      "[w] in 'one'"
    ]
  },
  {
    id: 'fc32',
    term: 'Diphthong',
    ipa: '/ˈdɪf.θɒŋ/',
    vietnameseText: 'Nguyên âm đôi',
    definition: 'A vocalic sound containing a movement or glide from one vowel to another.',
    hint: 'Chương 3 - Ví dụ âm /aɪ/ trong "my", /aʊ/ trong "cow", /eɪ/ trong "say".'
  ,
    examples: [
      "/aɪ/ as in 'buy'",
      "/aʊ/ as in 'cow'",
      "/ɔɪ/ as in 'boy'"
    ]
  },
  {
    id: 'fc33',
    term: 'Phoneme',
    ipa: '/ˈfəʊ.niːm/',
    vietnameseText: 'Âm vị',
    definition: 'The smallest abstract unit of sound that distinguishes meaning in a language.',
    hint: 'Chương 4 - Được ký hiệu trong dấu gạch chéo /p/, /b/.'
  ,
    examples: [
      "/t/ in 'top' vs /d/ in 'dog' (contrasting phonemes)",
      "/f/ in 'fan' vs /v/ in 'van' (contrasting phonemes)",
      "/ɪ/ in 'sit' vs /iː/ in 'seat' (contrasting phonemes)"
    ]
  },
  {
    id: 'fc34',
    term: 'Phone',
    ipa: '/fəʊn/',
    vietnameseText: 'Âm thực tế',
    definition: 'A physically produced speech sound, representing a concrete phonetic segment.',
    hint: 'Chương 4 - Được ký hiệu trong dấu ngoặc vuông [t], [b].'
  ,
    examples: [
      "[tʰ] (aspirated phone uttered in 'tar')",
      "[t] (unaspirated phone uttered in 'star')",
      "[ɾ] (flap phone uttered in 'writer')"
    ]
  },
  {
    id: 'fc35',
    term: 'Assimilation',
    ipa: '/əˌsɪm.ɪˈleɪ.ʃən/',
    vietnameseText: 'Sự đồng hóa âm',
    definition: 'Process where a sound segment takes on aspects of an adjacent sound.',
    hint: 'Chương 4 - Ví dụ "have to" /hæv tu/ phát âm thành /hæftə/ do vô thanh hóa.'
  ,
    examples: [
      "'have to' /hæv tu/ → [hæftə] (devoicing of /v/ before /t/)",
      "'good girl' /ɡʊd ɡɜːl/ → [ɡʊɡ ɡɜːl] (velarization of /d/ before /ɡ/)",
      "'can go' /kæn ɡəʊ/ → [kæŋ ɡəʊ] (nasal place assimilation)"
    ]
  },
  {
    id: 'fc36',
    term: 'Elision',
    ipa: '/ɪˈlɪʒ.ən/',
    vietnameseText: 'Sự nhược âm / Nuốt âm',
    definition: 'The omission of a sound segment in rapid spoken language.',
    hint: 'Chương 4 - Ví dụ "you and me" nói thành [juənmi] (nuốt âm /d/).'
  ,
    examples: [
      "'you and me' /juː ænd miː/ → [juːnmiː] (omission of /d/ and vowel reduction)",
      "'friendship' /ˈfrendʃɪp/ → [ˈfrenʃɪp] (omission of /d/)",
      "'camera' /ˈkæmərə/ → [ˈkæmrə] (omission of unstressed /ə/)"
    ]
  },
  {
    id: 'fc37',
    term: 'Etymology',
    ipa: '/ˌet.ɪˈmɒl.ə.dʒi/',
    vietnameseText: 'Từ nguyên học',
    definition: 'The study of the origin and history of a word.',
    hint: 'Chương 5 - Nghiên cứu nguồn gốc lịch sử và cách từ ngữ thay đổi qua thời gian.'
  ,
    examples: [
      "Tracing 'salary' back to Latin 'salarium' (money given to soldiers to buy salt)",
      "Tracing 'husband' back to Old Norse 'husbondi' (house-master)",
      "Tracing 'shampoo' back to Hindi 'chāmpo' (massage/press)"
    ]
  },
  {
    id: 'fc38',
    term: 'Coinage',
    ipa: '/ˈkɔɪ.nɪdʒ/',
    vietnameseText: 'Sự cấu tạo từ mới tinh',
    definition: 'The invention of totally new terms, often from brand names.',
    hint: 'Chương 5 - Ví dụ: Google, Xerox, Kleenex, Teflon.'
  ,
    examples: [
      "'Google' (invented search engine name, now used as a common verb)",
      "'Xerox' (photocopier brand, now meaning to photocopy)",
      "'Kleenex' (tissue paper brand, now meaning paper tissue)"
    ]
  },
  {
    id: 'fc39',
    term: 'Compounding',
    ipa: '/kəmˈpaʊnd.ɪŋ/',
    vietnameseText: 'Sự ghép từ',
    definition: 'The word-formation process of joining two separate words to form a new one.',
    hint: 'Chương 5 - Ví dụ: bookcase, wallpaper, textbook.'
  ,
    examples: [
      "'textbook' (noun 'text' + noun 'book')",
      "'wallpaper' (noun 'wall' + noun 'paper')",
      "'sunflower' (noun 'sun' + noun 'flower')"
    ]
  },
  {
    id: 'fc40',
    term: 'Clipping',
    ipa: '/ˈklɪp.ɪŋ/',
    vietnameseText: 'Sự cắt ngắn từ',
    definition: 'Reducing a multisyllable word to a shorter form.',
    hint: 'Chương 5 - Ví dụ: ad (advertisement), phone (telephone), flu (influenza).'
  ,
    examples: [
      "'ad' (clipped from 'advertisement')",
      "'phone' (clipped from 'telephone')",
      "'flu' (clipped from 'influenza')"
    ]
  },
  {
    id: 'fc41',
    term: 'Hypocurism',
    ipa: '/haɪˈpɒk.ər.ɪ.zəm/',
    vietnameseText: 'Sự cấu tạo từ vuốt ve / Thân mật',
    definition: 'A longer word is reduced to a single syllable, then -y or -ie is added.',
    hint: 'Chương 5 - Rất phổ biến ở Anh và Úc. Ví dụ: movie (moving picture), barbie (barbecue).'
  ,
    examples: [
      "'movie' (moving picture + -ie)",
      "'barbie' (barbecue + -ie)",
      "'chappy' (chapman / gentleman + -y)"
    ]
  },
  {
    id: 'fc42',
    term: 'Backformation',
    ipa: '/ˈbæk.fɔːˌmeɪ.ʃən/',
    vietnameseText: 'Sự cấu tạo ngược',
    definition: 'Reducing a word of one type (noun) to form a word of another type (verb).',
    hint: 'Chương 5 - Ví dụ danh từ "television" tạo ra động từ "televise", "donation" -> "donate".'
  ,
    examples: [
      "'televise' (verb backformed from noun 'television')",
      "'donate' (verb backformed from noun 'donation')",
      "'babysit' (verb backformed from noun 'babysitter')"
    ]
  },
  {
    id: 'fc43',
    term: 'Conversion',
    ipa: '/kənˈvɜː.ʃən/',
    vietnameseText: 'Sự chuyển loại từ',
    definition: 'Changing the grammatical category of a word without any syntactic change to its form.',
    hint: 'Chương 5 - Ví dụ từ danh từ sang động từ: "butter" -> "to butter the bread".'
  ,
    examples: [
      "'butter' (noun 'butter' used as verb in 'to butter the bread')",
      "'vacation' (noun used as verb in 'they are vacationing in Spain')",
      "'dirty' (adjective used as verb in 'don't dirty my clean carpet')"
    ]
  },
  {
    id: 'fc44',
    term: 'Acronym',
    ipa: '/ˈæk.rə.nɪm/',
    vietnameseText: 'Từ viết tắt phát âm thành từ',
    definition: 'New words formed from initial letters, pronounced as a single word.',
    hint: 'Chương 5 - Ví dụ: NASA, UNESCO, LASER, RADAR (khác với viết tắt từng chữ như FBI).'
  ,
    examples: [
      "'NASA' (National Aeronautics and Space Administration, spoken as a word)",
      "'UNESCO' (United Nations Educational, Scientific and Cultural Organization)",
      "'LASER' (Light Amplification by Stimulated Emission of Radiation)"
    ]
  },
  {
    id: 'fc45',
    term: 'Derivation',
    ipa: '/ˌder.ɪˈveɪ.ʃən/',
    vietnameseText: 'Sự phái sinh từ',
    definition: 'Creating new words by adding bound affixes to an existing stem.',
    hint: 'Chương 5 - Thêm tiền tố/hậu tố để đổi nghĩa hoặc từ loại: unhappy, sadness.'
  ,
    examples: [
      "'unhappy' (adding prefix 'un-' to 'happy' to change meaning)",
      "'sadness' (adding suffix '-ness' to adjective 'sad' to change word class)",
      "'disagree' (adding prefix 'dis-' to 'agree')"
    ]
  },
  {
    id: 'fc46',
    term: 'Morpheme',
    ipa: '/ˈmɔː.fiːm/',
    vietnameseText: 'Hình vị',
    definition: 'The minimal unit of meaning or grammatical function in a language.',
    hint: 'Chương 6 - Đơn vị cấu trúc từ nhỏ nhất có nghĩa: "reopened" gồm re-, open, -ed.'
  ,
    examples: [
      "'tourist' (contains 2 morphemes: free 'tour' + bound '-ist')",
      "'unhappy' (contains 2 morphemes: bound 'un-' + free 'happy')",
      "'cats' (contains 2 morphemes: free 'cat' + bound inflectional '-s')"
    ]
  },
  {
    id: 'fc47',
    term: 'Free Morpheme',
    ipa: '/friː ˈmɔː.fiːm/',
    vietnameseText: 'Hình vị tự do',
    definition: 'Morphemes that can stand completely alone as single, independent words.',
    hint: 'Chương 6 - Ví dụ: "open", "tour", "happy".'
  ,
    examples: [
      "'open' (lexical free morpheme)",
      "'house' (lexical free morpheme)",
      "'and' (functional free morpheme)"
    ]
  },
  {
    id: 'fc48',
    term: 'Bound Morpheme',
    ipa: '/baʊnd ˈmɔː.fiːm/',
    vietnameseText: 'Hình vị liên kết / Hình vị phụ thuộc',
    definition: 'Morphemes that must attach to another form and cannot stand alone.',
    hint: 'Chương 6 - Ví dụ các tiền tố, hậu tố như re-, -ist, -ed, -s.'
  ,
    examples: [
      "'un-' (derivational prefix in 'unhappy')",
      "'-ist' (derivational suffix in 'artist')",
      "'-ed' (inflectional suffix in 'walked')"
    ]
  },
  {
    id: 'fc49',
    term: 'Lexical Morpheme',
    ipa: '/ˈlek.sɪ.kəl ˈmɔː.fiːm/',
    vietnameseText: 'Hình vị từ vựng',
    definition: 'Free morphemes carrying real-world content, such as nouns, verbs, and adjectives.',
    hint: 'Chương 6 - Lớp từ mở (open class) bao gồm các từ mang nghĩa thực tế: girl, house, break.'
  ,
    examples: [
      "'girl' (noun carrying content)",
      "'break' (verb carrying content)",
      "'yellow' (adjective carrying content)"
    ]
  },
  {
    id: 'fc50',
    term: 'Functional Morpheme',
    ipa: '/ˈfʌŋk.ʃən.əl ˈmɔː.fiːm/',
    vietnameseText: 'Hình vị chức năng',
    definition: 'Free morphemes serving grammatical roles, such as prepositions, articles, and conjunctions.',
    hint: 'Chương 6 - Lớp từ đóng (closed class) gồm: and, but, on, the, she.'
  ,
    examples: [
      "'on' (preposition indicating location)",
      "'the' (definite article)",
      "'but' (coordinating conjunction)"
    ]
  },
  {
    id: 'fc51',
    term: 'Derivational Morpheme',
    ipa: '/ˌder.ɪˈveɪ.ʃən.əl ˈmɔː.fiːm/',
    vietnameseText: 'Hình vị phái sinh',
    definition: 'Bound morphemes used to construct new words or shift word class.',
    hint: 'Chương 6 - Ví dụ thêm -ment vào động từ thành danh từ: "payment".'
  ,
    examples: [
      "'-ment' in 'payment' (changes verb to noun)",
      "'re-' in 'reopen' (changes meaning to repeat)",
      "'-ful' in 'beautiful' (changes noun to adjective)"
    ]
  },
  {
    id: 'fc52',
    term: 'Allomorph',
    ipa: '/ˈæl.ə.mɔːf/',
    vietnameseText: 'Biến thể hình vị',
    definition: 'A set of closely related phonetic morphs representing a single underlying morpheme.',
    hint: 'Chương 6 - Ví dụ số nhiều -s được phát âm là [s] trong "cats", [z] trong "dogs", [ɪz] trong "buses".'
  ,
    examples: [
      "[-s] in 'cats', [-z] in 'dogs', [-ɪz] in 'buses' (allomorphs of plural morpheme)",
      "[-t] in 'walked', [-d] in 'played', [-id] in 'started' (allomorphs of past tense)",
      "['a'] before consonants (a dog) vs ['an'] before vowels (an apple) (indefinite article)"
    ]
  },
  {
    id: 'fc53',
    term: 'Prescriptive Approach',
    ipa: '/prɪˈskrɪp.tɪv əˈprəʊtʃ/',
    vietnameseText: 'Hướng tiếp cận quy phạm (chỉ định)',
    definition: 'Grammatical perspective promoting rigid, arbitrary rules for "correct" usage.',
    hint: 'Chương 7 - Thường dựa trên cấu trúc tiếng Latinh cổ điển và áp đặt người nói làm theo.'
  ,
    examples: [
      "Rule: 'Never split an infinitive' (e.g., 'to boldly go' is wrong; must be 'to go boldly')",
      "Rule: 'Never end a sentence with a preposition' (e.g., 'Who did you go with?' is wrong)",
      "Rule: 'You must use 'whom' instead of 'who' as an object pronoun'"
    ]
  },
  {
    id: 'fc54',
    term: 'Descriptive Approach',
    ipa: '/dɪˈskrɪp.tɪv əˈprəʊtʃ/',
    vietnameseText: 'Hướng tiếp cận miêu tả',
    definition: 'Grammatical perspective analyzing and documenting how language is actually used.',
    hint: 'Chương 7 - Không phán xét đúng sai, chỉ thu thập dữ liệu ngôn ngữ thực tế của người bản xứ.'
  ,
    examples: [
      "Documenting that many native speakers say 'Who did you go with?' in casual contexts",
      "Observing that 'they' is commonly used as a singular pronoun",
      "Noting that double negatives like 'I don't know nothing' are used in certain dialects"
    ]
  },
  {
    id: 'fc55',
    term: 'Generative Grammar',
    ipa: '/ˈdʒen.ər.ə.tɪv ˈɡræm.ər/',
    vietnameseText: 'Ngữ pháp tạo sinh',
    definition: 'Syntactic theory suggesting a finite set of rules can generate infinite sentences.',
    hint: 'Chương 7-8 - Lý thuyết tiên phong bởi Noam Chomsky về cấu trúc ngôn ngữ của con người.'
  ,
    examples: [
      "Formulating S → NP VP to represent native syntactic competence",
      "Explaining how a small set of grammar rules can generate millions of unique sentences",
      "Explaining how a child can produce sentences they have never heard before"
    ]
  },
  {
    id: 'fc56',
    term: 'Deep Structure',
    ipa: '/diːp ˈstrʌk.tʃər/',
    vietnameseText: 'Cấu trúc sâu',
    definition: 'The abstract underlying level representing the semantic relations of a sentence.',
    hint: 'Chương 7-8 - Chứa đựng ý nghĩa cơ bản cốt lõi trước khi được biểu hiện ra bằng lời.'
  ,
    examples: [
      "The underlying syntactic representation of 'The dog chased the cat'",
      "The semantic core shared by 'The cat was chased by the dog' and 'The dog chased the cat'",
      "The base form generated by phrase rules before movement transformations apply"
    ]
  },
  {
    id: 'fc57',
    term: 'Surface Structure',
    ipa: '/ˈsɜː.fɪs ˈstrʌk.tʃər/',
    vietnameseText: 'Cấu trúc bề mặt',
    definition: 'The linear outward arrangement of words in a sentence as it is spoken or written.',
    hint: 'Chương 7-8 - Cách sắp xếp thực tế của từ ngữ. Hai câu khác nhau có thể có cùng cấu trúc sâu.'
  ,
    examples: [
      "'The cat was chased by the dog.' (Active structural form)",
      "'The dog chased the cat.' (Passive structural form)",
      "'Who did the dog chase?' (Question structural form)"
    ]
  },
  {
    id: 'fc58',
    term: 'Conceptual Meaning',
    ipa: '/kənˈsep.tʃu.əl ˈmiː.nɪŋ/',
    vietnameseText: 'Nghĩa biểu niệm (nghĩa đen)',
    definition: 'The basic, dictionary-defined component of a word\'s meaning.',
    hint: 'Chương 9 - Nghĩa trực tiếp khách quan, ví dụ "needle" là vật mỏng, nhọn bằng thép.'
  ,
    examples: [
      "'needle' = a sharp, thin steel tool used for sewing",
      "'apple' = a round, red or green edible fruit",
      "'water' = a colorless, odorless liquid essential for life"
    ]
  },
  {
    id: 'fc59',
    term: 'Associative Meaning',
    ipa: '/əˈsəʊ.si.ə.tɪv ˈmiː.nɪŋ/',
    vietnameseText: 'Nghĩa liên tưởng',
    definition: 'The subjective feelings or connotations connected to a word.',
    hint: 'Chương 9 - Ví dụ từ "needle" (kim khâu) có thể gợi liên tưởng tới "pain" (đau) hay "drugs" (ma túy).'
  ,
    examples: [
      "'needle' associates with 'pain', 'drugs', 'blood', 'illness'",
      "'apple' associates with 'teachers', 'temptation', 'computers' (Apple inc.)",
      "'winter' associates with 'snow', 'coldness', 'Christmas', 'depression'"
    ]
  },
  {
    id: 'fc60',
    term: 'Agent',
    ipa: '/ˈeɪ.dʒənt/',
    vietnameseText: 'Tác thể (Người/Vật thực hiện hành động)',
    definition: 'The semantic role of the entity that actively initiates and performs the action.',
    hint: 'Chương 9 - Thường là chủ ngữ hữu sinh trong câu. Ví dụ: "The boy" kicked the ball.'
  ,
    examples: [
      "'The boy' in 'The boy kicked the ball' (initiates action)",
      "'The fire' in 'The fire destroyed the building' (force initiating action)",
      "'My mother' in 'My mother baked a cake' (actively performs action)"
    ]
  },
  {
    id: 'fc61',
    term: 'Theme (Patient)',
    ipa: '/θiːm/',
    vietnameseText: 'Khách thể (Thụ thể bị tác động)',
    definition: 'The semantic role of the entity affected or undergoing a change in the action.',
    hint: 'Chương 9 - Ví dụ: "The boy kicked THE BALL".'
  ,
    examples: [
      "'the ball' in 'The boy kicked the ball' (undergoes action)",
      "'the cake' in 'My mother baked a cake' (created/affected by action)",
      "'the keys' in 'He lost the keys' (undergoes change of state/possession)"
    ]
  },
  {
    id: 'fc62',
    term: 'Instrument',
    ipa: '/ˈɪn.strə.mənt/',
    vietnameseText: 'Công cụ thể',
    definition: 'The semantic role describing the inanimate entity used by the agent to do an action.',
    hint: 'Chương 9 - Thường đi sau giới từ "with". Ví dụ: write with A PEN.'
  ,
    examples: [
      "'a pen' in 'He wrote with a pen'",
      "'intense heat' in 'The fire destroyed the building with intense heat'",
      "'a hammer' in 'She broke the glass with a hammer'"
    ]
  },
  {
    id: 'fc63',
    term: 'Experiencer',
    ipa: '/ɪkˈspɪə.ri.ən.sər/',
    vietnameseText: 'Nghiệm thể',
    definition: 'The semantic role of the entity that feels, perceives, or has a mental experience.',
    hint: 'Chương 9 - Thường là chủ ngữ trong động từ cảm xúc/nhận thức. Ví dụ: "SHE" felt happy.'
  ,
    examples: [
      "'She' in 'She felt happy' (experiences feeling)",
      "'The boy' in 'The boy saw the rainbow' (experiences perception)",
      "'Everyone' in 'Everyone heard the noise' (experiences auditory sensation)"
    ]
  }
];
