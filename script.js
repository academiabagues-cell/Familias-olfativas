// Este es el objeto que simula los datos de tu archivo de Excel.
// Puedes modificarlo para que coincida con tus datos reales.
const fragranceData = {
    "femenino": {
        "floral": ["Jasmine Bloom", "Rose Garden", "Lily Valley"],
        "frutal": ["Cherry Pop", "Peach Sparkle", "Berry Bliss"]
    },
    "masculino": {
        "amaderada": ["Cedar Storm", "Sandalwood Noir", "Oak Forest"],
        "especiada": ["Spiced Citrus", "Black Pepper", "Amber Spice"]
    },
    "unisex": {
        "citrica": ["Lime Zest", "Orange Grove", "Lemon Fresh"],
        "oriental": ["Oud Desire", "Vanilla Dream", "Musk Mystery"]
    }
};

// Obtenemos los elementos de la página.
const genderSelect = document.getElementById('genderSelect');
const familySelect = document.getElementById('familySelect');
const fragranceSelect = document.getElementById('fragranceSelect');

// Función para reiniciar y ocultar los menús.
function resetSelect(selectElement) {
    selectElement.innerHTML = '<option value="">-- Seleccionar --</option>';
    selectElement.style.display = 'none';
}

// Escuchamos el evento de cambio en el menú de género.
genderSelect.addEventListener('change', () => {
    const selectedGender = genderSelect.value;
    resetSelect(familySelect);
    resetSelect(fragranceSelect);

    if (selectedGender) {
        // Llenamos el menú de familia olfativa.
        const families = Object.keys(fragranceData[selectedGender]);
        families.forEach(family => {
            const option = document.createElement('option');
            option.value = family;
            option.textContent = family;
            familySelect.appendChild(option);
        });
        familySelect.style.display = 'block';
    }
});

// Escuchamos el evento de cambio en el menú de familia.
familySelect.addEventListener('change', () => {
    const selectedGender = genderSelect.value;
    const selectedFamily = familySelect.value;
    resetSelect(fragranceSelect);

    if (selectedFamily) {
        // Llenamos el menú de fragancias.
        const fragrances = fragranceData[selectedGender][selectedFamily];
        fragrances.forEach(fragrance => {
            const option = document.createElement('option');
            option.value = fragrance;
            option.textContent = fragrance;
            fragranceSelect.appendChild(option);
        });
        fragranceSelect.style.display = 'block';
    }
});
