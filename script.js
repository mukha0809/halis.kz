/**
 * HALIÇ QAZAQ COMMUNITY WEBSITE ENGINE
 * Complete Dynamic Deployment Blueprint
 * Executed in 2026
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // UI Nodes Object Mapping
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

    // Complete Board Profiles Dictionary Data
    const TEAM_DATA_WAREHOUSE = {
        muhambet: {
            name: "Bolatov Muxambet",
            role: "Leader & Visionary",
            desc: "The core foundational strategic visionary of our university alignment. Muxambet coordinates structural external integrations, anchors premium governmental relations, and manages global scaling workflows to turn student capability frames into permanent international legacies.",
            quote: "We don't structure plain local organizations. We program global corporate networks for Kazakh generations.",
            img: "1000098658.jpg"
        },
        tursynay: {
            name: "Nurbolkyzy Tursynay",
            role: "Leader & Strategy",
            desc: "The primary operational executive mastermind. Tursynay converts complex high-concept dynamic theories into functional milestone matrixes. She governs inner resource allocations and preserves superior systematic control parameters.",
            quote: "High precision strategy means viewing systemic order within complex chaotic dimensions and steering entities cleanly.",
            img: "1000098659.jpg"
        },
        smm: {
            name: "Albina & Bibasiya",
            role: "SMM & Visual Aesthetics",
            desc: "Media asset architecture specialists. They regulate the public profile parameters of our community brand, producing high-end cinematic Reels components, layout typography, and consistent digital communications.",
            quote: "Visual presentation is premium logic. We construct high-tier digital media formats matching real world standards.",
            img: "1000098655.jpg"
        },
        org: {
            name: "Rauana & Symbat",
            role: "Event Architects",
            desc: "Chief experiential space execution managers. They direct stage logistics arrays, organize professional keynote speech configurations, and design highly intuitive spatial atmospheres.",
            quote: "Flawless real-world event synchronization looks effortless on the surface but demands comprehensive micro-logic management behind scenes.",
            img: "1000098656.jpg"
        },
        collab: {
            name: "Aray & Altynay",
            role: "Global Relations",
            desc: "Diplomatic affairs and tactical syndicate interface specialists. They evaluate inter-university communication matrixes, expand international cross-promotional tracks, and coordinate corporate fundraising blueprints.",
            quote: "Sustainable contemporary evolution demands deep strategic convergence. We build secure cross-border partnerships.",
            img: "1000098657.jpg"
        }
    };

    // Tracking Viewport Scroll Parameters
    const handleViewportScrollMetrics = () => {
        const currentTop = window.scrollY;
        const completeHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        if (completeHeight > 0) {
            const currentPercentage = (currentTop / completeHeight) * 100;
            DOM.progressBar.style.width = `${currentPercentage}%`;
        }

        if (currentTop > 40) {
            DOM.header.classList.add('scrolled');
        } else {
            DOM.header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleViewportScrollMetrics, { passive: true });

    // Overlay Menu Navigation Systems
    const configureMobileOverlayView = (state) => {
        if (state === 'open') {
            DOM.mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            DOM.mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    };
    if (DOM.burgerToggle) DOM.burgerToggle.addEventListener('click', () => configureMobileOverlayView('open'));
    if (DOM.closeMenu) DOM.closeMenu.addEventListener('click', () => configureMobileOverlayView('close'));
    DOM.mobLinks.forEach(element => element.addEventListener('click', () => configureMobileOverlayView('close')));

    // COMPLETE FIX: Verified Tab Switching Flow Engine
    DOM.tabBtns.forEach(targetButton => {
        targetButton.addEventListener('click', () => {
            const requestedTabId = targetButton.getAttribute('data-tab-target');

            // Drop active tokens
            DOM.tabBtns.forEach(node => node.classList.remove('active'));
            DOM.tabPanels.forEach(node => {
                node.classList.remove('active');
                node.style.display = 'none'; // Clear from rendering flow entirely
            });

            // Assign structural focus parameters
            targetButton.classList.add('active');
            const targetedPanelNode = document.getElementById(requestedTabId);
            
            if (targetedPanelNode) {
                targetedPanelNode.style.display = 'flex'; // Use flex mapping configuration
                setTimeout(() => {
                    targetedPanelNode.classList.add('active');
                }, 20);
            }
        });
    });

    // Accordion Control Sequence Logic
    DOM.faqItems.forEach(faqBlock => {
        const toggleBar = faqBlock.querySelector('.faq-trigger');
        const textContainer = faqBlock.querySelector('.faq-response');

        if (toggleBar && textContainer) {
            toggleBar.addEventListener('click', () => {
                const isCurrentlyActive = faqBlock.classList.contains('open');

                DOM.faqItems.forEach(siblingBlock => {
                    siblingBlock.classList.remove('open');
                    const responseArea = siblingBlock.querySelector('.faq-response');
                    if (responseArea) responseArea.style.maxHeight = null;
                });

                if (!isCurrentlyActive) {
                    faqBlock.classList.add('open');
                    textContainer.style.maxHeight = textContainer.scrollHeight + 'px';
                }
            });
        }
    });

    // Populating and launching profiles overlay modal window
    window.openPremiumModal = function(memberKey) {
        const resolvingRecord = TEAM_DATA_WAREHOUSE[memberKey];
        if (!resolvingRecord) return;

        DOM.modalName.innerText = resolvingRecord.name;
        DOM.modalRole.innerText = resolvingRecord.role;
        DOM.modalDesc.innerText = resolvingRecord.desc;
        DOM.modalQuote.innerText = resolvingRecord.quote;
        DOM.modalImg.src = resolvingRecord.img;

        DOM.premiumModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    const interceptModalTermination = () => {
        DOM.premiumModal.style.display = 'none';
        document.body.style.overflow = '';
    };
    if (DOM.closeModalBtn) DOM.closeModalBtn.addEventListener('click', interceptModalTermination);
    window.addEventListener('click', (e) => { if (e.target.classList.contains('modal-backdrop-blur')) interceptModalTermination(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && DOM.premiumModal.style.display === 'block') interceptModalTermination(); });

    // Scroll Animation Observers Setup
    const elementVisibilityObserver = new IntersectionObserver((registeredEntries, processingObserver) => {
        registeredEntries.forEach(entryEvent => {
            if (entryEvent.isIntersecting) {
                entryEvent.target.classList.add('visible');
                processingObserver.unobserve(entryEvent.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    DOM.scrollRevealElements.forEach(targetElement => elementVisibilityObserver.observe(targetElement));

    setTimeout(() => {
        const entryHeroElement = document.querySelector('.hero-inner-box');
        if (entryHeroElement) entryHeroElement.classList.add('visible');
    }, 150);
});
