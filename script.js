document.addEventListener('alpine:init', () => {
    Alpine.data('scrollModal', () => ({
        showModal: false,
        hasTriggered: false,
        revealedSections: {},

        init() {
            window.addEventListener('scroll', () => {
                this.checkPageThreshold();
            });
        },
        reveal(sectionId) {
            this.revealedSections = { 
                ...this.revealedSections, 
                [sectionId]: true 
            };
        },
        checkPageThreshold() {
            if (this.hasTriggered) return;
            const totalHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            const userPosition = currentScroll + windowHeight;
            if (userPosition / totalHeight > 0.5) {
                this.showModal = true;
                this.hasTriggered = true;
            }
        },
        closeModal() {
            this.showModal = false;
        },
        splitWords(text) {
            return text.split(' ');
        }
    }));

    Alpine.data('testimonialCarousel', () => ({
        index: 0,
        testimonials: [
            {
                avatar: '/assets/images/testimonial-avatar-1.png',
                heading: 'Showcase customer testimonials that build trust and inspire confidence in your products.',
               
            },
            {
                avatar: '/assets/images/testimonial-avatar-2.png',
                heading: 'Highlight customer stories that showcase real value and strengthen your brand credibility.',
            
            },
            {
                avatar: '/assets/images/testimonial-avatar-3.png',
                heading: 'Share positive feedback that resonates with your audience and drives more conversions.',
               
            }
        ],
        next() {
            this.index = (this.index + 1) % this.testimonials.length;
        },
        prev() {
            this.index = (this.index - 1 + this.testimonials.length) % this.testimonials.length;
        }
    }));
});