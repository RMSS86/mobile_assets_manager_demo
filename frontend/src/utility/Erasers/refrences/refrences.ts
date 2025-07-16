///initial values descrives the tyoe for hinerence
///interface
// interface _Iprops {}

//////OM HOOHS/////////OM HOOHS/////////OM HOOHS////////OM HOOHS////////
//////OM HOOHS/////////OM HOOHS/////////OM HOOHS////////OM HOOHS////////
//////OM HOOHS/////////OM HOOHS/////////OM HOOHS////////OM HOOHS////////

//////////////////////////////////////////////useSTATE//////////////////
type User = {
  sessionId: string;
  name: string;
};
const [user, serUser] = useState<User | null>(null);
const name = user?.name;

//////////////////////////////////////////////useREF//////////////////
const _ref = useRef<HTMLElement | HTMLButtonElement>(null);

// return <button ref={_ref}></button>;

const buttonTextOpts = [
  "click me!",
  "cick me Again!",
  "do not click me!",
] as const; ///returns the list elements as | separated | text insntead of string[]

{
  buttonTextOpts.map((option) => {
    return option;
  });
}

//////////OMIT///////OMIT/////////OMIT///////OMIT///////OMIT///////OMIT///////
//////////OMIT///////OMIT/////////OMIT///////OMIT///////OMIT///////OMIT///////
///you ca nuse a  type and create another one exlcuding certain ones
type Guest = Omit<User, "name">;

//////LOCAL STORAGE/////LOCAL STORAGE/////LOCAL STORAGE/////LOCAL STORAGE/////
//////LOCAL STORAGE/////LOCAL STORAGE/////LOCAL STORAGE/////LOCAL STORAGE/////
type ButtonColor = "orange" | "lightblue" | "black" | "white";

useEffect(() => {
  const previousButtonColor = localStorage.getItem(
    "buttonCOlor"
  ) as ButtonColor;
  console.log(previousButtonColor);
}, []);

/////GENERICS///////GENERICS///////GENERICS///////GENERICS///////GENERICS///////
/////GENERICS///////GENERICS///////GENERICS///////GENERICS///////GENERICS///////
//to make sure a function does what is sais it does the string[] is the return val
const _ConvertToArray = (value: string): string[] => {
  return [value];
};

///GENERICS IN Fucntions
///<T,> type parameter with comma in arrow to prevent React to make it a JSX param
const convertToArray = <T>(value: T): T[] => {
  return [value];
};
/////noral function with a Typed parameter <T>
function _ConvertToArray_<T>(value: T): T[] {
  return [value];
}

convertToArray(5);
_ConvertToArray_("hey there!");

////GENERICS IN types
type _buttonProps<T> = {
  countValue: T;
  countHisotry: T[];
};

export function Button<T>({ countValue, countHistory }: _buttonProps<T>) {
  return <button>click me!</button>;
}

////////////FETCH DATA////FETCH DATA////FETCH DATA////FETCH DATA////FETCH DATA///
////////////FETCH DATA////FETCH DATA////FETCH DATA////FETCH DATA////FETCH DATA///
useEffect(() => {
  fetch("https:trax.com/api/v1/tours")
    .then((response) => response.json())
    .then((data: unknown) => console.log(data));
}, []);

///ts-reset library
