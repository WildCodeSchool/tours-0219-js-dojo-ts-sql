import { Query } from './query';
import * as faker from 'faker';

test('Check if methods exits', () => {
    const query = new Query();
    expect(query.select).toBeDefined();
    expect(query.from).toBeDefined();
    expect(query.execute).toBeDefined();
})

test('Query with primitives', () => {
    const query = new Query();
    const numbers = [];

    for (let i = 0; i < faker.random.number(20); i++) {
        numbers.push(faker.random.number(99))
    }

    const result = query.select().from(numbers).execute()

    expect(result).toBeDefined();
    expect(result).toEqual(numbers);
})

test('Query with objects', () => {
    const query = new Query();
    const students = []

    for (let i = 0; i < faker.random.number(10); i++) {
        students.push(
            {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                age: faker.random.number(99)
            }
        )
    }

    const result = query.select().from(students).execute()

    expect(result).toBeDefined();
    expect(result).toEqual(students);
})

test('Query with objects and select', () => {

})