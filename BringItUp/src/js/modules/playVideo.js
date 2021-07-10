export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }

    bindTriggers() {
        this.btns.forEach((el, i) => {
            try {
                const blockedElem = el.closest('.module__video-item').nextElementSibling;

                if (i % 2 === 0) {
                    blockedElem.setAttribute('data-disabled', 'true');
                }
            } catch (e) {}

            el.addEventListener('click', () => {
                if (!el.closest('.module__video-item') || el.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
                    this.activeBtn = el;

                    if (document.querySelector('iframe#frame')) {
                        this.overlay.classList.add('active');
                        if (this.path !== el.getAttribute('data-url')) {
                            this.path = el.getAttribute('data-url');
                            this.player.loadVideoById({videoId: this.path});
                        }
                    } else {
                        this.path = el.getAttribute('data-url');
                        this.createPlayer(this.path);
                    }
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
            events: {
                'onStateChange': this.onPlayerStateChange
            }
        });

        this.overlay.classList.add('active');
    }
    
    onPlayerStateChange(state) {
        try {
            const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
            const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);

            if (state.data === 0) {
                if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
                    blockedElem.querySelector('.play__circle').classList.remove('closed');
                    blockedElem.querySelector('svg').remove();
                    blockedElem.querySelector('.play__circle').appendChild(playBtn);
                    blockedElem.querySelector('.play__text').textContent = 'PLAY VIDEO';
                    blockedElem.querySelector('.play__text').classList.remove('attintion');
                    blockedElem.style.opacity = 1;
                    blockedElem.style.filter = 'none';

                    blockedElem.setAttribute('data-disabled', 'false');
                }
            }
        } catch (e) {}
    }

    init() {
        if (this.btns.length > 0) {
            let tag = document.createElement('script');

            tag.src = 'https://www.youtube.com/iframe_api';
            let firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            this.bindTriggers();
            this.bindCloseBtn();
        }
    }
}