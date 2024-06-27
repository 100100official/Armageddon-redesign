document.addEventListener('DOMContentLoaded', () => {
    const clickSoundSrc = 'src/click.wav';

    // 페이지 내 모든 클릭 이벤트에 대해 소리를 재생합니다.
    document.addEventListener('click', () => {
        const clickSound = new Audio(clickSoundSrc);
        clickSound.play().catch(error => {
            console.log('Audio playback failed:', error);
        });
    });
});

