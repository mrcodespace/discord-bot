document.addEventListener('DOMContentLoaded', function () {
    const newsContainer = document.getElementById('news-container');
    const lastUpdatedElement = document.getElementById('last-updated');

    const news = [
        { date: '04.08.2024', title: 'Neues Feature: Globaler Chat', content: 'Wir haben einen globalen Chat hinzugefügt, der es Nutzern ermöglicht, über Servergrenzen hinweg zu kommunizieren.' },
        { date: '01.08.2024', title: 'Automatisierte Moderation verbessert', content: 'Unsere Moderationstools wurden verbessert, um eine noch sicherere Umgebung zu gewährleisten.' },
        { date: '02.07.2024', title: 'Benutzerdefinierte Commands hinzugefügt', content: 'Jetzt kannst du benutzerdefinierte Commands erstellen, um deinen Server besser anzupassen.' }
    ];

    news.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p><p><em>${item.date}</em></p>`;
        newsContainer.appendChild(newsItem);
    });

    const lastUpdated = new Date().toLocaleString('de-DE', { dateStyle: 'short', timeStyle: 'short' });
    lastUpdatedElement.textContent = lastUpdated;
});
