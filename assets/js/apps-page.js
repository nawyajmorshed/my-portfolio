(function () {
    const APPS = [
        {
            name: 'Ever Green Healthcare',
            category: 'Telemedicine (Android)',
            icon: 'health_and_safety',
            description: 'Real-time patient chat, native audio/video calls, and queue triage for ~700,000 community followers.',
            link: 'https://github.com/nawyajmorshed'
        },
        {
            name: 'CampusOne Companion',
            category: 'University Ecosystem (Android)',
            icon: 'school',
            description: 'BUBT Capstone companion app for campus rides, marketplace, issue reporting, and study hub.',
            link: 'https://github.com/nawyajmorshed'
        },
        {
            name: 'Tahbil Expense Tracker',
            category: 'Personal Finance (Android)',
            icon: 'receipt_long',
            description: 'Offline-first expense manager with on-device Google ML Kit receipt OCR and zero internet permissions.',
            link: 'https://github.com/nawyajmorshed'
        },
        {
            name: '3D Racing Simulator',
            category: 'OpenGL Simulation Engine',
            icon: 'sports_motorsports',
            description: 'Open-world vehicle physics and terrain streaming simulator built with Modern OpenGL 3.3+ and Python.',
            link: 'https://github.com/nawyajmorshed'
        }
    ];

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str == null ? '' : String(str);
        return div.innerHTML;
    }

    function render() {
        const list = document.getElementById('apps-list');
        if (!list) return;

        list.innerHTML = APPS.map((a) => {
            return `<a href="${escapeHtml(a.link)}" target="_blank" rel="noopener noreferrer" class="liquid-glass-refractive liquid-glass-interactive bounce-feedback rounded-4xl p-5 flex items-center gap-4 transition-all duration-300">
                <div class="w-14 h-14 rounded-2xl bg-primary-container/15 border border-primary-container/30 flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-3xl text-primary-container">${escapeHtml(a.icon)}</span>
                </div>
                <div class="min-w-0 flex-1">
                    <p class="font-bold text-base truncate">${escapeHtml(a.name)}</p>
                    <p class="text-primary-container text-xs font-semibold uppercase tracking-wider">${escapeHtml(a.category)}</p>
                    <p class="text-on-surface-variant text-xs mt-1 line-clamp-2">${escapeHtml(a.description)}</p>
                </div>
                <span class="material-symbols-outlined text-on-surface-variant shrink-0 text-xl">open_in_new</span>
            </a>`;
        }).join('');
    }

    render();
})();
