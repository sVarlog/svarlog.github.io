export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
    }

    bindTriggers() {
        this.btns.forEach(el => {
            el.addEventListener('click', () => {
                if (document.querySelector('iframe#iframe')) {
                    this.overlay.classList.add('active');
                } else {
                    const path = el.getAttribute('data-url');
                    this.createPlayer(path);
                }
            });
        });
    }

    bindCloseBtn() {
        this.close.addEventListener('click', () => {
            this.overlay.classList.remove('active');
            this.player.stopVideo();
        });
    }

    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
        });

        console.log(this.player);
        this.overlay.classList.add('active');
    }

    init() {
        let tag = document.createElement('script');

        tag.src = 'https://www.youtube.com/iframe_api';
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTriggers();
        this.bindCloseBtn();
    }
}