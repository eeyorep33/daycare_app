import {
    addClassroom, ADD_CLASSROOM, addStudent, ADD_STUDENT, addTeacher, ADD_TEACHER,
    addFeeding, ADD_FEEDING, addDiapering, ADD_DIAPERING,
    addMeds, ADD_MEDS, addComments, ADD_COMMENTS, addNap, ADD_NAP, ADD_SUPPLIES, addSupplies,
    addPlayTime, ADD_PLAYTIME
} from '../actions/index'

describe('testing action creators', () => {
    it('testing add classroom action creator', () => {
        const classroom = { id: 1, name: 'classroom' }
        const expectedResult = { type: ADD_CLASSROOM, classroom: classroom }
        console.log(addClassroom(classroom))
        expect(addClassroom(classroom)).toEqual(expectedResult)
    })
    it('testing add student action creator', () => {
        const student = { id: 1, name: 'chris', email: 'whatever@gmail.com', status: 'out' }
        const expectedResult = { type: ADD_STUDENT, student: student }
        console.log(addStudent(student))
        expect(addStudent(student)).toEqual(expectedResult)
    })
    it('testing add teacher action creator', () => {
        const teacher = { id: 1, name: 'Rob', initials: 'RF', classroom_id: 4, status: 'out' }
        const expectedResult = { type: ADD_TEACHER, teacher: teacher }
        console.log(addTeacher(teacher))
        expect(addTeacher(teacher)).toEqual(expectedResult)
    })
    it('testing add diapering action creator', () => {
        const diapering = { id: 1, type: 'B', time: '10:00', initials: 'TG', report_id: 2 }
        const expectedResult = { type: ADD_DIAPERING, diapering: diapering }
        console.log(addDiapering(diapering))
        expect(addDiapering(diapering)).toEqual(expectedResult)
    })
    it('testing add feeding action creator', () => {
        const feeding = { id: 1, food: 'hot dog', amount: 'most', report_id: 4, time: '9:00' }
        const expectedResult = { type: ADD_FEEDING, feeding: feeding }
        console.log(addFeeding(feeding))
        expect(addFeeding(feeding)).toEqual(expectedResult)
    })
    it('testing add nap action creator', () => {
        const nap = { id: 1, startTime: '10:23', stopTime: '11:45', report_id: 4 }
        const expectedResult = { type: ADD_NAP, nap: nap }
        console.log(addNap(nap))
        expect(addNap(nap)).toEqual(expectedResult)
    })
    it('testing add meds action creator', () => {
        const meds = { id: 1, name: 'amoxicillan', time: '10:30', amount: '2mL', report_id: 2 }
        const expectedResult = { type: ADD_MEDS, meds: meds }
        console.log(addMeds(meds))
        expect(addMeds(meds)).toEqual(expectedResult)
    })
    it('testing add supplies action creator', () => {
        const supplies = { id: 1, supply_item: 'diapers', report_id: 4 }
        const expectedResult = { type: ADD_SUPPLIES, supplies: supplies }
        console.log(addSupplies(supplies))
        expect(addSupplies(supplies)).toEqual(expectedResult)
    })
    it('testing add comments action creator', () => {
        const comment = { id: 1, comment: 'fussy', report_id: 2 }
        const expectedResult = { type: ADD_COMMENTS, comment: comment }
        console.log(addComments(comment))
        expect(addComments(comment)).toEqual(expectedResult)
    })
    it('testing add play time action creator', () => {
        const playTime = { id: 1, type: 'cognitive skills', activity: 'whatever', report_id: 4 }
        const expectedResult = { type: ADD_PLAYTIME, playTime: playTime }
        console.log(addPlayTime(playTime))
        expect(addPlayTime(playTime)).toEqual(expectedResult)
    })
})