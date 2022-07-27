interface CarData {
   marca: string;
   modelo: string;
   año: number;
   color: string;
   kilometros: number;
   precio: number;
   status: string;
}

interface InitialState {
   allCars: Array<CarData>;
}

export const initialState: InitialState = {
   allCars: [],
};
