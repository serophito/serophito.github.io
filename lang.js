document.addEventListener('DOMContentLoaded', function() {

    const translations = {
        ru: {
            nav_home: 'Главная',
            nav_links: 'Ссылки',
            nav_soft: 'Инструменты',
            nav_contact: 'Контакт',
            copy_success: 'Скопировано',
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
            form_success_new: 'Сообщение успешно отправлено!',
            footer_copyright: '© 2025 Yelfy. Все права защищены.'
        },
        en: {
            nav_home: 'Home',
            nav_links: 'Links',
            nav_soft: 'Soft',
            nav_contact: 'Contact',
            copy_success: 'Copied',
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
            hero_desc: "I do a bit of editing, each time struggling with perfectionism and dissatisfaction with the results. Sometimes I do something bigger to get new experience, and what you see now is no exception. I might disappear to find motivation, inspiration, or just to take a break from it all, but I never manage to fully relax. I suffer from low self-esteem, but I believe this is what helps me move forward",
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
            form_success_new: 'Message sent successfully!',
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

    const setLanguage = (lang) => {
        allLangElements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang][key] && !element.classList.contains('is-copying')) {
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
        if (phrases.length > 0) {
            part1Element.textContent = phrases[0].p1;
            part2Element.textContent = phrases[0].p2;
            part1Element.classList.add('is-visible');
            part2Element.classList.add('is-visible');
            animationInterval = setInterval(updateText, 6000);
        }
    }
    langRuBtn.addEventListener('click', () => setLanguage('ru'));
    langEnBtn.addEventListener('click', () => setLanguage('en'));
    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.split('-')[0];
    const initialLang = savedLang || (browserLang === 'ru' ? 'ru' : 'en');
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

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const successMessage = document.getElementById('success-message');
        const handleSubmit = (event) => {
            event.preventDefault();
            const myForm = event.target;
            const formData = new FormData(myForm);
            fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString(),
                })
                .then(() => {
                    contactForm.classList.add('hidden');
                    successMessage.classList.remove('hidden');
                    setTimeout(() => {
                        successMessage.classList.add('hidden');
                        setTimeout(() => {
                            contactForm.classList.remove('hidden');
                            contactForm.reset();
                        }, 600);
                    }, 5000);
                })
                .catch((error) => {
                    alert('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.');
                });
        };
        contactForm.addEventListener("submit", handleSubmit);
    }

    const emailAddress = 'yelfymail@gmail.com';
    function setupCopyOnClick(buttonId) {
        const button = document.getElementById(buttonId);
        if (!button) return;

        const originalTextContent = button.textContent;
        const originalLangKey = button.getAttribute('data-lang-key');

        button.addEventListener('click', function(event) {
            event.preventDefault();
            if (button.classList.contains('is-copying')) return;
            
            navigator.clipboard.writeText(emailAddress).then(() => {
                const currentLang = localStorage.getItem('language') || 'ru';
                
                button.classList.add('is-copying');
                button.textContent = translations[currentLang].copy_success;
                
                setTimeout(() => {
                    if (originalLangKey) {
                        button.textContent = translations[currentLang][originalLangKey];
                    } else {
                        button.textContent = originalTextContent;
                    }
                    button.classList.remove('is-copying');
                }, 4000);
            }).catch(err => {
                console.error('Ошибка копирования: ', err);
            });
        });
    }
    setupCopyOnClick('copy-email-hero');
    setupCopyOnClick('copy-email-contact');
});