export const digitalRoot = (n:number):number => {
  
    const textArray = n.toString().split("");
    const sum = textArray.reduce (
      (accu, curr) => accu + Number(curr), 0
      );
    return sum < 10 ? sum : digitalRoot(sum);
  };