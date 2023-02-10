export function guid(prefix) {
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxyxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
    return prefix ? prefix + "-" + uuid : uuid;
}