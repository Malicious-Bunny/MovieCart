
export default function test(gip:string) : void {
    interface Person<name, age> {
        name: name;
        age: age;
    }
    const bambi : Person<string, number> = {
        name: "Bambi",
        age: 1
    }
   const Bibi : string = "Bibi";
    console.log(bambi);
    console.log(Bibi);
    console.log(gip);
}