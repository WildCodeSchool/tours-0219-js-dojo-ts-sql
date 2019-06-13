# Dojo - Sql made with TS

Implémentation du language SQL en typescript à travers la classe `Query`.

```typescript
const numbers = [1, 2, 3];
new Query().select().from(numbers).execute();
// should return [1, 2, 3]
```

```typescript
const students = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 29
    },
    {
        firstName: 'Marie',
        lastName: 'Doe',
        age: 36
    }
]
new Query().select().from(students).execute();
/* should return [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 29
    },
    {
        firstName: 'Marie',
        lastName: 'Doe',
        age: 36
    }
]*/
```

```typescript
const students = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 29
    },
    {
        firstName: 'Marie',
        lastName: 'Doe',
        age: 36
    }
]
new Query().select('firstName').from(students).execute();
/* should return [
    {firstName :'John'},
    {firstName :'Marie'},
]*/
```

```typescript
const students = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 29
    },
    {
        firstName: 'Marie',
        lastName: 'Doe',
        age: 36
    }
]
new Query().select('firstName', 'lastName').from(students).execute();
/* should return [
    {firstName :'John', lastName: 'Doe'},
    {firstName :'Marie', lastName: 'Doe'},
]*/
```