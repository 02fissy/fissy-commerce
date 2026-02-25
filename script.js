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

        reveal(sectionId) {
            this.revealedSections[sectionId] = true;
        },
        closeModal() {
            this.showModal = false;
        }
    }));
});