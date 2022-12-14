interface Name {
  firstName: string;
  lastName: string;
}

interface Parents {
  fatherName: string;
  motherName: string;
}

export interface UserFormValues {
  firstName: string;
  age: number;
  parents: Parents;
  brothers: Array<Name>;
  hasSun: boolean;
}
