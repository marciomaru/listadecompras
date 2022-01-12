export function handleDate(date: Date): string {
    const day: string = date.getDate().toString();
    const mouth: string = (date.getMonth() + 1).toString();
    const year: string = date.getFullYear().toString();
    var dateFormated: string = day + ' / ' + mouth + ' / ' + year;
    return dateFormated;
}