const getDeviceToken = () => {
    let deviceToken = localStorage.getItem("DEVICE_TOKEN")

    if (!deviceToken) {
        deviceToken = createDeviceToken();
    }
    return deviceToken
} 

const createDeviceToken = () => {
        var array = new Uint8Array(25);
        window.crypto.getRandomValues(array);
        let deviceToken = Array.prototype.map
            .call(array, x => ("00" + x.toString(16)).slice(-2))
            .join("");
        localStorage.setItem("DEVICE_TOKEN", deviceToken);

        return deviceToken
}

export default getDeviceToken