export type validity = boolean | "+2"

// export class TimeResult {
//     time: string | undefined;
//     scramble: string | undefined;
//     valid: validity = true;

//     constructor(time: string, scramble: string|undefined, valid: validity) {
//         this.time = time;
//         this.scramble = scramble;
//         this.valid = valid;
//     }
// }

export type TimeResult = {
    time: string | undefined;
    scramble: string | undefined;
    valid: validity;
}