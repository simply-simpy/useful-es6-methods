export default function ReverseString(myReverseString){
    myReverseString= myReverseString.split("");
    myReverseString.reverse();
    myReverseString = myReverseString.join('');
    return myReverseString
}
