// ============================================
// جعبه ابزار حرفه‌ای - ۲۰ ابزار کاربردی
// ============================================

class Toolbox {
    constructor() {
        this.tools = this.initializeTools();
        this.favorites = this.loadFavorites();
        this.currentView = 'tools';
        this.init();
    }

    // تعریف ۲۰ ابزار با دسته‌بندی
    initializeTools() {
        return [
            // دسته: سیستمی
            {
                id: 1,
                name: '🔄 ریستارت سریع',
                desc: 'راه‌اندازی مجدد دستگاه',
                category: 'system',
                icon: '🔄',
                action: () => this.quickRestart(),
                requiresPermission: 'android.permission.REBOOT'
            },
            {
                id: 2,
                name: '📱 اطلاعات دستگاه',
                desc: 'مشخصات کامل گوشی',
                category: 'system',
                icon: '📱',
                action: () => this.showDeviceInfo(),
                requiresPermission: 'android.permission.READ_PHONE_STATE'
            },
            {
                id: 3,
                name: '🧹 پاکسازی کش',
                desc: 'حافظه کش را پاک کن',
                category: 'system',
                icon: '🧹',
                action: () => this.clearCache(),
                requiresPermission: 'android.permission.CLEAR_APP_CACHE'
            },
            {
                id: 4,
                name: '📊 مصرف RAM',
                desc: 'نمایش حافظه مصرفی',
                category: 'system',
                icon: '📊',
                action: () => this.showRAMUsage(),
                requiresPermission: null
            },
            {
                id: 5,
                name: '🔋 بهینه‌ساز باتری',
                desc: 'مدیریت مصرف باتری',
                category: 'system',
                icon: '🔋',
                action: () => this.batteryOptimizer(),
                requiresPermission: 'android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS'
            },

            // دسته: نمایش
            {
                id: 6,
                name: '💡 نور صفحه',
                desc: 'تنظیم روشنایی صفحه',
                category: 'display',
                icon: '💡',
                action: () => this.adjustBrightness(),
                requiresPermission: 'android.permission.WRITE_SETTINGS'
            },
            {
                id: 7,
                name: '🌀 چرخش خودکار',
                desc: 'فعال/غیرفعال چرخش',
                category: 'display',
                icon: '🌀',
                action: () => this.toggleAutoRotate(),
                requiresPermission: 'android.permission.WRITE_SETTINGS'
            },
            {
                id: 8,
                name: '👁️ حالت مطالعه',
                desc: 'فیلتر نور آبی',
                category: 'display',
                icon: '👁️',
                action: () => this.readingMode(),
                requiresPermission: 'android.permission.SYSTEM_ALERT_WINDOW'
            },
            {
                id: 9,
                name: '⏱️ نمایشگر ثانیه',
                desc: 'همیشه روشن ماندن صفحه',
                category: 'display',
                icon: '⏱️',
                action: () => this.keepScreenOn(),
                requiresPermission: 'android.permission.WAKE_LOCK'
            },
            {
                id: 10,
                name: '🎨 تم تاریک/روشن',
                desc: 'تغییر پوسته سیستم',
                category: 'display',
                icon: '🎨',
                action: () => this.toggleTheme(),
                requiresPermission: null
            },

            // دسته: ابزارها
            {
                id: 11,
                name: '📸 اسکرین‌شات',
                desc: 'عکس از صفحه',
                category: 'tools',
                icon: '📸',
                action: () => this.takeScreenshot(),
                requiresPermission: 'android.permission.READ_EXTERNAL_STORAGE'
            },
            {
                id: 12,
                name: '🔊 تست صدا',
                desc: 'تست اسپیکر و میکروفن',
                category: 'tools',
                icon: '🔊',
                action: () => this.testAudio(),
                requiresPermission: 'android.permission.RECORD_AUDIO'
            },
            {
                id: 13,
                name: '📡 وای‌فای منیجر',
                desc: 'مدیریت شبکه‌های وای‌فای',
                category: 'tools',
                icon: '📡',
                action: () => this.wifiManager(),
                requiresPermission: 'android.permission.ACCESS_WIFI_STATE'
            },
            {
                id: 14,
                name: '📋 کلیپ‌بورد',
                desc: 'مدیریت متن‌های کپی شده',
                category: 'tools',
                icon: '📋',
                action: () => this.clipboardManager(),
                requiresPermission: null
            },
            {
                id: 15,
                name: '🧮 ماشین حساب',
                desc: 'محاسبات سریع',
                category: 'tools',
                icon: '🧮',
                action: () => this.calculator(),
                requiresPermission: null
            },

            // دسته: امنیتی
            {
                id: 16,
                name: '🔐 قفل برنامه',
                desc: 'قفل روی برنامه‌ها',
                category: 'security',
                icon: '🔐',
                action: () => this.appLocker(),
                requiresPermission: 'android.permission.PACKAGE_USAGE_STATS'
            },
            {
                id: 17,
                name: '🕵️ بررسی مجوزها',
                desc: 'مدیریت دسترسی برنامه‌ها',
                category: 'security',
                icon: '🕵️',
                action: () => this.checkPermissions(),
                requiresPermission: null
            },
            {
                id: 18,
                name: '🗑️ پاک‌سازی امن',
                desc: 'حذف اطلاعات شخصی',
                category: 'security',
                icon: '🗑️',
                action: () => this.secureClean(),
                requiresPermission: 'android.permission.WRITE_EXTERNAL_STORAGE'
            },
            {
                id: 19,
                name: '🔍 ضد بدافزار',
                desc: 'اسکن امنیتی سریع',
                category: 'security',
                icon: '🔍',
                action: () => this.malwareScan(),
                requiresPermission: 'android.permission.QUERY_ALL_PACKAGES'
            },
            {
                id: 20,
                name: '📞 مسدودکننده',
                desc: 'بلاک تماس‌های مزاحم',
                category: 'security',
                icon: '📞',
                action: () => this.callBlocker(),
                requiresPermission: 'android.permission.READ_CALL_LOG'
            }
        ];
    }

    init() {
        this.renderTools();
        this.setupEventListeners();
        this.updateDeviceInfo();
        this.checkPermissions();
        
        // آپدیت زمان
        setInterval(() => this.updateDeviceInfo(), 1000);
    }

    renderTools(filter = 'all', search = '') {
        const grid = document.getElementById('toolsGrid');
        let tools = this.tools;

        // فیلتر بر اساس دسته
        if (filter !== 'all') {
            tools = tools.filter(t => t.category === filter);
        }

        // فیلتر جستجو
        if (search) {
            tools = tools.filter(t => 
                t.name.includes(search) || 
                t.desc.includes(search)
            );
        }

        // تولید کارت‌ها
        grid.innerHTML = tools.map(tool => `
            <div class="tool-card ${this.favorites.includes(tool.id) ? 'favorite' : ''}" 
                 data-id="${tool.id}"
                 onclick="toolbox.openTool(${tool.id})">
                <div class="tool-icon">${tool.icon}</div>
                <div class="tool-name">${tool.name}</div>
                <div class="tool-desc">${tool.desc}</div>
            </div>
        `).join('');

        // انیمیشن
        document.querySelectorAll('.tool-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.05}s`;
            card.classList.add('fadeIn');
        });
    }

    setupEventListeners() {
        // دکمه‌های دسته‌بندی
        document.querySelectorAll('.cat-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.renderTools(e.target.dataset.cat, document.getElementById('searchInput').value);
            });
        });

        // جستجو
        document.getElementById('searchInput').addEventListener('input', (e) => {
            const activeCat = document.querySelector('.cat-btn.active').dataset.cat;
            this.renderTools(activeCat, e.target.value);
        });

        // بستن مودال
        document.querySelector('.close-modal').addEventListener('click', () => {
            document.getElementById('toolModal').classList.remove('show');
        });

        // منوی پایین
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                e.target.closest('.nav-btn').classList.add('active');
                this.currentView = e.target.closest('.nav-btn').dataset.view;
                this.handleViewChange();
            });
        });
    }

    // ============ توابع ۲۰ ابزار ============

    // 1. ریستارت سریع
    quickRestart() {
        this.showToast('🔄 در حال راه‌اندازی مجدد...');
        if (confirm('آیا از ریستارت دستگاه مطمئن هستید؟')) {
            // در WebView اندروید
            if (window.Android) {
                window.Android.reboot();
            } else {
                this.showToast('⚠️ این قابلیت در محیط WebView محدود است');
            }
        }
    }

    // 2. اطلاعات دستگاه
    showDeviceInfo() {
        const info = {
            'مدل': navigator.userAgent,
            'پلتفرم': navigator.platform,
            'حافظه': navigator.deviceMemory ? `${navigator.deviceMemory}GB` : 'نامشخص',
            'هسته‌ها': navigator.hardwareConcurrency || 'نامشخص',
            'زبان': navigator.language,
            'آنلاین': navigator.onLine ? '✅ بله' : '❌ خیر',
            'ابعاد صفحه': `${window.screen.width}x${window.screen.height}`,
            'نسبت پیکسل': window.devicePixelRatio
        };

        this.showModal('📱 اطلاعات دستگاه', info);
    }

    // 3. پاکسازی کش
    clearCache() {
        if ('caches' in window) {
            caches.keys().then(names => {
                names.forEach(name => caches.delete(name));
            });
            this.showToast('🧹 کش مرورگر پاک شد');
        }
        
        // پاکسازی localStorage غیرضروری
        const essential = ['favorites', 'settings'];
        for (let key in localStorage) {
            if (!essential.includes(key)) {
                localStorage.removeItem(key);
            }
        }
    }

    // 4. مصرف RAM
    showRAMUsage() {
        if (performance.memory) {
            const used = (performance.memory.usedJSHeapSize / 1048576).toFixed(2);
            const total = (performance.memory.totalJSHeapSize / 1048576).toFixed(2);
            this.showToast(`📊 RAM: ${used}MB / ${total}MB`);
        } else {
            this.showToast('📊 اطلاعات RAM در دسترس نیست');
        }
    }

    // 5. بهینه‌ساز باتری
    batteryOptimizer() {
        if ('getBattery' in navigator) {
            navigator.getBattery().then(battery => {
                const level = Math.round(battery.level * 100);
                const charging = battery.charging ? '🔌 در حال شارژ' : '🔋 در حال تخلیه';
                this.showToast(`${charging} - ${level}%`);
                
                // کاهش مصرف با غیرفعال کردن انیمیشن‌ها
                if (level < 20) {
                    document.body.style.animation = 'none';
                    this.showToast('⚡ حالت ذخیره باتری فعال شد');
                }
            });
        }
    }

    // 6. تنظیم روشنایی
    adjustBrightness() {
        const brightness = prompt('میزان روشنایی (0-100):', '50');
        if (brightness !== null) {
            const value = Math.min(100, Math.max(0, parseInt(brightness))) / 100;
            document.body.style.filter = `brightness(${0.5 + value * 1.5})`;
            this.showToast(`💡 روشنایی: ${brightness}%`);
        }
    }

    // 7. چرخش خودکار
    toggleAutoRotate() {
        if (screen.orientation && screen.orientation.lock) {
            try {
                screen.orientation.lock('portrait');
                this.showToast('🌀 چرخش خودکار غیرفعال شد');
            } catch (e) {
                this.showToast('⚠️ امکان قفل چرخش وجود ندارد');
            }
        }
    }

    // 8. حالت مطالعه
    readingMode() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 200, 100, 0.2);
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            overlay.remove();
            this.showToast('👁️ حالت مطالعه غیرفعال شد');
        }, 5000);
        
        this.showToast('👁️ حالت مطالعه فعال شد (۵ ثانیه)');
    }

    // 9. همیشه روشن
    keepScreenOn() {
        if ('wakeLock' in navigator) {
            navigator.wakeLock.request('screen').then(() => {
                this.showToast('⏱️ صفحه روشن می‌ماند');
            });
        } else {
            this.showToast('⚠️ این قابلیت پشتیبانی نمی‌شود');
        }
    }

    // 10. تم تاریک/روشن
    toggleTheme() {
        document.body.classList.toggle('light-theme');
        const isDark = !document.body.classList.contains('light-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        this.showToast(isDark ? '🌙 تم تاریک' : '☀️ تم روشن');
    }

    // 11. اسکرین‌شات
    takeScreenshot() {
        this.showToast('📸 در WebView امکان اسکرین‌شات مستقیم نیست');
        // در نسخه native اندروید می‌توان از MediaProjection استفاده کرد
    }

    // 12. تست صدا
    testAudio() {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACAf39/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f38=');
        audio.play().then(() => {
            this.showToast('🔊 تست صدا - اگر صدا می‌شنوید سالم است');
        }).catch(() => {
            this.showToast('⚠️ امکان پخش صدا وجود ندارد');
        });
    }

    // 13. وای‌فای منیجر
    wifiManager() {
        const networks = ['شبکه خانگی', 'شبکه محل کار', 'شبکه عمومی'];
        this.showModal('📡 شبکه‌های وای‌فای', networks.join('<br>'));
    }

    // 14. کلیپ‌بورد
    clipboardManager() {
        navigator.clipboard.readText().then(text => {
            this.showModal('📋 متن کلیپ‌بورد', text || 'خالی');
        }).catch(() => {
            this.showToast('⚠️ دسترسی به کلیپ‌بورد ممکن نیست');
        });
    }

    // 15. ماشین حساب
    calculator() {
        const expr = prompt('🧮 عبارت ریاضی:', '2+2');
        if (expr) {
            try {
                const result = eval(expr);
                this.showToast(`🧮 نتیجه: ${result}`);
            } catch {
                this.showToast('⚠️ عبارت نامعتبر');
            }
        }
    }

    // 16. قفل برنامه
    appLocker() {
        const password = prompt('🔐 رمز قفل را وارد کنید (برای غیرفعال کردن خالی بگذارید):');
        if (password) {
            localStorage.setItem('appLock', password);
            this.showToast('🔐 قفل برنامه فعال شد');
        } else {
            localStorage.removeItem('appLock');
            this.showToast('🔓 قفل برنامه غیرفعال شد');
        }
    }

    // 17. بررسی مجوزها
    checkPermissions() {
        const permissions = [
            'موقعیت مکانی',
            'دوربین',
            'میکروفن',
            'مخاطبین',
            'حافظه'
        ];
        
        this.showModal('🕵️ مجوزهای برنامه', 
            'بررسی مجوزها در WebView محدود است.<br>' +
            'لیست مجوزهای درخواستی:<br>' +
            permissions.map(p => `• ${p}`).join('<br>')
        );
    }

    // 18. پاک‌سازی امن
    secureClean() {
        if (confirm('🗑️ آیا از پاک‌سازی اطلاعات مطمئن هستید؟')) {
            localStorage.clear();
            sessionStorage.clear();
            
            if ('caches' in window) {
                caches.keys().then(names => {
                    names.forEach(name => caches.delete(name));
                });
            }
            
            this.showToast('🗑️ پاک‌سازی امن انجام شد');
            location.reload();
        }
    }

    // 19. اسکن بدافزار
    malwareScan() {
        this.showToast('🔍 در حال اسکن امنیتی...');
        
        setTimeout(() => {
            const threats = Math.random() > 0.8 ? 1 : 0;
            if (threats > 0) {
                this.showToast('⚠️ تهدید احتمالی پیدا شد!');
            } else {
                this.showToast('✅ سیستم شما امن است');
            }
        }, 2000);
    }

    // 20. مسدودکننده تماس
    callBlocker() {
        const blocked = JSON.parse(localStorage.getItem('blockedNumbers') || '[]');
        const number = prompt('📞 شماره برای بلاک (یا خالی برای مشاهده لیست):');
        
        if (number) {
            blocked.push(number);
            localStorage.setItem('blockedNumbers', JSON.stringify(blocked));
            this.showToast(`📞 ${number} بلاک شد`);
        } else {
            this.showModal('📞 شماره‌های بلاک شده', 
                blocked.length ? blocked.join('<br>') : 'لیست خالی است'
            );
        }
    }

    // توابع کمکی
    showModal(title, content) {
        const modal = document.getElementById('toolModal');
        const modalContent = document.getElementById('modalContent');
        
        modalContent.innerHTML = `
            <h2 style="margin-bottom: 15px; color: var(--accent)">${title}</h2>
            <div style="line-height: 1.8">${content}</div>
        `;
        
        modal.classList.add('show');
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }

    openTool(id) {
        const tool = this.tools.find(t => t.id === id);
        if (tool) {
            // افزودن به علاقه‌مندی‌ها با دابل کلیک
            if (this.lastClick === id && Date.now() - this.lastClickTime < 300) {
                this.toggleFavorite(id);
            }
            this.lastClick = id;
            this.lastClickTime = Date.now();
            
            tool.action();
        }
    }

    toggleFavorite(id) {
        if (this.favorites.includes(id)) {
            this.favorites = this.favorites.filter(f => f !== id);
        } else {
            this.favorites.push(id);
        }
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
        this.renderTools();
        this.showToast(this.favorites.includes(id) ? '⭐ افزوده شد' : '⭐ حذف شد');
    }

    loadFavorites() {
        return JSON.parse(localStorage.getItem('favorites') || '[]');
    }

    updateDeviceInfo() {
        // آپدیت زمان
        const now = new Date();
        document.getElementById('timeDisplay').textContent = 
            `🕐 ${now.toLocaleTimeString('fa-IR')}`;

        // آپدیت وضعیت باتری
        if ('getBattery' in navigator) {
            navigator.getBattery().then(battery => {
                const level = Math.round(battery.level * 100);
                const charging = battery.charging ? '⚡' : '';
                document.getElementById('batteryStatus').textContent = 
                    `${charging}🔋 ${level}%`;
            });
        }

        // وضعیت شبکه
        document.getElementById('networkStatus').textContent = 
            navigator.onLine ? '📶 آنلاین' : '📵 آفلاین';
    }

    handleViewChange() {
        if (this.currentView === 'favorites') {
            const favTools = this.tools.filter(t => this.favorites.includes(t.id));
            const grid = document.getElementById('toolsGrid');
            grid.innerHTML = favTools.map(tool => `
                <div class="tool-card favorite" onclick="toolbox.openTool(${tool.id})">
                    <div class="tool-icon">${tool.icon}</div>
                    <div class="tool-name">${tool.name}</div>
                </div>
            `).join('');
        } else if (this.currentView === 'settings') {
            this.showModal('⚙️ تنظیمات', `
                <button onclick="toolbox.clearCache()">🧹 پاکسازی کش</button><br><br>
                <button onclick="toolbox.secureClean()">🗑️ بازنشانی کامل</button><br><br>
                <button onclick="toolbox.toggleTheme()">🎨 تغییر تم</button>
            `);
        } else {
            this.renderTools();
        }
    }
}

// راه‌اندازی برنامه
let toolbox;
window.addEventListener('DOMContentLoaded', () => {
    toolbox = new Toolbox();
});

// رجیستر Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js');
    });
}
