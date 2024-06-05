export interface StatesProps {
  additionState: boolean;
  subtractionState: boolean;
  multiplicationState: boolean;
  divisionState: boolean;
  setAdditionState: React.Dispatch<React.SetStateAction<boolean>>;
  setSubtractionState: React.Dispatch<React.SetStateAction<boolean>>;
  setMultiplicationState: React.Dispatch<React.SetStateAction<boolean>>;
  setDivisionState: React.Dispatch<React.SetStateAction<boolean>>;
}
