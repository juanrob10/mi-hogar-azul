// Audio Visualizer & Player
const audioControl = document.querySelector('.audio-control');
const audioIcon = document.getElementById('audio-icon');
const audio = document.getElementById('bg-music');
const visualizerCanvas = document.getElementById('audio-visualizer');

if (audioControl && audio) {
    const vCtx = visualizerCanvas ? visualizerCanvas.getContext('2d') : null;

    let audioContext, analyser, source;
    let isPlaying = false;

    // Initialize Audio Context on first interaction (browser policy)
    function initAudio() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            if (visualizerCanvas && vCtx) {
                analyser = audioContext.createAnalyser();
                source = audioContext.createMediaElementSource(audio);
                source.connect(analyser);
                analyser.connect(audioContext.destination);
                analyser.fftSize = 64; // Low resolution for "lofi" look
            } else {
                // Just play audio if no visualizer
                // We don't need to connect source if we are not analyzing it, 
                // but for consistency we might want to just let the audio element play.
                // However, web audio API might be needed for other things later.
                // For now, simple playback is fine.
            }
        }
    }

    async function togglePlay() {
        initAudio();

        if (audioContext && audioContext.state === 'suspended') {
            await audioContext.resume();
        }

        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            // Play Icon SVG
            audioIcon.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M8 5v14l11-7z"/></svg>';
            audioIcon.classList.remove('playing');
        } else {
            try {
                await audio.play();
                isPlaying = true;
                // Pause Icon SVG
                audioIcon.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
                audioIcon.classList.add('playing');
                if (visualizerCanvas && vCtx) {
                    renderVisualizer();
                }
            } catch (e) {
                console.log("Playback failed:", e);
            }
        }
    }

    audioControl.addEventListener('click', togglePlay);

    function renderVisualizer() {
        if (!isPlaying || !analyser || !vCtx) {
            // Clear canvas when paused (no flat line)
            if (vCtx && visualizerCanvas) vCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
            return;
        }

        requestAnimationFrame(renderVisualizer);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);

        vCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);

        const barWidth = (visualizerCanvas.width / bufferLength) * 2.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
            // Extreme sensitivity: Non-linear scaling
            // Subtract a lower floor to catch quiet sounds, then power of 1.5 or 2 for drama
            let val = Math.max(0, dataArray[i] - 10);
            barHeight = Math.pow(val / 255, 1.5) * visualizerCanvas.height * 1.8;

            // Ensure some minimum height if there's any sound
            if (val > 0 && barHeight < 2) barHeight = 2;

            // Elegant pastel bars
            vCtx.fillStyle = `rgb(${barHeight * 4 + 100}, 180, 200)`;
            vCtx.fillRect(x, visualizerCanvas.height - barHeight, barWidth, barHeight); // Draw from bottom up for more impact

            x += barWidth + 1;
        }
    }

    // Initial setup (No draw)
    if (visualizerCanvas) {
        visualizerCanvas.width = 60;
        visualizerCanvas.height = 30;
    }
}
