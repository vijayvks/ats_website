// Smooth reveal animation on scroll
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => observer.observe(element));

// Contact form feedback
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    formMessage.classList.remove('d-none', 'alert-danger');
    formMessage.classList.add('alert-success');
    formMessage.textContent = `Thank you, ${name || 'there'}! Your message has been received. We will contact you at ${email || 'your email'} soon.`;
    contactForm.reset();
  });
}

// App detail modal content
const appDetails = {
  atsTerminalDesktop: {
    title: 'ATS Terminal Desktop Application',
    body: '<p class="mb-3">ATS Terminal Desktop is a professional Windows application designed for Smart TV mainboard servicing. It helps technicians recover logo-hang TVs, enter Recovery Mode with a single click, and simplify the software recovery process. The application is built to reduce repair time, improve service efficiency, and provide a reliable solution for Smart TV maintenance. With its user-friendly interface and powerful recovery features, ATS Terminal Desktop is an essential tool for every Smart TV repair technician..</p><p class="mb-3"><strong>Demo:</strong> <a href="https://youtu.be/6De7mLx2nrY?si=g32QP2HCjqI1n0x0" target="_blank" rel="noopener noreferrer">Watch video</a></p><ul class="mb-0"><li>One-click Recovery Mode</li><li>Fix Smart TV Logo-Hang Issues</li><li>User-Friendly Interface</li></ul>'
  },
  androidAppController: {
    title: 'Android App Controller Desktop Application',
    body: '<p class="mb-3">Android App Controller Desktop is a professional Windows application designed for remote Android TV app management. It enables technicians to install and uninstall both third-party and default system applications quickly and efficiently. The software simplifies the app management process, reduces servicing time, and helps maintain Android TVs with ease. Its intuitive interface and reliable performance make it an essential tool for Smart TV technicians and service professionals.</p><p class="mb-3"><strong>Demo:</strong> <a href="https://youtu.be/by57NbEpT-M?si=Nkg9t1BwxK2ZK_jN" target="_blank" rel="noopener noreferrer">Watch video</a></p><ul class="mb-0"><li>Install Third-Party Applications</li><li>Uninstall Third-Party Applications</li><li>Ideal for Professional Smart TV Servicing</li></ul>'
  },
  mstarDumpUnpacker: {
    title: 'Mstar Dump Unpacker',
    body: '<p class="mb-3">MStar Dump Unpacker is a professional desktop application designed to simplify the extraction of MStar eMMC dump files. With a single click, it unpacks firmware dumps into accessible files, allowing technicians to inspect, modify, and customize firmware for repair, analysis, and development. The tool eliminates complex manual extraction steps, saving time and improving efficiency for Smart TV mainboard servicing.</p><p class="mb-3"><strong>Demo:</strong> <a href="https://youtu.be/Y-2DDu69Eow?si=PTEMk6yeusAhWzne" target="_blank" rel="noopener noreferrer">Watch video</a></p><ul class="mb-0"><li>One-Click MStar eMMC Dump Unpacking</li><li>Easy Firmware Modification and Customization</li><li>User-Friendly Interface</li></ul>'
  },
  atsTerminalAndroid: {
    title: 'ATS Terminal Android App',
    body: '<p class="mb-3">ATS Terminal Android App is a professional mobile application designed for Android TV servicing. Using a Bluetooth connection, technicians can connect their mobile phone to compatible Android TVs, recover logo-hang issues, open Recovery Mode with a single click, and modify TV service parameters with ease. The app simplifies the servicing process, reduces repair time, and provides a fast, reliable, and convenient solution for Smart TV maintenance.</p><p class="mb-3"><strong>Demo:</strong> <a href="https://youtu.be/20fsVNzW5fo?si=PeSfYbmmljDa-1jZ" target="_blank" rel="noopener noreferrer">Watch video</a></p><ul class="mb-0"><li>One-Click Recovery Mode</li><li>Bluetooth Connection with Android TV</li><li>Easy TV Service Parameter Modification</li></ul>'
  },
  atsServiceRemote: {
    title: 'ATS Service Remote Android App',
    body: '<div class="mb-3"><div class="rounded-3 border p-3 text-center bg-light"><i class="bi bi-phone-fill fs-1 text-primary"></i><p class="mt-2 mb-0 text-muted">Screenshot preview for ATS Service Remote</p></div></div><p class="mb-3">A remote support application made for troubleshooting and service coordination from a mobile device.</p><p class="mb-3"><strong>Comment:</strong> This app helps technicians provide fast remote assistance and keep service operations smooth.</p><p class="mb-3"><strong>Demo:</strong> <a href="https://youtu.be/JiQUXAR_OMM?si=pXcGzyFZLp4QXz9o" target="_blank" rel="noopener noreferrer">Watch video</a></p><ul class="mb-0"><li>Remote assistance support</li><li>Fast communication with service teams</li><li>Helps reduce downtime</li></ul>'
  },
  atsTechHub: {
    title: 'ATS Tech Hub Android App',
    body: '<p class="mb-3">A collaborative Android app for technical learning, knowledge sharing, and continuous service improvement.</p><ul class="mb-0"><li>Training and support resources</li><li>Knowledge sharing platform</li><li>Built for technicians and learners</li></ul>'
  }
};

const detailButtons = document.querySelectorAll('.detail-btn');
const appModalLabel = document.getElementById('appModalLabel');
const appModalBody = document.getElementById('appModalBody');

if (detailButtons.length) {
  detailButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const key = button.getAttribute('data-app');
      const selectedApp = appDetails[key];

      if (selectedApp) {
        appModalLabel.textContent = selectedApp.title;
        appModalBody.innerHTML = selectedApp.body;
      }
    });
  });
}

// Add active state for navbar links on scroll
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
