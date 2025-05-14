// js/i18n.js

// Словари переводов
const translations = {
  ru: {
    //Общие
    title: "Главная - Английский с Марией Валерьевной",
    brand: "English with Maria",
    nav_home: "Главная",
    nav_about: "О себе",
    nav_achievements: "Достижения",
    nav_materials: "Материалы",
    //Общие

    //index.html
    hero_title: "Английский с Марией Валерьевной",
    hero_desc: "20 лет опыта в школе, сотни счастливых учеников и доказанные методы подготовки к ОГЭ/ЕГЭ.",
    btn_more: "Узнать больше",
    services_title: "Что получит ваш ребёнок",
    service1_title: "Подготовка к ОГЭ/ЕГЭ",
    service1_desc: "Разбор «ловушек» в заданиях и пробные тесты в формате экзамена.",
    service2_title: "Английский язык это легко!",
    service2_desc: "Учим английский через фильмы.",
    service3_title: "Помощь с домашкой",
    service3_desc: "Простое объяснение сложных тем и помощь в написании сочинений.",
    contact_prompt: "Есть вопросы?",
    contact_sub: "Напишите мне — и я обязательно отвечу вам!",
    btn_contact: "Связаться со мной",
    //index.html

     // about.html
    about_title:     "О себе - Английский с Марией Валерьевной",
    bio_name:        "Григорьева Мария Валерьевна",
    bio_lead:        "Учитель английского языка с 20-летним стажем, выпускница ЯГУ, автор методик «Английский без стресса».",
    bio_mission:     "Моя миссия — сделать изучение языка увлекательным и понятным каждому. Я уверена, что лучший способ учиться — через практику и живое общение.",
    skills_title:    "Ключевые навыки",
    skill_grammar:   "Грамматика",
    skill_listening: "Аудирование",
    skill_speaking:  "Разговорная речь",
    skill_writing:   "Письменная речь",
    timeline_title:       "Мой путь",
    timeline_item1_title: "1998–2002: Студент ЯГУ",
    timeline_item1_desc:  "Факультет английской филологии, диплом с отличием.",
    timeline_item2_title: "2003–2012: Преподаватель в школе МБСОУ Мальжагарская СОШ, с. Улахан-Ан",
    timeline_item2_desc:  "Внедрение интерактивных методик.",
    timeline_item3_title: "2012–2020: Магистратура СВФУ",
    timeline_item3_desc:  "Красный диплом об окончании.",
    timeline_item4_title: "2020–настоящее время: Учитель в школе №29",
    timeline_item4_desc:  "Индивидуальные и групповые занятия, онлайн-школа «English with Maria».",
     // about.html

     //achievements.html
    achievements_title:           "Мои достижения - Английский с Марией Валерьевной",
    achievements_heading:         "Мои достижения",
    achievements_sub:             "За 20 лет работы мои ученики добились впечатляющих результатов, а мои методики признаны лучшими.",
    student_achievements_title:   "Достижения моих учеников",
    student_ach1_title:           "100% сдачи ЕГЭ",
    student_ach1_desc:            "Все мои выпускники успешно сдали ЕГЭ на 80+ баллов.",
    student_ach2_title:           "Победы на олимпиадах",
    student_ach2_desc:            "Мои ученики — призёры региональных и всероссийских олимпиад.",
    student_ach3_title:           "Стипендии и гранты",
    student_ach3_desc:            "Получили гранты на обучение в лучших языковых школах мира.",
    personal_title:               "Личные достижения",
    personal_ach1:                "Автор методики «Английский без стресса»",
    personal_ach2:                "Лектор на международной конференции TESOL (2022)",
    personal_ach3:                "Публикация в журнале «Modern Language Teaching»",
    //achievements.html

    // materials.html
    materials_title:      "Материалы для занятий",
    materials_heading:    "Отправить домашнее задание",
    label_email:          "Ваш email",
    label_comment:        "Комментарий",
    label_file:           "Файл домашнего задания",
    btn_submit:           "Отправить",
    status_success:       "Файл успешно отправлен!",
    status_error:         "Ошибка при отправке. Попробуйте позже.",
    // materials.html

    //contacts.html
    contacts_title:    "Контакты - Английский с Марией Валерьевной",
    nav_contacts:      "Контакты",
    contacts_heading:  "Связаться с Марией Валерьевной",
    contacts_sub:      "Оставьте сообщение, и я свяжусь с вами в ближайшее время!",
    label_name:        "Имя",
    label_email:       "Email",
    label_message:     "Сообщение",
    btn_send:          "Отправить",
    status_success:    "Спасибо! Ваше сообщение отправлено.",
    footer_contact:    "Телефон: +7 (914) 827-95-53 · Email: grigmaryiavaleri@mail.ru",

    //contacts.html
  },
  en: {
    //Общие
    title: "Home - English with Maria",
    brand: "English with Maria",
    nav_home: "Home",
    nav_about: "About",
    nav_achievements: "Achievements",
    nav_materials: "Materials",
    //Общие

    //index.html
    hero_title: "English with Maria",
    hero_desc: "20 years of teaching experience, hundreds of happy students, and proven exam prep methods.",
    btn_more: "Learn more",
    services_title: "What your child will gain",
    service1_title: "Exam preparation",
    service1_desc: "Identify exam traps and practice real-test formats.",
    service2_title: "English is easy!",
    service2_desc: "Learn English through movies.",
    service3_title: "Homework help",
    service3_desc: "Clear explanations and essay assistance.",
    contact_prompt: "Have questions?",
    contact_sub: "Write to me — I'll get back to you soon!",
    btn_contact: "Contact me",
    //index.html

     // about.html
    about_title:     "About Me - English with Maria",
    bio_name:        "Maria Valeryevna Grigorieva",
    bio_lead:        "English teacher with 20 years of experience, graduate of NEFU, creator of the “English Without Stress” methods.",
    bio_mission:     "My mission is to make language learning engaging and clear for everyone. I believe the best way to learn is through practice and real communication.",
    skills_title:    "Key Skills",
    skill_grammar:   "Grammar",
    skill_listening: "Listening",
    skill_speaking:  "Speaking",
    skill_writing:   "Writing",
    timeline_title:       "My Journey",
    timeline_item1_title: "1998–2002: NEFU Student",
    timeline_item1_desc:  "Faculty of English Philology, graduated with honors.",
    timeline_item2_title: "2003–2012: Teacher at MBOU Malzhagarskaya School, Ulakhan-An village",
    timeline_item2_desc:  "Implemented interactive teaching methods.",
    timeline_item3_title: "2012–2020: Master’s at NEFU",
    timeline_item3_desc:  "Graduated with red diploma.",
    timeline_item4_title: "2020–Present: Teacher at School No. 29",
    timeline_item4_desc:  "Individual and group lessons, online school “English with Maria.”",
    // about.html

    //achievements.html
    achievements_title:           "My Achievements - English with Maria",
    achievements_heading:         "My Achievements",
    achievements_sub:             "Over 20 years, my students have achieved outstanding results, and my methods are recognized as the best.",
    student_achievements_title:   "My Students’ Achievements",
    student_ach1_title:           "100% Exam Pass Rate",
    student_ach1_desc:            "All my graduates passed the exam with 80+ points.",
    student_ach2_title:           "Olympiad Winners",
    student_ach2_desc:            "My students are prizewinners of regional and national olympiads.",
    student_ach3_title:           "Scholarships & Grants",
    student_ach3_desc:            "They received grants to study at top language schools worldwide.",
    personal_title:               "Personal Achievements",
    personal_ach1:                "Author of the “English Without Stress” method",
    personal_ach2:                "Speaker at the TESOL International Conference (2022)",
    personal_ach3:                "Published in Modern Language Teaching journal",
    //achievements.html

     // materials.html
    materials_title:      "Class Materials",
    materials_heading:    "Submit Your Homework",
    label_email:          "Your email",
    label_comment:        "Comment",
    label_file:           "Homework file",
    btn_submit:           "Send",
    status_success:       "File sent successfully!",
    status_error:         "Error sending file. Please try again later.",
     // materials.html

    //contacts.html
    contacts_title:    "Contacts - English with Maria",
    nav_contacts:      "Contacts",
    contacts_heading:  "Get in Touch with Maria",
    contacts_sub:      "Leave a message and I’ll get back to you soon!",
    label_name:        "Name",
    label_email:       "Email",
    label_message:     "Message",
    btn_send:          "Send",
    status_success:    "Thank you! Your message has been sent.",
    footer_contact:    "Phone: +7 (914) 827-95-53 · Email: grigmaryiavaleri@mail.ru",
    //contacts.html
  }
};

// Элементы и ключ хранения
const switcher   = document.getElementById("lang-switcher");
const htmlEl     = document.documentElement;
const storageKey = "site-language";

// Инициализация при загрузке
(function initLanguage() {
  const saved = localStorage.getItem(storageKey) || "ru";
  switcher.value = saved;
  applyLanguage(saved);
})();

// Обработка смены языка
switcher.addEventListener("change", () => {
  const lang = switcher.value;
  localStorage.setItem(storageKey, lang);
  applyLanguage(lang);
});

// Функция применения переводов
function applyLanguage(lang) {
  htmlEl.lang = lang;  // меняем атрибут <html lang="">
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.dataset.i18n;
    const text = translations[lang][key] || "";
    elem.textContent = text;
  });
  // А отдельно заголовок документа
  document.title = translations[lang].title;
}
