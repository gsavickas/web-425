/**
 * Title: person.class.ts
 * Author: Grayton Savickas
 * Date: 30 May 2021
 * Description: Person class that implements a Person interface
 */
import { Iperson } from "./person-interface";

class Person implements Iperson {

  firstName: string;
  lastName: string;

  constructor (firstName:string, lastName:string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let myName = new Person("Grayton", "Savickas")
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
