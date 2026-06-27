export interface CardExtraInfo {
  vietnameseDefinition: string;
  examples: {
    eng: string;
    vie: string;
  }[];
}

export const FLASHCARD_EXTRA_INFO: Record<string, CardExtraInfo> = {
  fc1: {
    vietnameseDefinition: "Nghiên cứu các đặc tính vật lý của âm thanh lời nói (cấu âm, thính giác, âm học).",
    examples: [
      { eng: "Articulatory: Studying how the lips and teeth produce [f].", vie: "Cấu âm: Nghiên cứu cách môi và răng tạo ra âm [f]." },
      { eng: "Acoustic: Measuring the frequency and amplitude of [s] sound waves.", vie: "Âm học: Đo tần số và biên độ của sóng âm [s]." },
      { eng: "Auditory: Testing how listeners perceive the difference between [p] and [b].", vie: "Thính giác: Kiểm tra cách người nghe nhận biết sự khác biệt giữa [p] và [b]." }
    ]
  },
  fc2: {
    vietnameseDefinition: "Nghiên cứu hệ thống và quy luật âm thanh trừu tượng trong một ngôn ngữ cụ thể.",
    examples: [
      { eng: "Analyzing how the abstract phoneme /t/ is realized as different physical phones.", vie: "Phân tích cách âm vị trừu tượng /t/ được thể hiện thành các âm thực tế khác nhau." },
      { eng: "Determining syllable structure rules (e.g., why 'splat' is allowed but 'ftlas' is not).", vie: "Xác định quy tắc cấu trúc âm tiết (ví dụ: tại sao 'splat' được phép nhưng 'ftlas' thì không)." },
      { eng: "Investigating stress-shift patterns in nouns vs. verbs (e.g., 'CON-tract' vs. 'con-TRACT').", vie: "Khảo sát mô hình chuyển trọng âm ở danh từ so với động từ (ví dụ: 'CON-tract' vs. 'con-TRACT')." }
    ]
  },
  fc3: {
    vietnameseDefinition: "Biến thể phát âm thực tế của cùng một âm vị trừu tượng tùy theo ngữ cảnh.",
    examples: [
      { eng: "The aspirated [tʰ] in 'top' vs. the unaspirated [t] in 'stop'.", vie: "Âm bật hơi [tʰ] trong 'top' so với âm không bật hơi [t] trong 'stop'." },
      { eng: "The dark [ɫ] in 'feel' vs. the clear [l] in 'leaf'.", vie: "Âm [ɫ] tối trong 'feel' so với âm [l] sáng trong 'leaf'." },
      { eng: "The nasalized [æ̃] in 'man' vs. the oral [æ] in 'cat'.", vie: "Nguyên âm mũi hóa [æ̃] trong 'man' so với nguyên âm miệng [æ] trong 'cat'." }
    ]
  },
  fc4: {
    vietnameseDefinition: "Cặp từ giống hệt nhau về mọi âm ngoại trừ một âm duy nhất ở cùng một vị trí.",
    examples: [
      { eng: "pat [pæt] vs. bat [bæt] — proves that /p/ and /b/ are distinct phonemes.", vie: "pat [pæt] vs. bat [bæt] — chứng minh /p/ và /b/ là hai âm vị khác biệt." },
      { eng: "sing [sɪŋ] vs. ring [rɪŋ] — proves that /s/ and /r/ distinguish meaning.", vie: "sing [sɪŋ] vs. ring [rɪŋ] — chứng minh /s/ và /r/ phân biệt ý nghĩa từ." },
      { eng: "sheep [ʃiːp] vs. ship [ʃɪp] — establishes the contrast between vowel lengths.", vie: "sheep [ʃiːp] vs. ship [ʃɪp] — xác lập sự tương phản giữa các độ dài nguyên âm." }
    ]
  },
  fc5: {
    vietnameseDefinition: "Quá trình hòa trộn phần đầu của một từ với phần cuối của một từ khác để tạo từ mới.",
    examples: [
      { eng: "Breakfast + Lunch = Brunch", vie: "Breakfast (Bữa sáng) + Lunch (Bữa trưa) = Brunch (Bữa lỡ)" },
      { eng: "Smoke + Fog = Smog", vie: "Smoke (Khói) + Fog (Sương mù) = Smog (Sương khói)" },
      { eng: "Motor + Hotel = Motel", vie: "Motor (Mô tô) + Hotel (Khách sạn) = Motel (Khách sạn ven đường)" }
    ]
  },
  fc6: {
    vietnameseDefinition: "Dịch sao phỏng từng từ một từ tiếng nước ngoài sang tiếng bản ngữ.",
    examples: [
      { eng: "German 'Wolkenkratzer' translated literally into English as 'skyscraper'.", vie: "Từ tiếng Đức 'Wolkenkratzer' dịch thô từng từ sang tiếng Anh thành 'skyscraper' (nhà chọc trời)." },
      { eng: "French 'gratte-ciel' translated literally into Spanish as 'rascacielos'.", vie: "Tiếng Pháp 'gratte-ciel' dịch từng từ sang tiếng Tây Ban Nha thành 'rascacielos'." },
      { eng: "English 'superman' borrowed via calque from German 'Übermensch'.", vie: "Từ tiếng Anh 'superman' được mượn thông qua dịch sao phỏng từ tiếng Đức 'Übermensch'." }
    ]
  },
  fc7: {
    vietnameseDefinition: "Hình vị chỉ thực hiện chức năng ngữ pháp (thì, số nhiều, so sánh) mà không đổi từ loại.",
    examples: [
      { eng: "The plural marker '-s' in 'books' (changes singular noun to plural).", vie: "Ký hiệu số nhiều '-s' trong 'books' (chuyển danh từ số ít thành số nhiều)." },
      { eng: "The past tense marker '-ed' in 'walked' (changes present verb to past).", vie: "Ký hiệu thì quá khứ '-ed' trong 'walked' (chuyển động từ hiện tại sang quá khứ)." },
      { eng: "The comparative marker '-er' in 'taller' (indicates comparison of adjective).", vie: "Ký hiệu so sánh hơn '-er' trong 'taller' (chỉ mức độ so sánh của tính từ)." }
    ]
  },
  fc8: {
    vietnameseDefinition: "Các quy tắc xác định cách tổ chức và cấu tạo các cụm từ từ các từ đơn lẻ.",
    examples: [
      { eng: "S -> NP VP (A Sentence consists of a Noun Phrase and a Verb Phrase).", vie: "S -> NP VP (Một câu gồm cụm danh từ và cụm động từ)." },
      { eng: "NP -> Art (Adj) N (A Noun Phrase can consist of an article, optional adjective, and noun).", vie: "NP -> Art (Adj) N (Cụm danh từ gồm mạo từ, tính từ tùy chọn, và danh từ)." },
      { eng: "PP -> P NP (A Prepositional Phrase consists of a preposition and a Noun Phrase).", vie: "PP -> P NP (Cụm giới từ gồm giới từ và cụm danh từ)." }
    ]
  },
  fc9: {
    vietnameseDefinition: "Hiện tượng một câu có thể được phân tích cú pháp theo nhiều cách khác nhau dẫn đến nhiều nghĩa.",
    examples: [
      { eng: "'I saw the man with a telescope' (Did I use the telescope, or did the man have it?)", vie: "'Tôi thấy người đàn ông với kính viễn vọng' (Tôi dùng kính hay người đàn ông có kính?)" },
      { eng: "'Sherlock saw the man with binoculars' (Sherlock used binoculars or the man carried them?)", vie: "'Sherlock nhìn thấy người đàn ông bằng ống nhòm' (Sherlock dùng ống nhòm hay người đàn ông mang nó?)" },
      { eng: "'Flying planes can be dangerous' (The act of flying planes is dangerous, or planes that fly are dangerous?)", vie: "'Lái máy bay có thể nguy hiểm' (Hành động lái máy bay nguy hiểm, hay những chiếc máy bay đang bay nguy hiểm?)" }
    ]
  },
  fc10: {
    vietnameseDefinition: "Khả năng lặp lại vô hạn các quy tắc cú pháp (như mệnh đề lồng lồng ghép).",
    examples: [
      { eng: "'The dog that chased the cat that bit the rat that ate the cheese...'", vie: "'Con chó đuổi con mèo cắn con chuột ăn miếng phô mai...'" },
      { eng: "'Jane believes that Mary knows that Tom thinks that Jerry is smart.'", vie: "'Jane tin rằng Mary biết rằng Tom nghĩ rằng Jerry thông minh.'" },
      { eng: "A prepositional phrase inside a prepositional phrase: 'on the table in the room of the house'.", vie: "Cụm giới từ lồng trong cụm giới từ: 'trên bàn trong căn phòng của ngôi nhà'." }
    ]
  },
  fc11: {
    vietnameseDefinition: "Một từ duy nhất có nhiều nghĩa khác nhau nhưng có liên hệ về mặt nguồn gốc hoặc logic.",
    examples: [
      { eng: "'head' (human head, head of a bed, head of a company).", vie: "'head' (đầu người, đầu giường, người đứng đầu công ty)." },
      { eng: "'foot' (foot of a mountain, foot of a person, foot of a page).", vie: "'foot' (chân núi, bàn chân người, chân trang giấy)." },
      { eng: "'mouth' (mouth of a river, mouth of a human, mouth of a cave).", vie: "'mouth' (cửa sông, miệng người, cửa hang)." }
    ]
  },
  fc12: {
    vietnameseDefinition: "Mối liên hệ hoán dụ dựa trên sự gần gũi, quen thuộc giữa các thực thể ngoài đời thực.",
    examples: [
      { eng: "Using 'the crown' to mean 'the king' (Symbol representing holder).", vie: "Dùng 'vương miện' để chỉ 'nhà vua' (Biểu tượng đại diện cho người giữ)." },
      { eng: "Using 'the kettle is boiling' to mean 'the water inside is boiling' (Container for contents).", vie: "Dùng 'ấm đang sôi' để chỉ 'nước bên trong đang sôi' (Vật chứa đại diện cho vật được chứa)." },
      { eng: "Using 'Wall Street' to mean the entire US financial industry (Location for institution).", vie: "Dùng 'Wall Street' để chỉ toàn bộ ngành tài chính Mỹ (Địa điểm đại diện cho thiết chế)." }
    ]
  },
  fc13: {
    vietnameseDefinition: "Các nét nghĩa cơ bản (ví dụ [+human], [-animate]) dùng để phân tích sự tương hợp ngữ nghĩa của từ.",
    examples: [
      { eng: "Analyzing 'hamburger' as [-animate, -human, +food] to show why it cannot 'eat' something.", vie: "Phân tích 'hamburger' là [-animate, -human, +food] để chỉ ra tại sao nó không thể 'ăn' vật khác." },
      { eng: "Comparing 'boy' [+human, +male, -adult] with 'man' [+human, +male, +adult].", vie: "So sánh 'boy' (cậu bé) [+human, +male, -adult] với 'man' (đàn ông) [+human, +male, +adult]." },
      { eng: "Showing that the sentence 'The stone slept' is anomalous because 'sleep' requires [+animate] subject.", vie: "Chỉ ra câu 'Hòn đá ngủ' là bất thường vì động từ 'ngủ' yêu cầu chủ ngữ mang nét nghĩa [+animate]." }
    ]
  },
  fc14: {
    vietnameseDefinition: "Nghiên cứu cách các cơ quan phát âm (môi, răng, lưỡi, thanh quản) tạo ra các âm lời nói.",
    examples: [
      { eng: "Examining how the vocal folds vibrate or remain open to create voiced vs. voiceless sounds.", vie: "Nghiên cứu cách dây thanh rung hoặc mở ra để tạo âm hữu thanh so với âm vô thanh." },
      { eng: "Describing how the air is blocked by both lips to form the bilabial stop [p].", vie: "Mô tả cách luồng khí bị chặn hoàn toàn bởi hai môi để tạo âm tắc hai môi [p]." },
      { eng: "Tracing the path of air through the oral cavity vs. nasal cavity depending on velum position.", vie: "Theo dõi luồng khí qua khoang miệng so với khoang mũi tùy thuộc vào vị trí ngạc mềm." }
    ]
  },
  fc15: {
    vietnameseDefinition: "Nghiên cứu các đặc tính vật lý của âm thanh lời nói khi truyền trong không khí dưới dạng sóng âm.",
    examples: [
      { eng: "Measuring fundamental frequency (pitch) of a voice in Hertz.", vie: "Đo tần số cơ bản (cao độ) của giọng nói bằng Hertz." },
      { eng: "Analyzing formant frequencies to distinguish vowel qualities like [i] vs. [u].", vie: "Phân tích tần số định hình (formant) để phân biệt các chất lượng nguyên âm như [i] so với [u]." },
      { eng: "Using spectrograms to inspect acoustic noise levels in fricative consonants like [ʃ].", vie: "Sử dụng quang phổ ký để kiểm tra mức độ tiếng ồn vật lý ở các phụ âm xát như [ʃ]." }
    ]
  },
  fc16: {
    vietnameseDefinition: "Nghiên cứu cách tai tiếp nhận sóng âm lời nói và chuyển đổi tín hiệu lên não bộ xử lý.",
    examples: [
      { eng: "Studying how the eardrum vibrates in response to acoustic pressure of speech.", vie: "Nghiên cứu màng nhĩ rung phản hồi lại áp suất âm học của lời nói." },
      { eng: "Analyzing how the auditory nerve sends speech frequency signals to the temporal lobe.", vie: "Phân tích cách dây thần kinh thính giác gửi tín hiệu tần số lời nói lên thùy thái dương." },
      { eng: "Testing speech intelligibility in noisy environments using subjective hearing exams.", vie: "Kiểm tra mức độ dễ hiểu của lời nói trong môi trường ồn bằng các bài kiểm tra thính lực." }
    ]
  },
  fc17: {
    vietnameseDefinition: "Các phụ âm được phát ra bằng cách dùng cả môi trên và môi dưới.",
    examples: [
      { eng: "[p] as in 'pin' (voiceless bilabial stop).", vie: "[p] trong 'pin' (âm tắc hai môi vô thanh)." },
      { eng: "[b] as in 'bat' (voiced bilabial stop).", vie: "[b] trong 'bat' (âm tắc hai môi hữu thanh)." },
      { eng: "[m] as in 'man' (voiced bilabial nasal).", vie: "[m] trong 'man' (âm mũi hai môi hữu thanh)." }
    ]
  },
  fc18: {
    vietnameseDefinition: "Các âm phụ âm được phát ra bằng cách kết hợp răng trên và môi dưới.",
    examples: [
      { eng: "[f] as in 'fan' (voiceless labiodental fricative).", vie: "[f] trong 'fan' (âm xát môi răng vô thanh)." },
      { eng: "[v] as in 'van' (voiced labiodental fricative).", vie: "[v] trong 'van' (âm xát môi răng hữu thanh)." },
      { eng: "The fast transition in 'five' containing both [f] and [v].", vie: "Sự chuyển tiếp nhanh trong từ 'five' chứa cả hai âm môi răng [f] và [v]." }
    ]
  },
  fc19: {
    vietnameseDefinition: "Các âm được tạo ra bằng cách đặt đầu lưỡi ở giữa hoặc ngay sau răng cửa trên.",
    examples: [
      { eng: "[θ] as in 'thin' (voiceless dental fricative).", vie: "[θ] trong 'thin' (âm xát răng vô thanh)." },
      { eng: "[ð] as in 'this' (voiced dental fricative).", vie: "[ð] trong 'this' (âm xát răng hữu thanh)." },
      { eng: "The teeth contact made when pronouncing 'three' and 'mother'.", vie: "Sự tiếp xúc của răng được thực hiện khi phát âm 'three' và 'mother'." }
    ]
  },
  fc20: {
    vietnameseDefinition: "Các âm phát ra khi đầu lưỡi chạm vào phần lợi cứng ngay sau răng cửa trên.",
    examples: [
      { eng: "[t] as in 'top' and [d] as in 'dog' (alveolar stops).", vie: "[t] trong 'top' và [d] trong 'dog' (âm tắc lợi)." },
      { eng: "[s] as in 'sip' and [z] as in 'zip' (alveolar fricatives).", vie: "[s] trong 'sip' và [z] trong 'zip' (âm xát lợi)." },
      { eng: "[n] as in 'nut' and [l] as in 'lip' (alveolar nasal and liquid).", vie: "[n] trong 'nut' và [l] trong 'lip' (âm mũi và âm lướt lợi)." }
    ]
  },
  fc21: {
    vietnameseDefinition: "Các âm phụ âm được phát ra khi thân lưỡi nâng lên gần hoặc chạm vào vòm cứng (ngạc).",
    examples: [
      { eng: "[ʃ] as in 'shoe' (voiceless palatal fricative).", vie: "[ʃ] trong 'shoe' (âm xát vòm cứng vô thanh)." },
      { eng: "[tʃ] as in 'church' (voiceless palatal affricate).", vie: "[tʃ] trong 'church' (âm tắc xát vòm cứng vô thanh)." },
      { eng: "[j] as in 'yes' (voiced palatal glide).", vie: "[j] trong 'yes' (âm lướt vòm cứng hữu thanh)." }
    ]
  },
  fc22: {
    vietnameseDefinition: "Các âm phụ âm được phát ra khi phần sau của lưỡi tiếp xúc với vòm mềm (ngạc mềm).",
    examples: [
      { eng: "[k] as in 'cat' (voiceless velar stop).", vie: "[k] trong 'cat' (âm tắc ngạc mềm vô thanh)." },
      { eng: "[g] as in 'go' (voiced velar stop).", vie: "[g] trong 'go' (âm tắc ngạc mềm hữu thanh)." },
      { eng: "[ŋ] as in 'sing' (voiced velar nasal).", vie: "[ŋ] trong 'sing' (âm mũi ngạc mềm hữu thanh)." }
    ]
  },
  fc23: {
    vietnameseDefinition: "Các âm thanh được tạo ra tại khe thanh môn (khoảng trống giữa hai dây thanh).",
    examples: [
      { eng: "[h] as in 'house' (voiceless glottal fricative).", vie: "[h] trong 'house' (âm xát thanh hầu vô thanh)." },
      { eng: "[ʔ] as the catch in the middle of 'uh-oh' (glottal stop).", vie: "[ʔ] là tiếng nghẹn luồng khí ở giữa từ 'uh-oh' (âm tắc thanh hầu)." },
      { eng: "The sound in Cockney English 'bottle' pronounced as [bɒʔl].", vie: "Cách phát âm từ 'bottle' trong tiếng Anh Cockney thành [bɒʔl]." }
    ]
  },
  fc24: {
    vietnameseDefinition: "Các âm thanh lời nói được phát ra khi dây thanh khép hờ và rung lên liên tục.",
    examples: [
      { eng: "All English vowels (e.g., [a], [i], [u]) are voiced.", vie: "Tất cả các nguyên âm tiếng Anh (ví dụ: [a], [i], [u]) đều là âm hữu thanh." },
      { eng: "Consonants like [z], [v], [d], [g], [m] are voiced.", vie: "Các phụ âm như [z], [v], [d], [g], [m] đều là âm hữu thanh." },
      { eng: "The continuous vibration felt on your throat when humming [m-m-m].", vie: "Sự rung liên tục cảm nhận được ở cổ họng khi ngân dài âm [m-m-m]." }
    ]
  },
  fc25: {
    vietnameseDefinition: "Các âm lời nói phát ra khi dây thanh mở rộng và luồng khí đi qua không gây rung dây thanh.",
    examples: [
      { eng: "Consonants like [s], [f], [p], [t], [k] are voiceless.", vie: "Các phụ âm như [s], [f], [p], [t], [k] là những âm vô thanh." },
      { eng: "The quiet whisper of the sound [s-s-s] with no throat vibration.", vie: "Tiếng xì thầm của âm [s-s-s] hoàn toàn không gây rung cổ họng." },
      { eng: "The initial sound [h] in 'happy' (pure air passing with vocal folds open).", vie: "Âm đầu [h] trong từ 'happy' (khí thuần túy đi qua khi dây thanh mở)." }
    ]
  },
  fc26: {
    vietnameseDefinition: "Phụ âm được phát ra bằng cách chặn đứng luồng khí hoàn toàn, sau đó đột ngột thả ra.",
    examples: [
      { eng: "[p] and [b] (bilabial stops).", vie: "[p] và [b] (âm tắc hai môi)." },
      { eng: "[t] and [d] (alveolar stops).", vie: "[t] và [d] (âm tắc lợi)." },
      { eng: "[k] and [g] (velar stops).", vie: "[k] và [g] (âm tắc ngạc mềm)." }
    ]
  },
  fc27: {
    vietnameseDefinition: "Phụ âm được phát ra bằng cách thu hẹp luồng khí tạo ra tiếng xát liên tục.",
    examples: [
      { eng: "[f] and [v] (labiodental fricatives).", vie: "[f] và [v] (âm xát môi răng)." },
      { eng: "[s] and [z] (alveolar fricatives).", vie: "[s] và [z] (âm xát lợi)." },
      { eng: "[ʃ] and [ʒ] (palatal fricatives).", vie: "[ʃ] và [ʒ] (âm xát ngạc)." }
    ]
  },
  fc28: {
    vietnameseDefinition: "Âm phức hợp bắt đầu bằng một âm tắc và ngay sau đó được giải phóng thành âm xát.",
    examples: [
      { eng: "[tʃ] as in 'cheap' and 'church' (voiceless affricate).", vie: "[tʃ] trong 'cheap' và 'church' (âm tắc xát vô thanh)." },
      { eng: "[dʒ] as in 'jeep' and 'judge' (voiced affricate).", vie: "[dʒ] trong 'jeep' và 'judge' (âm tắc xát hữu thanh)." },
      { eng: "The initial and final sounds of the word 'judge' [dʒʌdʒ].", vie: "Âm đầu và âm cuối của từ 'judge' đều là âm tắc xát [dʒʌdʒ]." }
    ]
  },
  fc29: {
    vietnameseDefinition: "Âm được tạo ra khi hạ ngạc mềm, chặn khoang miệng để khí đi ra hoàn toàn bằng đường mũi.",
    examples: [
      { eng: "[m] as in 'morning' (bilabial nasal).", vie: "[m] trong 'morning' (âm mũi hai môi)." },
      { eng: "[n] as in 'night' (alveolar nasal).", vie: "[n] trong 'night' (âm mũi lợi)." },
      { eng: "[ŋ] as in 'song' (velar nasal).", vie: "[ŋ] trong 'song' (âm mũi ngạc mềm)." }
    ]
  },
  fc30: {
    vietnameseDefinition: "Âm phụ âm được tạo ra khi luồng hơi thoát ra tương đối tự do qua hai bên rìa lưỡi.",
    examples: [
      { eng: "[l] as in 'light' (alveolar lateral liquid).", vie: "[l] trong 'light' (âm bên lợi)." },
      { eng: "[r] as in 'red' (alveolar retroflex/approximant liquid).", vie: "[r] trong 'red' (âm tiếp cận lợi)." },
      { eng: "The distinct sound contrast in the pair 'late' vs. 'rate'.", vie: "Sự tương phản âm rõ rệt trong cặp từ 'late' so với 'rate'." }
    ]
  },
  fc31: {
    vietnameseDefinition: "Phụ âm bán nguyên âm, tạo ra khi cơ quan phát âm lướt nhanh từ âm này sang âm khác.",
    examples: [
      { eng: "[w] as in 'wet' (bilabial glide).", vie: "[w] trong 'wet' (âm lướt hai môi)." },
      { eng: "[j] as in 'yes' (palatal glide).", vie: "[j] trong 'yes' (âm lướt ngạc)." },
      { eng: "The transition sounds in 'we' and 'you'.", vie: "Các âm chuyển tiếp nhanh trong từ 'we' và 'you'." }
    ]
  },
  fc32: {
    vietnameseDefinition: "Âm nguyên âm đôi, trong đó lưỡi di chuyển chuyển tiếp từ nguyên âm này sang nguyên âm khác.",
    examples: [
      { eng: "/aɪ/ as in 'my' and 'buy'.", vie: "/aɪ/ trong 'my' và 'buy'." },
      { eng: "/aʊ/ as in 'cow' and 'house'.", vie: "/aʊ/ trong 'cow' và 'house'." },
      { eng: "/eɪ/ as in 'say' and 'plate'.", vie: "/eɪ/ trong 'say' và 'plate'." }
    ]
  },
  fc33: {
    vietnameseDefinition: "Đơn vị âm thanh trừu tượng nhỏ nhất có khả năng phân biệt ý nghĩa từ trong một ngôn ngữ.",
    examples: [
      { eng: "/p/ vs. /b/ in English (proves contrast in 'pin' vs 'bin').", vie: "/p/ so với /b/ trong tiếng Anh (chứng minh sự tương phản ở 'pin' và 'bin')." },
      { eng: "/t/ vs. /d/ in 'ten' vs 'den'.", vie: "/t/ so với /d/ trong cặp từ 'ten' và 'den'." },
      { eng: "/k/ vs. /g/ in 'coat' vs 'goat'.", vie: "/k/ so với /g/ trong 'coat' và 'goat'." }
    ]
  },
  fc34: {
    vietnameseDefinition: "Âm phát ra thực tế bằng vật lý, là sự hiện thực hóa cụ thể của âm vị.",
    examples: [
      { eng: "The aspirated [pʰ] produced when someone speaks 'pen'.", vie: "Âm bật hơi thực tế [pʰ] được tạo ra khi ai đó nói từ 'pen'." },
      { eng: "The flap [ɾ] sound in the fast American pronunciation of 'writer' [raɪɾər].", vie: "Âm vỗ [ɾ] trong cách phát âm nhanh kiểu Mỹ từ 'writer' [raɪɾər]." },
      { eng: "The unreleased stop [t̚] at the end of the word 'cat' in rapid speech.", vie: "Âm tắc không giải phóng [t̚] ở cuối từ 'cat' trong lời nói nhanh." }
    ]
  },
  fc35: {
    vietnameseDefinition: "Hiện tượng biến đổi âm thanh khiến cho một âm trở nên giống với âm lân cận.",
    examples: [
      { eng: "'have to' /hæv tu/ -> pronounced as /hæftə/ (voicing assimilation).", vie: "'have to' /hæv tu/ -> phát âm thành /hæftə/ (đồng hóa vô thanh)." },
      { eng: "'in put' -> pronounced as 'imput' /ɪmpʊt/ (place of articulation assimilation).", vie: "'in put' -> phát âm thành /ɪmpʊt/ (đồng hóa vị trí cấu âm từ alveolar sang bilabial)." },
      { eng: "'ten bags' -> pronounced as /tem bægz/.", vie: "'ten bags' -> phát âm nhanh thành /tem bægz/." }
    ]
  },
  fc36: {
    vietnameseDefinition: "Sự nuốt âm, lược bỏ hoàn toàn một phân đoạn âm trong lời nói tự nhiên nhanh.",
    examples: [
      { eng: "'you and me' -> pronounced as [juənmi] (omits the /d/ consonant).", vie: "'you and me' -> phát âm thành [juənmi] (nuốt phụ âm /d/)." },
      { eng: "'friendship' -> pronounced as [frenʃɪp] (omits the /d/ sound).", vie: "'friendship' -> phát âm thành [frenʃɪp] (lược bỏ âm /d/)." },
      { eng: "'every' -> pronounced as two syllables [evri] instead of three [evəri].", vie: "'every' -> phát âm thành 2 âm tiết [evri] thay vì 3 âm tiết [evəri]." }
    ]
  },
  fc37: {
    vietnameseDefinition: "Nghiên cứu về lịch sử và nguồn gốc hình thành của từ vựng.",
    examples: [
      { eng: "Tracing 'sandwich' back to John Montagu, the 4th Earl of Sandwich.", vie: "Truy nguyên nguồn gốc từ 'sandwich' từ John Montagu, Bá tước thứ 4 vùng Sandwich." },
      { eng: "Tracing 'algebra' to the Arabic word 'al-jabr' (reunion of broken parts).", vie: "Truy nguyên từ 'algebra' (đại số) từ từ tiếng Ả Rập 'al-jabr'." },
      { eng: "Finding that 'clue' originally meant a ball of thread in Old English.", vie: "Phát hiện từ 'clue' ban đầu mang nghĩa là cuộn chỉ trong tiếng Anh cổ." }
    ]
  },
  fc38: {
    vietnameseDefinition: "Sự cấu tạo từ mới tinh từ các thương hiệu hoặc tên riêng một cách hoàn toàn tự do.",
    examples: [
      { eng: "Coining 'Google' to mean 'to search the internet'.", vie: "Sáng tạo ra từ 'Google' mang nghĩa là 'tìm kiếm thông tin trên internet'." },
      { eng: "Using 'Xerox' to represent the action of photocopying documents.", vie: "Dùng từ thương hiệu 'Xerox' đại diện cho hành động photocopy tài liệu." },
      { eng: "Using 'Kleenex' as a generic noun for any facial tissue paper.", vie: "Sử dụng từ 'Kleenex' như một danh từ chung chỉ giấy ăn lau mặt." }
    ]
  },
  fc39: {
    vietnameseDefinition: "Cách ghép hai từ độc lập hoàn chỉnh lại với nhau để tạo thành một từ mới.",
    examples: [
      { eng: "Book + Case = Bookcase (tủ sách)", vie: "Book (Sách) + Case (Hòm/Kệ) = Bookcase (Tủ sách)" },
      { eng: "Wall + Paper = Wallpaper (giấy dán tường)", vie: "Wall (Tường) + Paper (Giấy) = Wallpaper (Giấy dán tường)" },
      { eng: "Sun + Flower = Sunflower (hoa hướng dương)", vie: "Sun (Mặt trời) + Flower (Hoa) = Sunflower (Hoa hướng dương)" }
    ]
  },
  fc40: {
    vietnameseDefinition: "Rút gọn một từ có nhiều âm tiết thành một dạng ngắn gọn hơn mà giữ nguyên nghĩa.",
    examples: [
      { eng: "Advertisement -> Ad", vie: "Advertisement (Quảng cáo) -> Ad" },
      { eng: "Telephone -> Phone", vie: "Telephone (Điện thoại) -> Phone" },
      { eng: "Influenza -> Flu", vie: "Influenza (Cúm) -> Flu" }
    ]
  },
  fc41: {
    vietnameseDefinition: "Từ được rút gọn thành một âm tiết, sau đó thêm đuôi thân mật '-y' hoặc '-ie'.",
    examples: [
      { eng: "Moving picture -> Movie", vie: "Moving picture (Ảnh động/Phim) -> Movie" },
      { eng: "Barbecue -> Barbie (very common in Australian English)", vie: "Barbecue (Thịt nướng) -> Barbie (cực kỳ phổ biến ở tiếng Anh Úc)" },
      { eng: "Television -> Telly", vie: "Television (Vô tuyến) -> Telly" }
    ]
  },
  fc42: {
    vietnameseDefinition: "Quá trình lược bỏ đuôi giống hậu tố của danh từ để tạo ra một động từ mới.",
    examples: [
      { eng: "Television (noun) -> Televise (verb)", vie: "Television (Danh từ) -> Televise (Động từ)" },
      { eng: "Donation (noun) -> Donate (verb)", vie: "Donation (Danh từ) -> Donate (Động từ)" },
      { eng: "Editor (noun) -> Edit (verb)", vie: "Editor (Danh từ) -> Edit (Động từ)" }
    ]
  },
  fc43: {
    vietnameseDefinition: "Sự chuyển đổi từ loại của một từ mà không làm thay đổi hình thức chữ viết.",
    examples: [
      { eng: "Noun to Verb: 'butter' (bơ) -> 'to butter the bread' (phết bơ lên bánh mì).", vie: "Danh từ sang động từ: 'butter' (bơ) -> 'to butter the bread' (phết bơ lên bánh)." },
      { eng: "Verb to Noun: 'to guess' (đoán) -> 'make a guess' (một lời phán đoán).", vie: "Động từ sang danh từ: 'to guess' -> 'make a guess' (đưa ra một phỏng đoán)." },
      { eng: "Adjective to Verb: 'dirty' (bẩn) -> 'to dirty the floor' (làm bẩn sàn nhà).", vie: "Tính từ sang động từ: 'dirty' -> 'to dirty the floor' (làm bẩn sàn)." }
    ]
  },
  fc44: {
    vietnameseDefinition: "Từ được ghép từ các chữ cái đầu của một cụm từ và phát âm như một từ độc lập.",
    examples: [
      { eng: "NASA (National Aeronautics and Space Administration).", vie: "NASA (Cơ quan Hàng không và Vũ trụ Hoa Kỳ)." },
      { eng: "LASER (Light Amplification by Stimulated Emission of Radiation).", vie: "LASER (Khuếch đại ánh sáng bằng phát xạ kích thích)." },
      { eng: "UNESCO (United Nations Educational, Scientific and Cultural Organization).", vie: "UNESCO (Tổ chức Giáo dục, Khoa học và Văn hóa Liên Hợp Quốc)." }
    ]
  },
  fc45: {
    vietnameseDefinition: "Tạo từ mới bằng cách thêm các phụ tố liên kết (tiền tố, hậu tố) vào từ gốc.",
    examples: [
      { eng: "happy (adj) -> unhappy (adds prefix un- to change meaning to opposite).", vie: "happy (Hạnh phúc) -> unhappy (Bất hạnh - thêm tiền tố un-)." },
      { eng: "sad (adj) -> sadness (noun) (adds suffix -ness to change word category).", vie: "sad (Buồn) -> sadness (Nỗi buồn - thêm hậu tố -ness chuyển từ loại)." },
      { eng: "examine (verb) -> examination (noun) (adds suffix -ation).", vie: "examine (Khảo sát) -> examination (Kỳ thi/Cuộc kiểm tra - thêm hậu tố -ation)." }
    ]
  },
  fc46: {
    vietnameseDefinition: "Đơn vị nhỏ nhất cấu tạo nên từ mang ý nghĩa hoặc chức năng ngữ pháp rõ rệt.",
    examples: [
      { eng: "'cats' consists of 2 morphemes: 'cat' (meaningful animal) + '-s' (grammatical plural).", vie: "'cats' gồm 2 hình vị: 'cat' (con mèo) + '-s' (số nhiều)." },
      { eng: "'reopened' has 3 morphemes: 're-' (again) + 'open' (start) + '-ed' (past tense).", vie: "'reopened' có 3 hình vị: 're-' (lại) + 'open' (mở) + '-ed' (quá khứ)." },
      { eng: "'unhappy' has 2 morphemes: 'un-' (not) + 'happy' (pleased).", vie: "'unhappy' có 2 hình vị: 'un-' (không) + 'happy' (vui vẻ)." }
    ]
  },
  fc47: {
    vietnameseDefinition: "Hình vị có thể đứng độc lập hoàn toàn để tạo thành một từ có nghĩa.",
    examples: [
      { eng: "'girl' (noun carrying lexical meaning).", vie: "'girl' (danh từ mang nghĩa từ vựng)." },
      { eng: "'talk' (verb carrying action content).", vie: "'talk' (động từ mang nghĩa hành động)." },
      { eng: "'sad' (adjective describing emotional state).", vie: "'sad' (tính từ tả trạng thái cảm xúc)." }
    ]
  },
  fc48: {
    vietnameseDefinition: "Hình vị bắt buộc phải liên kết với hình vị khác, không bao giờ đứng độc lập một mình.",
    examples: [
      { eng: "Prefixes like 'un-', 're-', 'pre-'.", vie: "Các tiền tố như 'un-', 're-', 'pre-'." },
      { eng: "Suffixes like '-less', '-ment', '-ed', '-s'.", vie: "Các hậu tố như '-less', '-ment', '-ed', '-s'." },
      { eng: "The bound root '-ceive' in words like 'receive', 'perceive', 'deceive'.", vie: "Gốc từ liên kết '-ceive' trong các từ 'receive', 'perceive', 'deceive'." }
    ]
  },
  fc49: {
    vietnameseDefinition: "Hình vị tự do mang ý nghĩa thế giới quan cụ thể, bao gồm danh từ, động từ, tính từ.",
    examples: [
      { eng: "Nouns like 'house', 'computer', 'university'.", vie: "Danh từ như 'house', 'computer', 'university'." },
      { eng: "Verbs like 'swim', 'analyze', 'write'.", vie: "Động từ như 'swim', 'analyze', 'write'." },
      { eng: "Adjectives like 'clever', 'beautiful', 'cold'.", vie: "Tính từ như 'clever', 'beautiful', 'cold'." }
    ]
  },
  fc50: {
    vietnameseDefinition: "Hình vị tự do thực hiện vai trò ngữ pháp liên kết câu, bao gồm giới từ, mạo từ, liên từ.",
    examples: [
      { eng: "Prepositions like 'on', 'at', 'in', 'under'.", vie: "Giới từ như 'on', 'at', 'in', 'under'." },
      { eng: "Conjunctions like 'and', 'but', 'because', 'although'.", vie: "Liên từ như 'and', 'but', 'because', 'although'." },
      { eng: "Articles like 'the', 'a', 'an'.", vie: "Mạo từ như 'the', 'a', 'an'." }
    ]
  },
  fc51: {
    vietnameseDefinition: "Hình vị liên kết được dùng để cấu tạo từ mới hoặc làm thay đổi hoàn toàn từ loại gốc.",
    examples: [
      { eng: "'-ful' added to noun 'care' to make adjective 'careful'.", vie: "'-ful' thêm vào danh từ 'care' tạo thành tính từ 'careful'." },
      { eng: "'-ize' added to adjective 'modern' to make verb 'modernize'.", vie: "'-ize' thêm vào tính từ 'modern' tạo thành động từ 'modernize'." },
      { eng: "'dis-' added to verb 'agree' to make opposite verb 'disagree'.", vie: "'dis-' thêm vào động từ 'agree' tạo thành động từ ngược nghĩa 'disagree'." }
    ]
  },
  fc52: {
    vietnameseDefinition: "Tập hợp các biến thể phát âm thực tế của cùng một hình vị ngữ nghĩa.",
    examples: [
      { eng: "Plural morpheme '-s' realized as [s] in 'cats', [z] in 'dogs', [ɪz] in 'buses'.", vie: "Hình vị số nhiều '-s' được phát âm là [s] trong 'cats', [z] trong 'dogs', và [ɪz] trong 'buses'." },
      { eng: "Past tense '-ed' realized as [t] in 'walked', [d] in 'played', [ɪd] in 'wanted'.", vie: "Hình vị quá khứ '-ed' phát âm là [t] trong 'walked', [d] trong 'played', và [ɪd] trong 'wanted'." },
      { eng: "The negative prefix 'in-' changing to 'im-' in 'impossible', 'ir-' in 'irregular'.", vie: "Tiền tố phủ định 'in-' biến đổi thành 'im-' trong 'impossible', 'ir-' trong 'irregular'." }
    ]
  },
  fc53: {
    vietnameseDefinition: "Trường phái ngữ pháp cổ điển đặt ra các quy tắc khắt khe buộc người nói phải tuân theo chuẩn mực.",
    examples: [
      { eng: "Insisting that you must never end a sentence with a preposition (e.g., saying 'With whom did you go?' instead of 'Who did you go with?').", vie: "Yêu cầu không được kết thúc câu bằng giới từ (ví dụ phải dùng 'With whom did you go?' thay vì 'Who did you go with?')." },
      { eng: "Forbidding split infinitives (e.g., claiming 'to boldly go' is incorrect, must say 'to go boldly').", vie: "Cấm chia cắt động từ nguyên thể (ví dụ cho rằng 'to boldly go' là sai, phải nói 'to go boldly')." },
      { eng: "Rule stating double negatives like 'I don't know nothing' are completely illogical and incorrect.", vie: "Quy tắc khẳng định phủ định kép như 'I don't know nothing' là phi logic và sai trái." }
    ]
  },
  fc54: {
    vietnameseDefinition: "Trường phái ngôn ngữ hiện đại chỉ miêu tả, phân tích cách ngôn ngữ được sử dụng thực tế mà không phán xét đúng sai.",
    examples: [
      { eng: "Documenting that many native speakers say 'Who did you go with?' as standard casual English.", vie: "Ghi chép lại rằng rất nhiều người bản xứ nói 'Who did you go with?' như một chuẩn mực tiếng Anh giao tiếp tự nhiên." },
      { eng: "Studying how African American Vernacular English (AAVE) uses invariant 'be' (e.g., 'they be playing').", vie: "Nghiên cứu cách tiếng Anh người Mỹ gốc Phi (AAVE) sử dụng từ 'be' bất biến (ví dụ: 'they be playing')." },
      { eng: "Analyzing how texting has created new syntactic abbreviations like 'lol' or 'smh' in digital writing.", vie: "Phân tích cách nhắn tin tạo ra các viết tắt cú pháp mới như 'lol' hay 'smh' trong văn viết số." }
    ]
  },
  fc55: {
    vietnameseDefinition: "Hệ thống các quy tắc cú pháp hữu hạn có thể tạo ra vô hạn các câu đúng ngữ pháp.",
    examples: [
      { eng: "Formulated by Noam Chomsky to explain how humans grasp and learn language.", vie: "Được xây dựng bởi Noam Chomsky để giải thích cách con người nắm bắt và học ngôn ngữ." },
      { eng: "Explaining how a child can instantly understand a sentence they have never heard before.", vie: "Giải thích cách một đứa trẻ có thể hiểu ngay lập tức một câu nói mà nó chưa bao giờ nghe thấy trước đó." },
      { eng: "Demonstrating that grammar is independent of meaning (e.g., 'Colorless green ideas sleep furiously').", vie: "Chứng minh ngữ pháp độc lập với ngữ nghĩa (ví dụ: 'Những ý tưởng xanh không màu ngủ một cách giận dữ' - vẫn đúng cú pháp)." }
    ]
  },
  fc56: {
    vietnameseDefinition: "Cấp độ cấu trúc trừu tượng nằm sâu bên dưới, đại diện cho quan hệ ngữ nghĩa cốt lõi của câu.",
    examples: [
      { eng: "The deep semantic structure of both 'The boy kicked the ball' and 'The ball was kicked by the boy' is identical.", vie: "Cấu trúc ngữ nghĩa sâu của cả hai câu 'Cậu bé đá quả bóng' và 'Quả bóng được đá bởi cậu bé' là giống hệt nhau." },
      { eng: "Representing the core proposition (who did what to whom) in our mental storage.", vie: "Đại diện cho mệnh đề cốt lõi (ai đã làm gì với ai) trong kho lưu trữ trí não của chúng ta." },
      { eng: "Generating different surface formats starting from a single underlying deep representation.", vie: "Tạo ra các định dạng bề mặt khác nhau bắt đầu từ một biểu diễn sâu ẩn dưới." }
    ]
  },
  fc57: {
    vietnameseDefinition: "Hình thức tuyến tính bên ngoài của câu khi được phát âm ra hoặc viết ra.",
    examples: [
      { eng: "Active voice: 'Sherlock solved the case' (one surface structure layout).", vie: "Thể chủ động: 'Sherlock solved the case' (một bố cục cấu trúc bề mặt)." },
      { eng: "Passive voice: 'The case was solved by Sherlock' (a different surface layout representing same deep meaning).", vie: "Thể bị động: 'The case was solved by Sherlock' (một bố cục bề mặt khác đại diện cho cùng nghĩa sâu)." },
      { eng: "Analyzing the physical word order and spelling of spoken statements.", vie: "Phân tích trật tự từ vật lý và cách đánh vần của các câu nói ra." }
    ]
  },
  fc58: {
    vietnameseDefinition: "Nghĩa biểu niệm, nghĩa đen khách quan được định nghĩa trực tiếp trong từ điển.",
    examples: [
      { eng: "'needle' -> a sharp, thin, steel instrument used for sewing.", vie: "'needle' (kim) -> một dụng cụ bằng thép, mỏng, sắc nhọn dùng để khâu vá." },
      { eng: "'home' -> the physical place where one lives.", vie: "'home' (nhà) -> nơi vật lý nơi một người sinh sống." },
      { eng: "'rose' -> a type of flower that grows on a thorny bush.", vie: "'rose' (hoa hồng) -> một loại hoa mọc trên bụi cây có gai." }
    ]
  },
  fc59: {
    vietnameseDefinition: "Nghĩa liên tưởng, các cảm xúc, liên tưởng chủ quan mà một từ gợi lên cho người nghe.",
    examples: [
      { eng: "'needle' -> evokes associations with pain, blood, drugs, or illness.", vie: "'needle' (kim khâu) -> gợi liên tưởng tới sự đau đớn, máu, ma túy, hoặc bệnh tật." },
      { eng: "'home' -> evokes associations with warmth, safety, family, and comfort.", vie: "'home' (mái ấm) -> gợi liên tưởng tới sự ấm áp, an toàn, gia đình, và sự dễ chịu." },
      { eng: "'rose' -> evokes associations with love, romance, beauty, or valentines.", vie: "'rose' (hoa hồng) -> gợi liên tưởng tới tình yêu, sự lãng mạn, vẻ đẹp, hoặc lễ tình nhân." }
    ]
  },
  fc60: {
    vietnameseDefinition: "Vai trò ngữ nghĩa của thực thể chủ động thực hiện hành động chính trong câu.",
    examples: [
      { eng: "In 'THE BOY kicked the ball', 'The boy' is the Agent.", vie: "Trong câu 'THE BOY kicked the ball', 'The boy' (Cậu bé) đóng vai trò Tác thể." },
      { eng: "In 'THE WIND blew the door shut', 'The wind' is the Agent (force of nature acting as agent).", vie: "Trong câu 'THE WIND blew the door shut', 'The wind' (Cơn gió) là Tác thể (lực lượng tự nhiên đóng vai tác nhân)." },
      { eng: "In 'THE DOG barked', 'The dog' is the active Agent initiating the noise.", vie: "Trong câu 'THE DOG barked', 'The dog' (Con chó) là Tác thể phát ra tiếng sủa." }
    ]
  },
  fc61: {
    vietnameseDefinition: "Vai trò ngữ nghĩa của thực thể bị tác động, chịu ảnh hưởng hoặc trải qua sự biến đổi.",
    examples: [
      { eng: "In 'The boy kicked THE BALL', 'the ball' is the Theme (undergoes physical impact).", vie: "Trong câu 'The boy kicked THE BALL', 'the ball' (Quả bóng) là Khách thể (chịu lực tác động vật lý)." },
      { eng: "In 'Sherlock found THE CLUE', 'the clue' is the passive Theme of the discovery.", vie: "Trong câu 'Sherlock found THE CLUE', 'the clue' (Manh mối) là Khách thể thụ động của sự phát hiện." },
      { eng: "In 'The sun melted THE ICE', 'the ice' is the Theme undergoing physical change.", vie: "Trong câu 'The sun melted THE ICE', 'the ice' (Băng) là Khách thể trải qua sự biến đổi trạng thái." }
    ]
  },
  fc62: {
    vietnameseDefinition: "Vai trò ngữ nghĩa của thực thể vô sinh được tác thể sử dụng để thực hiện hành động.",
    examples: [
      { eng: "In 'She wrote the letter WITH A PEN', 'a pen' is the Instrument.", vie: "Trong câu 'She wrote the letter WITH A PEN', 'a pen' (Chiếc bút) đóng vai trò Công cụ thể." },
      { eng: "In 'He cleared the snow WITH A SHOVEL', 'a shovel' is the Instrument used.", vie: "Trong câu 'He cleared the snow WITH A SHOVEL', 'a shovel' (Chiếc xẻng) là Công cụ thể được dùng." },
      { eng: "In 'The burglar opened the safe WITH A PIN', 'a pin' is the Instrument.", vie: "Trong câu 'The burglar opened the safe WITH A PIN', 'a pin' (Chiếc ghim) là Công cụ thể." }
    ]
  },
  fc63: {
    vietnameseDefinition: "Vai trò ngữ nghĩa của thực thể hữu sinh trải nghiệm một cảm xúc, nhận thức hoặc trạng thái tâm lý.",
    examples: [
      { eng: "In 'SHE felt happy', 'She' is the Experiencer (having the emotional state).", vie: "Trong câu 'SHE felt happy', 'She' (Cô ấy) là Nghiệm thể (trải qua trạng thái cảm xúc)." },
      { eng: "In 'THE CAT saw the mouse', 'The cat' is the Experiencer of the visual perception.", vie: "Trong câu 'THE CAT saw the mouse', 'The cat' (Con mèo) là Nghiệm thể của tri giác thị giác." },
      { eng: "In 'TOM heard the loud noise', 'Tom' is the Experiencer of auditory sensation.", vie: "Trong câu 'TOM heard the loud noise', 'Tom' là Nghiệm thể của sự cảm nhận âm thanh." }
    ]
  }
};
