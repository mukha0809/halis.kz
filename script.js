/**
 * HALIÇ QAZAQ COMMUNITY WEBSITE ENGINE
 * Core Javascript Architecture - Luxury Elite Build
 * Executed in 2026
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // ==========================================================================
    // 1. ИНИЦИАЛИЗАЦИЯ И СЛУЖЕБНЫЕ НАСТРОЙКИ
    // ==========================================================================
    const DOM = {
        header: document.getElementById('mainHeader'),
        progressBar: document.getElementById('progressBar'),
        burgerToggle: document.getElementById('burgerToggle'),
        mobileMenu: document.getElementById('mobileMenu'),
        closeMenu: document.getElementById('closeMenu'),
        mobLinks: document.querySelectorAll('.mob-link'),
        tabBtns: document.querySelectorAll('.tab-luxury-btn'),
        tabPanels: document.querySelectorAll('.tab-luxury-panel'),
        faqItems: document.querySelectorAll('.faq-item-luxury'),
        premiumModal: document.getElementById('premiumMemberModal'),
        closeModalBtn: document.getElementById('closePremiumModalBtn'),
        modalImg: document.getElementById('modalMemberImage'),
        modalName: document.getElementById('modalMemberName'),
        modalRole: document.getElementById('modalMemberRole'),
        modalDesc: document.getElementById('modalMemberDescription'),
        modalQuote: document.getElementById('modalMemberQuote'),
        scrollRevealElements: document.querySelectorAll('.scroll-reveal')
    };

    // ==========================================================================
    // 2. ДАТА-ЦЕНТР КОМАНДЫ (БАЗА ДАННЫХ ИНФОРМАЦИИ)
    // ==========================================================================
    const TEAM_DATABASE = {
        muhambet: {
            name: "Болатов Мухамбет",
            role: "Leader & Visionary",
            desc: "Идейный вдохновитель и главный архитектор структуры сообщества. Мухамбет осуществляет глобальное планирование векторов развития, координирует связи высшего уровня и открывает двери для масштабных студенческих коллабораций. Его видение направлено на создание устойчивой платформы, которая останется сильным наследием для следующих поколений казахстанцев в Haliç.",
            quote: "Мы строим не просто стандартное университетское сообщество. Наша цель — создать влиятельный бренд и элитный нетворкинг казахских студентов в Турции.",
            img: "1000098658.jpg"
        },
        tursynay: {
            name: "Нурболкызы Турсынай",
            role: "Leader & Strategy",
            desc: "Стратегический разум организации. Турсынай мастерски трансформирует абстрактные творческие идеи в детальные дорожные карты проектов. Она управляет внутренними операционными процессами, контролирует баланс ресурсов и обеспечивает высочайший уровень исполнения каждой инициативы комьюнити.",
            quote: "Эффективная стратегия — это не просто план действий, это искусство видеть потенциал в хаосе и направлять команду к безупречному результату.",
            img: "1000098659.jpg"
        },
        smm: {
            name: "Альбина & Biбасия",
            role: "SMM & Visual Aesthetics",
            desc: "Главные создатели медиа-эстетики комьюнити. Этот тандем полностью отвечает за разработку визуального языка, съемку премиальных Reels, трендовый монтаж и системное ведение Instagram. Благодаря их профессиональному подходу к мобилографии и дизайну, медиаресурсы Halic Qazaq Community выглядят дорого, стильно и привлекают внимание широкой аудитории.",
            quote: "Мы не занимаемся обычным постингом. Мы создаем визуальное искусство, которое транслирует престиж нашего студенческого комьюнити.",
            img: "1000098655.jpg"
        },
        org: {
            name: "Рауана & Сымбат",
            role: "Event Architects",
            desc: "Креативные продюсеры и менеджеры всех внутренних событий. Рауана и Сымбат осуществляют кастинг спикеров, детально прописывают вовлекающие сценарии для встреч и координируют логистику на площадках. Если мероприятие проходит гладко и оставляет у гостей восторг — это прямая заслуга их организаторского таланта.",
            quote: "Идеально подготовленное мероприятие — это сложный механизм, который для гостей должен выглядеть легким, вдохновляющим и незабываемым квестом.",
            img: "1000098656.jpg"
        },
        collab: {
            name: "Арай & Алтынай",
            role: "Global Relations",
            desc: "Дипломатический корпус нашего сообщества. Арай и Алтынай специализируются на внешних связях, ведут переговоры со студенческими организациями других топовых вузов Стамбула, привлекают спонсоров и партнеров для совместных проектов. Их работа значительно расширяет влияние и авторитет сообщества на международной арене.",
            quote: "Успех любой современной структуры держится на синергии. Мы открываем новые горизонты через масштабные интеграции и доверительное партнерство.",
            img: "1000098657.jpg"
        }
    };

    // ==========================================================================
    // 3. ТРЕКЕР ПРОКРУТКИ И ДИНАМИКА ХЕДЕРА
    // ==========================================================================
    const handleScrollDynamics = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Линия прогресса
        if (docHeight > 0) {
            const scrollPercentage = (scrollTop / docHeight) * 100;
            DOM.progressBar.style.width = `${scrollPercentage}%`;
        }

        // Анимация шапки при скролле
        if (scrollTop > 50) {
            DOM.header.classList.add('scrolled');
        } else {
            DOM.header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScrollDynamics, { passive: true });

    // ==========================================================================
    // 4. МОБИЛЬНАЯ НАВИГАЦИЯ (БУРГЕР И ВСПЛЫВАЮЩЕЕ МЕНЮ)
    // ==========================================================================
    const toggleMobileMenu = (action) => {
        if (action === 'open') {
            DOM.mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            DOM.mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (DOM.burgerToggle) {
        DOM.burgerToggle.addEventListener('click', () => toggleMobileMenu('open'));
    }

    if (DOM.closeMenu) {
        DOM.closeMenu.addEventListener('click', () => toggleMobileMenu('close'));
    }

    DOM.mobLinks.forEach(link => {
        link.addEventListener('click', () => toggleMobileMenu('close'));
    });

    // ==========================================================================
    // 5. ЛОГИКА ТАБОВ (ЭЛИТНАЯ БАЗА ЗНАНИЙ)
    // ==========================================================================
    DOM.tabBtns.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-tab-target');

            DOM.tabBtns.forEach(btn => btn.classList.remove('active'));
            DOM.tabPanels.forEach(panel => panel.classList.remove('active'));

            button.classList.add('active');
            const targetPanel = document.getElementById(target);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // ==========================================================================
    // 6. ИНТЕРАКТИВНЫЙ АККОРДЕОН ДЛЯ РАЗДЕЛА FAQ
    // ==========================================================================
    DOM.faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        const response = item.querySelector('.faq-response');

        if (trigger && response) {
            trigger.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');

                // Закрываем другие открытые элементы FAQ для чистоты интерфейса
                DOM.faqItems.forEach(i => {
                    i.classList.remove('open');
                    i.querySelector('.faq-response').style.maxHeight = null;
                });

                if (!isOpen) {
                    item.classList.add('open');
                    response.style.maxHeight = response.scrollHeight + 'px';
                }
            });
        }
    });

    // ==========================================================================
    // 7. МОДАЛЬНАЯ СИСТЕМА ДЛЯ ВЫВОДА КАРТОЧЕК КОМАНДЫ
    // ==========================================================================
    window.openPremiumModal = function(memberId) {
        const data = TEAM_DATABASE[memberId];
        if (!data) return;

        // Наполняем данными модальное окно с легким эффектом затухания
        DOM.modalName.innerText = data.name;
        DOM.modalRole.innerText = data.role;
        DOM.modalDesc.innerText = data.desc;
        DOM.modalQuote.innerText = data.quote;
        DOM.modalImg.src = data.img;

        DOM.premiumModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    const closePremiumModal = () => {
        DOM.premiumModal.style.display = 'none';
        document.body.style.overflow = '';
    };

    if (DOM.closeModalBtn) {
        DOM.closeModalBtn.addEventListener('click', closePremiumModal);
    }

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal-backdrop-blur')) {
            closePremiumModal();
        }
    });

    // ESC-ключ для закрытия модалки
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && DOM.premiumModal.style.display === 'block') {
            closePremiumModal();
        }
    });

    // ==========================================================================
    // 8. СИСТЕМА ПОЯВЛЕНИЯ ЭЛЕМЕНТОВ ПРИ СКРОЛЛЕ (SCROLL REVEAL ENGINE)
    // ==========================================================================
    const revealOnScrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Перестаем следить за элементом после того как он красиво проявился
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    DOM.scrollRevealElements.forEach(element => {
        revealOnScrollObserver.observe(element);
    });

    // Оптимальный триггер для анимации главного экрана сразу после загрузки DOM
    setTimeout(() => {
        const heroBox = document.querySelector('.hero-inner-box');
        if (heroBox) heroBox.classList.add('visible');
    }, 200);

});
