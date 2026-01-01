/**
 * Topo Gigio - Scrollytelling Site
 * ================================
 * Scroll interactions and form handling
 */

// ============================================
// IMAGE CONFIGURATION
// ============================================
// Centralized image URLs for easy replacement with local assets
// To use local images, replace URLs with paths like "/assets/hero.jpg"

const IMAGES = {
    hero: {
        main: "assets/topo_hero.jpeg",
        alt: "Close up portrait of Topo Gigio, a soft grey chinchilla looking towards the camera"
    },

    timeline: {
        2015: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2AALjYpRbZlxiiah4OXRmswO9Icpr8ES5IwyZPESqWimSTLiDJqClEVUuayxwF-hsOb3-Fk66J0zwCPvx1heLXU8sdPDz_WadfPP1nLYag5ZAP-nI_ewd5WSI1MeIQZpr2FsMlP2Yogf8m1WhEUAR5CwAV5AInNQNQrGgYj-HrSFoKpZsxS8HGznhNj-XIg-8dYozYltLL6P5T5PFwmBNCKlN_0TvWH4fK0nQJJwTBzC5g6Nj0eEPfBR1IXUHUX0LL4VVuysl2YU",
            alt: "Baby chinchilla Topo as a young kit"
        },
        2016: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKxCRzNsgnPgKsLoAS8lpLhTIrAA6R8FURPsqf5v6yX45i5DfqHkqC7oYzz83pKXiUd1cIRIK1klq8mT_Sgzgv72cEMHvK7Ry7S8GBSmSnXLrIJ07Q92qe-8oq6y9z3qRcgc269ywUkhFBAipwIqnSkfRn-Mz4ekBOeIzDoFHJsz2fKGDbQS_wD9jX0R9Qfpcv_fRRFBgdXdDPyrBhLZMOK4gtdL32WJV-aY-kQmLhNfxzAyjfNy7SAY--9FTTtCaWQYCGGRob8Xk",
            alt: "Young Topo in his first home environment"
        },
        2017: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuArqBBPnBOn39FoWxXdUGAMWrvgPGICsBhKFnnC3RMyc-OyDVekyJo5rEDgdYi8YGEizZrcuqxrKAVhFu6xmHNycuCUbiWngu1Z8vtyTfKYlSSM84j75hlMDruceJrlp3dsk-ZpJV3bTfhyxczpBUM_n2SUGFqgD7gPq4nIvsNij8X4htKWedKFBDcmRDt-XUnZNKH1Qb4-GG2vbFDOF2Lef-1Y6zGGAEzyPo9Sip5QA1Be4eYhh2xaRpycJdTedue7vYyAgm7dJBE",
            alt: "Topo exploring and learning during his early years"
        },
        2019: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVQn6TknbxA3kZI7N6A_MviHdl95HTzpja-xrnuoj5Sh2U6qO1UZioepIf-NwXw5H0uIzmWplxkI8GPCVCnKf4LVQqLNMxTKyzQd3g24UjtdJlPRozCWO1g8g56581W3rdHOlBYcR0usbWyZ03AmND8lv2Szx2D34y45484HBxvaz3xPGBqbYvOlsvVGnMkCNfmAYLDZtqP-_TbWlgMtLj0Q3Q1et_pXZxUFFcOzZ9fNgHSBofh193CvPq7_8XuTCUw9pCkcJ_p8Y",
            alt: "Topo during his curious exploration phase"
        },
        2020: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC39PO03wUFRhN_nvj4GXfdUoyQxwobcZFV_HxuahuuW3EC1rFcY8WG9PVlQwFOfwehD9DppwbdskWiQFkpm3CvbCQf5WgXVUihanis8ni66nSbvmgEK9WJ8HautTill9lvCziHyPPdbSjVdC5dWz0fbd8WFxvCELIC2wYx2ZKuvQS9od9JqFcr3YiXaLa4yCD_UCg4QkgVzWiy0zNeLHsHS6s0WGJbnyrK7zIHskqpwOWm8_9wAWl2R6CxmYyHaTzEjtEA4hAREPg",
            alt: "Confident adult Topo in a relaxed pose"
        },
        2021: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxtrXZj8qINCgMnDtUTv4bN1KpFcjyTOhfA41m1uwo9AA8XqXoTFvex5qB8yP3hDoc5eV_jXw5ubphjqW7p7SWxbtMJi9HPv9GRr44133PZ5nmmntXCN3ZjeAbAZLsVw0psITiswFcf3uQN3jgAFB2QMSBPysNJltifNQ47EkWycMVys7fxWBdeO5PIpsrL-DW32GAryIxmb9aQvmM8kqiiEy2g-1qt8VjJ-6iIAFLqcGZUvuVsiyAcv1bNK3aJiVaeUbA7Fel5tI",
            alt: "Topo in his climate-controlled living space"
        },
        2023: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKUSHp9ZedKPhhxEyV9aAclOhZA53CHChhheXy0a7ihKvBuLVv0WFibmNjsV_ARiJJyMWthfqd0Exmfl0Jy0-F6AizoiYDEdj7M3GjyjPuovQGc3J01y45VyZ-u3PsKZ7h_xgBBirTN9oSDEXyuIPnh5wF0nAlQNusGEAQZ37Mfxkz2C7fyjFhx7zzoqOhCAe5fs1gJpd61qBrQv-b0M3Fx_Kh1lST8879cTFBuELPlqikKHKfm3vmshabNn19M9XJ7sGW_TJcg2M",
            alt: "Topo enjoying chin scratches and interaction"
        },
        2024: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAA5OrsHB7S87OEnQfImfXwzksverL06zhVg1DTzHkHfa0fN7nkl1rzXO3SajvNKA7IEN6bxDeFZCR-GPzfNruaZ337jSTw454SP5KAvr9eVbY8q164Avdz7WO-ZOH1N40sU9iQoS4114bLqpgKIVJf3aT9kGAsQS-TVSVkEpgijc0Cp3CGuuuyvFb7L9AWJvbMybigTlxEYZftO6N9235LKPquv4vNLncqaQFFe_T3evhD8DRPKH-tm_dfd46DJJJa8QQnoN-_jRA",
            alt: "Topo at nine years old, settled and self-assured"
        },
        2025: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHuROtweiLLjj6iLkb4RTqmR3pU8Gdkh1d1NyQof99icPJ82yhzDxSnjeIB4tXEiTDCx6JdaIyjO699uPXgAkkbFelg-gacwrjTt85jDl-LN6iiyM8Tuzs_JApEstApJpxvz9pvOfzZAKxcm1BTv-bHDT496Z4x-93ceG5j9XraGBg5HB6fNsDzKliRloJxNb3tWKQg8sfwH4qrIcUd3mjdYgCX3CrSLWY6gILpTEUsIZ3DX-WiOXJCMbEu468hyJ1VqAMXnVHE5Y",
            alt: "Topo at 10 years old, healthy and alert"
        },
        2026: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAS-g_Gc2dI04WSsagm5avd44yBx08dxDoD7I2doWmB26ihm55hPyr0du1PyPn4SL0r8tU_T4MVWYvAcxR6raiZwu5GZtIWy-Rr7zoK51e1kVwLmZbsFCEGZLLjb-ZDi7fsrp2PeLlOpGHGY8t9xV7ahIzeNDLBFdSW6jeJFNn9wIwTC59MEW9m1stvarFF4TRxW-sYC-9eJVtbUI-YkZhjLLkMzv2Ot-DehBP5FKj761IUn3-8Y1fanqEW0ihixMzdX4qUtRwqu-s",
            alt: "Present-day Topo, calm and composed"
        }
    },

    personality: {
        portrait: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKUSHp9ZedKPhhxEyV9aAclOhZA53CHChhheXy0a7ihKvBuLVv0WFibmNjsV_ARiJJyMWthfqd0Exmfl0Jy0-F6AizoiYDEdj7M3GjyjPuovQGc3J01y45VyZ-u3PsKZ7h_xgBBirTN9oSDEXyuIPnh5wF0nAlQNusGEAQZ37Mfxkz2C7fyjFhx7zzoqOhCAe5fs1gJpd61qBrQv-b0M3Fx_Kh1lST8879cTFBuELPlqikKHKfm3vmshabNn19M9XJ7sGW_TJcg2M",
            alt: "Close-up portrait of Topo showing his expressive features"
        },
        interaction: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuArqBBPnBOn39FoWxXdUGAMWrvgPGICsBhKFnnC3RMyc-OyDVekyJo5rEDgdYi8YGEizZrcuqxrKAVhFu6xmHNycuCUbiWngu1Z8vtyTfKYlSSM84j75hlMDruceJrlp3dsk-ZpJV3bTfhyxczpBUM_n2SUGFqgD7gPq4nIvsNij8X4htKWedKFBDcmRDt-XUnZNKH1Qb4-GG2vbFDOF2Lef-1Y6zGGAEzyPo9Sip5QA1Be4eYhh2xaRpycJdTedue7vYyAgm7dJBE",
            alt: "Topo interacting with a human hand"
        }
    },

    environment: {
        cage: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxtrXZj8qINCgMnDtUTv4bN1KpFcjyTOhfA41m1uwo9AA8XqXoTFvex5qB8yP3hDoc5eV_jXw5ubphjqW7p7SWxbtMJi9HPv9GRr44133PZ5nmmntXCN3ZjeAbAZLsVw0psITiswFcf3uQN3jgAFB2QMSBPysNJltifNQ47EkWycMVys7fxWBdeO5PIpsrL-DW32GAryIxmb9aQvmM8kqiiEy2g-1qt8VjJ-6iIAFLqcGZUvuVsiyAcv1bNK3aJiVaeUbA7Fel5tI",
            alt: "Topo's cage and living space setup"
        },
        room: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC39PO03wUFRhN_nvj4GXfdUoyQxwobcZFV_HxuahuuW3EC1rFcY8WG9PVlQwFOfwehD9DppwbdskWiQFkpm3CvbCQf5WgXVUihanis8ni66nSbvmgEK9WJ8HautTill9lvCziHyPPdbSjVdC5dWz0fbd8WFxvCELIC2wYx2ZKuvQS9od9JqFcr3YiXaLa4yCD_UCg4QkgVzWiy0zNeLHsHS6s0WGJbnyrK7zIHskqpwOWm8_9wAWl2R6CxmYyHaTzEjtEA4hAREPg",
            alt: "Topo's free-roaming area"
        }
    },

    care: {
        food: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKxCRzNsgnPgKsLoAS8lpLhTIrAA6R8FURPsqf5v6yX45i5DfqHkqC7oYzz83pKXiUd1cIRIK1klq8mT_Sgzgv72cEMHvK7Ry7S8GBSmSnXLrIJ07Q92qe-8oq6y9z3qRcgc269ywUkhFBAipwIqnSkfRn-Mz4ekBOeIzDoFHJsz2fKGDbQS_wD9jX0R9Qfpcv_fRRFBgdXdDPyrBhLZMOK4gtdL32WJV-aY-kQmLhNfxzAyjfNy7SAY--9FTTtCaWQYCGGRob8Xk",
            alt: "Topo's food setup and hay station"
        },
        routine: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVQn6TknbxA3kZI7N6A_MviHdl95HTzpja-xrnuoj5Sh2U6qO1UZioepIf-NwXw5H0uIzmWplxkI8GPCVCnKf4LVQqLNMxTKyzQd3g24UjtdJlPRozCWO1g8g56581W3rdHOlBYcR0usbWyZ03AmND8lv2Szx2D34y45484HBxvaz3xPGBqbYvOlsvVGnMkCNfmAYLDZtqP-_TbWlgMtLj0Q3Q1et_pXZxUFFcOzZ9fNgHSBofh193CvPq7_8XuTCUw9pCkcJ_p8Y",
            alt: "Topo during evening playtime routine"
        }
    },

    form: {
        avatar: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHuROtweiLLjj6iLkb4RTqmR3pU8Gdkh1d1NyQof99icPJ82yhzDxSnjeIB4tXEiTDCx6JdaIyjO699uPXgAkkbFelg-gacwrjTt85jDl-LN6iiyM8Tuzs_JApEstApJpxvz9pvOfzZAKxcm1BTv-bHDT496Z4x-93ceG5j9XraGBg5HB6fNsDzKliRloJxNb3tWKQg8sfwH4qrIcUd3mjdYgCX3CrSLWY6gILpTEUsIZ3DX-WiOXJCMbEu468hyJ1VqAMXnVHE5Y",
            alt: "Warm portrait of Topo Gigio"
        }
    }
};

// ============================================
// FORM CONFIGURATION
// ============================================
// Set endpoint to a Formspree URL (e.g., "https://formspree.io/f/xxxxx") to enable form submission
// When endpoint is null, mailto fallback is used

const FORM_CONFIG = {
    endpoint: null,  // Set to Formspree URL when ready
    mailto: "topo@example.com",  // Replace with actual email
    subject: "Expression of Interest - Topo Gigio Adoption"
};

// ============================================
// SCROLLYTELLING - Intersection Observer
// ============================================

let sidebarObserver = null;
let sectionObserver = null;

/**
 * Initialize scroll-triggered image transitions for desktop
 */
function initScrollytelling() {
    // Only enable on desktop (≥1024px)
    if (window.innerWidth < 1024) {
        // Hide sidebar on mobile
        const sidebar = document.getElementById('sticky-sidebar');
        if (sidebar) sidebar.classList.remove('visible');
        return;
    }

    const sidebar = document.getElementById('sticky-sidebar');
    const stickyImage = document.getElementById('sidebar-sticky-image');
    const storySections = document.querySelectorAll('.story-section');

    if (!sidebar || !stickyImage || !storySections.length) return;

    // Set initial image
    const firstImageKey = 'timeline.2015';
    const firstImage = getImageByKey(firstImageKey);
    if (firstImage) {
        stickyImage.src = firstImage.src;
        stickyImage.alt = firstImage.alt;
    }

    // Observer for showing/hiding sidebar based on story section visibility
    const sidebarOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    };

    // Clean up existing observers
    if (sidebarObserver) sidebarObserver.disconnect();
    if (sectionObserver) sectionObserver.disconnect();

    // Track if any story section is visible
    let visibleSections = new Set();

    sidebarObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                visibleSections.add(entry.target.id);
            } else {
                visibleSections.delete(entry.target.id);
            }
        });

        // Show sidebar if any story section is visible
        if (visibleSections.size > 0) {
            sidebar.classList.add('visible');
        } else {
            sidebar.classList.remove('visible');
        }
    }, sidebarOptions);

    storySections.forEach(section => sidebarObserver.observe(section));

    // Observer for updating the sticky image based on which content block is visible
    const imageElements = document.querySelectorAll('[data-sticky-image]');

    const sectionOptions = {
        root: null,
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0
    };

    sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const newImageKey = entry.target.dataset.stickyImage;
                const newImageData = getImageByKey(newImageKey);

                if (newImageData && stickyImage.src !== newImageData.src) {
                    // Add transition class
                    stickyImage.classList.add('transitioning');

                    // After fade out, change image
                    setTimeout(() => {
                        stickyImage.src = newImageData.src;
                        stickyImage.alt = newImageData.alt;

                        // Remove transition class to fade in
                        stickyImage.classList.remove('transitioning');
                    }, 250);
                }
            }
        });
    }, sectionOptions);

    imageElements.forEach(el => sectionObserver.observe(el));
}

/**
 * Get image data by dot-notation key (e.g., "timeline.2015" or "personality.portrait")
 */
function getImageByKey(key) {
    const parts = key.split('.');
    let result = IMAGES;

    for (const part of parts) {
        if (result[part]) {
            result = result[part];
        } else {
            return null;
        }
    }

    return result;
}

// ============================================
// FORM HANDLING
// ============================================

/**
 * Initialize form submission handling
 */
function initFormHandling() {
    const form = document.getElementById('interest-form');
    if (!form) return;

    form.addEventListener('submit', handleFormSubmit);
}

/**
 * Handle form submission
 */
async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Validate required fields
    if (!data.name || !data.email) {
        alert('Please fill in your name and email address.');
        return;
    }

    // If endpoint is configured, use fetch
    if (FORM_CONFIG.endpoint) {
        try {
            const response = await fetch(FORM_CONFIG.endpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showSuccessMessage();
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            // Fall back to mailto
            showFormModal(data);
        }
    } else {
        // Use mailto fallback
        showFormModal(data);
    }
}

/**
 * Generate formatted message from form data
 */
function generateFormattedMessage(data) {
    const lines = [
        `EXPRESSION OF INTEREST - TOPO GIGIO ADOPTION`,
        `${'='.repeat(50)}`,
        ``,
        `Name: ${data.name || 'Not provided'}`,
        `Email: ${data.email || 'Not provided'}`,
        `Location: ${data.location || 'Not provided'}`,
        ``,
        `--- CHINCHILLA EXPERIENCE ---`,
        data.experience || 'Not provided',
        ``,
        `--- CURRENT & PAST PETS ---`,
        data.pets || 'Not provided',
        ``,
        `--- AVAILABLE SPACE & SETUP ---`,
        data.space || 'Not provided',
        ``,
        `--- TEMPERATURE CONTROL ---`,
        data.temperature || 'Not provided',
        ``,
        `--- DAILY ROUTINE & AVAILABILITY ---`,
        data.routine || 'Not provided',
        ``,
        `--- QUESTIONS OR CONCERNS ---`,
        data.questions || 'None',
        ``,
        `${'='.repeat(50)}`,
        `Submitted via Topo Gigio Adoption Page`
    ];

    return lines.join('\n');
}

/**
 * Show form modal with copy and mailto options
 */
function showFormModal(data) {
    const modal = document.getElementById('form-modal');
    const messagePreview = document.getElementById('message-preview');
    const copyBtn = document.getElementById('copy-message-btn');
    const emailBtn = document.getElementById('open-email-btn');

    if (!modal) return;

    const formattedMessage = generateFormattedMessage(data);

    // Update message preview
    if (messagePreview) {
        messagePreview.textContent = formattedMessage;
    }

    // Setup copy button
    if (copyBtn) {
        copyBtn.onclick = async () => {
            try {
                await navigator.clipboard.writeText(formattedMessage);
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.innerHTML = '<span class="material-symbols-outlined">content_copy</span> Copy to Clipboard';
                }, 2000);
            } catch (err) {
                // Fallback for older browsers
                const textarea = document.createElement('textarea');
                textarea.value = formattedMessage;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.innerHTML = '<span class="material-symbols-outlined">content_copy</span> Copy to Clipboard';
                }, 2000);
            }
        };
    }

    // Setup email button
    if (emailBtn) {
        const subject = encodeURIComponent(FORM_CONFIG.subject);
        const body = encodeURIComponent(formattedMessage);
        emailBtn.href = `mailto:${FORM_CONFIG.mailto}?subject=${subject}&body=${body}`;
    }

    // Show modal
    modal.classList.remove('hidden');

    // Setup close handlers
    const closeBtn = document.getElementById('modal-close-btn');
    const backdrop = modal.querySelector('.form-modal-backdrop');

    const closeModal = () => {
        modal.classList.add('hidden');
    };

    if (closeBtn) closeBtn.onclick = closeModal;
    if (backdrop) backdrop.onclick = closeModal;

    // Close on escape key
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

/**
 * Show success message after successful form submission
 */
function showSuccessMessage() {
    const modal = document.getElementById('form-modal');
    const modalContent = modal?.querySelector('.form-modal-content');

    if (modalContent) {
        modalContent.innerHTML = `
            <div class="text-center py-8">
                <span class="material-symbols-outlined text-primary text-6xl mb-4">check_circle</span>
                <h3 class="text-xl font-bold text-text-dark mb-2">Thank You!</h3>
                <p class="text-accent-brown">Your expression of interest has been submitted. We'll be in touch soon.</p>
                <button onclick="document.getElementById('form-modal').classList.add('hidden')" class="btn btn-primary mt-6">Close</button>
            </div>
        `;
    }

    modal?.classList.remove('hidden');
}

// ============================================
// SMOOTH SCROLL
// ============================================

/**
 * Initialize smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// IMAGE INITIALIZATION
// ============================================

/**
 * Initialize images from the IMAGES config
 * This allows easy replacement of placeholder URLs with local assets
 */
function initImages() {
    // Hero image
    const heroImage = document.getElementById('hero-image');
    if (heroImage && IMAGES.hero) {
        heroImage.src = IMAGES.hero.main;
        heroImage.alt = IMAGES.hero.alt;
    }

    // Timeline images - set via data-image-key attribute
    document.querySelectorAll('[data-image-key]').forEach(img => {
        const key = img.dataset.imageKey;
        const imageData = getImageByKey(key);
        if (imageData) {
            img.src = imageData.src;
            img.alt = imageData.alt;
        }
    });

    // Background images set via data-bg-key attribute
    document.querySelectorAll('[data-bg-key]').forEach(el => {
        const key = el.dataset.bgKey;
        const imageData = getImageByKey(key);
        if (imageData) {
            el.style.backgroundImage = `url("${imageData.src}")`;
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initImages();
    initScrollytelling();
    initFormHandling();
    initSmoothScroll();
});

// Re-initialize scrollytelling on resize (debounced)
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        initScrollytelling();
    }, 250);
});
