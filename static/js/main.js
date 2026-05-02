/* ── PRELOADER ── */
window.addEventListener('load', () => {
    setTimeout(() => {
        const el = document.getElementById('preloader');
        if (!el) return;
        el.style.opacity = '0';
        setTimeout(() => el.style.display = 'none', 500);
    }, 2200);
});

/* ── NAVBAR SCROLL ── */
const navbar = document.querySelector('.navbar');
const btt = document.getElementById('btt');
window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 60);
    btt?.classList.toggle('show', window.scrollY > 400);
});

/* ── ACTIVE NAV LINK ── */
const path = window.location.pathname;
document.querySelectorAll('.navbar-nav .nav-link').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === path || (path === '/' && href.endsWith('/'))) a.classList.add('active');
    else if (href !== '/' && path.startsWith(href)) a.classList.add('active');
});

/* ── HERO PARTICLE CANVAS ── */
const canvas = document.getElementById('heroCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];

    const resize = () => {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class P {
        constructor() { this.init(); }
        init() {
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            this.r = Math.random() * 1.4 + 0.4;
            this.vx = (Math.random() - .5) * .35;
            this.vy = (Math.random() - .5) * .35;
            this.a = Math.random() * .45 + .08;
            this.gold = Math.random() > .65;
        }
        move() {
            this.x += this.vx; this.y += this.vy;
            if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.init();
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = this.gold
                ? `rgba(201,168,76,${this.a})`
                : `rgba(255,255,255,${this.a * .35})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < 110; i++) particles.push(new P());

    const link = () => {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < 130) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(201,168,76,${.07 * (1 - d / 130)})`;
                    ctx.lineWidth = .5;
                    ctx.stroke();
                }
            }
        }
    };

    const tick = () => {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => { p.move(); p.draw(); });
        link();
        requestAnimationFrame(tick);
    };
    tick();
}

/* ── COUNTER ANIMATION ── */
const countObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = +el.getAttribute('data-count');
        const sfx = el.getAttribute('data-sfx') || '';
        let cur = 0;
        const step = target / 65;
        const t = setInterval(() => {
            cur = Math.min(cur + step, target);
            el.textContent = Math.floor(cur).toLocaleString() + sfx;
            if (cur >= target) clearInterval(t);
        }, 22);
        countObs.unobserve(el);
    });
}, { threshold: .5 });
document.querySelectorAll('[data-count]').forEach(el => countObs.observe(el));

/* ── SCROLL REVEAL ── */
const revObs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('in'), i * 80);
            revObs.unobserve(e.target);
        }
    });
}, { threshold: .1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => revObs.observe(el));

/* ── BACK TO TOP ── */
btt?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── CONTACT FORM ── */
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('[type="submit"]');
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Message Sent Successfully!';
        btn.disabled = true;
        btn.style.cssText = 'background:linear-gradient(135deg,#27ae60,#2ecc71);color:#fff;';
        setTimeout(() => {
            btn.innerHTML = orig;
            btn.disabled = false;
            btn.style.cssText = '';
            form.reset();
        }, 3500);
    });
}

/* ── MOBILE NAV AUTO-CLOSE ── */
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const toggle = document.querySelector('.navbar-toggler');
        const menu = document.getElementById('navMenu');
        if (menu?.classList.contains('show')) toggle?.click();
    });
});
