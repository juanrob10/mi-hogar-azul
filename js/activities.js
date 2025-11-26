const activitiesData = {
    sensorial: `
        <div class="detail-hero">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-icon-wrapper">
                    <span class="hero-icon">✨</span>
                </div>
                <h2>Estimulación Sensorial</h2>
                <p class="hero-subtitle">Despertando los sentidos</p>
            </div>
        </div>
        <div class="detail-content-wrapper">
            <div class="detail-card glass-effect">
                <p class="detail-description">Nuestras sesiones de estimulación sensorial están diseñadas para despertar la curiosidad natural de tu bebé. Utilizamos una variedad de materiales seguros y atractivos para crear experiencias únicas que fomentan las conexiones neuronales.</p>
                
                <div class="detail-section">
                    <h3>¿Qué incluye la experiencia?</h3>
                    <ul class="benefit-grid">
                        <li class="benefit-item">
                            <span class="benefit-icon">🧸</span>
                            <div class="benefit-text">
                                <strong>Exploración Táctil</strong>
                                <p>Texturas suaves, rugosas y lisas.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">💡</span>
                            <div class="benefit-text">
                                <strong>Estimulación Visual</strong>
                                <p>Juegos de luces tenues y sombras.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🎵</span>
                            <div class="benefit-text">
                                <strong>Armonía Auditiva</strong>
                                <p>Sonidos de la naturaleza y música.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🌸</span>
                            <div class="benefit-text">
                                <strong>Aromaterapia</strong>
                                <p>Esencias suaves y seguras.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="action-area">
                    <button class="back-btn" onclick="showList()" aria-label="Regresar a Servicios">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `,
    motricidad: `
        <div class="detail-hero hero-motricidad">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-icon-wrapper">
                    <span class="hero-icon">🏃‍♂️</span>
                </div>
                <h2>Motricidad</h2>
                <p class="hero-subtitle">Movimiento y Libertad</p>
            </div>
        </div>
        <div class="detail-content-wrapper">
            <div class="detail-card glass-effect">
                <p class="detail-description">Fomentamos el movimiento libre y el desarrollo físico a través del juego. Cada ejercicio está adaptado a la etapa de desarrollo de tu pequeño para fortalecer sus músculos y mejorar su coordinación.</p>
                
                <div class="detail-section">
                    <h3>Actividades Principales</h3>
                    <ul class="benefit-grid">
                        <li class="benefit-item">
                            <span class="benefit-icon">🧗</span>
                            <div class="benefit-text">
                                <strong>Circuitos</strong>
                                <p>Gateo y obstáculos suaves.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">👐</span>
                            <div class="benefit-text">
                                <strong>Coordinación</strong>
                                <p>Ejercicios de agarre ojo-mano.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">💃</span>
                            <div class="benefit-text">
                                <strong>Ritmo</strong>
                                <p>Bailes y movimientos divertidos.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🐢</span>
                            <div class="benefit-text">
                                <strong>Tummy Time</strong>
                                <p>Fortalecimiento de cuello y espalda.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="action-area">
                    <button class="back-btn" onclick="showList()" aria-label="Regresar a Servicios">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `,
    social: `
        <div class="detail-hero hero-social">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-icon-wrapper">
                    <span class="hero-icon">🤝</span>
                </div>
                <h2>Juego Social</h2>
                <p class="hero-subtitle">Amistad y Convivencia</p>
            </div>
        </div>
        <div class="detail-content-wrapper">
            <div class="detail-card glass-effect">
                <p class="detail-description">El primer contacto con otros niños es fundamental. Creamos un espacio seguro donde los pequeños pueden interactuar, aprender unos de otros y hacer sus primeros amigos en un ambiente controlado.</p>
                
                <div class="detail-section">
                    <h3>Beneficios del Grupo</h3>
                    <ul class="benefit-grid">
                        <li class="benefit-item">
                            <span class="benefit-icon">❤️</span>
                            <div class="benefit-text">
                                <strong>Empatía</strong>
                                <p>Desarrollo emocional temprano.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">👀</span>
                            <div class="benefit-text">
                                <strong>Imitación</strong>
                                <p>Aprendizaje observando a otros.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🧩</span>
                            <div class="benefit-text">
                                <strong>Cooperación</strong>
                                <p>Juegos simples en equipo.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">👨‍👩‍👧‍👦</span>
                            <div class="benefit-text">
                                <strong>Comunidad</strong>
                                <p>Vínculo entre familias.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="action-area">
                    <button class="back-btn" onclick="showList()" aria-label="Regresar a Servicios">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `
};

const activitiesList = document.getElementById('activities-list');
const activityDetail = document.getElementById('activity-detail');

document.querySelectorAll('.activity-card').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        if (activitiesData[id]) {
            activityDetail.innerHTML = activitiesData[id];
            activitiesList.classList.add('hidden');
            activityDetail.classList.remove('hidden');
            activityDetail.classList.add('activity-detail');
            // Scroll to top of section to ensure smooth transition
            document.getElementById('activities').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

function showList() {
    activityDetail.classList.add('hidden');
    activitiesList.classList.remove('hidden');
    document.getElementById('activities').scrollIntoView({ behavior: 'smooth' });
}

// Make showList globally available for the onclick handler in the HTML string
window.showList = showList;
