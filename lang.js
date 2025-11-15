document.addEventListener('DOMContentLoaded', function() {

    const translations = {
        ru: {
            nav_home: 'Главная',
            nav_links: 'Ссылки',
            nav_soft: 'Инструменты',
            nav_contact: 'Контакт',
            anim_phrases: [{
                p1: "Просто ",
                p2: "создатель"
            }, {
                p1: "Просто ",
                p2: "делаю"
            }, {
                p1: "Просто ",
                p2: "привет"
            }, {
                p1: "Просто ",
                p2: "придумываю"
            }, {
                p1: "Просто ",
                p2: "не файл"
            }, ],
            hero_tagline: 'совсем чучут эдитор',
            hero_desc: 'Немного делаю эдиты, каждый раз борясь с перфекционизмом и недовольством результатами. Иногда я делаю что-то большее, чтобы получить новый опыт, и то, что вы видите сейчас, — не исключение. Могу пропадать, чтобы найти мотивацию, вдохновение или просто отдохнуть от всего этого, но в полной мере расслабиться всё равно не получается. Я страдаю от низкой самооценки, но считаю, что именно это и помогает мне двигаться дальше',
            hero_contacts_title: 'Мои контакты для связи со мной',
            hero_btn_tg: 'Telegram',
            hero_btn_ds: 'Discord',
            hero_btn_email: 'Email',
            links_tiktok_title: 'TikTok Аккаунт',
            links_tiktok_desc: 'Основная площадка',
            links_tg_title: 'Telegram Канал',
            links_tg_desc: 'Личный блог',
            links_yt: 'YouTube',
            links_xhs: 'Xiaohongshu',
            links_ig: 'Instagram',
            links_footer: 'Здесь все мои активные профили. Любые другие профили, использующие мое имя, не имеют ко мне никакого отношения',
            soft_title1: 'Программы',
            soft_ae_title: 'After Effects 2024',
            soft_ae_desc: 'Для создания эдитов',
            soft_tp_title: 'Topaz AI Video Enhance 3.5.2',
            soft_tp_desc: 'Для улучшения качества видео',
            soft_ff_title: 'FlowFrames 1.14.0',
            soft_ff_desc: 'Для увеличения кадров видео',
            soft_title2: 'Техника',
            soft_cpu: 'Процессор',
            soft_gpu: 'Видеокарта',
            soft_ram: 'ОЗУ',
            soft_button: 'Подробнее',
            contact_title: 'Связаться со мной',
            contact_desc: 'Для связи со мной воспользуйтесь формой или контактами ниже',
            contact_email_label: 'Email',
            contact_tg_label: 'Telegram',
            form_name: 'Ваше Имя',
            form_email: 'Ваше Email',
            form_message: 'Ваше Сообщение',
            form_button: 'Отправить сообщение',
            form_success: (seconds) => `Спасибо!<br>Через <strong>${seconds}</strong> перенаправитесь на другую страницу для подтверждения* отправки сообщения.<br><br>*Нужно будет пройти капчу`,
            form_redirecting: 'Перенаправляем...',
            footer_copyright: '© 2025 Yelfy. Все права защищены.'
        },
        en: {
            nav_home: 'Home',
            nav_links: 'Links',
            nav_soft: 'Soft',
            nav_contact: 'Contact',
            anim_phrases: [{
                p1: "Just a ",
                p2: "creator"
            }, {
                p1: "Just ",
                p2: "creating"
            }, {
                p1: "Just ",
                p2: "saying hi"
            }, {
                p1: "Just ",
                p2: "imagining"
            }, {
                p1: "Just ",
                p2: "not a file"
            }, ],
            hero_tagline: 'some editor',
            hero_desc: "I dabble in editing, and it's a constant battle with perfectionism and never being satisfied with the outcome. Occasionally, I take on bigger projects to gain new experiences, and what you're seeing now is one of those times. I may disappear for a while to find motivation, inspiration, or simply to rest from it all, yet I can never seem to completely unwind. I struggle with low self-esteem, but I find that it's what keeps me pushing forward",
            hero_contacts_title: 'My contacts for getting in touch',
            hero_btn_tg: 'Telegram',
            hero_btn_ds: 'Discord',
            hero_btn_email: 'Email',
            links_tiktok_title: 'TikTok Account',
            links_tiktok_desc: 'Main platform',
            links_tg_title: 'Telegram Channel',
            links_tg_desc: 'Personal blog',
            links_yt: 'YouTube',
            links_xhs: 'Xiaohongshu',
            links_ig: 'Instagram',
            links_footer: 'Here are all my active profiles. Any other profiles using my name are not affiliated with me',
            soft_title1: 'Software',
            soft_ae_title: 'After Effects 2024',
            soft_ae_desc: 'For creating edits',
            soft_tp_title: 'Topaz AI Video Enhance 3.5.2',
            soft_tp_desc: 'For enhancing video quality',
            soft_ff_title: 'FlowFrames 1.14.0',
            soft_ff_desc: 'For video frame interpolation',
            soft_title2: 'Hardware',
            soft_cpu: 'CPU',
            soft_gpu: 'GPU',
            soft_ram: 'RAM',
            soft_button: 'Learn More',
            contact_title: 'Get In Touch',
            contact_desc: 'To contact me, please use the form or the details below',
            contact_email_label: 'Email',
            contact_tg_label: 'Telegram',
            form_name: 'Your Name',
            form_email: 'Your Email',
            form_message: 'Your Message',
            form_button: 'Send Message',
            form_success: (seconds) => `Thank you!<br>You will be redirected in <strong>${seconds}</strong> seconds to another page to confirm* sending the message.<br><br>*You will need to pass a captcha`,
            form_redirecting: 'Redirecting...',
            footer_copyright: '© 2025 Yelfy. All rights reserved.'
        }
    };

    const langRuBtn = document.getElementById('lang-ru');
    const langEnBtn = document.getElementById('lang-en');
    const allLangElements = document.querySelectorAll('[data-lang-key]');

    const part1Element = document.getElementById('anim-part1');
    const part2Element = document.getElementById('anim-part2');
    let phrases = [];
    let currentIndex = 0;
    let animationInterval;

    const contactForm = document.getElementById('contact-form');
    const successMessageContainer = document.getElementById('success-message');
    const successTextElement = document.getElementById('success-text');

    const setLanguage = (lang) => {
        allLangElements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        phrases = translations[lang].anim_phrases;
        currentIndex = 0;
        startTextAnimation();

        if (lang === 'ru') {
            langRuBtn.classList.add('active');
            langEnBtn.classList.remove('active');
            document.documentElement.lang = 'ru';
        } else {
            langEnBtn.classList.add('active');
            langRuBtn.classList.remove('active');
            document.documentElement.lang = 'en';
        }
        localStorage.setItem('language', lang);
    };

    function updateText() {
        if (!part1Element || !part2Element) return;
        part1Element.classList.remove('is-visible');
        part2Element.classList.remove('is-visible');
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % phrases.length;
            part1Element.textContent = phrases[currentIndex].p1;
            part2Element.textContent = phrases[currentIndex].p2;
            part1Element.classList.add('is-visible');
            part2Element.classList.add('is-visible');
        }, 1000);
    }

    function startTextAnimation() {
        if (!part1Element || !part2Element) return;
        clearInterval(animationInterval);
        part1Element.textContent = phrases[0].p1;
        part2Element.textContent = phrases[0].p2;
        part1Element.classList.add('is-visible');
        part2Element.classList.add('is-visible');
        animationInterval = setInterval(updateText, 6000);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            contactForm.classList.add('hidden');
            successMessageContainer.classList.remove('hidden');
            setTimeout(() => {
                contactForm.submit();
            }, 5000);
            setTimeout(() => {
                successMessageContainer.classList.add('hidden');
                setTimeout(() => {
                    contactForm.classList.remove('hidden');
                    contactForm.reset();
                }, 500);
            }, 10000);
            let countdownSeconds = 5;
            const currentLang = localStorage.getItem('language') || 'ru';
            const updateVisualCountdown = () => {
                successTextElement.innerHTML = translations[currentLang].form_success(countdownSeconds);
            };
            updateVisualCountdown();
            const countdownInterval = setInterval(() => {
                countdownSeconds--;
                if (countdownSeconds >= 0) {
                    updateVisualCountdown();
                } else {
                    clearInterval(countdownInterval);
                    successTextElement.textContent = translations[currentLang].form_redirecting;
                }
            }, 1000);
        });
    }

    langRuBtn.addEventListener('click', () => setLanguage('ru'));
    langEnBtn.addEventListener('click', () => setLanguage('en'));

    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.split('-')[0];
    const initialLang = savedLang || (browserLang === 'ru' ? 'ru' : 'en');
    
    phrases = translations[initialLang].anim_phrases;
    if (part1Element && part2Element && phrases.length > 0) {
       part1Element.textContent = phrases[0].p1;
       part2Element.textContent = phrases[0].p2;
    }
    
    setLanguage(initialLang);

    const burgerMenu = document.getElementById('mobile-menu');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = mainNav.querySelectorAll('a');

    burgerMenu.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        });
    });
});