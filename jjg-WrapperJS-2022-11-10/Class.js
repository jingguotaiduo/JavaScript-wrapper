    // Basic Person class

    class Person {
      constructor(first, last, age, gender, interests) {
        this.name = {
          first,
          last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
      }
      
      get getName() {
         return this.name;
      }
      greeting() {
        console.log(`Hi! I'm ${this.name.first}`);
      };

      farewell() {
        console.log(`${this.name.first} has left the building. Bye for now!`);
      };
    }
/*
// Instantiate Person

    let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
    han.greeting();
    // Hi! I'm Han

    let leia = new Person('Leia', 'Organa', 19, 'female' ['Government']);
    leia.farewell();
    console.log(leia.getName);
    // Leia has left the building. Bye for now
*/

class Teacher extends Person {
      constructor(first, last, age, gender, interests, subject, grade) {
        super(first, last, age, gender, interests);

        // subject and grade are specific to Teacher
        this.subject = subject;
        this.grade = grade;
      }
      get subject() {
        return this._subject;
      }

      set subject(newSubject) {
        this._subject = newSubject;
      }
    }

/*
    // Instantiate Teacher

    let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
    snape.greeting(); // Hi! I'm Severus.
    snape.farewell(); // Severus has left the building. Bye for now.
    console.log(snape.age) // 58
    console.log(snape.subject) // Dark arts

    // Change the value
    snape.subject = "Balloon animals" // Sets subject to "Balloon animals"

    // Check it again and see if it matches the new value
    console.log(snape.subject) // Returns "Balloon animals"
*/

export { Person, Teacher };