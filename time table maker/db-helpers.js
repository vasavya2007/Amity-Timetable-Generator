(function exposeDraftHelpers() {
  async function writeDoc(collectionName, docId, data) {
    if (!window.dbEnabled || !window.db) return false;
    try {
      await window.db.collection(collectionName).doc(docId).set(data, { merge: true });
      return true;
    } catch (e) {
      console.warn(`[DB] write ${collectionName}/${docId} failed`, e);
      return false;
    }
  }

  async function readDoc(collectionName, docId) {
    if (!window.dbEnabled || !window.db) return null;
    try {
      const snap = await window.db.collection(collectionName).doc(docId).get();
      return snap.exists ? snap.data() : null;
    } catch (e) {
      console.warn(`[DB] read ${collectionName}/${docId} failed`, e);
      return null;
    }
  }

  async function deleteDoc(collectionName, docId) {
    if (!window.dbEnabled || !window.db) return false;
    try {
      await window.db.collection(collectionName).doc(docId).delete();
      return true;
    } catch (e) {
      console.warn(`[DB] delete ${collectionName}/${docId} failed`, e);
      return false;
    }
  }

  // Student
  window.writeStudentDraft = (studentId, data) => writeDoc('studentDrafts', studentId, data);
  window.readStudentDraft = (studentId) => readDoc('studentDrafts', studentId);
  window.deleteStudentDraft = (studentId) => deleteDoc('studentDrafts', studentId);

  // Faculty
  window.writeFacultyDraft = (facultyId, data) => writeDoc('facultyDrafts', facultyId, data);
  window.readFacultyDraft = (facultyId) => readDoc('facultyDrafts', facultyId);
  window.deleteFacultyDraft = (facultyId) => deleteDoc('facultyDrafts', facultyId);
})();

