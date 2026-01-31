// Firebase Configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuoYfArP0-ifxYZ_UKgM7_oAf0dzolANs",
  authDomain: "student-management-syste-b952d.firebaseapp.com",
  databaseURL: "https://student-management-syste-b952d-default-rtdb.firebaseio.com",
  projectId: "student-management-syste-b952d",
  storageBucket: "student-management-syste-b952d.firebasestorage.app",
  messagingSenderId: "116847902508",
  appId: "1:116847902508:web:55c6e02f9c775573357689",
  measurementId: "G-XJLYYQK9VZ"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const storage = firebase.storage();

// Firebase Database Helper Functions
const firebaseDb = {
    // Students operations
    getStudents: (callback) => {
        const studentsRef = database.ref('students');
        studentsRef.on('value', (snapshot) => {
            const data = snapshot.val();
            const students = data ? Object.keys(data).map(key => ({
                id: key,
                ...data[key]
            })) : [];
            callback(students);
        });
        return () => studentsRef.off('value');
    },

    addStudent: async (student) => {
        const newStudentRef = database.ref('students').push();
        await newStudentRef.set(student);
        return newStudentRef.key;
    },

    updateStudent: async (id, student) => {
        const studentRef = database.ref(`students/${id}`);
        await studentRef.set(student);
    },

    deleteStudent: async (id) => {
        const studentRef = database.ref(`students/${id}`);
        await studentRef.remove();
    },

    // Grades operations
    getGrades: (callback) => {
        const gradesRef = database.ref('grades');
        gradesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            const grades = data ? Object.keys(data).map(key => ({
                id: key,
                ...data[key]
            })) : [];
            callback(grades);
        });
        return () => gradesRef.off('value');
    },

    setGrades: async (grades) => {
        const gradesRef = database.ref('grades');
        // Clear existing and set new
        await gradesRef.remove();
        for (const grade of grades) {
            await database.ref('grades').push().set(grade);
        }
    },

    // Clubs operations
    getClubs: (callback) => {
        const clubsRef = database.ref('clubs');
        clubsRef.on('value', (snapshot) => {
            const data = snapshot.val();
            const clubs = data ? Object.keys(data).map(key => ({
                id: key,
                ...data[key]
            })) : [];
            callback(clubs);
        });
        return () => clubsRef.off('value');
    },

    setClubs: async (clubs) => {
        const clubsRef = database.ref('clubs');
        await clubsRef.remove();
        for (const club of clubs) {
            await database.ref('clubs').push().set(club);
        }
    },

    // Houses operations
    getHouses: (callback) => {
        const housesRef = database.ref('houses');
        housesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            const houses = data ? Object.keys(data).map(key => ({
                id: key,
                ...data[key]
            })) : [];
            callback(houses);
        });
        return () => housesRef.off('value');
    },

    setHouses: async (houses) => {
        const housesRef = database.ref('houses');
        await housesRef.remove();
        for (const house of houses) {
            await database.ref('houses').push().set(house);
        }
    },

    // Academic Years operations
    getAcademicYears: (callback) => {
        const yearsRef = database.ref('academicYears');
        yearsRef.on('value', (snapshot) => {
            const data = snapshot.val();
            const years = data ? Object.values(data) : [];
            callback(years);
        });
        return () => yearsRef.off('value');
    },

    setAcademicYears: async (years) => {
        const yearsRef = database.ref('academicYears');
        await yearsRef.remove();
        for (let i = 0; i < years.length; i++) {
            await database.ref(`academicYears/${i}`).set(years[i]);
        }
    }

};
