// Faculty-specific slot mapping and subject assignments
const facultySlotMapping = { 'A1-1': { day: 'Monday', type: 'Theory', timeIndex: 1, start: 540, end: 590, linked: ['A1-2', 'A1-3'], period: 'Morning' }, 'F1-1': { day: 'Monday', type: 'Theory', timeIndex: 2, start: 595, end: 645, linked: ['F1-2'], period: 'Morning' }, 'D1-1': { day: 'Monday', type: 'Theory', timeIndex: 3, start: 650, end: 700, linked: ['D1-2'], period: 'Morning' }, 'TC1': { day: 'Monday', type: 'Theory', timeIndex: 4, start: 705, end: 755, linked: [], period: 'Morning' }, 'A2-1': { day: 'Monday', type: 'Theory', timeIndex: 5, start: 795, end: 845, linked: ['A2-2', 'A2-3'], period: 'Afternoon' }, 'F2-1': { day: 'Monday', type: 'Theory', timeIndex: 6, start: 850, end: 900, linked: ['F2-2'], period: 'Afternoon' }, 'D2-1': { day: 'Monday', type: 'Theory', timeIndex: 7, start: 905, end: 955, linked: ['D2-2'], period: 'Afternoon' }, 'TC2': { day: 'Monday', type: 'Theory', timeIndex: 8, start: 960, end: 1010, linked: [], period: 'Afternoon' }, 'L1+L2': { day: 'Monday', type: 'Lab', timeIndex: 1, colspan: 2, start: 540, end: 640, linked: [] }, 'L3+L4': { day: 'Monday', type: 'Lab', timeIndex: 3, colspan: 2, start: 650, end: 750, linked: [] }, 'L21+L22': { day: 'Monday', type: 'Lab', timeIndex: 5, colspan: 2, start: 795, end: 895, linked: [] }, 'L23+L24': { day: 'Monday', type: 'Lab', timeIndex: 7, colspan: 2, start: 905, end: 1005, linked: [] }, 'B1-1': { day: 'Tuesday', type: 'Theory', timeIndex: 1, start: 540, end: 590, linked: ['B1-2', 'B1-3'], period: 'Morning' }, 'G1-1': { day: 'Tuesday', type: 'Theory', timeIndex: 2, start: 595, end: 645, linked: ['G1-2'], period: 'Morning' }, 'E1-1': { day: 'Tuesday', type: 'Theory', timeIndex: 3, start: 650, end: 700, linked: ['E1-2'], period: 'Morning' }, 'TA1': { day: 'Tuesday', type: 'Theory', timeIndex: 4, start: 705, end: 755, linked: [], period: 'Morning' }, 'B2-1': { day: 'Tuesday', type: 'Theory', timeIndex: 5, start: 795, end: 845, linked: ['B2-2', 'B2-3'], period: 'Afternoon' }, 'G2-1': { day: 'Tuesday', type: 'Theory', timeIndex: 6, start: 850, end: 900, linked: ['G2-2'], period: 'Afternoon' }, 'E2-1': { day: 'Tuesday', type: 'Theory', timeIndex: 7, start: 905, end: 955, linked: ['E2-2'], period: 'Afternoon' }, 'TA2': { day: 'Tuesday', type: 'Theory', timeIndex: 8, start: 960, end: 1010, linked: [], period: 'Afternoon' }, 'L5+L6': { day: 'Tuesday', type: 'Lab', timeIndex: 1, colspan: 2, start: 540, end: 640, linked: [] }, 'L7+L8': { day: 'Tuesday', type: 'Lab', timeIndex: 3, colspan: 2, start: 650, end: 750, linked: [] }, 'L25+L26': { day: 'Tuesday', type: 'Lab', timeIndex: 5, colspan: 2, start: 795, end: 895, linked: [] }, 'L27+L28': { day: 'Tuesday', type: 'Lab', timeIndex: 7, colspan: 2, start: 905, end: 1005, linked: [] }, 'C1-1': { day: 'Wednesday', type: 'Theory', timeIndex: 1, start: 540, end: 590, linked: ['C1-2', 'C1-3'], period: 'Morning' }, 'A1-2': { day: 'Wednesday', type: 'Theory', timeIndex: 2, start: 595, end: 645, linked: [], period: 'Morning' }, 'F1-2': { day: 'Wednesday', type: 'Theory', timeIndex: 3, start: 650, end: 700, linked: [], period: 'Morning' }, 'B1-2': { day: 'Wednesday', type: 'Theory', timeIndex: 4, start: 705, end: 755, linked: [], period: 'Morning' }, 'C2-1': { day: 'Wednesday', type: 'Theory', timeIndex: 5, start: 795, end: 845, linked: ['C2-2', 'C2-3'], period: 'Afternoon' }, 'A2-2': { day: 'Wednesday', type: 'Theory', timeIndex: 6, start: 850, end: 900, linked: [], period: 'Afternoon' }, 'F2-2': { day: 'Wednesday', type: 'Theory', timeIndex: 7, start: 905, end: 955, linked: [], period: 'Afternoon' }, 'B2-2': { day: 'Wednesday', type: 'Theory', timeIndex: 8, start: 960, end: 1010, linked: [], period: 'Afternoon' }, 'L9+L10': { day: 'Wednesday', type: 'Lab', timeIndex: 1, colspan: 2, start: 540, end: 640, linked: [] }, 'L11+L12': { day: 'Wednesday', type: 'Lab', timeIndex: 3, colspan: 2, start: 650, end: 750, linked: [] }, 'L29+L30': { day: 'Wednesday', type: 'Lab', timeIndex: 5, colspan: 2, start: 795, end: 895, linked: [] }, 'L31+L32': { day: 'Wednesday', type: 'Lab', timeIndex: 7, colspan: 2, start: 905, end: 1005, linked: [] }, 'D1-2': { day: 'Thursday', type: 'Theory', timeIndex: 1, start: 540, end: 590, linked: [], period: 'Morning' }, 'B1-3': { day: 'Thursday', type: 'Theory', timeIndex: 2, start: 595, end: 645, linked: [], period: 'Morning' }, 'G1-2': { day: 'Thursday', type: 'Theory', timeIndex: 3, start: 650, end: 700, linked: [], period: 'Morning' }, 'C1-2': { day: 'Thursday', type: 'Theory', timeIndex: 4, start: 705, end: 755, linked: [], period: 'Morning' }, 'D2-2': { day: 'Thursday', type: 'Theory', timeIndex: 5, start: 795, end: 845, linked: [], period: 'Afternoon' }, 'B2-3': { day: 'Thursday', type: 'Theory', timeIndex: 6, start: 850, end: 900, linked: [], period: 'Afternoon' }, 'G2-2': { day: 'Thursday', type: 'Theory', timeIndex: 7, start: 905, end: 955, linked: [], period: 'Afternoon' }, 'C2-2': { day: 'Thursday', type: 'Theory', timeIndex: 8, start: 960, end: 1010, linked: [], period: 'Afternoon' }, 'L13+L14': { day: 'Thursday', type: 'Lab', timeIndex: 1, colspan: 2, start: 540, end: 640, linked: [] }, 'L15+L16': { day: 'Thursday', type: 'Lab', timeIndex: 3, colspan: 2, start: 650, end: 750, linked: [] }, 'L33+L34': { day: 'Thursday', type: 'Lab', timeIndex: 5, colspan: 2, start: 795, end: 895, linked: [] }, 'L35+L36': { day: 'Thursday', type: 'Lab', timeIndex: 7, colspan: 2, start: 905, end: 1005, linked: [] }, 'E1-2': { day: 'Friday', type: 'Theory', timeIndex: 1, start: 540, end: 590, linked: [], period: 'Morning' }, 'C1-3': { day: 'Friday', type: 'Theory', timeIndex: 2, start: 595, end: 645, linked: [], period: 'Morning' }, 'A1-3': { day: 'Friday', type: 'Theory', timeIndex: 3, start: 650, end: 700, linked: [], period: 'Morning' }, 'TB1': { day: 'Friday', type: 'Theory', timeIndex: 4, start: 705, end: 755, linked: [], period: 'Morning' }, 'E2-2': { day: 'Friday', type: 'Theory', timeIndex: 5, start: 795, end: 845, linked: [], period: 'Afternoon' }, 'C2-3': { day: 'Friday', type: 'Theory', timeIndex: 6, start: 850, end: 900, linked: [], period: 'Afternoon' }, 'A2-3': { day: 'Friday', type: 'Theory', timeIndex: 7, start: 905, end: 955, linked: [], period: 'Afternoon' }, 'TB2': { day: 'Friday', type: 'Theory', timeIndex: 8, start: 960, end: 1010, linked: [], period: 'Afternoon' }, 'L17+L18': { day: 'Friday', type: 'Lab', timeIndex: 1, colspan: 2, start: 540, end: 640, linked: [] }, 'L19+L20': { day: 'Friday', type: 'Lab', timeIndex: 3, colspan: 2, start: 650, end: 750, linked: [] }, 'L37+L38': { day: 'Friday', type: 'Lab', timeIndex: 5, colspan: 2, start: 795, end: 895, linked: [] }, 'L39+L40': { day: 'Friday', type: 'Lab', timeIndex: 7, colspan: 2, start: 905, end: 1005, linked: [] } };

// Faculty database with assigned subjects
const facultyDatabase = {
    'F001': {
        name: 'Dr. P. Senthil Kumar',
        department: 'Mathematics',
        subjects: ['MAT1002'],
        slots: ['A1-1', 'A1-2', 'A1-3'],
        room: 'Room 101-A'
    },
    'F002': {
        name: 'Mrs. Anughna N',
        department: 'Electronics',
        subjects: ['ECE1001'],
        slots: ['B1-1', 'B1-2', 'B1-3', 'L3+L4', 'L21+L22', 'L31+L32'],
        room: 'Room 105'
    },
    'F003': {
        name: 'Dr. Ravi.J',
        department: 'Mathematics',
        subjects: ['MAT1002'],
        slots: ['C1-1', 'C1-2', 'C1-3'],
        room: 'Room 109'
    }
};

// Global variables
let facultyTimetableData = {}; // Stores { subject: '', faculty: '', room: '', available: true }
let facultyId = null;
let facultyInfo = null;

// Initialize faculty dashboard
function initFaculty() {
    facultyId = sessionStorage.getItem('loggedInUserId');
    facultyInfo = facultyDatabase[facultyId];
    
    if (!facultyInfo) {
        alert('Faculty information not found. Please contact administrator.');
        return;
    }
    
    renderFacultySubjectSelectors();
    renderAvailabilityControls();
    renderFacultyTimetable();
    
    // Auto-save every 30 seconds
    setInterval(autoSaveDraft, 30000);
}

function renderFacultySubjectSelectors() {
    const theoryContainer = document.getElementById('faculty-theory-slots');
    const labContainer = document.getElementById('faculty-lab-slots');

    theoryContainer.innerHTML = '';
    labContainer.innerHTML = '';

    // Filter slots for this faculty
    const facultyTheorySlots = facultyInfo.slots.filter(slot => 
        facultySlotMapping[slot] && facultySlotMapping[slot].type === 'Theory'
    );
    const facultyLabSlots = facultyInfo.slots.filter(slot => 
        facultySlotMapping[slot] && facultySlotMapping[slot].type === 'Lab'
    );

    // Theory slots
    if (facultyTheorySlots.length > 0) {
        const theoryDiv = document.createElement('div');
        theoryDiv.className = 'form-group';
        theoryDiv.innerHTML = `<label>Your Theory Slots:</label>`;
        
        facultyTheorySlots.forEach(slot => {
            const slotDiv = document.createElement('div');
            slotDiv.style.marginBottom = '10px';
            slotDiv.innerHTML = `
                <strong>${slot}</strong> - ${facultyInfo.subjects.join(', ')} - ${facultyInfo.room}
            `;
            theoryDiv.appendChild(slotDiv);
        });
        
        theoryContainer.appendChild(theoryDiv);
    } else {
        theoryContainer.innerHTML = '<p>No theory slots assigned.</p>';
    }

    // Lab slots
    if (facultyLabSlots.length > 0) {
        const labDiv = document.createElement('div');
        labDiv.className = 'form-group';
        labDiv.innerHTML = `<label>Your Lab Slots:</label>`;
        
        facultyLabSlots.forEach(slot => {
            const slotDiv = document.createElement('div');
            slotDiv.style.marginBottom = '10px';
            slotDiv.innerHTML = `
                <strong>${slot}</strong> - ${facultyInfo.subjects.join(', ')} - Lab
            `;
            labDiv.appendChild(slotDiv);
        });
        
        labContainer.appendChild(labDiv);
    } else {
        labContainer.innerHTML = '<p>No lab slots assigned.</p>';
    }
}

function renderAvailabilityControls() {
    const controlsContainer = document.getElementById('availability-controls');
    controlsContainer.innerHTML = '';

    // Create toggles for all faculty slots
    const allFacultySlots = [...facultyInfo.slots];
    
    // Add linked slots
    facultyInfo.slots.forEach(slot => {
        if (facultySlotMapping[slot] && facultySlotMapping[slot].linked) {
            allFacultySlots.push(...facultySlotMapping[slot].linked);
        }
    });

    // Remove duplicates
    const uniqueSlots = [...new Set(allFacultySlots)];

    uniqueSlots.forEach(slot => {
        const slotInfo = facultySlotMapping[slot];
        if (!slotInfo) return;

        const toggleDiv = document.createElement('div');
        toggleDiv.className = 'availability-toggle';
        
        const label = document.createElement('label');
        label.textContent = `${slot} (${slotInfo.day} ${slotInfo.type})`;
        label.style.fontWeight = 'bold';
        
        const toggleSwitch = document.createElement('label');
        toggleSwitch.className = 'toggle-switch';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = facultyTimetableData[slot]?.available !== false; // Default to available
        checkbox.onchange = (e) => handleAvailabilityToggle(slot, e.target.checked);
        
        const slider = document.createElement('span');
        slider.className = 'slider';
        
        toggleSwitch.appendChild(checkbox);
        toggleSwitch.appendChild(slider);
        
        toggleDiv.appendChild(label);
        toggleDiv.appendChild(toggleSwitch);
        controlsContainer.appendChild(toggleDiv);
    });
}

function handleAvailabilityToggle(slot, isAvailable) {
    if (!facultyTimetableData[slot]) {
        facultyTimetableData[slot] = {
            subject: facultyInfo.subjects[0],
            faculty: facultyInfo.name,
            room: facultyInfo.room,
            available: isAvailable
        };
    } else {
        facultyTimetableData[slot].available = isAvailable;
    }
    
    // Auto-save to localStorage
    saveToLocalStorage();
    renderFacultyTimetable();
}

function renderFacultyTimetable(modal = false) {
    const tbody = modal ? document.getElementById('modal-faculty-timetable-body') : document.getElementById('faculty-timetable-body');
    tbody.innerHTML = '';
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    days.forEach((day, dayIndex) => {
        // Theory Row
        let trTheory = document.createElement('tr');
        trTheory.className = 'theory-row';
        trTheory.innerHTML = `<td>${day} (Theory)</td>`;

        const theoryCells = {};
        const currentDayTheorySlotKeys = Object.keys(facultySlotMapping)
            .filter(slotKey => facultySlotMapping[slotKey].day === day && facultySlotMapping[slotKey].type === 'Theory')
            .sort((a, b) => facultySlotMapping[a].timeIndex - facultySlotMapping[b].timeIndex);

        currentDayTheorySlotKeys.forEach(slotKey => {
            const slotInfo = facultySlotMapping[slotKey];
            const slotNameForDisplay = slotKey.includes("-1") ? slotKey.substring(0, slotKey.indexOf("-1")) : slotKey;
            let cellContent = '';

            const slotData = facultyTimetableData[slotKey];
            const isFacultySlot = facultyInfo.slots.includes(slotKey) || 
                                 facultyInfo.slots.some(s => facultySlotMapping[s]?.linked?.includes(slotKey));

            if (slotData && slotData.subject && slotData.subject !== 'None') {
                const availabilityClass = slotData.available === false ? 'unavailable-slot' : '';
                cellContent = `
                    <span style="font-size: 12px;">${slotNameForDisplay}</span><br>
                    <span style="font-size: 14px;">${slotData.subject}</span><br>
                    <span style="font-size: 12px;">${slotData.faculty}</span><br>
                    <span style="font-size: 16px; font-weight: bold;">${slotData.room}</span>
                `;
                theoryCells[slotInfo.timeIndex] = `<div class="${availabilityClass}">${cellContent}</div>`;
            } else if (isFacultySlot) {
                // Show faculty's assigned slot even if not explicitly set
                cellContent = `
                    <span style="font-size: 12px;">${slotNameForDisplay}</span><br>
                    <span style="font-size: 14px;">${facultyInfo.subjects[0]}</span><br>
                    <span style="font-size: 12px;">${facultyInfo.name}</span><br>
                    <span style="font-size: 16px; font-weight: bold;">${facultyInfo.room}</span>
                `;
                theoryCells[slotInfo.timeIndex] = cellContent;
            } else {
                theoryCells[slotInfo.timeIndex] = `<span style="font-size: 14px;">${slotNameForDisplay}</span>`;
            }
        });

        // Populate theory row cells
        let timePeriodIndex = 1;
        for (let visualCol = 1; visualCol <= 9; visualCol++) {
            if (visualCol === 5) {
                if (dayIndex === 0) {
                    trTheory.innerHTML += `<td rowspan="10">Lunch<br>12:35-1:15</td>`;
                }
            } else {
                trTheory.innerHTML += `<td>${theoryCells[timePeriodIndex] || '-'}</td>`;
                timePeriodIndex++;
            }
        }
        tbody.appendChild(trTheory);

        // Lab Row
        let trLab = document.createElement('tr');
        trLab.className = 'lab-row';
        trLab.innerHTML = `<td>${day} (Lab)</td>`;

        const currentDayLabSlotKeys = Object.keys(facultySlotMapping)
            .filter(slotKey => facultySlotMapping[slotKey].day === day && facultySlotMapping[slotKey].type === 'Lab');

        const labTimeIndicesForDisplay = [1, 3, 5, 7];

        labTimeIndicesForDisplay.forEach(labTimeIndex => {
            const labToDisplay = currentDayLabSlotKeys.find(key => facultySlotMapping[key].timeIndex === labTimeIndex);
            const colspanValue = 2;

            let cellContent = '';
            const slotData = facultyTimetableData[labToDisplay];
            const isFacultySlot = facultyInfo.slots.includes(labToDisplay);

            if (labToDisplay && slotData && slotData.subject && slotData.subject !== 'None') {
                const availabilityClass = slotData.available === false ? 'unavailable-slot' : '';
                cellContent = `
                    <span style="font-size: 12px;">${labToDisplay}</span><br>
                    <span style="font-size: 14px;">${slotData.subject}</span><br>
                    <span style="font-size: 12px;">${slotData.faculty}</span><br>
                    <span style="font-size: 16px; font-weight: bold;">Lab</span>
                `;
                cellContent = `<div class="${availabilityClass}">${cellContent}</div>`;
            } else if (isFacultySlot) {
                cellContent = `
                    <span style="font-size: 12px;">${labToDisplay}</span><br>
                    <span style="font-size: 14px;">${facultyInfo.subjects[0]}</span><br>
                    <span style="font-size: 12px;">${facultyInfo.name}</span><br>
                    <span style="font-size: 16px; font-weight: bold;">Lab</span>
                `;
            } else {
                cellContent = `<span style="font-size: 14px;">${labToDisplay || '-'}</span>`;
            }
            trLab.innerHTML += `<td colspan="${colspanValue}">${cellContent}</td>`;
        });
        tbody.appendChild(trLab);
    });
}

function saveToLocalStorage() {
    const draftKey = `faculty_draft_${facultyId}`;
    const draftData = {
        facultyId: facultyId,
        timetableData: facultyTimetableData,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem(draftKey, JSON.stringify(draftData));
}

function autoSaveDraft() {
    saveToLocalStorage();
    console.log('Auto-saved draft');
}

// Global functions for draft management
window.getFacultyDraftData = function() {
    return {
        facultyId: facultyId,
        timetableData: facultyTimetableData,
        timestamp: new Date().toISOString()
    };
};

window.loadFacultyDraft = function(draftData) {
    if (draftData.timetableData) {
        facultyTimetableData = draftData.timetableData;
        renderFacultyTimetable();
        renderAvailabilityControls();
        console.log('Draft loaded successfully');
    }
};

window.clearFacultySelections = function() {
    facultyTimetableData = {};
    renderFacultyTimetable();
    renderAvailabilityControls();
    saveToLocalStorage();
};

function submitFacultyTimetable() {
    const modal = document.getElementById('modal');
    const modalTitle = modal.querySelector('.modal-content h2');
    const facultyInfoDiv = document.getElementById('modal-faculty-info');
    const timetableInModal = document.getElementById('modal-faculty-timetable');

    if(modalTitle) modalTitle.textContent = 'Faculty Availability Summary';
    if(facultyInfoDiv) {
        facultyInfoDiv.innerHTML = `
            <p><strong>Name:</strong> ${facultyInfo.name}</p>
            <p><strong>Faculty ID:</strong> ${facultyId}</p>
            <p><strong>Department:</strong> ${facultyInfo.department}</p>
            <p><strong>Assigned Subjects:</strong> ${facultyInfo.subjects.join(', ')}</p>
        `;
    }
    if(timetableInModal) timetableInModal.style.display = '';

    renderFacultyTimetable(true);
    modal.style.display = 'flex';
    
    // Clear draft after successful submission
    const draftKey = `faculty_draft_${facultyId}`;
    localStorage.removeItem(draftKey);
}

// Initialize when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFaculty);
} else {
    initFaculty();
} 