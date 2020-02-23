/**
 * Utilities for date and time
 */
export class DateTimeUtil {

    public static getNextDay(): Date {
        new Date().getMonth()
        return new Date(new Date().setDate(1));
    }
}
