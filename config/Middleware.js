import uniqueId from 'short-unique-id';
export default class MiddleWare {
    returnFunction(res, data) {
        return res.json({
            data
        })
    }

    generateUniqueId(digit, type = "number") {
        const uid = new uniqueId({
            length: digit,
            dictionary: type
        });
        return uid.rnd();
    }
}