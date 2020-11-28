export const MovingBackGround = (bg) => {
    function movingBackgroundImage(){
        const windowWidth = window.innerWidth / 5;
        const windowHeight = window.innerHeight / 5 ;

        bg.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / windowWidth;
            const mouseY = e.clientY / windowHeight;

            bg.style.transform = `translate3d(-${mouseX*1.5}px, -${mouseY*1.5}px, 0)`;
        });
    }
    return {movingBackgroundImage}
}