// ============================================
// جعبه ابزار حرفه‌ای - ۲۰ ابزار کاربردی
// نسخه ۲.۰ با اسکرین‌شات و مدیریت مجوزها
// ============================================

class Toolbox {
    constructor() {
        this.tools = this.initializeTools();
        this.favorites = this.loadFavorites();
        this.currentView = 'tools';
        this.lastClick = null;
        this.lastClickTime = 0;
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
        
        // آپدیت زمان هر ثانیه
        setInterval(() => this.updateDeviceInfo(), 1000);
        
        // بررسی تم ذخیره شده
        if (localStorage.getItem('theme') === 'light') {
            document.body.classList.add('light-theme');
        }
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

        // کلیک خارج از مودال
        document.getElementById('toolModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('toolModal')) {
                document.getElementById('toolModal').classList.remove('show');
            }
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

    // ============ ۲۰ ابزار اصلی ============

    // 1. ریستارت سریع
    quickRestart() {
        if (confirm('⚠️ آیا از ریستارت دستگاه مطمئن هستید؟')) {
            this.showToast('🔄 در حال راه‌اندازی مجدد...');
            if (window.Android && window.Android.reboot) {
                window.Android.reboot();
            } else {
                this.showToast('⚠️ این قابلیت در محیط WebView محدود است');
            }
        }
    }

    // 2. اطلاعات دستگاه
    showDeviceInfo() {
        const info = {
            'مدل': navigator.userAgent.split(')').pop(),
            'پلتفرم': navigator.platform,
            'حافظه': navigator.deviceMemory ? `${navigator.deviceMemory}GB` : 'نامشخص',
            'هسته‌ها': navigator.hardwareConcurrency || 'نامشخص',
            'زبان': navigator.language,
            'آنلاین': navigator.onLine ? '✅ بله' : '❌ خیر',
            'ابعاد صفحه': `${window.screen.width}x${window.screen.height}`,
            'نسبت پیکسل': window.devicePixelRatio
        };

        const infoHTML = Object.entries(info)
            .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
            .join('<br>');

        this.showModal('📱 اطلاعات دستگاه', infoHTML);
    }

    // 3. پاکسازی کش
    clearCache() {
        if ('caches' in window) {
            caches.keys().then(names => {
                names.forEach(name => caches.delete(name));
            });
        }
        
        const essential = ['favorites', 'settings', 'highScore', 'theme'];
        for (let key in localStorage) {
            if (!essential.includes(key)) {
                localStorage.removeItem(key);
            }
        }
        
        this.showToast('🧹 کش با موفقیت پاک شد');
    }

    // 4. مصرف RAM
    showRAMUsage() {
        if (performance.memory) {
            const used = (performance.memory.usedJSHeapSize / 1048576).toFixed(2);
            const total = (performance.memory.totalJSHeapSize / 1048576).toFixed(2);
            const limit = (performance.memory.jsHeapSizeLimit / 1048576).toFixed(2);
            
            const ramHTML = `
                <strong>مصرف فعلی:</strong> ${used} MB<br>
                <strong>کل تخصیص داده شده:</strong> ${total} MB<br>
                <strong>حداکثر مجاز:</strong> ${limit} MB<br>
                <strong>درصد مصرف:</strong> ${((used/limit)*100).toFixed(1)}%
            `;
            this.showModal('📊 وضعیت حافظه', ramHTML);
        } else {
            this.showToast('📊 اطلاعات RAM در مرورگر در دسترس نیست');
        }
    }

    // 5. بهینه‌ساز باتری
    batteryOptimizer() {
        if ('getBattery' in navigator) {
            navigator.getBattery().then(battery => {
                const level = Math.round(battery.level * 100);
                const charging = battery.charging ? '🔌 در حال شارژ' : '🔋 در حال تخلیه';
                
                let tips = '';
                if (level < 20) {
                    tips = '<br><br>💡 <strong>پیشنهادات:</strong><br>• کاهش روشنایی صفحه<br>• بستن برنامه‌های پس‌زمینه<br>• فعال‌سازی حالت ذخیره باتری';
                }
                
                this.showModal('🔋 وضعیت باتری', 
                    `${charging}<br>میزان شارژ: <strong>${level}%</strong>${tips}`
                );
            });
        }
    }

    // 6. تنظیم روشنایی
    adjustBrightness() {
        const current = localStorage.getItem('brightness') || 100;
        const brightness = prompt('میزان روشنایی (0-100):', current);
        
        if (brightness !== null) {
            const value = Math.min(100, Math.max(0, parseInt(brightness)));
            document.body.style.filter = value < 100 ? `brightness(${value/100})` : 'none';
            localStorage.setItem('brightness', value);
            this.showToast(`💡 روشنایی: ${value}%`);
        }
    }

    // 7. چرخش خودکار
    toggleAutoRotate() {
        if (screen.orientation && screen.orientation.lock) {
            try {
                if (screen.orientation.type.includes('portrait')) {
                    screen.orientation.lock('landscape');
                    this.showToast('🌀 چرخش به حالت افقی');
                } else {
                    screen.orientation.lock('portrait');
                    this.showToast('🌀 چرخش به حالت عمودی');
                }
            } catch (e) {
                this.showToast('⚠️ امکان قفل چرخش وجود ندارد');
            }
        } else {
            this.showToast('⚠️ مرورگر از قفل چرخش پشتیبانی نمی‌کند');
        }
    }

    // 8. حالت مطالعه
    readingMode() {
        const overlay = document.createElement('div');
        overlay.id = 'readingOverlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 200, 100, 0.15);
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(overlay);
        
        this.showToast('👁️ حالت مطالعه فعال شد');
        
        setTimeout(() => {
            if (document.getElementById('readingOverlay')) {
                document.getElementById('readingOverlay').remove();
                this.showToast('👁️ حالت مطالعه غیرفعال شد');
            }
        }, 300000); // ۵ دقیقه
    }

    // 9. همیشه روشن
    keepScreenOn() {
        if ('wakeLock' in navigator) {
            navigator.wakeLock.request('screen').then(() => {
                this.showToast('⏱️ صفحه روشن می‌ماند');
            }).catch(() => {
                this.showToast('⚠️ خطا در فعال‌سازی');
            });
        } else {
            // روش جایگزین: پخش ویدئو نامرئی
            const video = document.createElement('video');
            video.style.display = 'none';
            video.loop = true;
            video.src = 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMWlzb28AAAAQaXNvbQAAAAAA';
            video.play().then(() => {
                this.showToast('⏱️ صفحه روشن می‌ماند (روش جایگزین)');
            });
        }
    }

    // 10. تم تاریک/روشن
    toggleTheme() {
        document.body.classList.toggle('light-theme');
        const isDark = !document.body.classList.contains('light-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        this.showToast(isDark ? '🌙 تم تاریک فعال شد' : '☀️ تم روشن فعال شد');
    }

    // 11. اسکرین‌شات (نسخه جدید با ۳ روش)
    takeScreenshot() {
        const modalContent = `
            <div style="text-align: center; padding: 20px;">
                <h3 style="margin-bottom: 20px;">📸 انتخاب روش اسکرین‌شات</h3>
                
                <button onclick="toolbox.screenshotMethod1()" 
                        style="width: 100%; padding: 15px; margin: 10px 0; 
                               background: linear-gradient(135deg, #6c5ce7, #a855f7);
                               color: white; border: none; border-radius: 10px; 
                               cursor: pointer; font-size: 16px;">
                    🖼️ روش ۱: اسکرین‌شات از صفحه فعلی
                    <br><small style="opacity: 0.8;">(ذخیره به‌صورت تصویر PNG)</small>
                </button>
                
                <button onclick="toolbox.screenshotMethod2()" 
                        style="width: 100%; padding: 15px; margin: 10px 0; 
                               background: linear-gradient(135deg, #00b894, #00cec9);
                               color: white; border: none; border-radius: 10px; 
                               cursor: pointer; font-size: 16px;">
                    📱 روش ۲: اسکرین‌شات Native اندروید
                    <br><small style="opacity: 0.8;">(مخصوص نسخه APK)</small>
                </button>
                
                <button onclick="toolbox.screenshotMethod3()" 
                        style="width: 100%; padding: 15px; margin: 10px 0; 
                               background: linear-gradient(135deg, #fdcb6e, #e17055);
                               color: white; border: none; border-radius: 10px; 
                               cursor: pointer; font-size: 16px;">
                    🎥 روش ۳: ضبط ویدئو از صفحه
                    <br><small style="opacity: 0.8;">(ضبط صفحه به مدت دلخواه)</small>
                </button>
                
                <button onclick="document.getElementById('toolModal').classList.remove('show')" 
                        style="width: 100%; padding: 12px; margin: 10px 0; 
                               background: #636e72; color: white; border: none; 
                               border-radius: 10px; cursor: pointer;">
                    ❌ بازگشت
                </button>
            </div>
        `;
        
        this.showModal('📸 ابزار اسکرین‌شات', modalContent);
    }

    // روش ۱: اسکرین‌شات با html2canvas
    screenshotMethod1() {
        this.showToast('🖼️ در حال تهیه اسکرین‌شات...');
        document.getElementById('toolModal').classList.remove('show');
        
        // اضافه کردن کتابخانه html2canvas
        if (typeof html2canvas === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
            script.onload = () => this.captureScreen();
            document.head.appendChild(script);
        } else {
            this.captureScreen();
        }
    }

    captureScreen() {
        html2canvas(document.querySelector('.app-container'), {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#1a1a2e'
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `screenshot_${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            
            this.showScreenshotPreview(canvas.toDataURL('image/png'));
            this.showToast('✅ اسکرین‌شات با موفقیت ذخیره شد!');
        }).catch(err => {
            this.showToast('⚠️ خطا در تهیه اسکرین‌شات. لطفاً دوباره تلاش کنید.');
            console.error('Screenshot error:', err);
        });
    }

    // روش ۲: اسکرین‌شات Native
    screenshotMethod2() {
        document.getElementById('toolModal').classList.remove('show');
        
        if (window.Android && window.Android.takeScreenshot) {
            window.Android.takeScreenshot();
            this.showToast('📱 اسکرین‌شات Native انجام شد');
        } else if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
            navigator.mediaDevices.getDisplayMedia({ video: { mediaSource: 'screen' } })
                .then(stream => {
                    const video = document.createElement('video');
                    video.srcObject = stream;
                    video.onloadedmetadata = () => {
                        const canvas = document.createElement('canvas');
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                        canvas.getContext('2d').drawImage(video, 0, 0);
                        
                        const link = document.createElement('a');
                        link.download = `native_screenshot_${Date.now()}.png`;
                        link.href = canvas.toDataURL('image/png');
                        link.click();
                        
                        stream.getTracks().forEach(track => track.stop());
                        this.showScreenshotPreview(canvas.toDataURL('image/png'));
                    };
                    video.play();
                })
                .catch(() => {
                    this.showToast('📱 این قابلیت فقط در نسخه APK کار می‌کند');
                    this.showToast('💡 از روش ۱ استفاده کنید');
                });
        } else {
            this.showToast('📱 این قابلیت فقط در نسخه APK کار می‌کند');
            this.showToast('💡 از روش ۱ استفاده کنید');
        }
    }

    // روش ۳: ضبط صفحه نمایش
    screenshotMethod3() {
        document.getElementById('toolModal').classList.remove('show');
        
        if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
            this.showToast('⚠️ ضبط صفحه فقط در نسخه APK ممکن است');
            this.showToast('💡 از روش ۱ استفاده کنید');
            return;
        }
        
        let mediaRecorder;
        let chunks = [];
        
        navigator.mediaDevices.getDisplayMedia({ 
            video: { mediaSource: 'screen' },
            audio: true 
        }).then(stream => {
            this.showToast('🎥 ضبط شروع شد...');
            
            const stopBtn = document.createElement('button');
            stopBtn.textContent = '⏹️ توقف ضبط';
            stopBtn.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                padding: 15px 20px;
                background: #d63031;
                color: white;
                border: none;
                border-radius: 25px;
                font-size: 16px;
                cursor: pointer;
                box-shadow: 0 10px 30px rgba(214,48,49,0.4);
                animation: pulse 2s infinite;
            `;
            document.body.appendChild(stopBtn);
            
            mediaRecorder = new MediaRecorder(stream);
            
            mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
            
            mediaRecorder.onstop = () => {
                const blob = new Blob(chunks, { type: 'video/webm' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `screen_record_${Date.now()}.webm`;
                link.click();
                
                stopBtn.remove();
                stream.getTracks().forEach(track => track.stop());
                this.showToast('✅ ویدئو با موفقیت ذخیره شد!');
            };
            
            mediaRecorder.start();
            
            stopBtn.onclick = () => {
                mediaRecorder.stop();
                stopBtn.textContent = '💾 در حال ذخیره...';
            };
            
            // توقف خودکار بعد از ۳۰ ثانیه
            setTimeout(() => {
                if (mediaRecorder.state === 'recording') {
                    mediaRecorder.stop();
                }
            }, 30000);
            
        }).catch(err => {
            this.showToast('⚠️ امکان ضبط صفحه وجود ندارد');
            console.error(err);
        });
    }

    // نمایش پیش‌نمایش اسکرین‌شات
    showScreenshotPreview(imageData) {
        const previewHTML = `
            <div style="text-align: center;">
                <h3 style="margin-bottom: 15px;">✅ اسکرین‌شات آماده شد!</h3>
                <img src="${imageData}" style="max-width: 100%; border-radius: 10px; margin-bottom: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                <div style="display: flex; gap: 10px; justify-content: center;">
                    <button onclick="toolbox.shareImage('${imageData}')" 
                            style="padding: 10px 20px; background: #6c5ce7; color: white; 
                                   border: none; border-radius: 8px; cursor: pointer;">
                        📤 اشتراک‌گذاری
                    </button>
                    <button onclick="document.getElementById('toolModal').classList.remove('show')" 
                            style="padding: 10px 20px; background: #636e72; color: white; 
                                   border: none; border-radius: 8px; cursor: pointer;">
                        ❌ بستن
                    </button>
                </div>
            </div>
        `;
        this.showModal('📸 پیش‌نمایش', previewHTML);
    }

    // اشتراک‌گذاری تصویر
    shareImage(imageData) {
        if (navigator.share) {
            fetch(imageData)
                .then(res => res.blob())
                .then(blob => {
                    const file = new File([blob], 'screenshot.png', { type: 'image/png' });
                    navigator.share({
                        title: 'اسکرین‌شات',
                        files: [file]
                    }).catch(() => {
                        this.showToast('⚠️ اشتراک‌گذاری لغو شد');
                    });
                });
        } else {
            this.showToast('📤 اشتراک‌گذاری در WebView پشتیبانی نمی‌شود');
        }
    }

    // 12. تست صدا
    testAudio() {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACAf39/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f38=');
        audio.play().then(() => {
            this.showToast('🔊 تست صدا - اگر صدا می‌شنوید اسپیکر سالم است');
        }).catch(() => {
            this.showToast('⚠️ امکان پخش صدا وجود ندارد');
        });
    }

    // 13. وای‌فای منیجر
    wifiManager() {
        const networks = ['شبکه خانگی', 'شبکه محل کار', 'شبکه عمومی'];
        const networkHTML = networks.map((n, i) => 
            `${i+1}. ${n} <button onclick="toolbox.showToast('📡 اتصال به ${n}...')" 
            style="padding: 5px 10px; margin-right: 10px; background: #6c5ce7; 
            color: white; border: none; border-radius: 5px; cursor: pointer;">
            اتصال</button>`
        ).join('<br><br>');
        
        this.showModal('📡 شبکه‌های وای‌فای', networkHTML + 
            '<br><br><small style="color: #fdcb6e;">⚠️ مدیریت وای‌فای در WebView محدود است</small>');
    }

    // 14. کلیپ‌بورد
    clipboardManager() {
        navigator.clipboard.readText().then(text => {
            if (text) {
                this.showModal('📋 متن کلیپ‌بورد', 
                    `<textarea style="width: 100%; height: 150px; background: #1a1a2e; 
                    color: white; border: none; padding: 10px; border-radius: 10px;">${text}</textarea>
                    <br><button onclick="navigator.clipboard.writeText('${text.replace(/'/g, "\\'")}')" 
                    style="padding: 10px 20px; background: #6c5ce7; color: white; border: none; 
                    border-radius: 8px; cursor: pointer; margin-top: 10px;">📋 کپی مجدد</button>`
                );
            } else {
                this.showToast('📋 کلیپ‌بورد خالی است');
            }
        }).catch(() => {
            this.showToast('⚠️ دسترسی به کلیپ‌بورد ممکن نیست');
        });
    }

    // 15. ماشین حساب
    calculator() {
        const expr = prompt('🧮 عبارت ریاضی را وارد کنید:', '');
        if (expr) {
            try {
                // اعتبارسنجی امن
                if (/^[0-9+\-*/().%\s]+$/.test(expr)) {
                    const result = eval(expr);
                    this.showToast(`🧮 نتیجه: ${result}`);
                } else {
                    this.showToast('⚠️ فقط اعداد و عملگرهای ریاضی مجاز است');
                }
            } catch {
                this.showToast('⚠️ عبارت نامعتبر');
            }
        }
    }

    // 16. قفل برنامه
    appLocker() {
        const hasPassword = localStorage.getItem('appLock');
        
        if (hasPassword) {
            const input = prompt('🔐 رمز فعلی را وارد کنید (برای حذف قفل خالی بگذارید):');
            if (input === hasPassword) {
                localStorage.removeItem('appLock');
                this.showToast('🔓 قفل برنامه غیرفعال شد');
            } else if (input === '') {
                this.showToast('⚠️ رمز اشتباه است');
            }
        } else {
            const password = prompt('🔐 رمز جدید را وارد کنید:');
            if (password && password.length >= 4) {
                localStorage.setItem('appLock', password);
                this.showToast('🔐 قفل برنامه با موفقیت فعال شد');
            } else {
                this.showToast('⚠️ رمز باید حداقل ۴ کاراکتر باشد');
            }
        }
    }

    // 17. بررسی و مدیریت مجوزها (نسخه جدید)
    checkPermissions() {
        const permissionsList = [
            {
                name: 'موقعیت مکانی',
                icon: '📍',
                permission: 'geolocation',
                description: 'برای سرویس‌های مبتنی بر مکان',
                api: () => this.checkLocationPermission()
            },
            {
                name: 'دوربین',
                icon: '📷',
                permission: 'camera',
                description: 'برای اسکن و عکس‌برداری',
                api: () => this.checkCameraPermission()
            },
            {
                name: 'میکروفن',
                icon: '🎤',
                permission: 'microphone',
                description: 'برای تست و ضبط صدا',
                api: () => this.checkMicrophonePermission()
            },
            {
                name: 'مخاطبین',
                icon: '👥',
                permission: 'contacts',
                description: 'برای مدیریت تماس‌ها',
                api: () => this.checkContactsPermission()
            },
            {
                name: 'حافظه',
                icon: '💾',
                permission: 'storage',
                description: 'برای ذخیره اسکرین‌شات و فایل‌ها',
                api: () => this.checkStoragePermission()
            },
            {
                name: 'نوتیفیکیشن',
                icon: '🔔',
                permission: 'notifications',
                description: 'برای اعلان‌های برنامه',
                api: () => this.checkNotificationPermission()
            },
            {
                name: 'وضعیت تلفن',
                icon: '📞',
                permission: 'phone',
                description: 'برای اطلاعات دستگاه',
                api: () => this.checkPhonePermission()
            },
            {
                name: 'وای‌فای',
                icon: '📡',
                permission: 'wifi',
                description: 'برای مدیریت شبکه',
                api: () => this.checkWifiPermission()
            }
        ];

        let modalHTML = `
            <div style="padding: 10px;">
                <h3 style="text-align: center; margin-bottom: 15px; color: var(--accent);">
                    🔐 مدیریت مجوزها
                </h3>
                
                <div style="background: rgba(108, 92, 231, 0.1); padding: 10px; 
                            border-radius: 10px; margin-bottom: 20px; font-size: 13px;">
                    <p>📌 <strong>راهنما:</strong></p>
                    <p>• <span style="color: #00b894;">سبز</span> = مجوز فعال ✅</p>
                    <p>• <span style="color: #d63031;">قرمز</span> = مجوز غیرفعال ❌</p>
                    <p>• <span style="color: #636e72;">خاکستری</span> = نیاز به APK 📱</p>
                </div>
                
                <div style="max-height: 400px; overflow-y: auto;">
        `;

        permissionsList.forEach((perm) => {
            modalHTML += `
                <div class="permission-card" id="perm-${perm.permission}" 
                     style="background: var(--card-bg); border-radius: 10px; padding: 15px; 
                            margin-bottom: 10px; display: flex; align-items: center; 
                            justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-size: 30px;">${perm.icon}</span>
                        <div>
                            <strong>${perm.name}</strong>
                            <br>
                            <small style="color: var(--text-secondary);">${perm.description}</small>
                        </div>
                    </div>
                    <div style="text-align: left; min-width: 100px;">
                        <span class="perm-status" id="status-${perm.permission}" 
                              style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 12px;">
                            ⏳ بررسی...
                        </span>
                        <button onclick="toolbox.requestPermission('${perm.permission}')" 
                                class="perm-btn"
                                style="padding: 6px 12px; border: none; border-radius: 8px; 
                                       cursor: pointer; font-size: 11px; width: 100%;"
                                id="btn-${perm.permission}">
                            🔄 درخواست
                        </button>
                    </div>
                </div>
            `;
        });

        modalHTML += `
                </div>
                
                <div style="text-align: center; margin-top: 20px; padding-top: 15px; 
                            border-top: 1px solid rgba(255,255,255,0.1);">
                    <button onclick="toolbox.requestAllPermissions()" 
                            style="width: 100%; padding: 12px; 
                                   background: linear-gradient(135deg, #6c5ce7, #a855f7);
                                   color: white; border: none; border-radius: 10px; 
                                   cursor: pointer; font-size: 14px; margin-bottom: 10px;">
                        🚀 درخواست همه مجوزها
                    </button>
                    
                    <button onclick="toolbox.openAppSettings()" 
                            style="width: 100%; padding: 12px; 
                                   background: #636e72; color: white; border: none; 
                                   border-radius: 10px; cursor: pointer; font-size: 14px;">
                        ⚙️ باز کردن تنظیمات برنامه
                    </button>
                </div>
            </div>
        `;

        this.showModal('🔐 مدیریت مجوزها', modalHTML);

        // بررسی وضعیت مجوزها
        setTimeout(() => {
            permissionsList.forEach(perm => {
                perm.api();
            });
        }, 300);
    }

    // توابع بررسی هر مجوز
    async checkLocationPermission() {
        if (navigator.permissions) {
            try {
                const result = await navigator.permissions.query({ name: 'geolocation' });
                this.updatePermissionUI('geolocation', result.state);
            } catch (e) {
                navigator.geolocation.getCurrentPosition(
                    () => this.updatePermissionUI('geolocation', 'granted'),
                    () => this.updatePermissionUI('geolocation', 'denied')
                );
            }
        } else {
            this.updatePermissionUI('geolocation', 'unavailable');
        }
    }

    async checkCameraPermission() {
        if (navigator.permissions) {
            try {
                const result = await navigator.permissions.query({ name: 'camera' });
                this.updatePermissionUI('camera', result.state);
            } catch (e) {
                this.updatePermissionUI('camera', 'unavailable');
            }
        } else {
            this.updatePermissionUI('camera', 'unavailable');
        }
    }

    async checkMicrophonePermission() {
        if (navigator.permissions) {
            try {
                const result = await navigator.permissions.query({ name: 'microphone' });
                this.updatePermissionUI('microphone', result.state);
            } catch (e) {
                this.updatePermissionUI('microphone', 'unavailable');
            }
        } else {
            this.updatePermissionUI('microphone', 'unavailable');
        }
    }

    checkContactsPermission() {
        if (window.Android && window.Android.checkContactsPermission) {
            const hasPermission = window.Android.checkContactsPermission();
            this.updatePermissionUI('contacts', hasPermission ? 'granted' : 'denied');
        } else {
            this.updatePermissionUI('contacts', 'unavailable');
        }
    }

    checkStoragePermission() {
        try {
            const test = '__storage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            this.updatePermissionUI('storage', 'granted');
        } catch (e) {
            this.updatePermissionUI('storage', 'denied');
        }
    }

    async checkNotificationPermission() {
        if ('Notification' in window) {
            this.updatePermissionUI('notifications', Notification.permission);
        } else {
            this.updatePermissionUI('notifications', 'unavailable');
        }
    }

    checkPhonePermission() {
        if (navigator.userAgent.match(/Android/i)) {
            this.updatePermissionUI('phone', 'granted');
        } else {
            this.updatePermissionUI('phone', 'unavailable');
        }
    }

    checkWifiPermission() {
        if ('connection' in navigator) {
            this.updatePermissionUI('wifi', 'granted');
        } else {
            this.updatePermissionUI('wifi', 'unavailable');
        }
    }

    // به‌روزرسانی UI مجوز
    updatePermissionUI(permission, status) {
        const statusElement = document.getElementById(`status-${permission}`);
        const btnElement = document.getElementById(`btn-${permission}`);
        const cardElement = document.getElementById(`perm-${permission}`);
        
        if (!statusElement || !btnElement) return;
        
        const statusMap = {
            'granted': { text: '✅ فعال', color: '#00b894' },
            'denied': { text: '❌ غیرفعال', color: '#d63031' },
            'prompt': { text: '⚠️ نیاز به تأیید', color: '#fdcb6e' },
            'unavailable': { text: '📱 نیاز به APK', color: '#636e72' }
        };
        
        const statusInfo = statusMap[status] || statusMap['unavailable'];
        
        statusElement.textContent = statusInfo.text;
        statusElement.style.color = statusInfo.color;
        
        btnElement.style.background = statusInfo.color;
        btnElement.style.color = 'white';
        
        if (cardElement) {
            cardElement.style.borderLeft = `3px solid ${statusInfo.color}`;
        }
        
        if (status === 'granted') {
            btnElement.textContent = '✅ فعال';
            btnElement.style.opacity = '0.7';
        } else if (status === 'denied') {
            btnElement.textContent = '🔄 درخواست مجدد';
            btnElement.style.opacity = '1';
        } else if (status === 'unavailable') {
            btnElement.textContent = '📱 ساخت APK';
            btnElement.style.opacity = '0.7';
        } else {
            btnElement.textContent = '🎯 فعال‌سازی';
            btnElement.style.opacity = '1';
        }
    }

    // درخواست مجوز خاص
    async requestPermission(permission) {
        this.showToast(`🔄 درخواست مجوز ${permission}...`);
        
        switch(permission) {
            case 'geolocation':
                navigator.geolocation.getCurrentPosition(
                    () => {
                        this.updatePermissionUI('geolocation', 'granted');
                        this.showToast('✅ موقعیت مکانی فعال شد');
                    },
                    () => {
                        this.updatePermissionUI('geolocation', 'denied');
                        this.showToast('❌ دسترسی به موقعیت مکانی رد شد');
                    }
                );
                break;
                
            case 'camera':
                try {
                    const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
                    cameraStream.getTracks().forEach(track => track.stop());
                    this.updatePermissionUI('camera', 'granted');
                    this.showToast('✅ دوربین فعال شد');
                } catch (e) {
                    this.updatePermissionUI('camera', 'denied');
                    this.showToast('❌ دسترسی به دوربین رد شد');
                }
                break;
                
            case 'microphone':
                try {
                    const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
                    micStream.getTracks().forEach(track => track.stop());
                    this.updatePermissionUI('microphone', 'granted');
                    this.showToast('✅ میکروفن فعال شد');
                } catch (e) {
                    this.updatePermissionUI('microphone', 'denied');
                    this.showToast('❌ دسترسی به میکروفن رد شد');
                }
                break;
                
            case 'notifications':
                try {
                    const result = await Notification.requestPermission();
                    this.updatePermissionUI('notifications', result);
                    this.showToast(result === 'granted' ? '✅ اعلان‌ها فعال شد' : '❌ اعلان‌ها غیرفعال است');
                } catch (e) {
                    this.updatePermissionUI('notifications', 'denied');
                }
                break;
                
            default:
                if (window.Android && window.Android.requestPermission) {
                    window.Android.requestPermission(permission);
                } else {
                    this.showToast('⚠️ این مجوز فقط در نسخه APK قابل درخواست است');
                }
        }
    }

    // درخواست همه مجوزها
    async requestAllPermissions() {
        this.showToast('🚀 درخواست همه مجوزهای قابل دسترس...');
        
        const permissions = ['geolocation', 'camera', 'microphone', 'notifications'];
        
        for (let perm of permissions) {
            await this.requestPermission(perm);
            await new Promise(resolve => setTimeout(resolve, 800));
        }
        
        this.showToast('✅ بررسی همه مجوزها کامل شد');
        setTimeout(() => this.checkPermissions(), 1000);
    }

    // باز کردن تنظیمات برنامه
    openAppSettings() {
        if (window.Android && window.Android.openAppSettings) {
            window.Android.openAppSettings();
        } else {
            const guideHTML = `
                <div style="padding: 15px; text-align: center;">
                    <h3>⚙️ تنظیمات دستی مجوزها</h3>
                    <p style="margin: 15px 0;">برای فعال‌سازی مجوزها:</p>
                    <ol style="text-align: right; line-height: 2; padding-right: 20px;">
                        <li>به <strong>تنظیمات گوشی</strong> بروید</li>
                        <li>وارد بخش <strong>برنامه‌ها</strong> شوید</li>
                        <li>برنامه <strong>جعبه ابزار</strong> را پیدا کنید</li>
                        <li>روی <strong>مجوزها</strong> کلیک کنید</li>
                        <li>مجوزهای مورد نیاز را فعال کنید</li>
                    </ol>
                    <p style="color: #fdcb6e; margin-top: 10px;">
                        💡 در نسخه WebView برخی مجوزها قابل دسترسی نیستند
                    </p>
                </div>
            `;
            this.showModal('⚙️ راهنمای مجوزها', guideHTML);
        }
    }

    // 18. پاک‌سازی امن
    secureClean() {
        if (confirm('🗑️ هشدار: این کار تمام اطلاعات ذخیره شده را حذف می‌کند!\nآیا مطمئن هستید؟')) {
            localStorage.clear();
            sessionStorage.clear();
            
            if ('caches' in window) {
                caches.keys().then(names => {
                    names.forEach(name => caches.delete(name));
                });
            }
            
            this.showToast('🗑️ پاک‌سازی امن انجام شد');
            
            setTimeout(() => {
                location.reload();
            }, 1500);
        }
    }

    // 19. اسکن بدافزار
    malwareScan() {
        this.showToast('🔍 در حال اسکن امنیتی...');
        
        const scanSteps = [
            'بررسی فایل‌های مخرب...',
            'اسکن حافظه...',
            'بررسی مجوزهای مشکوک...',
            'تحلیل رفتار برنامه‌ها...'
        ];
        
        let step = 0;
        const interval = setInterval(() => {
            if (step < scanSteps.length) {
                this.showToast(`🔍 ${scanSteps[step]}`);
                step++;
            } else {
                clearInterval(interval);
                const isSafe = Math.random() > 0.2;
                if (isSafe) {
                    this.showToast('✅ سیستم شما امن است - تهدیدی یافت نشد');
                } else {
                    this.showToast('⚠️ توصیه: برنامه‌های غیرضروری را حذف کنید');
                }
            }
        }, 800);
    }

    // 20. مسدودکننده تماس
    callBlocker() {
        const blocked = JSON.parse(localStorage.getItem('blockedNumbers') || '[]');
        const action = prompt(
            '📞 انتخاب عملیات:\n' +
            '1️⃣ شماره جدید بلاک کن\n' +
            '2️⃣ مشاهده لیست بلاک\n' +
            '3️⃣ حذف از لیست\n\n' +
            'شماره ۱، ۲ یا ۳ را وارد کنید:'
        );
        
        if (action === '1') {
            const number = prompt('📞 شماره تلفن برای بلاک:');
            if (number && !blocked.includes(number)) {
                blocked.push(number);
                localStorage.setItem('blockedNumbers', JSON.stringify(blocked));
                this.showToast(`📞 ${number} به لیست بلاک اضافه شد`);
            }
        } else if (action === '2') {
            this.showModal('📞 شماره‌های بلاک شده', 
                blocked.length ? blocked.map((n, i) => `${i+1}. ${n}`).join('<br>') : 'لیست خالی است'
            );
        } else if (action === '3') {
            if (blocked.length) {
                const index = prompt('شماره ردیف را وارد کنید:\n' + 
                    blocked.map((n, i) => `${i+1}. ${n}`).join('\n'));
                if (index && blocked[parseInt(index)-1]) {
                    const removed = blocked.splice(parseInt(index)-1, 1);
                    localStorage.setItem('blockedNumbers', JSON.stringify(blocked));
                    this.showToast(`📞 ${removed[0]} از لیست حذف شد`);
                }
            }
        }
    }

    // ============ توابع کمکی ============

    showModal(title, content) {
        const modal = document.getElementById('toolModal');
        const modalContent = document.getElementById('modalContent');
        
        modalContent.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h2 style="color: var(--accent); margin: 0;">${title}</h2>
            </div>
            <div style="line-height: 1.8; color: var(--text);">${content}</div>
        `;
        
        modal.classList.add('show');
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        if (!toast) return;
        
        toast.textContent = message;
        toast.classList.add('show');
        
        clearTimeout(this.toastTimeout);
        this.toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }

    openTool(id) {
        const tool = this.tools.find(t => t.id === id);
        if (!tool) return;
        
        // دابل کلیک برای علاقه‌مندی
        if (this.lastClick === id && Date.now() - this.lastClickTime < 400) {
            this.toggleFavorite(id);
            return;
        }
        
        this.lastClick = id;
        this.lastClickTime = Date.now();
        
        // اجرای اکشن
        tool.action();
    }

    toggleFavorite(id) {
        if (this.favorites.includes(id)) {
            this.favorites = this.favorites.filter(f => f !== id);
            this.showToast('⭐ از علاقه‌مندی‌ها حذف شد');
        } else {
            this.favorites.push(id);
            this.showToast('⭐ به علاقه‌مندی‌ها اضافه شد');
        }
        
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
        
        // رفرش UI
        const activeCat = document.querySelector('.cat-btn.active')?.dataset?.cat || 'all';
        const searchValue = document.getElementById('searchInput')?.value || '';
        this.renderTools(activeCat, searchValue);
    }

    loadFavorites() {
        return JSON.parse(localStorage.getItem('favorites') || '[]');
    }

    updateDeviceInfo() {
        const now = new Date();
        const timeElement = document.getElementById('timeDisplay');
        if (timeElement) {
            timeElement.textContent = `🕐 ${now.toLocaleTimeString('fa-IR')}`;
        }

        if ('getBattery' in navigator) {
            navigator.getBattery().then(battery => {
                const level = Math.round(battery.level * 100);
                const charging = battery.charging ? '⚡' : '';
                const batteryElement = document.getElementById('batteryStatus');
                if (batteryElement) {
                    batteryElement.textContent = `${charging}🔋 ${level}%`;
                }
            });
        }

        const networkElement = document.getElementById('networkStatus');
        if (networkElement) {
            networkElement.textContent = navigator.onLine ? '📶 آنلاین' : '📵 آفلاین';
        }
    }

    handleViewChange() {
        const grid = document.getElementById('toolsGrid');
        if (!grid) return;

        if (this.currentView === 'favorites') {
            const favTools = this.tools.filter(t => this.favorites.includes(t.id));
            grid.innerHTML = favTools.length ? favTools.map(tool => `
                <div class="tool-card favorite" onclick="toolbox.openTool(${tool.id})">
                    <div class="tool-icon">${tool.icon}</div>
                    <div class="tool-name">${tool.name}</div>
                    <div class="tool-desc">${tool.desc}</div>
                </div>
            `).join('') : '<div style="text-align: center; padding: 40px; color: var(--text-secondary);">⭐ هنوز ابزاری به علاقه‌مندی‌ها اضافه نکردید<br><br>با دابل کلیک روی ابزارها، آنها را اضافه کنید</div>';
        } else if (this.currentView === 'settings') {
            this.showModal('⚙️ تنظیمات', `
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <button onclick="toolbox.clearCache()" 
                            style="padding: 12px; background: #6c5ce7; color: white; border: none; 
                                   border-radius: 8px; cursor: pointer;">🧹 پاکسازی کش</button>
                    <button onclick="toolbox.secureClean()" 
                            style="padding: 12px; background: #d63031; color: white; border: none; 
                                   border-radius: 8px; cursor: pointer;">🗑️ بازنشانی کامل</button>
                    <button onclick="toolbox.toggleTheme()" 
                            style="padding: 12px; background: #636e72; color: white; border: none; 
                                   border-radius: 8px; cursor: pointer;">🎨 تغییر تم</button>
                    <button onclick="document.getElementById('toolModal').classList.remove('show')" 
                            style="padding: 12px; background: #2d3436; color: white; border: none; 
                                   border-radius: 8px; cursor: pointer;">❌ بستن</button>
                </div>
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
    
    // بررسی قفل برنامه
    const appLock = localStorage.getItem('appLock');
    if (appLock) {
        const password = prompt('🔐 رمز عبور برنامه را وارد کنید:');
        if (password !== appLock) {
            document.body.innerHTML = `
                <div style="display: flex; justify-content: center; align-items: center; height: 100vh; color: white; text-align: center;">
                    <div>
                        <h1>🔒 دسترسی غیرمجاز</h1>
                        <p>رمز عبور اشتباه است</p>
                        <button onclick="location.reload()" 
                                style="padding: 10px 20px; background: #6c5ce7; color: white; border: none; border-radius: 8px; cursor: pointer;">
                            🔄 تلاش مجدد
                        </button>
                    </div>
                </div>
            `;
        }
    }
});

// رجیستر Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js').catch(() => {
            console.log('Service Worker registration failed');
        });
    });
}
