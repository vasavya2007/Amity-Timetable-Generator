
        const slotMapping = { 'A1-1': { day: 'Monday', type: 'Theory', timeIndex: 1, start: 540, end: 590, linked: ['A1-2', 'A1-3'], period: 'Morning' }, 'F1-1': { day: 'Monday', type: 'Theory', timeIndex: 2, start: 595, end: 645, linked: ['F1-2'], period: 'Morning' }, 'D1-1': { day: 'Monday', type: 'Theory', timeIndex: 3, start: 650, end: 700, linked: ['D1-2'], period: 'Morning' }, 'TC1': { day: 'Monday', type: 'Theory', timeIndex: 4, start: 705, end: 755, linked: [], period: 'Morning' }, 'A2-1': { day: 'Monday', type: 'Theory', timeIndex: 5, start: 795, end: 845, linked: ['A2-2', 'A2-3'], period: 'Afternoon' }, 'F2-1': { day: 'Monday', type: 'Theory', timeIndex: 6, start: 850, end: 900, linked: ['F2-2'], period: 'Afternoon' }, 'D2-1': { day: 'Monday', type: 'Theory', timeIndex: 7, start: 905, end: 955, linked: ['D2-2'], period: 'Afternoon' }, 'TC2': { day: 'Monday', type: 'Theory', timeIndex: 8, start: 960, end: 1010, linked: [], period: 'Afternoon' }, 'L1+L2': { day: 'Monday', type: 'Lab', timeIndex: 1, colspan: 2, start: 540, end: 640, linked: [] }, 'L3+L4': { day: 'Monday', type: 'Lab', timeIndex: 3, colspan: 2, start: 650, end: 750, linked: [] }, 'L21+L22': { day: 'Monday', type: 'Lab', timeIndex: 5, colspan: 2, start: 795, end: 895, linked: [] }, 'L23+L24': { day: 'Monday', type: 'Lab', timeIndex: 7, colspan: 2, start: 905, end: 1005, linked: [] }, 'B1-1': { day: 'Tuesday', type: 'Theory', timeIndex: 1, start: 540, end: 590, linked: ['B1-2', 'B1-3'], period: 'Morning' }, 'G1-1': { day: 'Tuesday', type: 'Theory', timeIndex: 2, start: 595, end: 645, linked: ['G1-2'], period: 'Morning' }, 'E1-1': { day: 'Tuesday', type: 'Theory', timeIndex: 3, start: 650, end: 700, linked: ['E1-2'], period: 'Morning' }, 'TA1': { day: 'Tuesday', type: 'Theory', timeIndex: 4, start: 705, end: 755, linked: [], period: 'Morning' }, 'B2-1': { day: 'Tuesday', type: 'Theory', timeIndex: 5, start: 795, end: 845, linked: ['B2-2', 'B2-3'], period: 'Afternoon' }, 'G2-1': { day: 'Tuesday', type: 'Theory', timeIndex: 6, start: 850, end: 900, linked: ['G2-2'], period: 'Afternoon' }, 'E2-1': { day: 'Tuesday', type: 'Theory', timeIndex: 7, start: 905, end: 955, linked: ['E2-2'], period: 'Afternoon' }, 'TA2': { day: 'Tuesday', type: 'Theory', timeIndex: 8, start: 960, end: 1010, linked: [], period: 'Afternoon' }, 'L5+L6': { day: 'Tuesday', type: 'Lab', timeIndex: 1, colspan: 2, start: 540, end: 640, linked: [] }, 'L7+L8': { day: 'Tuesday', type: 'Lab', timeIndex: 3, colspan: 2, start: 650, end: 750, linked: [] }, 'L25+L26': { day: 'Tuesday', type: 'Lab', timeIndex: 5, colspan: 2, start: 795, end: 895, linked: [] }, 'L27+L28': { day: 'Tuesday', type: 'Lab', timeIndex: 7, colspan: 2, start: 905, end: 1005, linked: [] }, 'C1-1': { day: 'Wednesday', type: 'Theory', timeIndex: 1, start: 540, end: 590, linked: ['C1-2', 'C1-3'], period: 'Morning' }, 'A1-2': { day: 'Wednesday', type: 'Theory', timeIndex: 2, start: 595, end: 645, linked: [], period: 'Morning' }, 'F1-2': { day: 'Wednesday', type: 'Theory', timeIndex: 3, start: 650, end: 700, linked: [], period: 'Morning' }, 'B1-2': { day: 'Wednesday', type: 'Theory', timeIndex: 4, start: 705, end: 755, linked: [], period: 'Morning' }, 'C2-1': { day: 'Wednesday', type: 'Theory', timeIndex: 5, start: 795, end: 845, linked: ['C2-2', 'C2-3'], period: 'Afternoon' }, 'A2-2': { day: 'Wednesday', type: 'Theory', timeIndex: 6, start: 850, end: 900, linked: [], period: 'Afternoon' }, 'F2-2': { day: 'Wednesday', type: 'Theory', timeIndex: 7, start: 905, end: 955, linked: [], period: 'Afternoon' }, 'B2-2': { day: 'Wednesday', type: 'Theory', timeIndex: 8, start: 960, end: 1010, linked: [], period: 'Afternoon' }, 'L9+L10': { day: 'Wednesday', type: 'Lab', timeIndex: 1, colspan: 2, start: 540, end: 640, linked: [] }, 'L11+L12': { day: 'Wednesday', type: 'Lab', timeIndex: 3, colspan: 2, start: 650, end: 750, linked: [] }, 'L29+L30': { day: 'Wednesday', type: 'Lab', timeIndex: 5, colspan: 2, start: 795, end: 895, linked: [] }, 'L31+L32': { day: 'Wednesday', type: 'Lab', timeIndex: 7, colspan: 2, start: 905, end: 1005, linked: [] }, 'D1-2': { day: 'Thursday', type: 'Theory', timeIndex: 1, start: 540, end: 590, linked: [], period: 'Morning' }, 'B1-3': { day: 'Thursday', type: 'Theory', timeIndex: 2, start: 595, end: 645, linked: [], period: 'Morning' }, 'G1-2': { day: 'Thursday', type: 'Theory', timeIndex: 3, start: 650, end: 700, linked: [], period: 'Morning' }, 'C1-2': { day: 'Thursday', type: 'Theory', timeIndex: 4, start: 705, end: 755, linked: [], period: 'Morning' }, 'D2-2': { day: 'Thursday', type: 'Theory', timeIndex: 5, start: 795, end: 845, linked: [], period: 'Afternoon' }, 'B2-3': { day: 'Thursday', type: 'Theory', timeIndex: 6, start: 850, end: 900, linked: [], period: 'Afternoon' }, 'G2-2': { day: 'Thursday', type: 'Theory', timeIndex: 7, start: 905, end: 955, linked: [], period: 'Afternoon' }, 'C2-2': { day: 'Thursday', type: 'Theory', timeIndex: 8, start: 960, end: 1010, linked: [], period: 'Afternoon' }, 'L13+L14': { day: 'Thursday', type: 'Lab', timeIndex: 1, colspan: 2, start: 540, end: 640, linked: [] }, 'L15+L16': { day: 'Thursday', type: 'Lab', timeIndex: 3, colspan: 2, start: 650, end: 750, linked: [] }, 'L33+L34': { day: 'Thursday', type: 'Lab', timeIndex: 5, colspan: 2, start: 795, end: 895, linked: [] }, 'L35+L36': { day: 'Thursday', type: 'Lab', timeIndex: 7, colspan: 2, start: 905, end: 1005, linked: [] }, 'E1-2': { day: 'Friday', type: 'Theory', timeIndex: 1, start: 540, end: 590, linked: [], period: 'Morning' }, 'C1-3': { day: 'Friday', type: 'Theory', timeIndex: 2, start: 595, end: 645, linked: [], period: 'Morning' }, 'A1-3': { day: 'Friday', type: 'Theory', timeIndex: 3, start: 650, end: 700, linked: [], period: 'Morning' }, 'TB1': { day: 'Friday', type: 'Theory', timeIndex: 4, start: 705, end: 755, linked: [], period: 'Morning' }, 'E2-2': { day: 'Friday', type: 'Theory', timeIndex: 5, start: 795, end: 845, linked: [], period: 'Afternoon' }, 'C2-3': { day: 'Friday', type: 'Theory', timeIndex: 6, start: 850, end: 900, linked: [], period: 'Afternoon' }, 'A2-3': { day: 'Friday', type: 'Theory', timeIndex: 7, start: 905, end: 955, linked: [], period: 'Afternoon' }, 'TB2': { day: 'Friday', type: 'Theory', timeIndex: 8, start: 960, end: 1010, linked: [], period: 'Afternoon' }, 'L17+L18': { day: 'Friday', type: 'Lab', timeIndex: 1, colspan: 2, start: 540, end: 640, linked: [] }, 'L19+L20': { day: 'Friday', type: 'Lab', timeIndex: 3, colspan: 2, start: 650, end: 750, linked: [] }, 'L37+L38': { day: 'Friday', type: 'Lab', timeIndex: 5, colspan: 2, start: 795, end: 895, linked: [] }, 'L39+L40': { day: 'Friday', type: 'Lab', timeIndex: 7, colspan: 2, start: 905, end: 1005, linked: [] } };

        const subjectOptions = {
            'A1-1': [{ course: 'MAT1002', faculty: ['Dr. P. Senthil Kumar(Room 101-A)', 'Ms. Swetha(Room 101-B)'] }],
            'B1-1': [{ course: 'ECE1001', faculty: ['Mrs. Anughna N(Room 105)'] }],
            'C1-1': [{ course: 'MAT1002', faculty: ['Dr. Ravi.J(Room 109)'] }],
            'D1-1': [{ course: 'BIT1002', faculty: ['Mr.MD.Umar(Room 103)'] }],
            'E1-1': [{ course: 'PHY1001', faculty: ['Dr.V.V.Jaiswal(Room 107)'] }],
            'F1-1': [{ course: 'CHE1001', faculty: ['Smt.Shruthi.K.S(Room 102)'] }],
            'G1-1': [{ course: 'CSE1017', faculty: ['Dr. Punam kumar(Room 106)'] }],
            'A2-1': [{ course: 'KAN1004', faculty: ['Dr.Ashok Babu(Room 201)'] }],
            'B2-1': [{ course: 'MAT1002', faculty: ['Ms.Thunga S(Room 205)'] }],
            'C2-1': [{ course: 'ECE1001', faculty: ['Mrs. Bugide Sreevidya(Room 209)'] }],
            'D2-1': [{ course: 'CSE1017', faculty: ['Dr. Rajat(Room 203)'] }],
            'E2-1': [{ course: 'BIT1002', faculty: ['Dr.A Sanjeeva Kumar(Room 207)'] }],
            'F2-1': [{ course: 'CSE2002', faculty: ['Dr.madhu bhan(Room 202)'] }],

            // Lab Slots with embedded room numbers
            'L1+L2': [{ course: 'PSY1002', faculty: ['Ms.Varshini S(Lab A)'] }],
            'L3+L4': [{ course: 'ECE1001', faculty: ['Mrs. Anughna N(Lab B)'] }],
            'L5+L6': [{ course: 'CSE2015', faculty: ['Dr.rajat(Lab C)'] }],
            'L7+L8': [{ course: 'PHY1001', faculty: ['Dr.Lokesha HS(Lab D)'] }],
            'L9+L10': [{ course: 'PSY1001', faculty: ['Ms. Shweta Singh(Lab E)'] }],
            'L11+L12': [{ course: 'CSE1017', faculty: ['Mr.mohan(Lab F)'] }],
            'L13+L14': [{ course: 'ENG1003', faculty: ['Mr.ramya M H(Lab G)'] }],
            'L15+L16': [{ course: 'PHY1001', faculty: ['Dr.A.Balaksrishna(Lab H)'] }],
            'L17+L18': [{ course: 'PSY1002', faculty: ['Ms.Varshini S(Lab I)'] }],
            'L19+L20': [{ course: 'CSE1017', faculty: ['Dr.senthil kumar janagan(Lab J)'] }],
            'L21+L22': [{ course: 'ECE1001', faculty: ['Mrs. Bugide Sreevidya(Lab K)'] }],
            'L23+L24': [{ course: 'PHY1001', faculty: ['Dr.Nagabhushana KR(Lab L)'] }],
            'L25+L26': [{ course: 'CSE2002', faculty: ['Dr.Arshpreet Kaur(Lab M)'] }],
            'L27+L28': [{ course: 'CSE1017', faculty: ['Dr.Rajesh Kumar(Lab N)'] }],
            'L29+L30': [{ course: 'PSY1001', faculty: ['Ms.Varshini S(Lab O)'] }],
            'L31+L32': [{ course: 'ECE1001', faculty: ['Mrs. Anughna N(Lab P)'] }],
            'L33+L34': [{ course: 'CSE2002', faculty: ['Dr.madhu bhan(Lab Q)'] }],
            'L35+L36': [{ course: 'ENG1003', faculty: ['Mr.Abirlal Mukherjee(Lab R)'] }],
            'L37+L38': [{ course: 'CSE1017', faculty: ['Dr. Punam kumar(Lab S)'] }],
            'L39+L40': [{ course: 'PHY1001', faculty: ['Dr.Lokesha HS(Lab T)'] }],

            // Linked theory slots (these are not directly selectable from dropdowns, but are linked to primary slots)
            'A1-2': [{ course: 'MAT1002', faculty: ['Dr. P. Senthil Kumar', 'Ms. Swetha'] }], // Room inherited from A1-1
            'F1-2': [{ course: 'CHE1001', faculty: ['Smt.Shruthi.K.S'] }], // Room inherited from F1-1
            'D1-2': [{ course: 'BIT1002', faculty: ['Mr.MD.Umar'] }], // Room inherited from D1-1
            'A2-2': [{ course: 'KAN1004', faculty: ['Dr.Ashok Babu'] }], // Room inherited from A2-1
            'F2-2': [{ course: 'CSE2002', faculty: ['Dr.madhu Bhan'] }], // Room inherited from F2-1
            'D2-2': [{ course: 'CSE1017', faculty: ['Dr. Rajat'] }], // Room inherited from D2-1
            'B1-2': [{ course: 'ECE1001', faculty: ['Mrs. Anughna N'] }], // Room inherited from B1-1
            'G1-2': [{ course: 'CSE1017', faculty: ['Dr. Punam kumar'] }], // Room inherited from G1-1
            'E1-2': [{ course: 'PHY1001', faculty: ['Dr.V.V.Jaiswal'] }], // Room inherited from E1-1
            'B2-2': [{ course: 'MAT1002', faculty: ['Ms.Thunga S'] }], // Room inherited from B2-1
            'G2-2': [{ course: 'CSE1017', faculty: ['Mr.mohan'] }], // Room inherited from G2-1
            'E2-2': [{ course: 'BIT1002', faculty: ['Dr.A Sanjeeva Kumar'] }], // Room inherited from E2-1
            'C1-2': [{ course: 'MAT1002', faculty: ['Dr. Ravi.J'] }], // Room inherited from C1-1
            'A1-3': [{ course: 'MAT1002', faculty: ['Dr. P. Senthil Kumar', 'Ms. Swetha'] }], // Room inherited from A1-1
            'B1-3': [{ course: 'ECE1001', faculty: ['Mrs. Anughna N'] }], // Room inherited from B1-1
            'C1-3': [{ course: 'MAT1002', faculty: ['Dr. Ravi.J'] }], // Room inherited from C1-1
            'C2-2': [{ course: 'ECE1001', faculty: ['Mrs. Bugide Sreevidya'] }], // Room inherited from C2-1
            'A2-3': [{ course: 'KAN1004', faculty: ['Dr.Ashok Babu'] }], // Room inherited from A2-1
            'B2-3': [{ course: 'MAT1002', faculty: ['Ms.Thunga S'] }], // Room inherited from B2-1
            'C2-3': [{ course: 'ECE1001', faculty: ['Mrs. Bugide Sreevidya'] }] // Room inherited from C2-1
        };

        const roomAssignments = {
            'A1-1': {
                'MAT1002 - Dr. P. Senthil Kumar': 'Room 101-A',
                'MAT1002 - Ms. Swetha': 'Room 101-B'
            },
            'F1-1': {
                'CHE1001 - Smt.Shruthi.K.S': 'Room 102'
            },
            'D1-1': {
                'BIT1002 - Mr.MD.Umar': 'Room 103'
            },
            'TC1': {
                'N/A': '' // Room removed as requested
            },
            'A2-1': {
                'KAN1004 - Dr.Ashok Babu': 'Room 201'
            },
            'F2-1': {
                'CSE2002 - Dr.madhu bhan': 'Room 202'
            },
            'D2-1': {
                'CSE1017 - Dr. Rajat': 'Room 203'
            },
            'TC2': {
                'N/A': '' // Room removed as requested
            },
            'B1-1': {
                'ECE1001 - Mrs. Anughna N': 'Room 105'
            },
            'G1-1': {
                'CSE1017 - Dr. Punam kumar': 'Room 106'
            },
            'E1-1': {
                'PHY1001 - Dr.V.V.Jaiswal': 'Room 107'
            },
            'TA1': {
                'N/A': '' // Room removed as requested
            },
            'B2-1': {
                'MAT1002 - Ms.Thunga S': 'Room 205'
            },
            'G2-1': {
                'CSE1017 - Mr.mohan': 'Room 206'
            },
            'E2-1': {
                'BIT1002 - Dr.A Sanjeeva Kumar': 'Room 207'
            },
            'TA2': {
                'N/A': '' // Room removed as requested
            },
            'C1-1': {
                'MAT1002 - Dr. Ravi.J': 'Room 109'
            },
            'A1-2': {
                'MAT1002 - Dr. P. Senthil Kumar': 'Room 110-A', // Linked to A1-1, but can be overridden
                'MAT1002 - Ms. Swetha': 'Room 110-B' // Linked to A1-1, but can be overridden
            },
            'F1-2': {
                'CHE1001 - Smt.Shruthi.K.S': 'Room 111' // Linked to F1-1
            },
            'B1-2': {
                'ECE1001 - Mrs. Anughna N': 'Room 112' // Linked to B1-1
            },
            'C2-1': {
                'ECE1001 - Mrs. Bugide Sreevidya': 'Room 209'
            },
            'A2-2': {
                'KAN1004 - Dr.Ashok Babu': 'Room 210' // Linked to A2-1
            },
            'F2-2': {
                'CSE2002 - Dr.madhu Bhan': 'Room 211' // Linked to F2-1
            },
            'B2-2': {
                'MAT1002 - Ms.Thunga S': 'Room 212' // Linked to B2-1
            },
            'D1-2': {
                'BIT1002 - Mr.MD.Umar': 'Room 113' // Linked to D1-1
            },
            'B1-3': {
                'ECE1001 - Mrs. Anughna N': 'Room 114' // Linked to B1-1
            },
            'G1-2': {
                'CSE1017 - Dr. Punam kumar': 'Room 115' // Linked to G1-1
            },
            'C1-2': {
                'MAT1002 - Dr. Ravi.J': 'Room 116' // Linked to C1-1
            },
            'D2-2': {
                'CSE1017 - Dr. Rajat': 'Room 213' // Linked to D2-1
            },
            'B2-3': {
                'MAT1002 - Ms.Thunga S': 'Room 214' // Linked to B2-1
            },
            'G2-2': {
                'CSE1017 - Mr.mohan': 'Room 215' // Linked to G1-2
            },
            'C2-2': {
                'ECE1001 - Mrs. Bugide Sreevidya': 'Room 216' // Linked to C2-1
            },
            'E1-2': {
                'PHY1001 - Dr.V.V.Jaiswal': 'Room 117' // Linked to E1-1
            },
            'C1-3': {
                'MAT1002 - Dr. Ravi.J': 'Room 118' // Linked to C1-1
            },
            'A1-3': {
                'MAT1002 - Dr. P. Senthil Kumar': 'Room 119-A', // Linked to A1-1
                'MAT1002 - Ms. Swetha': 'Room 119-B' // Linked to A1-1
            },
            'TB1': {
                'N/A': '' // Room removed as requested
            },
            'E2-2': {
                'BIT1002 - Dr.A Sanjeeva Kumar': 'Room 217' // Linked to E2-1
            },
            'C2-3': {
                'ECE1001 - Mrs. Bugide Sreevidya': 'Room 218' // Linked to C2-1
            },
            'A2-3': {
                'KAN1004 - Dr.Ashok Babu': 'Room 219' // Linked to A2-1
            },
            'TB2': {
                'N/A': '' // Room removed as requested
            },
            // Labs - Assuming one faculty per lab slot
            'L1+L2': { 'PSY1002 - Ms.Varshini S': 'Lab A' },
            'L3+L4': { 'ECE1001 - Mrs. Anughna N': 'Lab B' },
            'L5+L6': { 'CSE2015 - Dr.rajat': 'Lab C' },
            'L7+L8': { 'PHY1001 - Dr.Lokesha HS': 'Lab D' },
            'L9+L10': { 'PSY1001 - Ms. Shweta Singh': 'Lab E' },
            'L11+L12': { 'CSE1017 - Mr.mohan': 'Lab F' },
            'L13+L14': { 'ENG1003 - Mr.ramya M H': 'Lab G' },
            'L15+L16': { 'PHY1001 - Dr.A.Balaksrishna': 'Lab H' },
            'L17+L18': { 'PSY1002 - Ms.Varshini S': 'Lab I' },
            'L19+L20': { 'CSE1017 - Dr.senthil kumar janagan': 'Lab J' },
            'L21+L22': { 'ECE1001 - Mrs. Bugide Sreevidya': 'Lab K' },
            'L23+L24': { 'PHY1001 - Dr.Nagabhushana KR': 'Lab L' },
            'L25+L26': { 'CSE2002 - Dr.Arshpreet Kaur': 'Lab M' },
            'L27+L28': { 'CSE1017 - Dr.Rajesh Kumar': 'Lab N' },
            'L29+L30': { 'PSY1001 - Ms.Varshini S': 'Lab O' },
            'L31+L32': { 'ECE1001 - Mrs. Anughna N': 'Lab P' },
            'L33+L34': { 'CSE2002 - Dr.madhu bhan': 'Lab Q' },
            'L35+L36': { 'ENG1003 - Mr.Abirlal Mukherjee': 'Lab R' },
            'L37+L38': { 'CSE1017 - Dr. Punam kumar': 'Lab S' },
            'L39+L40': { 'PHY1001 - Dr.Lokesha HS': 'Lab T' }
        };

        // Global variables
        let timetableData = {}; // Stores { subject: '', faculty: '', room: '' }
        let isDragAndDropEnabled = false;
        let draggedElement = null;
        let dragPreview = null;
        let dragData = null;

        // Global variable to store the last selected theory primary slot (e.g., 'A1-1')
        let lastSelectedTheoryPrimarySlot = null;
        // Global variable to store the last selected lab slot (e.g., 'L1+L2')
        let lastSelectedLabSlot = null;

        // Auto-save timer
        let autoSaveTimer = null;

        function init() {
            renderSubjectSelectors();
            renderTimetable(); // Initial render to show empty slots
            
            // Auto-save every 30 seconds
            setInterval(autoSaveDraft, 30000);
        }

        function renderSubjectSelectors() {
            const theoryContainer = document.getElementById('theory-slots');
            const labContainer = document.getElementById('lab-slots');

            theoryContainer.innerHTML = '';
            labContainer.innerHTML = '';

            // THEORY DROPDOWNS (NESTED)
            const theoryMainDiv = document.createElement('div');
            theoryMainDiv.className = 'form-group';
            theoryMainDiv.innerHTML = `<label>Theory Slots:</label>`;

            const theoryPeriodSelect = document.createElement('select');
            theoryPeriodSelect.id = 'theory-period-select';
            theoryPeriodSelect.innerHTML = '<option value="">Select Period (Theory)</option>';
            theoryPeriodSelect.innerHTML += '<option value="Morning">Morning</option>';
            theoryPeriodSelect.innerHTML += '<option value="Afternoon">Afternoon</option>';
            theoryMainDiv.appendChild(theoryPeriodSelect);

            const theorySlotSelect = document.createElement('select');
            theorySlotSelect.id = 'theory-slot-select';
            theorySlotSelect.innerHTML = '<option value="">Select Slot</option>';
            theorySlotSelect.disabled = true; // Disable until a period is selected
            theoryMainDiv.appendChild(theorySlotSelect);

            const theoryCourseFacultySelect = document.createElement('select');
            theoryCourseFacultySelect.id = 'theory-course-faculty-select';
            theoryCourseFacultySelect.innerHTML = '<option value="">Select Course & Faculty</option>';
            theoryCourseFacultySelect.disabled = true; // Disable until a slot is selected
            theoryCourseFacultySelect.setAttribute('data-type', 'theory');
            theoryMainDiv.appendChild(theoryCourseFacultySelect);

            theoryContainer.appendChild(theoryMainDiv);

            // Populate theorySlotSelect based on period selection
            theoryPeriodSelect.onchange = () => {
                const selectedPeriod = theoryPeriodSelect.value;
                theorySlotSelect.innerHTML = '<option value="">Select Slot</option>';
                theoryCourseFacultySelect.innerHTML = '<option value="">Select Course & Faculty</option>';
                theoryCourseFacultySelect.disabled = true; // Disable course/faculty until new slot is chosen

                if (selectedPeriod) {
                    theorySlotSelect.disabled = false;
                    const uniqueTheoryBaseSlots = new Set();
                    Object.keys(slotMapping).forEach(slotKey => {
                        const slotInfo = slotMapping[slotKey];
                        if (slotInfo.type === 'Theory' && slotInfo.period === selectedPeriod) {
                            // Only add primary slots (e.g., A1-1, B1-1, TC1) to the dropdown
                            // Exclude linked slots like A1-2, A1-3 as they are not directly selectable
                            const isPrimarySelectable = !slotKey.includes('-2') && !slotKey.includes('-3');
                            if (isPrimarySelectable) {
                                // Extract base slot (e.g., A1 from A1-1) or keep full TC1, TA1 etc.
                                const baseSlot = slotKey.includes('-') ? slotKey.substring(0, slotKey.indexOf('-')) : slotKey;
                                uniqueTheoryBaseSlots.add(baseSlot);
                            }
                        }
                    });

                    Array.from(uniqueTheoryBaseSlots).sort().forEach(baseSlot => {
                        const option = document.createElement('option');
                        option.value = baseSlot;
                        option.text = baseSlot;
                        theorySlotSelect.appendChild(option);
                    });
                } else {
                    theorySlotSelect.disabled = true;
                }
                // Clear last selected theory slot when period changes
                lastSelectedTheoryPrimarySlot = null;
            };

            // Populate theoryCourseFacultySelect based on slot selection
            theorySlotSelect.onchange = () => {
                const selectedBaseSlot = theorySlotSelect.value;
                theoryCourseFacultySelect.innerHTML = '<option value="">Select Course & Faculty</option>';
                if (selectedBaseSlot) {
                    theoryCourseFacultySelect.disabled = false;
                    const primarySlotKey = `${selectedBaseSlot}-1`; // Assuming -1 is always the primary for theory
                    if (subjectOptions[primarySlotKey]) { // Check if this primary slot exists in subjectOptions
                        lastSelectedTheoryPrimarySlot = primarySlotKey; // Store the primary slot key
                        const optionsForThisSlot = subjectOptions[primarySlotKey];
                        if (optionsForThisSlot) {
                            optionsForThisSlot.forEach(({ course, faculty }) => {
                                faculty.forEach(f => {
                                    const option = document.createElement('option');
                                    // Value includes the primary slot key and the combined course/faculty
                                    option.value = `${primarySlotKey}|${course} - ${f}`;
                                    option.text = `${course} - ${f}`;
                                    theoryCourseFacultySelect.appendChild(option);
                                });
                            });
                        }
                    } else if (subjectOptions[selectedBaseSlot]) { // Handle TC1, TA1, TB1 directly
                        lastSelectedTheoryPrimarySlot = selectedBaseSlot;
                        const optionsForThisSlot = subjectOptions[selectedBaseSlot];
                        if (optionsForThisSlot) {
                            optionsForThisSlot.forEach(({ course, faculty }) => {
                                faculty.forEach(f => {
                                    const option = document.createElement('option');
                                    option.value = `${selectedBaseSlot}|${course} - ${f}`;
                                    option.text = `${course} - ${f}`;
                                    theoryCourseFacultySelect.appendChild(option);
                                });
                            });
                        }
                    } else {
                        // Fallback for generic slots if no specific subject options, like TC1/TC2/TA1/TA2/TB1/TB2
                        // where 'N/A' is the default
                        lastSelectedTheoryPrimarySlot = selectedBaseSlot;
                        const option = document.createElement('option');
                        option.value = `${selectedBaseSlot}|N/A - N/A`;
                        option.text = `N/A - N/A`;
                        theoryCourseFacultySelect.appendChild(option);
                    }
                } else {
                    theoryCourseFacultySelect.disabled = true;
                    lastSelectedTheoryPrimarySlot = null;
                }
            };

            // Handle final selection from theoryCourseFacultySelect
            theoryCourseFacultySelect.onchange = (event) => {
                const selectedValue = event.target.value;
                if (selectedValue) {
                    const [slotKey, combinedSubjectFacultyString] = selectedValue.split('|');
                    handleSlotChange(slotKey, combinedSubjectFacultyString);
                }
                // Reset all theory dropdowns to default after selection to allow new selection
                resetTheoryDropdowns();
            };

            // LAB DROPDOWN
            const labDiv = document.createElement('div');
            labDiv.className = 'form-group';
            labDiv.innerHTML = `<label>Lab Slots:</label>`;
            const labSelect = document.createElement('select');
            labSelect.id = 'slot-lab';
            labSelect.innerHTML = '<option value="">Select a Lab Slot</option>';
            labSelect.setAttribute('data-type', 'lab');

            const allLabSlots = Object.keys(slotMapping).filter(key => slotMapping[key].type === 'Lab');

            allLabSlots.forEach(slotKey => {
                const optionsForThisSlot = subjectOptions[slotKey];
                if (optionsForThisSlot) {
                    optionsForThisSlot.forEach(({ course, faculty }) => {
                        faculty.forEach(f => {
                            const option = document.createElement('option');
                            option.value = `${slotKey}|${course} - ${f}`;
                            option.text = `${slotKey}: ${course} - ${f}`;
                            labSelect.appendChild(option);
                        });
                    });
                }
            });

            labSelect.onchange = (event) => {
                const selectedValue = event.target.value;
                if (selectedValue) {
                    const [slotKey, combinedSubjectFacultyString] = selectedValue.split('|');
                    lastSelectedLabSlot = slotKey; // Store the selected lab slot
                    handleSlotChange(slotKey, combinedSubjectFacultyString);
                }
                // Reset lab dropdown to default after selection
                resetLabDropdown();
            };
            labDiv.appendChild(labSelect);
            labContainer.appendChild(labDiv);
        }

        // Helper function to reset theory dropdowns
        function resetTheoryDropdowns() {
            document.getElementById('theory-period-select').value = '';
            document.getElementById('theory-slot-select').innerHTML = '<option value="">Select Slot</option>';
            document.getElementById('theory-slot-select').disabled = true;
            document.getElementById('theory-course-faculty-select').innerHTML = '<option value="">Select Course & Faculty</option>';
            document.getElementById('theory-course-faculty-select').disabled = true;
            lastSelectedTheoryPrimarySlot = null; // Clear the last selected primary slot
        }

        // Helper function to reset lab dropdown
        function resetLabDropdown() {
            const labSelect = document.getElementById('slot-lab');
            if (labSelect) labSelect.value = '';
            lastSelectedLabSlot = null; // Clear the last selected lab slot
        }

        function handleSlotChange(slotKeyToUpdate, combinedSubjectFacultyString) {
            let subject, facultyDisplayName, roomNumber;

            // Regex to extract subject, faculty name, and room number from "Subject - FacultyName(RoomNumber)"
            const regexWithRoom = /(.*) - (.*)\((.*)\)/;
            const match = combinedSubjectFacultyString.match(regexWithRoom);

            if (match && match.length === 4) {
                subject = match[1].trim();
                facultyDisplayName = match[2].trim();
                roomNumber = match[3].trim();
            } else {
                // If room number is not embedded (e.g., for "N/A - N/A" or if it was an old format)
                const parts = combinedSubjectFacultyString.split(' - ');
                subject = parts[0] ? parts[0].trim() : 'N/A Subject';
                facultyDisplayName = parts[1] ? parts[1].trim() : 'N/A Faculty';
                // Fallback to roomAssignments for TC/TA/TB or if room wasn't explicitly mentioned
                roomNumber = roomAssignments[slotKeyToUpdate] && roomAssignments[slotKeyToUpdate]['N/A'] ? roomAssignments[slotKeyToUpdate]['N/A'] : 'N/A Room';

                if (roomNumber === 'N/A Room' && roomAssignments[slotKeyToUpdate] && roomAssignments[slotKeyToUpdate][combinedSubjectFacultyString]) {
                    roomNumber = roomAssignments[slotKeyToUpdate][combinedSubjectFacultyString];
                }
            }


            let primarySlotKey = slotKeyToUpdate;
            // For theory slots like A1-1, B1-1 etc.
            if (slotMapping[slotKeyToUpdate] && slotMapping[slotKeyToUpdate].type === 'Theory' && slotKeyToUpdate.endsWith('-1')) {
                primarySlotKey = slotKeyToUpdate;
            } else if (slotMapping[slotKeyToUpdate] && (slotKeyToUpdate.startsWith('TC') || slotKeyToUpdate.startsWith('TA') || slotKeyToUpdate.startsWith('TB'))) {
                // For generic slots like TC1, TA1 etc.
                primarySlotKey = slotKeyToUpdate;
            }


            const linkedSubSlots = (slotMapping[primarySlotKey] && slotMapping[primarySlotKey].linked) ? slotMapping[primarySlotKey].linked : [];

            // Add the primary slot key itself to the list of affected slots
            const allAffectedSlotKeys = [primarySlotKey, ...linkedSubSlots];

            allAffectedSlotKeys.forEach(keyInMap => {
                if (subject !== 'None') {
                    timetableData[keyInMap] = {
                        subject: subject,
                        faculty: facultyDisplayName,
                        room: roomNumber
                    };
                } else {
                    timetableData[keyInMap] = { subject: 'None', faculty: '', room: '' };
                }
            });

            // Auto-save to localStorage
            saveToLocalStorage();
            validateSelections();
        }

        function doTimeSlotsOverlap(slot1, slot2) {
            const slot1Info = slotMapping[slot1];
            const slot2Info = slot2; // slot2 here is an object directly
            if (!slot1Info || !slot2) return false;
            if (slot1Info.day !== slot2.day) return false;
            return slot1Info.start < slot2.end && slot2.start < slot1Info.end;
        }


        function displayErrorModal(errors) {
            const modal = document.getElementById('modal');
            const modalTitle = modal.querySelector('.modal-content h2');
            const studentInfoDiv = document.getElementById('modal-student-info');
            const timetableInModal = document.getElementById('modal-timetable');

            if (modalTitle) {
                modalTitle.textContent = 'Validation Errors';
            }
            if (studentInfoDiv) {
                studentInfoDiv.innerHTML = errors.map(e => `<p style="color: red; text-align: left;">- ${e}</p>`).join('');
            }
            if (timetableInModal) {
                timetableInModal.style.display = 'none';
            }

            modal.style.display = 'flex';
        }

        function validateSelections() {
            const errors = [];
            const slotsToClear = new Set(); // Use a Set to store unique slots that need to be cleared

            const selectedSlots = Object.keys(timetableData);

            for (let i = 0; i < selectedSlots.length; i++) {
                const slotA = selectedSlots[i];
                const slotAInfo = slotMapping[slotA];
                if (!slotAInfo || !timetableData[slotA] || timetableData[slotA].subject === 'None') continue; // Skip if no subject

                for (let j = i + 1; j < selectedSlots.length; j++) {
                    const slotB = selectedSlots[j];
                    const slotBInfo = slotMapping[slotB];
                    if (!slotBInfo || !timetableData[slotB] || timetableData[slotB].subject === 'None') continue; // Skip if no subject

                    if (slotAInfo.day === slotBInfo.day) {
                        if (doTimeSlotsOverlap(slotA, slotB)) {
                            // Check if the selected subjects are actually different
                            if (timetableData[slotA].subject !== timetableData[slotB].subject || timetableData[slotA].faculty !== timetableData[slotB].faculty) {
                                errors.push(`Time clash on ${slotAInfo.day}: ${slotA} (${timetableData[slotA].subject}) conflicts with ${slotB} (${timetableData[B].subject})`);

                                // Determine which of the two conflicting slots was the "new" one being added
                                const affectedByLastTheory = lastSelectedTheoryPrimarySlot ? [lastSelectedTheoryPrimarySlot, ...(slotMapping[lastSelectedTheoryPrimarySlot]?.linked || [])] : [];

                                const isSlotAFromLastSelection = affectedByLastTheory.includes(slotA) || (slotA === lastSelectedLabSlot);
                                const isSlotBFromLastSelection = affectedByLastTheory.includes(slotB) || (slotB === lastSelectedLabSlot);

                                if (isSlotAFromLastSelection) {
                                    slotsToClear.add(slotA);
                                } else if (isSlotBFromLastSelection) {
                                    slotsToClear.add(slotB);
                                } else {
                                    if (lastSelectedTheoryPrimarySlot) {
                                        slotsToClear.add(lastSelectedTheoryPrimarySlot);
                                        (slotMapping[lastSelectedTheoryPrimarySlot]?.linked || []).forEach(linkedSlot => slotsToClear.add(linkedSlot));
                                    }
                                    if (lastSelectedLabSlot) {
                                        slotsToClear.add(lastSelectedLabSlot);
                                    }
                                }
                            }
                        }
                    }
                }
            }

            if (errors.length > 0) {
                displayErrorModal(errors);
                document.getElementById('errors').innerHTML = errors.map(e => `<p>${e}</p>`).join('');

                slotsToClear.forEach(slotToReset => {
                    timetableData[slotToReset] = { subject: 'None', faculty: '', room: '' };
                    // If a primary theory slot is cleared, clear its linked slots too
                    if (slotMapping[slotToReset]?.type === 'Theory' && slotMapping[slotToReset]?.linked) {
                        slotMapping[slotToReset].linked.forEach(linkedSlot => {
                            timetableData[linkedSlot] = { subject: 'None', faculty: '', room: '' };
                        });
                    }
                });

                // Reset dropdowns if the conflicting slot was the one just selected
                if (lastSelectedTheoryPrimarySlot && (slotsToClear.has(lastSelectedTheoryPrimarySlot) || slotMapping[lastSelectedTheoryPrimarySlot]?.linked.some(linkedSlot => slotsToClear.has(linkedSlot)))) {
                    resetTheoryDropdowns();
                } else if (lastSelectedLabSlot && slotsToClear.has(lastSelectedLabSlot)) {
                    resetLabDropdown();
                }

                renderTimetable();
                lastSelectedTheoryPrimarySlot = null; // Clear after processing
                lastSelectedLabSlot = null; // Clear after processing
                return true;
            }

            document.getElementById('errors').innerHTML = '';

            lastSelectedTheoryPrimarySlot = null; // Clear after successful validation
            lastSelectedLabSlot = null; // Clear after successful validation

            renderTimetable();
            return false;
        }

        // This function is now simplified and primarily used for non-selected/generic slots
        function getRoomNumber(slotKey, combinedSubjectFaculty) {
            // If room is directly available in timetableData for this slot, use it (should be the case for selected)
            if (timetableData[slotKey] && timetableData[slotKey].room !== undefined && timetableData[slotKey].room !== null && timetableData[slotKey].room !== '') {
                return timetableData[slotKey].room;
            }
            // Fallback for generic slots like TC1, TC2, TA1, TA2, TB1, TB2
            if (roomAssignments[slotKey] && roomAssignments[slotKey]['N/A'] !== undefined && roomAssignments[slotKey]['N/A'] !== null && roomAssignments[slotKey]['N/A'] !== '') {
                return roomAssignments[slotKey]['N/A'];
            }
            // Further fallback if for some reason, the exact combinedSubjectFaculty isn't in roomAssignments, but a room exists
            if (roomAssignments[slotKey] && roomAssignments[slotKey][combinedSubjectFaculty] !== undefined && roomAssignments[slotKey][combinedSubjectFaculty] !== null && roomAssignments[slotKey][combinedSubjectFaculty] !== '') {
                 return roomAssignments[slotKey][combinedSubjectFaculty];
            }
            return ''; // Default to empty string if no specific or general room found
        }


        function renderTimetable(modal = false) {
            const tbody = modal ? document.getElementById('modal-timetable-body') : document.getElementById('timetable-body');
            tbody.innerHTML = '';
            const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

            days.forEach((day, dayIndex) => {
                // Theory Row
                let trTheory = document.createElement('tr');
                trTheory.className = 'theory-row';
                trTheory.innerHTML = `<td>${day} (Theory)</td>`;

                const theoryCells = {};
                const currentDayTheorySlotKeys = Object.keys(slotMapping)
                    .filter(slotKey => slotMapping[slotKey].day === day && slotMapping[slotKey].type === 'Theory')
                    .sort((a, b) => slotMapping[a].timeIndex - slotMapping[b].timeIndex);

                currentDayTheorySlotKeys.forEach(slotKey => {
                    const slotInfo = slotMapping[slotKey];
                    const slotNameForDisplay = slotKey.includes("-1") ? slotKey.substring(0, slotKey.indexOf("-1")) : slotKey;
                    let cellContent = '';

                    const slotData = timetableData[slotKey];

                    if (slotData && slotData.subject && slotData.subject !== 'None') {
                        cellContent = `
                            <span style="font-size: 12px;">${slotNameForDisplay}</span><br>
                            <span style="font-size: 14px;">${slotData.subject}</span><br>
                            <span style="font-size: 12px;">${slotData.faculty}</span><br>
                            <span style="font-size: 16px; font-weight: bold;">${slotData.room}</span>
                        `;
                    } else {
                        const defaultRoom = getRoomNumber(slotKey, 'N/A');
                        cellContent = `<span style="font-size: 14px;">${slotNameForDisplay}</span><br><span style="font-size: 12px;">${defaultRoom}</span>`;
                    }
                    theoryCells[slotInfo.timeIndex] = cellContent;
                });

                let timePeriodIndex = 1;
                for (let visualCol = 1; visualCol <= 9; visualCol++) {
                    if (visualCol === 5) {
                        if (dayIndex === 0) {
                            trTheory.innerHTML += `<td rowspan="10">Lunch<br>12:35-1:15</td>`;
                        }
                    } else {
                        const slotKey = currentDayTheorySlotKeys[timePeriodIndex - 1];
                        const dataSlotAttr = slotKey ? `data-slot="${slotKey}"` : '';
                        trTheory.innerHTML += `<td ${dataSlotAttr}>${theoryCells[timePeriodIndex] || '-'}</td>`;
                        timePeriodIndex++;
                    }
                }
                tbody.appendChild(trTheory);

                // Lab Row
                let trLab = document.createElement('tr');
                trLab.className = 'lab-row';
                trLab.innerHTML = `<td>${day} (Lab)</td>`;

                const currentDayLabSlotKeys = Object.keys(slotMapping)
                    .filter(slotKey => slotMapping[slotKey].day === day && slotMapping[slotKey].type === 'Lab');

                const labTimeIndicesForDisplay = [1, 3, 5, 7];

                labTimeIndicesForDisplay.forEach(labTimeIndex => {
                    const labToDisplay = currentDayLabSlotKeys.find(key => slotMapping[key].timeIndex === labTimeIndex);
                    const colspanValue = 2;

                    let cellContent = '';
                    const slotData = timetableData[labToDisplay];

                    if (labToDisplay && slotData && slotData.subject && slotData.subject !== 'None') {
                        cellContent = `
                            <span style="font-size: 12px;">${labToDisplay}</span><br>
                            <span style="font-size: 14px;">${slotData.subject}</span><br>
                            <span style="font-size: 12px;">${slotData.faculty}</span><br>
                            <span style="font-size: 16px; font-weight: bold;">${slotData.room}</span>
                        `;
                    } else {
                        const defaultRoom = getRoomNumber(labToDisplay, 'N/A');
                        cellContent = `<span style="font-size: 14px;">${labToDisplay || '-'}</span><br><span style="font-size: 12px;">${defaultRoom}</span>`;
                    }
                    const dataSlotAttr = labToDisplay ? `data-slot="${labToDisplay}"` : '';
                    trLab.innerHTML += `<td colspan="${colspanValue}" ${dataSlotAttr}>${cellContent}</td>`;
                });
                tbody.appendChild(trLab);
            });

            // Re-setup drag and drop if enabled
            if (isDragAndDropEnabled) {
                setupDragAndDrop();
            }
        }


        function submitTimetable() {
            const name = document.getElementById('student-name').value;
            const enrollment = document.getElementById('student-enrollment').value;
            const course = document.getElementById('student-course').value;

            if (!name || !enrollment || !course) {
                displayErrorModal(["Please fill in all student details"]);
                return;
            }

            if (validateSelections()) {
                return;
            }

            const modal = document.getElementById('modal');
            const modalTitle = modal.querySelector('.modal-content h2');
            const studentInfoDiv = document.getElementById('modal-student-info');
            const timetableInModal = document.getElementById('modal-timetable');

            if(modalTitle) modalTitle.textContent = 'Final Timetable';
            if(studentInfoDiv) {
                studentInfoDiv.innerHTML = `
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Enrollment Number:</strong> ${enrollment}</p>
                    <p><strong>Course:</strong> ${course}</p>
                `;
            }
            if(timetableInModal) timetableInModal.style.display = '';

            renderTimetable(true);
            modal.style.display = 'flex';
            
            // Clear draft after successful submission
            const studentId = sessionStorage.getItem('loggedInUserId');
            const draftKey = `student_draft_${studentId}`;
            localStorage.removeItem(draftKey);
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }

        // Draft management functions
        function saveToLocalStorage() {
            const studentId = sessionStorage.getItem('loggedInUserId');
            const draftKey = `student_draft_${studentId}`;
            const draftData = {
                studentId: studentId,
                timetableData: timetableData,
                studentInfo: {
                    name: document.getElementById('student-name').value,
                    enrollment: document.getElementById('student-enrollment').value,
                    course: document.getElementById('student-course').value
                },
                timestamp: new Date().toISOString()
            };
            localStorage.setItem(draftKey, JSON.stringify(draftData));
        }

        function autoSaveDraft() {
            saveToLocalStorage();
            console.log('Auto-saved draft');
        }

        // Global functions for draft management
        window.getStudentDraftData = function() {
            return {
                studentId: sessionStorage.getItem('loggedInUserId'),
                timetableData: timetableData,
                studentInfo: {
                    name: document.getElementById('student-name').value,
                    enrollment: document.getElementById('student-enrollment').value,
                    course: document.getElementById('student-course').value
                },
                timestamp: new Date().toISOString()
            };
        };

        window.loadStudentDraft = function(draftData) {
            if (draftData.timetableData) {
                timetableData = draftData.timetableData;
                renderTimetable();
                console.log('Draft loaded successfully');
            }
            if (draftData.studentInfo) {
                document.getElementById('student-name').value = draftData.studentInfo.name || '';
                document.getElementById('student-enrollment').value = draftData.studentInfo.enrollment || '';
                document.getElementById('student-course').value = draftData.studentInfo.course || '';
            }
        };

        window.clearStudentSelections = function() {
            timetableData = {};
            renderTimetable();
            saveToLocalStorage();
        };

        // Drag and Drop Functions
        function enableDragAndDrop() {
            isDragAndDropEnabled = true;
            document.getElementById('drag-status').textContent = 'Drag & Drop: Enabled';
            document.getElementById('drag-status').style.color = '#28a745';
            setupDragAndDrop();
        }

        function disableDragAndDrop() {
            isDragAndDropEnabled = false;
            document.getElementById('drag-status').textContent = 'Drag & Drop: Disabled';
            document.getElementById('drag-status').style.color = '#6c757d';
            cleanupDragAndDrop();
        }

        function clearAllSelections() {
            timetableData = {};
            renderTimetable();
            renderSubjectSelectors();
            saveToLocalStorage();
            alert('All selections cleared!');
        }

        function setupDragAndDrop() {
            // Make subject selectors draggable
            const theoryCourseFacultySelect = document.getElementById('theory-course-faculty-select');
            const labSelect = document.getElementById('slot-lab');
            
            if (theoryCourseFacultySelect) {
                theoryCourseFacultySelect.addEventListener('dragstart', handleDragStart);
                theoryCourseFacultySelect.addEventListener('dragend', handleDragEnd);
                theoryCourseFacultySelect.draggable = true;
                theoryCourseFacultySelect.classList.add('draggable');
            }
            
            if (labSelect) {
                labSelect.addEventListener('dragstart', handleDragStart);
                labSelect.addEventListener('dragend', handleDragEnd);
                labSelect.draggable = true;
                labSelect.classList.add('draggable');
            }

            // Make timetable cells droppable
            const timetableBody = document.getElementById('timetable-body');
            if (timetableBody) {
                const cells = timetableBody.querySelectorAll('td');
                cells.forEach(cell => {
                    cell.addEventListener('dragover', handleDragOver);
                    cell.addEventListener('dragenter', handleDragEnter);
                    cell.addEventListener('dragleave', handleDragLeave);
                    cell.addEventListener('drop', handleDrop);
                    cell.classList.add('timetable-cell');
                });
            }
        }

        function cleanupDragAndDrop() {
            // Remove drag event listeners
            const theoryCourseFacultySelect = document.getElementById('theory-course-faculty-select');
            const labSelect = document.getElementById('slot-lab');
            
            if (theoryCourseFacultySelect) {
                theoryCourseFacultySelect.removeEventListener('dragstart', handleDragStart);
                theoryCourseFacultySelect.removeEventListener('dragend', handleDragEnd);
                theoryCourseFacultySelect.draggable = false;
                theoryCourseFacultySelect.classList.remove('draggable');
            }
            
            if (labSelect) {
                labSelect.removeEventListener('dragstart', handleDragStart);
                labSelect.removeEventListener('dragend', handleDragEnd);
                labSelect.draggable = false;
                labSelect.classList.remove('draggable');
            }

            // Remove drop event listeners
            const cells = document.querySelectorAll('.timetable-cell');
            cells.forEach(cell => {
                cell.removeEventListener('dragover', handleDragOver);
                cell.removeEventListener('dragenter', handleDragEnter);
                cell.removeEventListener('dragleave', handleDragLeave);
                cell.removeEventListener('drop', handleDrop);
                cell.classList.remove('timetable-cell', 'drag-over', 'valid-drop', 'invalid-drop');
            });

            // Clean up drag preview
            if (dragPreview) {
                document.body.removeChild(dragPreview);
                dragPreview = null;
            }
        }

        function handleDragStart(e) {
            if (!isDragAndDropEnabled) return;
            
            draggedElement = e.target;
            const selectedValue = e.target.value;
            
            if (!selectedValue || selectedValue === '') {
                e.preventDefault();
                return;
            }
            
            const [slotKey, combinedSubjectFacultyString] = selectedValue.split('|');
            
            dragData = {
                slotKey: slotKey,
                value: combinedSubjectFacultyString,
                type: e.target.getAttribute('data-type')
            };
            
            e.target.classList.add('dragging');
            
            // Create drag preview
            dragPreview = document.createElement('div');
            dragPreview.className = 'drag-preview';
            dragPreview.textContent = `${slotKey}: ${combinedSubjectFacultyString}`;
            document.body.appendChild(dragPreview);
            
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', JSON.stringify(dragData));
        }

        function handleDragEnd(e) {
            if (!isDragAndDropEnabled) return;
            
            e.target.classList.remove('dragging');
            
            // Clean up drag preview
            if (dragPreview) {
                document.body.removeChild(dragPreview);
                dragPreview = null;
            }
            
            // Clear all drag-over states
            const cells = document.querySelectorAll('.timetable-cell');
            cells.forEach(cell => {
                cell.classList.remove('drag-over', 'valid-drop', 'invalid-drop');
            });
            
            draggedElement = null;
            dragData = null;
        }

        function handleDragOver(e) {
            if (!isDragAndDropEnabled) return;
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        }

        function handleDragEnter(e) {
            if (!isDragAndDropEnabled) return;
            e.preventDefault();
            e.target.classList.add('drag-over');
        }

        function handleDragLeave(e) {
            if (!isDragAndDropEnabled) return;
            e.target.classList.remove('drag-over', 'valid-drop', 'invalid-drop');
        }

        function handleDrop(e) {
            if (!isDragAndDropEnabled) return;
            e.preventDefault();
            
            const cell = e.target;
            const slotKey = cell.getAttribute('data-slot');
            
            if (!slotKey) {
                cell.classList.add('invalid-drop');
                setTimeout(() => cell.classList.remove('invalid-drop'), 1000);
                return;
            }
            
            try {
                const data = JSON.parse(e.dataTransfer.getData('text/plain'));
                
                // Validate drop
                if (validateDrop(data, slotKey)) {
                    cell.classList.add('valid-drop');
                    
                    // Apply the selection
                    const combinedSubjectFaculty = data.value;
                    handleSlotChange(slotKey, combinedSubjectFaculty);
                    
                    setTimeout(() => cell.classList.remove('valid-drop'), 1000);
                } else {
                    cell.classList.add('invalid-drop');
                    setTimeout(() => cell.classList.remove('invalid-drop'), 1000);
                }
            } catch (error) {
                console.error('Error processing drop:', error);
                cell.classList.add('invalid-drop');
                setTimeout(() => cell.classList.remove('invalid-drop'), 1000);
            }
            
            cell.classList.remove('drag-over');
        }

        function validateDrop(dragData, targetSlot) {
            if (!dragData || !targetSlot) return false;
            
            // Check if the target slot is valid for the dragged data
            const targetSlotInfo = slotMapping[targetSlot];
            const sourceSlotInfo = slotMapping[dragData.slotKey];
            
            if (!targetSlotInfo || !sourceSlotInfo) return false;
            
            // Check if slots are of the same type (Theory vs Lab)
            if (targetSlotInfo.type !== sourceSlotInfo.type) {
                return false;
            }
            
            // Check for time conflicts
            const conflicts = checkTimeConflicts(targetSlot, dragData.value);
            if (conflicts.length > 0) {
                return false;
            }
            
            return true;
        }

        function checkTimeConflicts(targetSlot, newSelection) {
            const conflicts = [];
            const targetSlotInfo = slotMapping[targetSlot];
            
            if (!targetSlotInfo) return conflicts;
            
            // Check against all existing selections
            Object.keys(timetableData).forEach(slotKey => {
                if (slotKey === targetSlot) return; // Skip the target slot itself
                
                const existingData = timetableData[slotKey];
                if (!existingData || !existingData.subject || existingData.subject === 'None') return;
                
                const existingSlotInfo = slotMapping[slotKey];
                if (!existingSlotInfo) return;
                
                // Check if time slots overlap
                if (doTimeSlotsOverlap(targetSlotInfo, existingSlotInfo)) {
                    // Check if faculty conflicts
                    const newFaculty = extractFacultyFromSelection(newSelection);
                    const existingFaculty = existingData.faculty;
                    
                    if (newFaculty === existingFaculty) {
                        conflicts.push({
                            slot: slotKey,
                            reason: 'Faculty conflict',
                            faculty: existingFaculty
                        });
                    }
                }
            });
            
            return conflicts;
        }

        function extractFacultyFromSelection(selection) {
            if (!selection || selection === 'None') return '';
            
            // Extract faculty name from selection string
            // Format: "Subject - Faculty"
            const parts = selection.split(' - ');
            return parts.length > 1 ? parts[1] : '';
        }



        init();
    
