document.addEventListener('DOMContentLoaded', function () {
    const newsContainer = document.getElementById('news-container');
    const lastUpdatedElement = document.getElementById('last-updated');

    const news = [
        { date: '04.08.2024', title: 'Neues Feature: Globaler Chat', content: 'Wir haben einen globalen Chat hinzugefügt, der es Nutzern ermöglicht, über Servergrenzen hinweg zu kommunizieren.' },
        { date: '01.08.2024', title: 'Automatisierte Moderation verbessert', content: 'Unsere Moderationstools wurden verbessert, um eine noch sicherere Umgebung zu gewährleisten.' },
        { date: '02.07.2024', title: 'Benutzerdefinierte Commands hinzugefügt', content: 'Jetzt kannst du benutzerdefinierte Commands erstellen, um deinen Server besser anzupassen.' },
        { date: '28.06.2024', title: 'Neues Design', content: 'Unser Bot hat ein neues Design erhalten, um die Benutzerfreundlichkeit zu verbessern.' },
        { date: '15.06.2024', title: 'Leistungsverbesserungen', content: 'Wir haben zahlreiche Leistungsverbesserungen vorgenommen, um den Bot schneller und zuverlässiger zu machen.' },
        { date: '10.06.2024', title: 'Global Economy ist hochgeladen', content: 'Das neue Feature "Global Economy" ist jetzt verfügbar und bietet umfassende Möglichkeiten zur Verwaltung von Serverökonomien.' }
    ];

    const isHomePage = document.title.includes('Home');
    const displayedNews = isHomePage ? news.slice(0, 5) : news;

    displayedNews.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p><p><em>${item.date}</em></p>`;
        newsContainer.appendChild(newsItem);
    });

    if (lastUpdatedElement) {
        const lastUpdated = new Date().toLocaleString('de-DE', { dateStyle: 'short', timeStyle: 'short' });
        lastUpdatedElement.textContent = lastUpdated;
    }
});
