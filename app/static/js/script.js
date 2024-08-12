document.getElementById('svg-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    const jsonData = JSON.stringify(data);

    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
    .then(response => response.json())
    .then(data => {
        const svgContainer = document.getElementById('svg-preview');
        svgContainer.innerHTML = data.svg;

        // Apply typing effect after SVG is inserted
        const textElement = svgContainer.querySelector('#animated-text');
        if (textElement) {
            applyTypingEffect(textElement);
        }
    })
    .catch(error => console.error('Error:', error));
});

function applyTypingEffect(textElement) {
    const text = textElement.textContent;
    const length = text.length;
    textElement.textContent = '';
    let index = 0;

    function type() {
        if (index < length) {
            textElement.textContent += text[index++];
            setTimeout(type, 100); // Adjust typing speed here
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('svg-form');
    const svgPreview = document.getElementById('svg-preview');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const lines = formData.get('lines').split(';').map(line => line.trim()).filter(line => line.length > 0);
        const font = formData.get('font');
        const size = formData.get('size');
        const fontWeight = formData.get('font_weight');
        const color = formData.get('color');
        const background = formData.get('background');
        const height = formData.get('height');
        const width = formData.get('width');
        const center = formData.get('center') === 'true';
        const vCenter = formData.get('vCenter') === 'true';
        const multiline = formData.get('multiline') === 'true';
        const duration = formData.get('duration');
        const pause = formData.get('pause');
        const repeat = formData.get('repeat') === 'true';
        const separator = formData.get('separator');
        const letterSpacing = formData.get('letterSpacing');

        let svgContent = '';

        // Handle multiline text
        if (multiline) {
            lines.forEach((line, index) => {
                svgContent += `
                    <text x="${center ? '50%' : '10%'}" y="${vCenter ? (height / 2) + (index * (size + 10)) : 20 + (index * (size + 10))}" 
                          font-family="${font}" font-size="${size}px" font-weight="${fontWeight}" 
                          fill="${color}" text-anchor="${center ? 'middle' : 'start'}" letter-spacing="${letterSpacing}">
                        ${line}
                    </text>
                `;
            });
        } else {
            svgContent = `
                <text x="${center ? '50%' : '10%'}" y="${vCenter ? height / 2 : 20}" 
                      font-family="${font}" font-size="${size}px" font-weight="${fontWeight}" 
                      fill="${color}" text-anchor="${center ? 'middle' : 'start'}" letter-spacing="${letterSpacing}">
                    ${lines.join(separator)}
                </text>
            `;
        }

        const svg = `
            <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" style="background-color: ${background};">
                ${svgContent}
            </svg>
        `;

        svgPreview.innerHTML = svg;
    });
});