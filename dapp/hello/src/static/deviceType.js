
function isMoible (UA) {
    return !!/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(UA);
}

export function deviceType (UA) {
    if (isMoible(UA)) {
        return {

            type: 'Mobile'

        };
    } else {
        return {

            type: 'pc'

        };
    }
}
