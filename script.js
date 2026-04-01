// Smooth scrolling
function scrollToTopics() {
    document.getElementById('topics').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Matrix rain effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrixCanvas';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 2;
        opacity: 0.1;
    `;
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 35, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00bfff';
        ctx.font = `${fontSize}px monospace`;
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
}

// Open topic modal
function openTopic(topicId) {
    const modal = document.getElementById('contentModal');
    const modalContent = document.getElementById('modalContent');
    
    const topics = {
        1: `
            <div class="topic-content">
                <h2 class="content-title">🛡️ Malware & Virus</h2>
                
                <div class="content-section">
                    <h4>🔬 Apa itu Malware?</h4>
                    <p>Malware (Malicious Software) adalah perangkat lunak berbahaya yang dirancang untuk merusak, mengganggu, atau mendapatkan akses tidak sah ke sistem komputer.</p>
                </div>
                
                <div class="content-section">
                    <h4>🦠 Jenis-jenis Malware</h4>
                    <ul>
                        <li><strong>Virus:</strong> Menempel pada file lain dan menyebar saat file dijalankan</li>
                        <li><strong>Worm:</strong> Menyebar sendiri melalui jaringan</li>
                        <li><strong>Trojan:</strong> Berpura-pura sebagai software sah</li>
                        <li><strong>Ransomware:</strong> Mengenkripsi file dan meminta tebusan</li>
                        <li><strong>Spyware:</strong> Mencuri data pribadi secara diam-diam</li>
                    </ul>
                </div>
                
                <div class="security-animation">
                    <i class="fas fa-bug"></i>
                    <p>Deteksi malware dengan antivirus terkini</p>
                </div>
                
                <div class="content-section">
                    <h4>🛡️ Cara Pencegahan</h4>
                    <ul>
                        <li>✅ Update software dan sistem operasi</li>
                        <li>✅ Gunakan antivirus yang reliable</li>
                        <li>✅ Hindari download dari sumber tidak jelas</li>
                        <li>✅ Backup data secara rutin</li>
                    </ul>
                </div>
            </div>
        `,
        2: `
            <div class="topic-content">
                <h2 class="content-title">🔐 Password Security</h2>
                
                <div class="content-section">
                    <h4>❌ Password yang Buruk</h4>
                    <p><code>123456, password, qwerty, nama123</code></p>
                    <p>Password lemah mudah ditebak atau di-crack!</p>
                </div>
                
                <div class="content-section">
                    <h4>✅ Password yang Kuat</h4>
                    <ul>
                        <li>Minimal 12 karakter</li>
                        <li>Gunakan huruf besar-kecil</li>
                        <li>Angka dan simbol khusus</li>
                        <li>Hindari kata-kata umum</li>
                    </ul>
                    <div class="security-animation">
                        <i class="fas fa-key"></i>
                    </div>
                    <p><strong>Contoh:</strong> <code>S3liTKJ2#Cyber2024!</code></p>
                </div>
                
                <div class="content-section">
                    <h4>🛡️ Best Practices</h4>
                    <ul>
                        <li>✅ Gunakan Password Manager</li>
                        <li>✅ Aktifkan 2FA (Two Factor Authentication)</li>
                        <li>✅ Ganti password secara berkala</li>
                        <li>✅ Jangan tulis password di mana-mana</li>
                    </ul>
                </div>
            </div>
        `,
        3: `
            <div class="topic-content">
                <h2 class="content-title">🎣 Phishing Attack</h2>
                
                <div class="content-section">
                    <h4>📧 Apa itu Phishing?</h4>
                    <p>Phishing adalah teknik penipuan dimana penyerang menyamar sebagai pihak terpercaya untuk mendapatkan informasi sensitif seperti password, nomor kartu kredit, dll.</p>
                </div>
                
                <div class="content-section">
                    <h4>🚨 Ciri-ciri Email Phishing</h4>
                    <ul>
                        <li>Alamat pengirim mencurigakan</li>
                        <li>Permintaan data pribadi mendadak</li>
                        <li>Tulisan buruk dan banyak typo</li>
                        <li>Link yang mencurigakan</li>
                    </ul>
                    <div class="security-animation">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                </div>
                
                <div class="content-section">
                    <h4>🛡️ Cara Menghindari</h4>
                    <ul>
                        <li>✅ Selalu cek URL sebelum klik</li>
                        <li>✅ Jangan berikan data via email</li>
                        <li>✅ Hubungi perusahaan langsung</li>
                        <li>✅ Gunakan browser dengan proteksi phishing</li>
                    </ul>
                </div>
            </div>
        `,
        4: `
            <div class="topic-content">
                <h2 class="content-title">🌐 Network Security</h2>
                
                <div class="content-section">
                    <h4>📶 Bahaya WiFi Publik</h4>
                    <p>WiFi publik tidak aman! Data Anda bisa dicuri oleh hacker melalui:</p>
                    <ul>
                        <li>Man-in-the-Middle Attack</li>
                        <li>Packet Sniffing</li>
                        <li>Fake WiFi Access Point</li>
                    </ul>
                </div>
                
                <div class="content-section">
                    <h4>🔒 Keamanan Jaringan Rumah</h4>
                    <ul>
                        <li>Ganti password WiFi default</li>
                        <li>Gunakan enkripsi WPA3</li>
                        <li>Nonaktifkan WPS</li>
                        <li>Update firmware router</li>
                    </ul>
                    <div class="security-animation">
                        <i class="fas fa-wifi"></i>
                    </div>
                </div>
                
                <div class="content-section">
                    <h4>🛡️ Tips Aman</h4>
                    <ul>
                        <li>✅ Gunakan VPN di WiFi publik</li>
                        <li>✅ Hindari transaksi online di WiFi publik</li>
                        <li>✅ Aktifkan firewall</li>
                        <li>✅ Monitor perangkat yang terhubung</li>
                    </ul>
                </div>
            </div>
        `
    };
    
    modalContent.innerHTML = topics[topicId];
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Auto scroll to top
    setTimeout(() => {
        modalContent.scrollTop = 0;
    }, 100);
}

// Close modal
function closeModal() {
    const modal = document.getElementById('contentModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners untuk topic cards
document.addEventListener('DOMContentLoaded', function() {
    // Matrix rain
    createMatrixRain();
    
    // Topic card click events
    const topicCards = document.querySelectorAll('.topic-card');
    topicCards.forEach(card => {
        card.addEventListener('click', function() {
            const topicId = this.getAttribute('data-topic');
            openTopic(topicId);
        });
    });
    
    // Close modal on outside click
    document.getElementById('contentModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // Keyboard escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

// Responsive menu toggle (untuk mobile)
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Window resize handler
window.addEventListener('resize', function() {
    const canvas = document.getElementById('matrixCanvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});