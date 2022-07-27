interface PersonalData {
   name: string;
   lastname: string;
   email: string;
   password: string;
   role: string;
   birthday: string;
   phone_number?: number;
}

interface InitialState {
   personalData: PersonalData;
}

export const initialState: InitialState = {
   personalData: {
      name: '',
      lastname: '',
      email: '',
      password: '',
      role: '',
      birthday: '',
      phone_number: 0,
   },
};
