barba.init({
    transitions: [{
        name: "opacity-transition",
        leave() {
            return gsap.to(data.current.container, {
                opacity: 0
            });
        },
        enter() {
            return gsap.to(data.current.container, {
                opacity: 0
            })
        }
    }]
});