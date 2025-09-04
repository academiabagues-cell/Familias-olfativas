// Este es el objeto que simula los datos de tu archivo de Excel.
// Lo he modificado con las familias olfativas que mencionaste.
const fragranceData = {
    "femenino": {
        "Almizcle Floral Amaderada": ["Fragancia F1", "Fragancia F2"],
        "Ambar Floral": ["Fragancia F3", "Fragancia F4"],
        "Floral": ["Fragancia F5", "Fragancia F6"],
        "Floral Frutal": ["Fragancia F7", "Fragancia F8"],
        "Floral Frutal Gourdmand": ["Fragancia F9", "Fragancia F10"],
        "Floral Oriental": ["Fragancia F11", "Fragancia F12"],
        "Oriental": ["Fragancia F13", "Fragancia F14"],
        "Oriental Amaderado": ["Fragancia F15", "Fragancia F16"],
    },
    "masculino": {
        "Amaderada": ["Fragancia M1", "Fragancia M2"],
        "Amaderada Ambarada Gourdmand": ["Fragancia M3", "Fragancia M4"],
        "Amaderada Aromática Gourdmand": ["Fragancia M5", "Fragancia M6"],
        "Amaderada Oriental Especiado": ["Fragancia M7", "Fragancia M8"],
        "Ambarada Floral": ["Fragancia M9", "Fragancia M10"],
        "Cítrica": ["Fragancia M11", "Fragancia M12"],
        "Especiada Amaderada Fresca": ["Fragancia M13", "Fragancia M14"],
        "Fougère": ["Fragancia M15", "Fragancia M16"],
        "Oriental Fougère": ["Fragancia M17", "Fragancia M18"],
    },
    "unisex": {
        "Amaderada": ["Fragancia U1", "Fragancia U2"],
        "Amaderada Ambarada Gourdmand": ["Fragancia U3", "Fragancia U4"],
        "Amaderada Aromática Gourdmand": ["Fragancia U5", "Fragancia U6"],
        "Cítrica": ["Fragancia U7", "Fragancia U8"],
        "Especiada Amaderada Fresca": ["Fragancia U9", "Fragancia U10"],
        "Fougère": ["Fragancia U11", "Fragancia U12"],
        "Oriental": ["Fragancia U13", "Fragancia U14"],
        "Oriental Amaderado": ["Fragancia U15", "Fragancia U16"],
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
