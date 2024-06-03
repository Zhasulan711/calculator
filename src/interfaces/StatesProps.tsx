export interface StatesProps {
  additionState: boolean;
  setAdditionState: React.Dispatch<React.SetStateAction<boolean>>;
  subtractionState: boolean;
  setSubtractionState: React.Dispatch<React.SetStateAction<boolean>>;
  multiplicationState: boolean;
  setMultiplicationState: React.Dispatch<React.SetStateAction<boolean>>;
  divisionState: boolean;
  setDivisionState: React.Dispatch<React.SetStateAction<boolean>>;
}
