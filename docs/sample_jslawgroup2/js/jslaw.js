// event-driven programming
import * as multiLang from '../ext-module-i18n.js';
import * as Bootstrap from '../ext-module-bs.js';
import * as Util from '../core-module.js';
import * as FontAwesome from '../ext-module-fa.js';

/**
 * Initializes the i18n page with default locale and wires up UI controls.
 * @returns {Promise<void>} Promise that resolves when initialization is complete
 */
export default async function main() {

    



    Util.setupWindowFocusRefresh();
    Util.loadFragment('nav', 'nav-fixed-1col2row.html').then(() => {
    Util.loadFragment('footer', 'footer-classic-office.html').then(async () => {
        FontAwesome.initThemeIcons(['cthm001', 'cthm002']);
        document.addEventListener('click', (e) => {
            if (e.target.closest('#cthm001') || e.target.closest('#cthm002')) {
                e.preventDefault();
                Bootstrap.switchTheme();
                FontAwesome.updateThemeIcons();
            }
        });
        





        // Contact form submit handler
        const contactForm = document.getElementById('contactForm');
        const contactContext = document.getElementById('contactFormContext');
        const contactContextLabel = contactContext ? contactContext.querySelector('span') : null;
        const contactModalElement = document.getElementById('contactModal');
        if (contactModalElement) {
            contactModalElement.addEventListener('show.bs.modal', (event) => {
                const trigger = event.relatedTarget;
                const formType = trigger?.getAttribute('data-form-type') || 'general';
                const formLabel = trigger?.getAttribute('data-form-label');
                const presetMap = {
                    general: 'default',
                    pi: 'pi',
                    cd: 'cd'
                };
                const fallbackLabels = {
                    general: 'General Inquiry',
                    pi: 'Personal Injury Consultation',
                    cd: 'Criminal Defense Consultation'
                };
                const inquirySelect = document.getElementById('inquiryType');
                if (inquirySelect) {
                    inquirySelect.value = presetMap[formType] || presetMap.general;
                }
                if (contactContext && contactContextLabel) {
                    const label = formLabel || fallbackLabels[formType] || fallbackLabels.general;
                    contactContextLabel.textContent = label;
                    contactContext.hidden = !label;
                }
            });
            contactModalElement.addEventListener('hidden.bs.modal', () => {
                if (contactContext && contactContextLabel) {
                    contactContext.hidden = true;
                    contactContextLabel.textContent = '';
                }
            });
        }
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const firstName = document.getElementById('modalFirstName').value;
                const lastName = document.getElementById('modalLastName').value;
                const email = document.getElementById('modalEmail').value;
                const phone = document.getElementById('modalPhone').value;
                const inquiryType = document.getElementById('inquiryType').value;
                const message = document.getElementById('modalMessage').value;
                
                const emailBody = `New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Inquiry Type: ${inquiryType}

Message:
${message}`;
                
                const mailtoLink = `mailto:Jsuh@jslawgroup.net?subject=Contact Form Submission from ${firstName} ${lastName}&body=${encodeURIComponent(emailBody)}`;
                window.location.href = mailtoLink;
                
                // Close modal and reset form
                const modalElement = document.getElementById('contactModal');
                if (modalElement && window.bootstrap) {
                    const modal = window.bootstrap.Modal.getInstance(modalElement);
                    if (modal) modal.hide();
                }
                contactForm.reset();
                if (contactContext && contactContextLabel) {
                    contactContext.hidden = true;
                    contactContextLabel.textContent = '';
                }
            });
        }
        




        

        // Initialize with default locale (English)
        try {
            await multiLang.initI18n(multiLang.getBaseLocale());
            multiLang.applyTranslations("data-i18n", multiLang.getBaseLocale());
        } catch (error) {
            console.error('[exi18n] Error: Failed to initialize i18n:', error);
            return;
        }

        // Wire up desktop language dropdown - English
        const enDesktop = document.getElementById('i18n001');
        if (enDesktop) {
            enDesktop.addEventListener('click', (e) => {
                e.preventDefault();
                const localeCode = enDesktop.getAttribute('value-i18n');
                if (localeCode) multiLang.switchLanguage(localeCode);
            });
        } else {
            console.warn('[exi18n] Warning: Element with ID "i18n001" not found.');
        }

        // Wire up desktop language dropdown - Korean
        const koDesktop = document.getElementById('i18n002');
        if (koDesktop) {
            koDesktop.addEventListener('click', (e) => {
                e.preventDefault();
                const localeCode = koDesktop.getAttribute('value-i18n');
                if (localeCode) multiLang.switchLanguage(localeCode);
            });
        } else {
            console.warn('[exi18n] Warning: Element with ID "i18n002" not found.');
        }

        // Wire up mobile language dropdown - English
        const enMobile = document.getElementById('i18n003');
        if (enMobile) {
            enMobile.addEventListener('click', (e) => {
                e.preventDefault();
                const localeCode = enMobile.getAttribute('value-i18n');
                if (localeCode) multiLang.switchLanguage(localeCode);
            });
        } else {
            console.warn('[exi18n] Warning: Element with ID "i18n003" not found.');
        }

        // Wire up mobile language dropdown - Korean
        const koMobile = document.getElementById('i18n004');
        if (koMobile) {
            koMobile.addEventListener('click', (e) => {
                e.preventDefault();
                const localeCode = koMobile.getAttribute('value-i18n');
                if (localeCode) multiLang.switchLanguage(localeCode);
            });
        } else {
            console.warn('[exi18n] Warning: Element with ID "i18n004" not found.');
        }

        // Wire up desktop language dropdown - Japanese
        const jaDesktop = document.getElementById('i18n005');
        if (jaDesktop) {
            jaDesktop.addEventListener('click', (e) => {
                e.preventDefault();
                const localeCode = jaDesktop.getAttribute('value-i18n');
                if (localeCode) multiLang.switchLanguage(localeCode);
            });
        } else {
            console.warn('[exi18n] Warning: Element with ID "i18n005" not found.');
        }

        // Wire up desktop language dropdown - Spanish
        const esDesktop = document.getElementById('i18n006');
        if (esDesktop) {
            esDesktop.addEventListener('click', (e) => {
                e.preventDefault();
                const localeCode = esDesktop.getAttribute('value-i18n');
                if (localeCode) multiLang.switchLanguage(localeCode);
            });
        } else {
            console.warn('[exi18n] Warning: Element with ID "i18n006" not found.');
        }

        // Wire up mobile language dropdown - Japanese
        const jaMobile = document.getElementById('i18n007');
        if (jaMobile) {
            jaMobile.addEventListener('click', (e) => {
                e.preventDefault();
                const localeCode = jaMobile.getAttribute('value-i18n');
                if (localeCode) multiLang.switchLanguage(localeCode);
            });
        } else {
            console.warn('[exi18n] Warning: Element with ID "i18n007" not found.');
        }

        // Wire up mobile language dropdown - Spanish
        const esMobile = document.getElementById('i18n008');
        if (esMobile) {
            esMobile.addEventListener('click', (e) => {
                e.preventDefault();
                const localeCode = esMobile.getAttribute('value-i18n');
                if (localeCode) multiLang.switchLanguage(localeCode);
            });
        } else {
            console.warn('[exi18n] Warning: Element with ID "i18n008" not found.');
        }

        console.log(multiLang.translate("careers.p1"));
        console.log(multiLang.translate("careers.p5"));
    });
    });
}











// // --- Internationalization (i18n) ---

// const translations = {
//   'en': {
//     'nav.title': 'JS Law Group',
//     'nav.home': 'Home',
//     'nav.about': 'About',
//     'nav.careers': 'Careers',
//     'nav.appointment': 'Appointment',
//     'nav.attorney': 'Attorneys', // Added
//     'nav.services': 'Practice Areas',
//     'nav.contact': 'Contact', // Added
//     'nav.consultation': 'Free Consultation',
//     'hero.title': 'Innovative Solutions, Legal Excellence',
//     'hero.subtitle': 'Your trusted legal advocates for personal injury and criminal defense. We fight for your rights.',
//     'hero.button1': 'Our Practice Areas',
//     'hero.button2': 'Get in Touch',
//     'services.title': 'Practice Areas',
//     'services.subtitle': 'Dedicated expertise in critical areas of law.',
//     'services.area1.title': 'Personal Injury',
//     'services.area1.desc': 'Fighting for the compensation you deserve after an accident. Car accidents, slip and fall, and more.',
//     'services.area2.title': 'Criminal Defense',
//     'services.area2.desc': 'Aggressive defense for DUI, drug offenses, assault, and other criminal charges.',
//     'services.area3.title': 'Family Law',
//     'services.area3.desc': 'Compassionate guidance through divorce, custody, and other family matters.',
//     'about.title': 'About JS Law Group',
//     'about.desc': 'We are a passionate team of legal professionals dedicated to providing top-tier representation. Our focus is on achieving the best possible outcome for every client through tireless advocacy and personalized attention.',
//     'about.feature1': 'Client-Centric Approach',
//     'about.feature2': 'Aggressive Representation',
//     'about.feature3': 'Proven Track Record',
//     'footer.copyright': '&copy; 2024 by JS LAW Group, LLC. All rights reserved.',
//     'footer.privacy': 'Privacy Policy',
//     'footer.terms': 'Terms of Use',
//     'contact.title': 'Free Consultation',
//     'contact.subtitle': 'Tell us about your case. All information is confidential.',
//     'contact.firstName': 'First Name',
//     'contact.lastName': 'Last Name',
//     'contact.email': 'Email',
//     'contact.phone': 'Phone',
//     'contact.inquiryType': 'Inquiry Type',
//     'contact.selectOne': 'Please select one...',
//     'contact.pi': 'Personal Injury',
//     'contact.cd': 'Criminal Defense',
//     'contact.fl': 'Family Law',
//     'contact.other': 'Other',
//     'contact.message': 'Tell us about your case',
//     'contact.messagePlaceholder': 'Please provide a brief description of your situation...',
//     'contact.submit': 'Submit Inquiry',
//     // Added new contact info keys
//     'contactinfo.title': 'Our Location',
//     'contactinfo.address.title': 'Address',
//     'contactinfo.contact.title': 'Contact',
//     'contactinfo.office': 'Office',
//     'contactinfo.fax': 'Facsimile',
//     'contactinfo.email': 'E-mail',
//     'contactinfo.hours.title': 'Opening Hours',
//     'contactinfo.weekdays': 'Weekdays: 9:00 am - 5:00 pm',
//     // New careers section
//     'careers.title': 'Careers',
//     'careers.p1': 'At JS Law Group, LLC we believe that exceptional legal service begins with exceptional people.',
//     'careers.p2': 'We are continuously seeking talented individuals who share our commitment to excellence.',
//     'careers.p3': 'Whether you are an experienced attorney, a recent law school graduate, or a seasoned professional in legal support services, JS Law Group, LLC offers a dynamic and rewarding career path.',
//     'careers.p4': 'We provide comprehensive training, mentorship programs, and ongoing development opportunities to help you reach your full potential.',
//     'careers.p5': 'To apply, please submit your resume to <a href="mailto:info@jslawgroup.net">info@jslawgroup.net</a>',
//   },
//   'ko': {
//     'nav.title': 'JS 로펌',
//     'nav.home': '홈',
//     'nav.about': '소개',
//     'nav.careers': '채용 정보',
//     'nav.appointment': '예약하기',
//     'nav.attorney': '변호사', // Added
//     'nav.services': '전문 분야',
//     'nav.contact': '연락하기', // Added
//     'nav.consultation': '무료 상담',
//     'hero.title': '혁신적인 솔루션, 법률적 탁월함', // Fixed typo
//     'hero.subtitle': '상해 및 형사 방어 전문 로펌. 저희가 당신의 권리를 위해 싸우겠습니다.',
//     'hero.button1': '전문 분야',
//     'hero.button2': '연락하기',
//     'services.title': '전문 분야',
//     'services.subtitle': '핵심 법률 분야에 대한 전문성.',
//     'services.area1.title': '개인 상해',
//     'services.area1.desc': '사고 후 받아야 할 보상을 위해 싸웁니다. 교통사고, 낙상 사고 등.',
//     'services.area2.title': '형사 방어',
//     'services.area2.desc': 'DUI, 마약, 폭행 및 기타 형사 고발에 대한 적극적인 방어.',
//     'services.area3.title': '가정법',
//     'services.area3.desc': '이혼, 양육권 및 기타 가족 문제에 대한 공감적인 안내.',
//     'about.title': 'JS 로펌 소개',
//     'about.desc': '저희는 최고 수준의 법률 대리를 제공하기 위해 헌신하는 열정적인 법률 전문가 팀입니다. 지칠 줄 모르는 변호와 맞춤형 관심으로 모든 고객에게 최상의 결과를 달성하는 데 중점을 둡니다.',
//     'about.feature1': '고객 중심 접근',
//     'about.feature2': '적극적인 변호',
//     'about.feature3': '입증된 실적',
//     'footer.copyright': '&copy; 2024 by JS LAW Group, LLC. 모든 권리 보유.',
//     'footer.privacy': '개인정보 처리방침',
//     'footer.terms': '이용약관',
//     'contact.title': '무료 상담',
//     'contact.subtitle': '귀하의 케이스에 대해 알려주십시오. 모든 정보는 기밀로 유지됩니다.',
//     'contact.firstName': '이름 (First Name)',
//     'contact.lastName': '성 (Last Name)',
//     'contact.email': '이메일',
//     'contact.phone': '전화번호',
//     'contact.inquiryType': '문의 유형',
//     'contact.selectOne': '하나를 선택해주세요...',
//     'contact.pi': '개인 상해',
//     'contact.cd': '형사 방어',
//     'contact.fl': '가정법',
//     'contact.other': '기타',
//     'contact.message': '케이스에 대해 알려주세요', // Fixed typo
//     'contact.messagePlaceholder': '상황에 대해 간략하게 설명해주세요...',
//     'contact.submit': '문의 제출',
//     // Added new contact info keys
//     'contactinfo.title': '오시는 길',
//     'contactinfo.address.title': '주소',
//     'contactinfo.contact.title': '연락처',
//     'contactinfo.office': '사무실',
//     'contactinfo.fax': '팩스',
//     'contactinfo.email': '이메일',
//     'contactinfo.hours.title': '영업 시간',
//     'contactinfo.weekdays': '평일: 오전 9:00 - 오후 5:00',
//     // New careers section
//     'careers.title': '채용 정보',
//     'careers.p1': 'JS 로펌은 탁월한 법률 서비스를 제공하기 위해 뛰어난 인재를 지속적으로 찾고 있습니다.',
//     'careers.p2': '우리는 탁월함에 대한 우리의 헌신을 공유하는 재능 있는 개인을 지속적으로 찾고 있습니다.',
//     'careers.p3': '당신이 경험이 풍부한 변호사이든, 최근 법대 졸업생이든, 법률 지원 서비스의 노련한 전문가이든, JS 로펌은 역동적이고 보람 있는 경력 경로를 제공합니다.',
//     'careers.p4': '우리는 귀하가 잠재력을 최대한 발휘할 수 있도록 포괄적인 교육, 멘토십 프로그램 및 지속적인 개발 기회를 제공합니다.',
//     'careers.p5': '지원하려면 이력서를 <a href="mailto:info@jslawgroup.net">info@jslawgroup.net</a>로 제출하십시오.',
    
//     // 'careers.title': 'Careers',
//     // 'careers.p1': 'At JS Law Group, LLC we believe that exceptional legal service begins with exceptional people.',
//     // 'careers.p2': 'We are continuously seeking talented individuals who share our commitment to excellence.',
//     // 'careers.p3': 'Whether you are an experienced attorney, a recent law school graduate, or a seasoned professional in legal support services, JS Law Group, LLC offers a dynamic and rewarding career path.',
//     // 'careers.p4': 'We provide comprehensive training, mentorship programs, and ongoing development opportunities to help you reach your full potential.',
//     // 'careers.p5': 'To apply, please submit your resume to <a href="mailto:info@jslawgroup.net">info@jslawgroup.net</a>',
//   }
// };

// // Function to set the language
// function setLanguage(lang) {
//   if (!translations[lang]) return;

//   // Handle data-i18n (HTML content)
//   document.querySelectorAll('[data-i18n]').forEach(el => {
//     const key = el.getAttribute('data-i18n');
//     const translation = translations[lang][key];
//     if (translation) {
//       if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
//         if (el.hasAttribute('placeholder')) {
//           el.setAttribute('placeholder', translation);
//         }
//       } else {
//         el.textContent = translation;
//       }
//     }
//   });

//   // Handle data-i18n (continued for elements requiring HTML)
//   document.querySelectorAll('[data-i18n]').forEach(el => {
//     const key = el.getAttribute('data-i18n');
//     const translation = translations[lang][key];
//     if (translation) {
//       el.innerHTML = translation;
//     }
//   });

//   // Set the lang attribute on the <html> tag
//   document.documentElement.lang = lang;
//   // Store preference in localStorage
//   localStorage.setItem('preferredLanguage', lang);
// }

// // --- Modal Control ---
// const modal = document.getElementById('contactModal');
// const fab = document.getElementById('fabButton');
// const fabHero = document.getElementById('fabButtonHero');
// // const fabDesktop = document.getElementById('fabButtonDesktop'); // Removed unused variable
// const fabNav = document.getElementById('fabButtonNav'); // New nav contact button
// const fabNavMobile = document.getElementById('fabButtonNavMobile'); // New mobile nav contact
// const closeModal = document.getElementById('closeModal');

// function openModal() {
//   modal.classList.add('show');
// }

// function hideModal() {
//   modal.classList.remove('show');
// }

// // Event Listeners for modal
// fab.addEventListener('click', openModal);
// fabHero.addEventListener('click', (e) => {
//   e.preventDefault(); // Prevent href="#" from jumping
//   openModal();
// });

// // Removed unused listener for fabDesktop

// // Add listeners for new nav contact buttons
// fabNav.addEventListener('click', (e) => {
//   e.preventDefault(); 
//   // This is a nav link, so it shouldn't open the modal
//   // It should scroll to the #contact section
  
//   // Manually close the mobile navbar if it's open
//   const navCollapse = document.getElementById('navbarNav');
//   if (navCollapse.classList.contains('show')) {
//     const toggler = document.querySelector('.navbar-toggler');
//     toggler.click(); // Simulate a click to close
//   }
  
//   // Find target element and scroll smoothly
//   // *** FIXED BUG: Was 'contact-info', changed to 'contact' ***
//   const targetElement = document.getElementById('contact'); 
//   if(targetElement) {
//     targetElement.scrollIntoView({ behavior: 'smooth' });
//   }
// });

// fabNavMobile.addEventListener('click', (e) => {
//   e.preventDefault(); 
//   // This is a nav link, so it shouldn't open the modal

//   // Manually close the mobile navbar if it's open
//   const navCollapse = document.getElementById('navbarNav');
//   if (navCollapse.classList.contains('show')) {
//     const toggler = document.querySelector('.navbar-toggler');
//     toggler.click(); // Simulate a click to close
//   }

//   // Find target element and scroll smoothly
//   // *** FIXED BUG: Was 'contact-info', changed to 'contact' ***
//   const targetElement = document.getElementById('contact');
//   if(targetElement) {
//     targetElement.scrollIntoView({ behavior: 'smooth' });
//   }
// });

// // Reworked logic:
// // Close modal only when clicking main nav links (not the modal-opening ones)
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   // Listen to all anchors
//   anchor.addEventListener('click', function(e) {
//     const href = this.getAttribute('href');

//     // Do not intercept elements that rely on Bootstrap JS (dropdowns, modals, collapse)
//     // Many Bootstrap controls use data-bs-toggle; let Bootstrap handle them.
//     if (this.hasAttribute('data-bs-toggle')) {
//       return;
//     }

//     // Don't interfere with modal-opening or contact-scrolling buttons handled elsewhere
//     if(this.id === 'fabButtonHero' || this.id === 'fabButtonNav' || this.id === 'fabButtonNavMobile') {
//       return; 
//     }

//     // If it's a "real" anchor link (like #about or #attorney or #services)
//     // And not just href="#" (which is the Home button)
//     if (href && href.length > 1 && document.getElementById(href.substring(1))) {
//        // Manually close the mobile navbar if it's open
//        const navCollapse = document.getElementById('navbarNav');
//        if (navCollapse.classList.contains('show')) {
//          const toggler = document.querySelector('.navbar-toggler');
//          toggler.click(); // Simulate a click to close
//        }
       
//        // Implement smooth scroll
//        e.preventDefault(); // Stop default jump
//        document.getElementById(href.substring(1)).scrollIntoView({ behavior: 'smooth' });
//     } else if (href === "#") {
//       // This is the "Home" link
//       e.preventDefault();
//       window.scrollTo({ top: 0, behavior: 'smooth' });
      
//       // Manually close the mobile navbar if it's open
//        const navCollapse = document.getElementById('navbarNav');
//        if (navCollapse.classList.contains('show')) {
//          const toggler = document.querySelector('.navbar-toggler');
//          toggler.click(); // Simulate a click to close
//        }
//     }
//   });
// });

// // On page load, check for stored language preference
// document.addEventListener('DOMContentLoaded', () => {
//   const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
//   setLanguage(preferredLanguage);
// });